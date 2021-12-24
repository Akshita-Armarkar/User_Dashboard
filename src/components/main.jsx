import { useState } from 'react';
//custom imports: 
import Table from './table/table';
import PopupHOC from './popup';
import UserForm from './userForm';

import { Connect } from '../context';


// style imports:
import '../scss/main.scss';

const Popup = PopupHOC( UserForm );

const Main = ( { state, addUser } ) =>{

    const [ active, setActive ] = useState( false );

    const togglePopup = ( val = false ) => setActive( val )

    return (
        <main>
            <div className="listing">
                <h3>Users</h3>
                <div className="users">
                    <span>Number of users: { state.length }</span>
                    <div className="break"></div>
                    <button onClick = { () => togglePopup( true ) } >Add User</button>
                </div>
                
            </div>
            <Table users = { state } />
            {
                active && <Popup popupTitle='Add User' users= { state } addUser={ addUser } popupClose= { togglePopup } />
            }
        </main>
    )
}



const mapToDispatch = ( dispatch ) => ({
   
    addUser : ( user ) => dispatch( state => ( [ ...state, user  ] ) )
    
})

export default Connect( mapToDispatch )( Main );