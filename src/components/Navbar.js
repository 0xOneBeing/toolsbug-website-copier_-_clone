

export default function Navbar() {
    return (
        <nav className='nav navbar-expand-sm'>

            <div className="container-fluid navbar-ul">
                
                <div className="navbar-nav brand">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="seo">SEO</span><span className="scrappers">Scrappers</span>&nbsp;&nbsp;&nbsp;
                            <span><i className="fa-solid fa-bug"></i></span>&nbsp;<span className="tools">Tools</span><span className="bug">Bug</span>
                        </a>
                    </li>
                </div>

                <div className="navbar-nav about-contact">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Me</a>
                    </li>
                </div>

            </div>

        </nav>
    )
}
