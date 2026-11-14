'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { templatesData } from '@/data/templates';

export default function TemplateFormPage() {
  const params = useParams();
  const id = params.id as string;
  const template = templatesData.find((t) => t.id === id);
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. 读取本地缓存
  useEffect(() => {
    const saved = localStorage.getItem(`draft_${id}`);
    if (saved) {
      try { setFormData(JSON.parse(saved)); } catch (e) {}
    }
    setIsLoaded(true);
  }, [id]);

  // 2. 自动保存本地缓存
  useEffect(() => {
    if (isLoaded && formData) {
      localStorage.setItem(`draft_${id}`, JSON.stringify(formData));
    }
  }, [formData, isLoaded, id]);

  if (!template) return <div className="p-10 text-center text-gray-500">模板不存在</div>;

  // 3. 表单校验
  const isFormValid = template.fields.every((f) => formData[f.key]?.trim());

  // 4. 填表页面渲染
  const renderForm = () => (
    <div className="w-full max-w-md mx-auto pb-24">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-xl font-bold mb-1">填写{template.name}信息</h2>
          <p className="text-blue-100 text-sm opacity-90">请按实际情况填写，系统已为您自动保存草稿</p>
        </div>
        
        <div className="p-6 space-y-6">
          {template.fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                <span>{field.label}</span>
                <span className="text-red-500">*</span>
              </label>
              {/* 动态判断：如果是多行文本，渲染 textarea；否则渲染 input */}
              {(field as any).type === 'textarea' ? (
                <textarea
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-gray-900 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 min-h-[120px] resize-y"
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  type={(field as any).type || 'text'} // 根据数据里的 type 渲染（比如 date, number）
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-gray-900 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 5. 文档排版渲染
  const renderDocument = () => {
    // 深拷贝一份数据，用于格式化
    const d = { ...formData }; 
    
    // 自动把所有日期格式（YYYY-MM-DD）转成中文格式（YYYY年MM月DD日）
    template.fields.forEach(field => {
      if ((field as any).type === 'date' && d[field.key]) {
        const parts = d[field.key].split('-');
        if (parts.length === 3) {
          d[field.key] = `${parts[0]}年${parseInt(parts[1])}月${parseInt(parts[2])}日`;
        }
      }
    });

    return (
      <div className="bg-white p-8 sm:p-14 shadow-2xl shadow-gray-200/50 border border-gray-100 rounded-sm min-h-[700px] print:shadow-none print:border-none print:p-0 print:min-h-0">
        <h1 className="text-3xl font-bold text-center mb-12 tracking-widest text-black" style={{ fontFamily: '"SimSun", "STSong", serif' }}>
          {template.name}
        </h1>
        
        <div className="text-lg leading-loose text-black" style={{ fontFamily: '"SimSun", "STSong", "Songti SC", serif' }}>
          
          {id === 'borrow' && (
            <>
              <p className="indent-8 mb-4">今借到 <span className="font-bold border-b border-gray-400 px-2">{d.lender}</span> 人民币 <span className="font-bold border-b border-gray-400 px-4">{d.amount}</span> 元整。</p>
              <p className="indent-8 mb-12">借款日期：{d.date}。双方约定于 {d.repay_date || '_________'} 前归还，特立此据。</p>
              <div className="flex flex-col items-end mt-24 space-y-6">
                <p>借款人签字：<span className="inline-block w-40 border-b border-gray-400"></span></p>
                <p>日期：<span className="inline-block w-40 border-b border-gray-400"></span></p>
              </div>
            </>
          )}

          {id === 'rent' && (
            <>
              <p className="mb-4">甲方（出租方）：<span className="font-bold border-b border-gray-400 px-2">{d.landlord}</span></p>
              <p className="mb-4">乙方（承租方）：<span className="font-bold border-b border-gray-400 px-2">{d.tenant}</span></p>
              <p className="indent-8 mb-4 mt-8">甲方将位于 <span className="font-bold border-b border-gray-400 px-2">{d.address}</span> 的房屋出租给乙方使用。</p>
              <p className="indent-8 mb-16">双方约定月租金为 <span className="font-bold border-b border-gray-400 px-2">{d.rent}</span> 元，房屋押金为 <span className="font-bold border-b border-gray-400 px-2">{d.deposit}</span> 元。本合同一式两份，签字生效。</p>
              <div className="flex justify-between mt-24">
                <p>甲方签字：<span className="inline-block w-32 border-b border-gray-400"></span></p>
                <p>乙方签字：<span className="inline-block w-32 border-b border-gray-400"></span></p>
              </div>
            </>
          )}

          {id === 'resign' && (
            <>
              <p className="mb-6">尊敬的领导：</p>
              <p className="indent-8 mb-4">您好！本人 <span className="font-bold border-b border-gray-400 px-2">{d.name}</span>，任职于 <span className="font-bold border-b border-gray-400 px-2">{d.department}</span>。因 <span className="font-bold border-b border-gray-400 px-2">{d.reason}</span>，现正式向公司提出离职申请。</p>
              <p className="indent-8 mb-4">预计最后工作日为 <span className="font-bold border-b border-gray-400 px-2">{d.date}</span>，在职剩余时间我会做好手头工作交接。</p>
              <p className="indent-8 mb-16">感谢公司这段时间给予的培养与照顾。望予以批准。</p>
              <div className="flex flex-col items-end mt-24 space-y-6">
                <p>申请人：<span className="inline-block w-40 border-b border-gray-400"></span></p>
                <p>日期：<span className="inline-block w-40 border-b border-gray-400"></span></p>
              </div>
            </>
          )}

          {id === 'leave' && (
            <>
              <p className="mb-6">老师：</p>
              <p className="indent-8 mb-4">本人 <span className="font-bold border-b border-gray-400 px-2">{d.name}</span>，<span className="font-bold border-b border-gray-400 px-2">{d.class_name}</span>学生。因 <span className="font-bold border-b border-gray-400 px-2">{d.reason}</span>，申请 <span className="font-bold border-b border-gray-400 px-2">{d.time}</span> 休假。</p>
              <p className="indent-8 mb-4">紧急联系人：{d.contact}。</p>
              <p className="indent-8 mb-16">离校期间安全自行负责，恳请批准。</p>
              <div className="flex flex-col items-end mt-24 space-y-6">
                <p>申请人：<span className="inline-block w-40 border-b border-gray-400"></span></p>
                <p>日期：<span className="inline-block w-40 border-b border-gray-400"></span></p>
              </div>
            </>
          )}

          {id === 'resume' && (
            <>
              <div className="mb-8 border-b-2 border-gray-800 pb-4">
                <h2 className="text-3xl font-bold mb-2">{d.name}</h2>
                <p className="text-gray-600">求职意向：{d.job}</p>
                <p className="text-gray-600 mt-1">电话：{d.phone}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800 border-l-4 border-blue-600 pl-3">教育经历</h3>
                <p className="whitespace-pre-wrap leading-relaxed">{d.edu}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800 border-l-4 border-blue-600 pl-3">工作经历</h3>
                <p className="whitespace-pre-wrap leading-relaxed">{d.work}</p>
              </div>
            </>
          )}

          {id === 'weekly' && (
            <>
              <div className="mb-8 text-center">
                <p className="text-gray-600">汇报人：{d.name} | 周期：{d.week}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">✅ 本周已完成工作</h3>
                <p className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg leading-relaxed">{d.done}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">📌 下周工作计划</h3>
                <p className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg leading-relaxed">{d.plan}</p>
              </div>
            </>
          )}

          {id === 'deposit' && (
            <>
              <p className="mb-4">房东：<span className="font-bold border-b border-gray-400 px-2">{d.landlord}</span></p>
              <p className="indent-8 mb-4 mt-8">本人 <span className="font-bold border-b border-gray-400 px-2">{d.name}</span>，现申请退还租房押金。</p>
              <p className="indent-8 mb-4">申请退款金额为人民币 <span className="font-bold border-b border-gray-400 px-2">{d.amount}</span> 元。</p>
              <p className="indent-8 mb-12">退款理由：{d.reason}。房屋设施完好，各项费用均已结清，望批准。</p>
              <div className="flex flex-col items-end mt-24 space-y-6">
                <p>申请人：<span className="inline-block w-40 border-b border-gray-400"></span></p>
                <p>日期：<span className="inline-block w-40 border-b border-gray-400"></span></p>
              </div>
            </>
          )}

          {!['borrow', 'rent', 'resign', 'leave', 'resume', 'weekly', 'deposit'].includes(id) && (
            <>
              <div className="mb-10 text-center text-gray-500 font-sans text-sm print:hidden">
                (以下为信息汇总预览)
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12 print:bg-white print:p-0 print:border-none">
                {template.fields.map(field => (
                  <p key={field.key} className="mb-4 flex flex-col sm:flex-row sm:items-baseline">
                    <span className="text-gray-500 w-32 shrink-0">{field.label}：</span>
                    <span className="font-bold border-b border-gray-400 px-2 inline-block min-w-[200px] whitespace-pre-wrap">
                      {d[field.key]}
                    </span>
                  </p>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] pb-10 print:bg-white print:pb-0">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50 print:hidden">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          {showResult ? (
            <button onClick={() => setShowResult(false)} className="text-gray-600 hover:text-gray-900 text-sm flex items-center font-medium">
              <span className="text-lg mr-1">‹</span> 返回修改
            </button>
          ) : (
            <a href="/" className="text-gray-600 hover:text-gray-900 text-sm flex items-center font-medium">
              <span className="text-lg mr-1">‹</span> 返回首页
            </a>
          )}
          <h1 className="font-bold text-gray-800">{template.name}</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-6 print:pt-0">
        {!showResult ? (
          <>
            {renderForm()}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 pb-safe print:hidden">
              <div className="max-w-md mx-auto">
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!isFormValid}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none disabled:active:scale-100 transition-all flex justify-center items-center gap-2"
                >
                  <span>生成专业文档</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6 print:hidden">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                文档已生成
              </div>
              <button 
                onClick={() => window.print()} 
                className="bg-gray-900 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-black transition text-sm font-medium flex items-center gap-2"
              >
                <span>🖨️</span> 导出/打印 PDF
              </button>
            </div>
            
            {renderDocument()}
            
            <div className="mt-8 bg-amber-50/80 border border-amber-200/60 p-4 rounded-2xl text-sm text-amber-800 flex items-start gap-3 print:hidden">
              <span className="text-lg">💡</span>
              <div>
                <strong className="block mb-1">导出建议</strong>
                点击上方按钮后，在弹出的打印设置中，找到“更多设置”，取消勾选<strong>“页眉和页脚”</strong>，即可获得最干净的白纸效果。
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}