import React, { Suspense, Component }from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Ultimateapi from '../api/ultimateapi'
import IdleAnnimationFN from '../components/Misc/idleAnnimation'
// import Neon from '../components/Home/NeonIntro'
import { Body } from './pageelements'

const Neon = React.lazy(() => import('../components/Home/NeonIntro'))

const TopBeast = React.lazy(() => import('../components/Home/NeonIntro/topbeast'))

const Legendof17 = React.lazy(() => import('../components/Home/NeonIntro/legendof17'))

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            value: '',
            song: false,
            sload: false,
            animation: false,
            animswkey: -1
        }

        this.songName = this.state.song

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.startanim = this.startanim.bind(this);
        this.stopanim = this.stopanim.bind(this);
        this.animswitch = this.animswitch.bind(this);
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

    async startanim(event) {
        await this.setState(prevState => ({ animswkey: prevState.animswkey + 1}))
        if (this.state.animswkey === 4) {
            this.setState({animswkey: 1})
        }
        this.setState({animation: true})
    }

    stopanim(event) {
        this.setState({animation: false})
    }

    animswitch(event) {
        // console.log(this.state.animswkey)
        switch (this.state.animswkey) {
            case 1:
                return <Neon />
            
            case 2:
                return <TopBeast />

            case 3:
                return <Legendof17 />

            default:
                return <Neon />
        }
    }
 
    render() {
        return (
            <Body className='index-body'>
                <IdleAnnimationFN loadanim={this.state.loading} startanimation={this.startanim} stopanimation={this.stopanim} />
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
                            this.state.animation ? (
                                <Suspense fallback={<div>Loading...</div>}>
                                    {this.animswitch(this.state.animswkey)}
                                </Suspense>
                            ) : (
                                <Form onSubmit={this.onSubmit}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">♫</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control size="lg" type="text" placeholder="Enter Song Name" value={this.state.value} onChange={this.handleChange} />
                                    </InputGroup>
                                </Form>
                        )) : (null)}
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