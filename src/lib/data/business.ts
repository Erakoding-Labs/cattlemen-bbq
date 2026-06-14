export const business = {
	name: "Cattleman's BBQ",
	tagline: 'Authentic Texas BBQ, Slow-Smoked to Perfection',
	shortDescription:
		'Brady, Texas barbecue joint serving slow-smoked brisket, ribs, pulled pork, and smoked turkey with complimentary beans and cornbread.',
	category: 'BBQ Restaurant',
	priceRange: '$10–20',
	priceLevel: '$$',
	rating: 4.0,
	reviewCount: 382,
	phone: '+1 325-597-1111',
	phoneHref: 'tel:+13255971111',
	email: 'hello@cattlemansbbqbrady.com',
	address: {
		street: '2010 S Bridge St',
		city: 'Brady',
		state: 'TX',
		zip: '76825',
		country: 'United States',
		full: '2010 S Bridge St, Brady, TX 76825, United States'
	},
	geo: {
		lat: 31.1224,
		lng: -99.3357
	},
	services: {
		dineIn: true,
		takeout: true,
		delivery: false,
		catering: true
	},
	// Embed + directions
	mapsEmbed:
		'https://www.google.com/maps?q=2010+S+Bridge+St,+Brady,+TX+76825&output=embed',
	mapsDirections:
		'https://www.google.com/maps/dir/?api=1&destination=2010+S+Bridge+St,+Brady,+TX+76825',
	url: 'https://cattlemansbbqbrady.com'
};

export type DayHours = {
	day: string;
	hours: string;
	closed?: boolean;
};

export const hours: DayHours[] = [
	{ day: 'Monday', hours: '11:00 AM – 8:00 PM' },
	{ day: 'Tuesday', hours: '11:00 AM – 8:00 PM' },
	{ day: 'Wednesday', hours: '11:00 AM – 8:00 PM' },
	{ day: 'Thursday', hours: '11:00 AM – 8:00 PM' },
	{ day: 'Friday', hours: '11:00 AM – 9:00 PM' },
	{ day: 'Saturday', hours: '11:00 AM – 9:00 PM' },
	{ day: 'Sunday', hours: '11:00 AM – 6:00 PM' }
];

export const social = {
	facebook: 'https://www.facebook.com/',
	instagram: 'https://www.instagram.com/',
	yelp: 'https://www.yelp.com/',
	google: 'https://www.google.com/maps'
};

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'Menu', href: '/menu' },
	{ label: 'About', href: '/about' },
	{ label: 'Reviews', href: '/reviews' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Contact', href: '/contact' }
];
