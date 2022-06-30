import { useState, useCallback } from "react";

const useHttp = () => {
    // allow loading state
    const [isLoading, setIsLoading] = useState(false);
    // allow error state
    const [error, setError] = useState(null);
  
    // create API request
    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
    // This is best used when you want to prevent unnecessary re-renders for better performance.
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        // default loading and error states
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
            requestConfig.url, {
                // If no method is specified then default to GET request
                method: requestConfig.method ? requestConfig.method : 'GET',
                // If no headers specified then default to {}
                headers: requestConfig.headers ? requestConfig.headers : {},
                // If no body defalt to null
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            } 
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data);        
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, []);
    // Why is my dependency array empty [] in the line above?
    // If the function depends on some input, you want to re-create that function when the input changes
    // In this situation I do not want useHttp depending on anything; ie I do not want it to EVER re-run
    // I want it to only run when I tell it to

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;


// import useHttp from '../../hooks/use-http';
// const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

// const someTaskHandler = async (text) => {
//     sendTaskRequest({
//       url: 'url/goes/here',
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: { text: text }
//     }, bindExtraFunctionHere());
//   };