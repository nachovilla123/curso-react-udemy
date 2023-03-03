export default function Characters(props){
    
    const {characters} = props // characters era lo que le pasaba desde el otro componente

    return (
        <div className="characters">
            <h1> personajes </h1>
            <span className="back-home">Home</span>
            <div className="container-characters">
                {characters.map((characters,index) =>( // return implicito, es para no hacer un return dentro de un return.
                    <div className="character-container" key={index}>
                        <p>{characters.name}</p>
                    </div>
                ))}
            </div>
          


            
           
        </div>
       
    );
}