import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const signup = async (userData: object) => {
    try {
        const response = await axios.post(`${API_URL}/user/signup`, userData); 
        return response.data;
    } catch (error: any) { 
        console.error('Error during signup:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const signin = async (credentials: object) => {
    try {
        const response = await axios.post(`${API_URL}/user/signin`, credentials); 
        return response.data; 
    } catch (error: any) { 
        console.error('Error during signin:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const addBrain = async (brainData: object, token: string) => {
    try {
        const response = await axios.post(`${API_URL}/brain/add`, brainData, {
            headers: {
                token, 
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error adding brain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const getUserBrains = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/brain/user`, {
            headers: {
                token, 
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching user brains:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const updateBrain = async (id: string, updatedData: object, token: string) => {
    try {
        const response = await axios.put(`${API_URL}/brain/update/${id}`, updatedData, {
            headers: {
                token, 
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error updating brain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const deleteBrain = async (id: string, token: string) => {
    try {
        const response = await axios.delete(`${API_URL}/brain/delete/${id}`, {
            headers: {
                token, 
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error deleting brain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const shareBrain = async (id: string, token: string) => {
    try {
        const response = await axios.put(`${API_URL}/brain/share/${id}`, {}, {
            headers: {
                token, // Use token directly
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error sharing brain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const searchBrains = async (queryParams: Record<string, string>, token: string) => {
    try {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await axios.get(`${API_URL}/brain/search?${queryString}`, {
            headers: {
                token, // Use token directly
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error searching brains:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};
