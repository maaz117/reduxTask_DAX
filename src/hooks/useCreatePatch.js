import { useState } from "react";
import createPatchService from "../services/createPatchService";

function useCreatePatch() {
    const [load, setloading] = useState(false);
    const [error, setError] = useState(null);

    const createPatch = async (postID, patchData) => {
        setloading(true);
        try{
            await createPatchService(postID, patchData);
        } catch (err) {
            setError(err);
        } finally {
            setloading(false);
        }
    };

    return { load, error, createPatch };
}

export default useCreatePatch;