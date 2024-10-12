const data = [
  {
    id: 1,
    title: "Gray Full Rim Square",
    category: "BlueLight",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_1_imlnnm.png",
    price: 1299.99,
    rating: 4.2,
    description: "Classic gray full rim square glasses with blue light filtering lenses. Perfect for long hours of computer work, these glasses combine style with eye protection.",
    color: "Gray",
    shape: "Square"
  },
  {
    id: 2,
    title: "Black Sky Blue Full Rim",
    category: "Optical",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_1_zrftup.png",
    price: 1599.50,
    rating: 4.7,
    description: "Sophisticated black frame with sky blue accents. These full rim glasses offer a striking contrast that's both modern and professional.",
    color: "Black/Sky Blue",
    shape: "Rectangle"
  },
  {
    id: 3,
    title: "Gold Full Rim Wayfarer",
    category: "SunGlasses",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793551/Light-Lens%20Images/sunglasses_1_hcyi65.png",
    price: 1899.00,
    rating: 3.5,
    description: "Timeless gold wayfarer sunglasses with dark lenses. These full rim shades offer classic style with modern sun protection.",
    color: "Gold",
    shape: "Wayfarer"
  },
  {
    id: 4,
    title: "Blue Full Rim Cat Eye",
    category: "BlueLight",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_2_fjrpcm.png",
    price: 1199.99,
    rating: 2.3,
    description: "Bold blue cat eye glasses with blue light filtering technology. Perfect for making a statement while protecting your eyes during screen time.",
    color: "Blue",
    shape: "Cat Eye"
  },
  {
    id: 5,
    title: "Matte Black Full Rim",
    category: "BlueLight",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_3_iko6jj.png",
    price: 1399.50,
    rating: 4.3,
    description: "Sleek matte black frames with blue light filtering lenses. These versatile glasses offer a professional look with digital eye strain protection.",
    color: "Matte Black",
    shape: "Rectangle"
  },
  {
    id: 6,
    title: "Blue Full Rim Round",
    category: "BlueLight",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790981/Light-Lens%20Images/blueglasses_4_wvto80.png",
    price: 1499.99,
    rating: 4.6,
    description: "Trendy blue round frames with blue light filtering technology. These glasses combine retro style with modern eye protection for digital device users.",
    color: "Blue",
    shape: "Round"
  },
  {
    id: 7,
    title: "Black and Blue Full Rim Round",
    category: "BlueLight",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_5_nfzoti.png",
    price: 1699.00,
    rating: 3.8,
    description: "Stylish black and blue round frames with advanced blue light filtering. These glasses offer a perfect blend of fashion and function for the digital age.",
    color: "Black/Blue",
    shape: "Round"
  },
  {
    id: 8,
    title: "Red Full Rim Cat Eye",
    category: "Optical",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_2_uc8psy.png",
    price: 1099.99,
    rating: 3.1,
    description: "Vibrant red cat eye glasses that make a bold statement. These full rim frames are perfect for those who want to stand out with their eyewear.",
    color: "Red",
    shape: "Cat Eye"
  },
  {
    id: 9,
    title: "Silver Full Rim Rectangle",
    category: "Optical",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_3_ktqisz.png",
    price: 1599.00,
    rating: 4.4,
    description: "Sleek silver rectangular frames that offer a sophisticated look. These versatile glasses are suitable for both professional and casual settings.",
    color: "Silver",
    shape: "Rectangle"
  },
  {
    id: 10,
    title: "Pink Full Rim Round",
    category: "Optical",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793540/Light-Lens%20Images/eyeglasses_4_pkhsha.png",
    price: 1399.99,
    rating: 4.2,
    description: "Charming pink round frames that add a touch of whimsy to your look. These full rim glasses are perfect for those who love a pop of color.",
    color: "Pink",
    shape: "Round"
  },
  {
    id: 11,
    title: "Transparent Full Rim Round",
    category: "Optical",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_5_yvaphm.png",
    price: 1799.00,
    rating: 4.9,
    description: "Modern transparent round frames that offer a lightweight, barely-there look. These glasses are perfect for those who prefer a subtle, minimalist style.",
    color: "Transparent",
    shape: "Round"
  },
  {
    id: 12,
    title: "Gold Full Rim Round Sunglasses",
    category: "SunGlasses",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793550/Light-Lens%20Images/sunglasses_2_cr8kly.png",
    price: 2199.99,
    rating: 4.6,
    description: "Luxurious gold round sunglasses that exude elegance. These full rim shades offer both style and superior UV protection for sunny days.",
    color: "Gold",
    shape: "Round"
  },
  {
    id: 13,
    title: "Golden Full Rim Cat Eye Sunglasses",
    category: "SunGlasses",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793549/Light-Lens%20Images/sunglasses_3_acnpvo.png",
    price: 1999.50,
    rating: 3.0,
    description: "Glamorous golden cat eye sunglasses that channel vintage Hollywood. These full rim shades are perfect for making a statement while protecting your eyes.",
    color: "Gold",
    shape: "Cat Eye"
  },
  {
    id: 14,
    title: "Matte Gold Full Rim Aviator",
    category: "SunGlasses",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793549/Light-Lens%20Images/sunglasses_4_anzmn1.png",
    price: 2299.00,
    rating: 5.0,
    description: "Classic matte gold aviator sunglasses with a modern twist. These full rim shades offer timeless style with state-of-the-art sun protection.",
    color: "Matte Gold",
    shape: "Aviator"
  },
  {
    id: 15,
    title: "Black Full Rim Round Sunglasses",
    category: "SunGlasses",
    image: "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793549/Light-Lens%20Images/sunglasses_5_db4knl.png",
    price: 2099.99,
    rating: 4.5,
    description: "Sleek black round sunglasses that offer a cool, urban look. These full rim shades provide excellent sun protection with a touch of mystery.",
    color: "Black",
    shape: "Round"
  }
];

export default data;