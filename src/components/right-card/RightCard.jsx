import style from './right-card.module.css';

const RightCard = props => {
	return <div className={style['right-card']}>{props.children}</div>;
};
export default RightCard;
