import React from "react";
import "./BlogSection.css"; // Assuming you want to style your blog section

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Importance of Staying Active",
      description:
        "Staying active is crucial for maintaining physical and mental well-being. In this post, we explore various ways to stay fit and healthy...",
      link: "#",
    },
    {
      title: "Top 5 Workout Tips for Beginners",
      description:
        "Starting your fitness journey can be challenging. Here are 5 tips to help you get started and stay motivated on your fitness journey...",
      link: "#",
    },
    {
      title: "Healthy Eating Habits for a Better Life",
      description:
        "Nutrition plays a huge role in achieving your fitness goals. In this post, we share some healthy eating habits you can adopt...",
      link: "#",
    },
  ];

  return (
    <section className="blog-section">
      <h2>Our Latest Blog Posts</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.link} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
