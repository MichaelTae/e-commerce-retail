import { categories } from '../../data/static-home-data';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
