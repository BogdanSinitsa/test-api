import * as mongoose from 'mongoose';

export const pageViewCollectionName = 'page-view';

export interface PageView extends mongoose.Document {
  pageId: string;

  userId: string;

  timestamp: Date;

  ip: string;

  country: string;

  browser: string;
}

export const PageViewSchema = new mongoose.Schema<PageView>({
  pageId: String,

  userId: String,

  timestamp: Date,

  ip: String,

  country: String,

  browser: String,
});
