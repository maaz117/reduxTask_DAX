import { useState } from 'react';
import createDelService from '../services/createDelService';

function useCreateDel() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createDel = async (postID) => {
        setLoading(true);
        try {
            await createDelService(postID);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, createDel };
}

export default useCreateDel;
