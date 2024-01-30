import MainCard from './components/main-card/MainCard';
import LeftCard from './components/left-card/LeftCard';
import RightCard from './components/right-card/RightCard';
import Title from './components/title/Title';
import Progress from './components/progress/Progress';
import Subtitle from './components/subtitle/Subtitle';
import Text from './components/text/Text';
import Bar from './components/bar/Bar';
import Button from './components/button/Button';

const App = () => {
	return (
		<>
			<MainCard>
				<LeftCard>
					<Title text='Your Result' />
					<Progress stat={76} />
					<Subtitle text='Great' />
					<Text text='Your performance exceed 65% of the people conducting the test here!' />
				</LeftCard>
				<RightCard>
					<Title text='Summary' color='dark-title' />
					<Bar
						icon='./images/icon-reaction.svg'
						text='Reaction'
						stat={80}
						color='red'
						background='bg-red'
					/>
					<Bar
						icon='./images/icon-memory.svg'
						text='Memory'
						stat={92}
						color='orange'
						background='bg-yellow'
					/>
					<Bar
						icon='./images/icon-verbal.svg'
						text='Verbal'
						stat={61}
						color='green'
						background='bg-green'
					/>
					<Bar
						icon='./images/icon-visual.svg'
						text='Visual'
						stat={73}
						color='blue'
						background='bg-blue'
						margin='mrg-bttm'
					/>
					<Button />
				</RightCard>
			</MainCard>
		</>
	);
};

export default App;
