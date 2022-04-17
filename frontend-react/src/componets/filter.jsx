export default function Filter(props) {


    return (
        <div className="filter-container">
            <input type="text" placeholder="Filtro de Nombre" defaultValue="" onChange={props.updateFilter}></input>
        </div>
    )
}
