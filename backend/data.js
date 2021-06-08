import bcrypt from 'bcryptjs';
const data = {
    users: [{
            name: 'Suraj',
            email: 'admin@example.com',
            // 8 for random salt which is provide autometically
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            // 8 for random salt which is provide autometically
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [{
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 50,
            brand: 'Adidas',
            rating: 4.2,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Lacoste free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 15,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pant',
            image: '/images/p4.jpg',
            price: 200,
            countInStock: 30,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product'
        },
        {
            name: 'Puma slim Pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 100,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 20,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 120,
            countInStock: 25,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 18,
            description: 'high quality product'
        },
    ]
}
export default data;