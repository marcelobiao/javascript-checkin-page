import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoGdg from '../../assets/250x106.png';
import logoJSDay from '../../assets/596.png';

export default function CheckIn(props){
    const[email, setEmail] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            //const response = await api.post('/sessions', {email});
            //console.log(response.data.name);
            //localStorage.setItem('ongId', email);
            //localStorage.setItem('ongName', response.data.name);

            //history.push('/profile');
            console.log('Fazendo post do e-mail...' + email);
            console.log('redirecionando...' + email);
        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoGdg} alt="Be The Hero"></img>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu check-in</h1>
                    <input
                        placeholder="E-mail"
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                </form>
            </section>

            <img src={logoJSDay} alt="Heroes"></img>
        </div>
    );
}