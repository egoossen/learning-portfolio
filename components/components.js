class NavMenu extends HTMLElement {
	constructor() {
		super();
	}

	static get observedAttributes () { return ["root-dir"]; }
	attributeChangedCallback (name, oldVal, newVal) {
		if (name=="root-dir") { this.innerHTML = `
			<header>
				<nav>
					<ul>
						<li><a href="` + newVal + `index.html">About Me</a></li>
						<li><a href="` + newVal + `why-ksp.html">Why KSP?</a></li>
						<li class="dropdown">
							<a href="javascript:void(0)" class="dropbtn">Portfolio</a>
							<div class="dropdown-content">
								<a href="` + newVal + `portfolio/ksp131/calvinism-and-engineering.html">Calvinism and Engineering</a>
								<a href="` + newVal + `portfolio/ksp131/a-christian-view-of-rhetoric.html">A Christian View of Rhetoric</a>
								<a href="` + newVal + `portfolio/ksp131/yahweh-vs-allah.html">Yahweh vs. Allah</a>
							</div>
						</li>
						<!-- <li><a href="` + newVal + `index.html">Contact</a></li> -->
						<li><a href="https://elijahgoossen.wordpress.com/" target="_blank">Wordpress</a></li>
					</ul>
				</nav>
			</header>
		`;}
	}
}

customElements.define('nav-menu', NavMenu);

class Footer extends HTMLElement {
	constructor () {
		super();
	}

	static get observedAttributes () { return ["rev-date"]; }
	attributeChangedCallback (name, oldVal, newVal) {
		if (name=="rev-date") { this.innerHTML = `
			<div class="footer">
				<address>
					Elijah Goossen<br>
					<a href="mailto:ekgoossen@gmail.com">ekgoossen@gmail.com</a><br>
					Last updated: ` + newVal + `
				</address>
			</div>
		`;}
	}
}

customElements.define("my-footer", Footer);