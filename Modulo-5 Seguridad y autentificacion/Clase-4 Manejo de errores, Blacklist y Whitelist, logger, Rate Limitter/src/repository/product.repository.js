import ServerError from "../helpers/serverError.helper.js";
import Product from "../models/product.model.js";

class ProductRepository {

    async create(
        fk_owner_id,
        {
            title,
            description,
            price,
            stock
        }
    ) {
        try {
            const new_product = await Product.create({
                fk_owner_id,
                title,
                description,
                price,
                stock
            });
            return new_product;
        }
        catch (error) {
            if (error.name === 'ValidationError') {
                throw new ServerError('Error de validacion en el producto', 400)
            }
            throw error
        }
    }

    async findById(product_id) {
        const product_found = await Product.findById(product_id)
        return product_found
    }

    async getAllByOwnerId(owner_id) {
        return await Product.find({ fk_owner_id: owner_id })
    }

    async updateById(product_id, apdate_data) {
        const updated_product = await Product.findByIdAndUpdate(
            product_id,
            apdate_data,
            {
                returnDocument: 'after'
            }
        )
        return updated_product
    }

    async deleteById(product_id) {
        await Product.findByIdAndDelete(product_id)
    }

}

const productRepository = new ProductRepository()
export default productRepository