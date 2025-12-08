// Mock products database - replace with real API calls
export const mockProducts = [
  {
    id: 1,
    title: "Monstera Deliciosa",
    description: "Beautiful indoor plant with large leaves",
    price: 45000,
    image: "https://via.placeholder.com/300x300?text=Monstera",
    category: "Indoor Plants",
  },
  {
    id: 2,
    title: "Pothos Golden",
    description: "Climbing plant with golden variegation",
    price: 32000,
    image: "https://via.placeholder.com/300x300?text=Pothos",
    category: "Climbing Plants",
  },
  {
    id: 3,
    title: "Snake Plant",
    description: "Low maintenance succulent plant",
    price: 28000,
    image: "https://via.placeholder.com/300x300?text=SnakePlant",
    category: "Succulents",
  },
  {
    id: 4,
    title: "Rubber Plant",
    description: "Tall decorative indoor plant",
    price: 52000,
    image: "https://via.placeholder.com/300x300?text=RubberPlant",
    category: "Indoor Plants",
  },
  {
    id: 5,
    title: "Peace Lily",
    description: "Elegant flowering houseplant",
    price: 38000,
    image: "https://via.placeholder.com/300x300?text=PeaceLily",
    category: "Flowering Plants",
  },
  {
    id: 6,
    title: "ZZ Plant",
    description: "Glossy-leaved air-purifying plant",
    price: 41000,
    image: "https://via.placeholder.com/300x300?text=ZZPlant",
    category: "Indoor Plants",
  },
];

// Simulate API call
export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};
