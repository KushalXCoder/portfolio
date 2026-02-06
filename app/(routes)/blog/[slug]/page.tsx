const Page = async ({
    params,
} : {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;
    return (
        <div className="container mx-auto max-w-4xl min-h-[calc(100vh-80px)] px-12 font-poppins my-10">
            <h1>Blog: {slug}</h1>
        </div>
    )
}

export default Page;