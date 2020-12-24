import axios from 'axios';

export default async function Assetfinder(name) {
    let res = await axios.get('http://localhost:6001/http://localhost:8080/'+name+'.webm', {validateStatus: () => true})
    // console.log(res)
    return res['status']
}