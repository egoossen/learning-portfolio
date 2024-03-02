class NavMenu extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header>
				<nav>
					<ul>
						<li><a href="index.html">About Me</a></li>
						<li><a href="why-ksp.html">Why KSP?</a></li>
						<!-- <li class="dropdown">
							<a href="javascript:void(0)" class="dropbtn">Portfolio</a>
							<div class="dropdown-content">
								<a href="index.html">Introduction to Rhetoric and Christian Scholarship</a>
							</div>
						</li>
						<li><a href="index.html">Contact</a></li> -->
						<li><a href="https://elijahgoossen.wordpress.com/" target="_blank">Wordpress</a></li>
					</ul>
				</nav>
			</header>
		`;
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