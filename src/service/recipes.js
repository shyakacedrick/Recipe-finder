import axios from 'axios'

const baseUrl = 'https://www.themealdb.com/api/json/v1/1'

// Search for meals by name
const searchByName = (name) => {
  const request = axios.get(`${baseUrl}/search.php?s=${name}`)
  return request.then(response => response.data.meals)
}

export default { searchByName }