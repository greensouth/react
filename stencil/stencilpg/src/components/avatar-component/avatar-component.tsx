import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'avatar-component',
  styleUrl: 'avatar-component.css',
  shadow: true,
})
export class AvatarComponent {
  @Prop() avatarURL: string;
  @Prop() size: string;
  render() {
    return (
      <img src={this.avatarURL} width={this.size} height={this.size}/>
    );
  }

}
