import '../../styles/home/collaborationSection.css'
import { useState, useRef, useEffect } from 'react';

function CollaborationSection() {

    const imageRef = useRef(null);
    const [matches, setMatches] = useState(
        ()=>window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches
    )

    useEffect(() => {
        const media = window.matchMedia("(min-width: 769px) and (max-width: 1024px)")

        media.addEventListener('change', (event) => {
            setMatches(event.matches)
        })
    })

    return (
        <>
            <section className="collaboration">
                <div
                    className="collaboration-container"
                >
                    <div>
                        <h2 className="collaboration-header">
                            Collaborate on Projects
                        </h2>
                        <p className="collaboration-sub-header">
                            Work with peers to tackle real-world challenges and create impactful
                            solutions.
                        </p>

                        <h2 className="collaboration-header">
                            Increase Your Network
                        </h2>
                        <p className="collaboration-sub-header">
                            Connect with industry professionals and grow your professional
                            circle.
                        </p>

                        <h2 className="collaboration-header">
                            Strengthen Your Portfolio
                        </h2>
                        <p className="collaboration-sub-header">
                            Showcase your work with real-world projects to impress potential
                            employers.
                        </p>
                        <button id="get-started-btn"
                            className="get-started-btn">
                            Get Started
                        </button>
                    </div>
                    <div>
                        <img
                            ref={imageRef}
                            src={matches?
                                '/imgs/1-collaborate-img-media-768-1024.jpg':
                                '/imgs/1-homeFirstSection.png'
                            }
                            alt="Collaborate on Projects"
                            className="collaboration-img"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CollaborationSection;