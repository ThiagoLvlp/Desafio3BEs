import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended : true}));

const Products = [
    {id: 1,title : "Saligna 2x2x4 Mts", description : "Madera en Saligna de 5cm x 5 cm x 4 metros", price: 560 ,thumbnail: "url1" , code: 1, stock: 2500},
    {id: 2,title : "Saligna 2x3x4 Mts", description : "Madera en Saligna de 7.5cm x 5 cm x 4 metros", price: 840 ,thumbnail: "ur2" , code: 2, stock: 2500},
    {id: 3,title : "Saligna 1/2x3x4 Mts", description : "Madera en Saligna de 1.25cm x 7.5 cm x 4 metros", price: 207,thumbnail: "url3" , code: 3, stock: 1500},
    {id: 4,title : "Saligna 3/4x3x4 Mts", description : "Madera en Saligna de  x 5 cm x 4 metros", price: 310 ,thumbnail: "url4" , code: 4, stock: 1500},
    {id: 5,title : "Saligna 2x2x3.66 Mts", description : "Madera en Saligna de 5cm x 5 cm x 3.66 metros", price: 520 ,thumbnail: "url5" , code: 5, stock: 1500},
    {id: 6,title : "Saligna 2x3x3.66 Mts", description : "Madera en saligna de 7.5cm x 5 cm x 3.66 metros", price: 775 ,thumbnail: "url6" , code: 6, stock: 1500},
    {id: 7,title : "Eucaliptus 3x3x1", description : "Madera en Eucaliptus de 7.5cm x 7.5cm x 1 metro", price: 700 ,thumbnail: "url7" , code: 7, stock: 1500},
    {id: 8,title : "Eucaliptus 3x3x2", description : "Madera en Eucaliptus de 7.5cm x 7.5cm x 2 metros", price: 1400 ,thumbnail: "url8" , code: 8, stock: 1500},
    {id: 9,title : "Eucaliptus 3x3x3", description : "Madera en Eucaliptus de 7.5cm x 7.5cm x 3 metros", price:2100 ,thumbnail: "url9" , code: 9, stock: 1500},
    {id: 10,title : "Eucaliptus 3x3x4", description : "Madera en Eucaliptus de 7.5cm x 7.5cm x 4 metros", price: 2800 ,thumbnail: "url10" , code: 10, stock: 1500},
]


app.get('/products/', (req, res) => {
    const limit = parseInt(req.query.limit) || Products.length;
    const limitedProducts = Products.slice(0, limit);
    res.send(limitedProducts);
});

app.get('/products/:idProduct', (req, res) => {
    let { idProduct } = req.params;
    const product = Products.find(p => p.id === parseInt(idProduct));
    if (product) { 
    res.json({product})
}
    res.send({mensage : 'Producto no encontrado'});
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})