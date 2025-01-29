"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeaderSub } from "@/components/ui/header-sub";
import { FooterSub } from "@/components/ui/footer-sub";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { FaChartLine, FaUsers, FaLightbulb, FaCogs, FaRocket, FaChartBar, FaFileDownload } from 'react-icons/fa';

/**
 * @docs
 * サービスページのメインコンポーネント
 */
export default function Service() {
  return (
    <main className="bg-black min-h-screen">
      <HeaderSub />
      
      {/* Hero Section with Video Background */}
      <section className="relative bg-black min-h-[80vh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/service/service-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl font-normal tracking-[0.2em] text-white text-center mb-12">
            SERVICE
          </h1>
          <p className="text-xl text-white text-center tracking-wider mb-8">
            戦略とテクノロジーを武器に<br />
            ビジネスの成長を実現します
          </p>
        </motion.div>
        <ShootingStars
          starColor="#9E00FF"
          starCount={20}
          minDuration={1500}
          maxDuration={3000}
        />
      </section>

      {/* Features Section - 白背景バージョン */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-[0.2em] text-zinc-900 text-center mb-16">
            特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: FaChartLine, title: "データ分析", text: "最新のツールを活用した精密な分析" },
              { icon: FaUsers, title: "専門チーム", text: "経験豊富な専門家による運用" },
              { icon: FaLightbulb, title: "戦略立案", text: "ビジネスゴールに合わせた戦略提案" },
              { icon: FaCogs, title: "運用管理", text: "効率的な運用体制の構築" },
              { icon: FaRocket, title: "成長支援", text: "継続的な改善とスケール" },
              { icon: FaChartBar, title: "レポーティング", text: "分かりやすい実績レポート" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <feature.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-zinc-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-12 rounded-lg relative overflow-hidden hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <FaChartLine className="w-8 h-8 text-yellow-400 mr-4" />
                    <h2 className="text-3xl font-semibold text-yellow-400">広告運用代行</h2>
                  </div>
                  <div className="space-y-6 text-white">
                    <p className="text-lg leading-relaxed">
                      広告運用のプロフェッショナルが、あなたのビジネスに最適な広告戦略を提案・実行します。
                    </p>
                    <ul className="space-y-4 list-disc list-inside marker:text-yellow-400">
                      <li className="pl-2">3年以上の経験を持つ専門家による運用</li>
                      <li className="pl-2">AI技術を活用した効率的な運用管理</li>
                      <li className="pl-2">月次レポートと改善提案の実施</li>
                      <li className="pl-2">柔軟な予算調整と透明性の高い運用</li>
                    </ul>
                    <div className="mt-8 bg-black/50 p-8 rounded-lg border border-yellow-400/10">
                      <h4 className="text-xl font-semibold text-yellow-400 mb-6">実績例</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-3xl font-bold text-yellow-400 mb-2">150%</p>
                          <p className="text-sm text-gray-300">ROAS改善率</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-3xl font-bold text-yellow-400 mb-2">30%</p>
                          <p className="text-sm text-gray-300">コスト削減率</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="text-center">
                        <a
                          href="/pdf/ad-management.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-all duration-300"
                        >
                          <FaFileDownload className="w-5 h-5 mr-2" />
                          <span>サービス資料ダウンロード</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-12 rounded-lg relative overflow-hidden hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <FaUsers className="w-8 h-8 text-yellow-400 mr-4" />
                    <h2 className="text-3xl font-semibold text-yellow-400">広告インハウス支援</h2>
                  </div>
                  <div className="space-y-6 text-white">
                    <p className="text-lg leading-relaxed">
                      自社での広告運用体制の構築をトータルでサポート。ノウハウの提供から運用フローの確立まで支援します。
                    </p>
                    <ul className="space-y-4 list-disc list-inside marker:text-yellow-400">
                      <li className="pl-2">広告運用ナレッジの提供</li>
                      <li className="pl-2">運用体制の構築支援</li>
                      <li className="pl-2">担当者への技術研修</li>
                      <li className="pl-2">運用状況のモニタリング</li>
                    </ul>
                    <div className="mt-8 bg-black/50 p-8 rounded-lg border border-yellow-400/10">
                      <h4 className="text-xl font-semibold text-yellow-400 mb-6">支援実績</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-3xl font-bold text-yellow-400 mb-2">50+</p>
                          <p className="text-sm text-gray-300">支援企業数</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-3xl font-bold text-yellow-400 mb-2">90%</p>
                          <p className="text-sm text-gray-300">継続率</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="text-center">
                        <a
                          href="/pdf/in-house.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-all duration-300"
                        >
                          <FaFileDownload className="w-5 h-5 mr-2" />
                          <span>サービス資料ダウンロード</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-12 rounded-lg relative overflow-hidden hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <FaLightbulb className="w-8 h-8 text-yellow-400 mr-4" />
                    <h2 className="text-3xl font-semibold text-yellow-400">Webコンサルティング</h2>
                  </div>
                  <div className="space-y-6 text-white">
                    <p className="text-lg leading-relaxed">
                      データに基づく戦略的なアプローチで、Webマーケティング全般の課題解決をサポートします。
                    </p>
                    <ul className="space-y-4 list-disc list-inside marker:text-yellow-400">
                      <li className="pl-2">サイト分析・改善提案</li>
                      <li className="pl-2">KPI設計と施策立案</li>
                      <li className="pl-2">競合分析と差別化戦略</li>
                      <li className="pl-2">定期的な戦略レビュー</li>
                    </ul>
                    <div className="mt-8 bg-black/50 p-8 rounded-lg border border-yellow-400/10">
                      <h4 className="text-xl font-semibold text-yellow-400 mb-6">得意分野</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-base text-gray-300">EC</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-base text-gray-300">BtoB</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-base text-gray-300">リード獲得</p>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-lg">
                          <p className="text-base text-gray-300">ブランディング</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flow Section - 白背景バージョン */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-[0.2em] text-zinc-900 text-center mb-16">
            サービス導入の流れ
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 縦線 */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-yellow-400/50 md:left-1/2"></div>
              
              {[
                { title: "お問い合わせ", text: "まずはお気軽にご相談ください" },
                { title: "ヒアリング", text: "現状の課題やゴールについてお伺いします" },
                { title: "提案", text: "最適なプランをご提案いたします" },
                { title: "契約", text: "サービス内容の確認と契約を行います" },
                { title: "キックオフ", text: "プロジェクトをスタートします" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  <div className={`ml-24 md:w-1/2 ${index % 2 ? 'md:ml-0 md:mr-12' : 'md:ml-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                        {`0${index + 1}. ${step.title}`}
                      </h3>
                      <p className="text-zinc-600">{step.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/service/contact-bg.jpg"
            alt="お問い合わせ"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-normal tracking-[0.2em] text-white mb-12">
            お問い合わせ
          </h2>
          <p className="text-lg text-white mb-12">
            サービスに関するご質問・ご相談はお気軽にお問い合わせください
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-16 py-4 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <span className="text-base font-semibold tracking-wider">お問い合わせ</span>
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSub />
    </main>
  );
}
