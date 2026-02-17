import {useEffect} from 'react'
import AOS from 'aos'
function About() {
useEffect(()=>{
        AOS.init({
          duration:1200,
        })
      },[])
    return (
        <>
            <div className=" w-full bg-pink-100  py-20">
                <div className="px-5 max-w-7xl mx-auto py-20 " data-aos='fade-in'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="">
                            <p className="text-lg text-pink-500  uppercase font-serif mb-4">Our Story</p>
                            <h2 className="text-5xl font-bold mb-4 font-serif leading-relaxed">Bringing More <span className="text-pink-400 ">Color</span> to Your World</h2>
                            <p className="text-xl text-slate-500 font-[Itel] mb-6">Founded in 2023, PinkParadise began as a small boutique dedicated to the aesthetic of blush, rose, and fuschia. We believe that color has the power to transform your mood and your life.</p>
                            <p className="text-xl text-slate-500 font-[Itel] mb-6">Our mission is to curate the finest pink-themed products from artisans around the world, ensuring that quality and beauty go hand in hand. Every piece in our collection is handpicked to meet our high standards of "pinkness."</p>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <img src="https://picsum.photos/seed/about1/400/600" className="rounded-3xl shadow-xl mt-12" alt="Aesthetic pink 1" />
                            <img src="https://picsum.photos/seed/about1/400/600" className="rounded-3xl shadow-xl mt-6" alt="Aesthetic pink 1" />
                        </div>
                    </div>
                </div>


                <div className="mt-32 text-center" data-aos='fade-up'>
                    <h2 className="text-4xl font-serif mb-16 font-bold">Pink Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
                        <div>
                            <div className="w-20 h-20 bg-pink-200 text-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">1</div>

                            <h2 className="text-3xl font-bold mb-4">Quality First</h2>
                            <p className="text-gray-500">We Never Compromise on the Material of our curated selection</p>
                        </div>
                        <div>
                            <div className="w-20 h-20 bg-pink-200 text-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">2</div>
                            <h3 className="text-2xl font-bold mb-4">Aesthetic Joy</h3>
                            <p className="text-gray-500">Beauty is a necessity. We strive to make every interaction with us visually pleasing.</p>
                        </div>
                        <div>
                            <div className="w-20 h-20 bg-pink-200 text-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">3</div>
                            <h3 className="text-2xl font-bold mb-4">Community</h3>
                            <p className="text-gray-500">Join a global tribe of pink lovers who celebrate creativity and individuality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;