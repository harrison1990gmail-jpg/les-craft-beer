import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  type: '到店精酿体验',
  people: '',
  date: '',
  message: ''
};

const leadsStorageKey = 'les_contact_leads';

function saveLead(form) {
  if (typeof window === 'undefined') return;

  const lead = {
    ...form,
    id: `lead-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: '新咨询'
  };

  const current = JSON.parse(window.localStorage.getItem(leadsStorageKey) || '[]');
  window.localStorage.setItem(leadsStorageKey, JSON.stringify([lead, ...current]));
  window.dispatchEvent(new Event('les-leads-updated'));
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveLead(form);
    setSent(true);
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-sm border border-black/10 bg-white p-5 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          姓名
          <input required name="name" value={form.name} onChange={updateField} className="focus-ring rounded-sm border border-black/12 px-4 py-3" placeholder="请输入姓名" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          联系电话
          <input required name="phone" value={form.phone} onChange={updateField} className="focus-ring rounded-sm border border-black/12 px-4 py-3" placeholder="请输入手机号" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          咨询类型
          <select name="type" value={form.type} onChange={updateField} className="focus-ring rounded-sm border border-black/12 px-4 py-3">
            <option>到店精酿体验</option>
            <option>企业团建</option>
            <option>私享包场</option>
            <option>商务酒会</option>
            <option>酒水合作</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          预计人数
          <input name="people" value={form.people} onChange={updateField} className="focus-ring rounded-sm border border-black/12 px-4 py-3" placeholder="例如 20 人" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          预计日期
          <input name="date" value={form.date} onChange={updateField} className="focus-ring rounded-sm border border-black/12 px-4 py-3" placeholder="例如 本周五" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        备注需求
        <textarea name="message" value={form.message} onChange={updateField} className="focus-ring min-h-32 rounded-sm border border-black/12 px-4 py-3" placeholder="请简单说明预算、场景、酒水偏好或活动要求" />
      </label>
      <button type="submit" className="focus-ring rounded-sm bg-ink px-6 py-4 font-black text-malt transition hover:bg-hop">
        提交咨询
      </button>
      {sent && <p className="rounded-sm bg-hop/10 px-4 py-3 text-sm font-semibold text-hop">需求已记录。正式上线后可接入企业微信、邮件或 CRM。</p>}
    </form>
  );
}
