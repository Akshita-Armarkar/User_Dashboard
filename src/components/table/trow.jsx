import tableData from "./tabledata";
import { Connect } from '../../context';

const Span = ( { value } ) => ( <span>{ value ?? '' }</span>)

const Trow = ( { userData = {}, updateUser } ) => {

    const callback = ( value ) => updateUser( userData.email, value );

    return (
        <tr>
            {
                tableData.map( col => { 
                    const Component = col.component ?? Span ;
                    return (
                        <td key = { col.prop }> <Component value = { userData[ col.prop ] } callback = { callback }  /> </td>
                    )
            })
            }
        </tr>
    )
}

const mapToDispatch = ( dispatch ) => ({

    updateUser : ( email, value ) => dispatch( ( state ) => state.map( user =>{
        if( user.email === email ) user.status = value ;
        return user ;
    }) )

})



export default Connect( mapToDispatch )( Trow ) ;