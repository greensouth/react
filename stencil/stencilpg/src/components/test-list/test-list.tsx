import { Component, h, Prop, State, Watch } from '@stencil/core';
import { AvatarComponent } from '../avatar-component/avatar-component';
@Component({
  tag: 'test-list',
  styleUrl: 'test-list.css',
  shadow: true,
})
export class TestList {
  @Prop()   loading:boolean = true;
  @Prop()   items = [];
  @Prop()   searchTerm = "";
  @State()  searchValue = "";
  private   staticImage = "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/05/web3-planet-earth-space-nasa-space-stars-sun-shutterstock_526255060-shutterstock.jpg";
  private handleSearch = (e:Event) =>{
    this.searchValue = (e.target as HTMLInputElement).value;
  }

  @Watch("searchValue")
  watchSearchTermHandler(newValue: string, oldValue: string){
    console.log(newValue,oldValue);
  }

  handleChangeAvatarBt(){
    (async () => {
      await customElements.whenDefined('avatar-component');
      const avatar = document.querySelectorAll('avatar-component');
      debugger
      //await avatar.refreshAvatar();
    })();
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
        <button type="button" onClick={this.handleChangeAvatarBt}>♺ reload</button>

        {this.loading
        ?
          <p>...fetching contents...</p>
        :
          <ul>
          {items}
          </ul>
        }
      </fragment>
    );
  }
}
