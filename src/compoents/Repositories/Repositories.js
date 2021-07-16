import React ,{ useEffect, useState } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Repositories(){

    const [ repositories , setRepositories ] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        //repositoriesName=JSON.stringify(repositoriesrepositoriesName);
       // setRepositories(repositoriesName);  
    }, []);

    //console.log(repositories)
    return (
        <S.Container>
            <S.Title> Repositories</S.Title>
            <S.LinkHome to="./">Voltar</S.LinkHome>
            <S.List> 
                { repositories.map(repository => {
                        return(
                                <S.ListItem>{ repository }</S.ListItem>
                        )
                })}
            </S.List>

        </S.Container> 
    )
}