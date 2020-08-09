import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function PuntosSalud(props) {
    return (
        <div>
            <LinearProgress color="primary" variant="determinate" value={props.base.HP} />
        </div>
    );
}