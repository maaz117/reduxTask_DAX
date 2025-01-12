import axiosInstance from "../config/axios";

const createPutService = async (postID, updatedData) => {
    const response = await axiosInstance.put(`/posts/${postID}`, updatedData);
    return response?.data;
};

export default createPutService;
