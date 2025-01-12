import React, { useState } from "react";
import useCreatePut from "../hooks/useCreatePut";
import useCreateDel from "../hooks/useCreateDel";

const Profile = () => {
    const { createPut, loading: updateLoading, error: updateError } = useCreatePut();
    const { createDel, loading: deleteLoading, error: deleteError } = useCreateDel();
    const [postID, setPostID] = useState(1);
    const [updatedData, setUpdatedData] = useState({ title: "Updated Title" });
    const [content, setContent] = useState("Initial Content");

    const handleUpdate = async () => {
        await createPut(postID, updatedData);
        setContent(updatedData.title); 
    };

    const handleDelete = async () => {
        await createDel(postID);
        setContent(""); 
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden overflow-x-hidden">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Profile Page</h1>
            {content ? (
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-4">
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleUpdate}
                                disabled={updateLoading}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none disabled:opacity-50"
                            >
                                Update Post
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={deleteLoading}
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none disabled:opacity-50"
                            >
                                Delete Post
                            </button>
                        </div>

                        {updateLoading && <p className="text-center text-lg text-gray-500">Updating...</p>}
                        {updateError && <p className="text-center text-lg text-red-500">{updateError?.message || "Something went wrong"}</p>}
                        {deleteLoading && <p className="text-center text-lg text-gray-500">Deleting...</p>}
                        {deleteError && <p className="text-center text-lg text-red-500">{deleteError?.message || "Something went wrong"}</p>}

                        <p className="text-xl text-center text-gray-800">{content}</p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-lg text-gray-500">No content available.</p>
            )}
        </div>
    )
};

export default Profile;