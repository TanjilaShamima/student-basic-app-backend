const router = require("express").Router();

const {getAllContacts, createNewContact, updateContactById, getContactById, deleteById} = require('./contactController')



router.get("/:id", getContactById);
router.post("/", createNewContact);
router.put("/:id", updateContactById);
router.delete("/:id", deleteById);
router.get("/", getAllContacts);


module.exports = router;
