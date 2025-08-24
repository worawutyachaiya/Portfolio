# 📧 การตั้งค่า EmailJS สำหรับ Contact Form

## ขั้นตอนการตั้งค่า EmailJS

### 1. สร้างบัญชี EmailJS
1. ไปที่ [EmailJS.com](https://www.emailjs.com/)
2. สมัครสมาชิกหรือล็อกอิน
3. ไปที่ Dashboard

### 2. ตั้งค่า Email Service
1. ไปที่หน้า **Email Services**
2. คลิก **Add New Service**
3. เลือก Email Provider (Gmail, Outlook, Yahoo หรือ Custom SMTP)
4. ใส่ข้อมูลการเชื่อมต่อ Email ของคุณ
5. คัดลอก **Service ID** ที่ได้

### 3. สร้าง Email Template
1. ไปที่หน้า **Email Templates**
2. คลิก **Create New Template**
3. ใส่ Template ดังนี้:

**Subject (หัวข้อ):**
```
{{subject}} - ข้อความจาก Portfolio
```

**Content (เนื้อหา):**
```
คุณได้รับข้อความใหม่จาก Portfolio Website

จาก: {{from_name}}
อีเมล: {{from_email}}
หัวข้อ: {{subject}}

ข้อความ:
{{message}}

---
กรุณาตอบกลับไปที่: {{from_email}}
ส่งจาก Portfolio Website
```

4. คัดลอก **Template ID** ที่ได้

### 4. ดู Public Key
1. ไปที่ **Account** → **API Keys**
2. คัดลอก **Public Key**

### 5. ตั้งค่าในโปรเจค
1. สร้างไฟล์ `.env.local` ใน root directory ของโปรเจค
2. ใส่ข้อมูลที่ได้จาก EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. เปลี่ยน `your_service_id_here`, `your_template_id_here`, และ `your_public_key_here` เป็นค่าจริงที่ได้จาก EmailJS

### 6. รีสตาร์ท Development Server
```bash
npm run dev
```

## การทดสอบ
1. ไปที่ส่วน Contact Form ในเว็บไซต์
2. กรอกข้อมูลและส่งข้อความ
3. ตรวจสอบ Email ที่ได้ตั้งค่าไว้

## หมายเหตุ
- EmailJS ให้ส่งฟรี 200 emails ต่อเดือน
- สำหรับการใช้งานจริง ควรเก็บ API Keys ไว้เป็นความลับ
- ไฟล์ `.env.local` จะไม่ถูก commit ขึ้น Git (ปลอดภัย)

## การแก้ไขปัญหาเบื้องต้น
- ตรวจสอบว่า API Keys ใส่ถูกต้อง
- ตรวจสอบ Template Variables ใน EmailJS Dashboard
- ดู Console ใน Browser สำหรับ Error Messages
- ตรวจสอบ Email Service ว่าเชื่อมต่อถูกต้อง

## ⚠️ หมายเหตุสำคัญเกี่ยวกับ From Email
EmailJS จะใช้ email ของ service ที่คุณตั้งค่าไว้เป็น sender เสมอ (เช่น worawut.ycy@gmail.com) 
**นี่เป็นข้อจำกัดของ EmailJS เพื่อป้องกัน email spoofing**

แต่ข้อมูลผู้ส่งจริง ({{from_name}} และ {{from_email}}) จะแสดงในเนื้อหา email 
เพื่อให้คุณทราบว่าใครเป็นผู้ส่งจริงและสามารถตอบกลับได้

**ทางแก้ไข:**
1. ใส่ข้อมูลผู้ส่งจริงใน Subject และ Content ของ Template
2. ตั้งค่า Reply-To ให้เป็น {{from_email}} (ถ้า EmailJS รองรับ)
3. ใช้ email service อื่นที่รองรับ custom sender (เช่น SendGrid, AWS SES) สำหรับเว็บไซต์ production
