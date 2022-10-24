import React from 'react';
import styled from 'styled-components'
import {ImgCardGrande,
        LayoutCardGrande,
        InfosCardGrande,
        TituloCardGrande} from "./styles"


export function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}