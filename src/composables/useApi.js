import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
})

const useApi = () => {
  return { instance }
}

export default useApi
