import React, { useEffect, useState } from 'react';
import './MultiSelect.css';
import Select from 'react-select';

export const MultiSelect = () => {

    const [paises, setPaises] = useState([]);
    const [paisesId, setPaisesId] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [cidadesId, setCidadesId] = useState([]);

    useEffect(() => {
        const retornaPaises = async () => {
        const retorna = await fetch ("https://amazon-api.sellead.com/country");
        const recuperaPaises = await retorna.json();
          setPaises(await recuperaPaises);
        }
      }, [])

      useEffect(() => {
        const retornacidades = async () => {
        const retorna = await fetch ("https://amazon-api.sellead.com/city");
        const recuperacidades = await retorna.json();
          setCidades(await recuperacidades);
        }
      }, [])

      const seguraPaises =(event)=>{
        const recuperaPaisId = event.target.value;
        setPaisesId(recuperaPaisId)
      }

      const seguraCidades =(event)=>{
        const recuperaCidadesId = event.target.value;
        setCidadesId(recuperaCidadesId)
      }

    return (
        <div className='multi-select'>
            <label>Países</label>
            <Select isMulti onChange={(e)=> seguraPaises(e)}>
            paises.map((retornaPaises) {
              <option key={retornaPaises.paises_id} value={retornaPaises.paises_id}>{retornaPaises.paises__nome}</option>
            })
            </Select>

            <Select isMulti onChange={(e)=> seguraCidades(e)}>
            paises.map((retornaCidades){
              <option key={retornaCidades.cidades_id} value={retornaCidades.cidades_id}>{retornaCidades.cidades__nome}</option>
            })
            </Select>
        </div>
    )
}






