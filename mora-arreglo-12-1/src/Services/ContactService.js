import contacts_data from "../data/contactData";
//Comunicacion con ContactData
function getContactsList (){
    return contacts_data
    //devuelve lista de contactos
}

function getContactById (contact_id){
    //reocorre lista de contactos y realiza un chequeo
    for(const contact of contacts_data){
        if(Number(contact.contact_id) === Number(contact_id)){
            return contact
        }
    }
}

export {getContactsList, getContactById}