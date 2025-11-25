# 🔐 Vercel 環境變數設定指南

這份指南教你如何在 Vercel 安全地儲存敏感資訊（如 Gmail App Password）。

---

## 🛡️ 為什麼這樣安全？

Vercel 使用 **AES-256 加密**儲存環境變數：
- ✅ 變數在傳輸和儲存時都是加密的
- ✅ 只有你的 serverless functions 可以解密讀取
- ✅ Vercel 員工無法看到你的密碼
- ✅ 即使有人入侵你的 GitHub，也拿不到密碼（因為不在 repo 裡）
- ✅ 可以隨時在 Dashboard 更新或刪除

這是 Netflix、Airbnb、GitHub 等大公司都在用的方法！

---

## 📝 步驟 1: 準備你的環境變數

首先，你需要準備這些資訊：

### 1.1 Gmail App Password（如果還沒設定）

參考 `GMAIL_SETUP.md` 獲取：
1. 去 https://myaccount.google.com/apppasswords
2. 生成 "Portfolio Website" 的 App Password
3. 複製 16 字元密碼（例如：`abcd efgh ijkl mnop`）
4. **移除空格**，變成：`abcdefghijklmnop`

### 1.2 Google Analytics ID（可選，現在可以先用假的）

1. 去 https://analytics.google.com 創建帳號
2. 或者先用假的：`G-PLACEHOLDER`

### 1.3 Admin Dashboard Password（自己設定）

想一個強密碼，用來保護你的 `/admin/analytics` 頁面：
- 至少 12 字元
- 包含大小寫字母、數字
- 例如：`MySecure2024Pass!`

---

## 🚀 步驟 2: 在 Vercel 設定環境變數

### 方法 A: 透過 Vercel Dashboard（推薦給第一次）

#### 2.1 部署你的網站到 Vercel

**首先，確保程式碼在 GitHub 上：**

```bash
# 1. Commit 所有變更
git add .
git commit -m "feat: add schedule email integration and analytics"

# 2. Push 到 GitHub
git push origin main
```

**然後部署到 Vercel：**

1. 去 **https://vercel.com**
2. 用 GitHub 帳號登入
3. 點擊 **"Add New..." → "Project"**
4. 選擇你的 repository：`dynamic_personal_website/mydynamicweb`
5. Vercel 會自動偵測到 Next.js 專案
6. **先不要點 Deploy！** 先設定環境變數 ⬇️

#### 2.2 設定環境變數

在 Vercel 的 **Import Project** 頁面：

1. 展開 **"Environment Variables"** 區塊
2. 一個一個加入：

**變數 1: SMTP_HOST**
```
Key:   SMTP_HOST
Value: smtp.gmail.com
```
勾選：✅ Production ✅ Preview ✅ Development

**變數 2: SMTP_PORT**
```
Key:   SMTP_PORT
Value: 587
```
勾選：✅ Production ✅ Preview ✅ Development

**變數 3: SMTP_USER**
```
Key:   SMTP_USER
Value: bill.ych.jobs@gmail.com
```
勾選：✅ Production ✅ Preview ✅ Development

**變數 4: SMTP_PASS** ⚠️ 最重要！
```
Key:   SMTP_PASS
Value: 你的16字元Gmail App Password（沒有空格）
```
勾選：✅ Production ✅ Preview ✅ Development

**變數 5: NEXT_PUBLIC_GA_ID**（可選）
```
Key:   NEXT_PUBLIC_GA_ID
Value: G-PLACEHOLDER
```
勾選：✅ Production ✅ Preview ✅ Development

**變數 6: ADMIN_PASSWORD**
```
Key:   ADMIN_PASSWORD
Value: 你的 admin dashboard 密碼
```
勾選：✅ Production ✅ Preview ✅ Development

#### 2.3 完成部署

點擊 **"Deploy"** 按鈕！

Vercel 會：
1. 從 GitHub 拉取你的程式碼
2. 安裝依賴（npm install）
3. 建置專案（npm run build）
4. 部署到全球 CDN
5. 給你一個 `.vercel.app` 網址

大約 2-3 分鐘完成！

---

### 方法 B: 部署後再加環境變數

如果你已經部署了，可以這樣加：

1. 去 **Vercel Dashboard** → 選擇你的專案
2. 點擊 **"Settings"** 標籤
3. 左側選單點擊 **"Environment Variables"**
4. 點擊 **"Add New"**
5. 填入上面的變數（一次一個）
6. 每個變數選擇要用在哪些環境：
   - ✅ **Production** - 正式環境（給真實訪客用）
   - ✅ **Preview** - 預覽環境（每次 PR 都會建立）
   - ✅ **Development** - 開發環境（本地 vercel dev）
7. 點擊 **"Save"**

**重要！** 加完環境變數後，需要重新部署：
1. 去 **"Deployments"** 標籤
2. 點擊最新的部署
3. 點擊右上角的 **"... → Redeploy"**
4. 確認 **"Redeploy"**

---

## 🧪 步驟 3: 測試環境變數是否生效

### 3.1 測試 Schedule Form

1. 去你的 Vercel 網址（例如：`https://your-site.vercel.app`）
2. 滾動到 Schedule 區塊
3. 填寫表單：
   - Email: test@example.com
   - Company: Test Co
   - Role: Test Role
   - Message: Testing from production!
4. 點擊 "Request a Call"
5. 檢查你的 Gmail inbox：`bill.ych.jobs@gmail.com`

**成功的話：** 你會收到漂亮的 HTML email！✅

**如果失敗：** 檢查下面的 troubleshooting 👇

---

## 🔍 步驟 4: 查看環境變數（確認已設定）

1. Vercel Dashboard → 你的專案 → **Settings** → **Environment Variables**
2. 你應該看到所有變數的列表
3. 密碼會顯示為 `••••••••••••••••`（隱藏的）
4. 你可以點擊 **"Edit"** 來更新
5. 或點擊 **"Remove"** 來刪除

---

## 🛠️ Troubleshooting

### 問題 1: 表單提交後顯示錯誤

**檢查步驟：**

1. 去 Vercel Dashboard → 你的專案 → **"Deployments"**
2. 點擊最新的部署 → **"Functions"** 標籤
3. 找到 `/api/schedule` → 點擊查看 logs
4. 看看有什麼錯誤訊息

**常見錯誤：**

```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```
➡️ Gmail App Password 設定錯誤
**解決**: 重新生成 App Password，更新 `SMTP_PASS`

```
Error: Missing credentials for "PLAIN"
```
➡️ 環境變數沒有正確載入
**解決**: 確認 Vercel 環境變數有打勾 Production，然後 Redeploy

### 問題 2: 收不到 email

**檢查清單：**
- [ ] 檢查 Gmail 垃圾郵件資料夾
- [ ] 確認 `SMTP_USER` 就是生成 App Password 的那個帳號
- [ ] `SMTP_PASS` 沒有空格（應該是 16 字元）
- [ ] Redeploy 後等 2-3 分鐘讓變更生效

### 問題 3: 想更新環境變數

1. Vercel Dashboard → Settings → Environment Variables
2. 找到要改的變數 → **"Edit"**
3. 輸入新值 → **"Save"**
4. **重要！** 去 Deployments → Redeploy
5. 變數會在下次部署時生效

---

## 🔄 本地開發 vs Vercel 環境變數

### 本地開發（.env.local）
```env
# 這個檔案在你的電腦上
# 已經在 .gitignore，不會上傳到 GitHub
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bill.ych.jobs@gmail.com
SMTP_PASS=your-local-app-password
```

### Vercel Production（環境變數 Dashboard）
```
這些變數儲存在 Vercel 的加密資料庫
只有 Vercel serverless functions 可以讀取
不在你的程式碼裡
```

**兩者是分開的！**
- 本地測試用 `.env.local`
- Production 用 Vercel Dashboard 環境變數

---

## 📊 環境變數最佳實踐

### ✅ DO（該做的）

1. **使用 Vercel Dashboard** 儲存敏感資訊
2. **本地用 .env.local**，production 用 Vercel 變數
3. **定期更換密碼**（每 90 天）
4. **使用不同的密碼** 給不同環境（dev vs prod）
5. **記錄在密碼管理器**（如 1Password、Bitwarden）

### ❌ DON'T（不該做的）

1. ❌ 絕不把 `.env.local` commit 到 Git
2. ❌ 絕不在程式碼裡 hardcode 密碼
3. ❌ 絕不把密碼寫在 Slack/Discord/Email
4. ❌ 絕不在 screenshot 裡顯示密碼
5. ❌ 絕不用你的主要 Gmail 密碼

---

## 🔐 安全等級比較

| 方法 | 安全性 | 方便性 | 業界使用 |
|------|--------|--------|----------|
| Hardcode 在程式碼 | ⭐☆☆☆☆ | ⭐⭐⭐⭐⭐ | ❌ 絕不使用 |
| .env.local (不加到 Git) | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | ✅ 本地開發 |
| Vercel 環境變數 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ **Production 首選** |
| AWS Secrets Manager | ⭐⭐⭐⭐⭐ | ⭐⭐☆☆☆ | ✅ 大型企業 |
| HashiCorp Vault | ⭐⭐⭐⭐⭐ | ⭐☆☆☆☆ | ✅ 超大型企業 |

**結論：Vercel 環境變數是最佳平衡點！** ⭐⭐⭐⭐⭐

---

## 📱 快速參考卡

```
┌─────────────────────────────────────────┐
│   Vercel 環境變數快速設定                │
├─────────────────────────────────────────┤
│ 1. vercel.com → 登入                    │
│ 2. 選擇專案 → Settings → Env Variables  │
│ 3. Add New:                              │
│    SMTP_HOST = smtp.gmail.com           │
│    SMTP_PORT = 587                      │
│    SMTP_USER = bill.ych.jobs@gmail.com  │
│    SMTP_PASS = [16-char app password]   │
│ 4. Save → Deployments → Redeploy        │
│ 5. 測試表單 → 檢查 email inbox          │
└─────────────────────────────────────────┘
```

---

## 🎓 延伸閱讀

- [Vercel Environment Variables 官方文檔](https://vercel.com/docs/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [12-Factor App Methodology](https://12factor.net/config)
- [OWASP Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

---

## ✅ Checklist

部署前確認：
- [ ] Gmail App Password 已生成
- [ ] .env.local 已設定（本地測試用）
- [ ] .gitignore 包含 `.env` 和 `.env.local`
- [ ] 程式碼已 push 到 GitHub
- [ ] Vercel 專案已創建
- [ ] 所有環境變數已加到 Vercel Dashboard
- [ ] 已重新部署
- [ ] 測試表單可以發送 email

部署後確認：
- [ ] Production URL 可以訪問
- [ ] Schedule form 可以提交
- [ ] Email 成功送達
- [ ] 沒有 console errors
- [ ] Mobile 測試通過

---

**準備好了嗎？開始部署吧！** 🚀

有問題隨時問我！
