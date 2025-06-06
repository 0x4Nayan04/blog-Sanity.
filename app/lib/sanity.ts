import { createClient } from 'next-sanity';
export const client = createClient({
	apiVersion: '2023-10-17',
	dataset: 'production',
	projectId: process.env.projectId,
	useCdn: false
});
