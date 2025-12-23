package main

import (
	"log"
	"os"
	"portfolio-backend/controllers"
	"portfolio-backend/models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	// 1. Load biến môi trường
	godotenv.Load()

	// 2. Kết nối Database (PostgreSQL)
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL not found in .env")
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// 3. Auto Migrate (Tự động tạo bảng từ Code - Cực tiện cho đồ án gấp)
	db.AutoMigrate(&models.Project{}, &models.Profile{})

	// 4. Khởi tạo Router
	r := gin.Default()

	// Cấu hình CORS (Để Frontend Next.js gọi được)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, // Khi deploy nhớ đổi lại domain vercel
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
	}))

	// 5. Định nghĩa Routes
	ctrl := controllers.ProjectController{DB: db}

	api := r.Group("/api")
	{
		api.GET("/projects", ctrl.GetProjects)
		api.GET("/profile", ctrl.GetProfile)
		api.POST("/seed", ctrl.CreateSampleData) // API để tạo data giả test nhanh
	}

	// 6. Chạy Server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	r.Run(":" + port)
}
