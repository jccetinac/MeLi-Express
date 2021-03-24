const store = require('./store');

function getMessages(filter){

    return new Promise((resolve, reject)=>{

        if(store.list === null){
                console.error('[message error] no hay ningun mensaje');
               return reject(' no se encontro nada');       
        };
        
        resolve(store.list(filter).then( resp=> {

            const selectedList= resp.data.results.slice(0,4);
            const newArray= selectedList.map(  product=>{
                const { id, title, thumbnail, price, prices, currency_id, condition, sold_quantity , shipping} = product;
                console.log({ id, title, thumbnail, price, prices, currency_id, condition, sold_quantity , shipping});
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
                    "sold_quantity": sold_quantity
                }; 
                return newProduct;
            });

        const newResponse= {
                'author': {
                'name': 'camilo',
                'lastname': 'cetina'
                },
                categories: ['String', 'String', 'String'],
                items: newArray
            }

         return newResponse;   
        }));
    });
}

function getProductById(filter){

    return new Promise((resolve, reject)=>{
        if(store.product === null){
                console.error('[message error] no hay ningun producto');
               return reject(' no se encontro nada');              
        };
        
        resolve(store.product(filter).then( async resp=> {

                const {data} = await store.description(filter);
                const description = data.plain_text;
                
                const { id, title, thumbnail, price, currency_id, condition, sold_quantity , shipping} = resp.data;

                const newProduct = {
                    'author': {
                        'name': 'camilo',
                        'lastname': 'cetina'
                    },
                    'id': id,
                    'title': title,
                    "price": {
                        "currency": currency_id,
                        "amount": price,
                        "decimals": '00',
                    },
                    "picture": thumbnail,
                    "condition": condition,
                    "free_shipping": shipping.free_shipping,
                    "sold_quantity": sold_quantity,
                    'description': description
                };
                
                
         return newProduct;   
        }));
    });
}

module.exports = {getMessages, getProductById};