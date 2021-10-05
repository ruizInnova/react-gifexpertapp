import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
   const [state, setstate] = useState({
       data: [],
       loading: true,
   });

     // el useEffect funciona para no realizar multiples peticiones a la api REST
     useEffect( () => {
        getGifs( category )
        //.then(setImages); // forma corta
        .then( imgs => { 
            setstate({
                data: imgs,
                loading:false
            })
        }) //esta sería la forma larga

    }, [category]);

   return state;
}
