import { business, hours } from './business';
import { img, PHOTOS } from './images';

const dayMap: Record<string, string> = {
	Monday: 'Monday',
	Tuesday: 'Tuesday',
	Wednesday: 'Wednesday',
	Thursday: 'Thursday',
	Friday: 'Friday',
	Saturday: 'Saturday',
	Sunday: 'Sunday'
};

function to24h(time: string): string {
	// "11:00 AM" -> "11:00", "9:00 PM" -> "21:00"
	const [clock, period] = time.trim().split(' ');
	let [h, m] = clock.split(':').map((n) => parseInt(n, 10));
	if (period === 'PM' && h !== 12) h += 12;
	if (period === 'AM' && h === 12) h = 0;
	return `${String(h).padStart(2, '0')}:${m ? String(m).padStart(2, '0') : '00'}`;
}

const openingHours = hours
	.filter((d) => !d.closed)
	.map((d) => {
		const [open, close] = d.hours.split('–').map((s) => s.trim());
		return {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: dayMap[d.day],
			opens: to24h(open),
			closes: to24h(close)
		};
	});

export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'BarbecueRestaurant',
	name: business.name,
	description: business.shortDescription,
	url: business.url,
	telephone: business.phone,
	priceRange: business.priceLevel,
	servesCuisine: ['Barbecue', 'American', 'Texas BBQ'],
	image: [
		img(PHOTOS.brisketSlices, 1200, 900),
		img(PHOTOS.ribsRack, 1200, 900),
		img(PHOTOS.bbqPlatter, 1200, 900)
	],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.address.street,
		addressLocality: business.address.city,
		addressRegion: business.address.state,
		postalCode: business.address.zip,
		addressCountry: 'US'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.geo.lat,
		longitude: business.geo.lng
	},
	openingHoursSpecification: openingHours,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
		worstRating: 1
	},
	hasMenu: `${business.url}/menu`,
	acceptsReservations: 'False',
	menu: `${business.url}/menu`,
	areaServed: 'Brady, Texas and the Texas Hill Country'
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((it, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: it.name,
			item: `${business.url}${it.path}`
		}))
	};
}
