type BlogPostMetaData = {
  id: string;
  title: string;
  date: string;
};

type BlogPost = {
  contentHtml: string;
} & BlogPostMetaData;
