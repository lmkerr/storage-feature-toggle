import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
			<img src="/assets/img/unicorn-logo.svg" alt="ToggleMiser Unicorn Logo"/>
			<span class="header-title">ToggleMiser</span>
		{/* <nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/billing">Billing</Link>
		</nav> */}
	</header>
);

export default Header;
