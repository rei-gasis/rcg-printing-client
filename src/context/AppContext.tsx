import React, { useMemo, useState } from "react";

type Props = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showMenuLinks: boolean;
  setShowMenuLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = React.createContext<Props>({
  loading: false,
  setLoading: () => {},
  showMenuLinks: false,
  setShowMenuLinks: () => {},
});

export const AppProvider: React.FC<{
  children: React.ReactNode | JSX.Element;
}> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showMenuLinks, setShowMenuLinks] = useState<boolean>(true);

  const memoized = useMemo(() => {
    return {
      loading,
      setLoading,
      showMenuLinks,
      setShowMenuLinks,
    };
  }, [loading, setLoading, showMenuLinks, setShowMenuLinks]);

  return <AppContext.Provider value={memoized}>{children}</AppContext.Provider>;
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;
