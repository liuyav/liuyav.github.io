/** 基础请求格式 */
export interface BaseRequestFormat<T> {}

/** 基础返回格式 */
export interface BaseResponse<T> {
  code: number;
  tool: Object;
  data: T;
}
