import {ReactNode} from "react";

/** Import External Libraries */
import {Outlet} from "react-router";
import {Box} from "@mui/material";
/** Import Utilities */

/** Custom Components */
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Props Declaration
 * */
interface SiteLayoutProps {
    children?: ReactNode
}

function SiteLayout({children}: SiteLayoutProps) {

    return (
        <Box sx={{background: "#f1f3f6"}}>
            <Header/>
            <Box sx={{mt: {xs: "58px", md: "65px", minHeight: "100vh",}}}>
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    )
}

SiteLayout.defaultProps = {
    children: null
}

export default SiteLayout;