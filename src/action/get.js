import axios from 'axios'

const albums = axios.get('/api/albums')

export { albums }
