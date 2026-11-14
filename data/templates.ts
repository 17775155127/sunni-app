export const templatesData = [
  // --- 租房居住 5套 ---
  {
    id: 'rent', name: '简易租房合同', category: '租房居住', desc: '个人之间普通租房使用的简易合同', tag: '会员',
    fields: [
      { key: 'landlord', label: '甲方（房东）姓名', placeholder: '例如：王五', type: 'text' },
      { key: 'tenant', label: '乙方（租客）姓名', placeholder: '例如：赵六', type: 'text' },
      { key: 'address', label: '房屋详细地址', placeholder: '例如：北京市朝阳区XX小区', type: 'textarea' },
      { key: 'rent', label: '月租金（元）', placeholder: '例如：3000', type: 'number' },
      { key: 'deposit', label: '押金（元）', placeholder: '例如：3000', type: 'number' },
    ],
  },
  {
    id: 'deposit', name: '押金退还申请书', category: '租房居住', desc: '退租交接完成后向房东申请退还押金', tag: '免费',
    fields: [
      { key: 'name', label: '申请人姓名', placeholder: '例如：张三', type: 'text' },
      { key: 'landlord', label: '房东姓名', placeholder: '例如：王五', type: 'text' },
      { key: 'amount', label: '申请退款金额', placeholder: '例如：3000', type: 'number' },
      { key: 'reason', label: '退款理由', placeholder: '例如：房屋设施完好，费用结清', type: 'textarea' },
    ],
  },
  {
    id: 'sublet', name: '房屋转租协议', category: '租房居住', desc: '经原房东同意的三方转租协议', tag: '会员',
    fields: [
      { key: 'landlord', label: '原房东姓名', placeholder: '例如：王五', type: 'text' },
      { key: 'sublessor', label: '转租人姓名', placeholder: '例如：赵六', type: 'text' },
      { key: 'sublessee', label: '次承租人姓名', placeholder: '例如：孙七', type: 'text' },
      { key: 'address', label: '房屋地址', placeholder: '例如：北京市朝阳区XX小区', type: 'textarea' },
    ],
  },
  {
    id: 'inspect', name: '租房验房清单', category: '租房居住', desc: '入住/退租时双方现场核验房屋物品与底数', tag: '免费',
    fields: [
      { key: 'address', label: '房屋地址', placeholder: '例如：北京市朝阳区XX小区', type: 'textarea' },
      { key: 'items', label: '家电家具情况', placeholder: '例如：空调1台、冰箱1台、床1张', type: 'textarea' },
      { key: 'meter', label: '水电气底数', placeholder: '例如：水表120，电表350，燃气50', type: 'textarea' },
    ],
  },
  {
    id: 'communicate', name: '房东沟通函', category: '租房居住', desc: '就房屋问题向房东书面提出整改要求', tag: '免费',
    fields: [
      { key: 'tenant', label: '租客姓名', placeholder: '例如：张三', type: 'text' },
      { key: 'landlord', label: '房东姓名', placeholder: '例如：王五', type: 'text' },
      { key: 'issue', label: '需要整改事项', placeholder: '例如：卫生间漏水需要维修', type: 'textarea' },
      { key: 'deadline', label: '要求完成期限', placeholder: '例如：2026年11月15日前', type: 'date' },
    ],
  },

  // --- 职场文书 6套 ---
  {
    id: 'resign', name: '离职申请书', category: '职场文书', desc: '体面、规范的正式离职申请', tag: '免费',
    fields: [
      { key: 'name', label: '申请人姓名', placeholder: '例如：李四', type: 'text' },
      { key: 'department', label: '所在部门', placeholder: '例如：技术部', type: 'text' },
      { key: 'date', label: '预计最后工作日', placeholder: '例如：2026年12月1日', type: 'date' },
      { key: 'reason', label: '离职原因', placeholder: '例如：个人发展原因', type: 'textarea' },
    ],
  },
  {
    id: 'negotiate', name: '解除劳动关系协商函', category: '职场文书', desc: '员工就劳动关系解除与公司协商', tag: '会员',
    fields: [
      { key: 'name', label: '员工姓名', placeholder: '例如：李四', type: 'text' },
      { key: 'company', label: '公司名称', placeholder: '例如：北京XX科技有限公司', type: 'text' },
      { key: 'reason', label: '协商事由', placeholder: '例如：公司提出协商解除合同', type: 'textarea' },
      { key: 'plan', label: '补偿方案', placeholder: '例如：期望补偿N+1个月工资', type: 'textarea' },
    ],
  },
  {
    id: 'resume', name: '个人简历', category: '职场文书', desc: '简约版个人简历，突出求职意向与经历', tag: '免费',
    fields: [
      { key: 'name', label: '姓名', placeholder: '例如：李四', type: 'text' },
      { key: 'phone', label: '电话', placeholder: '例如：13800138000', type: 'tel' },
      { key: 'job', label: '求职意向', placeholder: '例如：前端开发工程师', type: 'text' },
      { key: 'edu', label: '教育经历', placeholder: '例如：2018-2022 某某大学 计算机专业', type: 'textarea' },
      { key: 'work', label: '工作经历', placeholder: '例如：2022-2026 某某公司 前端开发', type: 'textarea' },
    ],
  },
  {
    id: 'weekly', name: '工作周报', category: '职场文书', desc: '结构化记录本周完成与下周计划', tag: '免费',
    fields: [
      { key: 'name', label: '汇报人姓名', placeholder: '例如：李四', type: 'text' },
      { key: 'week', label: '周报周期', placeholder: '例如：2026年第46周', type: 'text' },
      { key: 'done', label: '本周完成工作', placeholder: '例如：完成了XXX功能开发', type: 'textarea' },
      { key: 'plan', label: '下周计划', placeholder: '例如：开始XXX模块测试', type: 'textarea' },
    ],
  },
  {
    id: 'report', name: '述职报告大纲', category: '职场文书', desc: '按成果、不足、改进计划搭述职框架', tag: '会员',
    fields: [
      { key: 'name', label: '述职人姓名', placeholder: '例如：李四', type: 'text' },
      { key: 'result', label: '主要工作成果', placeholder: '例如：业绩增长20%', type: 'textarea' },
      { key: 'weak', label: '现存不足', placeholder: '例如：跨部门沟通效率待提升', type: 'textarea' },
      { key: 'plan', label: '改进计划', placeholder: '例如：引入周会机制', type: 'textarea' },
    ],
  },
  {
    id: 'transfer', name: '调岗申请', category: '职场文书', desc: '向公司提出岗位调整的书面申请', tag: '免费',
    fields: [
      { key: 'name', label: '申请人姓名', placeholder: '例如：李四', type: 'text' },
      { key: 'current', label: '原岗位', placeholder: '例如：测试工程师', type: 'text' },
      { key: 'target', label: '意向岗位', placeholder: '例如：产品经理', type: 'text' },
      { key: 'reason', label: '申请理由', placeholder: '例如：个人能力更匹配意向岗位', type: 'textarea' },
    ],
  },

  // --- 学生学业 4套 ---
  {
    id: 'leave', name: '请假条', category: '学生学业', desc: '学生向老师提交的规范请假条', tag: '免费',
    fields: [
      { key: 'name', label: '学生姓名', placeholder: '例如：张三', type: 'text' },
      { key: 'class_name', label: '班级', placeholder: '例如：高三一班', type: 'text' },
      { key: 'reason', label: '请假事由', placeholder: '例如：身体不适', type: 'textarea' },
      { key: 'time', label: '请假时间', placeholder: '例如：11月12日至11月13日', type: 'text' },
      { key: 'contact', label: '紧急联系人', placeholder: '例如：张父 13800138000', type: 'text' },
    ],
  },
  {
    id: 'intern', name: '实习证明', category: '学生学业', desc: '实习单位出具的实习经历证明', tag: '免费',
    fields: [
      { key: 'name', label: '学生姓名', placeholder: '例如：张三', type: 'text' },
      { key: 'school', label: '学校名称', placeholder: '例如：某某大学', type: 'text' },
      { key: 'company', label: '实习单位', placeholder: '例如：某某科技有限公司', type: 'text' },
      { key: 'position', label: '实习岗位', placeholder: '例如：运营助理', type: 'text' },
      { key: 'time', label: '实习起止时间', placeholder: '例如：2026年7月1日至8月31日', type: 'text' },
      { key: 'performance', label: '实习表现', placeholder: '例如：优秀', type: 'text' },
    ],
  },
  {
    id: 'thesis', name: '开题报告提纲', category: '学生学业', desc: '按背景、目的、方法、成果快速搭框架', tag: '会员',
    fields: [
      { key: 'topic', label: '课题名称', placeholder: '例如：基于AI的智能推荐系统研究', type: 'text' },
      { key: 'name', label: '学生姓名', placeholder: '例如：张三', type: 'text' },
      { key: 'advisor', label: '指导老师', placeholder: '例如：王教授', type: 'text' },
      { key: 'background', label: '研究背景', placeholder: '例如：随着互联网发展...', type: 'textarea' },
      { key: 'method', label: '研究方法', placeholder: '例如：文献研究法、实验法', type: 'textarea' },
    ],
  },
  {
    id: 'scholarship', name: '奖学金申请书', category: '学生学业', desc: '学生向学校提交的奖学金申请', tag: '免费',
    fields: [
      { key: 'name', label: '申请人姓名', placeholder: '例如：张三', type: 'text' },
      { key: 'class_name', label: '班级', placeholder: '例如：高三一班', type: 'text' },
      { key: 'reason', label: '申请理由', placeholder: '例如：成绩优异，积极参与各项活动', type: 'textarea' },
    ],
  },

  // --- 生活协议 3套 ---
  {
    id: 'borrow', name: '个人借条', category: '生活协议', desc: '个人之间借款的借条凭证', tag: '免费',
    fields: [
      { key: 'lender', label: '出借人', placeholder: '例如：张三', type: 'text' },
      { key: 'amount', label: '借款金额（元）', placeholder: '例如：5000', type: 'number' },
      { key: 'date', label: '借款日期', placeholder: '请选择日期', type: 'date' },
      { key: 'repay_date', label: '还款日期', placeholder: '请选择日期', type: 'date' },
    ],
  },
  {
    id: 'receipt', name: '收条', category: '生活协议', desc: '证明收到款项的简易收条', tag: '免费',
    fields: [
      { key: 'payee', label: '收款人', placeholder: '例如：张三', type: 'text' },
      { key: 'payer', label: '付款人', placeholder: '例如：李四', type: 'text' },
      { key: 'amount', label: '收款金额', placeholder: '例如：5000', type: 'number' },
      { key: 'item', label: '收款事项', placeholder: '例如：货款', type: 'text' },
      { key: 'date', label: '收款日期', placeholder: '请选择日期', type: 'date' },
    ],
  },
  {
    id: 'confirm', name: '收款确认单', category: '生活协议', desc: '多笔款项明细汇总的收款确认凭证', tag: '会员',
    fields: [
      { key: 'payee', label: '收款方', placeholder: '例如：张三', type: 'text' },
      { key: 'payer', label: '付款方', placeholder: '例如：李四', type: 'text' },
      { key: 'items', label: '款项明细', placeholder: '例如：项目尾款5000元', type: 'textarea' },
      { key: 'total', label: '总金额', placeholder: '例如：5000', type: 'number' },
      { key: 'time', label: '收款时间', placeholder: '请选择日期', type: 'date' },
    ],
  },

  // --- 清单表格 2套 ---
  {
    id: 'budget', name: '装修预算表', category: '生活协议', desc: '按硬装、主材、人工、软装拆分预算', tag: '会员',
    fields: [
      { key: 'area', label: '房屋面积', placeholder: '例如：100㎡', type: 'text' },
      { key: 'total', label: '总预算', placeholder: '例如：200000', type: 'number' },
      { key: 'hard', label: '硬装预算', placeholder: '例如：80000', type: 'number' },
      { key: 'material', label: '主材预算', placeholder: '例如：50000', type: 'number' },
      { key: 'labor', label: '人工预算', placeholder: '例如：30000', type: 'number' },
      { key: 'soft', label: '软装预算', placeholder: '例如：40000', type: 'number' },
    ],
  },
  {
    id: 'finance', name: '家庭收支表', category: '生活协议', desc: '按月汇总收入、固定支出、日常消费与结余', tag: '免费',
    fields: [
      { key: 'month', label: '统计月份', placeholder: '例如：2026年11月', type: 'text' },
      { key: 'income', label: '总收入', placeholder: '例如：20000', type: 'number' },
      { key: 'fixed', label: '固定支出', placeholder: '例如：房贷5000', type: 'text' },
      { key: 'daily', label: '日常消费', placeholder: '例如：3000', type: 'number' },
      { key: 'balance', label: '本月结余', placeholder: '例如：12000', type: 'number' },
    ],
  },
];