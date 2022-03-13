import ButtonStyles from './Button.module.css';

interface IProps {
    action: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
    name: string;
}

export const ButtoN: React.FC<IProps> = (props) => {
    return (
        <button onClick={(e) => props.action(e)} className= {ButtonStyles.main}>
            {props.name}
        </button>
    )
}