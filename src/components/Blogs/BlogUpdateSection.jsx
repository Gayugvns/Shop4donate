'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const dummyData = [
  {
    id: 1,
    title: 'How four charities are helping communities unlock their full potential',
    date: 'April 14, 2025',
    category: ['Charities'],
    image: '/donation/donation3.jpg',
    shortDesc: 'Communities face challenges that prevent full potential...',
    fullDesc:
      'Communities around the world face challenges. Through partnerships with charities and members, they can thrive.',
  },
  {
    id: 2,
    title: '5 tips for communicating with your nonprofit’s workplace donors',
    date: 'April 7, 2025',
    category: ['Donor'],
    image: '/donation/image1.jpg',
    shortDesc: 'Reaching donors can be daunting. Here’s how...',
    fullDesc:
      'To communicate with workplace donors: personalize messaging, express gratitude, keep them informed, etc.',
  },
  {
    id: 3,
    title: 'How you can help those affected by the Myanmar-Thailand earthquake',
    date: 'March 28, 2025',
    category: ['Campaigns'],
    image: '/donation/donation5.jpg',
    shortDesc: 'A 7.7-magnitude quake hit Myanmar and Thailand...',
    fullDesc:
      'Over 3,500 people lost lives. Relief efforts are ongoing. You can contribute to rebuilding lives and infrastructure.',
  },
  {
    id: 1,
    title: 'How four charities are helping communities unlock their full potential',
    date: 'April 14, 2025',
    category: ['Charities'],
    image: '/donation/donation3.jpg',
    shortDesc: 'Communities face challenges that prevent full potential...',
    fullDesc:
      'Communities around the world face challenges. Through partnerships with charities and members, they can thrive.',
  },
  {
    id: 2,
    title: '5 tips for communicating with your nonprofit’s workplace donors',
    date: 'April 7, 2025',
    category: ['Donor'],
    image: '/donation/image1.jpg',
    shortDesc: 'Reaching donors can be daunting. Here’s how...',
    fullDesc:
      'To communicate with workplace donors: personalize messaging, express gratitude, keep them informed, etc.',
  },
  {
    id: 3,
    title: 'How you can help those affected by the Myanmar-Thailand earthquake',
    date: 'March 28, 2025',
    category: ['Campaigns'],
    image: '/donation/donation5.jpg',
    shortDesc: 'A 7.7-magnitude quake hit Myanmar and Thailand...',
    fullDesc:
      'Over 3,500 people lost lives. Relief efforts are ongoing. You can contribute to rebuilding lives and infrastructure.',
  },
];

const categories = [
  'Campaigns',
  'Charities',
  'Donor',
  'Fiscally Sponsored Projects',
  'Leadership/Management',
  'Social Impact/CSR',
];

export default function BlogUpdateSection() {
  const [activeCategories, setActiveCategories] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleCategory = (category) => {
    setActiveCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredBlogs = dummyData.filter(
    (blog) =>
      activeCategories.length === 0 ||
      blog.category.some((cat) => activeCategories.includes(cat))
  );

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const handleToggleVisibility = () => {
    if (hasMore) {
      setVisibleCount((prev) => prev + 2);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Our Latest Updates</h2>

      {/* Filters */}
      <div className="bg-blue-950 text-white p-4 rounded-full mb-6 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-950"
              checked={activeCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <AnimatePresence>
          {visibleBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-sm text-gray-700">
                  {expanded[blog.id] ? blog.fullDesc : blog.shortDesc}
                </p>
                <button
                  onClick={() => toggleExpand(blog.id)}
                  className="mt-3 text-blue-900 hover:underline text-sm font-medium"
                >
                  {expanded[blog.id] ? 'Read Less ←' : 'Read More →'}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More / Show Less Button */}
      {filteredBlogs.length > 2 && (
        <div className="text-center mt-10">
          <button
            onClick={handleToggleVisibility}
            className="bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition text-sm"
          >
            {hasMore ? 'Load More' : 'Show Less'}
          </button>
        </div>
      )}
    </section>
  );
}
