import { useState } from "react"
import Cabecalho from "./components/Cabecalho/Header"
import CalcIMC from "./components/Form/Formulario"


function App(){
const [altura, setAltura] = useState('')
const [peso, setPeso] = useState('')

    return(      
    <main>

        <div className="container">

            <Cabecalho />
            
           
                <form onSubmit={(e) =>{
                    e.preventDefault()
                    CalcIMC()
                }}>
                   
                    <div className="imcCal">
                        <h2>Calcularadora IMC</h2>
                        <p>Gostaria de saber o seu IMC?</p>
                
                        <input type="number" placeholder="Insira seu peso(kg) " required onBlur={(e) => setPeso(e.target.value)}/>
                        <input type="number" required placeholder="Isira a sua altura (cm)" onBlur={(e) => setAltura(e.target.value)} />
                        <button className="button-25" type="submit">Calcular</button>
                    <CalcIMC altura={altura} peso={peso} />
                    <footer>
                    <p> <a href="https://github.com/YasminVenceslau" target="_blank" title="Conheça o meu GitHub">Yasmin Venceslau</a>   ©  Todos os direitos reservados - 2025</p>
                    </footer>
                    </div>               
                    <div className="imcVals">
                        <img src="/src/assets/imagens/IMC-val-18.5.png" alt="" />
                        <img src="/src/assets/imagens/IMC-val-18.6.png" alt="" />
                        <img src="/src/assets/imagens/IMC-val-25.png" alt="" />
                        <img src="/src/assets/imagens/IMC-val-30.png" alt="" />
                        <img src="/src/assets/imagens/IMC-val-35.png" alt="" />
                        <img src="/src/assets/imagens/IMC-val-40.png" alt="" />
                    </div>
                </form>
                
               
            </div>

  
        
    
    </main>


    )




















}
export default App