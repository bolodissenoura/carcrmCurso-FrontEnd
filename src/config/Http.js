import Axios from 'axios'
import { rootURL } from './App'

export const Http = Axios.create({
    baseURL: rootURL
})