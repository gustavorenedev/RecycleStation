import Button from "../Button/Button";
import { UlNav, HeaderContainer, NavBar, UlLiNav } from "./Header.style";

const Header = () => {
    return (  
            <HeaderContainer>
                <NavBar>
                    <UlNav>
                        <UlLiNav>Home</UlLiNav>
                        <UlLiNav>ScoreBoard</UlLiNav>
                        <UlLiNav>About</UlLiNav>
                    </UlNav>
                    <Button>Sign Up</Button>
                </NavBar>
            </HeaderContainer>
    );
}
 
export default Header;