import React, { useEffect, useState } from 'react';

const DynamicNeedSection = () => {
  const [causes, setCauses] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const res = await fetch('a40e75925855439aa5edf920ea3d070a');
        const data = await res.json();
        setCauses(data.causes);
      } catch (error) {
        console.error('Using fallback data due to error:', error);
        setCauses([
          {
          title: 'Education for All',
            description: 'Providing educational resources to underprivileged children in rural communities.',
            image: './images/edu.jpg',
            raised: 12500,
            goal: 25000,
            tags: ['Education', 'Urgent Need'],
            supporters: 342,
            clicked: false,
            hearts: [],
          },
          {
            title: 'Clean Water Access',
            description: 'Provide clean water to underserved rural communities to assist impoverished village populations.',
            image: './images/waterr.jpg',
            raised: 8000,
            goal: 20000,
            tags: ['Environment', 'Trending'],
            supporters: 278,
            clicked: false,
            hearts: [],
          },
          {
            title: 'Medical Aid Fund',
            description: 'Supporting medical treatments for those who cannot afford healthcare services.',
            image: './images/medical.jpg',
            raised: 18750,
            goal: 30000,
            tags: ['Healthcare'],
            supporters: 521,
            clicked: false,
            hearts: [],
          },
          {
            title: 'Disaster Relief',
            description: 'Helping communities recover from recent natural disasters with emergency supplies and aid.',
            image: './images/edu.jpg',
            raised: 10000,
            goal: 15000,
            tags: ['Emergency', 'Trending'],
            supporters: 198,
            clicked: false,
            hearts: [],
          },
          {
            title: 'Animal Shelter Support',
            description: 'Funding food and medical treatment for abandoned and rescued animals.',
            image: './images/edu.jpg',
            raised: 9500,
            goal: 12000,
            tags: ['Animals'],
            supporters: 212,
            clicked: false,
            hearts: [],
          },
        ]);
      }
    };
    fetchCauses();
  }, []);

  const handleSupportClick = (index) => {
    const updatedCauses = [...causes];
    const cause = updatedCauses[index];

    if (!cause.clicked) {
      cause.supporters += 1;
      cause.clicked = true;

      const newHeart = {
        id: Date.now(),
        style: {
          left: `${Math.random() * 30 + 35}%`,
          animationDuration: '2s',
        },
      };
      cause.hearts.push(newHeart);

      // Remove the heart after animation (2s)
      setTimeout(() => {
        updatedCauses[index].hearts = updatedCauses[index].hearts.filter((h) => h.id !== newHeart.id);
        setCauses([...updatedCauses]);
      }, 2000);
    } else {
      cause.supporters -= 1;
      cause.clicked = false;
    }

    setCauses(updatedCauses);
  };

  const SkewedBlueBackground = () => (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '150vh',
        background: 'linear-gradient(to right, #1e3c72, #2a5298, #6dd5ed)',
        clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
        zIndex: -1,
      }}
    />
  );

  const displayedCauses = showAll ? causes : causes.slice(0, 3);

  return (
    <div
      style={{
        position: 'relative',
        padding: '80px 20px',
        minHeight: '100vh',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      <SkewedBlueBackground />

      {/* Global styles inside component */}
      <style>
        {`
          @keyframes floatHeart {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateY(-40px) scale(1.2);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100px) scale(0.9);
              opacity: 0;
            }
          }

          .floating-heart {
            position: absolute;
            font-size: 18px;
            animation: floatHeart 2s ease-in-out forwards;
            pointer-events: none;
            z-index: 10;
          }
        `}
      </style>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
          Featured Causes
        </h1>
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#f0f0f0', maxWidth: '600px', margin: '0 auto 40px' }}>
          Your shopping helps fund these important initiatives. Choose where your contribution goes.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {displayedCauses.map((cause, index) => {
            const progress = Math.min(100, (cause.raised / cause.goal) * 100);
            return (
              <div
                key={index}
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '10px',
                  padding: '15px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  textAlign: 'left',
                  position: 'relative',
                  height: '520px',
                }}
              >
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <img
                    src={cause.image}
                    alt={cause.title}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                    {cause.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor:
                            tag.toLowerCase().includes('urgent') ? '#ff4d4f' :
                            tag.toLowerCase().includes('trend') ? '#f0a500' : '#e0e0e0',
                          color: '#fff',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{cause.title}</h2>
                <p style={{ fontSize: '14px', marginBottom: '15px' }}>{cause.description}</p>

                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#ddd', borderRadius: '10px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${progress}%`,
                        backgroundColor: '#03045E',
                        height: '100%',
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '10px',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => handleSupportClick(index)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={cause.clicked ? 'red' : 'none'}
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: 'fill 0.3s ease' }}
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span style={{ fontSize: '12px', color: '#888' }}>{cause.supporters} supporters</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <button
                    onClick={() => handleSupportClick(index)}
                    className="group relative px-6 py-2 font-semibold text-black border border-black rounded-full overflow-hidden z-10 shadow-xl"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-black to-white opacity-0 transform scale-0 origin-bottom-left transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 rounded-full z-0"
                    ></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Support This Cause
                    </span>
                  </button>
                </div>

                {/* Floating Hearts */}
                {cause.hearts.map((heart) => (
                  <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                      left: heart.style.left,
                      animationDuration: heart.style.animationDuration,
                    }}
                  >
                    ❤️
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {causes.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: '10px 20px',
                background: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              {showAll ? 'View Less' : 'View All Causes'}
              <span style={{ fontSize: '18px', padding: '5px', color: '#000' }}>
                {showAll ? '▲' : '▼'}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicNeedSection;
