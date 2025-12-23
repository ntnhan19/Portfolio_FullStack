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

// Lấy danh sách dự án
func (ctrl *ProjectController) GetProjects(c *gin.Context) {
	var projects []models.Project
	result := ctrl.DB.Order("created_at desc").Find(&projects) // Mới nhất lên đầu
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, projects)
}

// Lấy Profile
func (ctrl *ProjectController) GetProfile(c *gin.Context) {
	var profile models.Profile
	result := ctrl.DB.First(&profile)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Profile not found"})
		return
	}
	c.JSON(http.StatusOK, profile)
}

// NẠP DỮ LIỆU THẬT (Chạy 1 lần là có đủ data)
func (ctrl *ProjectController) CreateSampleData(c *gin.Context) {
	// 1. Tạo Profile
	profile := models.Profile{
		FullName: "Nguyen Tran Ngoc Han",
		Title:    "Aspiring Software Engineer | Full-Stack Developer",
		Bio:      "Sinh viên năm 4 Kỹ thuật phần mềm tại HUTECH. Đam mê xây dựng các hệ thống Backend hiệu năng cao và ứng dụng AI thực tế.",
		Email:    "ngochanpt2018@gmail.com",
		Github:   "https://github.com/ntnhan19",
		LinkedIn: "https://linkedin.com/in/nguyentranngochan",
	}
	ctrl.DB.FirstOrCreate(&profile, models.Profile{Email: "ngochanpt2018@gmail.com"})

	// 2. Tạo Projects
	projects := []models.Project{
		{
			Title:       "AI RAG Knowledge Base Agent",
			Description: "Hệ thống trợ lý AI hỗ trợ sinh viên/giảng viên trích xuất thông tin từ tài liệu tải lên.",
			Content:     "## Tổng quan\n\nDự án sử dụng mô hình RAG (Retrieval-Augmented Generation) để cho phép AI trả lời câu hỏi dựa trên dữ liệu riêng của người dùng.\n\n### Công nghệ\n* **Backend:** Python FastAPI\n* **AI/LLM:** LangChain, OpenAI API\n* **Database:** PostgreSQL (pgvector)\n* **Frontend:** React.js",
			TechStack:   "Python, FastAPI, LangChain, React.js, PostgreSQL",
			Category:    "AI/LLM",
			RepoURL:     "https://github.com/ntnhan19/DocMentor",
			DemoURL:     "https://ai-agent-demo.render.com",
		},
		{
			Title:       "Real-time Movie Ticket Booking",
			Description: "Hệ thống đặt vé xem phim thời gian thực, xử lý xung đột ghế ngồi (Đồ án Lập trình mạng).",
			Content:     "## Bài toán Race Condition\n\nXử lý trường hợp 2 người cùng chọn 1 ghế cùng lúc. Sử dụng Socket.io để khóa ghế theo thời gian thực.\n\n### Điểm nhấn kỹ thuật\n* **Socket.io:** Giao tiếp 2 chiều Client-Server.\n* **Node.js:** Xử lý bất đồng bộ.\n* **Transaction:** Đảm bảo tính toàn vẹn dữ liệu.",
			TechStack:   "Node.js, Express, Socket.io, React.js, PostgreSQL",
			Category:    "Network Programming", // Quan trọng để lọc làm báo cáo
			RepoURL:     "https://github.com/ntnhan19/movie-booking",
		},
	}

	for _, p := range projects {
		ctrl.DB.FirstOrCreate(&p, models.Project{Title: p.Title})
	}

	c.JSON(http.StatusOK, gin.H{"message": "Data seeded successfully!"})
}
