# 📧 Gmail App Password Setup Guide

To enable email notifications from the schedule form, you need to create a Gmail App Password.

## ⚠️ Important
**Never use your actual Gmail password!** App Passwords are safer and can be revoked without changing your main password.

---

## 🔧 Step-by-Step Setup

### Step 1: Enable 2-Factor Authentication (if not already enabled)

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **"Security"** in the left sidebar
3. Scroll down to **"How you sign in to Google"**
4. Click on **"2-Step Verification"**
5. Follow the prompts to set it up (usually via SMS or Google Authenticator)

### Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords
2. You might need to sign in again
3. Click **"Select app"** dropdown:
   - Choose **"Mail"**
4. Click **"Select device"** dropdown:
   - Choose **"Other (Custom name)"**
   - Type: **"Portfolio Website"**
5. Click **"Generate"**
6. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)
7. **COPY THIS PASSWORD IMMEDIATELY** - you won't see it again!

### Step 3: Update .env.local

1. Open `/mydynamicweb/.env.local`
2. Replace the placeholder with your app password:

```env
SMTP_PASS=abcdefghijklmnop
```

**Note**: Remove spaces from the password! It should be 16 characters with no spaces.

### Step 4: Restart Dev Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ Testing

1. Go to: http://localhost:3001
2. Scroll to the "Schedule" section
3. Fill out the form:
   - Email: your-test-email@gmail.com
   - Company: Test Company
   - Role: Test Role
   - Message: Testing email integration
4. Click **"Request a Call"**
5. Check your email inbox for `bill.ych.jobs@gmail.com`

You should receive a nicely formatted HTML email with the form data!

---

## 🔒 Security Best Practices

### DO:
✅ Use App Passwords instead of your main password
✅ Store passwords in `.env.local` (already in `.gitignore`)
✅ Use different App Passwords for different apps
✅ Revoke App Passwords when you stop using an app

### DON'T:
❌ Never commit `.env.local` to Git
❌ Never share your App Password
❌ Never use your main Gmail password in the app
❌ Never hardcode passwords in source code

---

## 🚨 Troubleshooting

### Problem: "Invalid login: 535-5.7.8 Username and Password not accepted"

**Solutions:**
1. Make sure you copied the App Password correctly (no spaces)
2. Verify 2FA is enabled on your Google Account
3. Try generating a new App Password
4. Check that `SMTP_USER` matches the email that generated the App Password

### Problem: "Connection timeout"

**Solutions:**
1. Check your internet connection
2. Verify `SMTP_HOST=smtp.gmail.com` and `SMTP_PORT=587`
3. Try with a different network (sometimes corporate firewalls block SMTP)

### Problem: Email not arriving

**Solutions:**
1. Check spam/junk folder
2. Wait a few minutes (sometimes delayed)
3. Check Gmail sent folder to see if it was sent
4. Verify `to:` email address is correct in `/api/schedule.ts`

---

## 📝 For Vercel Deployment

When deploying to Vercel, you'll need to add environment variables there too:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these variables:
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = bill.ych.jobs@gmail.com
   SMTP_PASS = your-app-password-here
   ```
3. Redeploy your site

---

## 🔄 Revoking App Password (if needed)

1. Go to: https://myaccount.google.com/apppasswords
2. Find "Portfolio Website" in the list
3. Click **"Remove"** (trash icon)
4. Confirm removal

---

## 📚 Additional Resources

- [Google App Passwords Help](https://support.google.com/accounts/answer/185833)
- [Nodemailer Gmail Documentation](https://nodemailer.com/usage/using-gmail/)
- [2-Step Verification Help](https://support.google.com/accounts/answer/185839)

---

**Ready to test? Set up your App Password and try the form!** 🚀
