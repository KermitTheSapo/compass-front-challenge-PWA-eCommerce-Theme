import Product from "../models/Product";
//@ts-ignore
const createService = (body) => Product.create(body);
//@ts-ignore
const findAllService = (offset, limit) => Product.find().skip(offset).limit(limit);
//@ts-ignore
const findAllCategory = (offset, limit, type) => Product.find({category: type}).skip(offset).limit(limit)

const countProduct = () => Product.countDocuments()

export {
    createService,
    findAllService,
    countProduct,
    findAllCategory
}
