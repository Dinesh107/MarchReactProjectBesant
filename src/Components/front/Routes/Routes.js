import React from "react";
import Products from "../Products/Products";
import { Route } from "react-router-dom";

const Routes = () => {
    return <div>
        <Switch>
            <Route path="/" exact>
                <Products/>
            </Route>
        </Switch>
    </div>
};

export default Routes;
