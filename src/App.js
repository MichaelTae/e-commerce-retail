import { categories } from './data/static-home-data';
import Directory from './components/directory/directory.component';
const App = () => {
  return (
    <div className='categories-container'>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
