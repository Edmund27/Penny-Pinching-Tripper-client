import { apiUrl } from "../../config/constants";
import axios from "axios";

export const storePosition = (data) => {
    return {
        type: "STORE_CURRENT_POSITION",
        payload: data
    }
}

export const setCurrentTrip = (city, country) => {
    console.log("ACTIONS.js", city, country)
    return {
        type: "SET_CURRENT_TRIP",
        payload: [city, country]
    }
}

export const storeBusinesses = (businesses) => {
    //console.log("ACTIONS.js", businesses)
    return {
        type: "STORE_BUSINESSES",
        payload: businesses
    }
}

export const fetchBusinesses = (city, businessType, priceCategory) => {
    return async (dispatch, getState) => {
        console.log("LAST BEFORE DISPTCH", businessType, priceCategory)

        try {
            const response = await axios.post(`${apiUrl}/yelp/${city}`, {
                businessType,
                priceCategory

            })
            console.log(response.data)
            dispatch(storeBusinesses(response.data))

        } catch (error) {
            if (error.response) {
                console.log(error.response.message);
            } else {
                console.log(error);
            }
        }
    };
};
