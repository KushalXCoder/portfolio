"use client";

import BlogCard from "@/app-components/blogs/blog-card";
import { getBlogs } from "@/services/blog.services";
import { BlogType } from "@/types/blogs.types";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const BlogApp = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BlogPage />
        </QueryClientProvider>
    )
}

const BlogPage = () => {
    const {data: blogs, isLoading, isError} = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs,
    });

    useEffect(() => {
        console.log(blogs);
    }, [blogs]);

    if (isLoading) {
        return (
            <div className="container mx-auto max-w-4xl min-h-[calc(100vh-80px)] px-12 my-10 font-poppins">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="conatainer mx-auto max-w-4xl px-12 my-10">
            <div className="grid grid-cols-2 gap-x-14 font-poppins">
                {blogs && blogs.map((blog: BlogType) => (
                    <BlogCard blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default BlogApp