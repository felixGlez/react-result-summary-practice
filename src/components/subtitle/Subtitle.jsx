import style from './subtitle.module.css';

const Subtitle = props => {
	return <h2 className={style.subtitle}>{props.text}</h2>;
};
export default Subtitle;
