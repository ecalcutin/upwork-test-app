import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Paper, Container, makeStyles } from '@material-ui/core';

import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

import styled from 'styled-components';

import { HumidityWidget } from '../../components/HumidityWidget';
import { TemperatureWidget } from '../../components/TemperatureWidget';
import { AirPressureWidget } from '../../components/AirPressureWidget';

import FakeService from '../../services/fakeservice';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}))

const Section = styled.div`
    padding: 2em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Dashboard = () => {

    const classes = useStyles();
    const [temperatue, setTemperature] = useState(0);
    const [pressure, setPressure] = useState(0);
    const [humidity, setHumidity] = useState(0);

    React.useEffect(() => {
        FakeService.sensors.pipe(
            debounce(() => interval(200))
        ).subscribe(({ temperature, pressure, humidity }) => {
            setTemperature(temperature);
            setHumidity(humidity);
            setPressure(pressure)
        })
    }, [])



    return (
        <React.Fragment>
            <AppBar className={classes.appBar} position="fixed" elevation={2}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Paper className={classes.paper} >
                <Container component="main" >
                    <Section>
                        <HumidityWidget value={humidity} />
                        <TemperatureWidget value={temperatue} />
                        <AirPressureWidget value={pressure} />
                    </Section>
                </Container>
            </Paper>
        </React.Fragment>
    )
}