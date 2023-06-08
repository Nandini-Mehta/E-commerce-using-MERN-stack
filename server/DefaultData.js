import { products } from "./constants/product.js";
import Products from "./model/productSchema.js";

const DefaultData = async() =>{
    try{
        await Products.insertMany(products);

        console.log('Data imported successfully');
    }
    catch(error){
        console.log('Error while inserting data', error.message);
    }
}

export default DefaultData;