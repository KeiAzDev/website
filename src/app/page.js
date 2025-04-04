"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // モバイルメニューを切り替える関数
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // アニメーション設定
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main>
      {/* ナビゲーションバー */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 font-bold text-xl">
                  介護サポート
                </span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  ホーム
                </a>
                <a
                  href="#services"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  サービス
                </a>
                <a
                  href="#about"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  会社概要
                </a>
                <a
                  href="#contact"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>無料相談はこちら</span>
                </a>
              </div>
              <div className="-mr-2 ml-6 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">メニューを開く</span>
                  <svg
                    className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              ホーム
            </a>
            <a
              href="#services"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              サービス
            </a>
            <a
              href="#about"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              会社概要
            </a>
            <a
              href="#contact"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
                variants={fadeInLeft}
              >
                <span className="block">ご家族にぴったりの</span>
                <span className="block text-indigo-200">介護施設をご紹介</span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                variants={fadeInLeft}
              >
                経験豊富なスタッフが、お一人お一人の状況やご希望に合わせて最適な介護施設をご提案します。お気軽にご相談ください。
              </motion.p>
              <motion.div
                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                variants={fadeInLeft}
              >
                <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
                  >
                    無料相談はこちら
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700"
                  >
                    サービスを見る
                  </a>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <motion.div
                className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleIn}
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="海に面したベンチに座る高齢者カップル"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full rounded-lg"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="py-12 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
              variants={fadeInUp}
            >
              特徴
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              variants={fadeInUp}
            >
              安心して任せられる理由
            </motion.p>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              variants={fadeInUp}
            >
              私たちは単なる紹介だけではなく、ご入居後もサポートいたします。ご家族様の安心を第一に考えたサービスをご提供します。
            </motion.p>
          </motion.div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <motion.div
                className="card-hover relative bg-white p-6 rounded-xl shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
              >
                <div className="absolute -top-3 -left-3 bg-indigo-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-6 text-xl font-medium text-gray-900">
                  豊富な施設情報
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  全国の介護施設から、立地、サービス内容、費用などの詳細情報を収集・分析し、ご希望に合った施設を見つけ出します。
                </p>
              </motion.div>

              <motion.div
                className="card-hover relative bg-white p-6 rounded-xl shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -top-3 -left-3 bg-indigo-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-6 text-xl font-medium text-gray-900">
                  専門スタッフによる相談
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  介護の知識を持った専門スタッフが丁寧にヒアリングし、ご要望や予算に合った施設をご提案します。
                </p>
              </motion.div>

              <motion.div
                className="card-hover relative bg-white p-6 rounded-xl shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInRight}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -top-3 -left-3 bg-indigo-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="ml-6 text-xl font-medium text-gray-900">
                  入居後のフォロー
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  施設入居後も定期的にご連絡し、ご不安や疑問点があればいつでもサポートいたします。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* サービスセクション */}
      <div className="bg-gray-50 py-12" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
              variants={fadeInUp}
            >
              サービス
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              variants={fadeInUp}
            >
              ご提供サービス
            </motion.p>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              variants={fadeInUp}
            >
              お客様のご状況やご希望に合わせて、様々なサービスをご用意しております。
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="介護施設紹介"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  介護施設紹介
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  特別養護老人ホーム、有料老人ホーム、サービス付き高齢者向け住宅など、様々な施設の中からご希望に合った施設をご紹介します。
                </p>
                <div className="mt-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    詳しく見る <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="入居手続きサポート"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  入居手続きサポート
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  施設見学の調整から入居契約まで、面倒な手続きをトータルでサポートいたします。
                </p>
                <div className="mt-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    詳しく見る <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="介護保険相談"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  介護保険相談
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  介護保険の申請方法や利用できるサービスについて、わかりやすくご説明いたします。
                </p>
                <div className="mt-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    詳しく見る <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 会社概要セクション */}
      <div className="bg-white py-12" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
              variants={fadeInUp}
            >
              会社概要
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              variants={fadeInUp}
            >
              私たちについて
            </motion.p>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              variants={fadeInUp}
            >
              お客様一人ひとりに寄り添い、最適な介護施設をご紹介することで、高齢者の方々の生活の質の向上に貢献します。
            </motion.p>
          </motion.div>

          <div className="mt-10 lg:mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <motion.div
                className="relative lg:row-start-1 lg:col-start-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
              >
                <div className="relative text-base mx-auto lg:max-w-none">
                  <p className="text-gray-600 mb-6">
                    当社は、介護が必要なご高齢の方やそのご家族様に対して、最適な介護施設を見つけるお手伝いをする会社です。介護施設探しは時間と労力がかかるだけでなく、専門知識も必要とします。
                  </p>
                  <p className="text-gray-600 mb-6">
                    私たちは介護業界で長年の経験を持つスタッフが、お客様のご要望や状況を丁寧にヒアリングし、最適な施設をご提案します。費用面や立地、提供されるサービスなど、様々な角度から比較検討できるよう、わかりやすい情報提供を心がけています。
                  </p>
                  <p className="text-gray-600">
                    お客様の「安心」と「満足」を第一に考え、入居後も継続的なフォローアップを行い、より良い介護生活のサポートをいたします。
                  </p>
                </div>

                <table className="mt-8 w-full text-gray-600">
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <th className="py-4 text-left font-medium">会社名</th>
                      <td className="py-4">株式会社介護サポート</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <th className="py-4 text-left font-medium">設立</th>
                      <td className="py-4">2025年4月</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <th className="py-4 text-left font-medium">所在地</th>
                      <td className="py-4">
                        〒100-0000 北海道 札幌市
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <th className="py-4 text-left font-medium">電話番号</th>
                      <td className="py-4">123456789</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <th className="py-4 text-left font-medium">営業時間</th>
                      <td className="py-4">平日 9:00〜18:00（土日祝休）</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              <motion.div
                className="mt-10 -mx-4 lg:mt-0 lg:col-start-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInRight}
              >
                <div className="relative mx-auto lg:max-w-none h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="オフィスの様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="bg-indigo-50 py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
              variants={fadeInUp}
            >
              お問い合わせ
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              variants={fadeInUp}
            >
              まずはお気軽にご相談ください
            </motion.p>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              variants={fadeInUp}
            >
              介護施設探しでお悩みの方は、お電話またはフォームからお問い合わせください。
            </motion.p>
          </motion.div>

          <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-10 w-10 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      お電話でのお問い合わせ
                    </h3>
                    <p className="text-gray-600">平日 9:00〜18:00</p>
                    <p className="text-2xl font-bold text-indigo-600 mt-1">
                      03-1234-5678
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  介護に関するご相談は、経験豊富なスタッフが丁寧にお答えいたします。まずはお気軽にお電話ください。
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  お問い合わせフォーム
                </h3>
                <form action="#" method="POST" className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      お名前
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="03-1234-5678"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      お問い合わせ内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="ご質問やご要望をご記入ください"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      送信する
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">介護サポート</h3>
              <p className="text-gray-300 text-sm">
                高齢者の生活を豊かにする介護施設紹介サービス
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">サービス</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    介護施設紹介
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    入居手続きサポート
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    介護保険相談
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    施設見学同行
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    アフターフォロー
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">会社情報</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ミッション
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    スタッフ紹介
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    プライバシーポリシー
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <address className="not-italic text-gray-300 text-sm">
                <p>〒100-0000</p>
                <p>北海道 札幌市</p>
                <p className="mt-3">電話: 12234567899</p>
                <p>FAX: 03-1234-5679</p>
                <p className="mt-3">メール: info@example.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} 株式会社介護サポート All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
