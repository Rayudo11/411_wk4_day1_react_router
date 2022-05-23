import React from 'react'
import cars from '../cars.json'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let {id} = useParams()

    let foundCar = cars.find((car, index, array) => {
        console.log(car.id)
        console.log(id)
        return id == car.id
    })
    return (
        <Container maxWidth="sm" style={{margin:"auto", width: 450}}>
            <Paper >
            <h3>{foundCar.Name}</h3>
            {Object.entries(foundCar).map(([key, value]) => {
                    console.log(key, value)
                    return <Chip label={`${key}:${value}`}/>
            })}
            {console.log(foundCar)}
            </Paper>
        </Container>
    )
}

export default Car