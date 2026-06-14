import { img, PHOTOS } from './images';

export type MenuItem = {
	name: string;
	description: string;
	price: string;
	image: string;
	popular?: boolean;
	tags?: string[];
};

export type MenuCategory = {
	id: string;
	name: string;
	blurb: string;
	items: MenuItem[];
};

export const menu: MenuCategory[] = [
	{
		id: 'brisket',
		name: 'Brisket',
		blurb: 'Smoked low and slow for 14 hours over Texas post oak. Salt, pepper, smoke — that’s it.',
		items: [
			{
				name: 'Sliced Brisket Plate',
				description:
					'Hand-sliced prime brisket with a deep smoke ring and peppery bark. Served with two sides, pickles, onions, and bread.',
				price: '$16.95',
				image: img(PHOTOS.brisketSlices),
				popular: true,
				tags: ['Pitmaster Pick']
			},
			{
				name: 'Chopped Brisket Plate',
				description:
					'Tender chopped brisket tossed in its own juices, piled high. Comes with two complimentary sides and cornbread.',
				price: '$14.95',
				image: img(PHOTOS.bbqPlatter)
			},
			{
				name: 'Burnt Ends',
				description:
					'Caramelized, candy-like brisket point cubes glazed in house BBQ sauce. The pitmaster’s favorite cut.',
				price: '$15.95',
				image: img(PHOTOS.burntEnds),
				popular: true
			},
			{
				name: 'Brisket by the Pound',
				description:
					'Take home a full pound of our award-style smoked brisket. Perfect for family-style dining and gatherings.',
				price: '$22.95',
				image: img(PHOTOS.steakClose)
			}
		]
	},
	{
		id: 'ribs',
		name: 'Ribs',
		blurb: 'Pork spare ribs rubbed, smoked, and basted until they pull clean off the bone.',
		items: [
			{
				name: 'Half Rack of Ribs',
				description:
					'Six bones of fall-off-the-bone pork spare ribs with a sweet-and-smoky bark. Served with two sides.',
				price: '$15.95',
				image: img(PHOTOS.ribsRack),
				popular: true
			},
			{
				name: 'Full Rack of Ribs',
				description:
					'A full rack of slow-smoked spare ribs glazed in our signature sauce. Feeds the hungriest cattleman.',
				price: '$24.95',
				image: img(PHOTOS.grilledMeat)
			},
			{
				name: 'Rib & Brisket Combo',
				description:
					'Three ribs paired with a generous portion of sliced brisket. The best of both pits on one plate.',
				price: '$19.95',
				image: img(PHOTOS.platterTop),
				popular: true,
				tags: ['Best Value']
			}
		]
	},
	{
		id: 'pulled-pork',
		name: 'Pulled Pork',
		blurb: 'Pork shoulder smoked overnight and hand-pulled to order. Juicy, smoky, never dry.',
		items: [
			{
				name: 'Pulled Pork Plate',
				description:
					'A heaping portion of hand-pulled smoked pork shoulder with two sides and a soft bun.',
				price: '$13.95',
				image: img(PHOTOS.pulledPork),
				popular: true
			},
			{
				name: 'Pulled Pork Sandwich',
				description:
					'Smoked pulled pork piled on a toasted bun, topped with tangy slaw and a drizzle of house sauce.',
				price: '$10.95',
				image: img(PHOTOS.pulledPork)
			},
			{
				name: 'Pork by the Pound',
				description:
					'A full pound of hand-pulled smoked pork to take home. Buns and sauce available on the side.',
				price: '$18.95',
				image: img(PHOTOS.grilledMeat)
			}
		]
	},
	{
		id: 'smoked-turkey',
		name: 'Smoked Turkey',
		blurb: 'Brined and smoked whole turkey breast — lean, tender, and packed with flavor.',
		items: [
			{
				name: 'Smoked Turkey Plate',
				description:
					'Thick slices of moist, applewood-kissed turkey breast with two complimentary sides.',
				price: '$14.95',
				image: img(PHOTOS.smokedTurkey),
				popular: true
			},
			{
				name: 'Turkey Sandwich',
				description:
					'Smoked turkey breast stacked on toasted bread with pickles, onions, and house sauce.',
				price: '$10.95',
				image: img(PHOTOS.smokedTurkey)
			}
		]
	},
	{
		id: 'bbq-plates',
		name: 'BBQ Plates',
		blurb: 'Build-your-own plates with the meats you love and two sides on the house.',
		items: [
			{
				name: 'Two-Meat Plate',
				description:
					'Choose any two smoked meats — brisket, ribs, pork, turkey, or sausage — with two sides and bread.',
				price: '$18.95',
				image: img(PHOTOS.bbqPlatter),
				popular: true,
				tags: ['Crowd Favorite']
			},
			{
				name: 'Three-Meat Plate',
				description:
					'The full pit experience: any three smoked meats, two sides, pickles, onions, and cornbread.',
				price: '$22.95',
				image: img(PHOTOS.platterTop)
			},
			{
				name: 'Smoked Sausage Plate',
				description:
					'Coarse-ground, Texas hot-gut style sausage links smoked over oak. Served with two sides.',
				price: '$13.95',
				image: img(PHOTOS.sausage)
			},
			{
				name: 'Family Pack (Feeds 4–5)',
				description:
					'One pound brisket, one pound pork, a half rack of ribs, four sides, and a basket of cornbread.',
				price: '$59.95',
				image: img(PHOTOS.bbqPlatter),
				tags: ['Family-Style']
			}
		]
	},
	{
		id: 'loaded-fries',
		name: 'Loaded Fries',
		blurb: 'Crispy fries buried under smoked meat, cheese, and all the fixings.',
		items: [
			{
				name: 'Brisket Loaded Fries',
				description:
					'Golden fries topped with chopped brisket, melted cheddar, jalapeños, and a drizzle of BBQ sauce.',
				price: '$11.95',
				image: img(PHOTOS.loadedFries),
				popular: true
			},
			{
				name: 'Pulled Pork Loaded Fries',
				description:
					'Hand-cut fries loaded with smoked pulled pork, queso, pickled onions, and green onion.',
				price: '$10.95',
				image: img(PHOTOS.loadedFries)
			}
		]
	},
	{
		id: 'jalapeno-poppers',
		name: 'Jalapeño Poppers',
		blurb: 'Smoked, stuffed, and bacon-wrapped. The starter everybody fights over.',
		items: [
			{
				name: 'Brisket Stuffed Poppers',
				description:
					'Fresh jalapeños stuffed with cream cheese and chopped brisket, wrapped in bacon and smoked. Order of six.',
				price: '$9.95',
				image: img(PHOTOS.jalapenoPoppers),
				popular: true
			},
			{
				name: 'Classic Bacon Poppers',
				description:
					'Cream-cheese filled jalapeños wrapped in smoked bacon. Order of six with ranch on the side.',
				price: '$8.95',
				image: img(PHOTOS.jalapenoPoppers)
			}
		]
	},
	{
		id: 'sides',
		name: 'Sides',
		blurb: 'Beans and cornbread are complimentary with every plate. Add a side and make it a feast.',
		items: [
			{
				name: 'Pit Beans',
				description:
					'Slow-simmered pinto beans with burnt-end bits, brown sugar, and a smoky kick. Complimentary with plates.',
				price: '$3.50',
				image: img(PHOTOS.beans),
				popular: true,
				tags: ['Complimentary']
			},
			{
				name: 'Cornbread',
				description:
					'Skillet-baked, golden, and just a touch sweet. Served warm and complimentary with every plate.',
				price: '$3.00',
				image: img(PHOTOS.cornbread),
				tags: ['Complimentary']
			},
			{
				name: 'Mac & Cheese',
				description: 'Creamy three-cheese mac with a baked, golden top. Rich, comforting, and crowd-pleasing.',
				price: '$4.50',
				image: img(PHOTOS.mac),
				popular: true
			},
			{
				name: 'Coleslaw',
				description: 'Cool, crisp, and tangy slaw that cuts right through the smoke.',
				price: '$3.50',
				image: img(PHOTOS.beans)
			},
			{
				name: 'Potato Salad',
				description: 'Old-fashioned mustard potato salad made fresh in-house daily.',
				price: '$3.50',
				image: img(PHOTOS.mac)
			}
		]
	},
	{
		id: 'drinks',
		name: 'Drinks',
		blurb: 'Ice-cold refreshment to wash down the smoke.',
		items: [
			{
				name: 'Sweet Tea',
				description: 'Fresh-brewed Texas sweet tea by the glass. Free refills with dine-in.',
				price: '$2.95',
				image: img(PHOTOS.drinks),
				popular: true
			},
			{
				name: 'Fountain Soda',
				description: 'Coke, Diet Coke, Sprite, Dr Pepper, and more. Free refills with dine-in.',
				price: '$2.50',
				image: img(PHOTOS.drinks)
			},
			{
				name: 'Lemonade',
				description: 'House-made lemonade, freshly squeezed and not too sweet.',
				price: '$2.95',
				image: img(PHOTOS.drinks)
			},
			{
				name: 'Bottled Water',
				description: 'Ice-cold bottled spring water.',
				price: '$1.50',
				image: img(PHOTOS.drinks)
			}
		]
	}
];

// Curated highlights for the home page "Featured" section.
export const featured: MenuItem[] = [
	menu[0].items[0], // Sliced Brisket
	menu[1].items[0], // Half Rack Ribs
	menu[3].items[0], // Smoked Turkey
	menu[2].items[0] // Pulled Pork
];
