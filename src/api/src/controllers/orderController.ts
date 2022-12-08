import Order from "../models/Order"

class OrderController {
  // @ts-ignore
  static getOrder = (req, res) => {
    // @ts-ignore
    Order.find((err, resOrder) => {
      res.status(200).json(resOrder)
    })
  }
  // @ts-ignore
  static getOrderById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Order.findById(id, (err, resOrder) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Order id not found` })
      } else {
        res.status(200).send(resOrder)
      }
    })
  }
  // @ts-ignore
  static postOrder = async (req, res) => {
    const newOrder = new Order(req.body)
    newOrder.save()
    return res.status(200).send({ message: "registered Order" })
  }
  // @ts-ignore
  static putOrder = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Order.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Order updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating Order: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteOrder = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Order.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Order deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting Order: ${err}` })
      }
    })
  }
}

export default OrderController
