// import { MdStar } from "react-icons/md";
// import { useContext } from "react";
// import { DataContext } from "../../context/Context";
// import { Link } from "react-router-dom";
// import CartIcon from "../../assets/assets/cart.svg";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

export default function Products() {
  // const { products, handleAddToCart } = useContext(DataContext);

  return (
    <>
      <div className="container max-w-full py-10">
        <div className="flex-1 flex flex-col lg:flex-row">
          <Filter />
          <Cards />
        </div>
      </div>
    </>
  );
}
