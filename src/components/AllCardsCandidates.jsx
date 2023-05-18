import { useState } from "react";
import CardCandi from "./CardCandid";

const AllCardsCandidates = ({selectedCity, allCandidates, allElection}) => {

    let cadidatesElection = []
    allElection.forEach(element => {
        if(element.cityId == selectedCity.id){
            cadidatesElection.push(element)
        }
    });

    cadidatesElection = cadidatesElection.sort((a, b) => {return a.votes - b.votes;}).reverse();

    console.log(cadidatesElection)

    return ( 
        <div className="mt-3">
            <span>{cadidatesElection.length} candidatos</span>

           {cadidatesElection.map((candidate, index) =><CardCandi 
           key={candidate.id}
            candidate={candidate}
             allCandidates={allCandidates}
              presenceElection={selectedCity.presence}
              index={index}
              />)} 

        </div>
     );
}
 
export default AllCardsCandidates;