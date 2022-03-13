import './App.css';
import { NewTask } from './components/NewTask/NewTask';
import { Task } from './components/Task/Task';
import { useAppSelector } from './hooks/hooks';

export const App: React.FC = () => {

  const state = useAppSelector(state => state.appSlice);

  return (
    <div className="App">
      <p className= "Title">TODO</p>
      <NewTask isNewTask = {true}/>
      <div className='Tasks'>
      {state.tasks.map ((item,index) => {
        return (
          <Task key = {index} title = {item.title} description = {item.description} index = {index} />
        )
      })}
      </div> 
    </div>
  );
}

