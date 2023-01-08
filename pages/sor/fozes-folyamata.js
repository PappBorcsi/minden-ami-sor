const FozesFolyamata=()=>{
    
    const folyamatok=["megmosas","szaritas", "keveres" ]
    
    return (
        <>
            <h1>
            Főzés folyamata
            </h1>
            <ol>
            {folyamatok.map(t=><li className="folyamatok">{t}</li>)}
            </ol>
        </>
        
    )
}
export default FozesFolyamata