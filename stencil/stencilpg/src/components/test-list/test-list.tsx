import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'test-list',
  styleUrl: 'test-list.css',
  shadow: true,
})
export class TestList {
  @Prop()   items = [];
  @Prop()   searchTerm = "";
  @State()  searchValue = "";
  private   staticImage = "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/05/web3-planet-earth-space-nasa-space-stars-sun-shutterstock_526255060-shutterstock.jpg";
  private handleSearch = (e:Event) =>{
    this.searchValue = (e.target as HTMLInputElement).value;
  }
  render() {
    let items;
    if(this.searchValue == ""){
      items = this.items.map( (elem) => <li><avatar-component avatarURL={this.staticImage} size="45"></avatar-component><span>{elem.name}</span></li>)
    }else{
      items = this.items.map( (elem) => {
        if(elem.name.toLowerCase().includes(this.searchValue.toLowerCase())){
          return <li><avatar-component avatarURL={this.staticImage} size="45"></avatar-component><span>{elem.name}</span></li>
        }
      })
    }
    return (
      <fragment>
        <input type="text" placeholder="Perform your search here" name="search" results={0} onInput={this.handleSearch}/>
        <ul>
          {items}
        </ul>
      </fragment>
    );
  }
}
