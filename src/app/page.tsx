"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

/**
 * @docs
 * トップページのメインコンポーネント
 */
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 0.8], [200, 0]); // 下から上に移動
  const videoOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.1, 0.8], [0.8, 1]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ヒーローセクション */}
        <section ref={containerRef} className="relative h-[150vh] bg-black overflow-hidden">
          {/* Background with stars */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
            <div className="stars absolute inset-0" />
          </div>

          {/* Content */}
          <motion.div 
            className="relative z-10 h-screen sticky top-0"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full text-center text-white">
              <h1 className="mb-8">
                <span className="text-stroke block text-[120px] font-bold tracking-[0.1em] md:text-[180px] leading-none">NEW</span>
                <span className="mt-2 block text-[60px] font-bold md:text-[90px] leading-none">GAME</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg font-light tracking-[0.1em] md:text-xl mt-12">
                私たちはインターネット広告の可能性を広げます。
              </p>
              {/* Scroll Icon */}
              <div className="mt-20 flex flex-col items-center gap-4">
                <div className="writing-vertical text-xs tracking-[0.2em] font-light">SCROLL</div>
                <div className="animate-arrowDown">
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0V22M7 22L1 16M7 22L13 16" stroke="white" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div 
            className="absolute inset-0 w-full h-screen z-0 sticky top-0"
            style={{ opacity: videoOpacity, scale: videoScale, y: videoY }}
          >
            <div id="video" className="relative w-full h-full">
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1400px] aspect-[16/9]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/20250128_1609_Focused Digital Collaboration_remix_01jjnvw3r3eqvvfn0s95gm4n58.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                {/* Video Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-4xl md:text-5xl font-normal tracking-[0.2em]">
                      <span className="block mb-6">コンバージョンさせることに</span>
                      <span className="block mb-6">特化した戦略思考型の</span>
                      <span className="block">Webマーケター集団。</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View More Button */}
          <div className="bg-black">
            <div className="container mx-auto relative flex justify-center">
              <div className="absolute -top-8">
                <Link href="/about" className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-16 py-4 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <span className="text-base font-semibold tracking-wider">VIEW MORE <span className="ml-4">←</span></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Multiple shooting star layers with different colors and speeds */}
          <ShootingStars 
            starColor="#9E00FF" 
            minDelay={1500} 
            maxDelay={3000}
            minSpeed={10}
            maxSpeed={30}
          />
          <ShootingStars 
            starColor="#FFD700" 
            minDelay={2000} 
            maxDelay={4000}
            minSpeed={15}
            maxSpeed={35}
          />
          <ShootingStars 
            starColor="#00FF00" 
            minDelay={2500} 
            maxDelay={4500}
            minSpeed={20}
            maxSpeed={40}
          />
        </section>

        {/* View More Button */}
        <div className="bg-black relative">
          <div className="container mx-auto px-4">
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
              <Link href="/about" className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-16 py-4 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <span className="text-base font-semibold tracking-wider">VIEW MORE <span className="ml-4">←</span></span>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="bg-black py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="section-title text-white">SERVICE</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 -mt-20">
              {[
                {
                  title: "広告運用代行",
                  description: "顧客のKPIに合わせた広告運用を弊社で代行致します。媒体選定から集客案の立案、必要クリエイティブの制作、記事LPの制作、アカウントの設計から運用、解析、レポート提出まで全て一貫して担います。",
                  image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974"
                },
                {
                  title: "広告運用コンサル",
                  description: "弊社専属のマーケターがデータ分析と戦略的なアプローチで、御社の自社広告のコンサルティングをサポートします。",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
                },
                {
                  title: "インハウス支援",
                  description: "弊社専属のマーケターを御社に派遣し、自社内に広告運用部署の立ち上げサポートをさせて頂きます。カリキュラムに沿って、一流の広告運用者を社内で育成致します。",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                }
              ].map((service, index) => (
                <div key={index} className="card card-hover group">
                  <div className="image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-12 -mt-20 bg-white relative z-10">
                    <h3 className="mb-6 text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-20">
              <Link href="/service" className="view-more-btn">
                VIEW MORE <span className="ml-4">←</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section id="works" className="py-32">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">WORKS</h2>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "LINE AD運用",
                  description: "健康美人研究所様\n白髪染めシャンプーをアド運用で2500件を販売。",
                  image: "/images/works/01.jpg"
                },
                {
                  title: "システム開発",
                  description: "G社様\nAI×OCR技術で請求書や領収書を読み取りスプレッドシートに自動入力するシステムを開発。",
                  image: "/images/works/02.jpg"
                },
                {
                  title: "Coming Soon",
                  description: ""
                },
                {
                  title: "Coming Soon",
                  description: ""
                },
                {
                  title: "Coming Soon",
                  description: ""
                },
                {
                  title: "Coming Soon",
                  description: ""
                }
              ].map((work, index) => (
                <div key={index} className={`works-item group ${work.title === "Coming Soon" ? "bg-black" : ""}`}>
                  {work.title !== "Coming Soon" ? (
                    <>
                      <img src={work.image} alt={work.title} className="w-full" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                          <h3 className="text-2xl font-bold mb-3 tracking-wider">{work.title}</h3>
                          {work.description && (
                            <p className="text-base leading-relaxed tracking-wide whitespace-pre-line">{work.description}</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-3xl font-bold tracking-[0.2em] text-yellow-400">COMING SOON</h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
