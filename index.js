function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

const App = (
    <div>
        <Navbar />
        <MainContent />
        <Footer />
    </div>
);

ReactDOM.render(
    App,
    document.getElementById("root")
)
