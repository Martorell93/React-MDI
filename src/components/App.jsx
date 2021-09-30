import React from 'react'
import Header from './Header/Header'
import styles from './App.module.css'
import Cases from './Cases/Cases'
import Connected from './Connected/Connected'
import Chats from './Chats/Chats'
import { chats } from '../models/chats'
import Openchat from './Chats/Openchat'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className="content">
        <div className="content_left">
          <Cases />
          <Connected />
        </div>
        <div className="content_right">
          <Chats />
          {
            chats.map((chat_, i) => (
              (chat_.open) ? 
              <Openchat key={i}
              title={chat_.title} category={chat_.category}
              participants={chat_.participants} history={chat_.history} />
              :
              // IF TERNARIO SIN ELSE, ¿COMO HACERLO?
              <p key={i}>No hay chat abierto</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
