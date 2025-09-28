import '../../styles/home/automatedPortfolioSection.css'
function AutomatedPortfolio() {

    return (
        <section className="automated-portfolio">
            <div className="container">
                <div className="card">
                    <div className="automated-portfolio-card-container">
                        <img
                            src="imgs/2-homePortfolio.webp"
                            alt="developer"
                        />
                        <div className="">
                            <h3 className="">
                                See Your Portfolio in Action
                            </h3>
                            <p className="">
                                Each project you collaborate on will be neatly documented in
                                your professional portfolio.
                            </p>
                            <a
                                href="/about"
                                className=""
                            >
                                View Example
                            </a>
                        </div>
                    </div>
                </div>

                <div className="description">
                    <h2 className="">
                        Your Automated Portfolio
                    </h2>
                    <p className="automated-portfolio-paragraph">
                        Showcase your skills effortlessly! Our platform generates a stunning
                        portfolio from your real-world projects, helping you stand out to
                        recruiters and collaborators.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AutomatedPortfolio;