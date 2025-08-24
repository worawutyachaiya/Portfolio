# 🚀 Portfolio Website

เว็บไซต์แสดงผลงานแบบครบวงจรที่สร้างด้วย Next.js และ Tailwind CSS

## ✨ Features

- **Responsive Design** - รองรับทุกขนาดหน้าจอ
- **Dark Mode** - สลับโหมดสีได้อัตโนมัติ
- **Smooth Animations** - แอนิเมชันเรียบสวยด้วย Framer Motion
- **SEO Optimized** - เตรียมพร้อมสำหรับ SEO
- **Modern UI/UX** - ออกแบบที่ทันสมัยและใช้งานง่าย
- **Contact Form** - ฟอร์มติดต่อที่ใช้งานได้จริง

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## 🎨 Customization

### แก้ไขข้อมูลส่วนตัว

1. **Hero Section** - แก้ไขใน `src/components/Hero.tsx`
2. **About Section** - แก้ไขใน `src/components/About.tsx`
3. **Skills** - แก้ไขใน `src/components/Skills.tsx`
4. **Experience** - แก้ไขใน `src/components/Experience.tsx`
5. **Projects** - แก้ไขใน `src/components/Projects.tsx`
6. **Contact** - แก้ไขใน `src/components/Contact.tsx`

### เปลี่ยนรูปภาพ

- เพิ่มรูปโปรไฟล์ในโฟลเดอร์ `public/`
- แก้ไข path ในไฟล์ `Hero.tsx`
- เพิ่มรูปภาพโปรเจคในโฟลเดอร์ `public/projects/`

### แก้ไขสี Theme

แก้ไขสีใน `src/app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## 📱 Sections

### 🏠 Home/Hero
- แสดงชื่อและตำแหน่งงาน
- ปุ่มดาวน์โหลด CV
- ลิงก์ Social Media

### 👨‍💻 About
- ข้อมูลเกี่ยวกับตัวเอง
- สถิติการทำงาน
- ค่านิยมและหลักการทำงาน

### 🛠️ Skills
- ทักษะ Frontend/Backend
- Progress bars แสดงระดับความเชี่ยวชาญ
- เทคโนโลยีที่เคยใช้งาน

### 💼 Experience
- ประสบการณ์การทำงาน
- Timeline แสดงความก้าวหน้า
- การศึกษา

### 🎯 Projects
- แสดงผลงานที่สำคัญ
- รูปภาพ description และ tech stack
- ลิงก์ไปยัง demo และ source code

### 📞 Contact
- ข้อมูลการติดต่อ
- ฟอร์มส่งข้อความ
- Social media links

## 🚀 Deployment

### Vercel (แนะนำ)
1. Push โค้ดขึ้น GitHub
2. เชื่อมต่อ repository กับ Vercel
3. Deploy อัตโนมัติ

### Netlify
1. Build project: `npm run build`
2. Upload โฟลเดอร์ `out/` ไป Netlify

## 📄 License

MIT License - ใช้งานได้อย่างอิสระ

## 🤝 Contributing

ยินดีรับ PR และ suggestions!

## 📞 Support

หากมีปัญหาหรือคำถาม:
- เปิด Issue ใน GitHub
- ติดต่อผ่าน email ที่ระบุในเว็บไซต์

---

Made with ❤️ using Next.js and Tailwind CSS
