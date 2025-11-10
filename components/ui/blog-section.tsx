import React from 'react';
import { LazyImage } from './lazy-image';

const blogs = [
	{
		title: 'The Future of Small Business: How AI Will Replace 5 Employees in Your Office',
		slug: '#',
		description:
			'Discover how AI automation is replacing 5 full-time employees in small businesses across India and beyond. Learn which roles can be automated and how much you can save.',
		image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=360&fit=crop',
		createdAt: '2025-11-09',
		author: 'Avantage AI Team',
		readTime: '7 min read',
	},
	{
		title: 'How to Increase Your Business Profit Margins with AI (Even Without a Tech Team)',
		slug: '#',
		description:
			'AI is not just a futuristic idea — it\'s the most powerful profit-increasing tool available to your business today. Learn how to boost profits without hiring a tech team.',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop',
		createdAt: '2025-11-08',
		author: 'Avantage AI Team',
		readTime: '8 min read',
	},
	{
		title: 'The Ultimate Guide to Business Automation in 2025: Stop Managing Tasks, Start Managing Growth',
		slug: '#',
		description:
			'Being busy doesn\'t mean you\'re successful — it means your systems are broken. Discover how the most successful businesses use smart automations to scale effortlessly.',
		image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=640&h=360&fit=crop',
		createdAt: '2025-11-07',
		author: 'Avantage AI Team',
		readTime: '8 min read',
	},
	{
		title: '10 Ways Indian SMEs Are Secretly Using AI to Grow Faster Than You',
		slug: '#',
		description:
			'From Surat\'s textile traders to Pune\'s manufacturers — small business owners are secretly using AI to grow faster, smarter, and cheaper. Discover their 10 secret strategies.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop',
		createdAt: '2025-11-06',
		author: 'Avantage AI Team',
		readTime: '8 min read',
	},
	{
		title: 'From Manual to Magical: The Complete Roadmap to Digitizing and Automating Your Business',
		slug: '#',
		description:
			'Transform your manual operations into an AI-powered, automated business. A complete step-by-step roadmap to turn daily chaos into a smooth, self-operating engine.',
		image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=640&h=360&fit=crop',
		createdAt: '2025-11-05',
		author: 'Avantage AI Team',
		readTime: '9 min read',
	},
	{
		title: 'Why 2025 Is the Year of AI-Powered Businesses — and How to Join the Revolution Before It\'s Too Late',
		slug: '#',
		description:
			'The AI revolution is no longer a tech trend — it\'s a business reality. Learn why 2025 is your window of opportunity and how to join the revolution before your competitors do.',
		image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=640&h=360&fit=crop',
		createdAt: '2025-11-04',
		author: 'Avantage AI Team',
		readTime: '8 min read',
	},
];

export function BlogSection() {
	return (
		<div className="mx-auto w-full max-w-5xl grow">
			<div
				aria-hidden
				className="absolute inset-0 isolate contain-strict -z-10 opacity-60"
			>
				<div className="-rotate-45 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 rounded-full" />
				<div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
				<div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 rounded-full" />
			</div>
			<div className="space-y-1 px-4 py-8">
				<h1 className="font-mono text-4xl font-bold tracking-wide">
					Insights & Resources
				</h1>
				<p className="text-muted-foreground text-base">
					Discover how AI and automation are transforming businesses across India. Learn strategies, tips, and real success stories.
				</p>
			</div>
			<div className="absolute inset-x-0 h-px w-full border-b border-dashed" />
			<div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 z-10">
				{blogs.map((blog) => (
					<a
						href={blog.slug}
						key={blog.title}
						className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
					>
						<LazyImage
							src={blog.image}
							fallback="https://placehold.co/640x360?text=fallback-image"
							inView={true}
							alt={blog.title}
							ratio={16 / 9}
							className="transition-all duration-500 group-hover:scale-105"
						/>
						<div className="space-y-2 px-2 pb-2">
							<div className="text-muted-foreground flex items-center gap-2 text-[11px] sm:text-xs">
								<p>by {blog.author}</p>
								<div className="bg-muted-foreground size-1 rounded-full" />
								<p>{blog.createdAt}</p>
								<div className="bg-muted-foreground size-1 rounded-full" />
								<p>{blog.readTime}</p>
							</div>
							<h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
								{blog.title}
							</h2>
							<p className="text-muted-foreground line-clamp-3 text-sm">
								{blog.description}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

