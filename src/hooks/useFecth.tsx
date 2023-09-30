import { useEffect, useState } from 'react';
import axios from 'axios';

// Helpers
import { getToken } from '../helpers';
import environment from '../environment';

const useFecth = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${environment.apiUrl}/${url}`, {
          headers: headers,
        });
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const refecth = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${environment.apiUrl}/${url}`, {
        headers: headers,
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, refecth };
};

export default useFecth;
