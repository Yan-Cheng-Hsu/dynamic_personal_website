# 📧 Resend 設定指南

Resend 是專業的 Email API 服務，比 Gmail SMTP 更簡單、更可靠！

---

## ✨ 為什麼選擇 Resend？

- ✅ **不需要 Gmail 密碼** - 只需要 API Key
- ✅ **不需要 2FA** - 簡單註冊即可
- ✅ **免費額度** - 3,000 emails/月，對個人網站綽綽有餘
- ✅ **更可靠** - 專業郵件服務，到達率高
- ✅ **更快速** - 5 分鐘完成設定
- ✅ **更專業** - 未來可以用自己的域名發信

---

## 🚀 5 分鐘快速設定

### Step 1: 註冊 Resend 帳號 (2 分鐘)

1. **去 Resend 官網**:
   ```
   https://resend.com
   ```

2. **點擊右上角 "Sign Up"**

3. **選擇註冊方式** (推薦用 GitHub):
   - 🔵 **Sign up with GitHub** ⭐ 最快（1 click）
   - 或用 Email 註冊

4. **完成註冊**
   - 如果用 GitHub：授權後直接完成
   - 如果用 Email：檢查信箱確認郵件

---

### Step 2: 獲取 API Key (1 分鐘)

註冊完成後會自動跳轉到 Dashboard：

1. **左側選單點擊 "API Keys"**
   - 或直接去：https://resend.com/api-keys

2. **點擊 "Create API Key" 按鈕**

3. **填寫資訊**:
   - **Name**: `Portfolio Website` (或任何你想要的名字)
   - **Permission**: 選擇 **"Sending access"** (預設)
   - **Domain**: 選擇 **"All domains"** (預設)

4. **點擊 "Add"**

5. **複製 API Key**:
   ```
   會顯示類似：re_123abc456def789_YourApiKey
   ```

   ⚠️ **重要**: 這個 key 只會顯示一次！立刻複製並儲存

---

### Step 3: 設定環境變數 (1 分鐘)

#### 本地開發 (.env.local)

1. **打開** `/mydynamicweb/.env.local`

2. **更新 RESEND_API_KEY**:
   ```env
   RESEND_API_KEY=re_你剛才複製的API_Key
   ```

3. **儲存檔案**

#### Vercel Production (部署時設定)

稍後部署到 Vercel 時，在環境變數設定：
```
Key:   RESEND_API_KEY
Value: re_你的API_Key
```

---

### Step 4: 重啟 Dev Server (30 秒)

```bash
# 停止當前 server (按 Ctrl+C)

# 重新啟動
npm run dev
```

---

### Step 5: 測試發送 Email! (1 分鐘)

1. **打開瀏覽器**: http://localhost:3001

2. **滾動到 Schedule Section**

3. **填寫測試表單**:
   - Email: `test@example.com`
   - Company: `Test Company`
   - Role: `Test Role`
   - Message: `Testing Resend integration!`

4. **點擊 "Request a Call"**

5. **檢查你的 Gmail inbox**: `bill.ych.jobs@gmail.com`

**成功的話** 你會收到：
- ✉️ 漂亮的 HTML email
- 📧 寄件者顯示: `Portfolio <onboarding@resend.dev>`
- 📊 主旨: `🚀 New Schedule Request from Test Company`

---

## 📊 查看發送記錄

Resend 提供完整的 email dashboard：

1. **去 Resend Dashboard**: https://resend.com/emails

2. **你可以看到**:
   - ✅ 所有已發送的 emails
   - 📈 發送狀態 (Sent / Delivered / Bounced)
   - 📧 Email 內容預覽
   - 📊 統計數據

非常方便追蹤！

---

## 🎨 未來升級：使用自己的域名 (可選)

現在你的 email 寄件者是 `onboarding@resend.dev`（Resend 的測試域名）。

如果你有自己的域名（例如：`billhsu.com`），可以：

### Step 1: 新增域名到 Resend

1. Resend Dashboard → **"Domains"**
2. 點擊 **"Add Domain"**
3. 輸入你的域名：`billhsu.com`
4. Resend 會提供 DNS 設定

### Step 2: 設定 DNS Records

在你的域名管理介面（如 Cloudflare、Namecheap）新增：
- **SPF Record**
- **DKIM Record**
- **DMARC Record**

Resend 會給你完整的設定指示。

### Step 3: 驗證域名

DNS 設定完成後，回到 Resend 點擊 **"Verify"**。

### Step 4: 更新 code

在 `/api/schedule.ts` 改成：
```typescript
from: 'Bill Hsu <notifications@billhsu.com>',
```

---

## 🆓 免費額度說明

Resend 免費方案：
- **3,000 emails/月**
- **100 emails/天**
- **無限 API keys**
- **Email analytics**
- **Webhook 支援**

對於個人 portfolio 網站完全夠用！

如果超過：
- **Pro Plan**: $20/月 - 50,000 emails
- **只有在你真的需要時才升級**

---

## 🔐 安全最佳實踐

### ✅ DO (該做的)

1. **不要 commit .env.local** 到 Git（已在 .gitignore）
2. **API Key 只儲存在環境變數**
3. **定期更換 API Key**（每 90 天）
4. **使用不同的 API Key** 給不同環境
5. **如果 key 洩露**：立刻在 Resend Dashboard 刪除

### ❌ DON'T (不該做的)

1. ❌ 不要把 API Key 寫在程式碼裡
2. ❌ 不要分享 API Key
3. ❌ 不要在 public repository 暴露 key
4. ❌ 不要在 screenshot 顯示 key

---

## 🛠️ Troubleshooting

### 問題 1: 收不到 Email

**檢查步驟**:
1. ✅ 檢查 Gmail 垃圾郵件資料夾
2. ✅ 確認 `.env.local` 有正確的 API Key
3. ✅ 確認已重啟 dev server
4. ✅ 去 Resend Dashboard 查看 email 是否已發送
5. ✅ 檢查瀏覽器 console 有無錯誤

### 問題 2: API Error 401 Unauthorized

**原因**: API Key 不正確

**解決**:
1. 去 Resend Dashboard 檢查 API Key
2. 確認複製時沒有多空格或換行
3. 嘗試創建新的 API Key

### 問題 3: API Error 422 Validation Error

**原因**: Email 格式或內容有問題

**解決**:
1. 確認 `to` 的 email 是有效的
2. 檢查 `from` 的格式：`Name <email@domain.com>`
3. 檢查 Resend logs 查看詳細錯誤訊息

### 問題 4: Email 進入垃圾郵件

**原因**: 使用 `onboarding@resend.dev` 測試域名

**解決**:
1. 短期：手動標記為「不是垃圾郵件」
2. 長期：設定自己的域名（見上面「使用自己的域名」）

---

## 📈 與 Gmail SMTP 比較

| 功能 | Resend | Gmail SMTP |
|------|--------|------------|
| 設定難度 | ⭐⭐⭐⭐⭐ 超簡單 | ⭐⭐☆☆☆ 需要 2FA + App Password |
| 發送速度 | ⚡ 超快 | 🐢 較慢 |
| 可靠性 | ✅ 99.9% | ⚠️ 可能被限速 |
| 追蹤功能 | ✅ 完整 dashboard | ❌ 無 |
| 自訂域名 | ✅ 支援 | ❌ 不支援 |
| 免費額度 | 3,000/月 | 無限（但有每日限制） |
| 安全性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

**結論: Resend 更適合專業應用！** ✨

---

## 🎯 Vercel 部署清單

部署到 Vercel 時記得設定：

```
環境變數:
├─ RESEND_API_KEY = re_你的API_Key
├─ NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX (可選)
└─ ADMIN_PASSWORD = 你的admin密碼
```

**就這麼簡單！** 不需要 SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS 這些變數了！

---

## 📚 延伸資源

- [Resend 官方文檔](https://resend.com/docs)
- [Resend + Next.js 教學](https://resend.com/docs/send-with-nextjs)
- [Email Best Practices](https://resend.com/docs/best-practices)
- [Resend API Reference](https://resend.com/docs/api-reference)

---

## ✅ 完成檢查清單

設定完成後確認：
- [ ] Resend 帳號已註冊
- [ ] API Key 已獲取
- [ ] `.env.local` 已更新
- [ ] Dev server 已重啟
- [ ] 測試 email 已收到
- [ ] Email 內容正確顯示
- [ ] Resend Dashboard 可以看到發送記錄

---

**恭喜！你已經完成 Resend 設定！** 🎉

**下一步：部署到 Vercel 並測試 production 環境！** 🚀
