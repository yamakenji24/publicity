import React, {FC} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';

import background from '../../assets/images/background.jpg';

const useStyles = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: '100vh',
        },
    }),
);

const TopMain: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>

        </div>
    )
}

export default TopMain;