import { useState } from "react";
import createPutService from "../services/createPutService";

function useCreatePut() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createPut = async (postID, updatedData) => {
        setLoading(true);
        try {
            await createPutService(postID, updatedData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, createPut };
}

export default useCreatePut;
