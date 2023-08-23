import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*let pizzas = [{
    id: 1, name: 'Cheese pizza', description: 'very cheesy'
},
{
    id: 2, name: 'Al Tono pizza', description: 'lots of tuna'
}];*/

const Pizza = ({ pizza }) => {
    const [data, setData] = useState(pizza);
    const [dirty, setDirty] = useState(false);

    function update(value, fieldName, obj) {
        setData({ ...obj, [fieldName]: value });
        setDirty(true);
    }

    function onSave() {
        setDirty(false);
        // make rest call
    }

    return (<React.Fragment>
        <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxHeight="100vh"
            maxWidth="100vw"
        >
            <Box backgroundColor="primary.dark">
                <h3>
                    <Typography onChange={(evt) => update(evt.target.value, 'name', data)} value={data.name} />
                </h3>
                <div>
                    <TextField onChange={(evt) => update(evt.target.value, 'description', data)} value={data.description} />
                </div>
                {dirty ?
                    <div><Button backgroundColor="primary.dark" onClick={onSave}>Save</Button></div> : null
                }
            </Box>
        </Grid>
    </React.Fragment>);
}

const Main = () => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:5000/pizzas")
            .then(response => response.json())
            .then(data => setPizzas(data))
    }

    const data = pizzas.map(pizza => <Pizza pizza={pizza} />)

    return (<React.Fragment>
        {pizzas.length === 0 ?
            <div>No pizzas</div> :
            <div>{data}</div>
        }
    </React.Fragment>)
}

export default Main;