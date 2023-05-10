/** Import External Libraries */
import {Box, Button, ButtonGroup, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

/** Import utilities */
import {setCartItems} from "../../store/slices/root";


interface ShoppingCartCardProps {
    product: any;
}

function ShoppingCartCard({product}: ShoppingCartCardProps) {
    const cartItems = useSelector((state: any) => state.root.cartItems);
    const dispatch = useDispatch();

    const handlePlusQuantity = () => {
        const existingCartItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
        let updatedCartItems: any = [...cartItems];
        if (existingCartItemIndex !== -1) {
            // Product already exists in the cart, increase quantity
            updatedCartItems[existingCartItemIndex] = {
                ...updatedCartItems[existingCartItemIndex],
                quantity: updatedCartItems[existingCartItemIndex].quantity + 1,
            };

        } else {
            // Product doesn't exist in the cart, add it
            updatedCartItems.push({
                ...product,
                quantity: 1
            });
        }
        dispatch(setCartItems(updatedCartItems));
    };

    const handleRemoveFromCart = () => {
        const updatedCartItems = cartItems.filter((item: any) => item.id !== product.id);
        dispatch(setCartItems(updatedCartItems));
    };

    const handleMinusQuantity = () => {
        const updatedCartItems = cartItems.map((item: any) => {
            if (item.id === product.id) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity < 1 ? 1 : newQuantity,
                };
            }
            return item;
        });
        dispatch(setCartItems(updatedCartItems));
    };

    return (
        <Box sx={{bgcolor: "white", p: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm="auto" sx={{textAlign: "center"}}>
                    <Box
                        component="img"
                        src={product.image}
                        alt={product.title}
                        sx={{objectFit: "contain", mb: 2, width: 140, height: 140}}
                    />
                </Grid>
                <Grid item xs>
                    <Typography
                        gutterBottom
                        variant="h5"
                        fontSize={14}
                        fontWeight="bold"
                        component="div"
                    >
                        {product.title}
                    </Typography>
                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item>Qty ({product.quantity})</Grid>
                        <Grid item>₹ {product.price}</Grid>
                    </Grid>
                    <Grid container justifyContent="space-between" spacing={2} mt={2}>
                        <Grid item xs={4} sm={"auto"}>
                            <Button
                                size="small"
                                color="error"
                                variant="outlined"
                                onClick={handleRemoveFromCart}
                            >
                                Remove
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={"auto"}>
                            <ButtonGroup variant="contained" size="small" disableRipple>
                                <Button onClick={handleMinusQuantity}><RemoveOutlinedIcon/></Button>
                                <Button>{product.quantity}</Button>
                                <Button onClick={handlePlusQuantity}><AddOutlinedIcon/></Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

ShoppingCartCard.defaultProps = {
    product: {}
}

export default ShoppingCartCard;