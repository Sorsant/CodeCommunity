import axios from "axios";
import {
  allCommunitys,
  getIdCommunity,
  getLanguages,
} from "../../Reducer/CommunityReducer";

export const getAllCommunities = () => async (dispatch) => {
  //Trae a todas las comunidades
  const endpoint =
    "https://codecommunity-production.up.railway.app/codec/api/community/";

  const { data } = await axios.get(endpoint);
  dispatch(allCommunitys(data));
};
export const getCommunity = (id) => async (dispatch) => {
  //Filtra las comunidades buscando la comunidad por el nombre de la misma
  const endpoint = `https://codecommunity-production.up.railway.app/codec/api/community/${id}`;

  const { data } = await axios.get(endpoint);
  dispatch(getIdCommunity(data));
};

export const getAllLanguages = () => async (dispatch) => {
  //Trae todos los lenguajes al selector para filtrar
  let url =
    "https://codecommunity-production.up.railway.app/codec/api/language";
  let json = await axios.get(url);

  dispatch(getLanguages(json));
};

export const addCommunity = (community) => async (dispatch) => {
  return async function () {
    const url = await axios.post(
      "https://codecommunity-production.up.railway.app/codec/api/community/",
      community
    );
    const endpoint =
      "https://codecommunity-production.up.railway.app/codec/api/community/";

    const { data } = await axios.get(endpoint);
    dispatch(allCommunitys(data));
  };
};
