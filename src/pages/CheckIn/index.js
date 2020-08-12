import React, {useState, Fragment} from 'react';
import axios from 'axios';

import './styles.css';

import logoGdg from '../../assets/250x106.png';
import logoJSDay from '../../assets/596.png';

export default function CheckIn(props){
    const[email, setEmail] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        console.log('Teste' + process.env.teste);
        if(email == ''){
            alert('Por favor preencha seu email no campo indicado');
            return;
        }

        //https://docs.google.com/forms/d/e/1FAIpQLSdzpg_SoA3AATvtktyve1C7JTM7VLZ9D97eG9JZUsJdROfQ7g/formResponse?entry.416908338=t@d.com
        axios.post('https://docs.google.com/forms/d/e/1FAIpQLSdzpg_SoA3AATvtktyve1C7JTM7VLZ9D97eG9JZUsJdROfQ7g/formResponse?entry.416908338=' + email);
        window.location.href = "https://www.youtube.com/watch?v=tvzgh9PhFf4";
    }

    return (
        <Fragment>
            <div className="logon-container">
                <section className="form">

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
        </Fragment>
    );
}