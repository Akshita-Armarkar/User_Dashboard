import { memo } from 'react';

import Thead from './thead';
import Trow from './trow';

//styles
import '../../scss/table.scss';

const Table = ( { users = [] } ) => {

    return (
        <table className='user-table'>
            <thead>
                <Thead />
            </thead>
            <tbody>
                {
                    users.map(
                        userData => ( <Trow userData = { userData } key={ userData.email }/>)
                    )
                }
            </tbody>
        </table>
    )
}

export default memo( Table ) ;