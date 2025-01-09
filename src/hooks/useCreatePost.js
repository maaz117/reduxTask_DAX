import { useState } from "react";
import createPostService from "../services/createPostService";

function useCreatePost() {
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreatePost = async (postdata) => {
        setloading(true);
        setError(null);
        try{
            const response = await createPostService(postdata);
            return response;
        } catch(err){
            setError(err.message);
            throw err;
        } finally {
            setloading(false);
        }
    };
    return { handleCreatePost, loading, error };
}

export default useCreatePost;