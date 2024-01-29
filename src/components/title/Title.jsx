import style from './title.module.css';

const Title = props => {
	return (
		<h2 className={`${style.title} ${style[props.color]}`}>{props.text}</h2>
	);
};
export default Title;
