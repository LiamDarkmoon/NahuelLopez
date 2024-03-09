
const AboutPage = () => {
    return (
        <main className="pg text-center">
            <div className="pb-4 pg-hl p-0">
                <h1 className="tf t-pa pg-title"> Get to know little about me </h1>
            </div>
            <section className="pg-hl pt-0">
                <h2 className="qf t-sa pb-4">
                    “Passionate about Crafting Meaningful Digital Experiences”
                </h2>
                <article className='row justify-content-evenly align-items-center'>
                    <p className="col-12 col-sm-6 about-p">
                        Hi I&apos;m Nahuel, 
                        first time father, always a student, 
                        a cheerful but somewhat serious guy, 
                        looking for new projects to change and beautify the world step by step, 
                        As a UX/UI Designer and Front-End Developer, 
                        I am driven by my passion for creating captivating digital experiences that seamlessly blend aesthetics with functionality. 
                        From both perspectives, 
                        as a designer and as a developer, 
                        I bring in new ideas and a breath of fresh air to every project.
                        With a keen eye for design and a strong foundation in front-end development, 
                        I strive to deliver solutions that not only look stunning but also provide intuitive and delightful user interactions.
                    </p>
                    <img className="col-12 col-sm-4 p-0 border rounded" src="./cvphoto.png" alt="" />
                </article>
            </section>
            <section className='about-section pg-hl col-12 row justify-content-evenly align-content-between'>
                <div className='col-12 col-sm-5'>
                    <h4 className='t-sa'>
                        Holistic Approach: 
                    </h4>
                        I believe in taking a holistic approach to design, considering every aspect of the user journey to ensure a cohesive and immersive experience.
                </div>
                <div className='col-12 col-sm-5'>
                    <h4 className='t-sa'>
                        User-Centered Design: 
                    </h4>
                        My designs are always centered around the needs and preferences of the end-users, ensuring that every interaction feels natural and intuitive.
                </div>
                <div className='col-12 col-sm-5'>
                    <h4 className='t-sa'>
                        Proactive Problem-Solver: 
                    </h4>
                        I thrive in dynamic environments and am adept at quickly identifying and solving challenges to keep projects on track and deliver exceptional results.
                </div>
                <div className='col-12 col-sm-5'>
                    <h4 className='t-sa'>
                        Continuous Learner: 
                    </h4>
                        I am committed to staying updated with the latest trends and technologies in the field, constantly expanding my skill set to adapt to evolving industry demands.
                </div>
                <div className='col-12 col-sm-5'>
                    <h4 className='t-sa'>
                        Technical Proficiency: 
                    </h4>
                        With expertise in both UX/UI design principles and front-end development languages such as HTML, CSS, JavaScript, and React js I am equipped to bring my designs to life with precision and efficiency
                </div>

                <div className='col-10'>
                    <h5 className='tf t-pa'>
                        Let&apos;s collaborate to transform your vision into a reality.
                    </h5>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
