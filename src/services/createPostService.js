import axiosInstance from "../config/axios";

const createPostService = async (postData) => {
    const response = await axiosInstance.post("/posts", postData);
    return response?.data;
};

export default createPostService;