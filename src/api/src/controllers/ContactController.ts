import Contact from "../models/Contact"

class ContactController {
  // @ts-ignore
  static getContact = (req, res) => {
    // @ts-ignore
    Contact.find((err, resContact) => {
      res.status(200).json(resContact)
    })
  }
  // @ts-ignore
  static getContactById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Contact.findById(id, (err, resContact) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Contact id not found` })
      } else {
        res.status(200).send(resContact)
      }
    })
  }
  // @ts-ignore
  static postContact = async (req, res) => {
    const newContact = new Contact(req.body)
    newContact.save()
    return res.status(200).send({ message: "registered Contact" })
  }
  // @ts-ignore
  static putContact = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Contact.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Contact updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating Contact: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteContact = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Contact.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Contact deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting Contact: ${err}` })
      }
    })
  }
}

export default ContactController
