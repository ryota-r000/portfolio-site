import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Minimalism × Functional Beauty
 * - Clean, spacious layout with serif/sans-serif typography contrast
 * - Deep blue accent (#1E40AF) for trust and intelligence
 * - Asymmetric layout: left sidebar + right content area
 * - Subtle animations on scroll and hover
 */

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Navigation Component
function Navigation() {
  const [, navigate] = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
          className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Portfolio
        </button>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/#about");
            }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/#works");
            }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Works
          </button>
        </div>
      </div>
    </nav>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 bg-secondary border-t border-border">
      <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
      </div>
    </footer>
  );
}

// Image Gallery Component for Design Projects
// Display rules:
// - Single images (hero, logo, etc): Full width with contain to preserve aspect ratio
// - Multiple images (artworks, cards, etc): Grid layout with contain to preserve aspect ratio
// - Print materials (postcards, business cards, etc): Contained display with background
function ImageGallery({ images, title, type = 'default' }: { images: string | string[]; title: string; type?: 'hero' | 'artworks' | 'print' | 'default' }) {
  const imageArray = Array.isArray(images) ? images : [images];
  
  // Single image: Hero, Logo, Exhibition
  if (imageArray.length === 1) {
    const isSinglePrint = type === 'print';
    
    return (
      <motion.div
        variants={itemVariants}
        className={`w-full flex justify-center ${
          isSinglePrint ? 'bg-gray-50 rounded-lg p-8' : ''
        }`}
      >
        <img
          src={`${import.meta.env.BASE_URL}${imageArray[0]}`}
          alt={title}
          className={`rounded-lg shadow-md border border-border object-contain ${
            isSinglePrint
              ? 'max-w-md max-h-96'
              : 'w-full max-w-3xl h-auto'
          }`}
        />
      </motion.div>
    );
  }

  // Multiple images: Artworks or Print materials
  const isPrintMaterial = type === 'print';
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid gap-6 ${
        isPrintMaterial
          ? 'grid-cols-1 md:grid-cols-2'
          : 'grid-cols-2 md:grid-cols-3'
      }`}
    >
      {imageArray.map((image, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`flex items-center justify-center rounded-lg border border-border overflow-hidden ${
            isPrintMaterial
              ? 'bg-gray-50 p-4 min-h-80'
              : 'bg-white'
          }`}
        >
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={`${title} - ${index + 1}`}
            className={`object-contain ${
              isPrintMaterial
                ? 'w-full h-full max-h-72'
                : 'w-full h-auto'
            }`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Project Detail Page Component
export default function ProjectDetail(props: any) {
  const projectId = props.params?.projectId || props.projectId;
  const projects: Record<string, any> = {
    "ken-interior-shop": {
      title: "KEN Interior Shop",
      subtitle: "チーム開発 / ECサイト",
      description:
        "家具メーカーの自社ECサイトを想定したWebショッピングシステム（Spring Boot / Thymeleaf / MySQL）。",
      role: "チームリーダー（進行管理・ルール整備） / 担当：認証・ログイン機能／セッション管理基盤／フォームバリデーション",
      github: "https://github.com/ryota-r000/kenfurni",
      details: [
        {
          title: "目的",
          content:
            "会員（購入者）と従業員（管理者）の機能分離を前提に、誤操作と不正アクセスを抑えた認証基盤を構築する。",
        },
        {
          title: "セキュリティ",
          content:
            "パスワードはハッシュ化して保存（平文保持を回避）。",
        },
        {
          title: "設計",
          content:
            "セッション管理を共通化し、各画面から一貫した方法で認証状態を参照できる構成にした。",
        },
        {
          title: "判断",
          content:
            "チームの習熟度・学習コストを踏まえ、Spring Securityは使用せず自前実装（認証の内部構造を理解しながら実装）。",
        },
        {
          title: "運用",
          content:
            "Git運用ルール／コーディング規約を整備し、コンフリクトや差分事故を抑える開発環境を作った。",
        },
      ],
      screenshots: [
        {
          title: "① 未ログイン時：購入制御（権限分離）",
          description:
            "未ログイン状態では購入手続きに進めないよう制御し、意図しない操作や不正アクセスを防止。",
          image: "images/projects/ken-cart-guest.png",
        },
        {
          title: "② ログイン後：セッション情報の表示",
          description:
            "ログイン後はヘッダーにユーザー名・保有ポイントを表示。セッション管理により状態を一元化。",
          image: "images/projects/ken-top-loggedin.png",
        },
        {
          title: "③ ログイン後：ポイント適用・金額再計算",
          description:
            "保有ポイントと使用ポイントを反映し、合計金額を再計算。入力バリデーションと整合性を意識。",
          image: "images/projects/ken-cart-loggedin.png",
        },
        {
          title: "④ ログイン画面（入口）",
          description:
            "入力フォーム単位でバリデーションを実装。エラー時の案内や再入力のしやすさにも配慮。",
          image: "images/projects/ken-login.png",
        },
      ],
      techStack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"],
    },
    "fluid-art-brand": {
      title: "Fluid Art Brand Design",
      subtitle: "ブランディング / デザイン",
      description:
        "フルイドアート作品の制作と販売に伴うビジュアル制作を一貫して担当。ロゴ、ポストカード、名刺、展示用幕などをIllustrator・Photoshopで制作。",
      role: "アート作品制作 / ロゴデザイン・ポストカード・名刺・展示幕制作 / 印刷用データ作成",
      details: [
        {
          title: "ビジュアル戦略",
          content:
            "アート作品のコンセプトをロゴ・ポストカード・名刺などの販売ビジュアルに一貫性を持たせて展開。ブランドアイデンティティを統一。",
        },
        {
          title: "デザイン工夫",
          content:
            "フルイドアートの流動的な美しさを活かしながら、商品カードや展示物では視認性と情報整理を重視。",
        },
        {
          title: "印刷対応",
          content:
            "CMYK色空間での色調整、トンボ・塗足の設定など、印刷物としての完成度を意識した制作。",
        },
      ],
      images: {
        hero: "images/fluid-art/hero/hero-image-01.png",
        artworks: [
          "images/fluid-art/artworks/artwork-01.jpg",
          "images/fluid-art/artworks/artwork-02.jpg",
          "images/fluid-art/artworks/artwork-03.jpg",
        ],
        logo: "images/fluid-art/logo/logo-main.jpg",
        postcards: [
          "images/fluid-art/postcards/postcard-front-01.png",
          "images/fluid-art/postcards/postcard-back-01.png",
        ],
        businessCards: [
          "images/fluid-art/business-cards/business-card-front.png",
          "images/fluid-art/business-cards/business-card-back.png",
        ],
        exhibition: "images/fluid-art/exhibition/exhibition-visual-01.png",
      },
      techStack: ["Illustrator", "Photoshop", "Branding", "Print Design"],
    },
    "coffee-shop-visual": {
      title: "Coffee Shop Visual Design",
      subtitle: "デザイン / 印刷物",
      description:
        "ロゴデザインを含むブランド全体のビジュアル設計を担当。Illustratorを使用してロゴ制作を行い、商品カードおよびショップカードのデザインを制作。各印刷物へ一貫したデザイン展開を行いました。",
      role: "豆カード制作（3種・表裏） / ショップカード制作 / 印刷用データ作成",
      details: [
        {
          title: "ロゴデザイン",
          content:
            "ブランドイメージを象徴するロゴをIllustratorで制作。印刷物展開を前提に、視認性と汎用性を意識した設計を行いました。",
        },
        {
          title: "情報設計",
          content:
            "文字情報の優先順位を整理し、視認性と可読性を意識したレイアウト設計を行いました。",
        },
        {
          title: "印刷対応",
          content:
            "印刷を前提に、色味や余白バランスを調整しています。",
        },
      ],
      images: {
        hero: "images/coffee-shop/hero/hero-01.jpg",
        beanCards: [
          "images/coffee-shop/bean-cards/bean-card-front-01.png",
          "images/coffee-shop/bean-cards/bean-card-back-01.png",
          "images/coffee-shop/bean-cards/bean-card-front-02.png",
          "images/coffee-shop/bean-cards/bean-card-back-02.png",
          "images/coffee-shop/bean-cards/bean-card-front-03.png",
          "images/coffee-shop/bean-cards/bean-card-back-03.png",
        ],
        shopCard: "images/coffee-shop/shop-card/shop-card-01.png",
      },
      techStack: ["Illustrator", "Print Design", "Layout Design"],
    },
  };

  const project = projects[projectId];

  if (!project || !projectId) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Navigation />
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">プロジェクトが見つかりません</h1>
          <a href="/" className="text-primary hover:underline">
            ホームに戻る
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const isDesignProject = projectId === "fluid-art-brand" || projectId === "coffee-shop-visual";
  const isCoffeeShopProject = projectId === "coffee-shop-visual";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-8 py-20 pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl w-full">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              {project.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <span className="font-semibold text-foreground">役割：</span>
              {project.role}
            </p>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details Section */}
      <motion.section
        className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {isDesignProject ? "Design Approach" : "設計意図と実装内容"}
          </h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.details.map((detail: any) => (
              <motion.div
                key={detail.title}
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  <span className="text-primary">■</span> {detail.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {detail.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section - Different for Design vs Web Projects */}
      {isCoffeeShopProject ? (
        <>
          {/* Coffee Shop: Brand Image */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Brand Image
              </h2>
              <ImageGallery images={project.images.hero} title="Brand Image" type="hero" />
            </div>
          </motion.section>

          {/* Coffee Shop: Bean Cards - Main Focus */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Bean Card Design
              </h2>
              <ImageGallery images={project.images.beanCards} title="Bean Cards" type="print" />
            </div>
          </motion.section>

          {/* Coffee Shop: Shop Card */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Shop Card Design
              </h2>
              <div className="flex justify-center">
                <div className="max-w-sm w-full">
                  <ImageGallery images={project.images.shopCard} title="Shop Card" type="print" />
                </div>
              </div>
            </div>
          </motion.section>
        </>
      ) : isDesignProject ? (
        <>
          {/* Fluid Art: Hero Image */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Key Visual
              </h2>
              <ImageGallery images={project.images.hero} title="Hero Image" type="hero" />
            </div>
          </motion.section>

          {/* Design Project: Artworks */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Art Collection
              </h2>
              <ImageGallery images={project.images.artworks} title="Artworks" type="artworks" />
            </div>
          </motion.section>

          {/* Design Project: Logo */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Visual Identity
              </h2>
              <ImageGallery images={project.images.logo} title="Logo" />
            </div>
          </motion.section>

          {/* Design Project: Postcards */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Postcard Design
              </h2>
              <ImageGallery images={project.images.postcards} title="Postcards" type="print" />
            </div>
          </motion.section>

          {/* Design Project: Business Cards */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Business Card Design
              </h2>
              <ImageGallery images={project.images.businessCards} title="Business Cards" type="print" />
            </div>
          </motion.section>

          {/* Fluid Art: Exhibition */}
          <motion.section
            className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Exhibition Visual
              </h2>
              <ImageGallery images={project.images.exhibition} title="Exhibition Visual" type="print" />
            </div>
          </motion.section>
        </>
      ) : (
        /* Web Project: Screenshots */
        <motion.section
          className="py-20 md:py-32 px-4 md:px-8 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              実装内容と工夫点
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              権限制御 → セッション → ロジック の順で掲載
            </p>

            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {project.screenshots.map((screenshot: any) => (
                <motion.div
                  key={screenshot.title}
                  variants={itemVariants}
                  className="bg-secondary rounded-lg overflow-hidden border border-border"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">
                        {screenshot.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {screenshot.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={`${import.meta.env.BASE_URL}${screenshot.image}`}
                        alt={screenshot.title}
                        className="w-full h-auto rounded-lg shadow-md border border-border object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      <Footer />
    </div>
  );
}
