import axios from "axios";

// const getDogsById = (id) => {
// 	return async function (dispatch) {
// 		try {
// 			const dbData = await axios.get(`${URL}/dogs/${id}`);
// 			dispatch(getDogDetail(dbData.data));
// 		} catch (error) {
// 		}
// 	};
// };
export const getHomePosts = () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch(getHomePosts(data))
      
    }
}