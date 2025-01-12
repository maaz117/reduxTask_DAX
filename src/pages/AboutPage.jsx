import React, { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";

const AboutPage = () => {
  const { loading, error, createPost } = useCreatePost();
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(formData);
    setFormData({ title: "", body: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">About Page</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <textarea
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-600">
          {error.message || "An error occurred while submitting the post."}
        </p>
      )}
    </div>
  );
};

export default AboutPage;