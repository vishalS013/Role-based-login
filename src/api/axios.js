// import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:3500'
// });
import axios from 'axios';

// Configure axios instance (if needed)
const api = axios.create({
  baseURL: '/api', // This is relative due to proxy
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Example POST request
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post('/register', {
      user: 'exampleUser',
      pwd: 'examplePassword'
    });
    console.log(response.data);
    console.log(response);
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

export default axios;
