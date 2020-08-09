import React from 'react';
import PuntosSalud from "./hp"
import Attack from "./Attack"
import Defense from "./defense"
import SpDef from "./SpDef"
import SpAtk from "./SpAtk"
import Speed from "./speed"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const hp = createMuiTheme({
    palette: {
        primary: {
            main: '#76ff03'
        }
    }
});

const attack = createMuiTheme({
    palette: {
        primary: {
            main: '#d50000'
        }
    }
});

const defense = createMuiTheme({
    palette: {
        primary: {
            main: '#37474f'
        }
    }
});

const spDefense = createMuiTheme({
    palette: {
        primary: {
            main: '#304ffe'
        }
    }
});

const spAtk = createMuiTheme({
    palette: {
        primary: {
            main: '#ff3d00'
        }
    }
});

const speed = createMuiTheme({
    palette: {
        primary: {
            main: '#18ffff'
        }
    }
});





export default function Card(props) {

    return (
        <div className="card">
            <div className="d.flex flex.direction izq">
                <div className="izq num">
                    <h2>#{props.id}</h2>
                </div>
                <div className="der izq">
                    <h2>{props.name}</h2>
                </div>
            </div>
            {/* aqui se van a agregar un div para el sprite del pokemon */}
            <div>
                <img src={props.image} alt="pokemon" />
            </div>
            <div className="center">
                <div>
                    {props.types.map(type => {
                        return <span className={`types ${type}`}>{type}</span>
                    })}
                </div>
                <h3>Base Stats</h3>
                <div className="w">
                    <div >
                        <h4>HP: {props.base.HP} pts</h4>
                        <ThemeProvider theme={hp}>
                            <PuntosSalud base={props.base} />
                            <h4>Attack: {props.base.Attack} pts</h4>
                            <ThemeProvider theme={attack}>
                                <Attack base={props.base} />
                            </ThemeProvider>
                            <h4>SP. Attack: {props.base.SpAttack} pts</h4>
                            <ThemeProvider theme={spAtk}>
                                <SpAtk base={props.base} />
                            </ThemeProvider>
                            <h4>Defense: {props.base.Defense} pts</h4>
                            <ThemeProvider theme={defense}>
                                <Defense base={props.base} />
                            </ThemeProvider>
                            <h4>SP. Defense: {props.base.SpDefense} pts</h4>
                            <ThemeProvider theme={spDefense}>
                                <SpDef base={props.base} />
                            </ThemeProvider>
                            <h4>speed: {props.base.Speed} pts</h4>
                            <ThemeProvider theme={speed}>
                                <Speed base={props.base} />
                            </ThemeProvider>
                        </ThemeProvider>

                    </div>
                    {/* <li>Hp: {props.base.HP}</li>
                    <li>Ataque: {props.base.Attack}</li>
                    <li>Defensa: {props.base.Defense}</li>
                    <li>Velocidad: {props.base.Speed}</li> */}
                </div>
            </div>
        </div>
    )
}