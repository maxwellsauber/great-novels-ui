import axios from 'axios'

export const filterNovels = (novelList, searchTerm) => novelList.filter(novel => (
  novel.title.toLowerCase().includes(searchTerm.toLowerCase())
))

export const retrieveNovels = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/novels`) // eslint-disable-line no-undef

  return data
}
