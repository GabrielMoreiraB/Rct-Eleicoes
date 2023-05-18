const DataTotal= ({selectedCity }) => {
    return ( 
        <div className="flex flex-row justify-center items-center gap-2 mt-3">
           <span><strong>Total de Eleitores:</strong>{selectedCity.votingPopulation}</span>
            <span><strong>Abstenção:</strong>{selectedCity.absence}</span>
            <span><strong>Comparecimento:</strong>{selectedCity.presence}</span>

        </div>
     );
}
 
export default DataTotal