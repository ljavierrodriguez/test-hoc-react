import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, hasNavbar, hasFooter }) => {
    return (
        <>
            { hasNavbar && <Navbar />}
            { children }
            { hasFooter && <Footer />}
        </>
    )
}

export default Layout;