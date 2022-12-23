import React, {useEffect, useState} from 'react'
import { Card } from '../../components/Card/Card'
import { Filter } from "../../components/Filter/Filter"
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from "../../components/Search/Search"

export const Character = () => {
    const [activePage, setActivePage] = useState(1);
    const [ search, setSearch] = useState("");
    const [status, setStatus] = useState("alive")
    const [gender, setGender] = useState("")
    const [species, setSpecies] = useState("")
    const [data, setData ] = useState([]);
    const { info, results } = data;
    let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name= ${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
   (async () => {
    const data = await fetch(api).then(res => res.json() )
    setData(data);
   })()
    }, [api])
  return (
    <>
    <h2 className='text-center mb-3'>Character</h2>
    <Search setSearch={setSearch} setActivePage={setActivePage}/>
    <div className="row">
        <div className="col-3">
            <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies}/>
        </div>
        <div className="col-9">
      {
        results?.length ? ( <div className="d-flex flex-wrap gap-5">
            {
                results.map(item => <Card key={item.id} obj={item} name={item.name} image={item.image} location={item.location.name} status={item.status}/>)
            }
        </div> ) : (<h3>Not found</h3>)
      }
        
        </div>
    </div>
    <Pagination setActivePage={setActivePage} activePage={activePage} totalPage={info?.pages}/>
    </>
  )
}
