const socketClient = io();

socketClient.on('arrayProducts', (productsArray) => {
    const productsElement = document.getElementById('products');
    let infoProducts = '';
    productsArray.forEach(p => {
        infoProducts += `${p.title} - ${p.description} - ${p.code} - $${p.price} - ${p.stock} - ${p.category}</br>`;
    });
    productsElement.innerHTML = infoProducts;
});

const form = document.getElementById('form');
const inputs = ['title', 'description', 'code', 'price', 'stock', 'category'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const product = {};
    inputs.forEach(input => {
        product[input] = document.getElementById(input).value;
    });

    socketClient.emit('newProduct', product);

    inputs.forEach(input => {
        document.getElementById(input).value = '';
    });
});
