import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, hasNavbar, hasFooter }) => {
    return (
        <>
            { hasNavbar && <Navbar />}
            <div className="container">
                { children }
            </div>
            { hasFooter && <Footer />}
        </>
    )
}

export default Layout;