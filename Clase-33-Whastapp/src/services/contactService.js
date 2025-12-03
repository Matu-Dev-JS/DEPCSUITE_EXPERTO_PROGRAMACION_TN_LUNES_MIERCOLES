import contacts_data from "../data/contactData";

function getContactsList (){
    return contacts_data
}

function getContactById (contact_id){
    for(const contact of contacts_data){
        if(Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
}

export {getContactsList, getContactById}