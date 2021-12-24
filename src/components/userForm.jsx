import { useState } from 'react' ;
import '../scss/userForm.scss';

const formData = [
    {
        name: 'Name',
        prop: 'name'
    },
    {
        name: 'Email',
        prop: 'email'
    },
    {
        name: 'Password',
        prop: 'password'
    },
    {
        name: 'Confirm Password',
        prop: 'repassword'
    },
]

const UserForm = ( { users, addUser } ) => {

    const [ error , setError ] = useState( '' );

    const submitHandler = ( e ) =>{
        setError('');
        e.preventDefault();

        const data = Object.fromEntries( new FormData( e.target ) );

        if( users.some( user => user.email === data.email ) )return setError( 'Email already registered!') ;

        addUser({
            email: data.email ,
            name: data.name,
            createdon: new Date(),
            status: false,
            role: 'guest'
        })
    }

    return (
        <form onSubmit={ submitHandler } className='user-form'>
            {
                formData.map( entry => (
                    <div className="form-control" key={ entry.prop }>
                        <input type="text" name={ entry.prop } placeholder={ entry.name } />
                    </div>
                ))
            }
            { 
                error && <div className="error">{ error }</div>
            }
            <button type='submit' className='submit-btn'> Add User </button>
        </form>
    )
}

export default UserForm ;