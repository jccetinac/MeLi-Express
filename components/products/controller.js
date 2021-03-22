const store = require('./store');

function getMessages(filter){

    return new Promise((resolve, reject)=>{

        if(store.list === null){
                console.error('[message error] no hay ningun mensaje');
               return reject(' no se encontro nada');
               
        }

        ;
        
        resolve(store.list(filter).then( resp=> {

            const refactorResponse= resp.data.results;
            const newArray= refactorResponse.map(  product=>{
                const { id ,  title, thumbnail, price } = product;
                newProduct ={
                    'id': id,
                    'title': title,
                    'thumbnail': thumbnail,
                    'price': price
                };
                return newProduct;
            });

         return newArray;   
        }));
    });
}



function getProductById(filter){

    return new Promise((resolve, reject)=>{

        if(store.product === null){
                console.error('[message error] no hay ningun producto');
               return reject(' no se encontro nada');
               
        }

        ;
        
        resolve(store.product(filter).then( resp=> {

            //console.log(resp);
            
                const { id ,  title, thumbnail, price } = resp.data;
                const newProduct ={
                    'id': id,
                    'title': title,
                    'thumbnail': thumbnail,
                    'price': price
                };
                
           

         return newProduct;   
        }));
    });
}

module.exports = {getMessages, getProductById};