"use client";

import { motion } from "framer-motion";
import { HeaderSub } from "@/components/ui/header-sub";
import { FooterSub } from "@/components/ui/footer-sub";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useState } from "react";

/**
 * @docs
 * お問い合わせページのメインコンポーネント
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "送信に失敗しました。");
      }

      const data = await response.json();
      console.log("送信結果:", data);

      setStatus({ type: "success", message: "お問い合わせを送信しました。" });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("送信エラー:", error);
      let errorMessage = error.message;
      if (error.response) {
        const errorData = await error.response.json();
        errorMessage = errorData.error || errorMessage;
        console.error("エラー詳細:", errorData.details);
      }
      setStatus({ type: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-black min-h-screen">
      <HeaderSub />
      
      {/* Hero Section */}
      <section className="relative bg-black min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <ShootingStars 
            starColor="#9E00FF" 
            minDelay={1500} 
            maxDelay={3000}
            minSpeed={10}
            maxSpeed={30}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">CONTACT</h1>
            <p className="text-xl text-gray-300">
              お気軽にお問い合わせください
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {status.type && (
                <div
                  className={`p-4 rounded ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FooterSub />
    </main>
  );
}
