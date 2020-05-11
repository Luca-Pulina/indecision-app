import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

/*Salto la creazione di nuove classi con babel ma ne tengo comunque esempio */
/*La documentazione ufficiale di React usa la vecchia notazione delle classi con costruttore */

/* class Oldsyntax {
    constructor () {
        this.name = "Mike"
    }
}
const oldSintax = new Oldsyntax()


class NewSintax {
    name = 'Luca'
}
const newSyntax = new newSyntax() */
