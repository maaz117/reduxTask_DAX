import axiosInstance from "../config/axios";

const createGetService = async () => {
    const response = await axiosInstance.get("/posts");
    return response?.data;
};

export default createGetService;