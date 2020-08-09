import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from "@material-ui/core/styles";


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 8,
        borderRadius: 4,
    }
}))(LinearProgress);

export default function Defense(props) {
    return (
        <div>
            <BorderLinearProgress color="primary" variant="determinate" value={props.base.Defense} />
        </div>
    );
}