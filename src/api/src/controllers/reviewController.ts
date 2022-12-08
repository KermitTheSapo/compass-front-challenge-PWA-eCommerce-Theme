// import Contact from "../models/Contact"
import Review from "../models/Review"

class ReviewController {
  // @ts-ignore
  static getReview = (req, res) => {
    // @ts-ignore
    Review.find((err, resReview) => {
      res.status(200).json(resReview)
    })
  }
  // @ts-ignore
  static getReviewById = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Review.findById(id, (err, resReview) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Review id not found` })
      } else {
        res.status(200).send(resReview)
      }
    })
  }
  // @ts-ignore
  static postReview = async (req, res) => {
    const newReview = new Review(req.body)
    newReview.save()
    return res.status(200).send({ message: "registered Review" })
  }
  // @ts-ignore
  static putReview = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Review.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Review updated successfully!' })
      } else {
        res.status(500).send({ message: `Error when updating Review: ${err}` })
      }
    })
  }
  // @ts-ignore
  static deleteReview = (req, res) => {
    const id = req.params.id
    // @ts-ignore
    Review.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Review deleted successfully!' })
      } else {
        res.status(500).send({ message: `Error deleting Review: ${err}` })
      }
    })
  }
}

export default ReviewController
