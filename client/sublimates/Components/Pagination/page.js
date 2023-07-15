import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {example_fetch_data} from "@/sublimates/Redux/actions/Home";
import Pagination from "@/sublimates/Components/Pagination/Pagination";
import Posts from "@/sublimates/Components/Pagination/Posts";


const Page = () => {

    const dispatch = useDispatch();
    const home = useSelector(state => state.home);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);




    useEffect(() => {
        setLoading(true);
        if(home.fetch_data === null) dispatch(example_fetch_data());
        setPosts(home.fetch_data);
        setLoading(false);
    }, [home]);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts && posts.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <div>
                <p>page Component</p>
                <Posts posts={currentPost} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts && posts.length} paginate={paginate}/>
            </div>
        </>
    );
};

export default Page;