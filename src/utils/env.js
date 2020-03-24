const prodEnv = process.env.NODE_ENV === 'production';
const schema = prodEnv ? 'https' : 'http';
const urlExtension = prodEnv ? 'ovh' : 'local';
const ENER_API_URL = `${schema}://ener.readler.${urlExtension}/`;
const TMDB_API_URL = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export { ENER_API_URL, TMDB_API_URL, TMDB_API_KEY };