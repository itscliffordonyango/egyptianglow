document.addEventListener("DOMContentLoaded", () => {
    feather.replace();

    // ✅ Mobile menu toggle (for small screens)
    const menuButton = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");
    if (menuButton && menu) {
      menuButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }

    // New Product Categories and Items (IDs ordered sequentially 1-37)
    const categories = {
        "Face Products": [
            { id: 1, name: "Lightening Face Cream", price: 2500, image: "static/products/face/face cream.jpeg" },
            { id: 2, name: "Royal Amber Face Cream", price: 2500, image: "static/products/face/royal amber.jpeg" },
            { id: 3, name: "Advanced Whyte Face Cream", price: 2500, image: "static/products/face/Advancedwhyte face cream.jpeg" },
            { id: 4, name: "Xclusive Glow Face Cream", price: 2500, image: "static/products/face/xclusive.png" },
            { id: 5, name: "Duches White Face Cream", price: 2500, image: "static/products/face/duches white.jpeg" },
            { id: 6, name: "Lightening Face Oil", price: 2500, image: "static/products/face/face-oil.jpeg" },
            { id: 7, name: "Pink Lip Cream", price: 1000, image: "static/products/face/Advancedwhyte face cream.jpeg" },
        ],

        "Serums": [
            { id: 8, name: "Extra Glow Daytime Serum", price: 1500, image: "static/products/serums/extra-daytime.jpeg" },
            { id: 9, name: "Anti-Face Redness Serum", price: 1500, image: "static/products/serums/anti-face.jpeg" },
            { id: 10, name: "Hydrolipidic Face Serum", price: 1500, image: "static/products/serums/hydrolipidic.jpeg" },
            { id: 11, name: "Tripple Concentrate Booster Serum", price: 2000, image: "static/products/serums/3concetrate.jpeg" },
        ],

        "Body Products": {
            "Oils & Creams ": [
                { id: 12, name: "Cleopatra Body Oil", price: 2000, image: "static/products/body/cleopatra oil.jpeg" },
                { id: 13, name: "Timeless Glow  Oil", price: 2000, image: "static/products/body/timeless.jpeg" },
                { id: 14, name: "Skin Defence Body Cream", price: 2000, image: "static/products/body/skinfidence.jpeg" },
            ],
            "Lotions": [
                { id: 15, name: "Queen of White Lotion", price: 4800, image: "static/products/body/Queen of White.jpeg" },
                { id: 16, name: "Advanced Caramel Lotion", price: 4800, image: "static/products/body/Advanced Caramel.jpeg" },
                { id: 17, name: "Body Lightening Lotion", price: 3500, image: "static/products/body/body-lightening lotion.png" },
                { id: 18, name: "Caramel Lotion", price: 3500, image: "static/products/body/Caramel lotion.png" },
                { id: 19, name: "Duches White Lotion", price: 5000, image: "static/products/body/duches-white.jpeg" },
                { id: 20, name: "Celebtirty Whitening Lotion", price: 4500, image: "static/products/body/celeb.png" },
                { id: 21, name: "Pro 9 Lotion", price: 4500, image: "static/products/body/Pro 9.jpeg" },
                { id: 22, name: "Radiance Half Cast Lotion", price: 3500, image: "static/products/body/half-cast.png" },
                { id: 42, name: "White-dots Lotion", price: 2000, image: "static/products/body/white-dots.jpeg" },
            ],
            "Scrubs": [
                { id: 23, name: "Exfoliating Body Scrub", price: 2000, image: "static/products/body/body scrub.jpeg" },
            ],
            "Soaps ": [
                { id: 24, name: "VVIP Soap", price: 3000, image: "static/products/soaps/VVIP.jpeg" },
                { id: 25, name: "Advanced Snow White", price: 2000, image: "static/products/soaps/snow2.png" },
                { id: 26, name: "Molato 7D ", price: 2000, image: "static/products/soaps/molato 2.png" },
                { id: 27, name: "Morrocan Nila Lightening Soap 300 Grams", price: 2500, image: "static/products/soaps/nila300g.png" },
                { id: 28, name: "Morrocan Nila Lightening Soap 500 Grams", price: 3500, image: "static/products/soaps/nila500g.png" }, 
                { id: 29, name: "Oshaprapra Lightening Soap", price: 2500, image: "static/products/soaps/oshap.jpeg" },
                        
            ],
            "Body Washes": [
                { id: 30, name: "Pigment Correcting Body Wash", price: 850, image: "static/products/body/pigment.jpeg" },
                { id: 31, name: "Raspbery Glitz Lightening Shower Gel", price: 2000, image: "static/products/soaps/glitz.jpeg" }, 
                { id: 41, name: "Polish White Shower Gel", price: 2000, image: "static/products/soaps/Polish White.jpeg" },
            ]
        },

        "Hand & Foot Products": [
            { id: 32, name: "Green Oil", price: 2500, image: "static/products/body/green-oil.jpeg" },
            { id: 33, name: " Knuckle Set", price: 2500, image: "static/products/hand/knuckle-set.jpeg" },
            // { id: 34, name: "Orange Knuckle Cream", price: 1500, image: "static/products/hand/pyramid hand cream.jpeg" },
            // { id: 35, name: "Green Knuckle Cream", price: 1500, image: "static/products/hand/pyramid hand cream.jpeg" },
            { id: 36, name: "Instant Clarifying Knuckle Serum", price: 2500, image: "static/products/serums/knuckle-clarifying-serum.jpeg" },
            // { id: 37, name: "Hand and Foot Cream", price: 2000, image: "static/products/hand/pyramid hand cream.jpeg" },
        ],

        "Supplements": [
            { id: 38, name: "Extra White Collagen ", price: 2500, image: "static/products/supplements/ultra-white.png" },
            { id: 34, name: "Booster Whitening ", price: 2500, image: "static/products/supplements/booster-whitening.jpeg" },
            { id: 35, name: "Call Me White", price: 2500, image: "static/products/supplements/callmewhite.png" },
            { id: 43, name: "Glucenta Diamond", price: 2500, image: "static/products/supplements/Glucenta.jpeg" },
            { id: 44, name: "5D Gluta", price: 2500, image: "static/products/supplements/gluta-powder.jpeg" },
            { id: 45, name: "GlutaX ", price: 2500, image: "static/products/supplements/glutax.jpeg" },
            { id: 46, name: "GlutaTX Boost Capsules", price: 2500, image: "static/products/supplements/glutaX.jpeg" },
            { id: 47, name: "Milky Berries", price: 2500, image: "static/products/supplements/milky-berries.jpeg" },
            { id: 48, name: "Miracle White", price: 2500, image: "static/products/supplements/miracle-white.jpeg" },
            { id: 49, name: "Next-Gen Peptide Capsules", price: 2500, image: "static/products/supplements/peptide-capsules.jpeg" },

        ],

        "Special Offer Products": [
            { id: 39, name: "Intimate Area Lightening Oil", price: 2500, image: "static/products/combos/lightening glow combo.jpeg" },
            { id: 40, name: "Deep Tissue Peeling Solution", price: 1200, image: "static/products/body/deep tissue peels.jpeg" },
        ],
    };

    const shopSections = document.getElementById("shop-sections");

    // Helper function to render a product card grid
    function generateProductGrid(productsArray) {
        return `
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            ${productsArray.map(item => `
              <div class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition transform hover:-translate-y-1">
                <img src="${item.image}" alt="${item.name}" class="w-full h-56 object-cover rounded-lg mb-4">
                <h4 class="font-medium text-lg mb-2">${item.name}</h4>
                <p class="text-glow-dark mb-4">KSh ${item.price}</p>
                <button class="bg-glow-dark text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition" onclick="addToCart(${item.id})">
                  Add to Cart
                </button>
              </div>
            `).join('')}
          </div>
        `;
    }

    // ✅ Render each category section dynamically checking structure type
    Object.entries(categories).forEach(([categoryName, content]) => {
      const section = document.createElement("div");
      section.className = "mb-16";

      if (Array.isArray(content)) {
        // Standard non-nested category
        section.innerHTML = `
          <h3 class="text-2xl font-serif font-semibold mb-6 border-b border-glow-pink pb-2">${categoryName}</h3>
          ${generateProductGrid(content)}
        `;
      } else {
        // Nested subcategories (like Body Products)
        let subcategoryHTML = `<h3 class="text-2xl font-serif font-semibold mb-6 border-b border-glow-pink pb-2">${categoryName}</h3>`;
        
        Object.entries(content).forEach(([subcatName, subcatProducts]) => {
            subcategoryHTML += `
                <h4 class="text-xl font-sans font-medium mt-6 mb-4 text-gray-700 italic pl-2 border-l-4 border-glow-pink">${subcatName}</h4>
                ${generateProductGrid(subcatProducts)}
            `;
        });
        section.innerHTML = subcategoryHTML;
      }
      
      shopSections.appendChild(section);
    });

    // ✅ Add to cart logic built to find products across mixed structures
    window.addToCart = function (id) {
      let product = null;
      for (const key in categories) {
          if (Array.isArray(categories[key])) {
              product = categories[key].find(p => p.id === id);
          } else {
              for (const subKey in categories[key]) {
                  product = categories[key][subKey].find(p => p.id === id);
                  if (product) break;
              }
          }
          if (product) break;
      }

      if (!product) {
          alert("Product error: Item not found.");
          return;
      }

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(i => i.id === id);

      if (existing) existing.quantity++;
      else cart.push({ ...product, quantity: 1 });

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} added to cart!`);
    };

    // ✅ Update cart badge
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((t, i) => t + i.quantity, 0);
      const desktopBadge = document.getElementById("cart-count");
      if (desktopBadge) desktopBadge.textContent = count;
      const mobileBadge = document.getElementById("mobile-cart-count");
      if (mobileBadge) mobileBadge.textContent = count;
    }

    updateCartCount();
});
