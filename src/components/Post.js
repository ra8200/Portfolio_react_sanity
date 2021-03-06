import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.err);
  }, []);

  return (
    <main className="bg-black min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-white flex justify-center styleMe">
          Blog Post Page
        </h1>
        <h2 className="text-lg text-white flex justify-center mb-12">
          Welcome to my Blog Page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-80 relative rounded shadow-inner leading-snug bg-white border-l-8 border-blue-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="blog relative h-full flex justify-end items-end pr-6 pb-6">
                      <h3 className="text-white text-lg font-blog px-3 py-4 bg-blue-700 text-white bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
