const data = [
  {
    id: 1,
    title: "Gray Full Rim Square",
    category: "BlueGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_1_imlnnm.png",
    price: 1499,
    rating: 4.5,
    description: "The Gray Full Rim Square is a classic design that adds a touch of elegance to your outfit. Its square shape is both stylish and timeless, making it a popular choice for both men and women."
  },
  {
    id: 2,
    title: "Black Sky Blue Full Rim",
    category: "EyeGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_1_zrftup.png",
    price: 1899,
    rating: 4.8,
    description: "The Black Sky Blue Full Rim is a sophisticated and stylish choice for those who want to make a statement. Its black frame is paired with a sky blue lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 3,
    title: "Gold Full Rim Wayfarer",
    category: "SunGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793551/Light-Lens%20Images/sunglasses_1_hcyi65.png",
    price: 2099,
    rating: 4.3,
    description: "The Gold Full Rim Wayfarer is a classic and timeless choice for those who want to make a statement. Its gold frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 4,
    title: "Blue Full Rim Cat",
    category: "BlueGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_2_fjrpcm.png",
    price: 1399,
    rating: 4.2,
    description: "The Blue Full Rim Cat is a bold and stylish choice for those who want to make a statement. Its blue frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 5,
    title: "Matte Black Full Rim",
    category: "BlueGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_3_iko6jj.png",
    price: 1599,
    rating: 4.3,
    description: "The Matte Black Full Rim is a sophisticated and stylish choice for those who want to make a statement. Its black frame is paired with a sky blue lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 6,
    title: "Blue Full Rim Round",
    category: "BlueGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790981/Light-Lens%20Images/blueglasses_4_wvto80.png",
    price: 1699,
    rating: 4.7,
    description: "The Blue Full Rim Round is a bold and stylish choice for those who want to make a statement. Its blue frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 7,
    title: "Black and Blue Full Rim Round",
    category: "BlueGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668790979/Light-Lens%20Images/blueglasses_5_nfzoti.png",
    price: 1999,
    rating: 4.9,
    description: "The Black and Blue Full Rim Round is a bold and stylish choice for those who want to make a statement. Its black frame is paired with a blue lens, creating a striking contrast that is both modern and eye-catching."
  },

  {
    id: 8,
    title: "Red Full Rim Cat",
    category: "EyeGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_2_uc8psy.png",
    price: 1299,
    rating: 4.1,
    description: "The Red Full Rim Cat is a bold and stylish choice for those who want to make a statement. Its red frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 9,
    title: "Silver Full Rim ",
    category: "EyeGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_3_ktqisz.png",
    price: 1799,
    rating: 4.6,
    description: "The Silver Full Rim is a bold and stylish choice for those who want to make a statement. Its silver frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 10,
    title: "Pink Full Rim Round",
    category: "EyeGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793540/Light-Lens%20Images/eyeglasses_4_pkhsha.png",
    price: 1599,
    rating: 4.5,
    description: "The Pink Full Rim Round is a bold and stylish choice for those who want to make a statement. Its pink frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 11,
    title: "Transparent Full Rim Round",
    category: "EyeGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793538/Light-Lens%20Images/eyeglasses_5_yvaphm.png",
    price: 1999,
    rating: 4.9,
    description: "The Transparent Full Rim Round is a bold and stylish choice for those who want to make a statement. Its transparent frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },

  {
    id: 12,
    title: "Gold Full Rim Round",
    category: "SunGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793550/Light-Lens%20Images/sunglasses_2_cr8kly.png",
    price: 2399,
    rating: 4.7,
    description: "The Gold Full Rim Round is a bold and stylish choice for those who want to make a statement. Its gold frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 13,
    title: "Golden Full Rim Cat",
    category: "SunGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793549/Light-Lens%20Images/sunglasses_3_acnpvo.png",
    price: 2199,
    rating: 4.5,
    description: "The Golden Full Rim Cat is a bold and stylish choice for those who want to make a statement. Its golden frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 14,
    title: "Matte Gold Full Rim Aviator",
    category: "SunGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793549/Light-Lens%20Images/sunglasses_4_anzmn1.png",
    price: 2499,
    rating: 4.9,
    description: "The Matte Gold Full Rim Aviator is a bold and stylish choice for those who want to make a statement. Its matte gold frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
  {
    id: 15,
    title: "Black Full Rim Round",
    category: "SunGlasses",
    image:
      "https://res.cloudinary.com/djhxhasu0/image/upload/v1668793549/Light-Lens%20Images/sunglasses_5_db4knl.png",
    price: 2299,
    rating: 4.7,
    description: "The Black Full Rim Round is a bold and stylish choice for those who want to make a statement. Its black frame is paired with a black lens, creating a striking contrast that is both modern and eye-catching."
  },
];
export default data;
