import React from "react";
import Swipper from "@/components/Blogs/Caurosel";
import BlogPostHighlight from "@/components/Blogs/BlogPostHighlight";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BlogUpdateSection from "@/components/Blogs/BlogUpdateSection";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <main className="relative mt-[150px]">
        <Swipper />

        {/* Overlapping Blog Card */}
        <div className="relative z-30 mt-[-50px] px-4 md:px-8">
          <BlogPostHighlight />
        </div>

   <BlogUpdateSection/>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
