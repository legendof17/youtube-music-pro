import React, { Component }from 'react'
import { Form, Button } from 'react-bootstrap'
import Intro from '../components/Home/intro'
import MusicPlayer from '../components/MusicPlayer'
import { Body } from './pageelements'

export default class Home extends Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        await this.sleep(13000)
        this.setState({loading: false})
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    onSubmit() {
        alert('Please wait...')
    }
 
    render() {
        return (
            <Body className='index-body'>
                {this.state.loading ? (
                    <Intro />
                ) : (
                <Form>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                    </Form.Group>
                    <Button type="submit" onClick={this.onSubmit}>
                        Submit
                    </Button>
                </Form>
                )}
            </Body>
        )
    }
}