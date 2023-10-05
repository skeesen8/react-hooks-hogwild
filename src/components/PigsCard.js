import React from "react"
import { useState } from "react"



function PigsCard({pigs}){
    const [one,two]=useState() 


    const pigsArray = pigs.map((pigsObj)=>{
        return(
            <div >
            <p onClick={pigClick}>{pigsObj.name}</p>
            {/* id = {pigsObj.name} */}
            <img src = {pigsObj.image} onClick={pigClick} />
            </div>

            )
            function pigClick(){
                console.log(pigsObj.name)
                return(
                    <div>
                         <p>{pigsObj.name}</p>
                         <img src = {pigsObj.image} />
                         <p>{pigsObj.greased}</p>
                    </div>
                )
            
            }
        })
    
    return(

        <div>

            {pigsArray}

        </div>

    )
}
export default PigsCard