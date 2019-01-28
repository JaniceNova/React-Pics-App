import React from'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e339b41f7d30aedd2e3f7e8803b128d64c0d14b974cbfe55a92c1cb602740220'
    }
})