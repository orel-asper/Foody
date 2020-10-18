import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer Bus7BdYdb73yOdhodgN44v3CsthdM163WmeLsozA5MfLKkOlo0ctkNwejH0M3GK6HXm_kbrGqKqgzgxpnw-uqKfu81_VcUZd4xoCpapV71M0ul7DArY7oiIoYLd9X3Yx'
    }
}) 
 