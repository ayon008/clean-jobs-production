import { FaRegCalendar } from "react-icons/fa";
import Image from "next/image";
import { client, role, urlFor } from "@/lib/sanity";
import formatTimestamp from "@/js/convertTime";
import { PortableText } from "next-sanity";
import { blogData } from "../page";

export const revalidate = 1

export async function generateStaticParams() {
    const blogs = await blogData();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

const getData = async (params) => {
    const query = `
      *[_type == 'blog' && slug.current == '${params}']{
        'currentSlug':slug.current,
        title,
        content,
        titleImage,
        authorName,
        authorImage,
        images,
        date
      }[0]
    `;

    try {
        const data = await client.fetch(query, { cache: 'no-cache' });
        // console.log('Fetched Data:', data); // Log the correct data
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const page = async ({ params }) => {
    const data = await getData(params.slug) || {};
    return (
        <div className="pb-20 pt-40 px-10">
            <h2 className="text-5xl inter font-bold text-black text-center">{data?.title}</h2>
            <p className="mt-10 text-center flex justify-center items-center gap-2"><FaRegCalendar className="mt-1" size={'1.2rem'} /><span className="inter text-2xl font-semibold">{formatTimestamp(data?.date)}</span></p>
            <Image priority layout="responsive" src={urlFor(data?.titleImage).url()} width={950} height={665} className="my-10 w-full h-auto" alt="" />
            <div className="px-16">
                <div className="flex items-center gap-2 mb-10">
                    <Image src={urlFor(data?.authorImage).url()} width={30} height={1552} className='w-[50px] h-auto rounded-full' alt='' />
                    <p className="inter text-xl font-semibold">By {data?.authorName}</p>
                </div>
                <div className="prose lg:prose-xl prose-indigo">
                    <PortableText value={data?.content} components={{
                        types: {
                            imageGroup: ({ value }) => {
                                const { images, layout } = value;
                                if (!images || images.length === 0) return null;
                                const imageUrls = images.map(image => urlFor(image.asset).url());
                                console.log(imageUrls);
                                return (
                                    <div className={`${layout === 'grid' ? 'grid 2xl:grid-cols-3 xl:grid-cols-3 gap-4 items-stretch' : 'block'
                                        }`}>
                                        {
                                            imageUrls?.map((url, i) => {
                                                return (
                                                    <Image
                                                        key={i}
                                                        src={url}
                                                        alt={`Content Image ${i + 1}`}
                                                        width={950}
                                                        height={665}
                                                        className={`rounded-lg shadow-lg h-auto ${layout === 'grid' ? 'w-full' : 'mb-4'
                                                            } `}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        },
                        blocks: {
                            normal: ({ children }) => <p>{children}</p>,
                        },
                    }} />
                </div>
            </div>
        </div>
    );
};

export default page;