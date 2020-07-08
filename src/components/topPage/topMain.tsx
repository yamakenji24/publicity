import React, {FC, useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

import background from '../../assets/images/background.jpg';

const useStyles = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: '100vh',
        },
        paper: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '33%',
            width: '45%',
        }
    }),
);

const TopMain: FC = () => {
    const classes = useStyles();
    const [keyword, setkeyword] = useState("");
    const history = useHistory();

    const handleSubmit = () => {
        history.push("/search/" + keyword)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setkeyword(event.target.value);
    }

    return (
        <div className={classes.background}>
            <Paper className={classes.paper} component='form' onSubmit={handleSubmit}>
                <IconButton type='submit'>
                    <SearchIcon />
                </IconButton>
                <InputBase placeholder='search' onChange={handleChange}/>
            </Paper>
        </div>
    )
}

export default TopMain;