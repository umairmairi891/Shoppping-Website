import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { Plus, Search, ShoppingCart, Star, X } from "lucide-react";
import { Product } from "../Products";
import { useStore } from "../Context/StoreContext";

function Shop({ onAddProduct, onAddToCart }) {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: 'Accessories',
    rating: '5',
    image: '',
    description: ''
  })
  // const {Product}=useStore
  const categories = ['All', 'Accessories', 'Jewelry', 'Home', 'Bags', 'Footwear'];

  const filteredProduct = Product.filter((p) => {
    const matchCatogory = filter === 'All' || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCatogory && matchSearch;
  }
  )

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: parseFloat(form.price),
      category: form.category,
      rating: parseFloat(form.rating),
      image: form.image,
      description: form.description
    }
    onAddProduct(newProduct);
    setIsModalOpen(false);
    setForm({ name: '', price: '', category: '', rating: '5', image: '', description: '', })
  }




  return (
    <div className="max-w-9xl bg-pink-100 mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-around gap-4 mb-12">
        <div className="">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Our Boutique</h1>
          <p className="text-gray-500">Curated pieces just for your aesthetic.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button onClick={() => setIsModalOpen(!isModalOpen)} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-all cursor-pointer shadow-lg hover:shadow-pink-200"
          >
            <Plus className="w-5 h-5" /> Add Producct
          </button>
          <div className="relative w-full sm:w-64">
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5' />
            <input type="text" placeholder="Search Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all bg-white"
            />
          </div>
          <div className="flex bg-white p-1 rounded-full border border-pink-100 overflow-x-auto max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 space-x-4 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === cat ? "bg-pink-500 text-white shadow-md" : "text-gray-500 hover:text-pink-500"}`} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="max-w-3xl bg-white z-110  rounded-xl shadow-lg absolute top-30 left-100">
          <div className="p-4 px-5 flex flex-col">
            <div className="flex justify-around gap-15">
              <h2 className="text-xl font-bold font-[Itel]">Add Product</h2>
              <X className="cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)} />
            </div>
            <form action="" className="flec flex-col" onSubmit={handleAddProduct}>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="block px-2 py-3 focus:ring-2 focus:ring-pink-500 outline-none border border-pink-100 rounded-2xl w-full mb-5 mt-5" placeholder="Enter Product Name" />
              <input type="number"
                value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                step="0.01" name="" id="" className="block px-2 py-3 focus:ring-2 focus:ring-pink-500 outline-none border border-pink-100 rounded-2xl w-full mb-5" placeholder="Enter Product Price" />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-3 bg-pink-50 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none border-none transition-all appearance-none cursor-pointer"
              >
                {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="number"

                value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })}
                min="1"
                max="5"
                step="0.1" name="" id="" className="block px-2 py-3 focus:ring-2 focus:ring-pink-500 outline-none border border-pink-100 mt-4 rounded-2xl w-full mb-5" placeholder="Enter Product Rating" />
              <input type="text"
                value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="block px-2 py-3 focus:ring-2 focus:ring-pink-500 outline-none border border-pink-100 rounded-2xl w-full mb-5 shadow-lg" placeholder="Enter product URL" />
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-3 mb-4 bg-pink-50 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none border-none transition-all resize-none"
                placeholder="Tell us about this item..."
              />
              <button className="bg-pink-500 text-white px-5 py-2 w-full rounded-xl font-bold font-[Lato] cursor-pointer hover:bg-pink-600 hover:shadow-pink-200 shadow-lg">Submit</button>
            </form>
          </div>
        </div>
      )}

      {filteredProduct.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-pink-200">
          <p className="text-xl text-gray-400">We couldn't find that pink perfection. Try another search!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProduct.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-pink-50 " >
              <div className="relative h-72 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transitiion-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button 
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-20 left-4 right-4 translate-y-20 group-hover:transate-y-0 transition-transform duration-300">
                  <button onClick={() => onAddToCart(product)} className="w-full bg-pink-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-pink-600 shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">{product.category}</span>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 font-bold text-gray-700">{product.rating}</span>

                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                <p className="text-pink-600 font-bold text-xl">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>

  )
}

export default Shop;