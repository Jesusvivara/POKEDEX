import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Defense(props) {
    return (
        <div>
            <LinearProgress color="primary" variant="determinate" value={props.base.Defense} />
        </div>
    );
}