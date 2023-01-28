import {Grid, Card, CardContent, Typography} from "@mui/material";


export default function MenuDrinks(props) {
    let allDrinks = []
    props.drinks.forEach((drinkItem, index) => {
        allDrinks.push(
            <Grid item key={index} xs={12} sm={6} md={4}>
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h5"} alignContent={"center"}>
                            {drinkItem.name}

                        </Typography>
                        {drinkItem.percent != null &&
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                                {drinkItem.percent}%
                            </Typography>
                        }
                        {drinkItem.price != null &&
                            <Typography variant={"h7"}>
                               $ {drinkItem.price}
                            </Typography>
                        }
                    </CardContent>
                </Card>
            </Grid>
        )
    });
    return (
        <Grid container spacing={3} sx={{p: 2}}>
            {allDrinks}
        </Grid>
    )
}