import { TextField } from "@mui/material";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

type Props = {
  searchVal: (out: string) => void;
  onLostFocus: () => void;
};

const SearchInputProduct = ({ searchVal, onLostFocus }: Props) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const input = event.target.value;

    setInputVal(input);
    delayedSearch(input);
  };

  const sendQuery = (query: string) => {
    searchVal(query);
  };

  const delayedSearch = useCallback(
    debounce((q) => sendQuery(q), 600),
    []
  );

  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      placeholder="E.g. Plaque, Medals"
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "white",
        },
      }}
      value={inputVal}
      onChange={handleChange}
      onBlur={() => {
        //prevent hide before clicking item from search
        setTimeout(() => {
          onLostFocus();
        }, 100);
      }}
    />
  );
};

export const minQueryLength = 3;

export default SearchInputProduct;
