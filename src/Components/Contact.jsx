import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

function Contact() {
    const [submitted, setSubmitted] = React.useState(false);

    return (
        <>
            <div className=" mx-auto max-w-7xl">
                <div className="py-20 ">
                    <h2 className="font-bold text-center font-serif text-5xl mb-5">Get in Touch</h2>
                    <p className="font-[Lato] text-lg text-center leading-relaxed mb-15">We'd love to hear from you, gorgeous.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-pink-100 flex items-center gap-6">

                                <div className="w-14 h-14 bg-pink-100 text-white-500 rounded-3xl flex items-center justify-center shrink-0">
                                    <Mail />
                                </div>
                                <div className="">
                                    <h3 className="text-sm font-bold text-gray-500 upparcase">Email Us</h3>
                                    <p className="text-lg font-bold">hello@pinkparadise.com</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-pink-100 flex items-center gap-6">
                                <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                                    <p className="text-lg font-bold">+1 (555) PINK-LOVE</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-pink-100 flex items-center gap-6">
                                <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Visit Us</p>
                                    <p className="text-lg font-bold">123 Peony Lane, Rose City</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-white p-12 rounded-[3rem] border border-pink-100 shadow-xl">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center py-20">
                                    <div className="w-20 h-20 bg-green-100  text-green-500 rounded-full flex justify-center mb-6 items-center"><Send className="w-10 h-10" /></div>

                                    <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
                                    <p className="text-gray-500">We'll get back to you faster than a blush.</p>
                                </div>
                            ) : (
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2"><label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-6 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none"
                                                placeholder="Rosie Bloom"
                                            /></div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold py-4 text-gray-700 ml-1">Your Email</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-6 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none"
                                                placeholder="rosie@example.com"
                                            />
                                        </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm mb-5 font-bold text-gray-700 ml-1">Subject</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-6 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none"
                                                placeholder="Inquiry about Pink Scarf"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                            <textarea
                                                rows={5}
                                                required
                                                className="w-full px-6 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none resize-none"
                                                placeholder="Tell us what's on your mind..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full md:w-auto bg-pink-500 text-white px-12 py-4 rounded-2xl font-bold hover:bg-pink-600 shadow-lg transition-all flex items-center justify-center gap-2"
                                        >
                                            Send Message <Send className="w-5 h-5" />
                                        </button>
                                    
                                </form>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;