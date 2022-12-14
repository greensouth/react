import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {
  @Prop() items: [];

  render() {
    console.log(this.items)
    return (
      <fragment>
        {this.items}
      <h1>Testing component</h1>
      <ul>
        {this.items.map( (elem) => <li>{elem}</li>)}
      </ul>
      </fragment>
    );
  }

}
