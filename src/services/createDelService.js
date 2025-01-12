import axiosInstance from "../config/axios";

const createDelService = async (postID) => {
    const response = await axiosInstance.delete(`/posts/${postID}`);
    return response?.data;
};

export default createDelService;
