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
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={selectedProduct[0].image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {selectedProduct[0].title}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <MdStar />
                  <span class="text-gray-600 ml-3">
                    {selectedProduct[0].rating}
                  </span>
                </span>
              </div>
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ₹ {selectedProduct[0].price}
                </span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
