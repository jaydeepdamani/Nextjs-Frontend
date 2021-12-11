import Nav from "./nav"

const Layout = ({ children, headers }) => (
    <>
        <Nav headers={headers} />
        {children}
    </>
)

export default Layout
