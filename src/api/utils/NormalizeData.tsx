import { GuardianInterface, NYTimesInterface, WallStreetInterface } from "../../types";

const normalizeGuardianData = (
	data: GuardianInterface["response"]["results"]
): NormalizedData[] => {
	const results = data.map((result) => {
		return {
			source: "Guardian",
			publishedAt: result.webPublicationDate,
			section: result.sectionName,
			title: result.webTitle,
			type: result.type,
			url: result.webUrl,
			articleUrlImage: result?.fields?.thumbnail,
		};
	});
	return results;
};

const normalizeWallStreetData = (data: WallStreetInterface["articles"]): NormalizedData[] => {
	const results = data.map((article) => {
		return {
			source: "Wall Street Journal",
			articleUrlImage: article?.urlToImage,
			author: article.author,
			content: article.content,
			desription: article?.description,
			publishedAt: article.publishedAt,
			title: article.title,
			url: article.url,
		};
	});

	return results;
};

const normalizeNYTimesData = (data: NYTimesInterface["results"]): NormalizedData[] => {
	const response = data.map((result) => ({
		source: "New York Times",
		media: result.media[0]["media-metadata"].slice(-1).map((media) => media.url)[0],
		publishedAt: result.published_date,
		title: result.title,
		type: result.type,
		url: result.url,
	}));
	return response;
};

export type NormalizedData = {
	source: string;
	title: string;
	url: string;
	publishedAt: Date;
	description?: string;
	section?: string;
	type?: string;
	author?: string;
	content?: string;
	articleUrlImage?: string | null;
	media?: string;
};

export const aggregateData = (
	guardianData: GuardianInterface["response"]["results"],
	wallStreetData: WallStreetInterface["articles"],
	nyTimesData: NYTimesInterface["results"]
): NormalizedData[] => {
	const normalizedGuardianData = normalizeGuardianData(guardianData);
	const normalizedWallStreetData = normalizeWallStreetData(wallStreetData);
	const normalizedNYTimesData = normalizeNYTimesData(nyTimesData);

	const aggregatedData: NormalizedData[] = [
		...normalizedGuardianData,
		...normalizedWallStreetData,
		...normalizedNYTimesData,
	];

	return aggregatedData;
};
