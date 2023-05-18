const CardCandi = ({candidate, allCandidates, presenceElection, index}) => {
    
    let infoCandidate = allCandidates.find(e => e.id ===candidate.candidateId);

    /* console.log(candidate)
    console.log(infoCandidate) */
    let txColor = (index === 0) ? 'text-green-800' : 'text-yellow-500';

    return (  
        <div className="my-2 border shadow-md">
            <div className="flex flex-row items-center justify-between p-2">
                <img src={`img/${infoCandidate.username}.png`} alt=""  className="w-16 p-1 "/>
                <span className="text-sm">{candidate.votes} votos</span>
                <p className={`${txColor} font-bold`}>{(candidate.votes*100/presenceElection).toFixed(2)}%</p>
            </div>
            <p className="m-2 font-bold">{infoCandidate.name}</p>
            <p className={`${txColor} font-bold mb-3`}>{(index == 0) ? 'Eleito' : 'Não Eleito'}</p>

        </div>
    );
}

export default CardCandi;