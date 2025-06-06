import Link from 'next/link';
import { ModeToggle } from './modeToggle';

export default function Navbar() {
	return (
		<nav className='w-full  relative flex  items-center justify-between max-w-xl mx-auto px-4 py-5 '>
			<Link
				href={'/'}
				className='font-bold text-3xl'>
				Nayan<span className='text-primary'>Blog</span>
			</Link>
			<ModeToggle />
		</nav>
	);
}
