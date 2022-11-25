const Intro = () => {
    return ( 
        <div id="container-intro" className="mb-7">
            <section id="intro-section">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="text-yellow-500 mb-8">CAREERS AT NEXUS</p>
                        <h1 className="text-white text-3xl font-semibold mb-5">Come create magic with us!!</h1>
                        <p className="text-white text-sm mb-5 font-normal">We are a team of creative people helping people transform themselves into imaginations, if <br/>
                            this interests you, check out our job opening and apply</p>
                        <div className="flex justify-center">
                            <a href="/roles" className="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-base">See open roles</a>
                            <a href="/more" className="ml-4 inline-flex text-purple-400 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 hover:text-white rounded text-base">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Intro;