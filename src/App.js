import React from 'react';

import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Content from './components/organisms/Content';
import './App.scss';

//For tests. Delete it when it won't be needed.
const Test = (props) => <p>{props.text}</p>;

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Test path="/" text="content" />
        <Test path="/signup" text="signup" />
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
