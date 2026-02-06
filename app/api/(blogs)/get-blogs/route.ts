import { Blog } from "@/models/blog.models";
import { connectDB } from "@/providers/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        // Connect to the database
        await connectDB();
        // Fetch all blogs
        const blogs = await Blog.find({});
        console.log('Blogs fetched from DB:', blogs);
        return NextResponse.json({ message: "Blogs fetched successfully", data: blogs }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch blogs", error }, { status: 500 });
    }
}