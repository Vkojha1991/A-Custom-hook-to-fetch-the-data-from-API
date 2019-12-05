import React, { Fragment } from 'react';
import useReactcusthook from './Reactcusthook';

function Reacthook() {
    // Used custome hook to fetch the data
    const data = useReactcusthook('https://jsonplaceholder.typicode.com/todos');
    
    return(
       <Fragment>
           <table>
               <tbody>
                    {
                        data.map((el, index) => (
                            <tr key = { index }>
                                <td>{ el.userId } </td>
                                <td>{ el.id } </td>
                                <td>{ el.title }</td>
                                <td>{ el.completed }</td>
                            </tr> 
                        ))
                    }
               </tbody>
           </table>
       </Fragment>  
    )
}
export default Reacthook;
