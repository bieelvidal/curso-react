// arquivo de estilo

import Mycomponent from "./MyComponent";

const FirstComponent = () => {
    // essa função faz isso
    return (
        <div>
            {/*Algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <Mycomponent/>
        </div>
    );
};

export default FirstComponent;