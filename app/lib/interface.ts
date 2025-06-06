export interface SimpleBlogCard {
	title: string;
	aiSummary: string;
	currentThumbnail: string;
	currentSlug: string;
}

export interface BlogArticle {
	currentSlug: string;
	aiSummary: string;
	title: string;
	currentThumbnail: string;
	content: Array<{
		_type: string;
		[key: string]: unknown;
	}>;
}
