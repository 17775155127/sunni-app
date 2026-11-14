import { templatesData } from '@/data/templates';

export default function Home() {
  const categories = [
    { name: '租房居住', icon: '🏠', color: 'bg-blue-50 text-blue-600' },
    { name: '职场文书', icon: '💼', color: 'bg-green-50 text-green-600' },
    { name: '学生学业', icon: '🎓', color: 'bg-purple-50 text-purple-600' },
    { name: '生活协议', icon: '🤝', color: 'bg-orange-50 text-orange-600' },
  ];

  const hotTemplates = templatesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-10 max-w-md mx-auto border-x border-gray-200 shadow-xl">
      <div className="bg-white p-6 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex justify-between items-center mb-6">import { templatesData } from '@/data/templates';

export default function Home() {
  const categories = [
    { name: '租房居住', icon: '🏠', color: 'bg-blue-50 text-blue-600' },
    { name: '职场文书', icon: '💼', color: 'bg-green-50 text-green-600' },
    { name: '学生学业', icon: '🎓', color: 'bg-purple-50 text-purple-600' },
    { name: '生活协议', icon: '🤝', color: 'bg-orange-50 text-orange-600' },
  ];

  const hotTemplates = templatesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-10 max-w-md mx-auto border-x border-gray-200 shadow-xl">
      <div className="bg-white p-6 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-xl text-blue-600">速起</span>
          <a href="#pricing" className="text-sm text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition">
  获取无水印版
</a>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">海量文书模板，智能在线生成</h1>
        <p className="text-gray-500 text-sm mb-6">租房·职场·学业·生活</p>
        <div className="flex items-center bg-gray-100 rounded-lg p-3">
          <span className="text-gray-400 mr-2">🔍</span>
          <input type="text" placeholder="搜索模板，如“租房合同”" className="bg-transparent outline-none w-full text-sm text-gray-700" />
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            /* 改用 a 标签 */
            <a href={`/library?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mb-2 ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-gray-900">热门模板</h2>
          <a href="/library" className="text-sm text-gray-400 hover:text-blue-500">更多 &gt;</a>
        </div>
        <div className="space-y-3">
          {hotTemplates.map((tpl) => (
            /* 改用 a 标签 */
            <a href={`/templates/${tpl.id}`} key={tpl.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition block">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{tpl.name}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${tpl.tag === '会员' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                    {tpl.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{tpl.desc}</p>
              </div>
              <span className="text-gray-300 text-xl">›</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 px-6 text-center">
        <p className="text-xs text-gray-400 leading-relaxed">
          本站提供的全部文书模板仅为通用参考文本，不构成法律意见。<br />
          涉及重大权益请咨询执业律师。<br /><br />
          关于 · 隐私 · 协议
        </p>
      </div>
    </div>
  );
}
          <span className="font-bold text-xl text-blue-600">速起</span>
          <button className="text-sm text-gray-500 border border-gray-200 px-3 py-1 rounded-full">登录/注册</button>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">海量文书模板，智能在线生成</h1>
        <p className="text-gray-500 text-sm mb-6">租房·职场·学业·生活</p>
        <div className="flex items-center bg-gray-100 rounded-lg p-3">
          <span className="text-gray-400 mr-2">🔍</span>
          <input type="text" placeholder="搜索模板，如“租房合同”" className="bg-transparent outline-none w-full text-sm text-gray-700" />
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            /* 改用 a 标签 */
            <a href={`/library?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mb-2 ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-gray-900">热门模板</h2>
          <a href="/library" className="text-sm text-gray-400 hover:text-blue-500">更多 &gt;</a>
        </div>
        <div className="space-y-3">
          {hotTemplates.map((tpl) => (
            /* 改用 a 标签 */
            <a href={`/templates/${tpl.id}`} key={tpl.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition block">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{tpl.name}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${tpl.tag === '会员' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                    {tpl.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{tpl.desc}</p>
              </div>
              <span className="text-gray-300 text-xl">›</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 px-6 text-center">
        <p className="text-xs text-gray-400 leading-relaxed">
          本站提供的全部文书模板仅为通用参考文本，不构成法律意见。<br />
          涉及重大权益请咨询执业律师。<br /><br />
          关于 · 隐私 · 协议
        </p>
      </div>
    </div>
  );
}
