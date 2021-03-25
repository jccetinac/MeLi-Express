const axios = require('axios').default;
const CONSTANTS = require('../../utilities/constants');


async function getResults(filter){

  try {
    const response = await axios.get(`${CONSTANTS.LIST.PROTOCOL}${CONSTANTS.LIST.MELI_API_URL}${CONSTANTS.LIST.MELI_PATH_SEARCH}${filter}`);
    return response;
    
  } catch (error) {
    console.error(error);
  }
} 

async function getProductById(filter){
    
  try {
    const response = await axios.get(`${CONSTANTS.LIST.PROTOCOL}${CONSTANTS.LIST.MELI_API_URL}${CONSTANTS.LIST.MELI_PATH_PRODUCT}${filter}`);

    return response;
    
  } catch (error) {
    console.error(error);
  }
} 

async function getProductDescriptionById(filter){
    
  try {
    const response = await axios.get(`${CONSTANTS.LIST.PROTOCOL}${CONSTANTS.LIST.MELI_API_URL}${CONSTANTS.LIST.MELI_PATH_PRODUCT}${filter}/${CONSTANTS.LIST.MELI_PATH_DESCRIPTION}`);
    return response;
    
  } catch (error) {
    console.error(error);
  }
} 

module.exports = {
    list: getResults,
    product: getProductById,
    description: getProductDescriptionById
}