import axios from 'axios'

export default async function Infoextract(id) {
    let array = await axios.get('https://ntop-cors.herokuapp.com/'+'http://youtube-music-pro.herokuapp.com/api?q='+id)
    // console.log(array)
    return array['data']
}