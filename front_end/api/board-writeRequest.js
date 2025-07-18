import { getServerUrl, getCookie } from '../utils/function.js';

export const createPost = boardData => {
    const result = fetch(`${getServerUrl()}/posts`, {
        method: 'POST',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // ✅ 여기 추가!
    });
    return result;
};

export const updatePost = (postId, boardData) => {
    const result = fetch(`${getServerUrl()}/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json',
            session: getCookie('session'),
            userId: getCookie('userId'),
        },
        credentials: 'include', // ✅ 여기 추가!
    });

    return result;
};

export const fileUpload = formData => {
    const result = fetch(getServerUrl() + '/posts/upload/attach-file', {
        method: 'POST',
        body: formData,
    });
    

    return result;
};

export const getBoardItem = postId => {
    const result = fetch(getServerUrl() + `/posts/${postId}`, {
        method: 'GET',
        headers: {
            session: getCookie('session'),
            userId: getCookie('userId'),
        },
        credentials: 'include', // ✅ 여기 추가!
        noCORS: true,
    });

    return result;
};
