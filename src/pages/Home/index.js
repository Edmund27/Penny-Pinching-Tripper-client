import React from "react";
import Map from '../../components/Map'
import LocateMe from '../../components/LocateMe'
import NewTripForm from '../../components/NewTripForm'

export default function Home() {
  return (
    <div>
        <div>
        <NewTripForm />
        </div>
        <div style={{width: "100%", 
                height: "500px"}}>
        <Map/>
        </div>
        <LocateMe/>
    </div>
  )
}
