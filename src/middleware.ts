import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // 匹配所有路径，排除静态资源和 API 路由
    matcher: [
        // 匹配所有路径
        '/((?!api|_next|_vercel|.*\\..*).*)',
        // 也匹配根路径
        '/',
    ],
};
