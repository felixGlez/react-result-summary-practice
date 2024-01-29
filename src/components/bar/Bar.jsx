import style from './bar.module.css';
import Text from '../text/Text';

const Bar = props => {
	console.log(props);
	return (
		<div className={`${style.bar} ${style[props.background]}`}>
			<img src={props.icon} alt={props.icon} />
			<Text text={props.text} color={props.color} />
			<Text text={props.stat} color={props['stat-color']} />
			<p>/</p>
			<Text text='100' color={props['stat-color']} />
		</div>
	);
};

export default Bar;
