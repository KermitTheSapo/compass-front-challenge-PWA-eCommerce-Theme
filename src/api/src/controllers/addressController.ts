import Address from "../models/Address"

class addressController {
  // @ts-ignore
  static getAddress = (req, res) => {
    // @ts-ignore
    Address.find((err, resAddress) => {
      res.status(200).json(resAddress)
    })
  }
  // @ts-ignore
  static getAddressById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Address.findById(id, (err, resAddress) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Address id not found` })
      } else {
        res.status(200).send(resAddress)
      }
    })
  }
  // @ts-ignore
  static postAddress = async (req, res) => {
    const newAddress = new Address(req.body)
    newAddress.save()
    return res.status(200).send({ message: "registered Address" })
  }
  // @ts-ignore
  static putAddress = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Address.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Address updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating Address: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteAddress = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Address.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Address deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting Address: ${err}` })
      }
    })
  }
}

export default addressController
