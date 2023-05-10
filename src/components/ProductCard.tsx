/** Import External Libraries */
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
/** Import utilities */
import {setCartItems} from "../store/slices/root";

/** Props Interface */
interface ProductCardProps {
    product: any;
}

function ProductCard({product}: ProductCardProps) {
    const cartItems = useSelector((state: any) => state.root.cartItems);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
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

    return (
        <Card sx={{height: '100%'}} elevation={0}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                    sx={{objectFit: "contain", mb: 2}}
                />
                <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={14}
                    fontWeight="bold"
                    component="div"
                >
                    {product.title}
                </Typography>
                <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.secondary"
                    fontSize={16}
                >
                    ₹{product.price}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", pb: 2}}>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}

ProductCard.defaultProps = {
    product: {}
}

export default ProductCard;