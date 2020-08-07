import React from 'react'

import euImg from '../../assets/doc/assets/17992023_1057827730984246_8068600616753161475_n.jpg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src={euImg} alt="Joselaine"/>
            <div>
                <strong>Joselaine Romao</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
            Matéria de grande aproveitamento e crescimento.
        </p>
        <footer>
            <p>
                Preço/hora<strong>R$100,00</strong>
            </p>
            <button>    
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Conatato
            </button>
        </footer>                                                      
    </article>
    )
}

export default TeacherItem;