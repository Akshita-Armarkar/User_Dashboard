
//import styles:
import '../../scss/td_email.scss';

const colorpalette = [ '#F05454', '#FABB51', '#F999B7', '#A3423C', '#A6CF98', '#2D4263', '#516BEB', '#B91646', '#AA14F0' ];

const getIndex =  ( string ) => {
    let code = string.charCodeAt( 0 );

    while( code > 9 ){
        let newCode = 0 ; 
        for( let i = 1; i <= code ; i = i * 10 ){               
            let left = Math.trunc( code / i );
            newCode += left % 10 ;
        }  
        code = newCode ;
    }

    return code ;
}


const TdEmail = ({ value = '' }) =>{

    console.log( value );
    return (
        <div className='td-email'>
            <div 
                className="icon" 
                style={{
                    backgroundColor: colorpalette[ getIndex( value ) ]
                }}
            >
                { value.charAt( 0 ) }
            </div>
            <div className="email">
                { value }
            </div>
        </div>
    )
}

export default TdEmail ;