"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import {
  ShoppingCart,
  Phone,
  Truck,
  ShieldCheck,
  Menu,
  X,
  Upload,
  MessageCircle,
  Moon,
  Sun,
} from "lucide-react";

const medicines = [
  {
    name: "Dolo 650",
    price: "₹40",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Vitamin C",
    price: "₹120",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Protein Powder",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "BP Monitor",
    price: "₹1499",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let frame: number;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const addToCart = () => {
    setCartCount((count) => count + 1);
    toast.success("Added to cart!");
  };

  const filteredMedicines = medicines.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Toaster position="top-right" />

      <nav
        className={`fixed top-0 w-full backdrop-blur-2xl shadow-sm z-50 border-b transition-all duration-500 ${
          darkMode ? "bg-black/70 border-white/10" : "bg-white/70 border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-700">Shyam Medical</h1>
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
              Trusted Pharmacy Store
            </p>
          </div>

          <div className={`hidden md:flex gap-8 font-medium ${darkMode ? "text-white" : "text-black"}`}>
            <a href="#">Home</a>
            <a href="#">Medicines</a>
            <a href="#">Offers</a>
            <a href="#">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition">
              Login
            </button>

            <div className="relative cursor-pointer">
              <ShoppingCart />
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>

            <Phone className="cursor-pointer" />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-black transition"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} md:hidden border-t`}
          >
            <div className="flex flex-col p-6 gap-6 text-lg font-medium">
              <a href="#">Home</a>
              <a href="#">Medicines</a>
              <a href="#">Offers</a>
              <a href="#">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      <section className="relative pt-36 pb-20 bg-gradient-to-r from-green-600 to-emerald-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold text-white leading-tight">
              Order Medicines <br />
              Online Easily
            </h1>

            <p className="text-white/90 mt-6 text-lg">
              Fast 5 KM delivery in Neem Ka Thana with COD & UPI payments.
            </p>

            <div className="mt-8 bg-white rounded-full p-3 flex items-center shadow-2xl max-w-xl">
              <input
                type="text"
                placeholder="Search medicines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none px-4 text-black"
              />
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Order Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition">
                Upload Prescription
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop"
              alt="Medical"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { number: "10K+", text: "Happy Customers" },
            { number: "5KM", text: "Fast Delivery" },
            { number: "24/7", text: "Support" },
            { number: "100%", text: "Genuine Medicines" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white border border-green-100 shadow-lg rounded-3xl p-10 text-center text-black"
            >
              <h2 className="text-5xl font-bold text-green-700">{item.number}</h2>
              <p className="text-gray-500 mt-4 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-green-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-green-700">Shop By Category</h2>
            <p className="text-gray-500 mt-4 text-lg">Explore healthcare essentials</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Diabetes Care",
              "Heart Care",
              "Skin Care",
              "Baby Care",
              "Vitamins",
              "Covid Essentials",
              "Protein",
              "Personal Care",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto">
                  💊
                </div>
                <h3 className="text-2xl font-bold text-center mt-6">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-5xl font-bold text-green-700">Popular Medicines</h2>
              <p className="text-gray-500 mt-3">Best selling healthcare products</p>
            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {filteredMedicines.map((item, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.03}
                transitionSpeed={2000}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-green-100 relative text-black"
                >
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                    20% OFF
                  </div>

                  <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-green-700 font-bold text-xl mt-3">{item.price}</p>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 15px 30px rgba(16,185,129,0.4)",
                      }}
                      onClick={addToCart}
                      className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                    >
                      🛒 Add To Cart
                    </motion.button>

                    <button className="mt-4 w-full border-2 border-green-600 text-green-700 py-3 rounded-2xl font-bold hover:bg-green-600 hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Truck className="text-green-700 w-12 h-12" />,
              title: "Fast Delivery",
              text: "Medicines delivered within 5 KM.",
            },
            {
              icon: <ShieldCheck className="text-green-700 w-12 h-12" />,
              title: "Genuine Medicines",
              text: "100% authentic healthcare products.",
            },
            {
              icon: <Phone className="text-green-700 w-12 h-12" />,
              title: "24/7 Support",
              text: "WhatsApp & call support anytime.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-green-50 p-8 rounded-3xl shadow-sm text-black"
            >
              {item.icon}
              <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="bg-green-700 text-white text-center py-2 text-sm font-medium">
        🚚 Free Delivery on Orders Above ₹499
      </div>

      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-green-700 to-emerald-400 p-14 relative"
        >
          <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">
            <div>
              <h2 className="text-6xl font-bold text-white leading-tight">Get 25% OFF</h2>
              <p className="text-white/90 mt-6 text-xl">
                On healthcare products & daily medicines
              </p>
              <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Shop Now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031d4f7?q=80&w=1200&auto=format&fit=crop"
              alt="Offer"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-gradient-to-b from-green-50 to-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-700">What Customers Say</h2>
            <p className="text-gray-500 mt-4 text-lg">Trusted by local customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                review: "Fast delivery and genuine medicines. Very helpful support.",
              },
              {
                name: "Priya Verma",
                review: "Best medical store website in Neem Ka Thana.",
              },
              {
                name: "Amit Singh",
                review: "Easy ordering and prescription upload process.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12, scale: 1.02, rotate: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-green-100"
              >
                <div className="text-5xl">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mt-6 text-lg leading-relaxed">{item.review}</p>
                <h3 className="text-2xl font-bold mt-8 text-green-700">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-500">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Upload Your Prescription
            </h2>
            <p className="text-white/90 mt-6 text-lg">
              Upload prescription and get medicines delivered quickly.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-[40px] p-10 shadow-2xl text-black">
            <div className="border-2 border-dashed border-green-300 rounded-3xl p-16 text-center">
              <Upload className="mx-auto text-green-700 w-16 h-16" />
              <h3 className="text-3xl font-bold mt-6">Upload Prescription</h3>
              <p className="text-gray-500 mt-4">JPG, PNG or PDF supported</p>
              <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition">
                Choose File
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">Emergency Medicine Delivery</h2>
          <p className="text-white/70 mt-6 text-xl">
            Need urgent medicines? Call now instantly.
          </p>
          <a
            href="tel:9461806656"
            className="inline-block mt-10 bg-green-600 hover:bg-green-700 transition px-10 py-5 rounded-full text-xl font-bold"
          >
            📞 Call Now
          </a>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white">Get Health Updates</h2>
          <p className="text-white/80 mt-6 text-xl">Subscribe for offers & healthcare tips</p>

          <div className="mt-10 bg-white rounded-full p-3 flex items-center shadow-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none px-6 text-black"
            />
            <button className="bg-green-700 hover:bg-black transition text-white px-8 py-4 rounded-full font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-700">Order Tracking</h2>
            <p className="text-gray-500 mt-4 text-lg">Track your order in real-time</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {["Order Placed", "Packed", "Out For Delivery", "Delivered"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 rounded-3xl p-8 text-center shadow-lg border border-green-100"
              >
                <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mt-6">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <a
        href="#"
        className="fixed bottom-28 right-6 bg-black hover:bg-gray-800 text-white p-5 rounded-full shadow-2xl z-50 transition"
      >
        <MessageCircle />
      </a>

      <a
        href="https://wa.me/919461806656"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition animate-bounce"
      >
        WhatsApp
      </a>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl md:hidden z-50 text-black">
        <div className="flex justify-around py-4">
          <button className="flex flex-col items-center text-green-700">
            🏠
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            💊
            <span className="text-xs mt-1">Medicines</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            🛒
            <span className="text-xs mt-1">Cart</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            👤
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>

      <footer className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Shyam Medical</h2>
            <p className="mt-4 text-white/80">
              Trusted local pharmacy with fast medicine delivery.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              <li>Home</li>
              <li>Medicines</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li>Neem Ka Thana</li>
              <li>9461806656</li>
              <li>gouravvashistha01@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Delivery Area</h3>
            <p className="text-white/80">Fast delivery within 5 KM radius.</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-white/60">
          © 2026 Shyam Medical Store. All rights reserved.
        </div>
      </footer>
    </main>
  );
}