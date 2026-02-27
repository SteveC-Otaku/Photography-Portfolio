import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-fg-accent/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="text-fg-muted">© {new Date().getFullYear()} 陈成</span>
        <div className="flex items-center gap-6">
          <a
            href="mailto:stevechen.otaku@qq.com"
            className="text-fg-accent link-underline focus:outline-none focus:ring-2 focus:ring-fg-muted rounded"
          >
            邮箱 stevechen.otaku@qq.com
          </a>
          <Link href="/about" className="text-fg link-underline hover:text-fg focus:outline-none focus:ring-2 focus:ring-fg-muted rounded">
            关于
          </Link>
        </div>
      </div>
    </footer>
  );
}
