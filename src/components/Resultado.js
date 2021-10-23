import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
                    <TransitionGroup
                        component="p"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 1000, exit:1000 }}
                        >
                            <TextoCotizacion>El Total es: $ {cotizacion}</TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                    
                </ResultadoCotizacion>
              )
     );
}
 
Resultado.prototype = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;