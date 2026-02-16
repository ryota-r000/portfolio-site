import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Code2, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
            Web Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            UI/UX志向のフルスタックエンジニア
          </p>
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          技術力とデザイン思考を融合させ、ユーザーにとって本当に価値のあるプロダクトを作ります。
          エンジニア×デザイナーの視点で、思考プロセスから実装まで、丁寧に仕事をします。
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
            <h3 className="text-lg font-semibold mb-2">Web Developer</h3>
            <p className="text-sm text-muted-foreground">
              Java + Spring Boot でのバックエンド開発から、
              HTML/CSS/JavaScript でのフロントエンド開発まで、
              フルスタック開発が可能です。
            </p>
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
                <h3 className="text-xl font-semibold mb-3">スキル</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>バックエンド:</strong> Java, Spring Boot, MySQL
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>フロントエンド:</strong> HTML, CSS, JavaScript,
                      React
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>デザイン:</strong> Figma, Adobe Illustrator,
                      Photoshop
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>その他:</strong> Git/GitHub, UI/UX設計, 講師経験
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">強み</h3>
                <p className="text-muted-foreground leading-relaxed">
                  講師経験を通じて培った「伝える力」と「教える力」が強みです。
                  複雑な技術概念を分かりやすく説明でき、チーム内のコミュニケーションを円滑にします。
                  また、エンジニアとしての論理性とデザイナーとしての美的感覚を両立させ、
                  ユーザーにとって本当に価値のあるプロダクト開発を目指しています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Philosophy Section
function PhilosophySection() {
  return (
    <motion.section
      className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Philosophy
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              技術力と美学の融合
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              エンジニアとしての論理性と、デザイナーとしての美的感覚を融合させることで、
              単なる「動く」プロダクトではなく、「使いたくなる」プロダクトを作ります。
              技術的な堅牢性とUIの優雅さは、決して相反するものではなく、
              むしろ両者が調和したときに最高のユーザー体験が生まれます。
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Palette className="w-6 h-6 text-primary" />
              ユーザー中心の設計思想
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              「なぜこの機能が必要なのか」「ユーザーはどのような課題を抱えているのか」を常に問い続けます。
              単なる成果物の紹介ではなく、設計思想や改善プロセスを明確に伝えることで、
              課題解決への姿勢とプロダクトへの想いを示します。
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              継続的な学習と改善
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              UI/UX領域への強い関心を持ち、Figmaなどのデザインツールを学習中です。
              フロントエンド技術の最新トレンドを追い、常に自分のスキルセットを拡張しています。
              将来的には、フロントエンド/UI領域でのキャリア展開を目指しています。
            </p>
          </motion.div>
        </motion.div>
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
  return (
    <motion.div
      className="group"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <motion.div
          className="bg-secondary rounded-lg overflow-hidden mb-4 aspect-video"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
            <span className="text-muted-foreground text-sm">{image}</span>
          </div>
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
      title: "タスク管理アプリ",
      description:
        "チーム内のタスク管理を効率化するWebアプリケーション。ドラッグ&ドロップで優先順位を変更でき、直感的な操作性を実現しました。",
      tags: ["Java", "Spring Boot", "MySQL", "React", "UI/UX"],
      image: "Project 1",
      link: "https://github.com",
    },
    {
      title: "ポートフォリオサイト",
      description:
        "エンジニアとしての技術力とデザイン思考を伝えるポートフォリオサイト。ミニマリズムの設計思想を実装し、シンプルながら洗練された印象を表現。",
      tags: ["React", "Tailwind CSS", "TypeScript", "デザイン"],
      image: "Project 2",
      link: "https://github.com",
    },
    {
      title: "ロゴデザイン",
      description:
        "カフェブランド向けのロゴデザイン。爽やかさと親近感を表現するため、青色と手書き風フォントを採用。",
      tags: ["Illustrator", "ブランディング", "デザイン"],
      image: "Design 1",
      link: "#",
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

// Skills Section
function SkillsSection() {
  const skills = {
    "Backend": ["Java", "Spring Boot", "MySQL", "REST API"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Design": ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    "Tools": ["Git", "GitHub", "VS Code"],
  };

  return (
    <motion.section
      className="py-20 md:py-32 px-4 md:px-8 bg-secondary"
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
          Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 md:py-32 px-4 md:px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          ご質問やご相談があれば、お気軽にお問い合わせください。
          転職エージェント経由でのお問い合わせにも対応しています。
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base"
            >
              <a href="mailto:contact@example.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                メールで連絡
              </a>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              asChild
              className="px-8 py-6 text-base border-foreground text-foreground hover:bg-secondary"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              asChild
              className="px-8 py-6 text-base border-foreground text-foreground hover:bg-secondary"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
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
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
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
      <PhilosophySection />
      <WorksSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
