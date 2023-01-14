import axios from "axios"
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actions.Types"


 export const getData = (params) => (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST })
     axios
       .get("https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products",params)
       .then((res) => {
        dispatch({ type: GET_DATA_SUCCESS,payload:res.data.data })})
       .catch((e) => dispatch({ type: GET_DATA_FAILURE }));
}