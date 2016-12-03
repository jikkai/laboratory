import axios from 'axios'

const about = [{}]

const works = axios.get('https://api.github.com/users/jikkai/repos?sort=pushed')

export { about, works }
