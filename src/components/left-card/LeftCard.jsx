import style from './left-card.module.css';

const LeftCard = props => {
	return <div className={style['left-card']}>{props.children}</div>;
};
export default LeftCard;
