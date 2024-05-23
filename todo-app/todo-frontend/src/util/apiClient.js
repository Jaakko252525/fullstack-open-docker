import axios from 'axios'

//import.meta.env.VITE_BACKEND_URL

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
})

export default apiClient