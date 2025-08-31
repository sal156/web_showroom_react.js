import React, { useRef } from 'react';
import '../styles/LatestBlogPosts.css';

const blogPosts = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/images/blog/blog-post-1.jpg',
    category: 'Sound',
    date: 'November 22, 2023',
    title: 'The Best Sound Systems for Your Car',
    description: 'Discover the top car audio systems that will elevate your driving experience. From booming bass to crisp highs, find your perfect match.'
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/images/blog/blog-post-2.jpg',
    category: 'Accessories',
    date: 'November 18, 2023',
    title: 'Must-Have Car Accessories for 2024',
    description: 'Upgrade your ride with these essential car accessories. Enhance comfort, safety, and style with our curated list.'
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/images/blog/blog-post-3.jpg',
    category: 'Exterior',
    date: 'November 15, 2023',
    title: 'Protecting Your Car\'s Paint: Tips and Tricks',
    description: 'Keep your car looking showroom-new with these expert tips on paint protection, waxing, and maintaining a pristine exterior.'
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + '/images/blog/blog-post-4.jpg',
    category: 'Maintenance',
    date: 'November 10, 2023',
    title: 'Essential Car Maintenance Checklist',
    description: 'Ensure your car runs smoothly and safely with our comprehensive maintenance checklist. Don\'t miss a beat on car care.'
  },
];

function LatestBlogPosts() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 500; // Customize scroll speed
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="latest-blog-posts-section">
      <div className="blog-posts-header">
        <h2>Postingan blog terbaru</h2>
      </div>
      <div className="blog-posts-wrapper">
        <div className="blog-posts-container" ref={scrollRef}>
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <a href={`#blog-${post.id}`} className="read-more-link">
                  Baca lebih banyak <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-scroll-navigation">
          <button className="scroll-btn left" onClick={() => scroll('left')}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn right" onClick={() => scroll('right')}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogPosts;
