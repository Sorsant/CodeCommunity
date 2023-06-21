import { ADD_POST } from '../../action-types';

import axios from 'axios';



export const addHomePosts = (post) => {
return async function (dispatch) {
    const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/post/", post)
    console.log(url)
    return url
}
};
