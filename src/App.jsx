import { useEffect, useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import { apiGetAllCandidates, apiGetAllCities, apiGetAllElection } from './services/apiService';
import SelectCity from './components/SelectCity';
import DataTotal from './components/DataTotal';
import AllCardsCandidates from './components/AllCardsCandidates';
import { ClipLoader } from "react-spinners";

export default function App() {

  const [allCities, setAllCities] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [allElection, setAllElection] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(()=>{
    async function getAllItens(){
      try{
        const backandAllCities = await apiGetAllCities();
        setAllCities(backandAllCities);
        const backandAllCandidates = await apiGetAllCandidates();
        setAllCandidates(backandAllCandidates);
        const backandAllElection = await apiGetAllElection();
        setAllElection(backandAllElection);
        
        setTimeout(()=> {setLoading(false)}, 500)
      } catch(error){
          setError(error.message);
      }
    }
    getAllItens()
    
  }, [])
  function handleSelectedCity(city){
    setSelectedCity(city) 
  }
  
  let mainJsx = (<div className='flex justify-center my-4'>
  <ClipLoader/>
  </div>)

  if(error){
    mainJsx = <p>{error}</p>
  }

  if(!loading){
    mainJsx = 
    <>
      <SelectCity allCities={allCities} whitchCity = {handleSelectedCity}/>

      <div className='border p-2 text-center'>
          <strong >Eleição em {selectedCity.name}</strong>
          <DataTotal selectedCity={selectedCity}/>
          <AllCardsCandidates  
          selectedCity={selectedCity} 
          allCandidates={allCandidates} 
          allElection={allElection}/>
      </div>
    </>}

  return (
    <div>
      <Header>React Elections</Header>
      
      <Main> {mainJsx} </Main>
    </div>
  );
}
