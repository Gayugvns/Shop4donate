import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProductDetails from "@/components/Products/ProductDetails";
import CategoryFilter from "@/components/Products/CategoryFilter";
import KidsFashionSection from "@/components/Products/FashionShowcase";
import TopSellingProducts from "@/components/Products/TopSellingProducts";
import TestimonialSection from "@/components/Products/TestimonialSection";

const Products = () => {
  return (
    <><Navbar/>
    <div className="relative mt-[150px] min-h-screen  bg-[#fafaf5]">
      <div className="mt-10">
      <ProductDetails />
      </div>
      <div className="mt-10">
      <CategoryFilter/>
      </div>
      <div className="mt-10">
      
      <KidsFashionSection/>
      </div>
      <div className="mt-10">

      <TopSellingProducts/>
      </div>
      <div className="mt-10">
      <TestimonialSection />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Products;
