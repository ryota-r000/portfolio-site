import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Hero Section Component
function HeroSection() {
  return (
    <motion.section
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-8 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div
          className="mb-6"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            佐藤　怜太
          </p>
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          ユーザー視点を大切にするエンジニア
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base"
          >
            <a href="#works">作品を見る</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="px-8 py-6 text-base border-foreground text-foreground hover:bg-secondary"
          >
            <a href="#contact">お問い合わせ</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// About Section
function AboutSection() {
  return (
    <motion.section
      className="py-20 md:py-32 px-4 md:px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-1"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-secondary rounded-lg aspect-square mb-6"></div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">強み</h3>
                <p className="text-muted-foreground leading-relaxed">
                  接客経験や講師経験を通して培った「伝える力」と「相手視点で整理する力」が強みです。
                  技術的な内容を分かりやすく言語化し、チーム内での認識のズレを減らすことを意識しています。
                  また、実装においてはユーザー視点を持ち、UIの使いやすさにも配慮しています。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">スキル</h3>
                <ul className="space-y-2 text-muted-foreground">

                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>実務経験:</strong> SQL（データ抽出・更新・集計）, Oracle, VBA（業務効率化ツール作成）
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Webアプリ開発（研修・個人制作）:</strong> Java, Spring Boot, MySQL, HTML, CSS, JavaScript
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>指導経験:</strong> Java, SQL, C など（基礎レベルの指導）
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>フロントエンド:</strong> React（学習中）
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>デザイン制作:</strong> Adobe Illustrator / Photoshop（ロゴ・ポストカード制作経験）
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>その他:</strong> Git / GitHub
                    </span>
                  </li>

                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}



// Project Card Component
function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  index,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}) {
  const [, navigate] = useLocation();
  const isExternalLink = link.startsWith("http://") || link.startsWith("https://");

  const handleClick = (e: React.MouseEvent) => {
    if (!isExternalLink) {
      e.preventDefault();
      navigate(link);
    }
  };

  return (
    <motion.div
      className="group"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <a
        href={link}
        onClick={handleClick}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        className="block"
      >
        <motion.div
          className="bg-secondary rounded-lg overflow-hidden mb-4 aspect-video"
          whileHover={{ scale: 1.02 }}
        >
          {image.startsWith("images/") || image.startsWith("/") ? (
            <img
              src={`${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`}
              alt={title}
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
              <span className="text-muted-foreground text-sm">{image}</span>
            </div>
          )}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-white border border-border rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>詳細を見る</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    </motion.div>
  );
}

// Works Section
function WorksSection() {
  const projects = [
    {
      title: "KEN Interior Shop",
      description:
        "家具メーカーの自社ECサイトを想定したWebショッピングシステム。チームリーダーとして進行管理・ルール整備を行い、認証・ログイン機能とセッション管理基盤を実装。",
      tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      image: "images/projects/ken-top-loggedin.png",
      link: "/project/ken-interior-shop",
    },
  ];

  return (
    <motion.section
      id="works"
      className="py-20 md:py-32 px-4 md:px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Works
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}





// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
          Portfolio
        </a>
        <div className="flex gap-8 items-center">
          <a href="#works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Works
          </a>
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

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorksSection />

      <Footer />
    </div>
  );
}
