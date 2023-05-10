import {Box, Container, Typography} from "@mui/material";

function Footer() {
    return (
        <Box sx={{background: "white", borderTop: '1px solid #e9ebee', mt: 4, py: 2}}>
            <Container>
                <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.secondary"
                    fontSize={14}
                >
                    Copyright © 2023 All rights reserved
                </Typography>
            </Container>
        </Box>
    )
}


export default Footer;