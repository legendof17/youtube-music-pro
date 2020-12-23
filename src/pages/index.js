import React, { Component }from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Intro from '../components/Home/intro'
import MusicPlayer from '../components/MusicPlayer'
import { Body } from './pageelements'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            value: '',
            song: false
        }

        this.songName = this.state.song

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        await this.sleep(13000)
        this.setState({loading: false})
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({song: true})
        this.songName = this.state.value
    }
 
    render() {
        return (
            <Body className='index-body'>
                {this.state.loading ? (
                    <Intro />
                ) : (
                this.state.song ? (
                    MusicPlayer(this.songName)
                ) : (
                    <Form onSubmit={this.onSubmit}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">♫</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control autoFocus size="lg" type="text" placeholder="Enter Song Name" value={this.state.value} onChange={this.handleChange} />
                        </InputGroup>
                    </Form>
                ))}
            </Body>
        )
    }
}