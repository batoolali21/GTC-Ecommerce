// GTC Tobacco & Trading Center Product Catalog Data

const productsData = [
  {
    id: 1,
    name: "GTC Classic Red Tobacco",
    category: "Cigarettes",
    price: "PKR 1,200",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.22 PM.jpeg",
    description: "Premium rich Virginia tobacco blend crafted for authentic, full-flavored satisfaction. Selected from finest leaf origins.",
    specs: ["Origin: Premium Virginia Leaf", "Strength: Medium-Full", "Packaging: 20s Pack / Carton"]
  },
  {
    id: 2,
    name: "GTC Gold Leaf Selection",
    category: "Cigarettes",
    price: "PKR 1,450",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.23 PM.jpeg",
    description: "Smooth golden cured tobacco delivering a subtle aroma and soft refined draw.",
    specs: ["Origin: Golden Cured Blend", "Strength: Mild-Smooth", "Packaging: 20s Hard Box"]
  },
  {
    id: 3,
    name: "GTC Royal Cut Fine Tobacco",
    category: "Fine Cut Tobacco",
    price: "PKR 2,100",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.23 PM (1).jpeg",
    description: "Hand-picked fine cut rolling tobacco with natural moisture seal for hand-rolling enthusiasts.",
    specs: ["Type: Fine Cut Rolling Tobacco", "Moisture: Sealed 50g Pouch", "Flavor Profile: Pure & Natural"]
  },
  {
    id: 4,
    name: "GTC Menthol Breeze Special",
    category: "Cigarettes",
    price: "PKR 1,350",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.24 PM.jpeg",
    description: "Refreshing menthol-infused blend providing a crisp, cool sensation with every puff.",
    specs: ["Flavor: Menthol Cooling Capsule", "Strength: Medium", "Packaging: Premium Pack"]
  },
  {
    id: 5,
    name: "GTC Grand Reserve Hookah Flavor",
    category: "Hookah Flavors",
    price: "PKR 1,800",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.24 PM (1).jpeg",
    description: "Exotic molasses hookah molasses blend infused with natural fruity essences and rich smoke density.",
    specs: ["Weight: 250g Container", "Flavor: Double Apple & Mint", "Smoke Density: Ultra Thick"]
  },
  {
    id: 6,
    name: "GTC Platinum Cigarillos",
    category: "Cigars & Cigarillos",
    price: "PKR 3,200",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.24 PM (2).jpeg",
    description: "Hand-rolled mini cigars wrapped in natural tobacco leaves, offering deep woody notes.",
    specs: ["Wrapper: Natural Leaf", "Count: Pack of 10", "Flavor Notes: Cedar & Dark Chocolate"]
  },
  {
    id: 7,
    name: "GTC Silver Ultra Lights",
    category: "Cigarettes",
    price: "PKR 1,300",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.25 PM.jpeg",
    description: "Light and clean blend designed for smokers seeking a subtle, low-tar experience without compromising taste.",
    specs: ["Strength: Light / Low Tar", "Filter: Charcoal Recessed", "Packaging: Flip Top Box"]
  },
  {
    id: 8,
    name: "GTC Dark Burley Special Cut",
    category: "Fine Cut Tobacco",
    price: "PKR 2,400",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.25 PM (1).jpeg",
    description: "Deep roasted Dark Burley tobacco blend boasting robust aroma and slow-burning quality.",
    specs: ["Blend: Dark Roasted Burley", "Weight: 100g Tin", "Burn Rate: Slow & Even"]
  },
  {
    id: 9,
    name: "GTC Grape & Mint Hookah Molasses",
    category: "Hookah Flavors",
    price: "PKR 1,750",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.25 PM (2).jpeg",
    description: "Sweet juicy grape blended with icy mint for a long-lasting hookah session.",
    specs: ["Flavor: Juicy Grape & Ice", "Weight: 250g", "Nicotine: 0.05%"]
  },
  {
    id: 10,
    name: "GTC Black Edition Special Blend",
    category: "Cigarettes",
    price: "PKR 1,600",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.26 PM.jpeg",
    description: "Exclusive matte black edition pack featuring cured oriental leaf notes for connoisseurs.",
    specs: ["Editions: Limited Matte Black", "Strength: Bold", "Filter: Gold Foil Ring"]
  },
  {
    id: 11,
    name: "GTC Amber Pipe Tobacco",
    category: "Pipe Tobacco",
    price: "PKR 2,800",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.26 PM (1).jpeg",
    description: "Aromatic pipe tobacco mixture with honey and vanilla undertones.",
    specs: ["Cut: Ribbon Cut", "Aroma: Warm Vanilla & Amber", "Weight: 100g Sealed Can"]
  },
  {
    id: 12,
    name: "GTC Natural Unfiltered Classic",
    category: "Cigarettes",
    price: "PKR 1,400",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.26 PM (2).jpeg",
    description: "Traditional unfiltered tobacco for pure, unmodified tobacco flavor.",
    specs: ["Type: Non-Filter Classic", "Blend: 100% American Blend", "Pack: Soft Pack"]
  },
  {
    id: 13,
    name: "GTC Premium Coconut Charcoal",
    category: "Accessories",
    price: "PKR 950",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.27 PM.jpeg",
    description: "Eco-friendly natural coconut shell charcoal cubes. Odorless and spark-free.",
    specs: ["Material: 100% Coconut Shell", "Quantity: 1kg (72 Cubes)", "Burn Time: Up to 90 mins"]
  },
  {
    id: 14,
    name: "GTC Blueberry Blast Shisha",
    category: "Hookah Flavors",
    price: "PKR 1,850",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.27 PM (1).jpeg",
    description: "Wild blueberry infusion creating thick aromatic cloud performance.",
    specs: ["Flavor: Ripe Blueberry", "Weight: 250g", "Moisture: High Syrup Density"]
  },
  {
    id: 15,
    name: "GTC Master Blend Cigar Box",
    category: "Cigars & Cigarillos",
    price: "PKR 6,500",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.27 PM (3).jpeg",
    description: "Handcrafted cigars presented in a wooden presentation box.",
    specs: ["Origin: Aged Wrapper", "Box Count: 5 Premium Cigars", "Ring Gauge: 50"]
  },
  {
    id: 16,
    name: "GTC Golden Virginia Pouch",
    category: "Fine Cut Tobacco",
    price: "PKR 2,250",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.28 PM.jpeg",
    description: "Sun-cured bright Virginia leaf cut finely for easy rolling.",
    specs: ["Weight: 50g Foil Pack", "Includes: Rolling Papers", "Cut: Extra Fine"]
  },
  {
    id: 17,
    name: "GTC Clove Special Spice Blend",
    category: "Cigarettes",
    price: "PKR 1,700",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.28 PM (1).jpeg",
    description: "Indonesian spiced clove blend with distinct crackle and sweet spicy fragrance.",
    specs: ["Blend: Kretek Clove & Tobacco", "Strength: Rich & Spicy", "Packaging: Hard Box"]
  },
  {
    id: 18,
    name: "GTC Mango Passion Shisha",
    category: "Hookah Flavors",
    price: "PKR 1,800",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.28 PM (2).jpeg",
    description: "Tropical mango and passionfruit molasses blend for smooth summer vibes.",
    specs: ["Flavor: Tropical Fruit", "Weight: 250g Tub", "Smoke: Extra Smooth"]
  },
  {
    id: 19,
    name: "GTC Classic Brass Lighter",
    category: "Accessories",
    price: "PKR 1,500",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.29 PM.jpeg",
    description: "Refillable windproof brass lighter featuring etched GTC insignia.",
    specs: ["Material: Solid Brass", "Fuel: Fluid Refillable", "Windproof: Yes"]
  },
  {
    id: 20,
    name: "GTC Oriental Turkish Leaf",
    category: "Fine Cut Tobacco",
    price: "PKR 2,600",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.29 PM (1).jpeg",
    description: "Aromatic small-leaf Turkish tobacco renowned for distinct sun-cured spice notes.",
    specs: ["Origin: Izmir Leaf", "Weight: 100g Tin", "Aroma: Exotic Spice"]
  },
  {
    id: 21,
    name: "GTC Ice Watermelon Shisha",
    category: "Hookah Flavors",
    price: "PKR 1,800",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.29 PM (2).jpeg",
    description: "Chilled juicy watermelon hookah flavor with sub-zero cooling kick.",
    specs: ["Flavor: Ice Watermelon", "Weight: 250g", "Chill Index: High"]
  },
  {
    id: 22,
    name: "GTC Heritage Slims Line",
    category: "Cigarettes",
    price: "PKR 1,400",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.30 PM.jpeg",
    description: "Elegant slim form factor with velvety smooth smoke texture.",
    specs: ["Format: Super Slims", "Count: 20 Sticks", "Strength: Moderate"]
  },
  {
    id: 23,
    name: "GTC Rolling Paper & Filter Tips Kit",
    category: "Accessories",
    price: "PKR 450",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.30 PM (1).jpeg",
    description: "Ultra-thin organic hemp rolling papers complete with roach filter tips.",
    specs: ["Material: 100% Unbleached Organic Hemp", "Leaves: 50 Papers + 50 Tips per Booklet", "Gum: Natural Arabic"]
  },
  {
    id: 24,
    name: "GTC Executive Leather Cigar Case",
    category: "Accessories",
    price: "PKR 3,800",
    image: "img/WhatsApp Image 2026-07-30 at 1.47.22 PM.jpeg",
    description: "Genuine Spanish cedar lined leather travel humidor case holding up to 3 cigars.",
    specs: ["Material: Genuine Leather & Cedar", "Capacity: 3 Cigars", "Includes: Stainless Steel Cutter"]
  }
];

function getWhatsAppBuyUrl(product) {
  const phoneNumber = "923164970924";
  const message = `Hello GTC! I want to order the following product:\n\n*Product Name:* ${product.name}\n*Price:* ${product.price}\n*Category:* ${product.category}\n\nPlease guide me on available stock and payment options. Thank you!`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

if (typeof window !== 'undefined') {
  window.productsData = productsData;
  window.getWhatsAppBuyUrl = getWhatsAppBuyUrl;
}
