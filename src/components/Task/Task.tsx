import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { deleteTask, editTaskEnd, editTaskStart } from '../../redux/appSlice';
import TaskStyles from './Task.module.css';
import { ButtoN } from './../Reusable/Button/Button';
import { NewTask } from './../NewTask/NewTask';
import { changeEditDescription, changeEditTitle, isErrorChange } from '../../redux/newTaskSlice';

interface IProps {
    title: string;
    description: string;
    index: number;
}


export const Task: React.FC<IProps> = (props) => {

    const state = useAppSelector(state => state.appSlice)
    const newTaskState = useAppSelector(newTaskState => newTaskState.newTaskSlice);
    

    const dispatch = useAppDispatch();
    
    const delTask = (): void => {
        dispatch(deleteTask(props.index) )
    }

    const editTaskButton = (): void => {
        
        if(state.edit[props.index]) {
            if(newTaskState.editTitle !== '') {
                dispatch(isErrorChange([false, 'editTask']));
                dispatch(editTaskEnd({title: newTaskState.editTitle, 
                    description: newTaskState.editDescription,id: props.index}));
            } else {
                dispatch(isErrorChange([true, 'editTask']));
            }
        } else {
            dispatch(editTaskStart(props.index));
            dispatch(changeEditTitle(props.title));
            dispatch(changeEditDescription(props.description));
        }
        
        
    }
    

    return (
        <div className= {TaskStyles.main}>
            {state.edit[props.index] ? <NewTask isNewTask = {false} /> 
            : <div className={TaskStyles.task}>
                <p className= {TaskStyles.title}>{props.title}</p>
                <p className={TaskStyles.description}>{props.description}</p>
            </div>}
            <div className= {TaskStyles.buttons}>
            {newTaskState.isEditError && <p className={TaskStyles.error}>Не заполнено поле заголовка !</p> }
                <button onClick={editTaskButton} className={TaskStyles.change}>{state.edit[props.index] ? 'ок' : 'редактировать'}</button>
                <ButtoN action = {delTask} name = {'удалить'}/>
            </div>
        </div>
    )
}