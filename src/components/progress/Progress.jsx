import style from './progress.module.css';

const Progress = props => {
	return (
		<div className={style.container}>
			<h1 className={`${style.title} ${style['no-spacing']}`}>{props.stat}</h1>
			<h5 className={`${style['no-spacing']} ${style.subtitle}`}>of 100</h5>
		</div>
	);
};

export default Progress;
