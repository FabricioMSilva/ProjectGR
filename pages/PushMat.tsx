
import React, { useState, useEffect } from 'react';

export default function PushMat() {
    const [todmat, setTodmat] = useState([]);

    const getAllData = () => {
        fetch('/api/materiais/Materiais')
         .then((result)=>result.json())
            .then((result) => setTodmat(result))
        }
    

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <div>
           <h1>Material para Reparo</h1>
           
                <div>
                    
                    <table>
                      
                        <tr>
                            <th>ID</th>
                            <th>CODIGO</th>
                            <th>MATERIAL</th>
                            <th>QTD JN</th>
                          
                        </tr>
                    {todmat?.map((item: any) => (
                        <tr>
                            <td>{item?.ID}</td>
                            <td>{item?.CODIGO}</td>
                            <td>{item?.MATERIAL}</td>
                            <td>{item?.UTILIZADO}</td>
                            <td>{item?.REF}</td>
                            <td>{item?.JN}</td>
                            <td>{item?.VALOR}</td>

                        </tr>

  ))}
                    </table>
                </div>
          
        </div>
    )
}