import axios from "axios";
import config from "../config/config";
const headers = {
  accept: "application/json",
  Authorization: config.API_TOKEN,
};
const fetchDataFromApi = async ({ url, params }) => {
  try {
    const URL = "https://api.themoviedb.org/3" + url;
    const {data} = await axios.get(URL, { headers, params });
    return data;
  } catch (error) {
    console.log("ERROR in fetching data :: ", error);
    throw error;
  }
};

export default fetchDataFromApi;
