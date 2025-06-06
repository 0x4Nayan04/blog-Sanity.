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
	content: any; // Adjust type as needed, e.g., string or a more complex type
}
