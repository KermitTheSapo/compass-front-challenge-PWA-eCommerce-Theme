import Coupon from "../models/Coupon"

class couponController {
  // @ts-ignore
  static getCoupon = (req, res) => {
    // @ts-ignore
    Coupon.find((err, resCoupon) => {
      res.status(200).json(resCoupon)
    })
  }
  // @ts-ignore
  static getCouponById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Coupon.findById(id, (err, resCoupon) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Coupon id not found` })
      } else {
        res.status(200).send(resCoupon)
      }
    })
  }
  // @ts-ignore
  static postCoupon = async (req, res) => {
    const newCoupon = new Coupon(req.body)
    newCoupon.save()
    return res.status(200).send({ message: "registered Coupon" })
  }
  // @ts-ignore
  static putCoupon = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Coupon.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Coupon updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating Coupon: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteCoupon = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Coupon.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Coupon deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting Coupon: ${err}` })
      }
    })
  }
}

export default couponController
