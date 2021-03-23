const axios = require('axios').default;


async function getMessages(filter){

  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${filter}`);
    return response;
    
  } catch (error) {
    console.error(error);
  }
} 

async function getProductById(filter){
    
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${filter}`);

    return response;
    
  } catch (error) {
    console.error(error);
  }
} 

async function getProductDescriptionById(filter){
    
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${filter}/description`);
    return response;
    
  } catch (error) {
    console.error(error);
  }
} 

module.exports = {
    list: getMessages,
    product: getProductById,
    description: getProductDescriptionById
}