
const AboutPage = () => {
    return (
        <div className="pg text-center">
            <div className="pg-hl pb-4">
                <h1 className="tf t-pa"> I&apos;m Nahuel Lopez </h1>
                <h3 className="qf"> Ux Designer & Front-end developer </h3>
            </div>
            <div className="pg-hl row justify-content-evenly align-items-center">
                <p className="qf t-sa" style={ {'font-size':'1.5em'} } >
                    “Enthusiastic about this technological world and everything on it, 
                    every day on the way to do it better and even more beautiful”
                </p>
                <p className="col-12 col-sm-5 about-p">
                    Hi again I&apos;m Nahuel, 
                    first time father, always a student, 
                    a cheerful but somewhat serious guy, 
                    looking for new projects to change and beautify the world step by step, 
                    graphics and design are my passion and that&apos;s why I chose this path. 
                    From both perspectives, 
                    as a designer and as a developer, 
                    I try to bring in new ideas and bring a breath of fresh air to every project. Learning from every new situation, 
                    every new question, 
                    every doubt or problem is what drives me forward every day. 
                    For me, there is nothing better or more rewarding than learning day by day and growing both professionally and as a person. 
                    I love participating in all kinds of projects as much as I love learning. 
                    So if you are looking for young people with new and fresh perspectives who are ready to give their best, 
                    then you are in the right place at the right time
                </p>
                <img className="col-12 col-sm-5 p-0 border rounded" src="./cvphoto.png" alt="" />
            </div>
        </div>
    );
}

export default AboutPage;
