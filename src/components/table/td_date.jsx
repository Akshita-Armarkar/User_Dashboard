const TdDate = ( { value }) =>{

    return (
        <span> { ( value instanceof Date ) ? value.toGMTString() : value }</span>
    )
}


export default TdDate ;