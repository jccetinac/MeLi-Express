const store = require('./store');
const CONST = require('../../utilities/constants');

function getResults(filter){
    return new Promise((resolve, reject)=>{

        if(store.list === null){
                console.error(CONST.LIST.MENSSAGE_NO_PRODUCT);
               return reject(CONST.LIST.NO_RESULTS);       
        };
        
        resolve(store.list(filter).then( resp=> {

            const selectedList= resp.data.results.slice(0,4);
            const categoriesList= resp.data.filters;
            console.log('resp.data.fiters');
            
            console.log(resp.data.filters);
            const newCategoriesList= categoriesList.map( cat=> {
                const newCat= cat.values[0].name;
                console.log(newCat);
                return newCat;
            });
            console.log(newCategoriesList);

            const newArray= selectedList.map(  product=>{
                const { id, title, thumbnail, price, prices, currency_id, condition, sold_quantity , shipping, seller_address } = product;
                const newProduct = {
                    "id": id,
                    "title": title,
                    "price": {
                        "currency": currency_id,
                        "amount": price,
                        "decimals": '00',
                    },
                    "picture": thumbnail,
                    "condition": condition,
                    "free_shipping": shipping.free_shipping,
                    "city": seller_address.city.name
                }; 
                return newProduct;
            });

        const newResponse= {
                'author': {
                'name': CONST.LIST.AUTOR_FIRST_NAME,
                'lastname': CONST.LIST.AUTOR_LAST_NAME
                },
                categories: newCategoriesList,
                items: newArray
            }

         return newResponse;   
        }));
    });
}

function getProductById(filter){

    return new Promise((resolve, reject)=>{
        if(store.product === null){
                console.error(CONST.LIST.MENSSAGE_NO_PRODUCT);
               return reject(CONST.LIST.NO_RESULTS);              
        };
        
        resolve(store.product(filter).then( async resp=> {

                const {data} = await store.description(filter);
                const description = data.plain_text;
               
                
                const { id, title, pictures, price, currency_id, condition, sold_quantity , shipping, category_id} = resp.data;
                const {data:respCategory} = await store.category(category_id);

                const photo = pictures[0].url;

                const newProduct = {
                        'author': {
                            'name': CONST.LIST.AUTOR_FIRST_NAME,
                            'lastname': CONST.LIST.AUTOR_LAST_NAME
                        },
                        'item': {
                            'id': id,
                            'title': title,
                            "price": {
                                "currency": currency_id,
                                "amount": price,
                                "decimals": '00',
                            },
                            "picture": photo,
                            "condition": condition,
                            "free_shipping": shipping.free_shipping,
                            "sold_quantity": sold_quantity,
                            'description': description,
                            'category': respCategory.name
                        }                       
                    }

                
                
         return newProduct;   
        }));
    });
}

module.exports = {getResults, getProductById};