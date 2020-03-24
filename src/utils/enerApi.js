import axios from "axios"
import { ENER_API_URL } from './env'

export default axios.create({
  baseURL: ENER_API_URL,
  responseType: "json"
})