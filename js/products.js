const products = [
    {
        id: "ranger-l",
        name: "RANGER L Expedition Pack",
        category: "backpacks",
        price: 359.90,
        dailyRate: 25.00,
        rating: 4.9,
        reviews: 128,
        description: "The RANGER L is a professional-grade 55L expedition pack engineered for multi-day tactical missions and extreme wilderness logistics. Built with a high-tensile internal aluminum frame, it features our signature PALS webbing system for modular expansion and ergonomic load distribution.",
        mainImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "package", label: "Capacity", value: "55 Liters" },
            { icon: "weight", label: "Weight", value: "2.4 kg" },
            { icon: "shield", label: "Material", value: "1000D Cordura" },
            { icon: "cloud-rain", label: "Rating", value: "Waterproof" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["Internal Frame", "Rain Cover", "Side Pouches (x2)", "Maintenance Kit"]
    },
    {
        id: "ranger-m",
        name: "RANGER M Mission Pack",
        category: "backpacks",
        price: 229.90,
        dailyRate: 18.00,
        rating: 4.8,
        reviews: 94,
        description: "A highly versatile 30L technical pack perfect for short-duration missions, day hikes, and rugged EDC requirements. Made of water-resistant Cordura, it features a semi-rigid back panel, padded shoulder straps, and a quick-access hydration pocket.",
        mainImage: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "package", label: "Capacity", value: "30 Liters" },
            { icon: "weight", label: "Weight", value: "1.6 kg" },
            { icon: "shield", label: "Material", value: "1000D Cordura" },
            { icon: "move", label: "Frame", value: "Semi-Rigid" }
        ],
        status: "In Stock",
        includes: ["Backpack", "Removable Waist Belt", "Compression Straps"]
    },
    {
        id: "ranger-s",
        name: "RANGER S Tactical Daypack",
        category: "backpacks",
        price: 139.90,
        dailyRate: 12.00,
        rating: 4.7,
        reviews: 62,
        description: "The RANGER S is a compact 20L daypack designed for speed and agility. Featuring low-profile PALS webbing, breathable mesh padding, and multiple interior organizer pockets, it is the ultimate option for fast-moving tactical urban and wilderness operations.",
        mainImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "package", label: "Capacity", value: "20 Liters" },
            { icon: "weight", label: "Weight", value: "0.8 kg" },
            { icon: "shield", label: "Material", value: "500D Nylon" },
            { icon: "droplets", label: "Hydration", value: "2L Ready" }
        ],
        status: "Fast Shipping Available",
        includes: ["Daypack", "Sternum Strap", "Organizer Pouch"]
    },
    {
        id: "ranger-xl",
        name: "RANGER XL Heavy Hauler",
        category: "backpacks",
        price: 459.90,
        dailyRate: 32.00,
        rating: 5.0,
        reviews: 75,
        description: "Our largest expedition pack with a massive 70L volume capacity. Crafted specifically for extreme polar, alpine, and high-stakes logistics missions, the RANGER XL guarantees comfort under loads up to 35kg through its pivoting hip-belt geometry.",
        mainImage: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "package", label: "Capacity", value: "70 Liters" },
            { icon: "weight", label: "Weight", value: "3.1 kg" },
            { icon: "shield", label: "Material", value: "1000D Cordura" },
            { icon: "refresh-cw", label: "Pivoting Hip", value: "Yes" }
        ],
        status: "Heavy Duty Gear - In Stock",
        includes: ["Expedition Frame", "Heavy Rain Cover", "Polar Pull-straps", "Accessory Kit"]
    },
    {
        id: "ranger-duffel",
        name: "RANGER Duffel Bag 90L",
        category: "duffels",
        price: 199.90,
        dailyRate: 15.00,
        rating: 4.8,
        reviews: 43,
        description: "An indestructible, weatherproof 90L duffel built from double-coated TPU ballistic fabric. Ready to be loaded onto trucks, aircraft, or carried on-back via detachable ergonomic shoulder straps, this gear hauler keeps water out in any monsoon environment.",
        mainImage: "assets/category_duffels.png",
        gallery: [
            "assets/category_duffels.png"
        ],
        specs: [
            { icon: "package", label: "Capacity", value: "90 Liters" },
            { icon: "weight", label: "Weight", value: "1.2 kg" },
            { icon: "shield", label: "Material", value: "Ballistic TPU" },
            { icon: "cloud-rain", label: "Seals", value: "IPX6 Rated" }
        ],
        status: "In Stock",
        includes: ["Duffel Bag", "Detachable Shoulder Straps", "Utility Storage Bag"]
    },
    {
        id: "alpine-tent",
        name: "Alpine 4P Geodesic Tent",
        category: "tents",
        price: 450.00,
        dailyRate: 45.00,
        rating: 4.9,
        reviews: 156,
        description: "The Alpine 4-Person Tent is a four-season basecamp masterpiece. Specially designed to withstand howling winds and heavy snow loads, its geodesic dome configuration and aircraft-grade aluminum poles provide unmatched structure and weather resistance.",
        mainImage: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "users", label: "Capacity", value: "4 People" },
            { icon: "weight", label: "Weight", value: "4.2 kg" },
            { icon: "cloud-snow", label: "Season", value: "4-Season" },
            { icon: "shield", label: "Material", value: "70D Ripstop" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["Tent Body", "Full-coverage Rainfly", "Aluminum Poles", "Snow Stakes", "Repair Kit"]
    },
    {
        id: "arctic-shield",
        name: "Arctic Shield 2P Tent",
        category: "tents",
        price: 320.00,
        dailyRate: 30.00,
        rating: 4.8,
        reviews: 81,
        description: "An ultralight, storm-proof 2-person tent optimized for high-altitude bivouacking and arctic winds. Featuring an aerodynamic profile that redirects crosswinds, a dual-entrance vestibulary system, and an ultra-breathable canopy to eliminate condensation.",
        mainImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "users", label: "Capacity", value: "2 People" },
            { icon: "weight", label: "Weight", value: "2.8 kg" },
            { icon: "cloud-snow", label: "Season", value: "4-Season" },
            { icon: "wind", label: "Wind Limit", value: "90 km/h" }
        ],
        status: "In Stock",
        includes: ["Tent Canopy", "Aerodynamic Rainfly", "DAC Poles", "V-Stakes", "Compression Sack"]
    },
    {
        id: "tactical-bivy",
        name: "Tactical Bivy Shelter",
        category: "tents",
        price: 110.00,
        dailyRate: 10.00,
        rating: 4.6,
        reviews: 37,
        description: "The ultimate minimalist shelter. Weighing less than a kilogram, this breathable, waterproof eVent fabric bivy keeps you dry in harsh conditions while maintaining a virtually invisible silhouette in the field. Perfect for solo scouts and stealth campers.",
        mainImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "users", label: "Capacity", value: "1 Person" },
            { icon: "weight", label: "Weight", value: "0.9 kg" },
            { icon: "droplets", label: "Fabric", value: "3-Layer eVent" },
            { icon: "eye-off", label: "Signature", value: "Low Profile" }
        ],
        status: "In Stock",
        includes: ["Bivy Sack", "Single Support Hoop", "Ultra-light Stakes", "Carry Bag"]
    },
    {
        id: "subzero-bag",
        name: "SubZero -20°F Sleeping Bag",
        category: "sleeping",
        price: 320.00,
        dailyRate: 18.00,
        rating: 5.0,
        reviews: 88,
        description: "Engineered for survival in subzero climates. Rated down to -20°F (-29°C), this sleeping bag features premium 800-fill power hydrophobic goose down wrapped in a water-resistant Pertex Quantum shell. Form-fitting hood and neck collars prevent convective heat loss.",
        mainImage: "assets/subzero_bag.png",
        gallery: [
            "assets/subzero_bag.png"
        ],
        specs: [
            { icon: "thermometer", label: "Temp Rating", value: "-20°F / -29°C" },
            { icon: "feather", label: "Fill Power", value: "800 FP Down" },
            { icon: "weight", label: "Weight", value: "1.4 kg" },
            { icon: "shield", label: "Shell", value: "Pertex Quantum" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["Sleeping Bag", "Waterproof Compression Sack", "Mesh Storage Bag"]
    },
    {
        id: "reactor-stove",
        name: "Reactor Cooking System",
        category: "cooking",
        price: 189.90,
        dailyRate: 12.00,
        rating: 4.9,
        reviews: 215,
        description: "The fastest, most fuel-efficient all-weather stove system ever built. The Reactor's radiant burner and enclosed heat exchanger ensure you can boil water in under 3 minutes even in gale-force winds. Ideal for melting snow and preparing warm meals fast.",
        mainImage: "assets/reactor_stove.png",
        gallery: [
            "assets/reactor_stove.png"
        ],
        specs: [
            { icon: "zap", label: "Boil Time", value: "2.8 min" },
            { icon: "flame", label: "Burner", value: "Radiant" },
            { icon: "wind", label: "Windproof", value: "Yes" },
            { icon: "droplets", label: "Fuel", value: "Isobutane" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["1.7L Pot", "Burner Unit", "BPA-Free Strainer Lid", "Scrubbing Pad"]
    },
    {
        id: "mess-kit",
        name: "Titanium Minimalist Mess Kit",
        category: "cooking",
        price: 79.90,
        dailyRate: 5.00,
        rating: 4.7,
        reviews: 56,
        description: "Ultralight, corrosion-resistant, and practically indestructible. This nesting kit includes a pot, pan/lid, and titanium spork that nest together into a compact mesh storage bag. It handles direct flames easily without warping or degrading.",
        mainImage: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "weight", label: "Weight", value: "180 g" },
            { icon: "shield", label: "Material", value: "Grade A Titanium" },
            { icon: "package", label: "Pieces", value: "3-Piece Kit" },
            { icon: "refresh-cw", label: "Durability", value: "Lifetime" }
        ],
        status: "In Stock",
        includes: ["900ml Pot", "Frying Pan/Lid", "Titanium Spork", "Mesh Storage Sack"]
    },
    {
        id: "sat-navigator",
        name: "Satellite Emergency Navigator",
        category: "accessories",
        price: 299.90,
        dailyRate: 15.00,
        rating: 4.8,
        reviews: 67,
        description: "Stay connected beyond grid limits. This high-precision GPS communicator utilizes the global Iridium satellite network to provide two-way messaging, real-time tracking, and an interactive SOS emergency button linked directly to Search & Rescue dispatch.",
        mainImage: "https://images.unsplash.com/photo-1530631673369-bc20fdb32288?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1530631673369-bc20fdb32288?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "network", label: "Network", value: "Iridium Satellite" },
            { icon: "battery", label: "Battery Life", value: "Up to 100 Hours" },
            { icon: "shield", label: "Impact Rating", value: "MIL-STD-810G" },
            { icon: "weight", label: "Weight", value: "210 g" }
        ],
        status: "In Stock",
        includes: ["Satellite Device", "Carabiner Strap", "USB Charging Cable", "Activation Guide"]
    },
    {
        id: "modular-pouches",
        name: "Modular MOLLE Pouch Set",
        category: "accessories",
        price: 65.00,
        dailyRate: 6.00,
        rating: 4.6,
        reviews: 29,
        description: "A set of 3 heavy-duty utility pouches built with 1000D Cordura and rust-resistant YKK zippers. Equipped with standard MOLLE/PALS backing straps, they attach securely to any of our RANGER pack platforms to organize first aid kits, ammo, or mapping tools.",
        mainImage: "assets/category_accessories.png",
        gallery: [
            "assets/category_accessories.png"
        ],
        specs: [
            { icon: "package", label: "Pieces", value: "3 Pouches" },
            { icon: "weight", label: "Total Weight", value: "350 g" },
            { icon: "shield", label: "Material", value: "1000D Cordura" },
            { icon: "grid", label: "System", value: "MOLLE/PALS" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["Admin Pouch", "Med-Kit Pouch", "General Utility Pouch"]
    },
    {
        id: "ranger-duffel-45",
        name: "RANGER Duffel Bag 45L",
        category: "duffels",
        price: 129.90,
        dailyRate: 10.00,
        rating: 4.7,
        reviews: 38,
        description: "A compact, weatherproof 45L duffel built from double-coated TPU ballistic fabric. Perfect for short missions and technical day-hauls where water protection is critical. Features detachable shoulder strap and MOLLE attachment points.",
        mainImage: "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "package", label: "Capacity", value: "45 Liters" },
            { icon: "weight", label: "Weight", value: "0.8 kg" },
            { icon: "shield", label: "Material", value: "Ballistic TPU" },
            { icon: "cloud-rain", label: "Seals", value: "IPX6 Rated" }
        ],
        status: "In Stock",
        includes: ["Duffel Bag", "Detachable Shoulder Strap", "Stuff Sack"]
    },
    {
        id: "arctic-pad",
        name: "Arctic Insulated Sleeping Pad",
        category: "sleeping",
        price: 149.90,
        dailyRate: 8.00,
        rating: 4.8,
        reviews: 52,
        description: "An expedition-grade insulated sleeping pad with an R-value of 6.5, designed for extreme subzero ground insulation. The self-inflating core and reinforced TPU base provide unmatched comfort on snow, rock, and frozen tundra.",
        mainImage: "https://images.unsplash.com/photo-1708105559945-ad5d6612c78c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xlZXBpbmclMjBwYWR8ZW58MHx8MHx8fDA%3D",
        gallery: [
            "https://images.unsplash.com/photo-1708105559945-ad5d6612c78c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xlZXBpbmclMjBwYWR8ZW58MHx8MHx8fDA%3D"
        ],
        specs: [
            { icon: "thermometer", label: "R-Value", value: "6.5" },
            { icon: "weight", label: "Weight", value: "1.1 kg" },
            { icon: "package", label: "Dimensions", value: "72\" x 25\"" },
            { icon: "shield", label: "Material", value: "TPU / Insulated" }
        ],
        status: "In Stock",
        includes: ["Sleeping Pad", "Repair Kit", "Compression Sack"]
    },
    {
        id: "survival-kit",
        name: "Tactical Survival Kit PRO",
        category: "accessories",
        price: 89.90,
        dailyRate: 7.00,
        rating: 4.9,
        reviews: 73,
        description: "A mission-critical 35-piece survival kit packed in a waterproof MOLLE-compatible pouch. Includes fire starter, signal mirror, emergency blanket, multi-tool, compass, and tactical flashlight. Essential for any backcountry deployment.",
        mainImage: "https://images.unsplash.com/photo-1776687773955-17135a5cff90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhY3RpY2FsJTIwc3Vydml2YWwlMjBraXR8ZW58MHx8MHx8fDA%3D",
        gallery: [
            "https://images.unsplash.com/photo-1776687773955-17135a5cff90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhY3RpY2FsJTIwc3Vydml2YWwlMjBraXR8ZW58MHx8MHx8fDA%3D"
        ],
        specs: [
            { icon: "package", label: "Pieces", value: "35-Piece Kit" },
            { icon: "weight", label: "Total Weight", value: "450 g" },
            { icon: "shield", label: "Pouch Material", value: "1000D Cordura" },
            { icon: "grid", label: "System", value: "MOLLE/PALS" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["Survival Pouch", "Fire Starter", "Signal Mirror", "Multi-Tool", "Compass"]
    }
];

// Helper functions to interact with product inventory
function getProductById(id) {
    return products.find(p => p.id === id);
}

function getFeaturedProducts(limit = 4) {
    // Return key products for home page showcasing
    const featuredIds = ["ranger-l", "alpine-tent", "subzero-bag", "reactor-stove"];
    return products.filter(p => featuredIds.includes(p.id)).slice(0, limit);
}

function getProductsByCategory(category) {
    if (!category || category === "all") return products;
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
