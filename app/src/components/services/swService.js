import axios from 'axios'


const SwService = () => {
    const _apiBase = 'https://www.swapi.tech/api'
  const baseImageURL = 'https://starwars-visualguide.com/assets/img'

  const getResource = async (type,num) => {
      const res = axios.get(`${_apiBase}/${type}/${num}`)
      return await res
  }
  const getImage = (type,num) => {
    let url = `${baseImageURL}/${type}/${num}.jpg`
    return url
  }


  return { getResource, getImage }
}
export default SwService