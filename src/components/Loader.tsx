import {CircularProgress, Stack} from "@mui/material";

function Loader() {
    return (
        <Stack alignItems="center" justifyContent="center" sx={{height: '100vh'}}>
            <CircularProgress color="primary" disableShrink/>
        </Stack>
    )
}


export default Loader;