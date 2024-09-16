// Información detallada de los productos
const productInfo = {
    gaming: {
        title: "PC Gaming Ultra",
        img: "https://i.postimg.cc/DZJHVfd6/pc-gaming-ultra.jpg",
        description: "Este PC Gaming Ultra está diseñado para juegos de alta gama con un procesador Intel Core i9, 32GB de RAM, y una tarjeta gráfica RTX 4080.",
        price: 1999.99
    },
    oficina: {
        title: "PC Oficina Básica",
        img: "https://i.postimg.cc/Y2N8vm9g/pc-oficina-basico.png",
        description: "El PC de Oficina Básica es perfecto para tareas diarias como procesamiento de texto, navegación web y trabajo ligero.",
        price: 699.99
    },
    diseno: {
        title: "PC para Diseño Gráfico",
        img: "https://i.postimg.cc/7LTddYNV/PC-para-Disen-o-Gra-fico.jpg",
        description: "Este PC está optimizado para diseño gráfico, con un Intel Core i5, 32GB de RAM, y una tarjeta gráfica RTX 4060.",
        price: 899.99
    }
};

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btn = document.querySelector("#btnSubmit")

btn.addEventListener("click", function(event){
    event.preventDefault()
    if(username.value == ""){
        username.classList.add("errorField")
    }
    if(password.value == ""){
        username.classList.add("errorField")
    }
})

username.addEventListener("keyup", function(){
    username.classList.remove("errorField")
})
password.addEventListener("keyup", function(){
    password.classList.remove("errorField")
})


let cart = [];

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartButton = document.getElementById('cart-button');
    
    // Limpiar carrito
    cartItems.innerHTML = '';
    let total = 0;

    // Agregar elementos al carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.title} - ${item.price}€`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Actualizar total
    cartTotal.innerText = `Total: ${total.toFixed(2)}€`;
    cartButton.innerText = `Carrito (${cart.length})`;
}

// Abrir el modal con la información correspondiente
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function() {
        const productType = this.parentElement.getAttribute('data-product');
        const modal = document.getElementById('myModal');

        // Rellenar la información del modal
        document.getElementById('modal-title').innerText = productInfo[productType].title;
        document.getElementById('modal-image').src = productInfo[productType].img;
        document.getElementById('modal-description').innerText = productInfo[productType].description;
        document.getElementById('modal-price').innerText = productInfo[productType].price.toFixed(2) + '€';

        // Mostrar el modal
        modal.style.display = "block";
    });
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});

// Cerrar el modal cuando el usuario haga clic fuera de él
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Función para agregar productos al carrito
document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productType = this.parentElement.getAttribute('data-product');
        cart.push(productInfo[productType]);
        updateCart();

        // Mostrar carrito si no está visible
        document.getElementById('cart').style.display = 'block';
    });
});

// Mostrar/ocultar carrito
document.getElementById('cart-button').addEventListener('click', function() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
});
