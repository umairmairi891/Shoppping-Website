import { ArrowRight, ShieldCheck, Truck, Star, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <>
            <div className="space-y-20 pb-20">
                <section className="relative h-150 flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            
                            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop"
                            alt="Hero background"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-right from-pink-100 to-transparent" />

                    </div>
                    <div className="relative max-w-7xl px-4 sm:px-5 lg:px-8 z-10  left-40">
                        <div className="max-w-2xl">
                            <span className="text-pink-600 font-bold tracking-widest uppercase text-sm block">New Arrivals 2026</span>
                            <h2 className="text-5xl font-bold py-3 font-serif">Embrace Your <span className="text-pink-500">True Pink</span> Potential</h2>
                            <p className="py-3 text-slate-500 text-lg leading-relaxed">Discover a curated collection of aesthetic lifestyle products designed to bring joy and color to your every day.</p>
                            <div className="flex gap-4">
                                <NavLink to='shop' className='bg-pink-500 px-8 text-white py-3 rounded-full  font-bold flex items-center gap-2 hover:bg-pink-600 transition-all shadow-lg  hover:shadow-pink-200'>
                                    Shop Now <ArrowRight className="w-5 h-5" />
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Truck, title: 'Fast Delivery', desp: "Accross the World" },
                            { icon: ShieldCheck, title: 'Secure Pay', desp: "100% Encrypted Payment" },
                            { icon: Heart, title: 'Eco Friendly', desp: "We love our Pink Planet" },
                            { icon: Star, title: 'Top Rated', desp: "4.9/5 Average Rating" },
                        ].map((faeture, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-pink-100 flex flex-col items-center group hover:border-pink-200 transition-colors">
                                <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                    <faeture.icon className='w-5 h-5' />
                                </div>
                                <h3 className="font-bold text-gray-500  mb-1">{faeture.title}</h3>
                                <p className="text-sm text-gray-500">{faeture.desp}</p>
                            </div>
                        ))
                        }
                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12 ">Out Top Collections</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="relative h-96 group overflow-hidden rounded-3xl cursor-pointer ">
                            <img loading="lazy" src="https://picsum.photos/seed/cat1/600/800" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Accessories" />
                            <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-40  transition-all flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold">All Accessiories</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity">Sparkle and Shine</p>
                            </div>

                        </div>
                        <div className="relative h-96 group overflow-hidden rounded-3xl cursor-pointer">
                            <img src="https://picsum.photos/seed/cat2/600/800" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Home Decor" />
                            <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition-all flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold">Home Decor</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity">Cozy pink vibes</p>
                            </div>
                        </div>
                        <div className="relative h-96 group overflow-hidden rounded-3xl cursor-pointer">
                            <img src="https://picsum.photos/seed/cat3/600/800" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Lifestyle" />
                            <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-40 transition-all flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold">Lifestyle</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity">Your daily dose</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-pink-100 rounded-[3rem] p-12 text-center">
                        <h2 className="text-4xl font-serif font-bold mb-4 text-pink-800">Join the Pink Club</h2>
                        <p className="text-pink-600 mb-8 max-w-lg mx-auto">Get 15% off your first order and exclusive access to new pink drops before anyone else.</p>
                        <div className="flex flex-col sm:flex-row gap-4 mx-auto max-w-md">
                         <input type="email" placeholder="Enter Your Email" className="flex-1 bg-white px-6 py-4 rounded-full border-none  focus:ring-2 focus:ring-pink-500 outline-none" />
                         <button className="bg-pink-600 text-fuchsia-50 px-8 py-4  rounded-full font-bold hover:bg-pink-700 transition-all ">Subscribe</button>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Home;