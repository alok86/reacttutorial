import './App.css';
import Greet from './propsandstate/Greet';
import GreetCls from './propsandstate/GreetCls';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PortalDemo from './propsandstate/PortalDemo';
import Main from './hooktest/Main';
import ComponentMain from './propsandstate/ComponentMain';
import TypescriptMain from './typescriptcomponent/TypescriptMain';
import {Routes, Route } from 'react-router-dom';
import { StyledComponentMain } from './StyledComponent/StyledComponentMain';



function App() {
  return (
    <div>
    <PortalDemo/>
    <Routes>
      <Route path='/' element={<StyledComponentMain/>}/>
      <Route path='/typescript' element={<TypescriptMain/>}/>
      <Route path='/hooks' element={<Main/>}/>
      <Route path='/react' element={<ComponentMain/>}/>
      <Route path='/greet' element={<Greet/>}/>
      <Route path='/greetcls' element={<GreetCls name='alok' lastname='seth'/>}/>
    </Routes>
    </div>
    // <div className="container">
    //   <PortalDemo/>
    //   <div className='row mb-md-5'>
    //     <TypescriptMain/>
    //   </div>
    //   <div className='row mb-md-5'>
    //     <Main/>
    //   </div>
    //   <div className='row'>
    //     <ComponentMain/>
    //   </div>
      
    //   <div className='row'>
    //   <Greet  name='alok' hobby='coding'>
    //     <p className='text-danger'>i am children of Greet tag enable from greet.js</p>
    //   </Greet>
    //   <GreetCls name='alok' lastname='seth'/>
      
    //   </div>
      
    // </div>
  );
}

export default App;
