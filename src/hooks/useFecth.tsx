import { useEffect, useState } from "react";

const useFecth = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fecthData =  async () => {
            setIsLoading(true);

            try {
                const response = await fetch(url, options);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
    }, []);

  return (
    <div>useFecth</div>
  )
}

export default useFecth