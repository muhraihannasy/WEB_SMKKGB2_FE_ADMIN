import axios from "axios";

// Enviroment 
import environment from "../environment";

// Helpers
import { getToken } from "../helpers";

export function apiRequest() {
    const token = getToken(); 
    return axios.create({
      baseURL: environment.apiUrl,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  }

  export async function postData(endpoint: string, data: any) {
    try {
      const api = apiRequest();
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateData(endpoint: string, data: any) {
    try {
      const api = apiRequest();
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteData(endpoint: string) {
    try {
      const api = apiRequest();
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }