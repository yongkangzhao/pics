import axios from 'axios';
import React from 'react';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0udcEDLLn3YoLKmgMfITljsJe54B7Y9eH1NaaI9m68M'
    }
});