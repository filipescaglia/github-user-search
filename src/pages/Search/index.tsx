import axios from 'axios';
import Button from 'core/components/Button';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.css';

type Result = {
    name?: string;
    avatar_url?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    company?: string | null;
    blog?: string;
    location?: string;
    created_at?: string;
    html_url?: string;
}

const Search = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState<Result>({});

    const formatDate = (date: string|undefined) => {
        return dayjs(date).format('DD/MM/YYYY');
    }

    const handleSearchUser = () => {
        setCount(count + 1);
        setResult({});
        if (user.length > 0) {
            setIsLoading(true);
            axios.get(`https://api.github.com/users/${user}`)
                .then(response => {
                    setResult(response.data);
                    setIsLoading(false);
                })
                .catch(err => console.log(err));
        } else {
            alert('É necessário informar um usuário!');
        }
    }

    return (
        <div className="container search-container">
            <div className="search-header">
                <h1>Encontre um perfil Github</h1>

                <input
                    type="text"
                    placeholder="Usuário Github"
                    onChange={(event) => setUser(event.target.value)}
                />

                <Button text="Encontrar" onClick={handleSearchUser} />
            </div>

            {count > 0 && 
                <div className="result-container">
                    <div className="result-info">
                        {isLoading ? <ImageLoader /> :
                            <img src={result.avatar_url} alt={user} />
                        }

                        {isLoading ? <InfoLoader /> :
                            <div className="aside">
                                <span className="statistics">
                                    Repositórios públicos: {result.public_repos}
                                </span>
                                <span className="statistics">
                                    Seguidores: {result.followers}
                                </span>
                                <span className="statistics">
                                    Seguindo: {result.following}
                                </span>

                                <div className="user-info">
                                    <h3>Informações</h3>
                                    <div className="info-section">
                                        <b>Empresa:</b> {result.company === null ? 'Não informado' : result.company}
                                    </div>
                                    <div className="info-section">
                                        <b>Website/blog:</b> {result.blog === '' ? 'Não informado' : result.blog}
                                    </div>
                                    <div className="info-section">
                                        <b>Localidade:</b> {result.location}
                                    </div>
                                    <div className="info-section">
                                        <b>Membro desde:</b> {formatDate(result.created_at)}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {!isLoading &&
                        <a href={result.html_url} rel="noreferrer" target="_blank">
                            <Button text="Ver perfil" />
                        </a>
                    }
                </div>
            }
        </div>
    );
}

export default Search;