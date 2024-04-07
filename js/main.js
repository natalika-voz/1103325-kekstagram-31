import { generateMockPosts } from './data.js';
import { buildThumbnails } from './thumbnails.js';

const thumbnails = generateMockPosts();
buildThumbnails(thumbnails);
