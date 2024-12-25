const products = {
    1: {
        id: 1,
        title: "iPhone 13",
        category: "iphone",
        monthlyPrice: 49.00,
        annualPrice: 249.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2FiPhone%2B13%2BThumb.png&w=1920&q=75", 
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2FiPhone%2B13%2B-%2B2.jpg&w=1920&q=75"],
        colors: [
            { name: "Azul", code: "#007bff" },
            { name: "Verde", code: "#28a745" }
        ],
        description: "iPhone 13 com tecnologia avançada. Assine e receba todo mês!",
        specifications: {
            "Tela": "6.1\" Retina",
            "Processador": "A15",
            "Câmera": "Sistema Duplo 12MP"
        }
    },
    2: {
        id: 2,
        title: "iPhone 13 Pro Max",
        category: "pro",
        monthlyPrice: 59.30,
        annualPrice: 356.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2BPRO%2FiPhone%2B13%2BPro%2BThumb.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2BPRO%2FiPhone%2B13%2BPro%2B-%2B2.jpg&w=1920&q=75"],
        colors: [
            { name: "Grafite", code: "#333333" },
            { name: "Dourado", code: "#FFD700" }
        ],
        description: "O mais avançado iPhone Pro Max. Assine e tenha o melhor da tecnologia!",
        specifications: {
            "Tela": "6.7\" Super Retina XDR",
            "Processador": "A15 Bionic",
            "Câmera": "Sistema Pro Triple 12MP"
        }
    },
    3: {
        id: 3,
        title: "MacBook Pro",
        category: "notebook",
        monthlyPrice: 74.21,
        annualPrice: 440.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FMACBOOK%2BPRO%2BMacBook%2BPro%2BThumb.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FMACBOOK%2BPRO%2BMacBook%2BPro%2B-%2B2.jpg&w=1920&q=75"],
        colors: [
            { name: "Cinza Espacial", code: "#4A4A4A" },
            { name: "Prata", code: "#C0C0C0" }
        ],
        description: "MacBook Pro com chip M1. Poder e performance incomparáveis!",
        specifications: {
            "Tela": "13\" Retina",
            "Processador": "Apple M1",
            "RAM": "8GB"
        }
    },
    4: {
        id: 4,
        title: "iPhone 11",
        category: "iphone11",
        monthlyPrice: 26.00,
        annualPrice: 156.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B11%2FiPhone%2B11%2BThumb.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B11%2FiPhone%2B11%2B-%2B2.jpg&w=1920&q=75"],
        colors: [
            { name: "Preto", code: "#000000" },
            { name: "Branco", code: "#FFFFFF" }
        ],
        description: "iPhone 11 com ótimo custo-benefício. Assine já!",
        specifications: {
            "Tela": "6.1\" LCD",
            "Processador": "A13",
            "Câmera": "Sistema Duplo 12MP"
        }
    },
    5: {
        id: 5,
        title: "PS5",
        category: "ps5",
        monthlyPrice: 82.00,
        annualPrice: 490.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FPS5%2BPS5%2BThumb.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FPS5%2BPS5%2B-%2B2.jpg&w=1920&q=75"],
        colors: [
            { name: "Branco", code: "#FFFFFF" }
        ],
        description: "PlayStation 5. A próxima geração dos games chegou!",
        specifications: {
            "SSD": "825GB",
            "GPU": "10.28 TFLOPS",
            "RAM": "16GB GDDR6"
        }
    },
    6: {
        id: 6,
        title: "Apple Watch",
        category: "watch",
        monthlyPrice: 16.00,
        annualPrice: 96.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FAPPLE%2BWATCH%2BApple%2BWatch%2BThumb.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FAPPLE%2BWATCH%2BApple%2BWatch%2B-%2B2.jpg&w=1920&q=75"],
        colors: [
            { name: "Preto", code: "#000000" },
            { name: "Prata", code: "#C0C0C0" }
        ],
        description: "Apple Watch Series 7. Seu companheiro perfeito!",
        specifications: {
            "Tela": "41mm/45mm",
            "Bateria": "18 horas",
            "GPS": "Sim"
        }
    }
};

window.products = products;