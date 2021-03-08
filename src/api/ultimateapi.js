import React from 'react'
import MusicPlayer from '../components/MusicPlayer';
// import Assetfinder from './assetfinder';
// import Infoextract from './infoextract';
// import Nametoid from './nametoid';
import ProApi from './proapi';
// import Songstatusfixer from './songstatusfixer';

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
        this.audioListsx = []
        this.query_name = props.name;
        this.generateList = this.generateList.bind(this);
    }

    async initrun(name) {
        // let id = await Nametoid(name)
        // let data = await Infoextract(id)
        // will enable these advance functions on upcoming versions
        // data['url'] = await Songstatusfixer(data['url'],id)
        // this.setState({status: await Assetfinder(data['url'])})
        // return data
    }

    async generateList(data,name) {
        let templist = {
            name: data['title'],
            singer: data['artist'],
            cover: data['thumbnail'],
            musicSrc: data['url'],
            // id: data['id']
        }

        localStorage.setItem(name,JSON.stringify(templist))
        
        for (var i = 0; i < localStorage.length; i++) {

            var key = localStorage.key(i);

            if(key === 'song-list') {continue}
          
            var list = localStorage.getItem(key);
          
            this.audioListsx.push(JSON.parse(list));
          
        }
        return this.audioListsx;
    }

    async componentDidMount() {
        const data = await ProApi(this.query_name+' official song',1)
        // const data = await this.initrun(this.query_name)
        // this.setState({
        //     songname: data['title'],
        //     artist: data['artist'],
        //     thumbnail: data['thumbnail'],
        //     songurl: data['url'],
        //     id: data['id'],
        // })
        this.audioListsx = await this.generateList(data,this.query_name)
        localStorage.setItem('song-list',JSON.stringify(this.audioListsx))
        this.setState({songname: data['title']})
        // console.log(this.audioListsx)
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
                    <MusicPlayer />
                ) : (
                    <h1>loading</h1>
                )}
            </div>
        )
    }
}