import React from "react";
import { MdStar } from "react-icons/md";
import { DataContext } from "../../context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { ID } = useParams();
  const { products, handleAddToCart } = useContext(DataContext);

  const selectedProduct = Object.values(products.blueglasses).filter(
    (product) => {
      if (product.id === Number(ID)) {
        return product;
      }
    }
  );
  // console.log(selectedProduct);

  return (
    <>
      <section>
        <div className="container flex justify-center items-center space-x-64 my-10">
          <div className="">
            <img
              src={selectedProduct[0].image}
              className="w-72"
              alt={selectedProduct[0].title}
            />
          </div>
          <div className="w-[500px] details flex flex-col justify-center items-start space-y-5">
            <div className="title">
              <h1 className="text-4xl">{selectedProduct[0].title}</h1>
            </div>
            <MdStar color="#4a99d3" />
            <p className="text-xl w-[550px]">{selectedProduct[0].rating}</p>
            <div className="">
              <p className="text-3xl">Price: ${selectedProduct[0].price}</p>
            </div>
            <div className="flex justify-between items-center bg-[#4a99d3] text-white p-2 space-x-2 rounded-md">
              <button onClick={()=>{handleAddToCart(selectedProduct[0])}}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
