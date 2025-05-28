import BlogList from "@/client_component/BlogList"
import { Suspense } from 'react'
const BlogPage = () => {


    return (
        <>
        <Suspense>
        <BlogList />
        </Suspense>
        </>
    );
};

export default BlogPage;
