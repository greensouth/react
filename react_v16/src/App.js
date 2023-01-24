import './App.css';
import React from 'react';
import ParentComponent from './components/context.jsx';
import { createContext } from 'react';

export const colorContext = createContext("purple");

function App() {

  return (
    <ParentComponent titulo="Esto es un contenido para el componente">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus arcu, aliquam id scelerisque id, ullamcorper non sapien. Nulla aliquam, nunc at egestas vestibulum, purus leo tempus magna, quis lacinia nisi augue vel purus. Suspendisse molestie mi non enim bibendum aliquet. Sed gravida lorem id neque efficitur elementum. Vestibulum odio nisl, elementum at est sed, malesuada ornare magna. Suspendisse potenti. Vivamus consequat urna neque, et tempus neque hendrerit id. Pellentesque tristique aliquam fermentum. Ut congue rhoncus orci id interdum.</p>
      <p>Donec sed enim lacinia, feugiat nisl vel, ultricies lectus. Cras aliquam ullamcorper tortor vel sagittis. Praesent ex nisl, feugiat non ultrices eu, egestas pretium est. Donec non urna at magna consectetur bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tristique quis leo ullamcorper euismod. Proin tincidunt ante et tortor feugiat, eu finibus nulla gravida. Etiam eu pulvinar sem. Morbi et blandit tellus. Suspendisse viverra condimentum velit. Phasellus erat nisl, pulvinar a turpis id, euismod fringilla velit. Fusce malesuada efficitur nibh vel suscipit. Nullam iaculis massa ut mi pulvinar, vitae pellentesque nibh dapibus. Donec et mauris fringilla, ultricies nisi non, auctor sem. Aliquam ullamcorper libero arcu.</p>
    </ParentComponent>
  );
}

export default App;
