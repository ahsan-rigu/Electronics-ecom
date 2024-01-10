const data = {
  products: [
    {
      id: 1,
      name: "Smartphone X",
      brand: "TechCo",
      category: "Mobile Phones",
      price: 499.99,
      description: "A high-end smartphone with advanced features.",
      image:
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Ultra HD Smart TV",
      brand: "ElectroVision",
      category: "Televisions",
      price: 799.99,
      description:
        "Immerse yourself in stunning 4K resolution with smart TV capabilities.",
      image:
        "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Gaming Laptop Pro",
      brand: "GameMaster",
      category: "Laptops",
      price: 1299.99,
      description:
        "Powerful gaming laptop with high-performance hardware for the best gaming experience.",
      image:
        "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Wireless Noise-Canceling Headphones",
      brand: "SoundBliss",
      category: "Audio",
      price: 149.99,
      description:
        "Enjoy crystal-clear audio with wireless convenience and active noise cancellation.",
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Smart Home Security Camera",
      brand: "SecureTech",
      category: "Smart Home",
      price: 89.99,
      description:
        "Keep your home secure with a smart camera that provides live streaming and motion detection.",
      image:
        "https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Tablet Pro",
      brand: "TechGadget",
      category: "Tablets",
      price: 349.99,
      description:
        "Versatile tablet with a high-resolution display and powerful processing.",
      image:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      name: "Smart Watch Elite",
      brand: "WearTech",
      category: "Wearable Tech",
      price: 199.99,
      description:
        "Stay connected and monitor your health with this feature-packed smartwatch.",
      image:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      name: "Compact Digital Camera",
      brand: "PhotoMaster",
      category: "Cameras",
      price: 299.99,
      description:
        "Capture stunning photos and videos with this easy-to-use digital camera.",
      image:
        "https://images.pexels.com/photos/371909/pexels-photo-371909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      brand: "AudioSync",
      category: "Audio",
      price: 79.99,
      description:
        "Portable Bluetooth speaker with rich sound quality for on-the-go entertainment.",
      image:
        "https://images.pexels.com/photos/6322727/pexels-photo-6322727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      name: "Wireless Charging Pad",
      brand: "PowerUp",
      category: "Accessories",
      price: 29.99,
      description:
        "Convenient wireless charging pad compatible with various devices.",
      image:
        "https://images.pexels.com/photos/6044930/pexels-photo-6044930.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      name: "Ultra-Thin Laptop",
      brand: "SlimTech",
      category: "Laptops",
      price: 899.99,
      description:
        "Sleek and lightweight laptop with a high-resolution display and long battery life.",
      image:
        "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      name: "Virtual Reality Headset",
      brand: "VRExperience",
      category: "Virtual Reality",
      price: 249.99,
      description:
        "Immerse yourself in virtual worlds with this advanced VR headset.",
      image:
        "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};

let cart = [];
if (!localStorage.cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
} else {
  cart = JSON.parse(localStorage.getItem("cart"));
}

let contianer = document.querySelector(".products-container");

const addToCart = (_id) => {
  Boolean(cart.find(({ id }) => _id == id))
    ? (cart = cart.map((item) => ({ ...item, quantity: item.quantity + 1 })))
    : (cart = [
        ...cart,
        { ...data.products.find(({ id }) => _id == id), quantity: 1 },
      ]);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
};

contianer.innerHTML = data.products
  .map(
    (el) =>
      `<div class='card'>
        <img src="${el.image}" alt="${el.name}">
        <h2>${el.name}</h2>
        <h3>${el.brand}</h3>
        <p>Price: ${el.price}</p>
        <button onclick={addToCart(${el.id})}>Add to cart</button>
     </div>`
  )
  .join();

let;
