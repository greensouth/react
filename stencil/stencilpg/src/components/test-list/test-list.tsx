import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-list',
  styleUrl: 'test-list.css',
  shadow: true,
})
export class TestList {
  @Prop() items = [];

  render() {
    const items = this.items.map( (elem) => <li>{elem}</li>)
    return (
      <fragment>
        <h1>Testing component</h1>
        <ul>
          {items}
        </ul>
      </fragment>
    );
  }
}
