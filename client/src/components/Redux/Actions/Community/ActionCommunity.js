import axios from "axios";
import {
  allCommunitys,
  getIdCommunity,
  getLanguages,
} from "../../Reducer/CommunityReducer";
import { API_URL } from "../../../../config";
export const getAllCommunities = () => async (dispatch) => {
  //Trae a todas las comunidades
  const endpoint =
    `${API_URL}/codec/api/community/`;

  const { data } = await axios.get(endpoint);
  dispatch(allCommunitys(data));
};
export const getCommunity = (id) => async (dispatch) => {
  //Filtra las comunidades buscando la comunidad por el nombre de la misma
  const endpoint = `${API_URL}/codec/api/community/${id}`;

  const { data } = await axios.get(endpoint);
  dispatch(getIdCommunity(data));
};

export const getAllLanguages = () => async (dispatch) => {
  //Trae todos los lenguajes al selector para filtrar
  let url =
    `${API_URL}/codec/api/language`;
  let json = await axios.get(url);

  dispatch(getLanguages(json));
};

export const addCommunity = (community) => async (dispatch) => {
    const url = await axios.post(`${API_URL}/codec/api/community/`,
      community
    );
    console.log("entre al post de comunidad")
    }

