import React from 'react';

import {Card} from '../card/card.component';
import './card-list.style.css'

export const CardList = (propos) => {
   
return (<div className = 'card-list'>     {
    propos.monsters.map(monster => (
        <Card key = {monster.id} monster = {monster}/>
   
        ))
  }</div>)
}