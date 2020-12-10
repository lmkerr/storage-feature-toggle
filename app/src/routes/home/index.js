import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Feature Flags</h1>
		<form>
			<input type="checkbox" id="featureOne" name="featureOne"/>
  			<label for="featureOne">Feature 1</label>
		</form>
	</div>
);

export default Home;
