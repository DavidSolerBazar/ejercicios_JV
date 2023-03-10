const listaProductos = [
    {
      "id": 1,
      "name": "TV Cinema plus",
      "price": 300.5,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": true,
      "discount": 10,
    },
    {
      "id": 2,
      "name": "TV Panoramic colors",
      "price": 490,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": true,
      "discount": 10,
    },
    {
      "id": 3,
      "name": "TV Family Cinema Max",
      "price": 800,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": false,
      "discount": 0,
    },
    {
      "id": 4,
      "name": "TV HD8 REALISTIC",
      "price": 1000,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": false,
      "discount": 0,
    },
  
    {
      "id": 5,
      "name": "HP 17'' premium",
      "price": 500.33,
      "stock": false,
      "category": "LAPTOP",
      "brand": "HP",
      "onSale": false,
      "discount": 0,
    },
    {
      "id": 6,
      "name": "MSI 15'' gaming pro",
      "price": 750,
      "stock":true,
      "category": "LAPTOP",
      "brand": "MSI",
      "onSale": true,
      "discount": 20,
    },  
    {
      "id": 7,
      "name": "HP 14'' office",
      "price": 580,
      "stock": false,
      "category": "LAPTOP",
      "brand": "HP",
      "onSale": false,
      "discount": 0,
    },  
    {
      "id": 8,
      "name": "Samsung 17'' premium",
      "price": 500,
      "stock": true,
      "category": "LAPTOP",
      "brand": "Samsung",
      "onSale": false,
      "discount": 0,
    }, 
    {
      "id": 9,
      "name": "HP snow special",
      "price": 600,
      "stock": true,
      "category": "COMPUTER",
      "brand": "HP",
      "onSale": false,
    },
    {
      "id": 10,
      "name": "MSI-3456RW gaming presario total graphic",
      "price": 750,
      "stock":true,
      "category": "COMPUTER",
      "brand": "MSI",
      "onSale": true,
      "discount": 30,
    },  
    {
      "id": 11,
      "name": "HP TOWER GAMING",
      "price": 980,
      "stock": false,
      "category": "COMPUTER",
      "brand": "HP",
      "onSale": true,
      "discount": 50,
    },  
    {
      "id": 12,
      "name": "Tower superior",
      "price": 530,
      "stock": true,
      "category": "COMPUTER",
      "brand": "Samsung",
      "onSale": false
    },
    {
      "id": 13,
      "name": "My  big OPPO",
      "price": 150,
      "stock": true,
      "category": "MOBILE",
      "brand": "OPPO",
      "onSale": false,
    },
    {
      "id": 14,
      "name": "Samsung revolution 20222",
      "price": 350,
      "stock":true,
      "category": "MOBILE",
      "brand": "Samsung",
      "onSale": true,
      "discount": 30,
    },  
    {
      "id": 15,
      "name": "Moto 3D for you",
      "price": 280,
      "stock": true,
      "category": "MOBILE",
      "brand": "Motorola",
      "onSale": true,
      "discount": 20,
    },  
    {
      "id": 16,
      "name": "SamgungHR special gaming",
      "price": 830,
      "stock": true,
      "category": "MOBILE",
      "brand": "Samsung",
      "onSale": false
    },      
    {
      "id": 17,
      "name": "The Witcher",
      "price": 30,
      "stock": true,
      "category": "GAME",
      "brand": "PLAYSTATION",
      "onSale": false,
    },
    {
      "id": 18,
      "name": "Assassin's Creed",
      "price": 50,
      "stock":true,
      "category": "GAME",
      "brand": "PLAYSTATION",
      "onSale": true,
      "discount": 30,
    },  
    {
      "id": 19,
      "name": "FIFA 2022",
      "price": 40,
      "stock": true,
      "category": "GAME",
      "brand": "PC",
      "onSale": true,
      "discount": 20,
    },  
    {
      "id": 20,
      "name": "The edge of camelor",
      "price": 30,
      "stock": true,
      "category": "GAME",
      "brand": "XBOX",
      "onSale": false
    },      
  ];

//   Producto mas caro
function masCaro(productos) {
    let ProductoMasCaro;
    for (let producto of productos){
        if(!ProductoMasCaro || producto.price > ProductoMasCaro.price){
            ProductoMasCaro = producto;
        }
    }
    return ProductoMasCaro
}

// console.log(masCaro(listaProductos));

// Producto mas barato

function masBarato (productos){
    let productoMasBarato;
    for (let producto of productos){
        if (!productoMasBarato || producto.price < productoMasBarato.price){
            productoMasBarato = producto;
        }
    }
    return productoMasBarato
}

// console.log(masBarato(listaProductos))

// Funcion que devuelva un producto entre 100 y 500 de la categoria elc

function entre (productos){
    let nuevoProducto = [];
    for (let producto of productos){
        if( producto.price > 100 && producto.price < 500 && producto.category ==="ELEC"){
            nuevoProducto.push(producto)
        }
    }
    return nuevoProducto
}

// console.log(entre(listaProductos))

// Funcion que devuelva los productos entre 100 y 500 de la categoria "COMPUTER" o "LAPTOP"

function entre1(productos) {
    let nuevosProductos = [];
    for(let producto of productos){
        if (producto.price > 100 && producto.price < 500 && producto.category === "COMPUTER" || producto.category ==="LAPTOP"){
            nuevosProductos.push(producto)
        }
    }
    return nuevosProductos;
}
// console.log(entre1(listaProductos))

// funcion que devuelva los productos en stock y que ademas incluyan gamin en su nombre

function gaming (productos){
    let nuevoProducto = [] ;
    for (let producto of productos){
        if ( producto.stock && producto.name.toLowerCase().includes("gaming") ){
            nuevoProducto.push(producto)
        }
    }
    return nuevoProducto
}
// console.log(gaming(listaProductos))

// funcion que devuelva  verdadero o falso si hay un producto de la marca samsung y de la categoria "mobile"

function catMobile (productos){
    for (let producto of productos){
        if (producto.brand.toLowerCase()==="samsung" && producto.category.toLowerCase()==="mobile"){
            return true
        }
    }
    return false
}

// console.log(catMobile(listaProductos))

// Funcion que diga si hay stock o no

function stock (productos){
    for ( let producto of productos){
        if(!producto.stock)return false
    }
    return true
}
// console.log(stock(listaProductos))

// f¡Funcin que devuelva un array de los campos : id , nombre , procio de los productos.

function arrayDeProductos(productos){
let arrayProductos = [];
for (let producto of productos){
    let nuevoProducto = {
        "id": producto.id,
        "nombre":producto.name,
        "precio":producto.price
    };
    arrayProductos.push(nuevoProducto);
}
return arrayProductos
}
// console.log(arrayDeProductos(listaProductos));

// Funcion que devuelva un nuevo array pero solo el nombre , categoria y precio pero cumpliendo los siguientes requisitos :
 /*
 Precio con el simbolo € incluido
 Nombre del producto en mayusculas
 Categoria solo con las tres primeras letras 
 */

 function normas (productos) {
    let arrayProductos = [];
    for (let producto of productos){
        let nuevoProducto= {
            "nombre": producto.name.toUpperCase(),
            "precio":(producto.price + " €"),
            "categoria":producto.category.substring(0,3)
        }
        arrayProductos.push(nuevoProducto)
    }
    return arrayProductos
 }
//  console.log(normas(listaProductos))

// Funcion que devuelva verdadero o falso si todos los productos se encuentran en stock y precio superior a 0

function nose (productos){
    for ( let producto of productos){
        if(!producto.stock || producto.price<=0)
        return false;
    }
    return true
}
// console.log(nose(listaProductos))

// Funcion que devuelva l primer producto que encuentre que sea de la categoria "name" y nombre "the witcher"

function witcher(juegos) {
    for (let juego of juegos){
        if(juego.name.toLowerCase().includes("the witcher") && juego.category==="GAME")
        return juego
    }
    
}

// console.log(witcher(listaProductos))

// fincion que devuelva un unico producto que sea de la categoria "computer" con el nombre "pesario"  y marca msi

function msi ( productos){
    for (let producto of productos){
        if(producto.category.toLowerCase()==="computer" && producto.name.toLowerCase().includes("presario") && producto.brand.toLowerCase()==="msi"){
            return producto;
        }
    }
}
// console.log(msi(listaProductos));

// Funcion que devuelva los ordenadores o portatiles con un descuento superior o igual al 50% y añadir una nueva propiedad con su nuevo precio.

function descuento (productos){
    let arrayProductos = [];
    for (let producto of productos){
        if ((producto.category.toLowerCase()==="computer" || producto.category.toLowerCase()==="laptop") && producto.discount>=50){
            let descuento = (producto.price * producto.discount/100);
            producto.precioFinal = producto.price - descuento;
            arrayProductos.push(producto)
        }
    }
    return arrayProductos
}
// console.log(descuento(listaProductos));

// funcion que devuelva los ordenadores diferentes a la marca "HP" ,  en stock y sin ninguna oferta

function sinOferta( productos ) {
    let arrayProductos = [];
    for (let producto of productos){
        if (producto.brand !="HP" && producto.category==="COMPUTER" && producto.stock && !producto.onSale){
            arrayProductos.push(producto);
        }
    }
    return arrayProductos;
}
// console.log(sinOferta(listaProductos));

// Funcion que devuelva el producto con la id=18 , pero solo los campo : 
/*
- id
-nombre
-precio

*/

function solo (productos){
    let pro = {};
    for (let producto of productos){
        if (producto.id===18){
            let nuevoProducto ={
                "id":producto.id,
                "nombre":producto.name,
                "precio":producto.price
            };
            return nuevoProducto
        }
    }
    return pro
}

console.log(solo(listaProductos))
