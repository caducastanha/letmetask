import React from 'react';
import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import LogoGoogleImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div id='page-auth'>
      <aside>
        <img src={IllustrationImg} alt="Illustration img" />
        <strong>Crie salas de Q{'&'}A ao-vivo</strong>
        <p>Tire duvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={LogoImg} alt="Logo img" />
          <button className='create-room'>
            <img src={LogoGoogleImg} alt="Logo Google" />
            Crie sua sala com o google
          </button>

          <div className='separator'>ou entre em uma sala</div>

          <form action="">
            <input
              type="text"
              placeholder='Digite o código da sala'
            />

            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Home;