/** Import External Libraries */
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Container} from "@mui/material";
/** Import utilities */
import {getCartItemsCount} from "../utils";

function Header() {
    const cartItems = useSelector((state: any) => state.root.cartItems);

    const cartItemsCount = useMemo(() => {
        return getCartItemsCount(cartItems);
    }, [cartItems]);

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{background: "white", borderBottom: '1px solid #e9ebee'}}
        >
            <Container>
                <Toolbar sx={{px: "0 !important"}}>
                    <Link to={"/"}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{fontSize: 16, color: 'black', fontStyle: "italic"}}
                        >
                            Shopie
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1}}/>
                    <Link to={"/shopping-cart"}>
                        <IconButton size="large" aria-label="cart items" color="inherit">
                            <Badge badgeContent={cartItemsCount} color="error">
                                <ShoppingBagOutlinedIcon sx={{color: 'black'}}/>
                            </Badge>
                        </IconButton>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Header;