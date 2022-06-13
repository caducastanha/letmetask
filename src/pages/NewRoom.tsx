import React from 'react';

import '../styles/auth.scss'

import Button from '../components/Button';

import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import LogoGoogleImg from '../assets/images/google-icon.svg'


const NewRoom: React.FC = () => {
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
          <h2>Criar uma nova sala</h2>

          <form action="">
            <input
              type="text"
              placeholder='Noma da sala'
            />

            <Button type='submit'>
              Criar sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default NewRoom;