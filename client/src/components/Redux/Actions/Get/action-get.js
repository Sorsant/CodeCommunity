

// import axios from 'axios';






// export const getAllCommunities = () => { //Trae a todas las comunidades 
//     const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/community/';
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint);
//         return dispatch({
//             type: GET_ALL_COMMUNITIES,
//             payload: data
//         })
//     }
// }

// export const getCommunity = (id) => { //Filtra las comunidades buscando la comunidad por el nombre de la misma
//     const endpoint = `https://codecommunity-production.up.railway.app/codec/api/community/${id}`
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint);
//         return dispatch({
//             type: GET_COMMUNITY,
//             payload: data
//         });
//     }
// }


// export const Getcategory = () => {
//     return async (dispatch) => {
//         const response = await axios.get("https://codecommunity-production.up.railway.app/codec/api/category/");
//         const data = response.data;
//         dispatch({
//             type: GET_CATEGORY,
//             payload:data
//         });

//     };
// };

// export const getAllLanguages = () => { //Trae todos los lenguajes al selector para filtrar
//     return async (dispatch) => {
//         try {
//             let url = 'https://codecommunity-production.up.railway.app/codec/api/language';
//             let json = await axios.get(url);
//             return dispatch({
//                 type: GET_ALL_LANGUAGES,
//                 payload: json.data
//             });
//         } catch (error) {
//             console.log(error);
//         };
//     };
// };


// export const getNews = () => {
//     const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/news/'
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint);
//         return dispatch({
//             type: GET_NEWS,
//             payload: data,
//         })
//     }
// }
// export const getUser = (id) => {
//     const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/users/';
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint);
//         return dispatch({
//             type: USERS,
//             payload: data
//         });
    
//     }}

// export const getUserId = (id) => {
//     const endpoint = `https://codecommunity-production.up.railway.app/codec/api/users/${id}`
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint);
//         return dispatch({
//             type: USERS,
//             payload: data
//         });
//     }
// }
// export const getUserExtra = () => {
//     const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/user_extras/';
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint);
//         return dispatch({
//             type: GET_USER_EXTRA,
//             payload: data
//         });
    
//     }}

