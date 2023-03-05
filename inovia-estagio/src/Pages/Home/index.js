import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home'>
            <Header />

            <div className='template'>

                <h1 className='title'>Seja Bem vindo ao BioMedk!</h1>

                <p className='body_home'>Aqui você poderá acessar informações sobre a saúde de pessoas por todo o Brasil, e também <br />poderá contribuir para formar uma rede melhor de saúde</p>

                <Link to="/data" className='button'>Comece Agora</Link>

            </div>
        </div>
    );
}

export default Home;