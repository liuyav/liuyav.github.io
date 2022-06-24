export interface Classify {
  _id: string;
  label: string;
  children: Classify[];
  tags?: string[];
}

export interface ClassifyTag {
  _id: string;
  label: string;
  classifyId: string;
  note: string;
}

export interface Article {
  _id?: string;
  title: string;
  description: string;
  classify: Classify;
  tags: ClassifyTag[];
  createdAt: string;
  author: string;
  liked: number;
  comment: { num: number; list: string[] };
  content: '';
  poster?: '';
}

/** 根据分类、标签、排序进行查询参数 */
export interface ArticleParams {
  currentPage: number;
  pageSize: number;
  classify: string;
  tag?: string | undefined;
  order?: string;
}

export interface ArticleResponse {
  list: Article[];
  pageInfo: ArticleParams;
}

export interface ArticleParamsByCondition {
  currentPage: number;
  pageSize: number;
  order?: string;
}
