class ProductRow extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        const name = !this.props.stocked ? <span style={{color: 'red'}}>{this.props.name}</span>:this.props.name;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}

class ProductCategory extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let curCat = "";
        let rowItem = new Array();
        let items = this.props.data.map( (el) => {
            if(this.props.filterText.trim().length == 0 || (this.props.filterText && el.name.toLowerCase().includes(this.props.filterText.toLowerCase()))){
                if(!this.props.showStockOnly || (this.props.showStockOnly && el.stocked)){
                    if(curCat != el.category){
                        rowItem.push(<ProductCategory category = {el.category}/>);
                        curCat = el.category;
                    }
                    rowItem.push(<ProductRow name={el.name} price={el.price} stocked={el.stocked}/>);
                }
            }
        } )        
        return (<table><tbody>{rowItem}</tbody></table>);
    }
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onStockedChange = this.onStockedChange.bind(this);

    }
    onFilterChange(e){
        this.props.onSearchChange(e.target.value);
    }

    onStockedChange(e){
        this.props.onStockedChange(e.target.checked);
    }
    render(){
        const value = !this.props.inputValue ? "" : this.props.value
        const checked = this.props.checked ?? false;
        let checkbox;
        if(checked){
            checkbox = <input type="checkbox" checked onChange={this.onStockedChange}></input>
        }else{
            checkbox = <input type="checkbox" onChange={this.onStockedChange}></input>
        }
        return (
            <form>
                <input id="search" type="text" placeholder="Search..." onChange={this.onFilterChange}></input>
                <label>
                    {checkbox} Only show in stock</label>
            </form>
            );
    }
}

class FilterableProductTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        }
        this.onSearchChange = this.onSearchChange.bind(this)
        this.onStockedChange = this.onStockedChange.bind(this)
    }
    onSearchChange(searchValue){
        this.setState((state,props) => ({
            filterText: searchValue
        }))
    }
    onStockedChange(stockedValue){
        this.setState((state,props) => ({
            inStockOnly: stockedValue
        }))
    }
    
    render(){
        return (
            <div>
                <SearchBar filterText={this.state.filterText} showStockOnly={this.state.inStockOnly} onStockedChange={this.onStockedChange} onSearchChange={this.onSearchChange}/>
                <ProductTable filterText={this.state.filterText} showStockOnly={this.state.inStockOnly} data = {this.props.data}/>
            </div>
        );
    }
}