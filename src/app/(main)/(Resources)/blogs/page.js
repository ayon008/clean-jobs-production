import { client } from '@/lib/sanity';
import BlogCards from '@/ui/BlogCards';


export const revalidate = 1


export const blogData = async () => {
    const query = `*[_type == 'blog'] | order(_createdAt asc) {
title,
"currentSlug":slug.current,
date,
content,
titleImage,
authorName,
 authorImage
}`
    const data = await client.fetch(query, { cache: 'no-cache' });
    return data;
}



const page = async () => {

    const blogs = await blogData() || [];
    console.log(blogs, 'x');

    return (
        <div className="pt-40 pb-20 px-10">
            <h1 className="text-2xl font-bold inter">Stories, News, and Insights for Business Growth</h1>
            <p className="poppins text-sm font-medium mt-3">A thoughtfully curated blog featuring stories, news, and insights to help you grow and enhance your cleaning service business.</p>
            <div className='grid grid-cols-4 items-stretch gap-6 mt-10'>
                {
                    blogs.map((blog, i) => {
                        return (
                            <BlogCards key={i} blog={blog} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;