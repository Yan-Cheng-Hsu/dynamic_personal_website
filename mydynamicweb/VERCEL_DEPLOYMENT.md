# 🚀 Vercel 部署完整指南

這份指南將手把手教你如何把網站部署到 Vercel。

---

## ✅ 前置準備檢查

在開始之前，確認：
- ✅ 代碼已經 push 到 GitHub（已完成！）
- ✅ Resend API Key 已獲取：`re_ZqatZij2_EC6M47UUC3V3kx6rk4fvwHk7`
- ✅ Calendly 已設定：`https://calendly.com/bill-ych-jobs/30min`
- ✅ 本地測試成功（email 已收到）

**準備好了！開始部署！** 🎉

---

## 📋 Step-by-Step 部署流程

### Step 1: 註冊/登入 Vercel (2 分鐘)

1. **打開 Vercel 官網**:
   ```
   https://vercel.com
   ```

2. **點擊右上角 "Sign Up"** (如果已有帳號則 "Log In")

3. **選擇用 GitHub 登入** ⭐ 推薦
   - 點擊 **"Continue with GitHub"**
   - 授權 Vercel 存取你的 GitHub repositories

4. **完成註冊**
   - 如果是新用戶，填寫基本資訊
   - 選擇 **"Hobby"** 方案（免費）

---

### Step 2: Import 你的專案 (3 分鐘)

1. **進入 Vercel Dashboard**
   - 登入後會自動跳轉到: https://vercel.com/dashboard

2. **點擊 "Add New..." 按鈕**
   - 在右上角，點擊 **"Add New..."**
   - 選擇 **"Project"**

3. **Import Git Repository**
   - 你會看到你的 GitHub repositories 列表
   - 找到 **"dynamic_personal_website"**
   - 點擊旁邊的 **"Import"** 按鈕

4. **Configure Project**

   Vercel 會自動偵測到 Next.js 專案，並填好這些設定：

   ```
   Framework Preset: Next.js
   Root Directory: mydynamicweb
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

   ⚠️ **重要**: 確認 **Root Directory** 是 `mydynamicweb` (不是根目錄)

   如果沒有自動設定，手動選擇：
   - 點擊 **"Root Directory"** 的 **"Edit"**
   - 選擇 **"mydynamicweb"** 資料夾
   - 點擊 **"Continue"**

---

### Step 3: 設定環境變數 ⭐ 最重要！ (5 分鐘)

在部署之前，必須先設定環境變數！

1. **展開 "Environment Variables" 區塊**
   - 在 Configure Project 頁面往下滾
   - 點擊 **"Environment Variables"** 展開

2. **添加環境變數**

   一個一個加入以下變數：

---

#### 變數 1: RESEND_API_KEY ⚠️ 必須

```
Name:  RESEND_API_KEY
Value: re_ZqatZij2_EC6M47UUC3V3kx6rk4fvwHk7
```

**Environment 選擇：**
- ✅ Production
- ✅ Preview
- ✅ Development

**點擊 "Add"**

---

#### 變數 2: NEXT_PUBLIC_GA_ID (可選)

```
Name:  NEXT_PUBLIC_GA_ID
Value: G-PLACEHOLDER
```

**說明**:
- 現在可以先用假的 `G-PLACEHOLDER`
- 之後有 Google Analytics 再更新

**Environment 選擇：**
- ✅ Production
- ✅ Preview
- ✅ Development

**點擊 "Add"**

---

#### 變數 3: ADMIN_PASSWORD (未來用)

```
Name:  ADMIN_PASSWORD
Value: MySecure2024Pass!
```

**說明**:
- 用於未來的 `/admin/analytics` 頁面
- 設定一個強密碼

**Environment 選擇：**
- ✅ Production
- ✅ Preview
- ✅ Development

**點擊 "Add"**

---

**環境變數設定完成！** 應該看到 3 個變數：
```
✅ RESEND_API_KEY
✅ NEXT_PUBLIC_GA_ID
✅ ADMIN_PASSWORD
```

---

### Step 4: 部署！ (2-3 分鐘)

1. **點擊 "Deploy" 按鈕**
   - 在頁面底部，大大的藍色按鈕
   - Vercel 會開始建置你的網站

2. **等待部署完成**

   你會看到建置過程：
   ```
   ⏳ Queued
   🔨 Building
   📦 Deploying
   ✅ Ready
   ```

   通常需要 **2-3 分鐘**

3. **部署成功！** 🎉

   當看到 **"Congratulations!"** 畫面：
   - 🎊 你的網站已經上線了！
   - 🌐 Vercel 會給你一個網址

---

### Step 5: 獲取你的網站連結 (30 秒)

部署完成後：

1. **複製網站 URL**
   - 會顯示類似：`https://your-project-name.vercel.app`
   - 或：`https://dynamic-personal-website-xyz123.vercel.app`

2. **點擊 "Visit" 或直接打開連結**

3. **你的網站已經上線了！** ✅

---

## 🧪 Step 6: 測試 Production 網站 (5 分鐘)

### 6.1 測試基本功能

1. **打開你的 Vercel 網址**
   - 例如：`https://your-site.vercel.app`

2. **檢查各個區塊**:
   - ✅ Hero Section 載入正常
   - ✅ Brand logos 顯示（Amazon, Alibaba, Unitree）
   - ✅ LinkedIn 按鈕顯示且可點擊
   - ✅ Metrics Dashboard 動畫正常
   - ✅ Calendly 連結正常

---

### 6.2 測試 Schedule Form（最重要！）

1. **滾動到 "Let's Build Something Amazing Together"**

2. **填寫表單**:
   ```
   Email:   production-test@example.com
   Company: Production Test
   Role:    Test from Vercel
   Message: Testing production deployment!
   ```

3. **點擊 "📅 Request a Call"**

4. **確認成功訊息**:
   - 應該看到 "🎉 Thank You!" 頁面
   - 有 Calendly 連結

5. **檢查你的 Gmail**: `bill.ych.jobs@gmail.com`
   - 應該收到 email
   - 主旨: "🚀 New Schedule Request from Production Test"

**如果收到 email = 完全成功！** ✅

---

### 6.3 測試 Calendly

1. **點擊任何 Calendly 連結**
   - Hero section 的 "Schedule a Call"
   - 或 form 底部的 "Use Calendly"

2. **應該打開**: `https://calendly.com/bill-ych-jobs/30min`

3. **確認可以看到你的可預約時間**

---

### 6.4 測試 Mobile（可選但推薦）

1. **在手機打開你的 Vercel 網址**

2. **檢查**:
   - ✅ 排版正常
   - ✅ 按鈕可點擊
   - ✅ 表單可填寫
   - ✅ Logo 正常顯示

---

## 📊 Step 7: 查看 Vercel Dashboard

### 7.1 查看部署狀態

1. **去 Vercel Dashboard**
   - https://vercel.com/dashboard
   - 選擇你的專案

2. **Deployments 標籤**
   - 看到所有的部署歷史
   - 最新的顯示 "Production"
   - 狀態: ✅ Ready

### 7.2 查看 Logs

1. **點擊最新的 Deployment**

2. **Functions 標籤**
   - 點擊 `/api/schedule`
   - 可以看到 function logs
   - 確認沒有錯誤

3. **如果有人提交表單**:
   - 會在這裡看到 log:
     ```
     Schedule request sent: {
       emailId: '...',
       from: 'test@example.com',
       company: 'Test',
       ...
     }
     ```

---

## 🎨 Step 8: 自訂域名（可選）

如果你有自己的域名（例如：`billhsu.com`）：

### 8.1 添加域名

1. **Vercel Dashboard → 你的專案 → Settings → Domains**

2. **點擊 "Add"**

3. **輸入域名**: `billhsu.com` 或 `www.billhsu.com`

4. **按照 Vercel 指示設定 DNS**:
   - 去你的域名商（Namecheap, GoDaddy, Cloudflare）
   - 添加 DNS records:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```
   - 或
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

5. **等待 DNS 生效**（通常 5-60 分鐘）

6. **完成！** 你的網站會在 `https://billhsu.com` 上線

---

## 🔄 Step 9: 後續更新流程

每次你想更新網站：

### 方法 1: 透過 Git（推薦）

```bash
# 1. 修改程式碼
# 2. Commit
git add .
git commit -m "update: description of changes"

# 3. Push to GitHub
git push origin main

# 4. Vercel 自動部署！
# 大約 2-3 分鐘後更新完成
```

**Vercel 會自動**:
- 偵測到 GitHub 更新
- 自動建置
- 自動部署
- 不需要手動操作！

### 方法 2: Vercel CLI（進階）

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

---

## 🔧 Step 10: 更新環境變數（未來需要時）

如果需要更新 API Key 或其他環境變數：

1. **Vercel Dashboard → 你的專案 → Settings**

2. **Environment Variables**

3. **找到要改的變數**
   - 例如：`RESEND_API_KEY`
   - 點擊旁邊的 **"..."** → **"Edit"**

4. **輸入新值**
   - 例如：新的 API Key
   - 點擊 **"Save"**

5. **重新部署**
   - 去 **Deployments** 標籤
   - 點擊最新部署的 **"..."**
   - 選擇 **"Redeploy"**
   - 確認 **"Redeploy"**

6. **等待 2-3 分鐘**
   - 新的環境變數會生效

---

## 📈 Vercel Analytics（可選）

Vercel 提供免費的 analytics：

### 啟用方法

1. **安裝 Vercel Analytics**:
   ```bash
   npm i @vercel/analytics
   ```

2. **在 `_app.tsx` 添加**:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'

   export default function App({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     )
   }
   ```

3. **Commit & Push**

4. **在 Vercel Dashboard 查看**:
   - 去你的專案 → **Analytics** 標籤
   - 看到訪客數據、頁面瀏覽等

---

## ⚡ Performance 檢查

### Lighthouse Score

1. **打開你的網站**

2. **按 F12 打開 DevTools**

3. **Lighthouse 標籤**

4. **點擊 "Analyze page load"**

5. **目標分數**:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

## 🔐 安全檢查清單

部署完成後確認：

- ✅ `.env.local` 沒有被 commit 到 GitHub
- ✅ Resend API Key 只在 Vercel 環境變數
- ✅ 沒有在程式碼中 hardcode 密碼
- ✅ API routes 有錯誤處理
- ✅ Form validation 正常運作
- ✅ HTTPS 已啟用（Vercel 自動提供）

---

## 🎯 完整測試清單

在宣布上線前，完整測試：

### 功能測試
- [ ] 首頁載入正常
- [ ] 所有圖片顯示正確
- [ ] LinkedIn 按鈕可點擊並跳轉
- [ ] Brand logos 顯示正確
- [ ] Schedule form 可以提交
- [ ] Email 成功送達
- [ ] Calendly 連結正常
- [ ] Footer links 正常

### 瀏覽器測試
- [ ] Chrome 測試通過
- [ ] Safari 測試通過
- [ ] Firefox 測試通過
- [ ] Mobile Safari 測試通過
- [ ] Mobile Chrome 測試通過

### 效能測試
- [ ] 首頁載入 < 3 秒
- [ ] Lighthouse Performance > 90
- [ ] 沒有 console errors
- [ ] 動畫流暢

---

## 🐛 常見問題 Troubleshooting

### 問題 1: Build 失敗

**錯誤訊息**: `Build failed`

**解決方法**:
1. 查看 Build Logs
2. 通常是缺少依賴或 TypeScript 錯誤
3. 在本地執行 `npm run build` 測試
4. 修復錯誤後重新 push

---

### 問題 2: 環境變數沒生效

**症狀**: Form 提交失敗，email 沒送達

**解決方法**:
1. 確認環境變數有打勾 "Production"
2. 檢查變數名稱拼寫正確
3. 重新部署（Redeploy）
4. 等待 2-3 分鐘讓變數生效

---

### 問題 3: 404 Not Found

**症狀**: 某些頁面 404

**解決方法**:
1. 確認 Root Directory 設定為 `mydynamicweb`
2. 確認檔案在 `pages/` 資料夾
3. 檢查檔案名稱是否正確

---

### 問題 4: Slow Response Time

**症狀**: API 回應很慢

**原因**: Serverless functions 冷啟動

**解決方法**:
- 正常現象，第一次請求會慢 (1-2秒)
- 後續請求會快很多
- Vercel Pro 方案有更好的效能

---

## 📞 需要幫助？

### Vercel 資源
- [Vercel 文檔](https://vercel.com/docs)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Resend 資源
- [Resend 文檔](https://resend.com/docs)
- [Email Dashboard](https://resend.com/emails)
- [API Reference](https://resend.com/docs/api-reference)

---

## 🎉 恭喜！

你的網站已經成功部署到 Vercel！

**你的網站現在：**
- ✅ 全球 CDN 加速
- ✅ 自動 HTTPS
- ✅ 自動更新（透過 GitHub）
- ✅ Email 通知功能
- ✅ 完全免費！

**分享你的網站吧！** 🚀

---

## 📊 下一步（可選）

完成基本部署後，你可以：

1. **設定 Google Analytics**
   - 追蹤訪客數據
   - 了解哪些公司在看你的 profile

2. **添加自訂域名**
   - 更專業的印象
   - 更容易記憶

3. **實作 Analytics Dashboard**
   - 看到誰訪問了你的網站
   - 追蹤 schedule requests

4. **SEO 優化**
   - 提高 Google 搜尋排名
   - 更容易被 recruiter 找到

---

**準備好開始部署了嗎？** 🚀

**按照上面的步驟，一步一步來，20 分鐘內就能完成！**
