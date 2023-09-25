import news from '@/config/news'
const base_url = 'https://admin.moravski.com.ua/api'
const no_data = { current_page: 1, data: [], last_page: 1 }

export const getConcerts = (page, isEn) => {
  return fetch(base_url + (isEn ? '/en' : '') + '/concerts')
    .then((res) => res.json())
    .catch((error) => {
      console.log(error.message)
      return no_data
    })
}

export const getConcert = (id, isEn) => {
  return fetch(base_url + (isEn ? '/en' : '') + '/concerts/' + id)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error.message)
      return null
    })
}

export const getNews = (page, isEn) => {
  return Promise.resolve({
    current_page: 1,
    data: news,
    last_page: 1,
  })
  return fetch(base_url + (isEn ? '/en' : '') + '/news')
    .then((res) => res.json())
    .catch((error) => {
      console.log(error.message)
      return no_data
    })
}

export const getNewsDetails = (id, isEn) => {
  const news_details = news.find((news) => news.id === id)
  return Promise.resolve(news_details)
  return fetch(base_url + (isEn ? '/en' : '') + '/news/' + id)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error.message)
      return null
    })
}
