import {Box, Tab, Tabs} from "@mui/material";
import * as React from "react";
import MenuDrinks from "./MenuDrinks";
import axios from "axios";
import getMenu from "../../Helper/GetData";

export default class DrinkMenuList extends React.Component {
    state = {
        menu: [],
        value: 0,
        listedItems: [],
        allDrinks: [],
        currentDrinkList: []
    }

    componentDidMount() {
        axios.get(getMenu())
            .then ( (res) => {
                const menu_res = res.data;
                let drinkLists = [];
                menu_res.forEach((item) => {
                    drinkLists.push(item.drinks);
                    }
                )
                this.setState({menu: menu_res, allDrinks: drinkLists, currentDrinkList: drinkLists[0] });
            }).catch((error) => {
                console.log(error.message);
        });
    }

    render() {
        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            this.setState({menu: this.state.menu, value: newValue, listedItems: this.state.listedItems , allDrinks: this.state.allDrinks, currentDrinkList: this.state.allDrinks[newValue]});
        }

        return (
            <>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                <Tabs
                    value={this.state.value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                {this.state.menu
                    .map( (item, index) =>
                        <Tab data-index={index} key={index} label={item.name} />
                    )
                }
                </Tabs>
                    </Box>
                <MenuDrinks drinks={this.state.currentDrinkList}></MenuDrinks>
            </>
        )
    }
}