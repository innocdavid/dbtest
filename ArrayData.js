const products = [

  {
    id: '1', 
    name: 'IPhone 12 Pro...',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/phone12_epdwht.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/phone12_epdwht.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/phone12_epdwht.jpg',
    ],
    brand: 'Apple',
    price: '1.3ETH/$2000.00',
    original: '1.6ETH/$1800.00',
    category: 'Phone',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 10,
    rating: 4.5,
    numReviews: 1
  },

  {
    id: '2', 
    name: 'Land(Plot) 25/25 sqm',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/land_q7mddz.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/land_q7mddz.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/land_q7mddz.jpg',
    ],
    brand: 'Land',
    price: '10.8ETH/$30,000.00',
    original: '9.9ETH/$29,000.00',
    category: 'Land',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 1,
    rating: 4.5,
    numReviews: 10
  },

  {
    id: '3', 
    name: 'Toyota 86..',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/toyoto86_nwfxnt.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/toyoto86_nwfxnt.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/toyoto86_nwfxnt.jpg',
    ],
    brand: 'Toyota',
    price: '10.8ETH/$30,000.00',
    original: '9.8ETH/$27,000.00',
    category: 'Car',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 1,
    rating: 4.5,
    numReviews: 8
  },

  {
    id: '4', 
    name: 'MacBook Pro M2 Chip..',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/macbook_lae8dg.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/macbook_lae8dg.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/macbook_lae8dg.jpg',
    ],
    brand: 'Apple',
    price: '5.8ETH/$6,000.00',
    original: '5.8ETH/$5,909.00',
    category: 'Computer',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 20,
    rating: 4.5,
    numReviews: 29
  },

  {
    id: '5', 
    name: 'Bicycle Mountain..',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/bicycle_sygpgm.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/bicycle_sygpgm.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/bicycle_sygpgm.jpg',
    ],
    brand: 'Bikers',
    price: '0.8ETH/$800.00',
    original: '0.79ETH/$750.00',
    category: 'Bikes',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 10,
    rating: 4.5,
    numReviews: 1
  },

  {
    id: '6', 
    name: 'Google Pixel',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/pexels_aww206.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/pexels_aww206.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/pexels_aww206.jpg',
    ],
    brand: 'Google Inc',
    price: '1.0ETH/$1,000.00',
    original: '0.9ETH/$890.00',
    category: 'Phone',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 10,
    rating: 4.5,
    numReviews: 1
  },

  {
    id: '7', 
    name: 'Kampala Estate..',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/estate_yjrka9.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/estate_yjrka9.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/estate_yjrka9.jpg',
    ],
    brand: 'Estates',
    price: '1.0BTC/$30,000.00',
    original: '0.99BTC/$29,000.00',
    category: 'Estates'
    description: 'The iPhone 12 is a premium handset',
    countInStock: 1,
    rating: 4.5,
    numReviews: 1
  },

  {
    id: '8', 
    name: 'Jeans..',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/clothing_olwgth.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/clothing_olwgth.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/clothing_olwgth.jpg',
    ],
    brand: 'Nike',
    price: '0.00030ETH/$20.00',
    original: '0.0004ETH/$20.00',
    category: 'Clothes',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 10,
    rating: 4.5,
    numReviews: 1
  },

  {
    id: '9', 
    name: 'Sony PlayStation 5',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/sony_qwrdij.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/sony_qwrdij.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/sony_qwrdij.jpg',
    ],
    brand: 'Sony',
    price: '1.0ETH/$1,000.00',
    original: '0.99ETH/$29,000.00',
    category: 'Games',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 10,
    rating: 4.5,
    numReviews: 1
  },

  {
    id: '10', 
    name: 'Wedding Dress..',
    imageUrl: [
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/dress_gcsels.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/dress_gcsels.jpg',
      'https://res.cloudinary.com/dknnf52ij/image/upload/v1661419593/agalm/dress_gcsels.jpg',
    ],
    brand: 'Dress',
    price: '1.0ETH/$1,000.00',
    original: '0.99ETH/$29,000.00',
    category: 'Dress',
    description: 'The iPhone 12 is a premium handset',
    countInStock: 10,
    rating: 4.5,
    numReviews: 1
  }
];
