import React from 'react';
import * as S from './styled';

export default function Repositories(){
    return (
        <S.Container>
            <S.Title> Repositories</S.Title>
            <S.List>
            <S.ListItem>repo 1</S.ListItem>
            <S.ListItem>repo 2</S.ListItem>
            </S.List>
        </S.Container> 
    )
}