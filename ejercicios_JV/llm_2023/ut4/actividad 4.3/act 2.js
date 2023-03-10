// Programacion funcional

const listaDeProductos = [
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

function masCaro (productos){
    let arrayCaro = productos.sort((producto1,producto2)=>producto2.price-producto1.price);
    return arrayCaro[0];
}

// console.log(masCaro(listaDeProductos))

// producto mas barato

function masBarato(productos) {
    let arrayBarato = productos.sort((producto1,producto2)=>producto1.price - producto2.producto2);
    return arrayBarato[0];
}

// console.log(masBarato(listaDeProductos))

// devolver productos entre 100 y 500 y categoria "ELECT"

function entre (a){
    let entre = a.filter(b => b.price > 100 && b.price < 500 && b.category==="ELEC");
    return entre
}
// console.log(entre(listaDeProductos))

// devolver pro entre 500 y 600 de la cat "COMPUTER" o "LAPTOP"

function entre1 (a){
    let entre1 = a.filter(b=>(b.price>500 && b.price < 600)&&(b.category==="COMPUTER" || b.category==="LAPTOP"))
    return entre1
}
// console.log(entre1(listaDeProductos))

// devolver verdadero o falso si hay un produto samsung en la categoria "MOBILE"

function vOF (a){
    let siHay = a.filter ( b => b.stock && b.name.toLowerCase().includes("gaming"))
    return siHay
}
// console.log(vOF(listaDeProductos));

//  verdadero o falso si hay un producto sin stock

function sinEstock (a){
    return a.some(b => (!b.stock));
}
console.log(sinEstock(listaDeProductos))