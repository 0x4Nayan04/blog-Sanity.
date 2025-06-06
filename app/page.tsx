import { Card, CardContent } from '@/components/ui/card';
import { SimpleBlogCard } from './lib/interface';
import { client } from './lib/sanity';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export const revalidate = 60;

async function getBlogData() {
	const query = `
*[_type == "blog"] | order(_createdAt desc) {
  title,
    aiSummary,
  "currentThumbnail": titleImage.asset->url,
  "currentSlug": slug.current
}
`;
	const data: SimpleBlogCard[] = await client.fetch(query);
	return data;
}

export default async function Home() {
	const data = await getBlogData();
	// console.log(data); // Consider removing for production

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
				{data.map(
					(
						post // Changed key and removed index
					) => (
						<Card
							key={post.currentSlug} // Use a unique key from post data
							className='overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col'>
							<div className='relative w-full aspect-[16/9]'>
								{' '}
								{/* Added aspect ratio container for image */}
								<Image
									src={post.currentThumbnail}
									alt={post.title || 'Blog post image'} // More descriptive alt text
									fill // Use fill for responsive image sizing within parent
									className='rounded-t-lg object-cover group-hover:scale-105 transition-transform duration-300'
								/>
							</div>

							<CardContent className='p-4 flex flex-col flex-grow'>
								<h3 className='font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100 line-clamp-2'>
									{post.title}
								</h3>
								<p className='line-clamp-3 text-sm text-gray-700 dark:text-gray-300 flex-grow'>
									{post.aiSummary}
								</p>
								<Button
									asChild
									className='w-full mt-4'>
									<Link href={`/blog/${post.currentSlug}`}>Read more</Link>
								</Button>
							</CardContent>
						</Card>
					)
				)}
			</div>
		</div>
	);
}
