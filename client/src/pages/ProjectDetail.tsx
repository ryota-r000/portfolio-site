import { Github, ArrowLeft } from "lucide-react";
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
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Portfolio
        </button>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => navigate("/#works")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Works
          </button>
          <button
            onClick={() => navigate("/#contact")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
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
        <p>© 2024 Web Engineer Portfolio. All rights reserved.</p>
      </div>
    </footer>
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
          image: "/images/projects/ken-cart-guest.png",
        },
        {
          title: "② ログイン後：セッション情報の表示",
          description:
            "ログイン後はヘッダーにユーザー名・保有ポイントを表示。セッション管理により状態を一元化。",
          image: "/images/projects/ken-top-loggedin.png",
        },
        {
          title: "③ ログイン後：ポイント適用・金額再計算",
          description:
            "保有ポイントと使用ポイントを反映し、合計金額を再計算。入力バリデーションと整合性を意識。",
          image: "/images/projects/ken-cart-loggedin.png",
        },
        {
          title: "④ ログイン画面（入口）",
          description:
            "入力フォーム単位でバリデーションを実装。エラー時の案内や再入力のしやすさにも配慮。",
          image: "/images/projects/ken-login.png",
        },
      ],
      techStack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"],
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
              {project.role.split(" / ")[0]}
              <br />
              <span className="font-semibold text-foreground">担当：</span>
              {project.role.split(" / ")[1]}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub で見る
            </a>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12">プロジェクト詳細</h2>

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

      {/* Screenshots Section */}
      <motion.section
        className="py-20 md:py-32 px-4 md:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            スクリーンショット
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
            {project.screenshots.map((screenshot: any, index: number) => (
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
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-auto rounded-lg shadow-md border border-border object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 p-6 bg-secondary rounded-lg border border-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">※ 補足：</span>
              画像は <code className="bg-white px-2 py-1 rounded">img/</code> 配下に配置しています。可能ならログイン画面は「エラー表示（未入力・誤入力）」の状態のスクショも用意すると、より強く伝わります。
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
