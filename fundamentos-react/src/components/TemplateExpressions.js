const TemplateExpressions = () => {

    const name = "Gabriel";
    const data =  {
        age:25,
        job: "Programmer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            { 4 + 4 }
            <p>{console.log("JSX React")}</p>

        </div>
    );
};

export default TemplateExpressions;