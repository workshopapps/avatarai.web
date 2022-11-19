const Intro = () => {
    return ( 
        <section style="background-image:url('../careers-page/images/header-img.jpg')">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p>CAREERS AT NOXUS</p>
                    <h1>Come create magic with us!!</h1>
                    <p>We are a team of creative people helping people transform themselves into imaginations, if this interests you, check out our job opening and apply</p>
                    <div className="flex justify-center">
                        <a href="/roles" className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">See open roles</a>
                        <a href="/more" className="ml-4 inline-flex text-purple-400 bg-white-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-5000 hover:text-white rounded text-lg">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Intro;