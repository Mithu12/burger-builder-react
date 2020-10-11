import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import BackDrop from 'components/UI/BackDrop/BackDrop'
function App() {
    return (
        <div>
          <Layout>
            <BurgerBuilder>

            </BurgerBuilder>
          </Layout>
        <BackDrop></BackDrop>
        </div>
    );
}

export default App;
