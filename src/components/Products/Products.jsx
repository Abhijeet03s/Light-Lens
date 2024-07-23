import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

export default function Products() {
  return (
    <>
      <div className="container max-w-full py-10">
        <div className="flex-1 flex flex-col px-3 lg:flex-row">
          <Filter />
          <Cards />
        </div>
      </div>
    </>
  );
}
