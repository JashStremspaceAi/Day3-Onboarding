import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Home';
import State from './Component/state';
import Effect from './Component/effect';
import Context from './Component/context';
import Reducer from './Component/reducer';
import Callback from './Component/CallBack/callback';
import Memo from './Component/memo';
import Ref from './Component/Ref'
import Custom from './Component/custom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/state" element={<State />} />
          <Route path="/effect" element={<Effect />} />
          <Route path='/context' element={<Context />}/>
          <Route path='/reducer' element={<Reducer/>} />
          <Route path='/callback' element={<Callback/>} />
          <Route path='/memo' element={<Memo/>} />
          <Route path='/ref' element={<Ref/>}/>
          <Route path='/custom' element={<Custom/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
