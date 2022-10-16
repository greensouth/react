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
        const tableDatat = props.data;
    }
    render(){
        let curCat = "";
        let rowItem = new Array();
        let items = this.props.data.map( (el) => {              
            if(curCat != el.category){
                rowItem.push(<ProductCategory category = {el.category}/>);
                curCat = el.category;
            }
            if(!el.stocked){

            }
            rowItem.push(<ProductRow name={el.name} price={el.price} stocked={el.stocked}/>);

        } )        
        return (<div><SearchBar/><table><tbody>{rowItem}</tbody></table></div>);
    }
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const value = !this.props.inputValue ? "" : this.props.value
        const checked = this.props.checked ?? false;
        let checkbox
        if(checked){
            checkbox = <input type="checkbox" checked></input>
        }else{
            checkbox = <input type="checkbox"></input>
        }
        return (
            <form>
                <input id="search" type="text" placeholder="Search..." value={value}></input>
                <label>
                    {checkbox} Only show in stock</label>
            </form>
            );
    }
}