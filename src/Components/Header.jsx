function Header() {
    return (
        <nav>
            <div className="nav-wrapper header blue">
                <a href="#" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">React</a></li>
                    <li><a href="badges.html">JSX</a></li>
                    <li><a href="collapsible.html">CSS</a></li>
                </ul>
            </div>
        </nav>
    )
}
export { Header };