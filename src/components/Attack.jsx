import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Attack(props) {
    return (
        <div>
            <LinearProgress color="primary" variant="determinate" value={props.base.Attack} />
        </div>
    );
}