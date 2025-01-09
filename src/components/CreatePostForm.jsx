import React from "react";
import { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";

function CreatePostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { handleCreatePost, loading, error} = useCreatePost();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const newPost = { title, content };
            const response = await handleCreatePost(newPost);
            alert(`Post created successfully ID: ${response.id}`);
            setTitle("");
            setContent("");
        }catch(err){
            console.error(err);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input
                    type="text"
                    value="title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Content: </label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Creating post..." : "Create Post"}
            </button>
            {error && <p style={{color: "red"}}>{error}</p>}
        </form>
    );
}

export default CreatePostForm;