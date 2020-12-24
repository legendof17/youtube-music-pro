import axios from 'axios';
import Assetfinder from './assetfinder';

export default async function Songstatusfixer(url,id) {
    let status = await Assetfinder(url)
    if (status === 200) {
        return url
    }
    else {
        await axios.get('http://localhost:6001/http://youtube-music-pro.herokuapp.com/exp?t='+id, {validateStatus: () => true})
        return 'http://youtube-music-pro.herokuapp.com/assets/'+id+'.webm'
    }
}