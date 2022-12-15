import { Component, State, h } from '@stencil/core';


/* const content = [
  {
    name:   "Antonio Pérez",
    avatar: "https://placebeard.it/250/250"
  },
  {
    name:   "Manuela Martínez",
    avatar: "https://placebeard.it/250/250"
  }
]
 */

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() content = [];
  @State() loading: boolean = true;



  fetchData = async () => {
    this.loading = true;
    await fetch('https://swapi.dev/api/planets/?format=json').then( (response) => response.json()).then( (result) => { console.log(result);this.content = result.results;this.loading = false})
  }

  componentWillLoad = () => {
    this.fetchData();
  }



  render() {
    return (
      <div>
{/*         <header>
          <h1>Stencil App Starter</h1>
        </header> */}

        <main>
          <test-list items={this.content} loading={this.loading}></test-list>
        </main>
      </div>
    );
  }
}
