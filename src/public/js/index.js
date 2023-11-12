const socketClient = io();

socketClient.on('arrayProducts', (productsArray) => {
    const productsElement = document.getElementById('products');
    let infoProducts = '';

    productsArray.forEach((p, index) => {
        // Agrega una clase 'product' seguida del índice para identificar cada producto
        infoProducts += `<div class="product product-${index + 1}" data-product-id="${p.id}">
                            <strong>ID:</strong> ${p.id} <br>
                            <strong>Nombre:</strong> ${p.title} <br>
                            <strong>Detalle:</strong> ${p.description} <br>
                            <strong>Código del Producto:</strong> ${p.code} <br>
                            <strong>Précio:</strong> $${p.price} <br>
                            <strong>Stock Disponible:</strong> ${p.stock} <br>
                            <strong>Categoría:</strong> ${p.category} <br>
                            <button class="btn-delete" data-product-id="${p.id}">Eliminar</button>
                            <br>
                        </div>`;
    });

    productsElement.innerHTML = infoProducts;

    // ELIMINAR PRODUCTOS.
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productIdToDelete = button.dataset.productId;
            socketClient.emit('deleteProduct', productIdToDelete);
        });
    });
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
