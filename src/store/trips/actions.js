import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import {
    appLoading,
    appDoneLoading,
} from "../appState/actions";


export const STORE_NEW_TRIP = "STORE_NEW_TRIP";

const storeNewTrip = tripData => {
    return {
        type: "STORE_NEW_TRIP",
        payload: tripData
    }
}


export const createTrip = (destinationCountry, startDate, endDate, budget) => {
    return async (dispatch, getState) => {
        const userId = selectUser(getState()).id;
        console.log("TEST:", userId, destinationCountry, startDate, endDate, budget)

        dispatch(appLoading());
        try {
            const response = await axios.post(`${apiUrl}/trips`,
                { userId, destinationCountry, startDate, endDate, budget },
            );

            dispatch(storeNewTrip(response.data))

            dispatch(appDoneLoading());
        } catch (error) {
            if (error.response) {
                console.log(error.response.message);
            } else {
                console.log(error);
            }
            dispatch(appDoneLoading());
        }
    };
};