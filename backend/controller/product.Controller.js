import Products from "../model/product.Model.js"

export const uploadProducts = async (req, res) => {
    const products = req.body
    console.log(products)
    const newProducts = new Products(products)
    try {
        await newProducts.save()
        res.status(201).json(newProducts)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}