import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    margin: 0;
    padding: 1rem;
    font-weight: bold;
    text-align: center;
`;
const Resultado = ({cotizacion}) => {
    return ( 
        (cotizacion===0) 
            ? <Mensaje>Elige marca, year y tipo de seguro</Mensaje> 
            : (
                <ResultadoCotizacion>
                    <TextoCotizacion>El Total es: $ {cotizacion}</TextoCotizacion>
                </ResultadoCotizacion>
              )
     );
}
 
export default Resultado;