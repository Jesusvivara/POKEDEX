import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function SPDefense(props) {
    return (
        <div>
            <LinearProgress color="primary" variant="determinate" value={props.base.SpDefense} />
        </div>
    );
}