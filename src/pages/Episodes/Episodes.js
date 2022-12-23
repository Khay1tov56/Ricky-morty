import React, {useEffect, useState} from 'react';
import { Card } from '../../components/Card/Card'

export const Episodes = () => {
    const [data, setData ] = useState([]);
    const [value, setValue ] = useState([]);

    // const {info, result} = data;
        
    let apiEpi = `https://rickandmortyapi.com/api/episode?/page=1`;
    let charac = `https://test.rickandmortyapi.com/api/character/321`
    
     useEffect(() => {
   (async () => {
    const data = await fetch(apiEpi).then(res => res.json() )
    setData(data);
   })()
    }, [apiEpi])

    useEffect(() => {
      (async () => {
        const value = await fetch(charac).then(res => res.json())
        setValue(value)
      })()
    }, [charac])

  return (
    <div>
      <h2 className='text-center mb-3'>Episodes</h2>
    <div className="row">
        <div className="col-3">
        </div>
        <div className="col-9">
      
         {
                
              data.results?.map(item => {
                console.log(item);
                // console.log(item);
                // value.map(charcs => {
                //   console.log(charcs.name);
                // })
                return (

                <Card image={item.characters} name={item.name} location={item.air_date} />
                
                )
              })
               
            }
      
        
        </div>
    </div>
    </div>
  )
}
