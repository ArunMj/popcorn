import * as React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = () => (
    <Card color='black' style={{ width: '200px', xheight: '300px' }} raised>
        <Card.Content style={{ 'padding': '0.15em' }} >
            <Image src='assets/sample.png' style={{ width: '100%', zheight: '270px' }} />
            {/* <Card.Header>Matthew</Card.Header> */}
            {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta> */}
            {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
        </Card.Content>
        <Card.Meta textAlign='center'> <a>Avengers Infinity war\nsdfsbdjfbshdbfsbh</a> </Card.Meta>
    </Card >
)

export default MovieCard
