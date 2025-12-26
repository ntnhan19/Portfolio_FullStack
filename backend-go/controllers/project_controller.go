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

// ⭐ SEED DATA NÂNG CẤP với Content đầy đủ
func (ctrl *ProjectController) CreateSampleData(c *gin.Context) {
	// 💡 FIX: Khai báo fence để dùng cho Markdown code block
	const fence = "```"

	// --- A. Profile ---
	profile := models.Profile{
		FullName: "Nguyen Tran Ngoc Han",
		Title:    "Software Engineer | Full-Stack Developer",
		Bio:      "Sinh viên năm 4 Kỹ thuật phần mềm tại HUTECH. Đam mê xây dựng các hệ thống Backend hiệu năng cao, ứng dụng AI thực tế và tối ưu hóa hệ thống mạng.",
		Email:    "ngochanpt2018@gmail.com",
		Github:   "https://github.com/ntnhan19",
		LinkedIn: "https://linkedin.com/in/nguyentranngochan",
	}
	ctrl.DB.FirstOrCreate(&profile, models.Profile{Email: "ngochanpt2018@gmail.com"})

	// --- B. Projects với Content chi tiết ---
	projects := []models.Project{
		{
			Title:       "DocMentor - AI RAG Knowledge Base Agent",
			Description: "Hệ thống trợ lý AI tự động trả lời câu hỏi từ tài liệu PDF/Word bằng công nghệ RAG (Retrieval-Augmented Generation).",
			// Sử dụng nối chuỗi với biến fence để tránh lỗi syntax
			Content: `## 🎯 Tổng quan dự án

DocMentor là một ứng dụng AI Assistant sử dụng công nghệ RAG (Retrieval-Augmented Generation) để trả lời câu hỏi dựa trên nội dung tài liệu người dùng upload. Hệ thống giúp tiết kiệm 80% thời gian tra cứu thông tin trong các tài liệu dài.

## 🏗️ Kiến trúc hệ thống

### Tech Stack
- **Backend**: Python, FastAPI
- **AI/LLM**: LangChain, OpenAI GPT-4
- **Vector Database**: Pinecone
- **Frontend**: React.js, Tailwind CSS

### Luồng xử lý
` + fence + `
User Upload PDF/DOCX
    ↓
Document Processing (Chunking)
    ↓
Generate Embeddings (OpenAI)
    ↓
Store in Pinecone Vector DB
    ↓
User Query → Vector Search → GPT-4 Generate Answer
` + fence + `

## ⚙️ Tính năng chính

### 1. Document Processing
- Hỗ trợ PDF, DOCX, TXT
- Intelligent chunking với overlap để giữ context
- Metadata extraction tự động

### 2. RAG Pipeline
- Vector similarity search với độ chính xác 99%
- Context-aware retrieval
- Multi-document reasoning

### 3. Streaming Response
- Real-time response generation
- Token-by-token display
- Response time < 3s

## 📊 Kết quả đạt được

- ✅ Giảm 80% thời gian tra cứu tài liệu
- ✅ Xử lý đồng thời 50+ documents
- ✅ Response time trung bình: 2.5s
- ✅ Độ chính xác câu trả lời: 99%

## 🚀 Deployment

Hệ thống được deploy trên:
- Backend: Railway
- Frontend: Vercel
- Vector DB: Pinecone Cloud

## 💡 Bài học kinh nghiệm

1. **Chunking Strategy quan trọng**: Phải cân nhắc kỹ chunk size và overlap để không mất context
2. **Prompt Engineering**: Thiết kế system prompt phù hợp giúp tăng 40% độ chính xác
3. **Cost Optimization**: Sử dụng cache để giảm 60% chi phí API OpenAI`,
			TechStack:  "Python, FastAPI, LangChain, OpenAI API, Pinecone, React.js",
			Category:   "AI/LLM",
			RepoURL:    "https://github.com/ntnhan19/DocMentor",
			ImageUrl:   "/images/projects/docmentor.png",
			Metrics:    `{"accuracy": "99%", "response_time": "<3s", "documents": "50+"}`,
			Highlights: "AI-Powered,Vector Search,Production-Ready",
			Duration:   "2 tháng",
			TeamSize:   "Solo",
		},
		{
			Title:       "DHL Cinema - Real-time Movie Ticket Booking",
			Description: "Hệ thống đặt vé xem phim real-time với WebSocket, xử lý race condition bằng Redis distributed lock.",
			Content: `## 🎯 Vấn đề giải quyết

### Bài toán Race Condition
Khi có 1000 người cùng lúc chọn 1 ghế ngồi, làm sao đảm bảo chỉ có 1 người book thành công và 999 người còn lại nhận thông báo "Ghế đã được chọn"?

## 🏗️ Kiến trúc hệ thống

### Tech Stack
- **Backend**: Node.js, Express.js
- **Real-time**: Socket.io (WebSocket)
- **Database**: PostgreSQL
- **Cache & Lock**: Redis
- **Frontend**: React.js

### Architecture Diagram
` + fence + `
Client 1, 2, 3... → Socket.io Server
                  ↓
                Redis Lock Check
                  ↓
                PostgreSQL Transaction
                  ↓
                Broadcast to all clients
` + fence + `

## ⚙️ Giải pháp kỹ thuật

### 1. Redis Distributed Lock
` + fence + `javascript
// Khi user chọn ghế
const lockKey = "seat:${movieId}:${seatId}";
const lockAcquired = await redis.set(
  lockKey, 
  userId, 
  'EX', 30,  // Expire sau 30s
  'NX'       // Chỉ set nếu key chưa tồn tại
);

if (!lockAcquired) {
  return { error: 'Ghế đã được chọn bởi người khác' };
}
` + fence + `

### 2. WebSocket Real-time Update
` + fence + `javascript
// Broadcast khi có người book ghế
io.to("room-${movieId}").emit('seat:locked', {
  seatId: seatId,
  userId: userId,
  userName: userName
});
` + fence + `

### 3. Database Transaction
` + fence + `javascript
await db.transaction(async (trx) => {
  // 1. Check ghế còn trống
  const seat = await trx('seats')
    .where({ id: seatId })
    .forUpdate(); // Row-level lock
  
  // 2. Create booking
  await trx('bookings').insert({...});
  
  // 3. Update seat status
  await trx('seats').update({ status: 'booked' });
});
` + fence + `

## 📊 Performance Testing

### Load Test Results
- **Concurrent Users**: 1000 người cùng lúc
- **Success Rate**: 99.99%
- **Response Time**: 
  - P50: 120ms
  - P95: 180ms
  - P99: 250ms
- **Zero Double Booking**: ✅

### Test Scenario
` + fence + `bash
# Sử dụng Artillery
artillery quick --count 1000 --num 10 http://localhost:3000/book-seat
` + fence + `

## 🏆 Thành tích

- 🥉 **Top 3 - PIONE DREAM HACKATHON 2025**
- Được Ban giám khảo đánh giá cao về giải pháp xử lý concurrency

## 💡 Bài học kinh nghiệm

1. **Redis Lock Pattern**: Phải set expire time hợp lý để tránh deadlock
2. **WebSocket Scaling**: Cần Redis Adapter khi scale nhiều server
3. **Database Indexing**: Index đúng cột giúp tăng 10x performance
4. **Error Handling**: Luôn có fallback mechanism khi Redis down`,
			TechStack:  "Node.js, Express, Socket.io, PostgreSQL, Redis",
			Category:   "Network Programming",
			RepoURL:    "https://github.com/ntnhan19/Project_MovieTicketBooking_NodeJS",
			ImageUrl:   "/images/projects/cinema.png",
			Metrics:    `{"concurrent_users": "1000", "success_rate": "99.99%", "response_time": "<200ms"}`,
			Highlights: "Real-time,Race Condition Solved,Award Winner",
			Duration:   "3 tháng",
			TeamSize:   "4 người",
		},
	}

	for _, p := range projects {
		var exist models.Project
		if err := ctrl.DB.Where("title = ?", p.Title).First(&exist).Error; err == nil {
			ctrl.DB.Model(&exist).Updates(p)
		} else {
			ctrl.DB.Create(&p)
		}
	}

	// --- C. Certificates ---
	certs := []models.Certificate{
		{
			Name:     "Sinh viên 5 Tốt Cấp Khoa",
			Issuer:   "HUTECH University",
			Type:     "Title",
			Date:     "2024",
			ImageUrl: "/images/certs/sv5tot.jpg",
		},
		{
			Name:     "Sinh viên Tiêu Biểu Cấp Khoa",
			Issuer:   "HUTECH University",
			Type:     "Title",
			Date:     "2024",
			ImageUrl: "/images/certs/svtbieu.jpg",
		},
		{
			Name:     "Networking Basics (CCNA)",
			Issuer:   "Cisco Networking Academy",
			Type:     "Course",
			Date:     "Jan 2025",
			ImageUrl: "/images/certs/cisco_basics.jpg",
			Url:      "https://www.credly.com/badges/your-badge-id",
		},
		{
			Name:     "JavaScript Essentials 1 & 2",
			Issuer:   "Cisco Networking Academy",
			Type:     "Course",
			Date:     "Dec 2024",
			ImageUrl: "/images/certs/javascript2.jpg",
		},
		{
			Name:     "Top 3 - Genz's Thinking Contest",
			Issuer:   "HUTECH Innovation Club",
			Type:     "Award",
			Date:     "Oct 2024",
			ImageUrl: "/images/certs/genz_award.jpg",
		},
		{
			Name:     "Top 3 - PIONE DREAM HACKATHON 2025",
			Issuer:   "HUTECH University",
			Type:     "Award",
			Date:     "Jan 2025",
			ImageUrl: "/images/certs/pionehackathon.jpg",
		},
		{
			Name:     "Top 7 - Tư Tưởng Hồ Chí Minh",
			Issuer:   "HUTECH University",
			Type:     "Award",
			Date:     "Sep 2024",
			ImageUrl: "/images/certs/hcm_award.jpg",
		},
	}
	for _, c := range certs {
		ctrl.DB.FirstOrCreate(&c, models.Certificate{Name: c.Name})
	}

	// --- D. Activities ---
	activities := []models.Activity{
		{
			Name:        "Hội Thao Sinh Viên HUTECH 2024",
			Role:        "Vận động viên - Đội Cầu Lông",
			Description: "Tham gia thi đấu bộ môn Cầu Lông đôi nam nữ, đạt giải Khuyến khích. Đây là hoạt động giúp rèn luyện sức khỏe, tinh thần đồng đội và kết nối với bạn bè trong trường.",
			Date:        "Mar 2024",
			ImageUrl:    "/images/activities/hoithao.jpg",
		},
		{
			Name:        "Mùa Hè Xanh 2024 - Chiến dịch tình nguyện",
			Role:        "Tình nguyện viên - Đội Tin học",
			Description: "Tham gia đội hình dạy Tin học cơ bản cho trẻ em vùng cao, hỗ trợ chuyển đổi số cho chính quyền địa phương. Hoạt động kéo dài 2 tuần tại tỉnh Bình Phước.",
			Date:        "Jul 2024",
			ImageUrl:    "/images/activities/muahexanh.jpg",
		},
	}
	for _, a := range activities {
		ctrl.DB.FirstOrCreate(&a, models.Activity{Name: a.Name})
	}

	c.JSON(http.StatusOK, gin.H{"message": "✅ Data seeded successfully with full content!"})
}
