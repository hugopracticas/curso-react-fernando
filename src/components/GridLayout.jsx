import React, { useEffect, useState } from 'react'
import { getRickAndMortyData } from '../data/getRickAndMortyData'
import { CardCharacter } from './CardCharacter';

export const GridLayout = () => {

  const [characters, setCharacters] = useState([]);

  const fetchRickAndMortyData = async () => {
    const { status, results } = await getRickAndMortyData();
    if( status === 200 ){
      setCharacters(results);
    }else {
      return (
        <div>
          Empty list
        </div>
      )
    }
  }

  useEffect(() => {
    fetchRickAndMortyData()
  },[])

  return (
    <CardCharacter characters={ characters }/>
  )
}
