import { BlogArticle } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

async function getData(slug: string) {
	const query = `
  *[_type == "blog" && slug.current == '${slug}'] {
  "currentSlug":slug.current,
    aisummary,
    title,
    "currentThumbnail": titleImage.asset->url,
      content
}[0]`;
	const data = await client.fetch(query);
	return data;
}
export default async function BlogArtical({
	params
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const data: BlogArticle = await getData(slug);
	console.log(data); // Consider removing for production
	if (!data) {
		// return <h1>Blog post not found</h1>;
	}
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1>
				<span className='block text-base text-center text-primary font-semibold mb-2 tracking-wide uppercase '>
					Nayan Swarnkar-blog
				</span>
				<span className='mt-2 block text-3xl text-center leading-8 font-blod sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
					{data.title}
				</span>
			</h1>
			<Image
				src={data.currentThumbnail}
				alt={data.title || 'Blog post image'}
				width={800}
				height={800}
				priority
				className='rounded-lg  w-full  sm:h-96 m-2 border'
			/>
			<div className='mt-2 prose prose-blue prose-sm dark:prose-invert max-w-none prose-p:my-2 prose-li:marker:text-primary'>
				<PortableText value={data.content} />
			</div>
		</div>
	);
}
