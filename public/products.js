const products = [
    {
        id: 1,
        title: "iPhone 13",
        category: "iphone",
        catalog: "smartphones",
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
    {
        id: 2,
        title: "iPhone 13 Pro Max",
        category: "pro",
        catalog: "smartphones",
        monthlyPrice: 59.30,
        annualPrice: 356.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2BPRO%2FiPhone%2B13%2BPro%2BThumb.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2BPRO%2FiPhone%2B13%2BPro%2B3.jpg&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FIPHONE%2B13%2BPRO%2FiPhone%2B13%2BPro%2B4.jpg&w=1920&q=75"],
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
    {
        id: 3,
        title: "MacBook Pro",
        category: "notebook",
        catalog: "notebooks",
        monthlyPrice: 74.21,
        annualPrice: 440.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FMacbook%2BAir%2BM113%2FMacboook%2BAir%2B1.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FMacbook%2BAir%2BM113%2FMacbook%2BAir%2B2.jpg&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FMacbook%2BAir%2BM113%2FMacbook%2BAir%2B3.jpg&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fyacare-products-image.s3.sa-east-1.amazonaws.com%2Fnew-site%2FMacbook%2BAir%2BM113%2FMacbook%2BAir%2B4.jpg&w=1920&q=75"],
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
    {
        id: 4,
        title: "iPhone 11",
        category: "iphone11",
        catalog: "smartphones",
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
    {
        id: 5,
        title: "PS5",
        category: "ps5",
        catalog: "games",
        monthlyPrice: 82.00,
        annualPrice: 490.00,
        images: ["https://www.allugator.com/_next/image?url=https%3A%2F%2Fv2-allugator-images.s3.amazonaws.com%2Fproducts%2Fplay-5_site-ago.2024.png&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fv2-allugator-images.s3.amazonaws.com%2Fproducts%2F2%2520%25281%2529.jpeg&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fv2-allugator-images.s3.amazonaws.com%2Fproducts%2F3%2520%25281%2529.jpeg&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fv2-allugator-images.s3.amazonaws.com%2Fproducts%2F4%2520%25281%2529.jpeg&w=1920&q=75",
                 "https://www.allugator.com/_next/image?url=https%3A%2F%2Fv2-allugator-images.s3.amazonaws.com%2Fproducts%2F5%2520%25281%2529.jpeg&w=1920&q=75"],
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
    {
        id: 6,
        title: "Apple Watch",
        category: "watch",
        catalog: "smartwatches",
        monthlyPrice: 16.00,
        annualPrice: 96.00,
        images: ["https://a-static.mlcdn.com.br/800x560/apple-watch-se-gps-caixa-prateada-de-aluminio-de-40-mm-pulseira-esportiva-denim-tamanho-p-m-mxec3be-a/kabum/634547/2656cce9e292e98ffb5f60d94c98fddd.jpeg",
                 "https://a-static.mlcdn.com.br/800x560/apple-watch-se-gps-caixa-prateada-de-aluminio-de-40-mm-pulseira-esportiva-denim-tamanho-p-m-mxec3be-a/kabum/634547/010ca993b7528859bca811daaa481eec.jpeg",
                 "https://a-static.mlcdn.com.br/800x560/apple-watch-se-gps-caixa-prateada-de-aluminio-de-40-mm-pulseira-esportiva-denim-tamanho-p-m-mxec3be-a/kabum/634547/10ef619645accdb16dab78f0afa10ff7.jpeg",
                 "https://a-static.mlcdn.com.br/800x560/apple-watch-se-gps-caixa-prateada-de-aluminio-de-40-mm-pulseira-esportiva-denim-tamanho-p-m-mxec3be-a/kabum/634547/f334672f2452f50296d3c68ff4c3dfbe.jpeg"],
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
];

window.products = products;