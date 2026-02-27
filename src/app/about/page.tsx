export const metadata = {
  title: '关于 | Cheng Chen',
  description: '摄影师简介与创作方向。',
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">关于</h1>
        <div className="text-fg-muted leading-relaxed space-y-4">
          <p>我从 2024 年开始正式进行系统的摄影创作。</p>
          <p>
            在高中时期，我第一次接触 Lightroom 后期处理。那时主要在学校社团参与照片调色与基础修图，这段经历让我对影像产生兴趣，也开始关注色彩与光线对画面的影响。
          </p>
          <p>
            2024 年赴澳留学后，我购入了自己的第一台相机，开始持续拍摄与实践。从日常记录、人像与风景拍摄出发，逐渐形成对画面氛围与光线控制的个人理解。
          </p>
          <p>
            在悉尼期间，我因拍摄机会接触到当地电影专业学生剧组，开始为剧组拍摄剧照。随后逐步参与到影视制作现场，学习影视布光，并参与微电影与短剧项目。
          </p>
          <p>在剧组中，我曾担任：</p>
          <ul className="list-disc list-inside space-y-1">
            <li>剧照摄影</li>
            <li>灯光师</li>
            <li>B 机掌机</li>
            <li>现场布光与画面执行</li>
          </ul>
          <p>同时，我也参与过商业短剧的制作项目。</p>
          <p>除了剧组工作，我持续进行个人摄影创作。拍摄内容包括：</p>
          <ul className="list-disc list-inside space-y-1">
            <li>人像摄影</li>
            <li>风景与城市记录</li>
            <li>日常纪实</li>
            <li>氛围与概念拍摄</li>
          </ul>
          <p>
            我的创作更关注光线的层次与画面整体氛围，希望在现实场景中建立具有电影感的视觉表达。
          </p>
          <p>目前，我持续在摄影与影视制作之间实践与学习，让每一帧画面都更加完整。</p>
        </div>
      </div>
    </div>
  );
}
