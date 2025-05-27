import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// fetch status from the server
async function getStatus() {
    try {
        const response = await axios.get(`${BASE_URL}/api/status`);
        console.log('Server Status:', response.data);
    } catch (error) {
        console.error('Error fetching status:', error);
    }
}

getStatus();
