import { getServerUrl, getCookie } from '../utils/function.js';

export const getPosts = (offset, limit) => {
    const result = fetch(
        `${getServerUrl()}/posts?offset=${offset}&limit=${limit}`,
        {
            headers: {

            },
            credentials: 'include', // ✅ 이 줄 반드시 있어야 세션 쿠키 같이 전달됨!
            noCORS: true,
        },
    );
    return result;
};