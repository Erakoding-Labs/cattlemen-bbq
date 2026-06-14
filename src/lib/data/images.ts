/**
 * Curated Unsplash photo IDs (real BBQ / food / restaurant imagery).
 * `img()` builds an optimized, auto-formatted, cropped URL.
 * <SmartImage> provides a smoky SVG fallback if any remote image fails,
 * so the UI never shows a broken image.
 */
export function img(id: string, w = 1000, h = 750, q = 75): string {
	return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=${q}`;
}

export const PHOTOS = {
	brisketSlices: '1544025162-d76694265947',
	ribsRack: '1593030761757-71fae45fa0e7',
	bbqPlatter: '1529193591184-b1d58069ecdd',
	grillFire: '1558030006-450675393462',
	steakClose: '1600891964092-4316c288032e',
	grilledMeat: '1555939594-58d7cb561ad1',
	pulledPork: '1606756790138-261d2b21cd75',
	smokedTurkey: '1574672280600-4accfa5b6f98',
	loadedFries: '1573080496219-bb080dd4f877',
	jalapenoPoppers: '1625938145312-c889e7d2f48f',
	mac: '1543339494-b4cd4f7ba686',
	cornbread: '1509440159596-0249088772ff',
	beans: '1604329760661-e71dc83f8f26',
	drinks: '1437418747212-8d9709afab22',
	sausage: '1432139555190-58524dae6a55',
	burntEnds: '1623653387945-2fd25214f8fc',
	restaurantInterior: '1517248135467-4c7edcad34c4',
	pitmaster: '1556910103-1c02745aae4d',
	smoker: '1597393353415-b3730f3719fe',
	happyCustomers: '1414235077428-338989a2e8c0',
	woodPile: '1605000797499-95a51c5269ae',
	platterTop: '1607330289024-1535c6b4e1c1'
} as const;
