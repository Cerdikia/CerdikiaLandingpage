"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import {
  Star,
  Users,
  Trophy,
  BookOpen,
  Smartphone,
  Download,
  Play,
  Apple,
  CheckCircle,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"

export default function Home() {
  const featuresPlaceholderRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.remove("animate-fade-out")
          } else {
            entry.target.classList.add("animate-fade-out")
            entry.target.classList.remove("animate-fade-in")
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    if (featuresPlaceholderRef.current) {
      observer.observe(featuresPlaceholderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Custom CSS for fade animations */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.8s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0.3;
            transform: translateY(-20px) scale(0.98);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-start flex-shrink-0">
              <button onClick={scrollToTop} className="focus:outline-none flex-shrink-0">
                <Image
                  src="/images/cerdikia-logo.svg"
                  alt="Cerdikia Logo"
                  width={140}
                  height={45}
                  className="h-25 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                  priority
                />
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#screenshots" className="text-gray-600 hover:text-blue-600 transition-colors">
                Screenshots
              </a>
              <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">
                Download
              </a>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">🎓 Educational Gaming App</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Kumpulkan Ilmu,{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Naik Level
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Jadilah juara masa depan dengan aplikasi pembelajaran yang menyenangkan! Belajar sambil bermain dengan
                  karakter-karakter lucu dan sistem gamifikasi yang seru.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ayo Mulai Belajar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Lihat Demo
                </Button>
              </div>

              {/* <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">10,000+ siswa aktif</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9 rating</span>
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="relative z-10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  poster="/placeholder.svg?height=400&width=600"
                >
                  <source src="/video/cerdikia2.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">✨ Fitur Unggulan</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Mengapa Memilih Cerdikia?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplikasi pembelajaran yang menggabungkan edukasi dan hiburan untuk pengalaman belajar yang tak terlupakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Sistem Gamifikasi",
                description: "Kumpulkan XP, naik level, dan raih achievement untuk memotivasi belajar",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Leaderboard Global",
                description: "Kompetisi sehat dengan siswa lain di seluruh Indonesia",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Konten Interaktif",
                description: "Materi pembelajaran dengan karakter lucu dan animasi menarik",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Misi Harian",
                description: "Tantangan baru setiap hari untuk menjaga konsistensi belajar",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Tracking Progress",
                description: "Pantau perkembangan belajar dengan statistik yang detail",
                color: "from-red-400 to-pink-500",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Sertifikat Digital",
                description: "Dapatkan sertifikat untuk setiap pencapaian yang diraih",
                color: "from-indigo-400 to-purple-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">📱 Preview App</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Jelajahi Fitur-Fitur Menarik</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat bagaimana Cerdikia membuat pembelajaran menjadi menyenangkan dan interaktif
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Interface yang User-Friendly</h3>
              <div className="space-y-4">
                {[
                  "Desain colorful dan menarik untuk anak-anak",
                  "Navigasi yang mudah dan intuitif",
                  "Karakter animasi yang menggemaskan",
                  "Feedback visual untuk setiap interaksi",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Placeholder with Animated Mockups - Features Section */}
            <div className="relative" ref={featuresPlaceholderRef}>
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000">
                {/* Background Placeholder */}
                <Image
                  src="/images/placeholder.svg"
                  alt="App Features Preview"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Animated Frames Section */}
                <div className="relative w-full h-[400px] flex items-center justify-center">
                  {/* Latihan Frame - Center with fade animation */}
                  <div className="absolute z-20 opacity-0 transition-all duration-1000">
                    <Image
                      src="/images/latihan-frame.svg"
                      alt="Latihan Screen"
                      width={180}
                      height={360}
                      className="w-44 h-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>

                  {/* Question Frame - Top Right with fade animation */}
                  <div
                    className="absolute top-6 right-6 z-10 opacity-0 transition-all duration-1000"
                    style={{ transitionDelay: "0.3s" }}
                  >
                    <Image
                      src="/images/question-frame.svg"
                      alt="Question Screen"
                      width={130}
                      height={260}
                      className="w-32 h-auto drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer transform rotate-12"
                    />
                  </div>

                  {/* Data Diri Frame - Top Left with fade animation */}
                  <div
                    className="absolute top-6 left-6 z-10 opacity-0 transition-all duration-1000"
                    style={{ transitionDelay: "0.6s" }}
                  >
                    <Image
                      src="/images/data-diri-frame.svg"
                      alt="Data Diri Screen"
                      width={130}
                      height={260}
                      className="w-32 h-auto drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer transform -rotate-12"
                    />
                  </div>

                  {/* Login Frame - Bottom with fade animation */}
                  <div
                    className="absolute bottom-6 z-10 opacity-0 transition-all duration-1000"
                    style={{ transitionDelay: "0.9s" }}
                  >
                    <Image
                      src="/images/login-frame.svg"
                      alt="Login Screen"
                      width={130}
                      height={260}
                      className="w-32 h-auto drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer transform rotate-6"
                    />
                  </div>

                  {/* Home Frame - Bottom Left with fade animation */}
                  <div
                    className="absolute bottom-6 left-12 z-10 opacity-0 transition-all duration-1000"
                    style={{ transitionDelay: "1.2s" }}
                  >
                    <Image
                      src="/images/home-frame.svg"
                      alt="Home Screen"
                      width={120}
                      height={240}
                      className="w-28 h-auto drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer transform -rotate-6"
                    />
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                  <div
                    className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Chain Layout - Fixed visibility */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fitur Lengkap dalam Satu Aplikasi</h3>
              <p className="text-gray-600">Dari splash screen hingga pembelajaran interaktif</p>
            </div>

            {/* Chain Animation Container - Fixed height and overflow */}
            <div className="relative min-h-[1200px] overflow-visible">
              {/* Animated Chain of Mockups */}
              <div className="flex flex-col items-center space-y-8">
                {[
                  { src: "/images/splash-frame.svg", alt: "Splash Screen", title: "Splash Screen" },
                  { src: "/images/login-frame.svg", alt: "Login", title: "Login & Register" },
                  { src: "/images/home-frame.svg", alt: "Home", title: "Dashboard Utama" },
                  { src: "/images/latihan-frame.svg", alt: "Latihan", title: "Latihan Soal" },
                  { src: "/images/question-frame.svg", alt: "Question", title: "Quiz Interaktif" },
                  { src: "/images/ranking-frame.svg", alt: "Ranking", title: "Leaderboard" },
                  { src: "/images/shop-frame.svg", alt: "Shop", title: "Toko Reward" },
                  { src: "/images/profile-frame.svg", alt: "Profile", title: "Profil Pengguna" },
                  { src: "/images/data-diri-frame.svg", alt: "Data Diri", title: "Pengaturan" },
                ].map((mockup, index) => (
                  <div key={index} className="relative group">
                    {/* Connection Line */}
                    {index < 8 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 opacity-60 z-0"></div>
                    )}

                    {/* Mockup Container */}
                    <div className="relative z-10">
                      <div
                        className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 animate-pulse"
                        style={{
                          animationDelay: `${index * 0.5}s`,
                          animationDuration: "4s",
                        }}
                      >
                        <Image
                          src={mockup.src || "/placeholder.svg"}
                          alt={mockup.alt}
                          width={200}
                          height={400}
                          className="w-48 h-auto drop-shadow-2xl rounded-2xl"
                        />
                      </div>

                      {/* Floating Label */}
                      <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="bg-white rounded-lg shadow-lg px-4 py-2 border border-blue-100">
                          <span className="text-sm font-medium text-gray-700">{mockup.title}</span>
                          <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-white border-l border-b border-blue-100 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Side Decorations */}
              <div className="absolute left-10 top-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute right-10 top-40 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute left-20 bottom-40 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute right-16 bottom-20 w-18 h-18 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Pembelajaran yang Komprehensif</h3>
              <div className="space-y-4">
                {[
                  "Berbagai mata pelajaran dalam satu aplikasi",
                  "Level kesulitan yang bertahap dan adaptif",
                  "Quiz interaktif dengan berbagai format soal",
                  "Sistem reward yang memotivasi belajar",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/phone-home.svg"
                  alt="Home Screen"
                  width={200}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg transform rotate-2"
                />
                <Image
                  src="/images/phone-question.svg"
                  alt="Quiz Screen"
                  width={200}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg transform -rotate-2 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Siswa Aktif", icon: <Users className="w-8 h-8" /> },
              { number: "50+", label: "Materi Pembelajaran", icon: <BookOpen className="w-8 h-8" /> },
              { number: "4.9", label: "Rating App Store", icon: <Star className="w-8 h-8" /> },
              { number: "95%", label: "Tingkat Kepuasan", icon: <Trophy className="w-8 h-8" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mx-auto">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Siap Memulai Petualangan Belajar?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Download Cerdikia sekarang dan bergabunglah dengan ribuan siswa yang sudah merasakan cara belajar yang
                menyenangkan!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Apple className="w-6 h-6 mr-3" />
                Download for iOS
              </Button> */}
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Download className="w-6 h-6 mr-3" />
                Download for Android
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-start justify-start flex-shrink-0">
                <button onClick={scrollToTop} className="focus:outline-none flex-shrink-0">
                  <Image
                    src="/images/cerdikia-logo.svg"
                    alt="Cerdikia Logo"
                    width={140}
                    height={45}
                    className="h-20 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                  />
                </button>
              </div>
              <p className="text-gray-400">
                Aplikasi pembelajaran yang membuat belajar menjadi menyenangkan dan interaktif untuk semua anak.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <div className="space-y-2 text-gray-400">
                <div>Fitur</div>
                <div>Harga</div>
                <div>Download</div>
                <div>Update</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Kontak</div>
                <div>FAQ</div>
                <div>Komunitas</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <div className="space-y-2 text-gray-400">
                <div>Tentang Kami</div>
                <div>Blog</div>
                <div>Karir</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cerdikia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
