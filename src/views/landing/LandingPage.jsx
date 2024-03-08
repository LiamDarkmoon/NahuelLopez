import { useRef } from "react";
import Designer from "../../components/pure/Designer";

const LandingPage = () => {

    const projectsRef = useRef(null)
    const sectionRef = useRef(null)
    
    const sectionSlide = (scrollOffset) => {
        sectionRef.current.scrollLeft += scrollOffset;
    }

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView();
      };
      
      const scrollToTop = () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };

    return (
        <div id="Landing" className="pg text-center">
            <div className="pg-hl col row align-items-center justify-content-center ">
                <div className="col-12 col-sm-6 pb-5 p-sm-0">
                    <h1 className="pg-title tf"> Hi im </h1>
                    <h1 className="pg-title tf"> Nahuel Lopez  </h1>
                    <h2 className="qf"> Ux/Ui Designer & Front-end Developer </h2>
                </div>
                <div className="col-10 col-sm-6">
                    <Designer/>
                </div>
            </div>
            <div className="vh-100 pt-5">
                <div className="pt-4">
                    <button className="bttn col-6 col-sm-3" onClick={ scrollToProjects }>
                        Check Projects 
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div ref={ projectsRef } className="pb-4">
                <div className="btn-container col-12 d-flex flex-column align-items-center">
                    <section ref={ sectionRef } className="col-12 section row flex-nowrap">
                        <button className="swiper-arrow arrow-left p-0" onClick={ () => sectionSlide(-sectionRef.current.offsetWidth) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
                            </svg>
                        </button>
                        <button className="swiper-arrow arrow-right p-0" onClick={ () => sectionSlide(sectionRef.current.offsetWidth) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                            </svg>
                        </button>
                        <article className="section-article ">
                            <div className="col-12 col-sm-4">
                                <h3 className="tf t-sa"> Landing Page </h3>
                                <p>
                                    Here i&apos;ve started with a simple Landing page,
                                    with good constrast between components imposed by colors,
                                    while the navbar and all the backgrounds are in this sandy color that make them soft and welcoming,
                                    the CTAs are bright red inviting you to interacts with them,
                                    i&apos;ve played a lot too with opacities helping this way the body&apos;s background no&apos;t to be so opresive
                                    and get some deep.
                                </p>
                            </div>
                            <img className="col-12 col-sm-7" src="./landing.jpeg" alt="Landing Page"/>
                        </article>
                        <article className="section-article reverse">
                            <img className="col-8 col-sm-5 mx-sm-0 mx-auto" src="./diceroller.jpeg" alt="Dice Tray" />
                            <div className="col-12 col-sm-4">
                                <h3 className="tf t-sa"> Dice Tray: the &quot;Product&quot; </h3>
                                <p>
                                    Landing pages must normaly meet a couple of requirements in order fulfill their mision,
                                    or at last just to have &quot;good practices&quot;, showcase the product or service is part of these good practices,
                                    as i show here with the Dice tray a friendly tool for those eager to play rol games right away and without a dice set.
                                    However his function here is to showcase the product and give the customer a first-hand tryal.
                                </p>
                            </div>
                        </article>
                        <article className="section-article">
                            <div className="col-12 col-sm-4">
                                <h3 className="tf t-sa"> Sign Up form </h3>
                                <p>
                                    As for the Sign up and sign in forms, those sits on the navbar as buttons,
                                    they&apos;r poped-up being modal windows helping the user no&apos;t to be forced out of the page,
                                    neither moved to another one.
                                </p>
                            </div>
                            <img  className="col-12 col-sm-7" src="./sign up.jpeg" alt="Sign Up Form"/>
                        </article>
                    </section>
                    <a className="section-link" href="https://liamdarkmoon.github.io/DnDApp/" target="_blank" rel="noopener noreferrer">
                        Click here to visit the App on github
                    </a>
                    <button className="bttn col-6 col-sm-3" onClick={ scrollToTop }> Go back to the top </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
