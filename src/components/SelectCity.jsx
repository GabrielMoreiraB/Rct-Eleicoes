const SelectCity = ({allCities, whitchCity = null}) => {


    function chooseCity(e){
        if(whitchCity){
            let city = allCities.find(city => city.name ===e.target.value)
            whitchCity(city)
        }
    }
    return ( 
        <div className="flex flex-col items-center justify-center space-y-2 m-4">
            <label htmlFor="city">Escolha o município</label>
            <select name="city" id="city" onChange={chooseCity} className="shadow-md p-1 border-r-2">
                {allCities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </select>
        </div>
     );
}
 
export default SelectCity;