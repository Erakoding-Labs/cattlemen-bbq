import { business, nav } from '$lib/data/business';

export const prerender = true;

export function GET() {
	const urls = nav
		.map((item) => {
			const loc = `${business.url}${item.href === '/' ? '' : item.href}`;
			const priority = item.href === '/' ? '1.0' : '0.8';
			return `	<url>
		<loc>${loc}</loc>
		<changefreq>weekly</changefreq>
		<priority>${priority}</priority>
	</url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
