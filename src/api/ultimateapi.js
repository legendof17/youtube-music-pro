import React from 'react'
import MusicPlayer from '../components/MusicPlayer';
import Assetfinder from './assetfinder';
import Infoextract from './infoextract';
import Nametoid from './nametoid';
import Songstatusfixer from './songstatusfixer';

export default class Ultimateapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            id: null,
            songname: null,
            artist: null,
            thumbnail: null,
            songurl: null,
        }
        this.query_name = props.name;
    }

    async initrun(name) {
        let id = await Nametoid(name)
        let data = await Infoextract(id)
        // will enable these advance functions on upcoming versions
        // data['url'] = await Songstatusfixer(data['url'],id)
        // this.setState({status: await Assetfinder(data['url'])})
        return data
    }

    async componentDidMount() {
        const data = await this.initrun(this.query_name)
        this.setState({
            songname: data['title'],
            artist: data['artist'],
            thumbnail: data['thumbnail'],
            songurl: data['url'],
            id: data['id'],
        })
        // console.log(data)
    }

    render() {
        return (
            // <div>
            //     <h1>Hello</h1>
            //     <h1>Status: {this.state.status}</h1>
            //     <h1>ID: {this.state.id}</h1>
            //     <h1>SongName: {this.state.songname}</h1>
            //     <h1>Artist: {this.state.artist}</h1>
            //     <h1>Thumbnail: {this.state.thumbnail}</h1>
            //     <h1>Songurl: {this.state.songurl}</h1>
            // </div>
            <div>
                {this.state.songname ? (
                    <MusicPlayer {...this.state} />
                ) : (
                    <h1>loading</h1>
                )}
            </div>
        )
    }
}