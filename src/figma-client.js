const axios = require('axios')
const figmaApiBase = 'https://api.figma.com/v1'

/**
 * @see {@link https://www.figma.com/developers/api#access-tokens}
 * @returns {axios.AxiosStatic} An instance of the Axios http client
 */
const Client = () => {

  const instance = axios.create({
    baseURL: figmaApiBase
  })

  instance.interceptors.request.use((conf) => {
    conf.headers = {
      'Content-Type': 'application/json',
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN
    }
    conf.startTime = new Date().getTime()
    return conf
  })

  return instance

}

module.exports = Client
