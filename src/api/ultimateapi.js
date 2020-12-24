import React from 'react'
import Assetfinder from './assetfinder';
import Nametoid from './nametoid';

export default class Ultimateapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songname: null,
            artist: null,
            thumbnail: null,
            songurl: null,
            state: 0,
            id: null
        }
        this.query_name = props.name;
    }

    async componentDidMount() {
        this.setState({id : await Nametoid(this.query_name)})
        this.setState({status : await Assetfinder(this.query_name)})
    }

    render() {
        return (
            <div>
                <h1>{this.query_name}</h1>
                <h1>status: {this.state.status}</h1>
                <h1>id: {this.state.id}</h1>
                <h1>hello</h1>
            </div>
        )
    }
}