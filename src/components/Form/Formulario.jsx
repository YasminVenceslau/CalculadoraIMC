const CalcIMC = ({ peso, altura }) => {
    const confereCampos = () => {
        if (!altura || !peso || altura === '' || peso === '') {
            return 'Preencha todos os campos corretamente.';
        }
        return null;
    };

    const calculaIMC = () => {
        const alturaMetros = parseFloat(altura);
        const pesoKg = parseFloat(peso);

        const alturaEmCM = alturaMetros/100
    
        if (isNaN(alturaMetros) || isNaN(pesoKg) || alturaMetros <= 0 || pesoKg <= 0) {
            return 'Valores inválidos. Insira números positivos.';
        }
    
        const imc = (pesoKg / (alturaEmCM ** 2)).toFixed(2);
    
            if (imc < 18.5) return `Seu IMC é ${imc}: Abaixo do peso.` ;
            if (imc >= 18.6 && imc < 24.9) return `Seu IMC é ${imc}: Peso normal.`;
            if (imc >= 25 && imc < 29.9) return `Seu IMC é ${imc}: Sobrepeso.`;
            if (imc >= 30 && imc < 34.9) return `Seu IMC é ${imc}: Obesidade G1.`;
            if (imc >= 35 && imc < 39.9) return `Seu IMC é ${imc}: Obesidade G2`;
            if (imc >= 40) return `<p >Seu IMC é ${imc}: Obesidade G3`;
            return `Seu IMC é ${imc}: Obesidade.`;
        };
    
        const mensagemErro = confereCampos();
    
        return (
        <div>
            <h3>Resultado do IMC</h3>
            {mensagemErro ? (
            <p>{mensagemErro}</p>
            ) : (
            <p>{calculaIMC()}</p>
            )}
        </div>
        );
    };
    
    export default CalcIMC;
    