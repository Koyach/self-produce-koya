import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful Space ID and Access Token must be provided in .env.local'
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Example function to fetch entries (adjust as needed)
// You might want to create specific functions for different content types
export async function fetchEntries(contentType: string, locale: string = 'en-US') {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: contentType,
      locale: locale, // Fetch entries for the specified locale
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching entries from Contentful:', error);
    return []; // Return empty array on error
  }
}
