import { Link } from "react-router-dom";
import { Logo, Menu, MenuIcon, MenuLink, Nav } from "../styles/Navbar.styles";
import { Container, Stack } from "../styles/UI.styles";
import { MdMenu } from "react-icons/md";
import { useAuth } from "../context/Auth";
import { useState } from "react";

const Navbar = () => {
  const { isAuth , logout} = useAuth();
  const [open, setOpen] = useState(false)
  console.log(typeof open)
  return (
    <Nav>
      <Container>
        <Stack direction="row" align="center" justify="space-between">
          <Link to="/">
            <Logo />
          </Link>
          <MenuIcon>
            <MdMenu  onClick={()=> setOpen(!open)}/>
          </MenuIcon>
          <Menu show={open} onClick={()=> setOpen(!open)} >
            <MenuLink to="/about">About </MenuLink>
            <MenuLink to="https://github.com/" target="_blank" as="a">
              Github
            </MenuLink>
            {isAuth && <MenuLink to="/login" onClick={logout}> Logout </MenuLink>}
            {!isAuth && <MenuLink to="/login"> Login </MenuLink>}
          </Menu>
        </Stack>
      </Container>
    </Nav>
  );
};

export default Navbar;
