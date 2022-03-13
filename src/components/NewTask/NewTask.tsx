import { useAppSelector } from "../../hooks/hooks"
import { addTask } from "../../redux/appSlice";
import { changeDescription, changeEditDescription, changeEditTitle, changeTitle, isErrorChange } from "../../redux/newTaskSlice";
import { useAppDispatch } from './../../hooks/hooks';
import NewTaskStyle from './NewTask.module.css';
import { ButtoN } from './../Reusable/Button/Button';

interface IProps {
    isNewTask: boolean;
}


export const NewTask: React.FC<IProps> = (props) => {
    const state = useAppSelector(state => state.newTaskSlice)
    const dispatch = useAppDispatch();

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement> ): void => {
        props.isNewTask ? dispatch(changeTitle(e.currentTarget.value)) 
        : dispatch(changeEditTitle(e.currentTarget.value)) ;
    }

    const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement> ): void => {
        props.isNewTask ? dispatch(changeDescription(e.currentTarget.value))
        : dispatch(changeEditDescription(e.currentTarget.value));
    }

    const onAddTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if(state.textTitleValue !== '') {
            dispatch(addTask({title: state.textTitleValue, description: state.textDescriptionValue}))
            dispatch(changeTitle(''));
            dispatch(changeDescription(''));
            dispatch(isErrorChange([false, 'newTask']));
        } else {
            dispatch(isErrorChange([true, 'newTask']));
        }
    }
    
    return (
        <div className= {NewTaskStyle.main}>
            <input className= {NewTaskStyle.title} 
            type="text" name="titleOfNewTasknewtask" id="titleOfNewTask" 
            placeholder='введите заголовок' 
            value = {props.isNewTask ? state.textTitleValue : state.editTitle} 
            onChange = {(e) => onChangeTitle(e)}/>

            <textarea className= {NewTaskStyle.description} 
            name="textOfNewTask" id="textOfNewTask" 
            placeholder='введите текст (необязательно поле)' 
            value = {props.isNewTask ? state.textDescriptionValue : state.editDescription}
            onChange = {(e) => onChangeDescription(e)}></textarea>
            {state.isError && <p className={NewTaskStyle.error}>Не заполнено поле заголовка !</p> }
            {props.isNewTask && <ButtoN action = {onAddTask} name = {'добавить'}/>}
        </div>
    )
}