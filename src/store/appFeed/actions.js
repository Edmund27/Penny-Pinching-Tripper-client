import axios from 'axios'
const apiUrl = 'http://localhost:4000'


export const storePosition = (data) => {
    return {
        type: "STORE_CURRENT_POSITION",
        payload: data
    }
}
// const herokuYelp = 'https://cors-anywhere.herokuapp.com'
export const getYelp = (budget, category, city) => {
    return async function thunk(dispatch, getState) {

        const res = await axios({ method: 'post',
                                    url: `${apiUrl}/yelp`,
                                    data: {budget, category, city},                                 
                                          })
        console.log(res)
    }
}

