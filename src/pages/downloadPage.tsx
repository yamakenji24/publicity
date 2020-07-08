import React, {FC, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import firebase from '../firebase';
import {TileData} from '../types/type';
import TopHeader from '../components/topPage/topHeader';

const useStyles = makeStyles(() =>
    createStyles({
        tileImage: {
            height: '436px',
            width: '436px',
        }
    })
)

const DownloadPage: FC = () => {
    const {keyword} = useParams();
    const classes = useStyles();
    const [data, setData] = useState<TileData[]>([]);

    const getData = async(searchWord: string | undefined) => {
        const db = firebase.firestore();
        const tileDataRef = db.collection("tileData");
        const searchedData = tileDataRef.where("keyword", "array-contains",searchWord);
        const snapShot = await searchedData.get();
        const tmpData: object[] = [];

        snapShot.docs.map(doc => {
            tmpData.push(doc.data());
        })
        setData(tmpData as TileData[]);
    }

    useEffect(() => {
        getData(keyword);
    }, []);

    const displayImage = () => {
        return (
            <div>
                {data.map((tile) => (
                    <div>
                        <img className={classes.tileImage} src={tile.image} alt={tile.title} />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <TopHeader />
            {displayImage()}
        </div>
    )
} 

export default DownloadPage;