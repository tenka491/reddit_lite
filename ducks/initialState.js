// TODO: import the data
import blizzard from '../data/blizzard';
import motorcycles from '../data/motorcycles';
import movies from '../data/movies';
import triumph from '../data/triumph';

const initialState = {
  projectId: 'AIzaSyATSMZGuLXgpkHkbxFBrJmjadzZCpT60E4',
  selectedCategory: 'motorcycles',
  categoryData: [
    { ...blizzard.data },
    { ...motorcycles.data },
    { ...movies.data },
    { ...triumph.data }
  ]
}

export default initialState;
