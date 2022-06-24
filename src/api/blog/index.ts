import request from '@/utils/request';
import type { AxiosResponse } from 'axios';
import { ClassifyTag, Classify, ArticleParams, ArticleResponse, Article } from './types';

/**
 * 根据分类id查询分类
 * @param params id 分类id
 * @returns Article[]
 */
export const queryClassify = async (params?: { id: string }): Promise<AxiosResponse<Classify[]>> => {
  return await request({
    method: 'get',
    url: '/classify',
    params
  });
};

/**
 * 根据分类id查询标签
 * @param params id 分类id
 * @returns tags[]
 */
export const queryTags = async (params: { id: string }): Promise<AxiosResponse<ClassifyTag[]>> => {
  return await request({
    method: 'get',
    url: '/tag',
    params
  });
};

/**
 * 分页查询文章列表
 * @param params *currentPage 当前页码
 * @param params *pageSize 页码大小
 * @param params *classify 分类
 * @param params tag 标签
 * @returns Article[]
 */
export const queryArticleListByKeyword = async (params: ArticleParams): Promise<AxiosResponse<ArticleResponse>> => {
  return await request({
    method: 'get',
    url: '/articles/keyword',
    params
  });
};

/**
 * 根据文章id查询文章详情
 * @param params id
 * @returns Article
 */
export const queryArticleDetail = async (params: { id: string }): Promise<AxiosResponse<Article>> => {
  return await request({
    method: 'get',
    url: `/article/${params.id}`
  });
};
