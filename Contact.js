class Contacts {
    constructor () {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    getContactById(id){
        return this.contacts.find(c => c.id === id)
    }

    createNewContact(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    updateContactById(id, updatedData) {
        const index = this.contacts.findIndex(contact => contact.id === id)
        this.contacts[index].name = updatedData.name || this.contacts[index].name 
        this.contacts[index].mobile = updatedData.mobile || this.contacts[index].mobile 
        this.contacts[index].email = updatedData.email || this.contacts[index].email 

        return this.contacts[index]
    }

    deleteContactById(id) {
        let deleteObj = this.contacts.find(con => con.id === id)
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return deleteObj
    }
}

module.exports = new Contacts()
