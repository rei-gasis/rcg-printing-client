import axios from "axios";
import { Quote as Props } from "models/Quote";
import { useEffect, useState } from "react";

const useReqQuote = (param: any) => {
  const [data, setData] = useState<Props | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log(param?.contactNo);
  }, [param]);

  return [isLoading];
};

export default useReqQuote;
