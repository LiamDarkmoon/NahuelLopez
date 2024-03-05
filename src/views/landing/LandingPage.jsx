import DesigNotes from "../../components/pure/DesigNotes";
import Designer from "../../components/pure/Designer";


const LandingPage = () => {
    return (
        <div className="pg pt-4 row text-center align-items-center justify-content-evenly">
            <div className="pg-hl col-12 col-sm-6">
                <h1 className="pg-title tf"> Hi im </h1>
                <h1 className="pg-title tf"> Nahuel Lopez  </h1>
                <h2 className="qf"> Ux/Ui Designer & Front-end Developer </h2>
            </div>
            <div className="col-10 col-sm-5">
                <Designer/>
            </div>
            <div className="py-5">
                <a className="bttn bttn-y col col-sm-4 py-3" href="https://liamdarkmoon.github.io/DnDApp/" target="_blank">
                    Check Projects 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                    </svg>
                </a>
            </div>
            <div className="py-5 col-10">
                
            </div>
        </div>
    );
};

export default LandingPage;
