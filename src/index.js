import './styles.css';
import 'normalize.css';
import { listsSection } from './view/listsSection';
import { mainSection } from './view/mainSection';
import { defaultProject } from './model/createListsAndTasks';

listsSection();

mainSection(defaultProject);
