import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Character = (name) => {
    const url = 'https://developer-lostark.game.onstove.com';
    // const [_key, setKey] = useState('');
    useEffect(()=>{
        const getKey = async() => {
            try{
                const _key = await axios.get('/lak/getKey');
                const info = await axios.get(`${url}/armories/characters/${name}/profiles`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `bearer ${_key.data}`
                    }
                });
                const{data} = info;
                console.log(data);

            } catch (err){
                console.error(err);
            }
        }
        getKey();
    }, []);
    return (
        <div>
            <h1>Character Page</h1>
            <p>Character information will be displayed here</p>
            {/*<h3>key : {_key}</h3>*/}
        </div>
    )
}

export default Character;
