/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  204: 'NO content',
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  500: 'Internal server error',
  502: 'Bad gateway',  
  503: 'Service unavailable',
};
/** 异常处理程序 */

const errorHandler = (error) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `Error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Connection not stable',
      message: 'Please check your connection',
    });
  }

  return response;
};
/** 配置request请求时的默认参数 */
const prefix= 'http://157.230.194.236:80'
const request = extend({
  prefix,
  errorHandler,
  // 默认错误处理
  headers:{
     'Access-Control-Allow-Origin':'*'
  }
});
export default request;
