// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Feather icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
  updateCartCount();
});

// Update cart count
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cart-count, #mobile-cart-count').forEach(el => {
    if (el) el.textContent = count;
  });
}

// Add to cart
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  saveCart();
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Save cart
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Checkout via WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const items = cart.map(i => `${i.name} (${i.quantity}x)`).join(', ');
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const msg = encodeURIComponent(`Hello EgyptianGlow, I want to purchase:\n${items}\nTotal: KSh ${total}\nMy details: [Name, Phone, Address]`);
  window.open(`https://wa.me/254721501977?text=${msg}`, '_blank');
}

// Example products (would normally come from a database)
const sampleProducts = [
  { id: 1, name: "Glow Face Serum", price: 1200, category: "face" },
  { id: 2, name: "Hydrating Lotion", price: 1500, category: "body" },
  { id: 3, name: "Soft Hands Cream", price: 800, category: "handfoot" },
  { id: 4, name: "Collagen Capsules", price: 2500, category: "supplements" },
];

// Render shop products
document.addEventListener('DOMContentLoaded', () => {
  ["face", "body", "handfoot", "supplements"].forEach(cat => {
    const section = document.getElementById(`${cat}-products`);
    if (!section) return;
    sampleProducts.filter(p => p.category === cat).forEach(p => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <img src="https://placehold.co/200x200" class="rounded-lg mb-3 w-full h-48 object-cover" alt="${p.name}">
        <h3 class="font-medium">${p.name}</h3>
        <p class="text-glow-dark">KSh ${p.price}</p>
        <button class="add-btn" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      `;
      section.appendChild(div);
    });
  });
});
