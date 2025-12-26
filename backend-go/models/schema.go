package models

import (
	"time"

	"gorm.io/gorm"
)

// 1. Project với Metrics mới
type Project struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Content     string `json:"content" gorm:"type:text"` // THÊM type:text cho markdown dài
	TechStack   string `json:"tech_stack"`
	Category    string `json:"category"`

	// ⭐ THÊM MỚI - Metrics
	Metrics    string `json:"metrics"`    // JSON string
	Highlights string `json:"highlights"` // Comma-separated
	Duration   string `json:"duration"`
	TeamSize   string `json:"team_size"`

	RepoURL   string         `json:"repo_url"`
	DemoURL   string         `json:"demo_url"`
	ImageUrl  string         `json:"image_url"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`
}

type Certificate struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Name      string    `json:"name"`
	Issuer    string    `json:"issuer"`
	Type      string    `json:"type"` // Title, Award, Course
	Date      string    `json:"date"`
	Url       string    `json:"url"`
	ImageUrl  string    `json:"image_url"`
	CreatedAt time.Time `json:"created_at"`
}

type Activity struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Name        string `json:"name"`
	Role        string `json:"role"`
	Description string `json:"description" gorm:"type:text"`
	ImageUrl    string `json:"image_url"`
	Date        string `json:"date"`
}

type Profile struct {
	ID       uint   `json:"id" gorm:"primaryKey"`
	FullName string `json:"full_name"`
	Title    string `json:"title"`
	Bio      string `json:"bio" gorm:"type:text"`
	Email    string `json:"email"`
	Github   string `json:"github"`
	LinkedIn string `json:"linkedin"`
}

type BlogPost struct {
	ID         uint           `json:"id" gorm:"primaryKey"`
	Title      string         `json:"title"`
	Summary    string         `json:"summary" gorm:"type:text"`
	Content    string         `json:"content" gorm:"type:text"`
	CoverImage string         `json:"cover_image"`
	Tags       string         `json:"tags"`
	Date       string         `json:"date"`
	CreatedAt  time.Time      `json:"created_at"`
	DeletedAt  gorm.DeletedAt `json:"deleted_at" gorm:"index"`
}
