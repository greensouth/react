import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {
  @Prop() items: [];
  @State() loading = false;

  render() {
    console.log(this.loading)
    return (
      <fragment>
        {this.items}
      <h1>Testing component</h1>
      {this.loading
      ?
        <p>...loading items...</p>
      :
        <ul>
          {this.items.map( (elem) => <li>{elem}</li>)}
        </ul>
      }

      </fragment>
    );
  }

}
