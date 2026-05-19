const products = [
    {
        id: "alpine-tent",
        name: "Alpine 4-Person Tent",
        category: "Tents",
        price: 450.00,
        dailyRate: 45.00,
        rating: 4.9,
        reviews: 156,
        description: "The Alpine 4-Person Tent is a four-season masterpiece. Designed for basecamp stability in high-altitude environments, it features a geodesic dome structure that shrugs off heavy snow and gale-force winds.",
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
        includes: ["Tent Body", "Rainfly", "Aluminum Poles", "Snow Stakes", "Repair Kit"]
    },
    {
        id: "trailblazer-pack",
        name: "Trailblazer 65L Backpack",
        category: "Backpacks",
        price: 289.00,
        dailyRate: 20.00,
        rating: 4.8,
        reviews: 210,
        description: "The Trailblazer 65L is the ultimate long-distance companion. With an adjustable suspension system and highly breathable mesh back panel, it makes heavy loads feel lighter on the longest trail days.",
        mainImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "package", label: "Volume", value: "65 Liters" },
            { icon: "weight", label: "Weight", value: "1.9 kg" },
            { icon: "move", label: "Frame", value: "Internal Wire" },
            { icon: "droplets", label: "Hydration", value: "3L Ready" }
        ],
        status: "In Stock",
        includes: ["Backpack", "Rain Cover", "Removable Lid", "Hip Belt Pouches"]
    },
    {
        id: "subzero-bag",
        name: "SubZero Sleeping Bag",
        category: "Sleeping Gear",
        price: 320.00,
        dailyRate: 15.00,
        rating: 5.0,
        reviews: 88,
        description: "Survive the coldest nights with the SubZero. Rated down to -20°F, this 800-fill power down bag features a waterproof breathable shell and an ergonomic mummy shape to trap maximum heat.",
        mainImage: "https://images.unsplash.com/photo-1534130339746-83616238b939?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1534130339746-83616238b939?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "thermometer", label: "Temp Rating", value: "-20°F / -29°C" },
            { icon: "feather", label: "Fill", value: "800 FP Down" },
            { icon: "weight", label: "Weight", value: "1.4 kg" },
            { icon: "shield", label: "Shell", value: "Pertex Quantum" }
        ],
        status: "Reserved for These Dates",
        includes: ["Sleeping Bag", "Compression Sack", "Storage Mesh Bag"]
    },
    {
        id: "ranger-l",
        name: "RANGER L - Desert Brown",
        category: "Backpacks",
        price: 359.90,
        dailyRate: 25.00,
        rating: 4.9,
        reviews: 128,
        description: "The RANGER L is a professional-grade 55L expedition pack designed for multi-day tactical missions and extreme wilderness logistics. Featuring our patented PALS webbing system and a high-tensile internal aluminum frame.",
        mainImage: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800"
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
        id: "reactor-stove",
        name: "Reactor Cooking System",
        category: "Cooking",
        price: 189.90,
        dailyRate: 12.00,
        rating: 4.9,
        reviews: 215,
        description: "The fastest, most fuel-efficient all-weather stove system ever built. The Reactor's radiant burner and enclosed heat exchanger ensure you can boil water in under 3 minutes even in gale-force winds.",
        mainImage: "https://images.unsplash.com/photo-1596267366631-df10707944d0?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1596267366631-df10707944d0?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "zap", label: "Boil Time", value: "2.8 min" },
            { icon: "flame", label: "Burner", value: "Radiant" },
            { icon: "wind", label: "Windproof", value: "Yes" },
            { icon: "droplets", label: "Fuel", value: "Isobutane" }
        ],
        status: "In Stock & Ready for Trail",
        includes: ["1.7L Pot", "Burner Unit", "BPA-Free Lid", "PackTowl Scrub"]
    },
    {
        id: "mess-kit",
        name: "Titanium Mess Kit",
        category: "Cooking",
        price: 79.90,
        dailyRate: 5.00,
        rating: 4.7,
        reviews: 56,
        description: "Ultralight, corrosion-resistant, and practically indestructible. This titanium nesting kit is the ultimate cookware solution for minimalist backpackers who count every gram.",
        mainImage: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=800",
        gallery: [
            "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { icon: "weight", label: "Weight", value: "180g" },
            { icon: "shield", label: "Material", value: "Grade A Titanium" },
            { icon: "package", label: "Pieces", value: "3-Piece Kit" },
            { icon: "refresh-cw", label: "Durability", value: "Lifetime" }
        ],
        status: "In Stock",
        includes: ["900ml Pot", "Frying Pan/Lid", "Titanium Spork", "Mesh Bag"]
    }
];

// Helper function to get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}
