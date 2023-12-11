const Challenge = () => {
    
    let a = 5;
    let b = 10;

    const renderNumber = () => {
        console.log(a + b);
    }
    
    return (
        <>
            <h3>Valor de A: {a}</h3>
            <h3>Valor de B: {b}</h3>
            <div>
                <button onClick={renderNumber}>Somar</button>
            </div>
        </>
    );
};

export default Challenge;

