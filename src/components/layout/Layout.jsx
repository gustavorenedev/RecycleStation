import Header from "../header/Header";
import { ElementMain } from "./Layout.style";

const Layout = ({ children }) => {
    return ( 
        <>
            <Header />
            <ElementMain>{ children }</ElementMain>   
        </>
    );  
}
 
export default Layout;