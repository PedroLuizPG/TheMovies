import RoutesApp from "./routes";
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} theme="dark"></ToastContainer>
      <RoutesApp></RoutesApp>
    </div>
  );
}

export default App;
