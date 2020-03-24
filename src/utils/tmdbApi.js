import axios from 'axios'
import { TMDB_API_URL, TMDB_API_KEY } from './env'

const params = { api_key: TMDB_API_KEY, language: 'fr-FR' },
  api = axios.create({
    baseURL: TMDB_API_URL,
    responseType: "json"
  })

export const tmdbApi = {
  getConfiguration: async () => {
    const response = await api.get('configuration', { params })
    
    return response.data
  },
  getTrending: async ({ type = 'all', time = 'week' } = {}) => {
    const response = await api.get(`trending/${type}/${time}`, { params })

    return response.data
  },
  getLatest: async () => {
    const response = await api.get(`movie/latest`, { params })
    
    return response.data
  },
  getPopular: async ({ type, page = 1, region = null }) => {
    const response = await api.get(`${type}/popular`, {
      params: {...params, page, region}
    })
    
    return response.data
  },
  getTopRated: async ({ type, page = 1, region = null }) => {
    const response = await api.get(`${type}/top_rated`, {
      params: {...params, page, region}
    })
    
    return response.data
  },
  getUpcoming: async (type = 'all', time = 'week') => {
    const response = await api.get(`trending/${type}/${time}`, { params })
    
    return response.data
  }
}