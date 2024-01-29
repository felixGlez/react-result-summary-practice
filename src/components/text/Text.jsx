import style from './text.module.css';

const Text = props => {
	console.log(props);
	return <p className={`${style.text} ${style[props.color]}`}>{props.text}</p>;
};
export default Text;
