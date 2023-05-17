import {read} from "./httpServices";



export async function apiGetAllCities(){
    const allCities = await read('/cities');
    return allCities;
}

export async function apiGetAllCandidates(){
    const allCandidates = await read('/candidates');
    return allCandidates;
}

export async function apiGetAllElection(){
    const allElection = await read('/Election');
    return allElection;
}

