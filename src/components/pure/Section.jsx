import Article from "./Article";

const Section = () => {
    return (
        <section className="col-12 section">
            <Article/>
            <a className="section-link" href="https://liamdarkmoon.github.io/DnDApp/" target="_blank" rel="noopener noreferrer">
                Click here to see on github
            </a>
        </section>
    );
}

export default Section;
