import React ,{ useEffect, useState } from 'react';
import * as S from './styled';
import { Link , useHistory} from 'react-router-dom';

export default function Repositories(){

    const [ repositories , setRepositories ] = useState([]);
    const history = useHistory();
    useEffect(() => {

        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName!=null){
            repositoriesName=JSON.parse(repositoriesName);
            setRepositories(repositoriesName);  
            localStorage.clear();
        }else{
            history.push('./')
        } 
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