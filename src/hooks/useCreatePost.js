import { useState } from "react";
import createPostService from "../services/createPostService";

function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (postData) => {
    setLoading(true);
    try {
      await createPostService(postData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createPost };
}

export default useCreatePost;
