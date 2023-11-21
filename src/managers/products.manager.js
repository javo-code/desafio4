import { ProductModel } from "../models/product.model.js";

export default class ProductManager {

  async getAll() {
    try {
      return await ProductModel.find({});
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      return await ProductModel.create(obj);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, obj) {
    try {
      return await ProductModel.findByIdAndUpdate({ _id: id }, obj, {
        new: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }

  async getProductsByLimit(limit) {
    try {
      const products = await this.getProducts();
      if (!limit || limit >= products.length) return products;
      else return products.slice(0, limit);
    } catch (error) {
      console.log(error);
    }
  }
}

const productManager = new ProductManager("./products.json")

export { productManager }
