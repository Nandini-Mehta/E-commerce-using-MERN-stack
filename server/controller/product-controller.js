
import Products from '../model/productSchema.js'

export const getProducts= async(request, response)=> {
  try{
    const prod = await Products.find({});

    response.status(200).json(prod);
  }catch(error){
    response.status(500).json({message: error.message});
  }
}


export const getProductById= async(request, response)=> {
  try{
    const id = request.params.id;

    const prod = await Products.findOne({'id': id});

    response.status(200).json(prod);
  }catch(error){
    response.status(500).json({message: error.message});
  }
}
