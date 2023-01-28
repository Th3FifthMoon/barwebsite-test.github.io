import {AppBar, Box, Grid, Typography} from "@mui/material";
import laquinta_logo from "../../img/laquinta_logo.png";

export default function Header() {
    let date = new Date()
    let currentTime = date.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles"
    });

    let amPM = currentTime.split(' ');
    let timeparts = currentTime.split(':');
    let OpenOrClosed = ((amPM[1] === 'PM') && (( timeparts[0] > 4  && timeparts[0] < 9 ) || ( timeparts[0] === '4' && timeparts[1] >= 30))) ?
        <Typography variant={"h4"} sx={{ color: "white", justifyContent: "center", typography: { xs: 'h6', sm: 'h5', md: 'h4' }}}>OPEN</Typography> : <Typography variant={"h4"} sx={{  typography: { xs: 'h6', sm: 'h5', md: 'h4' }, color: '#ab003c'}}>CLOSED</Typography>;

    return (
        <AppBar position="relative">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography sx={{ p:1, typography: { xs: 'h5', sm: 'h4', md: 'h3' } }}>BrightSide Bar</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography variant={"body2"} >317 N G St. Madera, CA 93637</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1} sx={{justifyContent:"center"}}>
                        <Grid item xs={6} sm={6} md={8} sx={{p: 4}} >
                            <Grid container spacing={0} sx={{ p:2}} justifyContent={"center"}>
                                <Grid item xs={12} justifyContent={"center"}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                        {OpenOrClosed}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} >
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Typography variant={"body1"}>MON - SAT</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} >
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Typography variant={"body1"}>4:30 PM - 9:00 PM</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <Box
                                display={"flex"}
                                justifyContent="center"
                                sx={{
                                    width: 'auto',
                                    height: 'auto'
                                 }}
                                component={"img"}
                                src={ laquinta_logo } />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    )
}