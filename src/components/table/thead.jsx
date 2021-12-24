import tableData from "./tabledata"
const Thead = () => {
    return (
        <tr>
            { tableData.map( col => (
                <th key = { col.prop }> { col.heading } </th>
            )) }
        </tr>
    )
}

export default Thead ;