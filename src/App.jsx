import { useEffect, useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import { apiGetAllCandidates, apiGetAllCities, apiGetAllElection } from './services/apiService';
import SelectCity from './components/SelectCity';

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
  console.log(allCities)
  function handleSelectedCity(city){
    setSelectedCity(city)
    console.log(city)
  }

  return (
    <div>
      <Header>React Elections</Header>

      <Main>
        <SelectCity allCities={allCities} whitchCity = {handleSelectedCity}/>

        <div className='border p-2 text-center'>
            <strong >Eleição em {selectedCity}</strong>
            <div></div>
        </div>
      </Main>
    </div>
  );
}
