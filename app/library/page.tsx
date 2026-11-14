'use client';
import { useState, useEffect } from 'react';
import { templatesData } from '@/data/templates';

export default function LibraryPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');

  // 在页面加载时，读取网址栏里的 category 参数
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat) setActiveCategory(cat);
  }, []);

  const categories = ['全部', '租房居住', '职场文书', '学生学业', '生活协议'];

  const filteredTemplates = templatesData.filter((tpl) => {
    const matchSearch = tpl.name.includes(search) || tpl.desc.includes(search);
    const matchCategory = activeCategory === '全部' || tpl.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto border-x border-gray-200 shadow-xl pb-10">
      <div className="bg-white sticky top-0 z-10 shadow-sm p-4 rounded-b-2xl">
        <div className="flex items-center mb-4">
          <a href="/" className="text-gray-600 mr-4 text-xl">‹</a>
          <h1 className="font-bold text-gray-900 text-lg">全部模板</h1>
        </div>
        
        <div className="flex items-center bg-gray-100 rounded-xl p-3">
          <span className="text-gray-400 mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="搜索文书名称或用途..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm text-gray-700" 
          />
        </div>

        <div className="flex overflow-x-auto gap-2 mt-4 pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white font-medium shadow-md shadow-blue-500/20' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-3">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((tpl) => (
            /* 改用 a 标签 */
            <a href={`/templates/${tpl.id}`} key={tpl.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:shadow-md transition block">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{tpl.name}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${tpl.tag === '会员' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                    {tpl.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1">{tpl.desc}</p>
              </div>
              <span className="text-gray-300 text-xl">›</span>
            </a>
          ))
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-4">📭</div>
            <p>没有找到相关的模板</p>
            <button onClick={() => {setSearch(''); setActiveCategory('全部')}} className="text-blue-500 text-sm mt-4 hover:underline">
              清空筛选条件
            </button>
          </div>
        )}
      </div>
    </div>
  );
}