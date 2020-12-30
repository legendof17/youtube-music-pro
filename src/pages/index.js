import React, { Suspense, Component }from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Ultimateapi from '../api/ultimateapi'
// import Neon from '../components/Home/NeonIntro'
import { Body } from './pageelements'

const Neon = React.lazy(() => import('../components/Home/NeonIntro'))

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            value: '',
            song: false,
            sload: false
        }

        this.songName = this.state.song

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        // await this.sleep(13000)
        await this.sleep(5000)
        this.setState({loading: false})
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({value: event.target.value});
    }

    async onSubmit(event) {
        event.preventDefault();
        this.songName = this.state.value
        this.setState({song: true})
        this.setState({sload: false})
        await this.sleep(1000)
        this.setState({song: false})
        this.sloadfn(event)
    }

    async sloadfn() {
        this.setState({song: true})
        this.setState({value: ''})
        this.setState({sload: true})
    }
 
    render() {
        return (
            <Body className='index-body'>
                {this.state.loading ? (
                    // <Intro />
                    // <Neon />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Neon />
                    </Suspense>
                ) : (
                this.state.song ? (
                    <div>
                        {this.state.sload ? (
                            <Form onSubmit={this.onSubmit}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">♫</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control size="lg" type="text" placeholder="Enter Song Name" value={this.state.value} onChange={this.handleChange} />
                                </InputGroup>
                            </Form>
                        ) : (null)}
                        <Ultimateapi name={this.songName} />
                    </div>
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