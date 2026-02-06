import { formatDate } from "@/lib/helper/format-date"
import { BlogType } from "@/types/blogs.types"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
    blog: BlogType
}

const BlogCard = ({ blog } : BlogCardProps) => {
    return (
        <div key={blog.slug} className="h-100 border">
            <div className="h-2/4 border"></div>
            <div className="h-2/4 flex flex-col justify-between py-4 px-4">
                <div>
                    <h1 className="font-bold text-xl">{blog.title}</h1>
                    <p className="text-md mt-3">{blog.summary}</p>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <h1 className="mt-0.5">{formatDate(blog.createdAt)}</h1>
                    </div>
                    <Link href={`/blog/${blog.slug}`}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard