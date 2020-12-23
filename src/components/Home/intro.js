import React from 'react'
import Typical from 'react-typical'
import {Badge} from 'react-bootstrap'

const Intro = () => {
    return (
        <Badge pill variant="warning">
            <h1>
                <Typical 
                    loop={Infinity} 
                    wrapper="p" 
                    steps={[
                    'Youtube Music Pro..! ♫', 600, 
                    '♫ Install this App..! ⬇', 1000, 
                    'To unlock more ->', 1000,
                    '-> exciting features..♡', 1000
                    ]} 
                />
            </h1>
        </Badge>
        
    )
}

export default Intro
