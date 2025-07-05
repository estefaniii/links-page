"use client"

import { useState, useEffect } from "react"
import { Heart, Instagram, Facebook, Youtube, Globe, Mail, MapPin, Clock, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MautikPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const socialLinks = [
    {
      id: 1,
      title: "Instagram • Galería visual",
      url: "https://www.instagram.com/mautik_official/",
      icon: <Instagram className="w-5 h-5 md:w-7 md:h-7" />,
      color: "bg-gradient-to-r from-pink-300 to-rose-300",
    },
    {
      id: 2,
      title: "Facebook • Comunidad",
      url: "https://www.facebook.com/Mautikofficial",
      icon: <Facebook className="w-5 h-5 md:w-7 md:h-7" />,
      color: "bg-gradient-to-r from-blue-300 to-indigo-300",
    },
    {
      id: 3,
      title: "YouTube • Tutoriales",
      url: "https://www.youtube.com/channel/UCgcupJB4BMMXZH8DAPLNNJg",
      icon: <Youtube className="w-5 h-5 md:w-7 md:h-7" />,
      color: "bg-gradient-to-r from-red-300 to-pink-300",
    },
    {
      id: 4,
      title: "Tienda • Catálogo",
      url: "https://mautik.com",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-gradient-to-r from-emerald-300 to-teal-300",
    },
  ]

  useEffect(() => {
    const yearInterval = setInterval(
      () => {
        setCurrentYear(new Date().getFullYear())
      },
      1000 * 60 * 60 * 24,
    )
    return () => clearInterval(yearInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-peach-100 to-purple-100 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-r from-pink-200 via-peach-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-r from-peach-200 via-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-r from-purple-200 via-pink-100 to-peach-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-20 text-3xl animate-float">🧶</div>
        <div className="absolute bottom-20 right-20 text-2xl animate-float animation-delay-2000">✨</div>
        <div className="absolute top-1/2 left-10 text-2xl animate-float animation-delay-1000">🎀</div>
        <div className="absolute top-1/3 right-10 text-2xl animate-float animation-delay-4000">💎</div>
        <div className="absolute bottom-1/3 left-1/3 text-2xl animate-float animation-delay-3000">🌸</div>
        <div className="absolute top-2/3 right-1/4 text-2xl animate-float animation-delay-1500">🪡</div>
      </div>

      <div className="relative z-10 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {/* Main Container - Retro Computer Style */}
        <div className="bg-gradient-to-br from-white/95 via-pink-50/90 to-peach-50/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-10 lg:p-14 shadow-2xl border-4 border-pink-200/50 retro-border">
          {/* Header */}
          <div className="text-center mb-6 md:mb-10">
            <div className="relative mb-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto mb-3 rounded-full bg-gradient-to-r from-lavender-300 to-violet-300 flex items-center justify-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl shadow-xl border-3 border-white/70 overflow-hidden">
                <img
                  src="/mautik.jpeg"
                  alt="Mautik Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-mint-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <h1 className="mautik-retro text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-purple-700 drop-shadow-[0_1px_4px_rgba(147,51,234,0.2)]">
              Mautik
            </h1>
            <p className="text-purple-600 text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-1">🧶 Crochet • 💎 Bisutería</p>
            <p className="text-violet-500 text-xs sm:text-sm md:text-lg lg:text-xl">✨ Arte hecho a mano desde Panamá</p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${link.color} text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/40 hover:border-white/70`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-3">
                    {link.icon}
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base leading-tight">{link.title}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Info Box with Images */}
          <div className="bg-gradient-to-r from-pink-100 via-peach-100 to-purple-100 rounded-2xl p-3 sm:p-4 md:p-8 lg:p-10 mb-6 md:mb-10 border-2 border-pink-200/40">
            <div className="text-center mb-4 md:mb-8">
              <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-purple-600 mb-2 retro-font">🌟 Conecta con el Arte</h3>
              <p className="text-purple-500 text-xs sm:text-sm md:text-lg lg:text-xl">
                Creaciones únicas elaboradas con amor usando técnicas tradicionales
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
              <div className="aspect-square bg-gradient-to-br from-pink-200 via-peach-200 to-pink-300 rounded-xl flex items-center justify-center shadow-md border-2 border-pink-100/50 overflow-hidden">
                <img
                  src="/luffy.jpg"
                  alt="Luffy - Crochet creation"
                  className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 rounded-xl flex items-center justify-center shadow-md border-2 border-purple-100/50 overflow-hidden">
                <img
                  src="/peluche.jpg"
                  alt="Peluche - Bisutería artesanal"
                  className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-lavender-200 via-purple-100 to-violet-200 rounded-xl flex items-center justify-center shadow-md border-2 border-lavender-100/50 overflow-hidden">
                <img
                  src="/hollow-night.png"
                  alt="Hollow Night - Arte adicional"
                  className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-emerald-200 via-teal-100 to-green-200 rounded-xl flex items-center justify-center shadow-md border-2 border-emerald-100/50 overflow-hidden">
                <img
                  src="/capibara.jpg"
                  alt="Capibara - Creación especial"
                  className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/80 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg border-2 border-peach-200/50 mb-4 md:mb-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {/* Email */}
              <div className="flex flex-col items-center justify-center space-y-1 p-1 sm:p-2 md:p-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-pink-300 via-peach-300 to-pink-400 rounded-full flex items-center justify-center shadow-sm p-1 sm:p-1.5 md:p-2">
                  <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-purple-600 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium leading-tight">mautik_official@gmail.com</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex flex-col items-center justify-center space-y-1 p-1 sm:p-2 md:p-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-peach-300 via-pink-200 to-indigo-200 rounded-full flex items-center justify-center shadow-sm p-1 sm:p-1.5 md:p-2">
                  <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-purple-600 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium">Panamá</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex flex-col items-center justify-center space-y-1 p-1 sm:p-2 md:p-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-emerald-200 via-peach-200 to-teal-200 rounded-full flex items-center justify-center shadow-sm p-1 sm:p-1.5 md:p-2">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-purple-600 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium leading-tight">Lun-Sáb 9:00AM-6:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mb-4 md:mb-8">
            <a
              href="https://paypal.me/estefanniii"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-peach-200 via-yellow-200 to-pink-200 hover:from-peach-300 hover:to-pink-300 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 text-center transform transition-all duration-300 hover:scale-105 border-2 border-peach-300/50 hover:border-peach-400/70"
            >
              <div className="flex items-center justify-center space-x-2 md:space-x-4">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
                <span className="text-orange-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl retro-font">Support My Art 🎨</span>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="bg-peach-50/80 rounded-xl p-2 sm:p-3 md:p-6 border border-pink-200/40">
              <div className="flex items-center justify-center space-x-2 md:space-x-4 text-xs sm:text-sm md:text-lg">
                <span className="text-purple-600 font-medium">© {currentYear} Mautik</span>
                <span className="text-violet-500 text-lg">•</span>
                <span className="text-purple-600 font-medium">hecho con amor</span>
                <Heart className="w-3 h-3 md:w-5 md:h-5 text-pink-400 fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
