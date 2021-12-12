import Nav from "./Nav";

const Layout = ({children}) => (
    <div className="pt-60">
        <Nav/>
        {children}
    </div>
)

export default Layout;
