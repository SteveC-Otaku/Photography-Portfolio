export const metadata = {
  title: '联系 | 陈成',
  description: '联系方式与社交媒体。',
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">联系</h1>
        <div className="space-y-8 text-fg-muted">
          <div>
            <span className="text-fg text-sm uppercase tracking-widest">邮箱</span>
            <p className="mt-2">
              <a
                href="mailto:hello@example.com"
                className="text-fg hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fg-muted rounded"
              >
                stevechen.otaku@qq.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
