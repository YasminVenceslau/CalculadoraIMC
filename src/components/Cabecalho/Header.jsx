import { useState, useEffect } from "react";
import styles from './Header.module.css'
const Cabecalho = () => {
   return(
      <>
      <header >   
      </header>
      <h1>O que é IMC</h1>
            
      <div className={styles.headerContainer}>

         
                  <div className={styles.containerHeader}>
                  <p>
                        O IMC, ou Índice de Massa Corporal, é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.
                        
                     </p>
                     <p>
                        O IMC é uma fórmula utilizada por vários profissionais de saúde, incluindo médicos, nutricionistas, profissionais de educação física e enfermeiros, para saber, de uma forma rápida.Se precisa ganhar ou perder peso. <a target="_blank" href="https://www.tuasaude.com/imc/">Referências</a>
                     </p>
                     
                  </div>
      </div>



      </>

   )
}




export default Cabecalho