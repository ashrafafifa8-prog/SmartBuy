import { useState, useEffect } from "react";
import Cards from "./Cards";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  // Loading
  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#F7F3EA]">
        <div className="text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-2 border-[#C8A96B]/30 border-t-[#153F34]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#A5834E]">
            Loading Products
          </p>

          <div className="mx-auto mt-4 h-px w-16 bg-[#C8A96B]" />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7F3EA] px-5 py-16 md:px-10 lg:px-16">
      
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-7xl">
        
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C8A96B]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#A5834E]">
            SmartBuy Collection
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          
          <div>
            <h1 className="font-serif text-4xl leading-tight text-[#153F34] md:text-5xl lg:text-6xl">
              Explore Our Products
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#737C75]">
              Discover quality products at smart prices. Find everything
              you need in one place with SmartBuy.
            </p>
          </div>

          {/* Product Count */}
          <div className="flex w-fit items-center gap-3 border border-[#D4CCBD] bg-[#FBF9F4] px-5 py-3">
            <span className="font-serif text-xl text-[#153F34]">
              {products.length}
            </span>

            <span className="h-4 w-px bg-[#C8A96B]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#737C75]">
              Products
            </span>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-10 h-px w-full bg-[#DED7C9]" />
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Cards
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsApi;