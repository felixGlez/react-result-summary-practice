import style from './main-card.module.css';

const MainCard = props => {
	return <div className={style.card}>{props.children}</div>;
};
export default MainCard;
