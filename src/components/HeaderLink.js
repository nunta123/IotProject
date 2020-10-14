import {BrowserRouter, Route, Switch} from "react-router-dom";


class HeaderLink extends Component {
    renderRouter() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Product} />
            </Switch>
        )
    }

    render() {
        return (
            <BrowserRouter>
                {this.renderRouter()}
            </BrowserRouter>
        )
    }


}

export default HeaderLink;