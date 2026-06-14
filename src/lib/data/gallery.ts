import { img, PHOTOS } from './images';

export type GalleryImage = {
	src: string;
	alt: string;
	category: 'Meats' | 'Pit & Fire' | 'Atmosphere' | 'Guests';
	span?: boolean; // larger masonry cell
};

export const gallery: GalleryImage[] = [
	{
		src: img(PHOTOS.brisketSlices, 900, 1100),
		alt: 'Close-up of hand-sliced smoked brisket with a deep pink smoke ring',
		category: 'Meats',
		span: true
	},
	{
		src: img(PHOTOS.ribsRack, 900, 700),
		alt: 'Rack of glazed Texas-style pork spare ribs fresh off the smoker',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.grillFire, 900, 700),
		alt: 'Flames and smoke rising from the wood-fired barbecue pit',
		category: 'Pit & Fire'
	},
	{
		src: img(PHOTOS.bbqPlatter, 900, 700),
		alt: 'Loaded barbecue platter with brisket, ribs, and sides',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.smoker, 900, 1100),
		alt: 'Texas offset smoker billowing post-oak smoke at dawn',
		category: 'Pit & Fire',
		span: true
	},
	{
		src: img(PHOTOS.pulledPork, 900, 700),
		alt: 'Mound of freshly hand-pulled smoked pork shoulder',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.restaurantInterior, 900, 700),
		alt: 'Warm rustic dining room interior of the barbecue restaurant',
		category: 'Atmosphere'
	},
	{
		src: img(PHOTOS.burntEnds, 900, 700),
		alt: 'Caramelized brisket burnt ends glazed in barbecue sauce',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.pitmaster, 900, 1100),
		alt: 'Pitmaster tending the smoker and checking the brisket',
		category: 'Pit & Fire',
		span: true
	},
	{
		src: img(PHOTOS.happyCustomers, 900, 700),
		alt: 'Friends gathered around a table enjoying barbecue together',
		category: 'Guests'
	},
	{
		src: img(PHOTOS.woodPile, 900, 700),
		alt: 'Stacked seasoned post-oak firewood used for smoking',
		category: 'Pit & Fire'
	},
	{
		src: img(PHOTOS.loadedFries, 900, 700),
		alt: 'Brisket loaded fries with melted cheese and jalapeños',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.smokedTurkey, 900, 700),
		alt: 'Sliced smoked turkey breast on a serving board',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.sausage, 900, 700),
		alt: 'Smoked Texas hot-gut sausage links sliced on a tray',
		category: 'Meats'
	},
	{
		src: img(PHOTOS.cornbread, 900, 700),
		alt: 'Golden skillet cornbread served warm',
		category: 'Meats'
	}
];

export const galleryCategories = ['All', 'Meats', 'Pit & Fire', 'Atmosphere', 'Guests'] as const;
