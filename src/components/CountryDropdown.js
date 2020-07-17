import React, { useState } from "react";
import csc from 'country-state-city'



export default function UserPage() {
    const [countryId, setCountryId] = useState();
    const [stateId, setStateId] = useState();
    const [cityId, setCityId] = useState();

    function select(event) {
        event.preventDefault();

    }


    return (
        <div>
            <select name="country" className="countries order-alpha" id="countryId" onChange={(event) => setCountryId(event.target.value)}>
                {csc.getAllCountries().map((country) => {
                    return (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    )
                })}
            </select>
            {countryId && <select name="state" className="states order-alpha" id="stateId" onChange={(event) => setStateId(event.target.value)}>
                {csc.getStatesOfCountry(countryId).map((state) => {
                    return (
                        <option key={state.id} value={state.id}>{state.name}</option>
                    )
                })}
            </select>}
            {stateId && <select name="city" className="cities order-alpha" id="cityId" onChange={(event) => setCityId(event.target.value)}>
                {csc.getCitiesOfState(stateId).map((city) => {
                    return (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    )
                })}
            </select>}
            {cityId && <button onClick={select}>
                click
            </button>}
        </div>
    )
}
