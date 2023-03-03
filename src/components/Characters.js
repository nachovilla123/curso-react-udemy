export default function Characters(props){
    
    const {characters,setCharacters} = props // characters era lo que le pasaba desde el otro componente

    const resetCharacters = () => {
        console.log("Reseteando");
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1> Personajes: </h1>
            <span className="back-home" onClick={resetCharacters}>Home</span>
            <div className="container-characters">
                {characters.map((character,index) =>( // return implicito, es para no hacer un return dentro de un return.
                    <div className="character-container" key={index}>
                        
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                    <span className="Alive" />
                                    Alive
                                    </>
                                ):(
                                    <>
                                        <span className="dead"></span>
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Home</span>
        </div>
       
    );
}