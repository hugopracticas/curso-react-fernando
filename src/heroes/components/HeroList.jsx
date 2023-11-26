import React from 'react'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );
  return (
    <>
     { heroes.map((heroe) => (
      <div key={ heroe.id }>
        <h1>{ heroe.superhero }</h1>
      </div>
     ))}
    </>
  )
}
