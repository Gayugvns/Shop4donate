import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function BlogPostHighlight() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-blue-900 text-white py-10 px-6 md:px-16 w-[90%] md:w-[75%] lg:w-[75%] mx-auto"
    >
      <h2 className="uppercase text-xl tracking-wide text-white/80 mb-4 text-center">
        Most Recent Blog Post
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src="/donation/donation3.jpg"
            alt="Woman with goats"
            className="rounded-lg w-full object-cover h-full"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            How four charities are helping communities unlock their full potential
          </h3>
          <p className="text-yellow-300 font-semibold mb-2">April 14, 2025</p>

          <p className="text-white/90 mb-4">
            Around the world, communities face a multitude of challenges that prevent
            them from reaching their full potential. Yet through partnerships between
            charities and community members, organizations like Action Against Hunger,
            Church World Service, Oxfam America, and Unitarian Universalist Service
            Committee{!expanded ? '...' : (
              <>
                , are making sustainable change possible. These initiatives focus on food
                security, education, healthcare, and clean water—ensuring that every person
                has the tools and support they need to thrive. Empowering local leaders and
                fostering resilience has become a cornerstone of these efforts.
              </>
            )}
          </p>

          <button
            onClick={toggleExpanded}
            className="inline-flex items-center text-white font-medium hover:underline focus:outline-none"
          >
            {expanded ? (
              <>
                View Less <ArrowLeft className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
