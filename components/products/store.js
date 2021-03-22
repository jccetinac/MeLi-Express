const axios = require('axios').default;


async function getMessages(filter){
    
   // Want to use async/await? Add the `async` keyword to your outer function/method.
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${filter}`);
    //console.log(response);
    return response;
    
  } catch (error) {
    console.error(error);
  }

  
} 

async function getProductById(filter){
  console.log('[filter]');
    
  console.log(filter);
   // Want to use async/await? Add the `async` keyword to your outer function/method.
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${filter}`);
    
    //console.log(response);
    return response;
    
  } catch (error) {
    console.error(error);
  }

  
} 

module.exports = {
    list: getMessages,
    product: getProductById
}