import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MdStar, MdShoppingCart } from "react-icons/md";
import { DataContext } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { ID } = useParams();
  const { loggedInUser } = useContext(AuthContext);
  const { products, handleAddToCart } = useContext(DataContext);

  const selectedProduct = products.filter((product) => {
    if (product.id === Number(ID)) {
      return product;
    }
  });

  return (
    <>
      <section className="text-gray-600 font-Inter overflow-hidden">
        <div className="container lg:min-h-screen flex justify-center items-center px-10 lg:px-24 py-10 mx-auto">
          <div className="flex flex-col lg:flex-row flex-1 gap-x-20">
            <div className="basis-full">
              <img
                className="w-full object-cover"
                src={selectedProduct[0].image}
                alt={selectedProduct[0].title}
              />
            </div>
            <div className="w-full space-y-3">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {selectedProduct[0].title}
              </h1>
              <h3>Category: {selectedProduct[0].category}</h3>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <MdStar />
                  <span className="text-gray-600 ml-3">
                    {selectedProduct[0].rating}
                  </span>
                </span>
              </div>
              <p className="leading-relaxed text-[15px] lg:text-lg">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="w-72 flex flex-col justify-center space-y-3 pt-2">
                <p className="title-font font-medium text-2xl text-gray-900">
                  ??? {selectedProduct[0].price}
                </p>
                <div className="flex justify-center items-center bg-[#4a99d3] text-white p-2 space-x-2 rounded-md">
                  <MdShoppingCart size={30} />
                  {loggedInUser ? (
                    <Link to={`/products/${selectedProduct[0].id}`}>
                      <button
                        onClick={() => handleAddToCart(selectedProduct[0])}
                      >
                        Add To Cart
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
