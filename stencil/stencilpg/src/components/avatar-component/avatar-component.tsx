import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'avatar-component',
  styleUrl: 'avatar-component.css',
  shadow: true,
})
export class AvatarComponent {

  @Prop() avatarURL: string;
  @Prop() size: string;
  @State() avatarSRC: string;

  @Method()
  async refreshAvatar() {
    this.avatarSRC = "https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830";
  }

  componentWillLoad = () =>{
    this.avatarSRC = this.avatarURL;
  }

  render() {
    return (
      <img src={this.avatarSRC} width={this.size} height={this.size}/>
    );
  }

}
