import axiosInstance from "../config/axios";

const createPatchService = async (postID, patchData) => {
    const response = await axiosInstance.patch(`/posts/${postID}`, patchData);
    return response?.data;
};

export default createPatchService;