import {
  Avatar,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Product } from "models/Product";
import { useEffect, useState } from "react";
import { PUBLIC_IMAGES_PRODUCT } from "../constants/constants";
import { useNavigate } from "react-router-dom";

type Props = {
  products: Product[];
  showList: boolean;
};

const SearchInputProductList = ({ products, showList }: Props) => {
  const nav = useNavigate();
  const [searchList, setSearchList] = useState<any>([]);

  useEffect(() => {
    setSearchList(products);
  }, [products]);

  return (
    <Grid
      className="search-list"
      container
      spacing={0}
      sx={{ display: showList ? "block" : "none" }}
    >
      <Grid item xs={12} md={12}>
        <List dense={true}>
          {searchList?.map((item: any) => (
            <ListItemButton
              key={item.name}
              onClick={() => {
                nav(`/product${item.url}`);
              }}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={PUBLIC_IMAGES_PRODUCT + item.images[0]}
                />
              </ListItemAvatar>
              <ListItemText primary={item.name}></ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default SearchInputProductList;
