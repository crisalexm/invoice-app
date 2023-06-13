
export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Crist',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 1000
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 12345678
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            quantity: 1,
            price: 499,
        },
        {
            id:2,
            product: 'Corsair Keyboard Mecanico',
            quantity: 1,
            price: 150,
        },
        {
            id:3,
            product: 'Monitor',
            quantity: 1,
            price: 300,
        }
    ]
}