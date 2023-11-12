const socketClient = io();

socketClient.on('arrayProducts', (productsArray) => {
    const productsElement = document.getElementById('products');
    let infoProducts = '';
    productsArray.forEach((p, index) => {
        // Agrega una clase 'product' seguida del índice para identificar cada producto
        infoProducts += `<div class="product product-${index + 1}">
                            <strong>ID:</strong> ${p.id} <br>
                            <strong>Nombre:</strong> ${p.title} <br>
                            <strong>Detalle:</strong> ${p.description} <br>
                            <strong>Código del Producto:</strong> ${p.code} <br>
                            <strong>Précio:</strong> $${p.price} <br>
                            <strong>Stock Disponible:</strong> ${p.stock} <br>
                            <strong>Categoria:</strong> ${p.category} <br>
                            <br>
                        </div>`;
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
