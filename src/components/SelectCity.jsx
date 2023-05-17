const SelectCity = ({allCities, whitchCity = null}) => {


    function chooseCity(e){
        if(whitchCity){
            whitchCity(e.target.value)
        }
    }
    return ( 
        <div className="flex flex-col items-center justify-center space-y-2 m-4">
            <label htmlFor="city">Escolha o município</label>
            <select name="city" id="city" onChange={chooseCity}>
                {allCities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </select>
        </div>
     );
}
 
export default SelectCity;