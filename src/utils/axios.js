import Axios from 'axios'

const axios = Axios.create({ baseURL: 'https://admin.moravski.com.ua/api/' })

export default axios
