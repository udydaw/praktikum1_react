import React from 'react'
import Home from './pages/home'
import Bmi from './pages/bmi'
import Bank from './pages/bank'
import Ppn from './pages/ppn'
import Biner from './pages/biner'
import Octal from './pages/octal'
import Decimal from './pages/decimal'
import Hexadecimal from './pages/hexadecimal'
import { Route, Switch } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bmi" component={Bmi} />
                <Route path="/bank" component={Bank} />
                <Route path="/ppn" component={Ppn} />
                <Route path="/biner" component={Biner} />
                <Route path="/octal" component={Octal} />
                <Route path="/decimal" component={Decimal} />
                <Route path="/hexadecimal" component={Hexadecimal} />
            </Switch>
        )
    }
}