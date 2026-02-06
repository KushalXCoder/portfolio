import { Blog } from "@/models/blog.models";
import { connectDB } from "@/providers/mongodb";
import { NextResponse } from "next/server";

export const POST = async () => {
    try {
        await connectDB();

        const blog = await Blog.create({
            title: "Sample Blog Title",
            content: "This is a sample blog content.",
            slug: "sample-blog-title",
            summary: "This is a summary of the sample blog."
        });

        return NextResponse.json({ message: "Blog created successfully", data: blog }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create blog", error }, { status: 500 });   
    }
}