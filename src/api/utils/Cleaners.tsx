import { WallStreetInterface, NYTimesInterface, GuardianInterface } from "../../types";

export const cleanGuardianData = (
	data: GuardianInterface["response"]
): GuardianInterface["response"]["results"] => {
	return data.results.map((result) => {
		return {
			apiUrl: result.apiUrl,
			id: result.id,
			isHosted: result.isHosted,
			pillarId: result.pillarId,
			pillarName: result.pillarName,
			sectionId: result.sectionId,
			sectionName: result.sectionName,
			type: result.type,
			webPublicationDate: result.webPublicationDate,
			webTitle: result.webTitle,
			webUrl: result.webUrl,
			fields: {
				thumbnail: result.fields?.thumbnail,
			},
		};
	});
};

export const cleanWallStreetData = (data: WallStreetInterface): WallStreetInterface["articles"] => {
	return data.articles.map((article) => {
		return {
			source: {
				id: article.source.id,
				name: article.source.name,
			},
			author: article.author,
			content: article.content,
			description: article.description,
			publishedAt: article.publishedAt,
			title: article.title,
			url: article.url,
			urlToImage: article.urlToImage,
		};
	});
};

export const cleanNYTimesData = (data: NYTimesInterface): NYTimesInterface["results"] => {
	return data.results.map((result) => {
		return {
			abstract: result.abstract,
			adx_keywords: result.adx_keywords,
			asset_id: result.asset_id,
			byline: result.byline,
			column: result.column,
			des_facet: result.des_facet,
			eta_id: result.eta_id,
			geo_facet: result.geo_facet,
			id: result.id,
			media: result.media,
			nytdsection: result.nytdsection,
			org_facet: result.org_facet,
			per_facet: result.per_facet,
			published_date: result.published_date,
			section: result.section,
			source: result.source,
			subsection: result.subsection,
			title: result.title,
			type: result.type,
			updated: result.updated,
			uri: result.uri,
			url: result.url,
		};
	});
};
