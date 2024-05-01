import React, { useMemo, useState } from "react";

type Props = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = React.createContext<Props>({
  loading: false,
  setLoading: () => {},
});

export const AppProvider: React.FC<{
  children: React.ReactNode | JSX.Element;
}> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const memoized = useMemo(() => {
    return {
      loading,
      setLoading,
    };
  }, [loading, setLoading]);

  return <AppContext.Provider value={memoized}>{children}</AppContext.Provider>;
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;
