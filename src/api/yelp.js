import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 967HGbLMJLpy6oTdh47QvvRppEch1TggDZNlaNrplWdNAeUgqlUBgfGtr5ur6ExTcxIGtpdyQHFKgHqnbv1IPPZKy3IoRbd56UToKm0ZhGluoICBkf7uFUaUj5N_XnYx'
    }
});

