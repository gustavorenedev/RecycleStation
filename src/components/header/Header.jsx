import { ElementHeader, HeaderContainer } from "./Header.style";

const Header = () => {
    return (  
        <ElementHeader>
            <HeaderContainer>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Scoreboard</li>
                        <li>About</li>
                    </ul>
                    <button>Login</button>
                </nav>
            </HeaderContainer>
        </ElementHeader>
    );
}
 
export default Header;