import axios from 'axios'

const API_URL = 'api/logs/'

// Create new log
const createLog = async (logData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, logData, config)

    return response.data
}

// Get user logs
const getLogs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete user Log 
const deleteLog = async (logId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + logId, config)

    return response.data
}

const logService = {
    createLog,
    getLogs,
    deleteLog
}

export default logService