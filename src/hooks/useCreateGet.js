import { useState } from "react";
import createGetService from "../services/createGetService";

function useCreateGet() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async() => {
    setLoading(true);
    try {
      const response = await createGetService();
      setPosts(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, fetchPosts };
}

export default useCreateGet;