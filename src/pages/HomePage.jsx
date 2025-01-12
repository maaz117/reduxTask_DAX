import React, { useEffect } from "react";
import useCreateGet from "../hooks/useCreateGet";

const HomePage = () => {
  const { posts, loading, error, fetchPosts } = useCreateGet();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Home Page</h1>
      {loading && <p className="text-center text-lg text-gray-500">Loading...</p>}
      {error && <p className="text-center text-lg text-red-500">{error.message}</p>}
      <ul className="space-y-4 max-w-3xl mx-auto">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p className="text-xl font-semibold text-gray-800">{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

