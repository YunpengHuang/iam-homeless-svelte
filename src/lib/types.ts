export type UserInputeData = {
	suburb?: string;
	priceMax: number;
	priceMin: number;
	bathrooms: number;
	bedrooms: number;
	garage: number;
};

export type CoordinatesData = {
	suburb: string | null;
	latitude: number | null;
	longitude: number | null;
};
