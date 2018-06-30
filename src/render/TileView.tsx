import * as React from 'react'
import { Container } from 'semantic-ui-react'
import MovieCard from './MovieCard';
import { Button, Card, Image } from 'semantic-ui-react';

const TileView = () => (
  <Container>
    <Card.Group  xitemsPerRow={6}>
    { [1, 2, 3, 12, 3, 4, 5, 5, 6, 6, 6].map((i) => <MovieCard key={i}/>) }
    </Card.Group>
  </Container>
)

export default TileView