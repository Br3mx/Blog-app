import { useState } from "react";
import { useDispatch } from "react-redux"
import { addPosts } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = post => {
        dispatch(addPosts(post));
        navigate('/');

    };

    return (
        <PostForm action={handleSubmit} actionText='Add post'></PostForm>
    )
};

export default AddPostForm;