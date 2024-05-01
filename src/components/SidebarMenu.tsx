import { Drawer, List, ListItem, ListItemText, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const SidebarMenu = ({ closeMenu, isOpen }: Props) => {
  const menuList = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Our Company",
      path: "/#our-company",
    },
    {
      text: "Contact Us",
      path: "/#inquire-section",
    },
  ];

  const ListItemContainer = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
  }));

  return (
    <Drawer className="sidebar-menu" open={isOpen} anchor="right">
      <ListItemContainer
        className="sidebar-menu-container"
        sx={{
          flexGrow: 1,
          background: "black",
          minWidth: "300px",
          maxWidth: "300px",
        }}
      >
        <List dense={false}>
          <ListItem key="close-sidebar">
            <ListItemText>
              <NavLink to="/" onClick={closeMenu}>
                <CloseIcon sx={{ color: "white" }} />
              </NavLink>
            </ListItemText>
          </ListItem>

          {menuList.map((menu) => {
            return (
              <ListItem key={menu.path}>
                <ListItemText>
                  <NavLink to={menu.path} onClick={closeMenu}>
                    {menu.text}
                  </NavLink>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </ListItemContainer>
    </Drawer>
  );
};

export default SidebarMenu;
