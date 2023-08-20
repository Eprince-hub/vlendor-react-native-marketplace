export const services = [
  {
    id: 1,
    name: 'Service 1',
    price: 100,
    description: 'This is service 1',
    image: '../assets/productImages/cleaning.jpg',
    serviceProvider: {
      id: 1,
      name: 'Provider 1',
      image: '../assets/productImages/cleaning.jpg',
    },
  },
  {
    id: 2,
    name: 'Service 2',
    price: 200,
    description: 'This is service 2',
    image: '../assets/productImages/cleaning.jpg',
    serviceProvider: {
      id: 2,
      name: 'Provider 2',
      image: '../assets/productImages/cleaning.jpg',
    },
  },
  {
    id: 3,
    name: 'Service 3',
    price: 300,
    description: 'This is service 3',
    image: '../assets/productImages/cleaning.jpg',
    serviceProvider: {
      id: 3,
      name: 'Provider 3',
      image: '../assets/productImages/cleaning.jpg',
    },
  },
  {
    id: 4,
    name: 'Service 4',
    price: 400,
    description: 'This is service 4',
    image: '../assets/productImages/cleaning.jpg',
    serviceProvider: {
      id: 4,
      name: 'Provider 4',
      image: '../assets/productImages/cleaning.jpg',
    },
  },
  {
    id: 5,
    name: 'Service 5',
    price: 500,
    description: 'This is service 5',
    image: '../assets/productImages/cleaning.jpg',
    serviceProvider: {
      id: 5,
      name: 'Provider 5',
      image: '../assets/productImages/cleaning.jpg',
    },
  },
];

export function getProducts() {
  return services;
}

export function getProduct(id: number) {
  return services.find(service => service.id === id);
}
