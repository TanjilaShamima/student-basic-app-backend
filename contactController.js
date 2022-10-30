const contacts = require('./Contact')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createNewContact = (req, res) => {
    let {name, email, phone} = req.body
    contacts.createNewContact({
        name,
        email,
        phone
    })

    res.json(contacts)
}

exports.getContactById = (req, res) => {
    let id = req.params.id
    id= parseInt(id)

    const contact = contacts.getContactById(id)

    res.json(contact)
}

exports.updateContactById = (req, res) => {
    let id = req.params.id
    id = parseInt(id)
    const {name, email, phone } = req.body

    let contact = contacts.updateContactById(id, {name, email, phone})
    res.json(contact)
}

exports.deleteById = (req, res) => {
    let id = req.params.id
    id = parseInt(id)
    const contact = contacts.deleteContactById(id)

    res.json(contact)
}
