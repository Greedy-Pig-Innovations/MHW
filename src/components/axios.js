import axios from "axios"
import React from 'react';

export const getData = (location, target) => {
    return axios.get(`https://mhw-db.com/${location}`, {
        params: {
            q: JSON.stringify({
                type: target
            })
        }
    })
}