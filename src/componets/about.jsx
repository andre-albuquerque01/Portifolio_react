function About() {
    return (
        <section className="border border-t-2 border-b-0 sm:h-screen" id="about">
            <div className="text-center mt-20">
                <div className="text-4xl">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="border-t-4 rounded-sm border-blue-500 w-16 mx-auto my-4 "></div>
                <div className="mt-5">
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
                </div>
            </div>
            <div className="max-sm:block sm:flex mt-20 justify-evenly ">
                <div className="sm:w-2/5 space-y-3 mr-2 ml-2 text-justify">
                    <h1 className="text-2xl">Get to know me!</h1>
                    <p>A full-stack developer focused on web applications, building web applications to facilitate life.</p>
                    <p>I also study Systems Analysis and Development, and I seek a lot of knowledge in web applications to enhance my job. I enjoy being a developer.</p>
                    <p>I am open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me.</p>
                </div>
                <div className="sm:w-2/5 max-sm:w-full space-y-2 mb-10 mt-4">
                    <h1 className="text-2xl">My Skills</h1>
                    <div className="flex space-x-1 text-center flex-wrap">
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">HTML</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">CSS</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">JavaScript</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">React</p>
                    </div>
                    <div className="flex space-x-1 text-center flex-wrap">
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">PHP</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Python</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Laravel</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">SQL</p>
                    </div>
                    <div className="flex space-x-1 text-center flex-wrap">
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Git/GitHub</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Figma</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">VS code</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Linux</p>
                    </div>
                    <div className="flex space-x-1 text-center flex-wrap">
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Designer UX</p>
                        <p className="px-4 py-2  bg-blue-500 text-white rounded-md">Scrum</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
