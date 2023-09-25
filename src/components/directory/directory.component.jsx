import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';
const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((categories) => (
        <DirectoryItem key={categories.id} category={categories} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
