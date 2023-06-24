// import { ADD_POST } from '../../action-types';

// import axios from 'axios';



// export const addHomePosts = (post) => {
//     return async function (dispatch) {
//         const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/post/", post)
//         return url
//     }
// };
// export const postUser = (payload) => { //Crea un User (posteo)
//     return async () => {
//         try {
//             let createUser = await axios.post('https://codecommunity-production.up.railway.app/codec/api/users/', payload);
//             console.log(createUser);
//             alert('The User was created!');
//             return createUser;
//         } catch (error) {
//             alert("This User already exists...")
//             console.log(error);
//         }
//     };
// };
