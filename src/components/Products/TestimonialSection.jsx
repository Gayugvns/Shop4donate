import React, { useState } from "react";

const testimonials = [
  {
    name: "Emily",
    role: "Fashion Designer",
    quote:
      "Wore it once, and the world turned its head — style spoke louder than words ever could.",
    detail:
      "Absolutely in love with my purchase! The fit is perfect, and the fabric feels so luxurious. I've never gotten so many compliments!",
    image: "https://via.placeholder.com/80x80.png?text=Emily",
  },
  {
    name: "Michael",
    role: "Entrepreneur",
    quote: "This is the most stylish outfit I've ever owned.",
    detail:
      "The delivery was quick, and the quality exceeded my expectations. I’ll definitely shop again!",
    image: "https://via.placeholder.com/80x80.png?text=Michael",
  },
  {
    name: "Sophia",
    role: "Influencer",
    quote: "Photos don’t do justice — you need to wear it to feel it.",
    detail:
      "Amazing colors, great comfort, and perfect for every occasion. 10/10!",
    image: "https://via.placeholder.com/80x80.png?text=Sophia",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, role, quote, detail, image } = testimonials[index];

  return (
    <section className="text-center py-16 bg-white relative overflow-hidden">
      <h5 className="text-blue-400 text-sm mb-2">Testimonial</h5>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        What our Customer says?
      </h2>

      <div className="relative flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg z-10"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[140%] text-blue-400 text-5xl font-serif">
          “
        </div>
      </div>

      <p className="text-blue-500 font-medium max-w-xl mx-auto mb-4 px-4">
        "{quote}"
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 px-4">{detail}</p>

      <p className="font-bold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={prev}
          className="bg-blue-100 hover:bg-blue-200 text-blue-500 px-4 py-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Next
        </button>
      </div>

      {/* Floating avatars (decorative) */}
      <div className="absolute top-[10%] left-[10%] opacity-20">
        <img
          src="https://via.placeholder.com/60.png?text=User1"
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-[15%] left-[15%] opacity-20">
        <img
          src="https://via.placeholder.com/60.png?text=User2"
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="absolute top-[20%] right-[10%] opacity-20">
        <img
          src="https://via.placeholder.com/60.png?text=User3"
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-[10%] right-[15%] opacity-20">
        <img
          src="https://via.placeholder.com/60.png?text=User4"
          className="rounded-full"
          alt=""
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
