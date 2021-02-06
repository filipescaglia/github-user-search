import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="container home-container">
        <h1>
            Desafio do Capítulo 3, <br/>
            Bootcamp DevSuperior
        </h1>

        <p>
            Bem-vindos ao desafio do capítulo 3 do
            Bootcamp DevSuperior.
        </p>

        <p>
            Favor observar as instruções passadas no
            capítulo sobre a elaboração <br/> deste projeto.
        </p>

        <p>
            Este design foi adaptado a partir de Ant Design
            System for Figma, de <br/> Mateusz Wierzbicki: antforfigma@gmail.com
        </p>

        <Link to="/search">
            <Button text="Começar" />
        </Link>
    </div>
);

export default Home;