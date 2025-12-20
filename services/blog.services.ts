export const getBlogs = async () => {
    try {
        const res = await fetch('/api/get-blogs');
        if(!res.ok) {
            throw new Error('Failed to fetch blogs');
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error(error);  
    }
}