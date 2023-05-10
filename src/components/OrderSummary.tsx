/** Import External Libraries */
import React from "react";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
/** Import utilities */
import {getCartItemsTotal} from "../utils";


interface OrderSummaryProps{
    url?: string,
    actionTitle?: string
}

function OrderSummary({url, actionTitle}: OrderSummaryProps) {
    const navigate = useNavigate();
    const cartItems = useSelector((state: any) => state.root.cartItems);

    return (
        <Box sx={{bgcolor: "white", p: 2}}>
            <Typography fontSize={18}>Order Summary</Typography>
            <Divider sx={{my: 2}}/>
            <Stack flexDirection="row" justifyContent="space-between" mb={1}>
                <Typography fontSize={14}>Total Items</Typography>
                <Typography fontSize={14} fontWeight="bold">({cartItems.length})</Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between" mb={1}>
                <Typography fontSize={14}>Total</Typography>
                <Typography fontSize={14} fontWeight="bold">₹{getCartItemsTotal(cartItems)}</Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between" mb={1}>
                <Typography fontSize={14}>Delivery Charge</Typography>
                <Typography fontSize={14} fontWeight="bold">₹0</Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between" mb={1}>
                <Typography fontSize={14}>Subtotal</Typography>
                <Typography fontSize={14} fontWeight="bold">₹{getCartItemsTotal(cartItems)}</Typography>
            </Stack>
            <Divider sx={{my: 2}}/>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={()=> url && navigate(url)}
            >
                {actionTitle || "Proceed To Checkout"}
            </Button>
        </Box>
    )
}


export default OrderSummary;