package controllers

import (
	"net/http"
	"portfolio-backend/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type ProjectController struct {
	DB *gorm.DB
}

func (ctrl *ProjectController) GetProjects(c *gin.Context) {
	var projects []models.Project
	ctrl.DB.Order("created_at desc").Find(&projects)
	c.JSON(http.StatusOK, projects)
}

func (ctrl *ProjectController) GetProfile(c *gin.Context) {
	var profile models.Profile
	ctrl.DB.First(&profile)
	c.JSON(http.StatusOK, profile)
}

func (ctrl *ProjectController) GetCertificates(c *gin.Context) {
	var certs []models.Certificate
	ctrl.DB.Order("id desc").Find(&certs)
	c.JSON(http.StatusOK, certs)
}

func (ctrl *ProjectController) GetActivities(c *gin.Context) {
	var activities []models.Activity
	ctrl.DB.Order("id desc").Find(&activities)
	c.JSON(http.StatusOK, activities)
}

func (ctrl *ProjectController) GetBlogPosts(c *gin.Context) {
	var posts []models.BlogPost
	ctrl.DB.Order("created_at desc").Find(&posts)
	c.JSON(http.StatusOK, posts)
}

// ⭐ SEED DATA - Logic mới: XÓA HẾT rồi tạo lại
func (ctrl *ProjectController) CreateSampleData(c *gin.Context) {
	const fence = "```"
	const bt = "`" // 🔥 Thêm biến này để xử lý backtick trong chuỗi nội dung

	// 🔥 BƯỚC 1: XÓA TẤT CẢ DATA CŨ
	ctrl.DB.Unscoped().Where("1 = 1").Delete(&models.Project{})
	ctrl.DB.Unscoped().Where("1 = 1").Delete(&models.Certificate{})
	ctrl.DB.Unscoped().Where("1 = 1").Delete(&models.Activity{})
	ctrl.DB.Unscoped().Where("1 = 1").Delete(&models.BlogPost{})
	ctrl.DB.Unscoped().Where("1 = 1").Delete(&models.Profile{})

	// 📝 BƯỚC 2: TẠO MỚI DATA

	// --- A. Profile ---
	profile := models.Profile{
		FullName: "Nguyễn Trần Ngọc Hân",
		Title:    "Sinh viên Kỹ thuật Phần mềm | Ứng viên Backend Developer Intern",
		Bio: `Là sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm tại HUTECH, tôi đã xây dựng nền tảng vững chắc về Backend Development thông qua các dự án học thuật và tự học.

**Điểm mạnh:**
- Xây dựng RESTful API với Go (Gin) và Node.js (Express)
- Thiết kế database schema và tối ưu query với PostgreSQL
- Xử lý real-time communication với WebSocket/Socket.io
- Làm việc với AI/LLM: RAG pipeline, Vector Database (Pinecone)

**Mục tiêu:** Tìm kiếm vị trí Backend Developer Intern tại các công ty công nghệ để học hỏi kinh nghiệm thực tế về hệ thống quy mô lớn, microservices architecture và best practices từ các senior developers.`,
		Email:    "ngochanpt2018@gmail.com",
		Github:   "[https://github.com/ntnhan19](https://github.com/ntnhan19)",
		LinkedIn: "[https://linkedin.com/in/nguyentranngochan](https://linkedin.com/in/nguyentranngochan)",
	}
	ctrl.DB.Create(&profile)

	// --- B. Projects ---
	projects := []models.Project{
		{
			Title:       "DocMentor - AI RAG Knowledge Assistant",
			Description: "Ứng dụng AI Assistant hỗ trợ trả lời câu hỏi từ tài liệu PDF/DOCX sử dụng công nghệ RAG và Vector Database. Đồ án môn Trí tuệ nhân tạo.",
			Content: `## 🎯 Bối cảnh dự án

Đây là dự án của học phần **Đồ Án Chuyên Ngành** học kỳ 1 năm 2025. Bài toán đặt ra: Sinh viên và giảng viên thường phải đọc hàng trăm trang tài liệu để tìm thông tin cần thiết. Làm sao để AI có thể "đọc hiểu" tài liệu và trả lời câu hỏi chính xác?

## 🏗️ Kiến trúc hệ thống

### Tech Stack
- **Backend**: Python FastAPI
- **AI Framework**: LangChain
- **LLM**: Google Gemini Pro (miễn phí cho sinh viên)
- **Vector Database**: Pinecone (Free tier)
- **Frontend**: React.js + Tailwind CSS

### Luồng hoạt động
` + fence + `
1. User upload PDF/DOCX
2. Backend chia nhỏ document thành chunks (512 tokens, overlap 50)
3. Sử dụng Sentence Transformers để tạo embeddings
4. Lưu embeddings vào Pinecone
5. User đặt câu hỏi → Vector search tìm chunks liên quan
6. Gemini Pro generate câu trả lời dựa trên context
` + fence + `

## ⚙️ Tính năng đã thực hiện

### 1. Document Processing
- Upload PDF, DOCX, TXT (max 10MB)
- Chunking thông minh với RecursiveCharacterTextSplitter
- Extract metadata (tên file, số trang, ngày tạo)

### 2. RAG Pipeline
- Vector similarity search với k=5 chunks most relevant
- Context window 2000 tokens
- Streaming response (hiển thị từng token)

### 3. Chat Interface
- History conversation (lưu trong session)
- Syntax highlighting cho code blocks
- Copy answer to clipboard

## 📊 Kết quả đạt được

**Về chức năng:**
- ✅ Xử lý thành công 95% documents được test (50 files)
- ✅ Trả lời chính xác với câu hỏi liên quan trực tiếp đến nội dung
- ✅ Response time trung bình: 3-5 giây

**Về mặt học thuật:**
- Đạt điểm 9/10 cho học phần Đồ Án Chuyên Ngành
- Được thầy đánh giá cao về khả năng apply lý thuyết vào thực tế
- Present trước lớp và nhận feedback tích cực

## 💡 Những gì đã học được

### 1. Technical Skills
- Hiểu rõ cách LLM hoạt động và limitations
- Học cách làm việc với Vector Database
- Tối ưu cost khi call API (cache, batch processing)

### 2. Problem Solving
- **Vấn đề:** Chunking không tốt làm mất ngữ cảnh
  - **Giải pháp:** Thêm overlap và metadata cho mỗi chunk
- **Vấn đề:** Gemini đôi khi "hallucinate" (bịa đặt thông tin)
  - **Giải pháp:** Thêm instruction "chỉ trả lời dựa trên context, nếu không biết thì nói không biết"

### 3. Soft Skills
- Làm việc nhóm 3 người, phân chia task rõ ràng
- Present demo trước 40+ bạn và 2 giảng viên
- Viết document kỹ thuật đầy đủ

## 🚀 Hướng phát triển

Nếu có thêm thời gian, tôi muốn:
- [ ] Thêm multi-user authentication
- [ ] Deploy lên cloud (đang dùng localhost)
- [ ] Integrate với Google Drive API để tự động sync documents
- [ ] Add unit tests và integration tests`,
			TechStack:  "Python, FastAPI, LangChain, Google Gemini API, Pinecone, React.js",
			Category:   "AI/Machine Learning",
			RepoURL:    "[https://github.com/ntnhan19/DocMentor](https://github.com/ntnhan19/DocMentor)",
			ImageUrl:   "/images/projects/docmentor.png",
			Highlights: "Academic Project,RAG Pipeline,Vector Search",
			Duration:   "3 tháng (Sep - Dec 2025)",
			TeamSize:   "3 người",
		},
		{
			Title:       "DHL Cinema - Hệ thống đặt vé xem phim Real-time",
			Description: "Web application đặt vé xem phim với WebSocket, xử lý race condition khi nhiều người cùng chọn ghế. Đồ án môn Lập trình mạng.",
			Content: `## 🎯 Bối cảnh dự án

Đây là dự án của học phần **Đồ Án Cơ Sở** học kỳ 1 năm 2024. Giảng viên đặt yêu cầu: Xây dựng một hệ thống có tính năng real-time và phải xử lý được vấn đề race condition.

**Bài toán cụ thể:** Khi 100 người cùng lúc chọn 1 ghế trong rạp chiếu phim, làm sao đảm bảo chỉ 1 người book thành công?

## 🏗️ Kiến trúc hệ thống

### Tech Stack
- **Backend**: Node.js + Express.js
- **Real-time**: Socket.io (WebSocket)
- **Database**: PostgreSQL
- **Cache & Locking**: Redis
- **Frontend**: React.js + Context API

### Sơ đồ luồng xử lý
` + fence + `
Client chọn ghế
    ↓
Socket.io emit 'select-seat'
    ↓
Server check Redis lock
    ↓
Nếu lock thành công → Update PostgreSQL → Broadcast
Nếu lock thất bại → Return error
` + fence + `

## ⚙️ Giải pháp kỹ thuật

### 1. Redis Distributed Lock
` + fence + `javascript
// Acquire lock với expire time 30s
const lockKey = ` + bt + `seat:${movieId}:${seatId}` + bt + `;
const acquired = await redis.set(
  lockKey, 
  userId, 
  'EX', 30,  // Auto expire sau 30s
  'NX'       // Chỉ set nếu key chưa tồn tại
);

if (!acquired) {
  throw new Error('Ghế đã được chọn');
}
` + fence + `

### 2. WebSocket Broadcasting
` + fence + `javascript
io.to(` + bt + `room-${movieId}` + bt + `).emit('seat:updated', {
  seatId,
  status: 'locked',
  userId,
  timestamp: Date.now()
});
` + fence + `

### 3. Database Transaction
` + fence + `javascript
await db.transaction(async (trx) => {
  // Lock row để đảm bảo consistency
  const seat = await trx('seats')
    .where({ id: seatId })
    .forUpdate()
    .first();
  
  if (seat.status !== 'available') {
    throw new Error('Ghế không khả dụng');
  }
  
  await trx('bookings').insert({...});
  await trx('seats').update({ status: 'locked' });
});
` + fence + `

## 📊 Kết quả testing

### Load Test với Artillery
- **Test case:** 100 users cùng lúc chọn 1 ghế
- **Kết quả:** Chỉ 1 request thành công, 99 requests nhận error
- **Response time:** 150-200ms
- **Zero double booking:** ✅

### Test thực tế
- Mời 10 bạn cùng lớp test đồng thời
- Kết quả: Hệ thống hoạt động ổn định
- Feedback: UI real-time mượt mà

## 💡 Những gì đã học được

### 1. Technical Knowledge
- Hiểu sâu về WebSocket và cách nó khác HTTP
- Học cách implement distributed lock pattern
- Thực hành database transaction và row-level locking

### 2. Debugging Skills
- **Bug 1:** Redis lock không release khi server crash
  - **Fix:** Dùng EXPIRE để auto-release
- **Bug 2:** WebSocket disconnect/reconnect liên tục
  - **Fix:** Implement heartbeat mechanism

### 3. Testing & Documentation
- Viết test cases cho race condition
- Sử dụng Artillery cho load testing
- Viết document API với Postman

## 🏆 Kết quả đạt được

- Điểm đồ án: 9.0/10

## 🎓 Reflection

Dự án này giúp tôi hiểu rằng:
- Distributed systems không đơn giản như tưởng
- Testing với race condition cần cẩn thận và có methodology
- Real-world problems thường phức tạp hơn lý thuyết rất nhiều`,
			TechStack:  "Node.js, Express, Socket.io, PostgreSQL, Redis",
			Category:   "Network Programming",
			RepoURL:    "[https://github.com/ntnhan19/Project_MovieTicketBooking_NodeJS](https://github.com/ntnhan19/Project_MovieTicketBooking_NodeJS)",
			ImageUrl:   "/images/projects/cinema.png",
			Highlights: "Academic Project,Real-time System,Race Condition Handling",
			Duration:   "3 tháng (Mar - Jun 2025)",
			TeamSize:   "3 người",
		},
	}
	for _, p := range projects {
		ctrl.DB.Create(&p)
	}

	// --- C. Certificates ---
	certs := []models.Certificate{
		{
			Name:     "Sinh viên 5 Tốt Cấp Khoa",
			Issuer:   "Đại học Công nghệ TP.HCM (HUTECH)",
			Type:     "Title",
			Date:     "2024",
			ImageUrl: "/images/certs/sv5tot.jpg",
		},
		{
			Name:     "Sinh viên Tiêu Biểu Cấp Khoa",
			Issuer:   "Khoa Công nghệ Thông tin - HUTECH",
			Type:     "Title",
			Date:     "2024",
			ImageUrl: "/images/certs/svtbieu.jpg",
		},
		{
			Name:     "Networking Basics",
			Issuer:   "Cisco Networking Academy",
			Type:     "Course",
			Date:     "Tháng 12/2024",
			ImageUrl: "/images/certs/cisco_basics.jpg",
			Url:      "[https://www.credly.com/badges/849ccbed-8429-4e57-a3be-e3177f447cce/public_url](https://www.credly.com/badges/849ccbed-8429-4e57-a3be-e3177f447cce/public_url)",
		},
		{
			Name:     "JavaScript Essentials 1",
			Issuer:   "Cisco Networking Academy",
			Type:     "Course",
			Date:     "Tháng 12/2024",
			ImageUrl: "/images/certs/javascript1.jpg",
			Url:      "[https://www.credly.com/badges/04dcaaad-cc55-4403-af59-ad15cd36150f/public_url](https://www.credly.com/badges/04dcaaad-cc55-4403-af59-ad15cd36150f/public_url)",
		},
		{
			Name:     "JavaScript Essentials 2",
			Issuer:   "Cisco Networking Academy",
			Type:     "Course",
			Date:     "Tháng 12/2024",
			ImageUrl: "/images/certs/javascript2.jpg",
			Url:      "[https://www.credly.com/badges/7b330edf-fa4c-46d6-ac25-74e50e2c3773/public_url](https://www.credly.com/badges/7b330edf-fa4c-46d6-ac25-74e50e2c3773/public_url)",
		},
		{
			Name:     "Giải Ba - Cuộc thi Genz's Thinking",
			Issuer:   "CLB Đổi mới Sáng tạo HUTECH",
			Type:     "Award",
			Date:     "Tháng 10/2024",
			ImageUrl: "/images/certs/genz_award.jpg",
		},
		{
			Name:     "Giải Ba - PIONE DREAM HACKATHON 2025",
			Issuer:   "Đại học HUTECH",
			Type:     "Award",
			Date:     "Tháng 1/2025",
			ImageUrl: "/images/certs/pionehackathon.jpg",
		},
	}
	for _, cert := range certs {
		ctrl.DB.Create(&cert)
	}

	// --- D. Activities ---
	activities := []models.Activity{
		{
			Name:        "Hội Thao Sinh Viên HUTECH 2024",
			Role:        "Vận động viên - Đội Bóng Đá Nữ Khoa CNTT",
			Description: "Tham gia thi đấu bộ môn Bóng đá nữ, đạt giải Nhì toàn trường. Hoạt động rèn luyện sức khỏe, tinh thần đồng đội và kết nối với các bạn sinh viên khác khoa.",
			Date:        "Tháng 3/2024",
			ImageUrl:    "/images/activities/hoithao.jpg",
		},
		{
			Name:        "Tết Đầy Đủ - Xuân Trọn Vẹn 2025",
			Role:        "Tình nguyện viên - Liên Chi Hội Khoa CNTT",
			Description: "Tham gia gói quà Tết cho người nghèo tại Thành phố Hồ Chí Minh. Hoạt động kéo dài 2 ngày với 50+ tình nguyện viên, gói được 500+ phần quà.",
			Date:        "Tháng 1/2025",
			ImageUrl:    "/images/activities/tinhnguyenvien.png",
		},
	}
	for _, act := range activities {
		ctrl.DB.Create(&act)
	}

	// --- E. Blog Posts ---
	posts := []models.BlogPost{
		{
			Title:      "Hành trình từ .NET sang Go: Tại sao tôi chuyển stack?",
			Summary:    "Chia sẻ trải nghiệm học Golang sau 1 năm làm việc với C# .NET. Performance benchmark, learning curve, và những cú sốc văn hóa.",
			Content:    "## Coming soon...\nBài viết đang được hoàn thiện.",
			CoverImage: "/images/blog/golang_vs_dotnet.jpg",
			Tags:       "Learning,Career,Backend",
			Date:       "Tháng 12/2024",
		},
		{
			Title:      "3 bài học từ Hackathon PIONE DREAM 2025",
			Summary:    "48 giờ không ngủ, 1 MVP hoàn chỉnh, và những insight quý giá về làm việc nhóm dưới áp lực.",
			Content:    "## Coming soon...\nBài viết đang được hoàn thiện.",
			CoverImage: "/images/blog/hackathon.jpg",
			Tags:       "Experience,Hackathon",
			Date:       "Tháng 1/2025",
		},
	}
	for _, post := range posts {
		ctrl.DB.Create(&post)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Đã seed data thành công!",
		"counts": gin.H{
			"projects":     len(projects),
			"certificates": len(certs),
			"activities":   len(activities),
			"blog_posts":   len(posts),
		},
	})
}
