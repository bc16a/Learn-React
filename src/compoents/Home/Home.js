import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

function Home() {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{
    const repositories = response.data;
    const repositoriesName= []
    repositories.map(repository=>{
      repositoriesName.push(repository.name)
    })
    localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName) )
    } )
  }
  return (

    <S.Container>
      {/* <h1> Hello {props.title}</h1> */}
      <h1>{usuario} </h1>
      <S.Input className="usuarioInput" placeholder="user" value={usuario} onChange={e => setUsuario(e.target.value)} />
      < S.button type="button" onClick={handlePesquisa}> Pesquisa </S.button >
    </S.Container>
  );
}

export default Home;
