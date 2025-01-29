"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { HeaderSub } from "@/components/ui/header-sub";
import { FooterSub } from "@/components/ui/footer-sub";
import { motion } from "framer-motion";

/**
 * @docs
 * アバウトページのメインコンポーネント
 */
export default function About() {
  return (
    <>
      <HeaderSub />
      <main className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-[70vh] bg-black overflow-hidden">
          <ShootingStars 
            starColor="#9E00FF" 
            minDelay={1500} 
            maxDelay={3000}
            minSpeed={10}
            maxSpeed={30}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="text-8xl font-bold text-white tracking-[0.3em] mb-8">ABOUT</h1>
            <p className="text-xl text-white/80 tracking-[0.5em] font-light mb-24">私たちについて</p>
            
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-white tracking-[0.2em] mb-8">MISSION</h2>
              <p className="text-lg text-white/90 tracking-wider leading-loose">
                広告運用のプロフェッショナルとして、<br />
                クライアントの成功を全力でサポートします。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-16 max-w-[1000px]">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white tracking-[0.2em] mb-6">専門性</h3>
                <p className="text-lg text-white/80 tracking-wider leading-loose">
                  広告運用に特化した専門家集団として、最新のトレンドと技術を駆使し、効果的なマーケティング戦略を提供します。
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white tracking-[0.2em] mb-6">実績</h3>
                <p className="text-lg text-white/80 tracking-wider leading-loose">
                  多様な業界での豊富な運用実績を活かし、クライアントのビジネス成長を確実にサポートします。
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white tracking-[0.2em] mb-6">信頼</h3>
                <p className="text-lg text-white/80 tracking-wider leading-loose">
                  透明性の高いコミュニケーションと確かな結果で、長期的な信頼関係を構築します。
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
            <div className="w-[1px] h-16 bg-white/30 animate-scrollDown"></div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-xl leading-relaxed tracking-wider mb-6">私たちは</p>
              <p className="text-3xl font-bold leading-relaxed tracking-wider mb-6">"不透明な広告は打ちません"</p>
              <p className="text-xl leading-relaxed tracking-wider">
                より成果にフォーカスした勝ち筋を提供<br />
                ビジネスの短期的な広告戦略のサポートをします。
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 tracking-widest">VISION</h2>
              <p className="text-2xl leading-relaxed tracking-wider">
                デジタルマーケティングの力で、<br />
                ビジネスの新しい可能性を切り開く
              </p>
            </div>
            <div className="mt-20 max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed text-center">
                私たちは、データドリブンなアプローチと創造的な戦略で、<br />
                クライアントのビジネスに真の価値を提供します。<br />
                常に最新のデジタルトレンドをキャッチアップし、<br />
                効果的なマーケティングソリューションを実現します。
              </p>
            </div>
          </div>
        </section>

        {/* Company Information Section */}
        <section className="relative">
          {/* 背景画像 */}
          <div className="w-full h-[900px]">
            <img
              src="/images/about/office.jpeg"
              alt="オフィス"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 会社情報オーバーレイ */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] bg-white/95 py-20 px-24">
            <h2 className="text-5xl font-bold mb-16 tracking-widest text-black text-center">COMPANY</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] text-black/70">会社名</h3>
                <p className="text-lg tracking-wide text-black pl-1">株式会社NEWGAME</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] text-black/70">代表取締役</h3>
                <p className="text-lg tracking-wide text-black pl-1">菊地 友平</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] text-black/70">所在地</h3>
                <p className="text-lg tracking-wide leading-relaxed text-black pl-1">
                  〒541-0058 大阪市中央区南久宝寺町4-1-2 御堂筋ダイビル4F
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] text-black/70">事業内容</h3>
                <p className="text-lg tracking-wide leading-relaxed text-black pl-1">
                  ネット広告運用代行 ・ 広告インハウス支援 ・ Webコンサルティング
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] text-black/70">設立</h3>
                <p className="text-lg tracking-wide text-black pl-1">2023年11月</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] text-black/70">お問い合わせ</h3>
                <p className="text-lg tracking-wide text-black pl-1">TEL: 06-6252-0205</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSub />
    </>
  );
}
