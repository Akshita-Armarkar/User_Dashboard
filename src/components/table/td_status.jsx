const TdStatus = ( { value, callback = () =>{} } ) =>{
    return (
        <span onClick={ () => callback( !value ) }>{ value ? 'Active': 'Inactive' }</span>
    )
}

export default TdStatus ;