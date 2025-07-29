

document.addEventListener("DOMContentLoaded", () => {
  
  // Data do Menu
  const menuItems = [
    // Hambúrgueres Tradicionais
    {
      id: 1,
      name: "Hambúrguer Simples",
      description: "Pão, carne, ovo, salada e batata palha",
      price: 9.0,
      category: "tradicional",
    },
    {
      id: 2,
      name: "Hambúrguer Duplo",
      description: "Pão, 2 carnes, 2 ovos, salada e batata palha",
      price: 11.0,
      category: "tradicional",
    },
    {
      id: 3,
      name: "Duplo Cheddar",
      description: "Pão, 2 carnes, queijo, ovo, cheddar, salada e batata palha",
      price: 14.0,
      category: "tradicional",
      popular: true,
    },
    {
      id: 4,
      name: "Presunto Burger",
      description: "Pão, carne, ovo, bacon, presunto, salada e batata palha",
      price: 13.0,
      category: "tradicional",
    },
    {
      id: 5,
      name: "Bacon Burger",
      description: "Pão, carne, ovo, bacon, salada e batata palha",
      price: 12.0,
      category: "tradicional",
    },
    {
      id: 6,
      name: "Egg X Bacon",
      description: "Pão, carne, ovo, bacon, queijo, salada e batata palha",
      price: 13.0,
      category: "tradicional",
    },
    {
      id: 7,
      name: "Egg X Burger",
      description: "Pão, carne, ovo, queijo, salada e batata palha",
      price: 11.0,
      category: "tradicional",
    },
    {
      id: 8,
      name: "Egg X Presunto",
      description: "Pão, carne, ovo, queijo, presunto, salada e batata palha",
      price: 12.0,
      category: "tradicional",
    },
    {
      id: 9,
      name: "Egg X Calabresa",
      description: "Pão, carne, ovo, calabresa, queijo, salada e batata palha",
      price: 13.0,
      category: "tradicional",
    },
    {
      id: 10,
      name: "Galis Fit",
      description: "Pão, frango desfiado, salada e batata palha",
      price: 11.0,
      category: "tradicional",
    },
    {
      id: 11,
      name: "Braden",
      description: "Pão, carne, ovo, frango desfiado, bacon, queijo, presunto, salada e batata palha",
      price: 17.0,
      category: "tradicional",
      popular: true,
    },
    {
      id: 12,
      name: "Galisburguesa",
      description: "Pão, carne, frango desfiado, queijo, presunto, salada e batata palha",
      price: 15.0,
      category: "tradicional",
    },
    {
      id: 13,
      name: "Galisbacon",
      description: "Pão, carne, frango desfiado, bacon, queijo, presunto, salada e batata palha",
      price: 16.0,
      category: "tradicional",
    },
    {
      id: 14,
      name: "X Tudo",
      description: "Pão, carne, ovo, calabresa, bacon, queijo, presunto, salada e batata palha",
      price: 16.0,
      category: "tradicional",
    },
    {
      id: 15,
      name: "X Picanha",
      description: "Pão, carne sabor picanha 90g, ovo, queijo, cheddar, salada e batata palha",
      price: 14.0,
      category: "tradicional",
    },
    {
      id: 16,
      name: "Picanha Bacon",
      description: "Pão, carne sabor picanha 90g, ovo, bacon, queijo, presunto, salada e batata palha",
      price: 17.0,
      category: "tradicional",
    },
    {
      id: 17,
      name: "The Rua",
      description:
        "Pão, carne, ovo, calabresa, bacon, frango desfiado, queijo, presunto, catupiry, salada e batata palha",
      price: 19.0,
      category: "tradicional",
      popular: true,
    },
    {
      id: 18,
      name: "The Rua Duplo",
      description:
        "Pão, 2 carnes, 2 ovos, calabresa, bacon, frango desfiado, 2 queijos, 2 presuntos, salada e batata palha",
      price: 26.0,
      category: "tradicional",
      popular: true,
    },
    {
      id: 19,
      name: "The Rua Picanha",
      description:
        "Pão, carne sabor picanha 90g, ovo, calabresa, bacon, frango desfiado, queijo, presunto, catupiry, salada e batata palha",
      price: 23.0,
      category: "tradicional",
      popular: true,
    },

    // Hambúrgueres Artesanais
    {
      id: 20,
      name: "Cheddar Burger Artesanal",
      description: "Pão, carne bovina 90g, queijo, creme cheddar e salada",
      price: 14.90,
      category: "artesanal",
    },
    {
      id: 21,
      name: "Cheese Burger Artesanal",
      description: "Pão, carne bovina 90g, queijo, creme cheese e salada",
      price: 14.90,
      category: "artesanal",
    },
    {
      id: 22,
      name: "Bacon Cheddar Artesanal",
      description: "Pão, carne bovina 90g, bacon, creme cheddar e salada",
      price: 15.90,
      category: "artesanal",
    },
    {
      id: 23,
      name: "X Bacon Artesanal",
      description: "Pão, carne bovina 90g, bacon, queijo, creme cheddar e salada",
      price: 17.90,
      category: "artesanal",
    },
    {
      id: 24,
      name: "Artesanal Origem",
      description: "Pão, carne bovina 90g, bacon, creme cheddar, ovo, creme cheese e salada",
      price: 17.9,
      category: "artesanal",
    },
    {
      id: 25,
      name: "Artesanal Duplo",
      description: "Pão, 2 carnes bovinas 90g, queijo, creme cheddar e salada",
      price: 18.90,
      category: "artesanal",
      popular: true,
    },
    {
      id: 26,
      name: "Artesanal Triplo",
      description: "Pão, 3 carnes bovinas 90g, queijo, creme cheddar e salada",
      price: 25.90,
      category: "artesanal",
    },
    {
      id: 27,
      name: "Artesanal The Rua",
      description: "Pão, carne bovina 90g, frango desfiado, bacon, queijo, creme cheese e salada",
      price: 24.90,
      category: "artesanal",
      popular: true,
    },
    {
      id: 28,
      name: "Artesanal Duplo Bacon",
      description: "Pão 2 carnes bovinas 90g, bacon, queijo, creme cheddar e salada",
      price: 22.90,
      category: "artesanal",
    },
    {
      id: 29,
      name: "Artesanal Duplo Galisgacon",
      description: "Pão, 2 carnes bovinas 90g, frango, bacon, queijo, creme cheddar e salada",
      price: 28.90,
      category: "artesanal",
      popular: true,
    },

    // Bebidas
    { id: 30, name: "Açaí 200ml", description: "Açaí cremoso tradicional", price: 7.0, category: "bebidas" },
    { id: 31, name: "Açaí 300ml", description: "Açaí cremoso tradicional", price: 9.0, category: "bebidas" },
    { id: 32, name: "Açaí 400ml", description: "Açaí cremoso tradicional", price: 11.0, category: "bebidas" },
    { id: 33, name: "Açaí 500ml", description: "Açaí cremoso tradicional", price: 13.0, category: "bebidas" },
    { id: 34, name: "Guaravita", description: "Água com gás sabor guaraná", price: 3.0, category: "bebidas" },
    { id: 35, name: "Refrigerante Lata", description: "Coca-Cola, Fanta ou Sprite", price: 6.0, category: "bebidas" },
    { id: 36, name: "Guaraná 600ml", description: "Guaraná Antarctica gelado", price: 8.0, category: "bebidas" },
    { id: 37, name: "Coca-Cola 600ml", description: "Coca-Cola gelada", price: 9.0, category: "bebidas" },
    { id: 38, name: "H2O 500ml", description: "H2O ou Coca Lata", price: 7.0, category: "bebidas" },
    { id: 39, name: "Sprite 2L", description: "Sprite 2 litros", price: 13.0, category: "bebidas" },
    { id: 40, name: "Guarana 2L", description: "Guarana 2 litros", price: 13.0, category: "bebidas" },
    { id: 41, name: "Fanta uva 2L", description: "Fanta uva 2 litros", price: 13.0, category: "bebidas" },
    { id: 42, name: "Fanta Laranja 2L", description: "Fanta Laranja 2 litros", price: 13.0, category: "bebidas" },
    { id: 43, name: "Mineirinho 2L", description: "Mineirinho 2 Litros", price: 13.0, category: "bebidas" },
    { id: 44, name: "Coca-Cola 2L", description: "coca-cola 2 litros", price: 15.0, category: "bebidas" },
    { id: 45, name: "Moranguito 1L", description: "coca-cola 2 litros", price: 10.0, category: "bebidas" },

    // Adicionais
    { id: 46, name: "Carne Granfile 56G", description: "Carne Granfile 56g", price: 2.0, category: "adicionais" },
    { id: 47, name: "Carne Granpicanha", description: "Carne Granpicanha", price: 5.0, category: "adicionais" },
    { id: 48, name: "Carne Artesanal 90g", description: "Carne artesanal 90G", price: 7.0, category: "adicionais" },
    { id: 49, name: "Queijo",description: "Queijo", price: 3.0,category: "adicionais", },
    { id: 50, name: "Presunto", description: "Presunto", price: 3.0,category: "adicionais", },
    { id: 50, name: "Calabresa", description: "Calabresa", price: 3.0, category: "adicionais" },
    { id: 51, name: "Ovo", description: "Ovo frito fresquinho", price: 2.0, category: "adicionais" },
    { id: 52, name: "Bacon", description: "bacon", price: 5.0, category: "adicionais" },
    { id: 53, name: "Frango", description: "Frango", price: 5.0, category: "adicionais" },
    { id: 54, name: "Cheddar/Cheese/Catupiry", description: "Cremes especiais", price: 3.50,category: "adicionais" },
    { id: 55, name: "Maionese", description: "Maionese", price: 1.0, category: "adicionais" },

    // Batata Frita
    {
      id: 56, name: "Batata Pequena", description: "Batata frita com bacon, calabresa, cheddar e catupiry", price: 15.0, category: "batata",
    },
    {
      id: 57, name: "Batata Média", description: "Batata frita com bacon, calabresa, cheddar e catupiry", price: 20.0, category: "batata",
    },
    {
      id: 58, name: "Batata Grande", description: "Batata frita com bacon, calabresa, cheddar e catupiry", price: 25.0, category: "batata",
    },

    // Hot Dog
    { id: 59, name: "Hot Salsicha", description: "hortdog salsicha", price: 13.0, category: "hotdog" },
    {
      id: 60, name: "Hot Dog linguiça", description: "hortdog linguiça", price: 15.0, category: "hotdog",}
      ,]

  const categories = [
    { id: "tradicional", name: "Tradicionais", icon: "🍔", color: "from-red-500 to-yellow-500" },
    { id: "artesanal", name: "Artesanais", icon: "🥪", color: "from-yellow-500 to-amber-500" },
    { id: "bebidas", name: "Bebidas", icon: "🥤", color: "from-blue-500 to-cyan-500" },
    { id: "adicionais", name: "Adicionais", icon: "🧀", color: "from-green-500 to-emerald-500" },
    { id: "batata", name: "Batata Frita", icon: "🍟", color: "from-yellow-600 to-amber-600" },
    { id: "hotdog", name: "Hot Dog", icon: "🌭", color: "from-red-600 to-pink-600" },
  ]

  let cart = []
  let activeCategory = "tradicional"

  // Elementos do DOM
  const loadingScreen = document.getElementById("loading-screen")
  const cartButton = document.getElementById("cart-button")
  const cartCount = document.getElementById("cart-count")
  const cartSidebar = document.getElementById("cart-sidebar")
  const closeCartButton = document.getElementById("close-cart-button")
  const cartOverlay = document.getElementById("cart-overlay")
  const categoriesContainer = document.getElementById("categories-container")
  const menuItemsContainer = document.getElementById("menu-items-container")
  const cartItemsContainer = document.getElementById("cart-items-container")
  const emptyCartMessage = document.getElementById("empty-cart-message")
  const cartSummary = document.getElementById("cart-summary")
  const cartTotal = document.getElementById("cart-total")
  const customerInfoForm = document.getElementById("customer-info-form")
  const whatsappOrderButton = document.getElementById("whatsapp-order-button")

  const customerInfo = {
    name: "",
    address: "",
    phone: "",
    observations: "",
  }

  // Funções do Carrinho
  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
    if (totalItems > 0) {
      cartCount.classList.remove("scale-0")
      cartCount.classList.add("scale-100")
    } else {
      cartCount.classList.remove("scale-100")
      cartCount.classList.add("scale-0")
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const renderCart = () => {
    cartItemsContainer.innerHTML = "" // Limpa o carrinho
    if (cart.length === 0) {
      emptyCartMessage.classList.remove("hidden")
      cartSummary.classList.add("hidden")
      customerInfoForm.classList.add("hidden")
      whatsappOrderButton.classList.add("hidden")
    } else {
      emptyCartMessage.classList.add("hidden")
      cartSummary.classList.remove("hidden")
      customerInfoForm.classList.remove("hidden")
      whatsappOrderButton.classList.remove("hidden")

      cart.forEach((item) => {
        const cartItemDiv = document.createElement("div")
        cartItemDiv.className =
          "bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-xl border border-gray-600 cart-item-card"
        cartItemDiv.innerHTML = `
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-bold text-white text-lg">${item.name}</h3>
            <button data-id="${item.id}" class="text-red-400 hover:text-red-300 p-1 hover:bg-red-500/20 rounded-full transition-colors remove-item-button">
              <i class="lucide lucide-x w-4 h-4"></i>
            </button>
          </div>
          <p class="text-sm text-gray-400 mb-4">${item.description}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button data-id="${item.id}" data-action="minus" class="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors text-white quantity-button">
                <i class="lucide lucide-minus w-4 h-4"></i>
              </button>
              <span class="font-bold text-white text-lg w-8 text-center">${item.quantity}</span>
              <button data-id="${item.id}" data-action="plus" class="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white rounded-full flex items-center justify-center transition-colors quantity-button">
                <i class="lucide lucide-plus w-4 h-4"></i>
              </button>
            </div>
            <span class="font-bold text-yellow-400 text-lg">
              R$ ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        `
        cartItemsContainer.appendChild(cartItemDiv)
      })
    }
    cartTotal.textContent = `R$ ${getTotalPrice().toFixed(2)}`
    updateCartCount()
  }

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }
    renderCart()
  }

  const updateQuantity = (id, change) => {
    const itemIndex = cart.findIndex((item) => item.id === id)
    if (itemIndex > -1) {
      cart[itemIndex].quantity += change
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1) // Remove if quantity is 0 or less
      }
    }
    renderCart()
  }

  const removeFromCart = (id) => {
    cart = cart.filter((item) => item.id !== id)
    renderCart()
  }

  // Event Listeners para o Carrinho
  cartButton.addEventListener("click", () => {
    cartSidebar.classList.remove("translate-x-full")
    cartOverlay.classList.add("is-visible")
  })

  closeCartButton.addEventListener("click", () => {
    cartSidebar.classList.add("translate-x-full")
    cartOverlay.classList.remove("is-visible")
  })

  cartOverlay.addEventListener("click", () => {
    cartSidebar.classList.add("translate-x-full")
    cartOverlay.classList.remove("is-visible")
  })

  // Delegação de eventos para botões de quantidade e remover no carrinho
  cartItemsContainer.addEventListener("click", (event) => {
    const target = event.target.closest("button")
    if (!target) return

    const itemId = Number.parseInt(target.dataset.id)
    if (target.classList.contains("remove-item-button")) {
      removeFromCart(itemId)
    } else if (target.classList.contains("quantity-button")) {
      const action = target.dataset.action
      updateQuantity(itemId, action === "plus" ? 1 : -1)
    }
  })

  // Funções do Menu
  const renderCategories = () => {
    categoriesContainer.innerHTML = ""
    categories.forEach((category) => {
      const button = document.createElement("button")
      button.className = `px-6 py-3 rounded-full flex items-center space-x-3 transition-all duration-300 font-semibold category-button ${
        activeCategory === category.id
          ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-red-500/25`
          : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
      }`
      button.dataset.category = category.id
      button.innerHTML = `<span class="text-xl">${category.icon}</span><span>${category.name}</span>`
      categoriesContainer.appendChild(button)
    })
  }

  const renderMenuItems = (category) => {
    menuItemsContainer.innerHTML = "" // Limpa os itens do menu
    const filteredItems = menuItems.filter((item) => item.category === category)

    filteredItems.forEach((item, index) => {
      const menuItemDiv = document.createElement("div")
      menuItemDiv.className = "relative menu-item-card"
      menuItemDiv.style.animationDelay = `${index * 0.1}s` // Simula delay de animação
      menuItemDiv.innerHTML = `
        <div class="h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-red-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 p-6 rounded-xl">
          ${
            item.popular
              ? `<div class="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg popular-badge">
                  ⭐ POPULAR
                </div>`
              : ""
          }
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-bold text-xl text-white leading-tight pr-2">${item.name}</h3>
            <span class="bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold text-lg px-4 py-2 shadow-lg rounded-full">
              R$ ${item.price.toFixed(2)}
            </span>
          </div>
          <p class="text-gray-300 text-sm mb-6 leading-relaxed">${item.description}</p>
          <button data-id="${item.id}" class="w-full bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl add-to-cart-button">
            <i class="lucide lucide-plus w-5 h-5"></i>
            <span>Adicionar ao Carrinho</span>
          </button>
        </div>
      `
      menuItemsContainer.appendChild(menuItemDiv)
    })
  }

  // Delegação de eventos para botões de categoria
  categoriesContainer.addEventListener("click", (event) => {
    const target = event.target.closest("button")
    if (target && target.dataset.category) {
      activeCategory = target.dataset.category
      renderCategories() // Re-renderiza para atualizar o estilo do botão ativo
      renderMenuItems(activeCategory)
    }
  })

  // Delegação de eventos para botões "Adicionar ao Carrinho"
  menuItemsContainer.addEventListener("click", (event) => {
    const target = event.target.closest(".add-to-cart-button")
    if (target && target.dataset.id) {
      const itemId = Number.parseInt(target.dataset.id)
      const itemToAdd = menuItems.find((item) => item.id === itemId)
      if (itemToAdd) {
        addToCart(itemToAdd)
      }
    }
  })

  // Funções do Formulário de Cliente e WhatsApp
  const nameInput = document.getElementById("name")
  const phoneInput = document.getElementById("phone")
  const addressInput = document.getElementById("address")
  const observationsInput = document.getElementById("observations")

  nameInput.addEventListener("input", (e) => (customerInfo.name = e.target.value))
  phoneInput.addEventListener("input", (e) => (customerInfo.phone = e.target.value))
  addressInput.addEventListener("input", (e) => (customerInfo.address = e.target.value))
  observationsInput.addEventListener("input", (e) => (customerInfo.observations = e.target.value))

  whatsappOrderButton.addEventListener("click", () => {
    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, Telefone, Endereço)!")
      return
    }

    const orderDetails = cart
      .map((item) => `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    const total = getTotalPrice()
    const message = `🍔 *PEDIDO THE RUA HAMBURGUERIA* 🍔

👤 *Cliente:* ${customerInfo.name}
📱 *Telefone:* ${customerInfo.phone}
📍 *Endereço:* ${customerInfo.address}

📋 *PEDIDO:*
${orderDetails}

💰 *TOTAL: R$ ${total.toFixed(2)}*

${customerInfo.observations ? `📝 *Observações:* ${customerInfo.observations}` : ""}

Obrigado pela preferência! 🙏
*The Rua - Hambúrguer Artesanal*`

    // Substitua '5511999999999' pelo número de WhatsApp real da hamburgueria
    const whatsappUrl = `https://wa.me/5522997140245?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })

  // Animação de carregamento inicial
  setTimeout(() => {
    loadingScreen.classList.add("opacity-0")
    setTimeout(() => {
      loadingScreen.remove()
      // Ativa as animações das seções principais após o carregamento
      document.querySelector("header").style.transform = "translateY(0)"
      // A seção hero já tem animate-fade-in, que é ativada no carregamento do DOM
      // Não precisamos de uma classe específica para ela aqui, pois já está no HTML
    }, 1000) // Tempo para a transição de opacidade
  }, 2000) // Tempo que a tela de carregamento fica visível

  // Observer para animações ao rolar
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Elemento visível em 10%
  }

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target) // Para de observar depois de animar
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)

  document.querySelectorAll(".animate-fade-in-on-scroll").forEach((el) => observer.observe(el))
  document.querySelectorAll(".animate-fade-in-on-scroll-delay-1").forEach((el) => observer.observe(el))

  // Inicialização
  renderCategories()
  renderMenuItems(activeCategory)
  renderCart() // Renderiza o carrinho vazio inicialmente
})

