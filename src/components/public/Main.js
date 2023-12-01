import React, { Component } from 'react'
import Card from './Cards';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {mascotas: []};
    }
    componentDidMount(){
    }
  render() {
    return (
      <div>
         <main class="flex-grow-1">
            <h1 class="text-center py-3">Utilizacion de appi Rick and Morty</h1>
                <h4 className="text-center">Creado por Marlon Gomez Morales</h4>
                <Card />
            </main>
      </div>
    )
  }
}

export default Main
