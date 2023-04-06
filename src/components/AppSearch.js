import './AppSearch.css';

function AppSearch(props) {
    const { value, onValueChange } = props
    return (
        <div className="app-search">
            <h1>Choose Fruits You Like. <h3>*(Click on image)</h3></h1>
            <input className="app-search-input" 
                type="text" 
                placeholder="Filter fruit ex.strawberry" 
                value={value}
                onChange={(event) => {onValueChange(event.target.value)}}
            />
        </div>
    );
}

export default AppSearch;


