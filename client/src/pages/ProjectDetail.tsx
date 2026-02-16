import { Mail, Github, Linkedin, ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

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
      github: "https://github.com",
      sections: [
        {
          title: "プロジェクト目的",
          content:
            "会員（購入者）と従業員（管理者）の機能分離を前提に、誤操作と不正アクセスを抑えた認証基盤を構築する。",
        },
        {
          title: "セキュリティ",
          content:
            "パスワードはハッシュ化して保存（平文保持を回避）。セッション管理を共通化し、各画面から一貫した方法で認証状態を参照できる構成にした。",
        },
        {
          title: "設計判断",
          content:
            "チームの習熟度・学習コストを踏まえ、Spring Securityは使用せず自前実装（認証の内部構造を理解しながら実装）。",
        },
        {
          title: "運用・チームマネジメント",
          content:
            "Git運用ルール／コーディング規約を整備し、コンフリクトや差分事故を抑える開発環境を作った。",
        },
      ],
      screenshots: [
        {
          title: "ログイン画面",
          description:
            "会員・従業員の役割に応じた認証画面。パスワードハッシュ化により、セキュアなログイン機能を実装。",
          image: "Screenshot 1",
        },
        {
          title: "商品一覧画面",
          description:
            "家具商品の一覧表示。購入者向けの直感的なUI設計で、商品検索・フィルタリング機能を備える。",
          image: "Screenshot 2",
        },
        {
          title: "管理画面",
          description:
            "従業員向けの管理画面。商品管理・注文管理・ユーザー管理などの機能を集約。",
          image: "Screenshot 3",
        },
        {
          title: "カート・決済画面",
          description:
            "セッション管理に基づいたカート機能。ユーザーの購買フロー全体を設計。",
          image: "Screenshot 4",
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
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {project.description}
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

          <div className="space-y-12">
            {project.sections.map((section: any, index: number) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {section.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Role & Responsibility Section */}
      <motion.section
        className="py-20 md:py-32 px-4 md:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">役割と責務</h2>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            <p>{project.role}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Screenshots Section */}
      <motion.section
        className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">スクリーンショット</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {project.screenshots.map((screenshot: any, index: number) => (
              <motion.div
                key={screenshot.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-border">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      {screenshot.image}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {screenshot.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
