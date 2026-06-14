export type Review = {
	name: string;
	location: string;
	rating: number;
	date: string;
	text: string;
	highlight?: string;
};

export const reviews: Review[] = [
	{
		name: 'Marcus T.',
		location: 'Brady, TX',
		rating: 5,
		date: 'March 2026',
		text: "Best BBQ I've had in weeks! The brisket had a perfect smoke ring and the bark was unreal. Came back two days later for more.",
		highlight: 'Best BBQ in weeks'
	},
	{
		name: 'Jessica R.',
		location: 'San Angelo, TX',
		rating: 5,
		date: 'February 2026',
		text: 'Brisket and ribs were spot on. Tender, smoky, and the portions are huge. The complimentary beans and cornbread sealed the deal.',
		highlight: 'Brisket and ribs spot on'
	},
	{
		name: 'Daniel K.',
		location: 'Austin, TX',
		rating: 4,
		date: 'February 2026',
		text: 'Huge portions and great value for money. Stopped through on a road trip and it was easily the best food of the drive. Will detour for this again.',
		highlight: 'Great value for money'
	},
	{
		name: 'Amanda L.',
		location: 'Brady, TX',
		rating: 5,
		date: 'January 2026',
		text: 'Complimentary beans and cornbread were amazing — honestly could have made a meal out of just those. The pulled pork was juicy and full of flavor.',
		highlight: 'Beans and cornbread amazing'
	},
	{
		name: 'Robert H.',
		location: 'Mason, TX',
		rating: 4,
		date: 'January 2026',
		text: 'Real-deal Texas barbecue. The burnt ends sell out fast so get there early. Friendly staff and a no-frills, authentic atmosphere.',
		highlight: 'Real-deal Texas barbecue'
	},
	{
		name: 'Carlos M.',
		location: 'Fredericksburg, TX',
		rating: 5,
		date: 'December 2025',
		text: 'The smoked turkey is the sleeper hit here — moist and perfectly seasoned. Two-meat plate is the way to go. Highly recommend.',
		highlight: 'Smoked turkey is the sleeper hit'
	},
	{
		name: 'Stephanie W.',
		location: 'Brownwood, TX',
		rating: 4,
		date: 'December 2025',
		text: 'Family of five ate well and didn’t break the bank. The family pack is a steal. Kids loved the mac & cheese, we loved everything else.',
		highlight: 'Family pack is a steal'
	},
	{
		name: 'Tyler B.',
		location: 'Brady, TX',
		rating: 5,
		date: 'November 2025',
		text: 'Brisket loaded fries are dangerous — in the best way. Local spot that treats you like a regular from your first visit.',
		highlight: 'Brisket loaded fries are dangerous'
	},
	{
		name: 'Nicole P.',
		location: 'Llano, TX',
		rating: 4,
		date: 'November 2025',
		text: 'Solid barbecue with that authentic post-oak smoke flavor. Jalapeño poppers wrapped in bacon are a must-order starter.',
		highlight: 'Authentic post-oak smoke'
	}
];

// Star-rating distribution that averages to ~4.0 across 382 reviews.
export const ratingBreakdown = [
	{ stars: 5, count: 191, percent: 50 },
	{ stars: 4, count: 96, percent: 25 },
	{ stars: 3, count: 46, percent: 12 },
	{ stars: 2, count: 27, percent: 7 },
	{ stars: 1, count: 22, percent: 6 }
];

export const reviewStats = [
	{ label: 'Average Rating', value: '4.0', sub: 'out of 5 stars' },
	{ label: 'Total Reviews', value: '382+', sub: 'and counting' },
	{ label: 'Would Recommend', value: '75%', sub: 'of guests' },
	{ label: 'Repeat Guests', value: '6 in 10', sub: 'come back' }
];
