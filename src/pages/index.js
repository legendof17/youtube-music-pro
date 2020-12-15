import React from 'react'
import { Badge } from 'react-bootstrap'
import MusicPlayer from '../components/MusicPlayer'
import { Body } from './pageelements'

const Home = () => {
    return (
        <Body className='index-body'>
            <Badge pill variant="warning"><h1>Youtube Music Player</h1></Badge>
            <MusicPlayer showMediaSession />
        </Body>
    )
}

export default Home
