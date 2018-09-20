import * as React from 'react'
import { Container } from 'semantic-ui-react'
import MovieCard from './MovieCard';
import { Button, Card, Image } from 'semantic-ui-react';

const TileView = () => (
  <div className='TilesViewCardGroup'>
    <Card.Group textAlign='center'>
      {[1, 2, 3, 12, 4, 5, 6, 6, 6].map((i, idx) => <MovieCard key={idx} />)}
    </Card.Group>
  </div>
)

export default TileView