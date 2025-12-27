(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,26568,(e,t,n)=>{"use strict";var i=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,o=/^\s*/,s=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,c=/^\s+|\s+$/g;function h(e){return e?e.replace(c,""):""}t.exports=function(e,t){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,c=1;function d(e){var t=e.match(r);t&&(n+=t.length);var i=e.lastIndexOf("\n");c=~i?e.length-i:c+e.length}function p(){var e={line:n,column:c};return function(t){return t.position=new f(e),g(o),t}}function f(e){this.start=e,this.end={line:n,column:c},this.source=t.source}function m(i){var r=Error(t.source+":"+n+":"+c+": "+i);if(r.reason=i,r.filename=t.source,r.line=n,r.column=c,r.source=e,t.silent);else throw r}function g(t){var n=t.exec(e);if(n){var i=n[0];return d(i),e=e.slice(i.length),n}}function y(e){var t;for(e=e||[];t=x();)!1!==t&&e.push(t);return e}function x(){var t=p();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;""!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,""===e.charAt(n-1))return m("End of comment missing");var i=e.slice(2,n-2);return c+=2,d(i),e=e.slice(n),c+=2,t({type:"comment",comment:i})}}f.prototype.content=e,g(o);var v,b=[];for(y(b);v=function(){var e=p(),t=g(s);if(t){if(x(),!g(a))return m("property missing ':'");var n=g(l),r=e({type:"declaration",property:h(t[0].replace(i,"")),value:n?h(n[0].replace(i,"")):""});return g(u),r}}();)!1!==v&&(b.push(v),y(b));return b}},70454,(e,t,n)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){let n=null;if(!e||"string"!=typeof e)return n;let i=(0,r.default)(e),o="function"==typeof t;return i.forEach(e=>{if("declaration"!==e.type)return;let{property:i,value:r}=e;o?t(i,r,e):r&&((n=n||{})[i]=r)}),n};let r=i(e.r(26568))},65185,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.camelCase=void 0;var i=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,o=/^[^-]+$/,s=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,l=function(e,t){return t.toUpperCase()},u=function(e,t){return"".concat(t,"-")};n.camelCase=function(e,t){var n;return(void 0===t&&(t={}),!(n=e)||o.test(n)||i.test(n))?e:(e=e.toLowerCase(),(e=t.reactCompat?e.replace(a,u):e.replace(s,u)).replace(r,l))}},15511,(e,t,n)=>{"use strict";var i=(e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(e.r(70454)),r=e.r(65185);function o(e,t){var n={};return e&&"string"==typeof e&&(0,i.default)(e,function(e,i){e&&i&&(n[(0,r.camelCase)(e,t)]=i)}),n}o.default=o,t.exports=o},4100,(e,t,n)=>{"use strict";var i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},l=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,n=i.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&i.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!o)return!1;for(t in e);return void 0===t||i.call(e,t)},u=function(e,t){o&&"__proto__"===t.name?o(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},c=function(e,t){if("__proto__"===t){if(!i.call(e,t))return;else if(s)return s(e,t).value}return e[t]};t.exports=function e(){var t,n,i,r,o,s,h=arguments[0],d=1,p=arguments.length,f=!1;for("boolean"==typeof h&&(f=h,h=arguments[1]||{},d=2),(null==h||"object"!=typeof h&&"function"!=typeof h)&&(h={});d<p;++d)if(t=arguments[d],null!=t)for(n in t)i=c(h,n),h!==(r=c(t,n))&&(f&&r&&(l(r)||(o=a(r)))?(o?(o=!1,s=i&&a(i)?i:[]):s=i&&l(i)?i:{},u(h,{name:n,newValue:e(f,s,r)})):void 0!==r&&u(h,{name:n,newValue:r}));return h}},31713,e=>{"use strict";let t,n,i,r;var o,s=e.i(43476);let a="/Portfolio_ntngochan",l={full_name:"Nguyễn Trần Ngọc Hân",title:"Sinh viên Kỹ thuật Phần mềm | Ứng viên Backend Developer Intern",bio:`L\xe0 sinh vi\xean năm 4 chuy\xean ng\xe0nh Kỹ thuật Phần mềm tại HUTECH, t\xf4i đ\xe3 x\xe2y dựng nền tảng vững chắc về Backend Development th\xf4ng qua c\xe1c dự \xe1n học thuật v\xe0 tự học.

**Điểm mạnh:**
- X\xe2y dựng RESTful API với Go (Gin) v\xe0 Node.js (Express)
- Thiết kế database schema v\xe0 tối ưu query với PostgreSQL
- Xử l\xfd real-time communication với WebSocket/Socket.io
- L\xe0m việc với AI/LLM: RAG pipeline, Vector Database (Pinecone)

**Mục ti\xeau:** T\xecm kiếm vị tr\xed Backend Developer Intern tại c\xe1c c\xf4ng ty c\xf4ng nghệ để học hỏi kinh nghiệm thực tế về hệ thống quy m\xf4 lớn, microservices architecture v\xe0 best practices từ c\xe1c senior developers.`,email:"ngochanpt2018@gmail.com",github:"https://github.com/ntnhan19",linkedin:"https://linkedin.com/in/nguyentranngochan",avatar:`${a}/avatar.jpg`},u=[{id:1,title:"Hành trình từ .NET sang Go: Tại sao tôi chuyển stack?",summary:"Chia sẻ trải nghiệm học Golang sau 1 năm làm việc với C# .NET. Performance benchmark, learning curve, và những cú sốc văn hóa.",content:`# H\xe0nh tr\xecnh từ .NET sang Go: Tại sao t\xf4i chuyển stack?
  
  ## 🎯 Bối cảnh chuyển đổi
  
  Sau 1 năm l\xe0m việc với **C# v\xe0 .NET Framework** trong c\xe1c dự \xe1n học tập, t\xf4i quyết định học **Golang** v\xe0o th\xe1ng 9/2024. Kh\xf4ng phải v\xec .NET kh\xf4ng tốt, m\xe0 v\xec t\xf4i muốn trải nghiệm một paradigm ho\xe0n to\xe0n kh\xe1c biệt.
  
  ## 📊 So s\xe1nh đầu ti\xean: Hello World Performance
  
  ### C# (.NET 8)
  \`\`\`csharp
  // Program.cs
  var builder = WebApplication.CreateBuilder(args);
  var app = builder.Build();
  
  app.MapGet("/", () => "Hello World");
  app.Run();
  \`\`\`
  
  ### Go (Gin Framework)
  \`\`\`go
  // main.go
  package main
  
  import "github.com/gin-gonic/gin"
  
  func main() {
      r := gin.Default()
      r.GET("/", func(c *gin.Context) {
          c.JSON(200, gin.H{"message": "Hello World"})
      })
      r.Run(":8080")
  }
  \`\`\`
  
  **Benchmark với Apache Bench (10,000 requests, concurrency 100):**
  
  | Metric | .NET 8 | Go (Gin) |
  |--------|--------|----------|
  | Requests/sec | 8,943 | 12,456 |
  | Time per request | 11.2ms | 8.0ms |
  | Memory usage | 45MB | 12MB |
  
  ## 🤯 Những "culture shock" khi chuyển sang Go
  
  ### 1. Error Handling: Từ Try-Catch sang if err != nil
  
  **C# style:**
  \`\`\`csharp
  try {
      var data = await _repo.GetUserById(id);
      return Ok(data);
  } catch (Exception ex) {
      _logger.LogError(ex, "Error fetching user");
      return StatusCode(500, "Internal Server Error");
  }
  \`\`\`
  
  **Go style:**
  \`\`\`go
  data, err := repo.GetUserById(id)
  if err != nil {
      log.Printf("Error fetching user: %v", err)
      c.JSON(500, gin.H{"error": "Internal Server Error"})
      return
  }
  c.JSON(200, data)
  \`\`\`
  
  **Suy nghĩ ban đầu:** "Sao phải check error mọi l\xfac thế n\xe0y? Mệt qu\xe1!"  
  **Sau 2 th\xe1ng:** "Ồ, c\xe1ch n\xe0y gi\xfap t\xf4i handle edge cases tốt hơn nhiều!"
  
  ### 2. Kh\xf4ng c\xf3 Class, chỉ c\xf3 Struct + Methods
  
  **C# OOP:**
  \`\`\`csharp
  public class UserService {
      private readonly IUserRepository _repo;
      
      public UserService(IUserRepository repo) {
          _repo = repo;
      }
      
      public async Task<User> GetUser(int id) {
          return await _repo.FindById(id);
      }
  }
  \`\`\`
  
  **Go composition:**
  \`\`\`go
  type UserService struct {
      repo UserRepository
  }
  
  func NewUserService(repo UserRepository) *UserService {
      return &UserService{repo: repo}
  }
  
  func (s *UserService) GetUser(id int) (*User, error) {
      return s.repo.FindById(id)
  }
  \`\`\`
  
  ### 3. Goroutines vs Tasks/Async-Await
  
  **C#:**
  \`\`\`csharp
  var tasks = users.Select(async user => {
      return await ProcessUserAsync(user);
  });
  var results = await Task.WhenAll(tasks);
  \`\`\`
  
  **Go:**
  \`\`\`go
  var wg sync.WaitGroup
  results := make(chan Result, len(users))
  
  for _, user := range users {
      wg.Add(1)
      go func(u User) {
          defer wg.Done()
          results <- ProcessUser(u)
      }(user)
  }
  
  wg.Wait()
  close(results)
  \`\`\`
  
  ## 💡 Khi n\xe0o n\xean d\xf9ng Go vs .NET?
  
  ### Chọn Go khi:
  - X\xe2y dựng microservices, API servers
  - Cần performance cao, resource usage thấp
  - L\xe0m việc với concurrent programming nhiều
  - DevOps tools, CLI applications
  
  ### Chọn .NET khi:
  - Enterprise applications với business logic phức tạp
  - Team đ\xe3 quen thuộc với C# ecosystem
  - Cần Entity Framework, LINQ, v\xe0 c\xe1c abstractions cao cấp
  - Windows-first environment
  
  ## 🎓 B\xe0i học r\xfat ra
  
  1. **Simplicity is not easy**: Go c\xf3 \xedt features hơn, nhưng viết code đơn giản đ\xfang c\xe1ch lại kh\xf3
  2. **Performance matters**: Trong m\xf4i trường production, 40% memory savings thực sự quan trọng
  3. **Learning curve**: Go dễ học hơn C# rất nhiều (1 tuần vs 3 th\xe1ng để "fluent")
  
  ## 🚀 Kết luận
  
  T\xf4i kh\xf4ng hối hận khi học Go. Nhưng t\xf4i cũng kh\xf4ng từ bỏ .NET. Mỗi c\xf4ng cụ c\xf3 use case ri\xeang. Quan trọng l\xe0 hiểu **khi n\xe0o d\xf9ng c\xe1i g\xec**.
  
  **Lời khuy\xean cho bạn đọc:** Đừng theo trend m\xf9 qu\xe1ng. H\xe3y thử cả hai v\xe0 tự đ\xe1nh gi\xe1 ph\xf9 hợp với m\xecnh nhất.`,cover_image:`${a}/images/blog/golang_vs_dotnet.jpg`,tags:"Career,Backend,Golang",date:"27/12/2024"},{id:2,title:"3 bài học quý giá từ Hackathon PIONE DREAM 2025",summary:"48 giờ không ngủ, 1 MVP hoàn chỉnh, và những insight quý giá về làm việc nhóm dưới áp lực thời gian.",content:`# 3 b\xe0i học qu\xfd gi\xe1 từ Hackathon PIONE DREAM 2025

## 🏆 Context

V\xe0o th\xe1ng 1/2025, t\xf4i c\xf9ng 2 bạn trong lớp tham gia **PIONE DREAM HACKATHON** do HUTECH tổ chức. Theme của năm nay l\xe0 **"Smart City Solutions"**.

**Team của ch\xfang t\xf4i:**
- T\xf4i: Backend Developer (Go + PostgreSQL)
- Bạn A: Frontend Developer (React + TailwindCSS)
- Bạn B: UI/UX Designer + PM

**\xdd tưởng:** Web app gi\xfap người d\xe2n b\xe1o c\xe1o c\xe1c vấn đề về hạ tầng đ\xf4 thị (ổ g\xe0, đ\xe8n đường hỏng, r\xe1c thải...) với geolocation v\xe0 status tracking real-time.

## ⏰ Timeline 48 giờ

### Giờ 0-6: Brainstorming & Setup
- Tranh luận nảy lửa về tech stack
- T\xf4i nhất quyết d\xf9ng Go thay v\xec Node.js (v\xec tự tin hơn)
- Setup Dockerized dev environment
- Thiết kế database schema

### Giờ 6-24: Coding Marathon
- T\xf4i code API endpoints li\xean tục
- Mắc bug lớn: Forgot to handle CORS properly
- Frontend kh\xf4ng gọi được API → mất 2 giờ debug

### Giờ 24-36: Integration Hell
- Merge code từ 2 branches → conflict ở mọi file
- Database migration failed → rollback → panic
- Team gần như bỏ cuộc l\xfac 3h s\xe1ng

### Giờ 36-48: The Final Push
- Deploy l\xean Railway (thay v\xec Heroku v\xec free tier tốt hơn)
- Viết pitch deck vội v\xe0ng
- Rehearse presentation 5 lần

## 📚 3 B\xc0I HỌC QUAN TRỌNG

### B\xe0i học #1: Communication > Coding Skills

**Vấn đề:** T\xf4i code xong API endpoint **/ reports** nhưng qu\xean th\xf4ng b\xe1o cho Frontend.

**Hậu quả:** Frontend dev viết mock data, l\xe3ng ph\xed 3 giờ.

**Giải ph\xe1p học được:**
- D\xf9ng **Notion** để track tasks real-time
- Mỗi 2 giờ c\xf3 1 sync meeting ngắn (5 ph\xfat)
- Document API endpoints trong **Postman Collection** ngay khi code xong

### B\xe0i học #2: Perfect is the enemy of done

**Vấn đề:** T\xf4i muốn implement **JWT refresh token** + **Redis caching**.

**Thực tế:** Hackathon chỉ cần MVP chạy được, kh\xf4ng cần production-ready.

**Giải ph\xe1p:**
- D\xf9ng simple JWT, kh\xf4ng c\xf3 refresh token
- Cache in-memory thay v\xec Redis
- Focus on features that judges will see: UI demo, pitch deck

### B\xe0i học #3: Technical debt is OK in hackathons

**Code t\xf4i viết trong hackathon:**
\`\`\`go
// TODO: Refactor this later
if err != nil {
    log.Println(err) // Just log, no proper error handling
    return
}

// Hardcoded config (should use env vars)
db, _ := sql.Open("postgres", "postgresql://user:pass@localhost/db")
\`\`\`

**Suy nghĩ ban đầu:** "Code n\xe0y qu\xe1 tệ, phải refactor!"

**B\xe0i học:** Hackathon kh\xf4ng phải production. Ship first, refactor never (trong context n\xe0y).

## 🎯 Kết quả

- **Giải Ba** (trong 15 teams)
- **Feedback từ judges:** "\xdd tưởng hay, demo mượt, nhưng thiếu business model"
- **Prize:** 3,000,000 VNĐ + Certificate

## 💭 Reflection

**Điều t\xf4i l\xe0m đ\xfang:**
- Chọn tech stack m\xecnh th\xe0nh thạo
- Kh\xf4ng spend time v\xe0o features kh\xf4ng quan trọng
- Team chemistry tốt (quan trọng nhất)

**Điều t\xf4i l\xe0m sai:**
- Kh\xf4ng ngủ → L\xe0m việc inefficient v\xe0o giờ 30-40
- Qu\xe1 focus v\xe0o backend → Pitch deck yếu

**Lời khuy\xean cho lần sau:**
1. Sleep at least 4 hours
2. Spend 50% time on pitch, not just coding
3. Use simpler tech stack (even if less "cool")

## 🚀 Tổng kết

Hackathon dạy t\xf4i những thứ m\xe0 kh\xf4ng một m\xf4n học n\xe0o dạy được:
- L\xe0m việc dưới pressure
- Prioritization khi resources limited
- Team collaboration in chaos

**Worth it?** Absolutely. Sẽ tham gia lần nữa năm sau!`,cover_image:`${a}/images/blog/hackathon.jpg`,tags:"Experience,Hackathon,Soft Skills",date:"26/12/2024"},{id:3,title:"Java Collections Framework: ArrayList vs LinkedList",summary:"So sánh chi tiết hiệu năng và cách sử dụng ArrayList và LinkedList trong Java. Khi nào nên dùng cái nào để tối ưu bộ nhớ?",content:`# Java Collections Framework: ArrayList vs LinkedList

## Giới thiệu

ArrayList v\xe0 LinkedList l\xe0 2 implementation phổ biến của List interface trong Java. Hiểu r\xf5 sự kh\xe1c biệt giữa ch\xfang gi\xfap chọn đ\xfang data structure cho từng b\xe0i to\xe1n.

## 1. Cấu tr\xfac dữ liệu

### ArrayList
- Sử dụng **dynamic array** b\xean trong
- C\xe1c phần tử được lưu **li\xean tiếp** trong bộ nhớ
- K\xedch thước tăng tự động (capacity x 1.5 khi đầy)

\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("Java");  // O(1) - amortized
list.get(0);       // O(1) - truy cập trực tiếp
\`\`\`

### LinkedList
- Sử dụng **doubly linked list**
- Mỗi node chứa: data, pointer đến next v\xe0 previous
- Kh\xf4ng cần memory li\xean tiếp

\`\`\`java
LinkedList<String> list = new LinkedList<>();
list.add("Java");     // O(1)
list.get(0);          // O(n) - phải duyệt từ đầu
\`\`\`

## 2. Performance Comparison

| Operation | ArrayList | LinkedList |
|-----------|-----------|------------|
| get(index) | O(1) | O(n) |
| add(element) | O(1)* | O(1) |
| add(index, element) | O(n) | O(n) |
| remove(index) | O(n) | O(n) |

*: Amortized time - đ\xf4i khi O(n) khi resize

## 3. Khi n\xe0o d\xf9ng c\xe1i n\xe0o?

### D\xf9ng ArrayList khi:
- Cần **truy cập random** nhiều (get/set by index)
- Th\xeam/x\xf3a chủ yếu ở **cuối list**
- Memory overhead thấp hơn

### D\xf9ng LinkedList khi:
- Th\xeam/x\xf3a **ở đầu** list thường xuy\xean
- Duyệt tuần tự (iterator)
- Kh\xf4ng cần random access

## 4. V\xed dụ thực tế

\`\`\`java
// ArrayList - Truy cập nhanh
List<Student> students = new ArrayList<>();
students.add(new Student("Nam", 20));
students.add(new Student("H\xe2n", 21));

// Truy cập index nhanh O(1)
Student first = students.get(0);

// LinkedList - Th\xeam/x\xf3a đầu nhanh
Deque<Task> taskQueue = new LinkedList<>();
taskQueue.addFirst(new Task("Urgent"));  // O(1)
taskQueue.removeFirst();                 // O(1)
\`\`\`

## 5. Benchmark thực tế

\`\`\`java
// Test với 100,000 phần tử
List<Integer> arrayList = new ArrayList<>();
List<Integer> linkedList = new LinkedList<>();

// Add operations
long start = System.nanoTime();
for (int i = 0; i < 100000; i++) {
    arrayList.add(i);
}
System.out.println("ArrayList add: " + (System.nanoTime() - start) / 1000000 + "ms");
// Output: ~5ms

start = System.nanoTime();
for (int i = 0; i < 100000; i++) {
    linkedList.add(i);
}
System.out.println("LinkedList add: " + (System.nanoTime() - start) / 1000000 + "ms");
// Output: ~8ms

// Get operations
start = System.nanoTime();
for (int i = 0; i < 1000; i++) {
    arrayList.get(50000);
}
System.out.println("ArrayList get: " + (System.nanoTime() - start) / 1000000 + "ms");
// Output: ~0.1ms

start = System.nanoTime();
for (int i = 0; i < 1000; i++) {
    linkedList.get(50000);
}
System.out.println("LinkedList get: " + (System.nanoTime() - start) / 1000000 + "ms");
// Output: ~150ms (!!!)
\`\`\`

## 6. Kết luận

- **ArrayList**: Default choice cho hầu hết trường hợp
- **LinkedList**: Chỉ khi cần thao t\xe1c đầu/cuối thường xuy\xean
- Lu\xf4n benchmark với data thực tế!

**Rule of thumb:** Nếu nghi ngờ, d\xf9ng ArrayList.`,cover_image:`${a}/images/blog/java-collections.jpg`,tags:"Java,Data Structures",date:"15/12/2024"},{id:4,title:"Java Stream API: Lập trình hàm trong Java 8+",summary:"Stream API giúp code Java ngắn gọn và dễ đọc hơn. Tìm hiểu cách sử dụng map, filter, reduce hiệu quả.",content:`# Java Stream API: Lập tr\xecnh h\xe0m trong Java 8+

## 🎯 Tại sao cần Stream API?

Trước Java 8, để xử l\xfd collection, ch\xfang ta phải viết nhiều boilerplate code:

\`\`\`java
// C\xe1ch cũ: T\xecm sinh vi\xean c\xf3 điểm > 8.0
List<Student> topStudents = new ArrayList<>();
for (Student student : students) {
    if (student.getGrade() > 8.0) {
        topStudents.add(student);
    }
}

// C\xe1ch mới với Stream (Java 8+)
List<Student> topStudents = students.stream()
    .filter(s -> s.getGrade() > 8.0)
    .collect(Collectors.toList());
\`\`\`

**Ưu điểm:**
- Code ngắn gọn, dễ đọc hơn
- Hỗ trợ parallel processing dễ d\xe0ng
- Functional programming style

## 1. Ba loại operations trong Stream

### 1.1. Intermediate Operations (Lazy)
Operations trả về Stream mới, chưa execute ngay:

\`\`\`java
Stream<Student> stream = students.stream()
    .filter(s -> s.getAge() > 18)    // Chưa chạy
    .map(Student::getName)            // Chưa chạy
    .distinct();                      // Chưa chạy
    
// Chỉ chạy khi gọi terminal operation
List<String> names = stream.collect(Collectors.toList()); // Execute!
\`\`\`

### 1.2. Terminal Operations
Operations kết th\xfac stream v\xe0 trả về kết quả:

\`\`\`java
students.stream()
    .filter(s -> s.getGrade() > 8.0)
    .count();                    // Terminal → return long

students.stream()
    .filter(s -> s.getGrade() > 8.0)
    .forEach(System.out::println); // Terminal → return void
\`\`\`

### 1.3. Short-circuiting Operations
Operations dừng sớm khi t\xecm được kết quả:

\`\`\`java
boolean hasTopStudent = students.stream()
    .anyMatch(s -> s.getGrade() > 9.5); // Dừng ngay khi t\xecm thấy

Optional<Student> first = students.stream()
    .filter(s -> s.getAge() < 18)
    .findFirst(); // Dừng sau khi t\xecm được 1 phần tử
\`\`\`

## 2. C\xe1c operations phổ biến

### map() - Transform elements

\`\`\`java
// Lấy danh s\xe1ch t\xean sinh vi\xean
List<String> names = students.stream()
    .map(Student::getName)
    .collect(Collectors.toList());

// Chuyển sang uppercase
List<String> upperNames = students.stream()
    .map(Student::getName)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
\`\`\`

### filter() - Lọc elements

\`\`\`java
// Sinh vi\xean > 20 tuổi
List<Student> adults = students.stream()
    .filter(s -> s.getAge() > 20)
    .collect(Collectors.toList());

// Chain nhiều filters
List<Student> filtered = students.stream()
    .filter(s -> s.getAge() > 18)
    .filter(s -> s.getGrade() > 7.0)
    .filter(s -> s.getMajor().equals("IT"))
    .collect(Collectors.toList());
\`\`\`

### reduce() - Aggregate values

\`\`\`java
// T\xednh tổng điểm
double totalGrade = students.stream()
    .map(Student::getGrade)
    .reduce(0.0, Double::sum);

// T\xecm max
Optional<Double> maxGrade = students.stream()
    .map(Student::getGrade)
    .reduce(Double::max);

// Concatenate strings
String allNames = students.stream()
    .map(Student::getName)
    .reduce("", (a, b) -> a + ", " + b);
\`\`\`

## 3. Collectors - Xử l\xfd kết quả

### Grouping

\`\`\`java
// Group by major
Map<String, List<Student>> byMajor = students.stream()
    .collect(Collectors.groupingBy(Student::getMajor));

// Count by major
Map<String, Long> countByMajor = students.stream()
    .collect(Collectors.groupingBy(
        Student::getMajor,
        Collectors.counting()
    ));
\`\`\`

### Partitioning

\`\`\`java
// Chia th\xe0nh 2 nh\xf3m: pass/fail
Map<Boolean, List<Student>> passFail = students.stream()
    .collect(Collectors.partitioningBy(s -> s.getGrade() >= 5.0));

List<Student> passed = passFail.get(true);
List<Student> failed = passFail.get(false);
\`\`\`

### Custom Collectors

\`\`\`java
// Joining với delimiter
String names = students.stream()
    .map(Student::getName)
    .collect(Collectors.joining(", ", "[", "]"));
// Result: "[Nam, H\xe2n, Trung]"

// Statistics
DoubleSummaryStatistics stats = students.stream()
    .collect(Collectors.summarizingDouble(Student::getGrade));

System.out.println("Average: " + stats.getAverage());
System.out.println("Max: " + stats.getMax());
\`\`\`

## 4. Parallel Streams

\`\`\`java
// Sequential (default)
long count = students.stream()
    .filter(s -> s.getGrade() > 8.0)
    .count();

// Parallel - sử dụng multiple threads
long count = students.parallelStream()
    .filter(s -> s.getGrade() > 8.0)
    .count();
\`\`\`

**⚠️ Cảnh b\xe1o:**
- Chỉ d\xf9ng parallel với operations **stateless** v\xe0 **no side-effects**
- Kh\xf4ng tự \xfd d\xf9ng parallel, benchmark trước!

## 5. Common Pitfalls

### ❌ KH\xd4NG l\xe0m thế n\xe0y:

\`\`\`java
// Modify external state (side effect)
List<String> result = new ArrayList<>();
students.stream()
    .forEach(s -> result.add(s.getName())); // BAD!

// Correct way
List<String> result = students.stream()
    .map(Student::getName)
    .collect(Collectors.toList()); // GOOD!
\`\`\`

### ❌ Reuse stream:

\`\`\`java
Stream<Student> stream = students.stream();
stream.forEach(System.out::println);
stream.count(); // IllegalStateException!

// Stream can only be used once!
\`\`\`

## 6. Kết luận

**Khi n\xe0o n\xean d\xf9ng Stream:**
- ✅ Operations đơn giản: filter, map, collect
- ✅ Cần parallel processing
- ✅ Code ngắn gọn, readable

**Khi n\xe0o KH\xd4NG n\xean d\xf9ng:**
- ❌ Operations phức tạp với nhiều side effects
- ❌ Performance critical với small collections
- ❌ Debugging kh\xf3 (stack trace kh\xf4ng r\xf5 r\xe0ng)

**Rule of thumb:** Nếu for-loop đơn giản hơn, h\xe3y d\xf9ng for-loop!`,cover_image:`${a}/images/blog/java-streams.jpg`,tags:"Java,Functional Programming",date:"20/12/2024"},{id:5,title:"Java Exception Handling: Best Practices",summary:"Cách xử lý exceptions đúng chuẩn trong Java - try-catch, custom exceptions, và error handling patterns.",content:`# Java Exception Handling: Best Practices

## 🎯 Exception l\xe0 g\xec?

**Exception** l\xe0 một event xảy ra trong qu\xe1 tr\xecnh thực thi chương tr\xecnh l\xe0m gi\xe1n đoạn flow b\xecnh thường.

\`\`\`java
int result = 10 / 0; // ArithmeticException!
\`\`\`

## 1. Hierarchy of Exceptions

\`\`\`
Throwable
├── Error (Unchecked)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception
    ├── RuntimeException (Unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   └── IllegalArgumentException
    └── Checked Exceptions
        ├── IOException
        ├── SQLException
        └── ClassNotFoundException
\`\`\`

### Checked vs Unchecked

**Checked Exceptions:**
- Compiler bắt buộc phải handle
- V\xed dụ: IOException, SQLException

\`\`\`java
// Phải c\xf3 try-catch hoặc throws
public void readFile() throws IOException {
    FileReader fr = new FileReader("file.txt");
}
\`\`\`

**Unchecked Exceptions:**
- RuntimeException v\xe0 subclasses
- Kh\xf4ng bắt buộc handle

\`\`\`java
// Kh\xf4ng bắt buộc try-catch
public void divide(int a, int b) {
    return a / b; // C\xf3 thể throw ArithmeticException
}
\`\`\`

## 2. Try-Catch Basics

### Cơ bản

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}
\`\`\`

### Multiple Catch Blocks

\`\`\`java
try {
    String text = null;
    text.length(); // NullPointerException
    int num = Integer.parseInt("abc"); // NumberFormatException
} catch (NullPointerException e) {
    System.out.println("Null value!");
} catch (NumberFormatException e) {
    System.out.println("Invalid number format!");
}
\`\`\`

### Multi-catch (Java 7+)

\`\`\`java
try {
    // some code
} catch (IOException | SQLException e) {
    System.out.println("Database or File error: " + e.getMessage());
}
\`\`\`

### Finally Block

\`\`\`java
FileReader fr = null;
try {
    fr = new FileReader("file.txt");
    // read file
} catch (IOException e) {
    e.printStackTrace();
} finally {
    // ALWAYS execute
    if (fr != null) {
        try {
            fr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

### Try-with-resources (Java 7+)

\`\`\`java
// Auto-close resources
try (FileReader fr = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
// fr v\xe0 br tự động close!
\`\`\`

## 3. Custom Exceptions

### Tạo Exception ri\xeang

\`\`\`java
public class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: " + amount);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}
\`\`\`

### Sử dụng

\`\`\`java
public class BankAccount {
    private double balance;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
}

// Client code
try {
    account.withdraw(1000);
} catch (InsufficientFundsException e) {
    System.out.println("Need more: " + e.getAmount());
}
\`\`\`

## 4. Best Practices

### ✅ DO: Catch specific exceptions

\`\`\`java
// GOOD
try {
    // code
} catch (FileNotFoundException e) {
    // Handle file not found
} catch (IOException e) {
    // Handle other IO errors
}

// BAD - Qu\xe1 general
try {
    // code
} catch (Exception e) { // Catch all!
    // What happened???
}
\`\`\`

### ✅ DO: Provide context in exceptions

\`\`\`java
// GOOD
throw new IllegalArgumentException(
    "User ID must be positive, got: " + userId
);

// BAD - No context
throw new IllegalArgumentException("Invalid input");
\`\`\`

### ✅ DO: Log exceptions properly

\`\`\`java
// GOOD
try {
    // code
} catch (SQLException e) {
    logger.error("Failed to query user with ID: " + userId, e);
    throw new UserNotFoundException("User not found: " + userId);
}

// BAD - Swallow exception
try {
    // code
} catch (Exception e) {
    // Do nothing
}
\`\`\`

### ❌ DON'T: Use exceptions for control flow

\`\`\`java
// BAD
try {
    int i = 0;
    while (true) {
        array[i++];
    }
} catch (ArrayIndexOutOfBoundsException e) {
    // End of array
}

// GOOD
for (int i = 0; i < array.length; i++) {
    // process array[i]
}
\`\`\`

### ❌ DON'T: Catch Throwable or Error

\`\`\`java
// BAD - Don't catch Error!
try {
    // code
} catch (Throwable t) {
    // This catches OutOfMemoryError, StackOverflowError, etc.
}

// GOOD
try {
    // code
} catch (Exception e) {
    // Handle application exceptions only
}
\`\`\`

## 5. Exception Handling Patterns

### Pattern 1: Fail Fast

\`\`\`java
public void processUser(User user) {
    if (user == null) {
        throw new IllegalArgumentException("User cannot be null");
    }
    if (user.getId() < 0) {
        throw new IllegalArgumentException("User ID must be positive");
    }
    // Process user
}
\`\`\`

### Pattern 2: Wrap and Rethrow

\`\`\`java
public User getUser(int id) {
    try {
        return database.queryUser(id);
    } catch (SQLException e) {
        throw new UserNotFoundException("User not found: " + id, e);
    }
}
\`\`\`

### Pattern 3: Retry Mechanism

\`\`\`java
public void fetchDataWithRetry(String url) {
    int maxRetries = 3;
    int attempt = 0;
    
    while (attempt < maxRetries) {
        try {
            fetchData(url);
            return; // Success!
        } catch (NetworkException e) {
            attempt++;
            if (attempt >= maxRetries) {
                throw e; // Give up
            }
            Thread.sleep(1000 * attempt); // Exponential backoff
        }
    }
}
\`\`\`

## 6. Kết luận

**Key Takeaways:**
1. Catch specific exceptions, kh\xf4ng catch-all
2. Always provide context trong error messages
3. Đừng d\xf9ng exceptions cho control flow
4. Log exceptions trước khi rethrow
5. Use try-with-resources cho auto-closing resources

**Remember:** Good exception handling = Better debugging experience!`,cover_image:`${a}/images/blog/java-exceptions.jpg`,tags:"Java,Error Handling",date:"23/12/2024"},{id:6,title:"Java Spring Boot cơ bản: REST API đầu tiên",summary:"Hướng dẫn từng bước xây dựng REST API với Spring Boot cho người mới bắt đầu. Cấu trúc project chuẩn.",content:`# Java Spring Boot cơ bản: REST API đầu ti\xean

## 🎯 Spring Boot l\xe0 g\xec?

**Spring Boot** l\xe0 framework gi\xfap x\xe2y dựng ứng dụng Java nhanh ch\xf3ng với:
- Auto-configuration
- Embedded server (Tomcat)
- Production-ready features

## 1. Setup Project

### Bước 1: Generate project

V\xe0o [start.spring.io](https://start.spring.io):
- **Project**: Maven
- **Language**: Java
- **Spring Boot**: 3.2.x
- **Dependencies**: Spring Web, Spring Data JPA, PostgreSQL Driver

### Bước 2: Cấu tr\xfac project

\`\`\`
src/main/java/com/example/demo
├── DemoApplication.java       # Main class
├── controller/                # REST Controllers
├── service/                   # Business Logic
├── repository/                # Database Access
└── model/                     # Entity classes

src/main/resources
├── application.properties     # Config
└── application.yml           # Config (alternative)
\`\`\`

## 2. Tạo Entity

\`\`\`java
// model/User.java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    // Getters, Setters, Constructors
}
\`\`\`

## 3. Tạo Repository

\`\`\`java
// repository/UserRepository.java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByNameContaining(String keyword);
}
\`\`\`

**Giải th\xedch:**
- Kế thừa JpaRepository → C\xf3 sẵn CRUD methods
- Kh\xf4ng cần implement, Spring tự generate!

## 4. Tạo Service Layer

\`\`\`java
// service/UserService.java
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        return userRepository.save(user);
    }
    
    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }
}
\`\`\`

## 5. Tạo REST Controller

\`\`\`java
// controller/UserController.java
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    // GET /api/users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    // GET /api/users/1
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    
    // POST /api/users
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User created = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    
    // PUT /api/users/1
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
        @PathVariable Long id,
        @RequestBody User user
    ) {
        User updated = userService.updateUser(id, user);
        return ResponseEntity.ok(updated);
    }
    
    // DELETE /api/users/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
\`\`\`

## 6. Configuration

### application.properties

\`\`\`properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=password

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server
server.port=8080
\`\`\`

## 7. Exception Handling

\`\`\`java
// exception/ResourceNotFoundException.java
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

// exception/GlobalExceptionHandler.java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
        ResourceNotFoundException ex
    ) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}
\`\`\`

## 8. Testing với Postman

### GET All Users
\`\`\`
GET http://localhost:8080/api/users
\`\`\`

### POST Create User
\`\`\`
POST http://localhost:8080/api/users
Content-Type: application/json

{
  "name": "Ngọc H\xe2n",
  "email": "han@example.com"
}
\`\`\`

### PUT Update User
\`\`\`
PUT http://localhost:8080/api/users/1
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com"
}
\`\`\`

## 9. Best Practices

### DTO Pattern

\`\`\`java
// dto/UserDTO.java
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    // No sensitive fields like password!
}

// mapper/UserMapper.java
@Component
public class UserMapper {
    public UserDTO toDTO(User user) {
        return new UserDTO(user.getId(), user.getName(), user.getEmail());
    }
}
\`\`\`

### Validation

\`\`\`java
@Entity
public class User {
    @NotBlank(message = "Name is required")
    private String name;
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
}

// Controller
@PostMapping
public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
    // If validation fails, return 400 Bad Request
}
\`\`\`

## 10. Kết luận

**Bạn đ\xe3 học:**
- ✅ Setup Spring Boot project
- ✅ Entity, Repository, Service, Controller
- ✅ REST API với CRUD operations
- ✅ Exception handling
- ✅ Database configuration

**Next steps:**
- Học Spring Security (authentication)
- Implement pagination & sorting
- Write unit tests với JUnit & Mockito
- Deploy l\xean Heroku/Railway`,cover_image:`${a}/images/blog/spring-boot.jpg`,tags:"Java,Spring Boot,Backend",date:"25/12/2024"},{id:7,title:"JavaScript Closures: Hiểu đúng và sử dụng hiệu quả",summary:"Closures là một trong những khái niệm khó nhất trong JavaScript. Hãy cùng tìm hiểu chi tiết qua ví dụ thực tế.",content:`# JavaScript Closures: Hiểu đ\xfang v\xe0 sử dụng hiệu quả
  
  ## Closure l\xe0 g\xec?
  
  **Closure** l\xe0 một function c\xf3 thể "nhớ" v\xe0 truy cập được lexical scope của n\xf3, ngay cả khi function đ\xf3 được thực thi b\xean ngo\xe0i scope ban đầu.
  
  ## 1. V\xed dụ cơ bản
  
  \`\`\`javascript
  function createCounter() {
    let count = 0;  // Private variable
    
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter());  // 1
  console.log(counter());  // 2
  console.log(counter());  // 3
  \`\`\`
  
  ## 2. Use Cases thực tế
  
  ### 2.1. Private Variables (Encapsulation)
  
  \`\`\`javascript
  function BankAccount(initialBalance) {
    let balance = initialBalance;  // Private
    
    return {
      deposit: function(amount) {
        balance += amount;
        return balance;
      },
      withdraw: function(amount) {
        if (amount > balance) {
          throw new Error('Insufficient funds');
        }
        balance -= amount;
        return balance;
      },
      getBalance: function() {
        return balance;
      }
    };
  }
  
  const myAccount = BankAccount(1000);
  myAccount.deposit(500);    // 1500
  myAccount.withdraw(200);   // 1300
  // myAccount.balance;      // undefined - kh\xf4ng truy cập trực tiếp được!
  \`\`\`
  
  ## 3. Kết luận
  
  **Ưu điểm Closures:**
  - Encapsulation (private variables)
  - Function factory pattern
  - Callback handlers với state
  
  **Nhược điểm:**
  - C\xf3 thể g\xe2y memory leaks nếu kh\xf4ng cẩn thận
  - Kh\xf3 debug hơn`,cover_image:`${a}/images/blog/js-closures.jpg`,tags:"JavaScript,Fundamentals",date:"18/12/2024"},{id:8,title:"JavaScript Promises và Async/Await toàn tập",summary:"Từ callback hell đến async/await - cách viết code bất đồng bộ sạch đẹp và dễ maintain trong JavaScript.",content:`# JavaScript Promises v\xe0 Async/Await to\xe0n tập

## Từ Callback Hell đến Promise

Trước đ\xe2y, code async thường rơi v\xe0o "callback hell":

\`\`\`javascript
getUser(id, (err, user) => {
  if (err) return handleError(err);
  getPosts(user.id, (err, posts) => {
    if (err) return handleError(err);
    getComments(posts[0].id, (err, comments) => {
      // ... tiếp tục lồng s\xe2u
    });
  });
});
\`\`\`

### Promise ra đời

\`\`\`javascript
getUser(id)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(handleError);
\`\`\`

## Async/Await - Đỉnh cao của sự sạch sẽ

\`\`\`javascript
async function fetchData(id) {
  try {
    const user = await getUser(id);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    handleError(error);
  }
}
\`\`\`

## Parallel Execution

\`\`\`javascript
// Chạy song song
const [user, posts] = await Promise.all([
  getUser(id),
  getPosts(id)
]);
\`\`\`

## Best Practices

- Lu\xf4n c\xf3 \`.catch()\` hoặc \`try/catch\`
- Kh\xf4ng mix callback v\xe0 Promise
- D\xf9ng \`async/await\` cho readability
- Xử l\xfd error tập trung nếu c\xf3 thể

**Kết luận:** Async/await l\xe0 c\xe1ch viết async code hiện đại nhất hiện nay.`,cover_image:`${a}/images/blog/js-async.jpg`,tags:"JavaScript,Async",date:"22/12/2024"},{id:9,title:"JavaScript ES6+: Arrow Functions và Destructuring",summary:"Các tính năng mới của ES6 giúp code JavaScript hiện đại và ngắn gọn hơn. Tại sao nên dùng const/let thay vì var?",content:`# JavaScript ES6+: Arrow Functions v\xe0 Destructuring

## Arrow Functions

### C\xfa ph\xe1p cũ
\`\`\`javascript
function add(a, b) {
  return a + b;
}

// Anonymous
setTimeout(function() {
  console.log('Hello');
}, 1000);
\`\`\`

### Arrow function - Ngắn gọn hơn
\`\`\`javascript
const add = (a, b) => a + b;

setTimeout(() => console.log('Hello'), 1000);
\`\`\`

### Lưu \xfd về 'this'
Arrow function **kh\xf4ng bind this** của ri\xeang n\xf3 → rất hữu \xedch trong callback.

## Destructuring

### Object destructuring
\`\`\`javascript
const user = { name: 'H\xe2n', age: 21, major: 'IT' };

// Cũ
const name = user.name;
const age = user.age;

// Mới
const { name, age, major } = user;
\`\`\`

### Array destructuring
\`\`\`javascript
const scores = [95, 88, 92];

// Lấy phần tử đầu v\xe0 thứ 3
const [first, , third] = scores;
\`\`\`

### Default values + renaming
\`\`\`javascript
const { name: fullName = 'Anonymous', role = 'student' } = user;
\`\`\`

## Spread & Rest Operator

\`\`\`javascript
// Copy array/object
const newArray = [...oldArray];
const newObj = { ...oldObj, newProp: 'value' };

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
\`\`\`

## Let vs Const vs Var

- \`var\`: function scope, hoisting → dễ bug
- \`let\`: block scope, kh\xf4ng hoisting
- \`const\`: block scope, kh\xf4ng reassign (nhưng object properties c\xf3 thể thay đổi)

**Rule:** D\xf9ng \`const\` mặc định, chỉ d\xf9ng \`let\` khi cần reassign.

## Kết luận

ES6+ gi\xfap code JavaScript:
- Ngắn gọn hơn
- Dễ đọc hơn
- \xcdt bug hơn
- Hiện đại hơn

H\xe3y lu\xf4n d\xf9ng ES6+ trong mọi project mới!`,cover_image:`${a}/images/blog/js-es6.jpg`,tags:"JavaScript,ES6",date:"24/12/2024"},{id:10,title:"JavaScript Design Patterns: Module và Singleton",summary:"Các design patterns thường dùng trong JavaScript để tổ chức code tốt hơn, tránh ô nhiễm global scope.",content:`# JavaScript Design Patterns: Module v\xe0 Singleton

## Module Pattern

### Trước ES6: IIFE
\`\`\`javascript
var Counter = (function() {
  var count = 0; // Private

  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(Counter.increment()); // 1
console.log(Counter.getCount());  // 1
// count kh\xf4ng truy cập được từ ngo\xe0i!
\`\`\`

### ES6 Modules
\`\`\`javascript
// utils.js
let count = 0;

export const increment = () => count++;
export const getCount = () => count;

// main.js
import { increment, getCount } from './utils.js';
\`\`\`

## Singleton Pattern

Đảm bảo chỉ c\xf3 **một instance** duy nhất của object.

\`\`\`javascript
const Database = (function() {
  let instance;

  function createInstance() {
    return {
      connect: () => console.log('Connected to DB'),
      query: (sql) => console.log('Query:', sql)
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true - c\xf9ng một instance!
\`\`\`

## Factory Pattern

\`\`\`javascript
function createUser(type) {
  switch(type) {
    case 'admin':
      return { role: 'admin', permissions: ['read', 'write', 'delete'] };
    case 'user':
      return { role: 'user', permissions: ['read'] };
    default:
      return { role: 'guest', permissions: [] };
  }
}
\`\`\`

## Kết luận

Design patterns gi\xfap:
- Tổ chức code tốt hơn
- Tr\xe1nh global scope pollution
- Dễ maintain v\xe0 test
- Reusable code

D\xf9 JavaScript rất linh hoạt, \xe1p dụng patterns đ\xfang c\xe1ch sẽ gi\xfap project scale tốt hơn.`,cover_image:`${a}/images/blog/js-patterns.jpg`,tags:"JavaScript,Design Patterns",date:"26/12/2024"},{id:11,title:"So sánh Java vs JavaScript: Những lầm tưởng phổ biến",summary:"Tuy tên giống nhau nhưng bản chất hoàn toàn khác biệt. Phân tích sự khác biệt về Type System, Runtime và Use cases.",content:`# Java vs JavaScript: Những lầm tưởng phổ biến

## Lầm tưởng lớn nhất: Ch\xfang li\xean quan đến nhau?

**Kh\xf4ng!** Chỉ chung t\xean "Java" do marketing thời 1995. Thực tế:

| Ti\xeau ch\xed              | Java                              | JavaScript                          |
|-----------------------|-----------------------------------|-------------------------------------|
| Ra đời                | 1995 (Sun Microsystems)           | 1995 (Netscape)                     |
| Mục đ\xedch ban đầu      | Ứng dụng desktop, applet          | L\xe0m web tương t\xe1c                   |
| Type system           | Static typing                     | Dynamic typing                      |
| Runtime               | JVM (compile to bytecode)         | V8, SpiderMonkey (JIT)              |
| Execution             | Compile trước, run tr\xean JVM       | Interpret/JIT trong browser/engine  |
| Multi-threading       | Native threads                    | Event loop (single-threaded)        |

## So s\xe1nh chi tiết

### 1. Type System

**Java (Static):**
\`\`\`java
String name = "H\xe2n";
name = 123; // Compile error!
\`\`\`

**JavaScript (Dynamic):**
\`\`\`javascript
let name = "H\xe2n";
name = 123; // OK → name giờ l\xe0 number
\`\`\`

### 2. Concurrency Model

**Java:**
- True multi-threading
- Dễ deadlock, race condition
- Ph\xf9 hợp hệ thống lớn

**JavaScript:**
- Event loop + single thread
- Non-blocking I/O
- Ph\xf9 hợp web real-time

### 3. Use Cases hiện nay

**Java phổ biến ở:**
- Enterprise backend (Spring Boot)
- Android apps
- Big data (Hadoop, Spark)
- Financial systems

**JavaScript phổ biến ở:**
- Web frontend (React, Vue)
- Full-stack (Node.js)
- Mobile (React Native)
- Desktop (Electron)

## Khi n\xe0o chọn c\xe1i n\xe0o?

**Chọn Java khi:**
- Cần performance cao, ổn định
- Team lớn, enterprise project
- Hệ thống t\xe0i ch\xednh, ng\xe2n h\xe0ng
- Android native

**Chọn JavaScript khi:**
- Web application
- Startup, MVP nhanh
- Real-time features
- Full-stack với 1 ng\xf4n ngữ

## Kết luận

- **Kh\xf4ng c\xf3 ng\xf4n ngữ n\xe0o "tốt hơn"** - chỉ c\xf3 ph\xf9 hợp hơn
- Nhiều developer giỏi cả hai (full-stack Java + Spring + React)
- T\xean giống nhau chỉ l\xe0 lịch sử → đừng nhầm lẫn!

**Advice:** Học cả hai để mở rộng cơ hội việc l\xe0m!`,cover_image:`${a}/images/blog/java-vs-js.jpg`,tags:"Java,JavaScript,Comparison",date:"27/12/2024"}],c=[{id:1,title:"DocMentor - AI RAG Knowledge Assistant",description:"Ứng dụng AI Assistant hỗ trợ trả lời câu hỏi từ tài liệu PDF/DOCX sử dụng công nghệ RAG và Vector Database. Đồ án môn Trí tuệ nhân tạo.",content:`## 🎯 Bối cảnh dự \xe1n

Đ\xe2y l\xe0 dự \xe1n của học phần **Đồ \xc1n Chuy\xean Ng\xe0nh** học kỳ 1 năm 2025. B\xe0i to\xe1n đặt ra: Sinh vi\xean v\xe0 giảng vi\xean thường phải đọc h\xe0ng trăm trang t\xe0i liệu để t\xecm th\xf4ng tin cần thiết. L\xe0m sao để AI c\xf3 thể "đọc hiểu" t\xe0i liệu v\xe0 trả lời c\xe2u hỏi ch\xednh x\xe1c?

## 🏗️ Kiến tr\xfac hệ thống

### Tech Stack
- **Backend**: Python FastAPI
- **AI Framework**: LangChain
- **LLM**: Google Gemini Pro (miễn ph\xed cho sinh vi\xean)
- **Vector Database**: Pinecone (Free tier)
- **Frontend**: React.js + Tailwind CSS

### Luồng hoạt động

1. User upload PDF/DOCX
2. Backend chia nhỏ document th\xe0nh chunks (512 tokens, overlap 50)
3. Sử dụng Sentence Transformers để tạo embeddings
4. Lưu embeddings v\xe0o Pinecone
5. User đặt c\xe2u hỏi → Vector search t\xecm chunks li\xean quan
6. Gemini Pro generate c\xe2u trả lời dựa tr\xean context

## ⚙️ T\xednh năng đ\xe3 thực hiện

### 1. Document Processing
- Upload PDF, DOCX, TXT (max 10MB)
- Chunking th\xf4ng minh với RecursiveCharacterTextSplitter
- Extract metadata (t\xean file, số trang, ng\xe0y tạo)

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
- ✅ Xử l\xfd th\xe0nh c\xf4ng 95% documents được test (50 files)
- ✅ Trả lời ch\xednh x\xe1c với c\xe2u hỏi li\xean quan trực tiếp đến nội dung
- ✅ Response time trung b\xecnh: 3-5 gi\xe2y

**Về mặt học thuật:**
- Đạt điểm 9/10 cho học phần Đồ \xc1n Chuy\xean Ng\xe0nh
- Được thầy đ\xe1nh gi\xe1 cao về khả năng apply l\xfd thuyết v\xe0o thực tế
- Present trước lớp v\xe0 nhận feedback t\xedch cực

## 💡 Những g\xec đ\xe3 học được

### 1. Technical Skills
- Hiểu r\xf5 c\xe1ch LLM hoạt động v\xe0 limitations
- Học c\xe1ch l\xe0m việc với Vector Database
- Tối ưu cost khi call API (cache, batch processing)

### 2. Problem Solving
- **Vấn đề:** Chunking kh\xf4ng tốt l\xe0m mất ngữ cảnh
  - **Giải ph\xe1p:** Th\xeam overlap v\xe0 metadata cho mỗi chunk
- **Vấn đề:** Gemini đ\xf4i khi "hallucinate" (bịa đặt th\xf4ng tin)
  - **Giải ph\xe1p:** Th\xeam instruction "chỉ trả lời dựa tr\xean context, nếu kh\xf4ng biết th\xec n\xf3i kh\xf4ng biết"

### 3. Soft Skills
- L\xe0m việc nh\xf3m 3 người, ph\xe2n chia task r\xf5 r\xe0ng
- Present demo trước 40+ bạn v\xe0 2 giảng vi\xean
- Viết document kỹ thuật đầy đủ`,tech_stack:"Python, FastAPI, LangChain, Google Gemini API, Pinecone, React.js",category:"AI/Machine Learning",repo_url:"https://github.com/ntnhan19/DocMentor",image_url:`${a}/images/projects/docmentor.png`,highlights:"Academic Project,RAG Pipeline,Vector Search",duration:"3 tháng (Sep - Dec 2025)",team_size:"3 người"},{id:2,title:"DHL Cinema - Hệ thống đặt vé xem phim Real-time",description:"Web application đặt vé xem phim với WebSocket, xử lý race condition khi nhiều người cùng chọn ghế. Đồ án môn Lập trình mạng.",content:`## 🎯 Bối cảnh dự \xe1n

Đ\xe2y l\xe0 dự \xe1n của học phần **Đồ \xc1n Cơ Sở** học kỳ 1 năm 2024. Giảng vi\xean đặt y\xeau cầu: X\xe2y dựng một hệ thống c\xf3 t\xednh năng real-time v\xe0 phải xử l\xfd được vấn đề race condition.

**B\xe0i to\xe1n cụ thể:** Khi 100 người c\xf9ng l\xfac chọn 1 ghế trong rạp chiếu phim, l\xe0m sao đảm bảo chỉ 1 người book th\xe0nh c\xf4ng?

## 🏗️ Kiến tr\xfac hệ thống

### Tech Stack
- **Backend**: Node.js + Express.js
- **Real-time**: Socket.io (WebSocket)
- **Database**: PostgreSQL
- **Cache & Locking**: Redis
- **Frontend**: React.js + Context API

### Sơ đồ luồng xử l\xfd

Client chọn ghế
    ↓
Socket.io emit 'select-seat'
    ↓
Server check Redis lock
    ↓
Nếu lock th\xe0nh c\xf4ng → Update PostgreSQL → Broadcast
Nếu lock thất bại → Return error

## ⚙️ Giải ph\xe1p kỹ thuật

### 1. Redis Distributed Lock

\`\`\`javascript
// Acquire lock với expire time 30s
const lockKey = \`seat:\${movieId}:\${seatId}\`;
const acquired = await redis.set(
  lockKey, 
  userId, 
  'EX', 30,  // Auto expire sau 30s
  'NX'       // Chỉ set nếu key chưa tồn tại
);

if (!acquired) {
  throw new Error('Ghế đ\xe3 được chọn');
}
\`\`\`

### 2. WebSocket Broadcasting

\`\`\`javascript
io.to(\`room-\${movieId}\`).emit('seat:updated', {
  seatId,
  status: 'locked',
  userId,
  timestamp: Date.now()
});
\`\`\`

## 📊 Kết quả testing

### Load Test với Artillery
- **Test case:** 100 users c\xf9ng l\xfac chọn 1 ghế
- **Kết quả:** Chỉ 1 request th\xe0nh c\xf4ng, 99 requests nhận error
- **Response time:** 150-200ms
- **Zero double booking:** ✅

### Test thực tế
- Mời 10 bạn c\xf9ng lớp test đồng thời
- Kết quả: Hệ thống hoạt động ổn định
- Feedback: UI real-time mượt m\xe0

## 💡 Những g\xec đ\xe3 học được

### 1. Technical Knowledge
- Hiểu s\xe2u về WebSocket v\xe0 c\xe1ch n\xf3 kh\xe1c HTTP
- Học c\xe1ch implement distributed lock pattern
- Thực h\xe0nh database transaction v\xe0 row-level locking

### 2. Debugging Skills
- **Bug 1:** Redis lock kh\xf4ng release khi server crash
  - **Fix:** D\xf9ng EXPIRE để auto-release
- **Bug 2:** WebSocket disconnect/reconnect li\xean tục
  - **Fix:** Implement heartbeat mechanism

## 🏆 Kết quả đạt được

- Điểm đồ \xe1n: 9.0/10

## 🎓 Reflection

Dự \xe1n n\xe0y gi\xfap t\xf4i hiểu rằng:
- Distributed systems kh\xf4ng đơn giản như tưởng
- Testing với race condition cần cẩn thận v\xe0 c\xf3 methodology
- Real-world problems thường phức tạp hơn l\xfd thuyết rất nhiều`,tech_stack:"Node.js, Express, Socket.io, PostgreSQL, Redis",category:"Network Programming",repo_url:"https://github.com/ntnhan19/Project_MovieTicketBooking_NodeJS",image_url:`${a}/images/projects/cinema.png`,highlights:"Academic Project,Real-time System,Race Condition Handling",duration:"3 tháng (Mar - Jun 2025)",team_size:"3 người"}],h=[{id:1,name:"Sinh viên 5 Tốt Cấp Khoa",issuer:"Đại học Công nghệ TP.HCM (HUTECH)",type:"Title",date:"2024",image_url:`${a}/images/certs/sv5tot.jpg`},{id:2,name:"Sinh viên Tiêu Biểu Cấp Khoa",issuer:"Khoa Công nghệ Thông tin - HUTECH",type:"Title",date:"2024",image_url:`${a}/images/certs/svtbieu.jpg`},{id:3,name:"Networking Basics",issuer:"Cisco Networking Academy",type:"Course",date:"Tháng 12/2024",image_url:`${a}/images/certs/cisco_basics.jpg`,url:"https://www.credly.com/badges/849ccbed-8429-4e57-a3be-e3177f447cce/public_url"},{id:4,name:"JavaScript Essentials 1",issuer:"Cisco Networking Academy",type:"Course",date:"Tháng 12/2024",image_url:`${a}/images/certs/javascript1.jpg`,url:"https://www.credly.com/badges/04dcaaad-cc55-4403-af59-ad15cd36150f/public_url"},{id:5,name:"JavaScript Essentials 2",issuer:"Cisco Networking Academy",type:"Course",date:"Tháng 12/2024",image_url:`${a}/images/certs/javascript2.jpg`,url:"https://www.credly.com/badges/7b330edf-fa4c-46d6-ac25-74e50e2c3773/public_url"},{id:6,name:"Giải Ba - Cuộc thi Genz's Thinking",issuer:"CLB Đổi mới Sáng tạo HUTECH",type:"Award",date:"Tháng 10/2024",image_url:`${a}/images/certs/genz_award.jpg`},{id:7,name:"Giải Ba - PIONE DREAM HACKATHON 2025",issuer:"Đại học HUTECH",type:"Award",date:"Tháng 1/2025",image_url:`${a}/images/certs/pionehackathon.jpg`}],d=[{id:1,name:"Hội Thao Sinh Viên HUTECH 2024",role:"Vận động viên - Đội Bóng Đá Nữ Khoa CNTT",description:"Tham gia thi đấu bộ môn Bóng đá nữ, đạt giải Nhì toàn trường. Hoạt động rèn luyện sức khỏe, tinh thần đồng đội và kết nối với các bạn sinh viên khác khoa.",date:"Tháng 3/2024",image_url:`${a}/images/activities/hoithao.jpg`},{id:2,name:"Tết Đầy Đủ - Xuân Trọn Vẹn 2025",role:"Tình nguyện viên - Liên Chi Hội Khoa CNTT",description:"Tham gia gói quà Tết cho người nghèo tại Thành phố Hồ Chí Minh. Hoạt động kéo dài 2 ngày với 50+ tình nguyện viên, gói được 500+ phần quà.",date:"Tháng 1/2025",image_url:`${a}/images/activities/tinhnguyenvien.png`}];var p=e.i(71645);let f=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},m=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let y=(0,p.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:o,iconNode:s,...a},l)=>(0,p.createElement)("svg",{ref:l,...g,width:t,height:t,stroke:e,strokeWidth:i?24*Number(n)/Number(t):n,className:m("lucide",r),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(a)&&{"aria-hidden":"true"},...a},[...s.map(([e,t])=>(0,p.createElement)(e,t)),...Array.isArray(o)?o:[o]])),x=(e,t)=>{let n=(0,p.forwardRef)(({className:n,...i},r)=>(0,p.createElement)(y,{ref:r,iconNode:t,className:m(`lucide-${f(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...i}));return n.displayName=f(e),n},v=x("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),b=x("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),k=x("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),w=x("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),S=x("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),T=x("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),C=x("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),E=x("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),P=x("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),A=x("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),j=x("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),L=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],M=new Set(L),D=e=>180*e/Math.PI,N=e=>I(D(Math.atan2(e[1],e[0]))),R={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:N,rotateZ:N,skewX:e=>D(Math.atan(e[1])),skewY:e=>D(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},I=e=>((e%=360)<0&&(e+=360),e),O=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),F=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),B={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:O,scaleY:F,scale:e=>(O(e)+F(e))/2,rotateX:e=>I(D(Math.atan2(e[6],e[5]))),rotateY:e=>I(D(Math.atan2(-e[2],e[0]))),rotateZ:N,rotate:N,skewX:e=>D(Math.atan(e[4])),skewY:e=>D(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function V(e){return+!!e.includes("scale")}function U(e,t){let n,i;if(!e||"none"===e)return V(t);let r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);if(r)n=B,i=r;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=R,i=t}if(!i)return V(t);let o=n[t],s=i[1].split(",").map(z);return"function"==typeof o?o(s):s[o]}function z(e){return parseFloat(e.trim())}let H=e=>t=>"string"==typeof t&&t.startsWith(e),_=H("--"),q=H("var(--"),W=e=>!!q(e)&&G.test(e.split("/*")[0].trim()),G=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}let K=(e,t,n)=>e+(t-e)*n;function J(e){return void 0===e||1===e}function X({scale:e,scaleX:t,scaleY:n}){return!J(e)||!J(t)||!J(n)}function Y(e){return X(e)||Q(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Q(e){var t,n;return(t=e.x)&&"0%"!==t||(n=e.y)&&"0%"!==n}function Z(e,t,n,i,r){return void 0!==r&&(e=i+r*(e-i)),i+n*(e-i)+t}function ee(e,t=0,n=1,i,r){e.min=Z(e.min,t,n,i,r),e.max=Z(e.max,t,n,i,r)}function et(e,{x:t,y:n}){ee(e.x,t.translate,t.scale,t.originPoint),ee(e.y,n.translate,n.scale,n.originPoint)}function en(e,t){e.min=e.min+t,e.max=e.max+t}function ei(e,t,n,i,r=.5){let o=K(e.min,e.max,r);ee(e,t,n,o,i)}function er(e,t){ei(e.x,t.x,t.scaleX,t.scale,t.originX),ei(e.y,t.y,t.scaleY,t.scale,t.originY)}function eo(e,t){return $(function(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(e.getBoundingClientRect(),t))}let es=new Set(["width","height","top","left","right","bottom",...L]),ea=(e,t,n)=>n>t?t:n<e?e:n,el={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},eu={...el,transform:e=>ea(0,1,e)},ec={...el,default:1},eh=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),ed=eh("deg"),ep=eh("%"),ef=eh("px"),em=eh("vh"),eg=eh("vw"),ey={...ep,parse:e=>ep.parse(e)/100,transform:e=>ep.transform(100*e)},ex=e=>t=>t.test(e),ev=[el,ef,ep,ed,eg,em,{test:e=>"auto"===e,parse:e=>e}],eb=e=>ev.find(ex(e));e.i(47167);let ek=()=>{},ew=()=>{},eS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,eT=e=>e===el||e===ef,eC=new Set(["x","y","z"]),eE=L.filter(e=>!eC.has(e)),eP={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>U(t,"x"),y:(e,{transform:t})=>U(t,"y")};eP.translateX=eP.x,eP.translateY=eP.y;let eA=e=>e,ej={},eL=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function eM(e,t){let n=!1,i=!0,r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=eL.reduce((e,n)=>(e[n]=function(e,t){let n=new Set,i=new Set,r=!1,o=!1,s=new WeakSet,a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(t){s.has(t)&&(c.schedule(t),e()),l++,t(a)}let c={schedule:(e,t=!1,o=!1)=>{let a=o&&r?n:i;return t&&s.add(e),a.has(e)||a.add(e),e},cancel:e=>{i.delete(e),s.delete(e)},process:e=>{if(a=e,r){o=!0;return}r=!0,[n,i]=[i,n],n.forEach(u),t,l=0,n.clear(),r=!1,o&&(o=!1,c.process(e))}};return c}(o,t?n:void 0),e),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:h,preRender:d,render:p,postRender:f}=s,m=()=>{let o=ej.useManualTiming?r.timestamp:performance.now();n=!1,ej.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(o-r.timestamp,40),1)),r.timestamp=o,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),h.process(r),d.process(r),p.process(r),f.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(m))};return{schedule:eL.reduce((t,o)=>{let a=s[o];return t[o]=(t,o=!1,s=!1)=>(!n&&(n=!0,i=!0,r.isProcessing||e(m)),a.schedule(t,o,s)),t},{}),cancel:e=>{for(let t=0;t<eL.length;t++)s[eL[t]].cancel(e)},state:r,steps:s}}let{schedule:eD,cancel:eN,state:eR,steps:eI}=eM("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:eA,!0),eO=new Set,eF=!1,eB=!1,eV=!1;function eU(){if(eB){let e=Array.from(eO).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t,i=(t=[],eE.forEach(n=>{let i=e.getValue(n);void 0!==i&&(t.push([n,i.get()]),i.set(+!!n.startsWith("scale")))}),t);i.length&&(n.set(e,i),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}eB=!1,eF=!1,eO.forEach(e=>e.complete(eV)),eO.clear()}function ez(){eO.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(eB=!0)})}class eH{constructor(e,t,n,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(eO.add(this),eF||(eF=!0,eD.read(ez),eD.resolveKeyframes(eU))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:i}=this;if(null===e[0]){let r=i?.get(),o=e[e.length-1];if(void 0!==r)e[0]=r;else if(n&&t){let i=n.readValue(t,o);null!=i&&(e[0]=i)}void 0===e[0]&&(e[0]=o),i&&void 0===r&&i.set(e[0])}for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),eO.delete(this)}cancel(){"scheduled"===this.state&&(eO.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}let e_=e=>Math.round(1e5*e)/1e5,eq=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,eW=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,eG=(e,t)=>n=>!!("string"==typeof n&&eW.test(n)&&n.startsWith(e)||t&&null!=n&&Object.prototype.hasOwnProperty.call(n,t)),e$=(e,t,n)=>i=>{if("string"!=typeof i)return i;let[r,o,s,a]=i.match(eq);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},eK={...el,transform:e=>Math.round(ea(0,255,e))},eJ={test:eG("rgb","red"),parse:e$("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+eK.transform(e)+", "+eK.transform(t)+", "+eK.transform(n)+", "+e_(eu.transform(i))+")"},eX={test:eG("#"),parse:function(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:eJ.transform},eY={test:eG("hsl","hue"),parse:e$("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+ep.transform(e_(t))+", "+ep.transform(e_(n))+", "+e_(eu.transform(i))+")"},eQ={test:e=>eJ.test(e)||eX.test(e)||eY.test(e),parse:e=>eJ.test(e)?eJ.parse(e):eY.test(e)?eY.parse(e):eX.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?eJ.transform(e):eY.transform(e),getAnimatableNone:e=>{let t=eQ.parse(e);return t.alpha=0,eQ.transform(t)}},eZ=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,e0="number",e1="color",e2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function e4(e){let t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[],o=0,s=t.replace(e2,e=>(eQ.test(e)?(i.color.push(o),r.push(e1),n.push(eQ.parse(e))):e.startsWith("var(")?(i.var.push(o),r.push("var"),n.push(e)):(i.number.push(o),r.push(e0),n.push(parseFloat(e))),++o,"${}")).split("${}");return{values:n,split:s,indexes:i,types:r}}function e3(e){return e4(e).values}function e5(e){let{split:t,types:n}=e4(e),i=t.length;return e=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],void 0!==e[o]){let t=n[o];t===e0?r+=e_(e[o]):t===e1?r+=eQ.transform(e[o]):r+=e[o]}return r}}let e6=e=>"number"==typeof e?0:eQ.test(e)?eQ.getAnimatableNone(e):e,e9={test:function(e){return isNaN(e)&&"string"==typeof e&&(e.match(eq)?.length||0)+(e.match(eZ)?.length||0)>0},parse:e3,createTransformer:e5,getAnimatableNone:function(e){let t=e3(e);return e5(e)(t.map(e6))}},e8=new Set(["brightness","contrast","saturate","opacity"]);function e7(e){let[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[i]=n.match(eq)||[];if(!i)return e;let r=n.replace(i,""),o=+!!e8.has(t);return i!==n&&(o*=100),t+"("+o+r+")"}let te=/\b([a-z-]*)\(.*?\)/gu,tt={...e9,getAnimatableNone:e=>{let t=e.match(te);return t?t.map(e7).join(" "):e}},tn={...el,transform:Math.round},ti={borderWidth:ef,borderTopWidth:ef,borderRightWidth:ef,borderBottomWidth:ef,borderLeftWidth:ef,borderRadius:ef,radius:ef,borderTopLeftRadius:ef,borderTopRightRadius:ef,borderBottomRightRadius:ef,borderBottomLeftRadius:ef,width:ef,maxWidth:ef,height:ef,maxHeight:ef,top:ef,right:ef,bottom:ef,left:ef,padding:ef,paddingTop:ef,paddingRight:ef,paddingBottom:ef,paddingLeft:ef,margin:ef,marginTop:ef,marginRight:ef,marginBottom:ef,marginLeft:ef,backgroundPositionX:ef,backgroundPositionY:ef,rotate:ed,rotateX:ed,rotateY:ed,rotateZ:ed,scale:ec,scaleX:ec,scaleY:ec,scaleZ:ec,skew:ed,skewX:ed,skewY:ed,distance:ef,translateX:ef,translateY:ef,translateZ:ef,x:ef,y:ef,z:ef,perspective:ef,transformPerspective:ef,opacity:eu,originX:ey,originY:ey,originZ:ef,zIndex:tn,fillOpacity:eu,strokeOpacity:eu,numOctaves:tn},tr={...ti,color:eQ,backgroundColor:eQ,outlineColor:eQ,fill:eQ,stroke:eQ,borderColor:eQ,borderTopColor:eQ,borderRightColor:eQ,borderBottomColor:eQ,borderLeftColor:eQ,filter:tt,WebkitFilter:tt},to=e=>tr[e];function ts(e,t){let n=to(e);return n!==tt&&(n=e9),n.getAnimatableNone?n.getAnimatableNone(t):void 0}let ta=new Set(["auto","none","0"]);class tl extends eH{constructor(e,t,n,i,r){super(e,t,n,i,r,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let i=e[n];if("string"==typeof i&&W(i=i.trim())){let r=function e(t,n,i=1){ew(i<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[r,o]=function(e){let t=eS.exec(e);if(!t)return[,];let[,n,i,r]=t;return[`--${n??i}`,r]}(t);if(!r)return;let s=window.getComputedStyle(n).getPropertyValue(r);if(s){let e=s.trim();return/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)?parseFloat(e):e}return W(o)?e(o,n,i+1):o}(i,t.current);void 0!==r&&(e[n]=r),n===e.length-1&&(this.finalKeyframe=i)}}if(this.resolveNoneKeyframes(),!es.has(n)||2!==e.length)return;let[i,r]=e,o=eb(i),s=eb(r);if(o!==s)if(eT(o)&&eT(s))for(let t=0;t<e.length;t++){let n=e[t];"string"==typeof n&&(e[t]=parseFloat(n))}else eP[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(null===e[t]||function(e){if("number"==typeof e)return 0===e;if(null===e)return!0;return"none"===e||"0"===e||/^0[^.\s]+$/u.test(e)}(e[t]))&&n.push(t);n.length&&function(e,t,n){let i,r=0;for(;r<e.length&&!i;){let t=e[r];"string"==typeof t&&!ta.has(t)&&e4(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=ts(n,i)}(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=eP[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let i=t[t.length-1];void 0!==i&&e.getValue(n,i).jump(i,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let i=e.getValue(t);i&&i.jump(this.measuredOrigin,!1);let r=n.length-1,o=n[r];n[r]=eP[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}let tu=e=>!!(e&&e.getVelocity);function tc(){t=void 0}let th={now:()=>(void 0===t&&th.set(eR.isProcessing||ej.useManualTiming?eR.timestamp:performance.now()),t),set:e=>{t=e,queueMicrotask(tc)}};function td(e,t){-1===e.indexOf(t)&&e.push(t)}function tp(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}class tf{constructor(){this.subscriptions=[]}add(e){return td(this.subscriptions,e),()=>tp(this.subscriptions,e)}notify(e,t,n){let i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](e,t,n);else for(let r=0;r<i;r++){let i=this.subscriptions[r];i&&i(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function tm(e,t){return t?1e3/t*e:0}let tg={current:void 0};class ty{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=th.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=th.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tf);let n=this.events[e].add(t);return"change"===e?()=>{n(),eD.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return tg.current&&tg.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=th.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return tm(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tx(e,t){return new ty(e,t)}let tv=[...ev,eQ,e9],{schedule:tb}=eM(queueMicrotask,!1),tk={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},tw={};for(let e in tk)tw[e]={isEnabled:t=>tk[e].some(e=>!!t[e])};let tS=()=>({translate:0,scale:1,origin:0,originPoint:0}),tT=()=>({x:tS(),y:tS()}),tC=()=>({min:0,max:0}),tE=()=>({x:tC(),y:tC()}),tP="undefined"!=typeof window,tA={current:null},tj={current:!1},tL=new WeakMap;function tM(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function tD(e){return"string"==typeof e||Array.isArray(e)}let tN=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tR=["initial",...tN];function tI(e){return tM(e.animate)||tR.some(t=>tD(e[t]))}function tO(e){return!!(tI(e)||e.variants)}function tF(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function tB(e,t,n,i){if("function"==typeof t){let[r,o]=tF(i);t=t(void 0!==n?n:e.custom,r,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){let[r,o]=tF(i);t=t(void 0!==n?n:e.custom,r,o)}return t}let tV=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tU{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:r,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=eH,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=th.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,eD.render(this.render,!1,!0))};const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!r,this.isControllingVariants=tI(t),this.isVariantNode=tO(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(t,{},this);for(const e in c){const t=c[e];void 0!==a[e]&&tu(t)&&t.set(a[e])}}mount(e){this.current=e,tL.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),tj.current||function(){if(tj.current=!0,tP)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>tA.current=e.matches;e.addEventListener("change",t),t()}else tA.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||tA.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),eN(this.notifyUpdate),eN(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){let n;this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let i=M.has(e);i&&this.onBindTransform&&this.onBindTransform();let r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&eD.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});window.MotionCheckAppearSync&&(n=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),n&&n(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in tw){let t=tw[e];if(!t)continue;let{isEnabled:n,Feature:i}=t;if(!this.features[e]&&i&&n(this.props)&&(this.features[e]=new i(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tE()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<tV.length;t++){let n=tV[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let i=e["on"+n];i&&(this.propEventSubscriptions[n]=this.on(n,i))}this.prevMotionValues=function(e,t,n){for(let i in t){let r=t[i],o=n[i];if(tu(r))e.addValue(i,r);else if(tu(o))e.addValue(i,tx(r,{owner:e}));else if(o!==r)if(e.hasValue(i)){let t=e.getValue(i);!0===t.liveStyle?t.jump(r):t.hasAnimated||t.set(r)}else{let t=e.getStaticValue(i);e.addValue(i,tx(void 0!==t?t:r,{owner:e}))}}for(let i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=tx(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];if(null!=n){let i,r;if("string"==typeof n&&(i=n,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i)||(r=n,/^0[^.\s]+$/u.test(r))))n=parseFloat(n);else{let i;i=n,!tv.find(ex(i))&&e9.test(t)&&(n=ts(e,t))}this.setBaseTarget(e,tu(n)?n.get():n)}return tu(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let t,{initial:n}=this.props;if("string"==typeof n||"object"==typeof n){let i=tB(this.props,n,this.presenceContext?.custom);i&&(t=i[e])}if(n&&void 0!==t)return t;let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||tu(i)?void 0!==this.initialValues[e]&&void 0===t?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new tf),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){tb.render(this.render)}}class tz extends tU{constructor(){super(...arguments),this.KeyframeResolver=tl}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;tu(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}let tH=(e,t)=>t&&"number"==typeof e?t.transform(e):e,t_={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tq=L.length;function tW(e,t,n){let{style:i,vars:r,transformOrigin:o}=e,s=!1,a=!1;for(let e in t){let n=t[e];if(M.has(e)){s=!0;continue}if(_(e)){r[e]=n;continue}{let t=tH(n,ti[e]);e.startsWith("origin")?(a=!0,o[e]=t):i[e]=t}}if(!t.transform&&(s||n?i.transform=function(e,t,n){let i="",r=!0;for(let o=0;o<tq;o++){let s=L[o],a=e[s];if(void 0===a)continue;let l=!0;if(!(l="number"==typeof a?a===+!!s.startsWith("scale"):0===parseFloat(a))||n){let e=tH(a,ti[s]);if(!l){r=!1;let t=t_[s]||s;i+=`${t}(${e}) `}n&&(t[s]=e)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}(t,e.transform,n):i.transform&&(i.transform="none")),a){let{originX:e="50%",originY:t="50%",originZ:n=0}=o;i.transformOrigin=`${e} ${t} ${n}`}}function tG(e,{style:t,vars:n},i,r){let o,s=e.style;for(o in t)s[o]=t[o];for(o in r?.applyProjectionStyles(s,i),n)s.setProperty(o,n[o])}function t$(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let tK={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e)if(!ef.test(e))return e;else e=parseFloat(e);let n=t$(e,t.target.x),i=t$(e,t.target.y);return`${n}% ${i}%`}},tJ={borderRadius:{...tK,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:tK,borderTopRightRadius:tK,borderBottomLeftRadius:tK,borderBottomRightRadius:tK,boxShadow:{correct:(e,{treeScale:t,projectionDelta:n})=>{let i=e9.parse(e);if(i.length>5)return e;let r=e9.createTransformer(e),o=+("number"!=typeof i[0]),s=n.x.scale*t.x,a=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=a;let l=K(s,a,.5);return"number"==typeof i[2+o]&&(i[2+o]/=l),"number"==typeof i[3+o]&&(i[3+o]/=l),r(i)}}};function tX(e,{layout:t,layoutId:n}){return M.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!tJ[e]||"opacity"===e)}function tY(e,t,n){let{style:i}=e,r={};for(let o in i)(tu(i[o])||t.style&&tu(t.style[o])||tX(o,e)||n?.getValue(o)?.liveStyle!==void 0)&&(r[o]=i[o]);return r}class tQ extends tz{constructor(){super(...arguments),this.type="html",this.renderInstance=tG}readValueFromInstance(e,t){if(M.has(t))return this.projection?.isProjecting?V(t):((e,t)=>{let{transform:n="none"}=getComputedStyle(e);return U(n,t)})(e,t);{let n=window.getComputedStyle(e),i=(_(t)?n.getPropertyValue(t):n[t])||0;return"string"==typeof i?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:t}){return eo(e,t)}build(e,t,n){tW(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return tY(e,t,n)}}let tZ=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),t0={offset:"stroke-dashoffset",array:"stroke-dasharray"},t1={offset:"strokeDashoffset",array:"strokeDasharray"};function t2(e,{attrX:t,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},l,u,c){if(tW(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:h,style:d}=e;h.transform&&(d.transform=h.transform,delete h.transform),(d.transform||h.transformOrigin)&&(d.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),d.transform&&(d.transformBox=c?.transformBox??"fill-box",delete h.transformBox),void 0!==t&&(h.x=t),void 0!==n&&(h.y=n),void 0!==i&&(h.scale=i),void 0!==r&&function(e,t,n=1,i=0,r=!0){e.pathLength=1;let o=r?t0:t1;e[o.offset]=ef.transform(-i);let s=ef.transform(t),a=ef.transform(n);e[o.array]=`${s} ${a}`}(h,r,o,s,!1)}let t4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),t3=e=>"string"==typeof e&&"svg"===e.toLowerCase();function t5(e,t,n){let i=tY(e,t,n);for(let n in e)(tu(e[n])||tu(t[n]))&&(i[-1!==L.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=e[n]);return i}class t6 extends tz{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tE}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(M.has(t)){let e=to(t);return e&&e.default||0}return t=t4.has(t)?t:tZ(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return t5(e,t,n)}build(e,t,n){t2(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,i){for(let n in tG(e,t,void 0,i),t.attrs)e.setAttribute(t4.has(n)?n:tZ(n),t.attrs[n])}mount(e){this.isSVGTag=t3(e.tagName),super.mount(e)}}let t9=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function t8(e){if("string"!=typeof e||e.includes("-"));else if(t9.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}let t7=(0,p.createContext)({}),ne=(0,p.createContext)({strict:!1}),nt=(0,p.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),nn=(0,p.createContext)({});function ni(e){return Array.isArray(e)?e.join(" "):e}let nr=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function no(e,t,n){for(let i in t)tu(t[i])||tX(i,n)||(e[i]=t[i])}let ns=()=>({...nr(),attrs:{}}),na=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function nl(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||na.has(e)}let nu=e=>!nl(e);try{o=(()=>{let e=Error("Cannot find module '@emotion/is-prop-valid'");throw e.code="MODULE_NOT_FOUND",e})().default,"function"==typeof o&&(nu=e=>e.startsWith("on")?!nl(e):o(e))}catch{}let nc=(0,p.createContext)(null);function nh(e){let t=(0,p.useRef)(null);return null===t.current&&(t.current=e()),t.current}function nd(e){return tu(e)?e.get():e}let np=e=>(t,n)=>{let i=(0,p.useContext)(nn),r=(0,p.useContext)(nc),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t},n,i,r){return{latestValues:function(e,t,n,i){let r={},o=i(e,{});for(let e in o)r[e]=nd(o[e]);let{initial:s,animate:a}=e,l=tI(e),u=tO(e);t&&u&&!l&&!1!==e.inherit&&(void 0===s&&(s=t.initial),void 0===a&&(a=t.animate));let c=!!n&&!1===n.initial,h=(c=c||!1===s)?a:s;if(h&&"boolean"!=typeof h&&!tM(h)){let t=Array.isArray(h)?h:[h];for(let n=0;n<t.length;n++){let i=tB(e,t[n]);if(i){let{transitionEnd:e,transition:t,...n}=i;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(r[e]=t)}for(let t in e)r[t]=e[t]}}}return r}(n,i,r,e),renderState:t()}})(e,t,i,r);return n?o():nh(o)},nf=np({scrapeMotionValuesFromProps:tY,createRenderState:nr}),nm=np({scrapeMotionValuesFromProps:t5,createRenderState:ns}),ng=Symbol.for("motionComponentSymbol");function ny(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}let nx="data-"+tZ("framerAppearId"),nv=(0,p.createContext)({}),nb=tP?p.useLayoutEffect:p.useEffect;function nk(e,{forwardMotionProps:t=!1}={},n,i){n&&function(e){for(let t in e)tw[t]={...tw[t],...e[t]}}(n);let r=t8(e)?nm:nf;function o(n,o){var a;let l,u={...(0,p.useContext)(nt),...n,layoutId:function({layoutId:e}){let t=(0,p.useContext)(t7).id;return t&&void 0!==e?t+"-"+e:e}(n)},{isStatic:c}=u,h=function(e){let{initial:t,animate:n}=function(e,t){if(tI(e)){let{initial:t,animate:n}=e;return{initial:!1===t||tD(t)?t:void 0,animate:tD(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,p.useContext)(nn));return(0,p.useMemo)(()=>({initial:t,animate:n}),[ni(t),ni(n)])}(n),d=r(n,c);if(!c&&tP){(0,p.useContext)(ne).strict;let t=function(e){let{drag:t,layout:n}=tw;if(!t&&!n)return{};let i={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(u);l=t.MeasureLayout,h.visualElement=function(e,t,n,i,r){let{visualElement:o}=(0,p.useContext)(nn),s=(0,p.useContext)(ne),a=(0,p.useContext)(nc),l=(0,p.useContext)(nt).reducedMotion,u=(0,p.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:l}));let c=u.current,h=(0,p.useContext)(nv);c&&!c.projection&&r&&("html"===c.type||"svg"===c.type)&&function(e,t,n,i){let{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent)),e.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!s||a&&ny(a),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:i,crossfade:c,layoutScroll:l,layoutRoot:u})}(u.current,n,r,h);let d=(0,p.useRef)(!1);(0,p.useInsertionEffect)(()=>{c&&d.current&&c.update(n,a)});let f=n[nx],m=(0,p.useRef)(!!f&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return nb(()=>{c&&(d.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),c.scheduleRenderMicrotask(),m.current&&c.animationState&&c.animationState.animateChanges())}),(0,p.useEffect)(()=>{c&&(!m.current&&c.animationState&&c.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(f)}),m.current=!1),c.enteringChildren=void 0)}),c}(e,d,u,i,t.ProjectionNode)}return(0,s.jsxs)(nn.Provider,{value:h,children:[l&&h.visualElement?(0,s.jsx)(l,{visualElement:h.visualElement,...u}):null,function(e,t,n,{latestValues:i},r,o=!1){let s=(t8(e)?function(e,t,n,i){let r=(0,p.useMemo)(()=>{let n=ns();return t2(n,t,t3(i),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};no(t,e.style,e),r.style={...t,...r.style}}return r}:function(e,t){let n,i,r={},o=(n=e.style||{},no(i={},n,e),Object.assign(i,function({transformTemplate:e},t){return(0,p.useMemo)(()=>{let n=nr();return tW(n,t,e),Object.assign({},n.vars,n.style)},[t])}(e,t)),i);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r})(t,i,r,e),a=function(e,t,n){let i={};for(let r in e)("values"!==r||"object"!=typeof e.values)&&(nu(r)||!0===n&&nl(r)||!t&&!nl(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}(t,"string"==typeof e,o),l=e!==p.Fragment?{...a,...s,ref:n}:{},{children:u}=t,c=(0,p.useMemo)(()=>tu(u)?u.get():u,[u]);return(0,p.createElement)(e,{...l,children:c})}(e,n,(a=h.visualElement,(0,p.useCallback)(e=>{e&&d.onMount&&d.onMount(e),a&&(e?a.mount(e):a.unmount()),o&&("function"==typeof o?o(e):ny(o)&&(o.current=e))},[a])),d,c,t)]})}o.displayName=`motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;let a=(0,p.forwardRef)(o);return a[ng]=e,a}function nw(e,t,n){let i=e.getProps();return tB(i,t,void 0!==n?n:i.custom,e)}function nS(e,t){return e?.[t]??e?.default??e}let nT=e=>Array.isArray(e);function nC(e,t){let n=e.getValue("willChange");if(tu(n)&&n.add)return n.add(t);if(!n&&ej.WillChange){let n=new ej.WillChange("auto");e.addValue("willChange",n),n.add(t)}}function nE(e){e.duration=0,e.type="keyframes"}let nP=(e,t)=>n=>t(e(n)),nA=(...e)=>e.reduce(nP),nj=e=>1e3*e,nL={layout:0,mainThread:0,waapi:0};function nM(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function nD(e,t){return n=>n>0?t:e}let nN=(e,t,n)=>{let i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},nR=[eX,eJ,eY];function nI(e){let t=nR.find(t=>t.test(e));if(ek(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===eY&&(n=function({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,n/=100;let r=0,o=0,s=0;if(t/=100){let i=n<.5?n*(1+t):n+t-n*t,a=2*n-i;r=nM(a,i,e+1/3),o=nM(a,i,e),s=nM(a,i,e-1/3)}else r=o=s=n;return{red:Math.round(255*r),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}let nO=(e,t)=>{let n=nI(e),i=nI(t);if(!n||!i)return nD(e,t);let r={...n};return e=>(r.red=nN(n.red,i.red,e),r.green=nN(n.green,i.green,e),r.blue=nN(n.blue,i.blue,e),r.alpha=K(n.alpha,i.alpha,e),eJ.transform(r))},nF=new Set(["none","hidden"]);function nB(e,t){return n=>K(e,t,n)}function nV(e){return"number"==typeof e?nB:"string"==typeof e?W(e)?nD:eQ.test(e)?nO:nH:Array.isArray(e)?nU:"object"==typeof e?eQ.test(e)?nO:nz:nD}function nU(e,t){let n=[...e],i=n.length,r=e.map((e,n)=>nV(e)(e,t[n]));return e=>{for(let t=0;t<i;t++)n[t]=r[t](e);return n}}function nz(e,t){let n={...e,...t},i={};for(let r in n)void 0!==e[r]&&void 0!==t[r]&&(i[r]=nV(e[r])(e[r],t[r]));return e=>{for(let t in i)n[t]=i[t](e);return n}}let nH=(e,t)=>{let n=e9.createTransformer(t),i=e4(e),r=e4(t);if(!(i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length))return ek(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),nD(e,t);if(nF.has(e)&&!r.values.length||nF.has(t)&&!i.values.length)return nF.has(e)?n=>n<=0?e:t:n=>n>=1?t:e;return nA(nU(function(e,t){let n=[],i={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){let o=t.types[r],s=e.indexes[o][i[o]],a=e.values[s]??0;n[r]=a,i[o]++}return n}(i,r),r.values),n)};function n_(e,t,n){return"number"==typeof e&&"number"==typeof t&&"number"==typeof n?K(e,t,n):nV(e)(e,t)}let nq=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>eD.update(t,e),stop:()=>eN(t),now:()=>eR.isProcessing?eR.timestamp:th.now()}},nW=(e,t,n=10)=>{let i="",r=Math.max(Math.round(t/n),2);for(let t=0;t<r;t++)i+=Math.round(1e4*e(t/(r-1)))/1e4+", ";return`linear(${i.substring(0,i.length-2)})`};function nG(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function n$(e,t,n){let i=Math.max(t-5,0);return tm(n-e(i),t-i)}let nK=.01,nJ=2,nX=.005,nY=.5;function nQ(e,t){return e*Math.sqrt(1-t*t)}let nZ=["duration","bounce"],n0=["stiffness","damping","mass"];function n1(e,t){return t.some(t=>void 0!==e[t])}function n2(e=.3,t=.3){let n,i="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:r,restDelta:o}=i,s=i.keyframes[0],a=i.keyframes[i.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:h,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!n1(e,n0)&&n1(e,nZ))if(e.visualDuration){let n=2*Math.PI/(1.2*e.visualDuration),i=n*n,r=2*ea(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:1,stiffness:i,damping:r}}else{let n=function({duration:e=800,bounce:t=.3,velocity:n=0,mass:i=1}){let r,o;ek(e<=nj(10),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-t;s=ea(.05,1,s),e=ea(.01,10,e/1e3),s<1?(r=t=>{let i=t*s,r=i*e;return .001-(i-n)/nQ(t,s)*Math.exp(-r)},o=t=>{let i=t*s*e,o=Math.pow(s,2)*Math.pow(t,2)*e,a=Math.exp(-i),l=nQ(Math.pow(t,2),s);return(i*n+n-o)*a*(-r(t)+.001>0?-1:1)/l}):(r=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),o=t=>e*e*(n-t)*Math.exp(-t*e));let a=function(e,t,n){let i=n;for(let n=1;n<12;n++)i-=e(i)/t(i);return i}(r,o,5/e);if(e=nj(e),isNaN(a))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(a,2)*i;return{stiffness:t,damping:2*s*Math.sqrt(i*t),duration:e}}}(e);(t={...t,...n,mass:1}).isResolvedFromDuration=!0}return t}({...i,velocity:-((i.velocity||0)/1e3)}),m=p||0,g=c/(2*Math.sqrt(u*h)),y=a-s,x=Math.sqrt(u/h)/1e3,v=5>Math.abs(y);if(r||(r=v?nK:nJ),o||(o=v?nX:nY),g<1){let e=nQ(x,g);n=t=>a-Math.exp(-g*x*t)*((m+g*x*y)/e*Math.sin(e*t)+y*Math.cos(e*t))}else if(1===g)n=e=>a-Math.exp(-x*e)*(y+(m+x*y)*e);else{let e=x*Math.sqrt(g*g-1);n=t=>{let n=Math.exp(-g*x*t),i=Math.min(e*t,300);return a-n*((m+g*x*y)*Math.sinh(i)+e*y*Math.cosh(i))/e}}let b={calculatedDuration:f&&d||null,next:e=>{let t=n(e);if(f)l.done=e>=d;else{let i=0===e?m:0;g<1&&(i=0===e?nj(m):n$(n,e,t));let s=Math.abs(a-t)<=o;l.done=Math.abs(i)<=r&&s}return l.value=l.done?a:t,l},toString:()=>{let e=Math.min(nG(b),2e4),t=nW(t=>b.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return b}function n4({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){let h,d,p=e[0],f={done:!1,value:p},m=n*t,g=p+m,y=void 0===s?g:s(g);y!==g&&(m=y-p);let x=e=>-m*Math.exp(-e/i),v=e=>y+x(e),b=e=>{let t=x(e),n=v(e);f.done=Math.abs(t)<=u,f.value=f.done?y:n},k=e=>{let t;if(t=f.value,void 0!==a&&t<a||void 0!==l&&t>l){var n;h=e,d=n2({keyframes:[f.value,(n=f.value,void 0===a?l:void 0===l||Math.abs(a-n)<Math.abs(l-n)?a:l)],velocity:n$(v,e,f.value),damping:r,stiffness:o,restDelta:u,restSpeed:c})}};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return(d||void 0!==h||(t=!0,b(e),k(e)),void 0!==h&&e>=h)?d.next(e-h):(t||b(e),f)}}}n2.applyToOptions=e=>{let t=function(e,t=100,n){let i=n({...e,keyframes:[0,t]}),r=Math.min(nG(i),2e4);return{type:"keyframes",ease:e=>i.next(r*e).value/t,duration:r/1e3}}(e,100,n2);return e.ease=t.ease,e.duration=nj(t.duration),e.type="keyframes",e};let n3=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function n5(e,t,n,i){return e===t&&n===i?eA:r=>0===r||1===r?r:n3(function(e,t,n,i,r){let o,s,a=0;do(o=n3(s=t+(n-t)/2,i,r)-e)>0?n=s:t=s;while(Math.abs(o)>1e-7&&++a<12)return s}(r,0,1,e,n),t,i)}let n6=n5(.42,0,1,1),n9=n5(0,0,.58,1),n8=n5(.42,0,.58,1),n7=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ie=e=>t=>1-e(1-t),it=n5(.33,1.53,.69,.99),ii=ie(it),ir=n7(ii),io=e=>(e*=2)<1?.5*ii(e):.5*(2-Math.pow(2,-10*(e-1))),is=e=>1-Math.sin(Math.acos(e)),ia=ie(is),il=n7(is),iu=e=>Array.isArray(e)&&"number"==typeof e[0],ic={linear:eA,easeIn:n6,easeInOut:n8,easeOut:n9,circIn:is,circInOut:il,circOut:ia,backIn:ii,backInOut:ir,backOut:it,anticipate:io},ih=e=>{if(iu(e)){ew(4===e.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[t,n,i,r]=e;return n5(t,n,i,r)}return"string"==typeof e?(ew(void 0!==ic[e],`Invalid easing type '${e}'`,"invalid-easing-type"),ic[e]):e},id=(e,t,n)=>{let i=t-e;return 0===i?1:(n-e)/i};function ip(e,t,{clamp:n=!0,ease:i,mixer:r}={}){let o=e.length;if(ew(o===t.length,"Both input and output ranges must be the same length","range-length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];let s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,n){let i=[],r=n||ej.mix||n_,o=e.length-1;for(let n=0;n<o;n++){let o=r(e[n],e[n+1]);t&&(o=nA(Array.isArray(t)?t[n]||eA:t,o)),i.push(o)}return i}(t,i,r),l=a.length,u=n=>{if(s&&n<e[0])return t[0];let i=0;if(l>1)for(;i<e.length-2&&!(n<e[i+1]);i++);let r=id(e[i],e[i+1],n);return a[i](r)};return n?t=>u(ea(e[0],e[o-1],t)):u}function im(e){let t=[0];return!function(e,t){let n=e[e.length-1];for(let i=1;i<=t;i++){let r=id(0,t,i);e.push(K(n,1,r))}}(t,e.length-1),t}function ig({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){var r;let o=Array.isArray(i)&&"number"!=typeof i[0]?i.map(ih):ih(i),s={done:!1,value:t[0]},a=ip((r=n&&n.length===t.length?n:im(t),r.map(t=>t*e)),t,{ease:Array.isArray(o)?o:t.map(()=>o||n8).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(s.value=a(t),s.done=t>=e,s)}}let iy=e=>null!==e;function ix(e,{repeat:t,repeatType:n="loop"},i,r=1){let o=e.filter(iy),s=r<0||t&&"loop"!==n&&t%2==1?0:o.length-1;return s&&void 0!==i?i:o[s]}let iv={decay:n4,inertia:n4,tween:ig,keyframes:ig,spring:n2};function ib(e){"string"==typeof e.type&&(e.type=iv[e.type])}class ik{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}let iw=e=>e/100;class iS extends ik{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==th.now()&&this.tick(th.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},nL.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){let{options:e}=this;ib(e);let{type:t=ig,repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e,{keyframes:s}=e,a=t||ig;a!==ig&&"number"!=typeof s[0]&&(this.mixKeyframes=nA(iw,n_(s[0],s[1])),s=[0,100]);let l=a({...e,keyframes:s});"mirror"===r&&(this.mirroredGenerator=a({...e,keyframes:[...s].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=nG(l));let{calculatedDuration:u}=l;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=l}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){let{generator:n,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:s,calculatedDuration:a}=this;if(null===this.startTime)return n.next(0);let{delay:l=0,keyframes:u,repeat:c,repeatType:h,repeatDelay:d,type:p,onUpdate:f,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=i);let x=this.currentTime,v=n;if(c){let e=Math.min(this.currentTime,i)/s,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,(t=Math.min(t,c+1))%2&&("reverse"===h?(n=1-n,d&&(n-=d/s)):"mirror"===h&&(v=o)),x=ea(0,1,n)*s}let b=y?{done:!1,value:u[0]}:v.next(x);r&&(b.value=r(b.value));let{done:k}=b;y||null===a||(k=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);let w=null===this.holdTime&&("finished"===this.state||"running"===this.state&&k);return w&&p!==n4&&(b.value=ix(u,this.options,m,this.speed)),f&&f(b.value),w&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return this.currentTime/1e3}set time(e){e=nj(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(th.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:e=nq,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();let n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(th.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,nL.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function iT(e){let t;return()=>(void 0===t&&(t=e()),t)}let iC=iT(()=>void 0!==window.ScrollTimeline),iE={},iP=(r=iT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0}),()=>iE.linearEasing??r()),iA=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,ij={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:iA([0,.65,.55,1]),circOut:iA([.55,0,1,.45]),backIn:iA([.31,.01,.66,-.59]),backOut:iA([.33,1.53,.69,.99])};function iL(e){return"function"==typeof e&&"applyToOptions"in e}class iM extends ik{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:s,onComplete:a}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,ew("string"!=typeof e.type,'Mini animate() doesn\'t support "type" as a string.',"mini-spring");const l=function({type:e,...t}){return iL(e)&&iP()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=function(e,t,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},u){let c={[t]:n};l&&(c.offset=l);let h=function e(t,n){if(t)return"function"==typeof t?iP()?nW(t,n):"ease-out":iu(t)?iA(t):Array.isArray(t)?t.map(t=>e(t,n)||ij.easeOut):ij[t]}(a,r);Array.isArray(h)&&(c.easing=h);let d={delay:i,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"};u&&(d.pseudoElement=u);let p=e.animate(c,d);return p}(t,n,i,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){let e=ix(i,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(e):n.startsWith("--")?t.style.setProperty(n,e):t.style[n]=e,this.animation.cancel()}a?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){return Number(this.animation.effect?.getComputedTiming?.().duration||0)/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return(Number(this.animation.currentTime)||0)/1e3}set time(e){this.finishedTime=null,this.animation.currentTime=nj(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&iC())?(this.animation.timeline=e,eA):t(this)}}let iD={anticipate:io,backInOut:ir,circInOut:il};class iN extends iM{constructor(e){!function(e){"string"==typeof e.ease&&e.ease in iD&&(e.ease=iD[e.ease])}(e),ib(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:i,element:r,...o}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);let s=new iS({...o,autoplay:!1}),a=nj(this.finishedTime??this.time);t.setWithVelocity(s.sample(a-10).value,s.sample(a).value,10),s.stop()}}let iR=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(e9.test(e)||"0"===e)&&!e.startsWith("url(")),iI=new Set(["opacity","clipPath","filter","transform"]),iO=iT(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class iF extends ik{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:s,name:a,motionValue:l,element:u,...c}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=th.now();const h={autoplay:e,delay:t,type:n,repeat:i,repeatDelay:r,repeatType:o,name:a,motionValue:l,element:u,...c},d=u?.KeyframeResolver||eH;this.keyframeResolver=new d(s,(e,t,n)=>this.onKeyframesResolved(e,t,h,!n),a,l,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,i){this.keyframeResolver=void 0;let{name:r,type:o,velocity:s,delay:a,isHandoff:l,onUpdate:u}=n;this.resolvedAt=th.now(),!function(e,t,n,i){let r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;let o=e[e.length-1],s=iR(r,t),a=iR(o,t);return ek(s===a,`You are trying to animate ${t} from "${r}" to "${o}". "${s?o:r}" is not an animatable value.`,"value-not-animatable"),!!s&&!!a&&(function(e){let t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||iL(n))&&i)}(e,r,o,s)&&((ej.instantAnimations||!a)&&u?.(ix(e,n,t)),e[0]=e[e.length-1],nE(n),n.repeat=0);let c={startTime:i?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},h=!l&&function(e){let{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:o,type:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:a,transformTemplate:l}=t.owner.getProps();return iO()&&n&&iI.has(n)&&("transform"!==n||!l)&&!a&&!i&&"mirror"!==r&&0!==o&&"inertia"!==s}(c)?new iN({...c,element:c.motionValue.owner.current}):new iS(c);h.finished.then(()=>this.notifyFinished()).catch(eA),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),eV=!0,ez(),eU(),eV=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}let iB=e=>null!==e,iV={type:"spring",stiffness:500,damping:25,restSpeed:10},iU={type:"keyframes",duration:.8},iz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},iH=(e,t,n,i={},r,o)=>s=>{let a=nS(i,e)||{},l=a.delay||i.delay||0,{elapsed:u=0}=i;u-=nj(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:r};!function({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(a)&&Object.assign(c,((e,{keyframes:t})=>t.length>2?iU:M.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:iV:iz)(e,c)),c.duration&&(c.duration=nj(c.duration)),c.repeatDelay&&(c.repeatDelay=nj(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let h=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(nE(c),0===c.delay&&(h=!0)),(ej.instantAnimations||ej.skipAnimations)&&(h=!0,nE(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,h&&!o&&void 0!==t.get()){let e=function(e,{repeat:t,repeatType:n="loop"},i){let r=e.filter(iB),o=t&&"loop"!==n&&t%2==1?0:r.length-1;return r[o]}(c.keyframes,a);if(void 0!==e)return void eD.update(()=>{c.onUpdate(e),c.onComplete()})}return a.isSync?new iS(c):new iF(c)};function i_(e,t,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;i&&(o=i);let l=[],u=r&&e.animationState&&e.animationState.getState()[r];for(let t in a){let i=e.getValue(t,e.latestValues[t]??null),r=a[t];if(void 0===r||u&&function({protectedKeys:e,needsAnimating:t},n){let i=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,i}(u,t))continue;let s={delay:n,...nS(o||{},t)},c=i.get();if(void 0!==c&&!i.isAnimating&&!Array.isArray(r)&&r===c&&!s.velocity)continue;let h=!1;if(window.MotionHandoffAnimation){let n=e.props[nx];if(n){let e=window.MotionHandoffAnimation(n,t,eD);null!==e&&(s.startTime=e,h=!0)}}nC(e,t),i.start(iH(t,i,r,e.shouldReduceMotion&&es.has(t)?{type:!1}:s,e,h));let d=i.animation;d&&l.push(d)}return s&&Promise.all(l).then(()=>{eD.update(()=>{s&&function(e,t){let{transitionEnd:n={},transition:i={},...r}=nw(e,t)||{};for(let t in r={...r,...n}){var o;let n=nT(o=r[t])?o[o.length-1]||0:o;e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,tx(n))}}(e,s)})}),l}function iq(e,t,n,i=0,r=1){let o=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),s=e.size,a=(s-1)*i;return"function"==typeof n?n(o,s):1===r?o*i:a-o*i}function iW(e,t,n={}){let i=nw(e,t,"exit"===n.type?e.presenceContext?.custom:void 0),{transition:r=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);let o=i?()=>Promise.all(i_(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(i=0)=>{let{delayChildren:o=0,staggerChildren:s,staggerDirection:a}=r;return function(e,t,n=0,i=0,r=0,o=1,s){let a=[];for(let l of e.variantChildren)l.notify("AnimationStart",t),a.push(iW(l,t,{...s,delay:n+("function"==typeof i?0:i)+iq(e.variantChildren,l,i,r,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}(e,t,i,o,s,a,n)}:()=>Promise.resolve(),{when:a}=r;if(!a)return Promise.all([o(),s(n.delay)]);{let[e,t]="beforeChildren"===a?[o,s]:[s,o];return e().then(()=>t())}}function iG(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}let i$=tR.length,iK=[...tN].reverse(),iJ=tN.length;function iX(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iY(){return{animate:iX(!0),whileInView:iX(),whileHover:iX(),whileTap:iX(),whileDrag:iX(),whileFocus:iX(),exit:iX()}}class iQ{constructor(e){this.isMounted=!1,this.node=e}update(){}}let iZ=0,i0={x:!1,y:!1};function i1(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}let i2=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function i4(e){return{point:{x:e.pageX,y:e.pageY}}}function i3(e,t,n,i){return i1(e,t,e=>i2(e)&&n(e,i4(e)),i)}function i5(e){return e.max-e.min}function i6(e,t,n,i=.5){e.origin=i,e.originPoint=K(t.min,t.max,e.origin),e.scale=i5(n)/i5(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function i9(e,t,n,i){i6(e.x,t.x,n.x,i?i.originX:void 0),i6(e.y,t.y,n.y,i?i.originY:void 0)}function i8(e,t,n){e.min=n.min+t.min,e.max=e.min+i5(t)}function i7(e,t,n){e.min=t.min-n.min,e.max=e.min+i5(t)}function re(e,t,n){i7(e.x,t.x,n.x),i7(e.y,t.y,n.y)}function rt(e){return[e("x"),e("y")]}let rn=({current:e})=>e?e.ownerDocument.defaultView:null,ri=(e,t)=>Math.abs(e-t);class rr{constructor(e,t,{transformPagePoint:n,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{var e,t;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let n=ra(this.lastMoveEventInfo,this.history),i=null!==this.startEvent,r=(e=n.offset,t={x:0,y:0},Math.sqrt(ri(e.x,t.x)**2+ri(e.y,t.y)**2)>=this.distanceThreshold);if(!i&&!r)return;let{point:o}=n,{timestamp:s}=eR;this.history.push({...o,timestamp:s});let{onStart:a,onMove:l}=this.handlers;i||(a&&a(this.lastMoveEvent,n),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,n)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ro(t,this.transformPagePoint),eD.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=ra("pointercancel"===e.type?this.lastMoveEventInfo:ro(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),i&&i(e,o)},!i2(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=i||window;const s=ro(i4(e),this.transformPagePoint),{point:a}=s,{timestamp:l}=eR;this.history=[{...a,timestamp:l}];const{onSessionStart:u}=t;u&&u(e,ra(s,this.history)),this.removeListeners=nA(i3(this.contextWindow,"pointermove",this.handlePointerMove),i3(this.contextWindow,"pointerup",this.handlePointerUp),i3(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),eN(this.updatePoint)}}function ro(e,t){return t?{point:t(e.point)}:e}function rs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ra({point:e},t){return{point:e,delta:rs(e,rl(t)),offset:rs(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null,r=rl(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>nj(.1)));)n--;if(!i)return{x:0,y:0};let o=(r.timestamp-i.timestamp)/1e3;if(0===o)return{x:0,y:0};let s={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}(t,.1)}}function rl(e){return e[e.length-1]}function ru(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function rc(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function rh(e,t,n){return{min:rd(e,t),max:rd(e,n)}}function rd(e,t){return"number"==typeof e?e:e[t]||0}let rp=new WeakMap;class rf{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tE(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:i}=this.visualElement;if(i&&!1===i.isPresent)return;let r=e=>{let{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(i4(e).point)},o=(e,t)=>{let{drag:n,dragPropagation:i,onDragStart:r}=this.getProps();if(n&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(e){if("x"===e||"y"===e)if(i0[e])return null;else return i0[e]=!0,()=>{i0[e]=!1};return i0.x||i0.y?null:(i0.x=i0.y=!0,()=>{i0.x=i0.y=!1})}(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rt(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ep.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let i=n.layout.layoutBox[e];i&&(t=i5(i)*(parseFloat(t)/100))}}this.originPoint[e]=t}),r&&eD.postRender(()=>r(e,t)),nC(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:s}=t;if(i&&null===this.currentDirection){this.currentDirection=function(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}(s),null!==this.currentDirection&&r&&r(this.currentDirection);return}this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),o&&o(e,t)},a=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},l=()=>rt(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:u}=this.getProps();this.panSession=new rr(e,{onSessionStart:r,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:n,contextWindow:rn(this.visualElement)})}stop(e,t){let n=e||this.latestPointerEvent,i=t||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!n)return;let{velocity:o}=i;this.startAnimation(o);let{onDragEnd:s}=this.getProps();s&&eD.postRender(()=>s(n,i))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){let{drag:i}=this.getProps();if(!n||!rm(e,i,this.currentDirection))return;let r=this.getAxisMotionValue(e),o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:n},i){return void 0!==t&&e<t?e=i?K(t,e,i.min):Math.max(e,t):void 0!==n&&e>n&&(e=i?K(n,e,i.max):Math.min(e,n)),e}(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;e&&ny(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=function(e,{top:t,left:n,bottom:i,right:r}){return{x:ru(e.x,n,r),y:ru(e.y,t,i)}}(n.layoutBox,e):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:rh(e,"left","right"),y:rh(e,"top","bottom")}}(t),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&rt(e=>{var t,i;let r;!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=(t=n.layoutBox[e],i=this.constraints[e],r={},void 0!==i.min&&(r.min=i.min-t.min),void 0!==i.max&&(r.max=i.max-t.min),r))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ny(t))return!1;let i=t.current;ew(null!==i,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let o=function(e,t,n){let i=eo(e,n),{scroll:r}=t;return r&&(en(i.x,r.offset.x),en(i.y,r.offset.y)),i}(i,r.root,this.visualElement.getTransformPagePoint()),s=(e=r.layout.layoutBox,{x:rc(e.x,o.x),y:rc(e.y,o.y)});if(n){let e=n(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(s));this.hasMutatedConstraints=!!e,e&&(s=$(e))}return s}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{};return Promise.all(rt(s=>{if(!rm(s,t,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:n?e[s]:0,bounceStiffness:i?200:1e6,bounceDamping:i?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,u)})).then(s)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return nC(this.visualElement,e),n.start(iH(e,n,0,t,this.visualElement,!1))}stopAnimation(){rt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){rt(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){rt(t=>{let{drag:n}=this.getProps();if(!rm(t,n,this.currentDirection))return;let{projection:i}=this.visualElement,r=this.getAxisMotionValue(t);if(i&&i.layout){let{min:n,max:o}=i.layout.layoutBox[t];r.set(e[t]-K(n,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!ny(t)||!n||!this.constraints)return;this.stopAnimation();let i={x:0,y:0};rt(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){var n,r;let o,s,a,l=t.get();i[e]=(n={min:l,max:l},r=this.constraints[e],o=.5,s=i5(n),(a=i5(r))>s?o=id(r.min,r.max-s,n.min):s>a&&(o=id(n.min,n.max-a,r.min)),ea(0,1,o))}});let{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),rt(t=>{if(!rm(t,e,null))return;let n=this.getAxisMotionValue(t),{min:r,max:o}=this.constraints[t];n.set(K(r,o,i[t]))})}addListeners(){if(!this.visualElement.current)return;rp.set(this.visualElement,this);let e=i3(this.visualElement.current,"pointerdown",e=>{let{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{let{dragConstraints:e}=this.getProps();ny(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),eD.read(t);let r=i1(window,"resize",()=>this.scalePositionWithinConstraints()),o=n.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(rt(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{r(),e(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=.35,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:s}}}function rm(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}let rg=e=>(t,n)=>{e&&eD.postRender(()=>e(t,n))};var ry=p;let rx={hasAnimatedSinceResize:!0,hasEverUpdated:!1},rv=!1;class rb extends ry.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=e;r&&(t.group&&t.group.add(r),n&&n.register&&i&&n.register(r),rv&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),rx.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:i,isPresent:r}=this.props,{projection:o}=n;return o&&(o.isPresent=r,rv=!0,i||e.layoutDependency!==t||void 0===t||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||eD.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),tb.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:i}=e;rv=!0,i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rk(e){let[t,n]=function(e=!0){let t=(0,p.useContext)(nc);if(null===t)return[!0,null];let{isPresent:n,onExitComplete:i,register:r}=t,o=(0,p.useId)();(0,p.useEffect)(()=>{if(e)return r(o)},[e]);let s=(0,p.useCallback)(()=>e&&i&&i(o),[o,i,e]);return!n&&i?[!1,s]:[!0]}(),i=(0,ry.useContext)(t7);return(0,s.jsx)(rb,{...e,layoutGroup:i,switchLayoutGroup:(0,ry.useContext)(nv),isPresent:t,safeToRemove:n})}function rw(e){return"object"==typeof e&&null!==e}function rS(e){return rw(e)&&"ownerSVGElement"in e}let rT=(e,t)=>e.depth-t.depth;class rC{constructor(){this.children=[],this.isDirty=!1}add(e){td(this.children,e),this.isDirty=!0}remove(e){tp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(rT),this.isDirty=!1,this.children.forEach(e)}}let rE=["TopLeft","TopRight","BottomLeft","BottomRight"],rP=rE.length,rA=e=>"string"==typeof e?parseFloat(e):e,rj=e=>"number"==typeof e||ef.test(e);function rL(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let rM=rN(0,.5,ia),rD=rN(.5,.95,eA);function rN(e,t,n){return i=>i<e?0:i>t?1:n(id(e,t,i))}function rR(e,t){e.min=t.min,e.max=t.max}function rI(e,t){rR(e.x,t.x),rR(e.y,t.y)}function rO(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function rF(e,t,n,i,r){return e-=t,e=i+1/n*(e-i),void 0!==r&&(e=i+1/r*(e-i)),e}function rB(e,t,[n,i,r],o,s){!function(e,t=0,n=1,i=.5,r,o=e,s=e){if(ep.test(t)&&(t=parseFloat(t),t=K(s.min,s.max,t/100)-s.min),"number"!=typeof t)return;let a=K(o.min,o.max,i);e===o&&(a-=t),e.min=rF(e.min,t,n,a,r),e.max=rF(e.max,t,n,a,r)}(e,t[n],t[i],t[r],t.scale,o,s)}let rV=["x","scaleX","originX"],rU=["y","scaleY","originY"];function rz(e,t,n,i){rB(e.x,t,rV,n?n.x:void 0,i?i.x:void 0),rB(e.y,t,rU,n?n.y:void 0,i?i.y:void 0)}function rH(e){return 0===e.translate&&1===e.scale}function r_(e){return rH(e.x)&&rH(e.y)}function rq(e,t){return e.min===t.min&&e.max===t.max}function rW(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function rG(e,t){return rW(e.x,t.x)&&rW(e.y,t.y)}function r$(e){return i5(e.x)/i5(e.y)}function rK(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class rJ{constructor(){this.members=[]}add(e){td(this.members,e),e.scheduleRender()}remove(e){if(tp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t,n=this.members.findIndex(t=>e===t);if(0===n)return!1;for(let e=n;e>=0;e--){let n=this.members[e];if(!1!==n.isPresent){t=n;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:i}=e.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let rX=["","X","Y","Z"],rY=0;function rQ(e,t,n,i){let{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function rZ({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(e={},n=t?.()){this.id=rY++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(r2),this.nodes.forEach(r7),this.nodes.forEach(oe),this.nodes.forEach(r4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new rC)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new tf),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=rS(t)&&!(rS(t)&&"svg"===t.tagName),this.instance=t;let{layoutId:n,layout:i,visualElement:r}=this.options;if(r&&!r.current&&r.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||n)&&(this.isLayoutDirty=!0),e){let n,i=0,r=()=>this.root.updateBlockedByResize=!1;eD.read(()=>{i=window.innerWidth}),e(t,()=>{let e=window.innerWidth;if(e!==i){let t,o;i=e,this.root.updateBlockedByResize=!0,n&&n(),t=th.now(),o=({timestamp:e})=>{let n=e-t;n>=250&&(eN(o),r(n-250))},eD.setup(o,!0),n=()=>eN(o),rx.hasAnimatedSinceResize&&(rx.hasAnimatedSinceResize=!1,this.nodes.forEach(r8))}})}n&&this.root.registerSharedNode(n,this),!1!==this.options.animate&&r&&(n||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:i})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let o=this.options.transition||r.getDefaultTransition()||os,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=r.getProps(),l=!this.targetLayout||!rG(this.targetLayout,i),u=!t&&n;if(this.options.layoutRoot||this.resumeFrom||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...nS(o,"layout"),onPlay:s,onComplete:a};(r.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,u)}else t||r8(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),eN(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ot),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:n}=t.options;if(!n)return;let i=n.props[nx];if(window.MotionHasOptimisedAnimation(i,"transform")){let{layout:e,layoutId:n}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",eD,!(e||n))}let{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&e(r)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;let i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(r5);return}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(r6);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(r9),this.nodes.forEach(r0),this.nodes.forEach(r1)):this.nodes.forEach(r6),this.clearAllSnapshots();let e=th.now();eR.delta=ea(0,1e3/60,e-eR.timestamp),eR.timestamp=e,eR.isProcessing=!0,eI.update.process(eR),eI.preRender.process(eR),eI.render.process(eR),eR.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,tb.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r3),this.sharedNodes.forEach(on)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,eD.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){eD.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||i5(this.snapshot.measuredBox.x)||i5(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=tE(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!r)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!r_(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,o=i!==this.prevTransformTemplateValue;e&&this.instance&&(t||Y(this.latestValues)||o)&&(r(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let n=this.measurePageBox(),i=this.removeElementScroll(n);return e&&(i=this.removeTransform(i)),ou((t=i).x),ou(t.y),{animationId:this.root.animationId,measuredBox:n,layoutBox:i,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return tE();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(oh))){let{scroll:e}=this.root;e&&(en(t.x,e.offset.x),en(t.y,e.offset.y))}return t}removeElementScroll(e){let t=tE();if(rI(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let i=this.path[n],{scroll:r,options:o}=i;i!==this.root&&r&&o.layoutScroll&&(r.wasRoot&&rI(t,e),en(t.x,r.offset.x),en(t.y,r.offset.y))}return t}applyTransform(e,t=!1){let n=tE();rI(n,e);for(let e=0;e<this.path.length;e++){let i=this.path[e];!t&&i.options.layoutScroll&&i.scroll&&i!==i.root&&er(n,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),Y(i.latestValues)&&er(n,i.latestValues)}return Y(this.latestValues)&&er(n,this.latestValues),n}removeTransform(e){let t=tE();rI(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!Y(n.latestValues))continue;X(n.latestValues)&&n.updateSnapshot();let i=tE();rI(i,n.measurePageBox()),rz(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,i)}return Y(this.latestValues)&&rz(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==eR.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:i,layoutId:r}=this.options;if(!this.layout||!(i||r))return;this.resolvedRelativeTargetAt=eR.timestamp;let o=this.getClosestProjectingParent();if(o&&this.linkedParentVersion!==o.layoutVersion&&!o.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(o&&o.layout?this.createRelativeTarget(o,this.layout.layoutBox,o.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta){if(this.target||(this.target=tE(),this.targetWithTransforms=tE()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var s,a,l;this.forceRelativeParentToResolveTarget(),s=this.target,a=this.relativeTarget,l=this.relativeParent.target,i8(s.x,a.x,l.x),i8(s.y,a.y,l.y)}else this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rI(this.target,this.layout.layoutBox),et(this.target,this.targetDelta)):rI(this.target,this.layout.layoutBox);this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,o&&!!o.resumingFrom==!!this.resumingFrom&&!o.options.layoutScroll&&o.target&&1!==this.animationProgress?this.createRelativeTarget(o,this.target,o.target):this.relativeParent=this.relativeTarget=void 0)}}getClosestProjectingParent(){if(!(!this.parent||X(this.parent.latestValues)||Q(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tE(),this.relativeTargetOrigin=tE(),re(this.relativeTargetOrigin,t,n),rI(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===eR.timestamp&&(n=!1),n)return;let{layout:i,layoutId:r}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||r))return;rI(this.layoutCorrected,this.layout.layoutBox);let o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n,i=!1){let r,o,s=n.length;if(s){t.x=t.y=1;for(let a=0;a<s;a++){o=(r=n[a]).projectionDelta;let{visualElement:s}=r.options;(!s||!s.props.style||"contents"!==s.props.style.display)&&(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&er(e,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,et(e,o)),i&&Y(r.latestValues)&&er(e,r.latestValues))}t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}}(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=tE());let{target:a}=e;if(!a){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(rO(this.prevProjectionDelta.x,this.projectionDelta.x),rO(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),i9(this.projectionDelta,this.layoutCorrected,a,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&rK(this.projectionDelta.x,this.prevProjectionDelta.x)&&rK(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",a))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=tT(),this.projectionDelta=tT(),this.projectionDeltaWithTransform=tT()}setAnimationOrigin(e,t=!1){let n,i=this.snapshot,r=i?i.latestValues:{},o={...this.latestValues},s=tT();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let a=tE(),l=(i?i.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,h=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(oo));this.animationProgress=0,this.mixTargetDelta=t=>{let i=t/1e3;if(oi(s.x,e.x,i),oi(s.y,e.y,i),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,d,p,f,m,g;re(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,m=a,g=i,or(p.x,f.x,m.x,g),or(p.y,f.y,m.y,g),n&&(u=this.relativeTarget,d=n,rq(u.x,d.x)&&rq(u.y,d.y))&&(this.isProjectionDirty=!1),n||(n=tE()),rI(n,this.relativeTarget)}l&&(this.animationValues=o,function(e,t,n,i,r,o){r?(e.opacity=K(0,n.opacity??1,rM(i)),e.opacityExit=K(t.opacity??1,0,rD(i))):o&&(e.opacity=K(t.opacity??1,n.opacity??1,i));for(let r=0;r<rP;r++){let o=`border${rE[r]}Radius`,s=rL(t,o),a=rL(n,o);(void 0!==s||void 0!==a)&&(s||(s=0),a||(a=0),0===s||0===a||rj(s)===rj(a)?(e[o]=Math.max(K(rA(s),rA(a),i),0),(ep.test(a)||ep.test(s))&&(e[o]+="%")):e[o]=a)}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,i))}(o,r,this.latestValues,i,h,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(eN(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=eD.update(()=>{var t,n,i;let r;rx.hasAnimatedSinceResize=!0,nL.layout++,this.motionValue||(this.motionValue=tx(0)),this.currentAnimation=(t=this.motionValue,n=[0,1e3],i={...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{nL.layout--},onComplete:()=>{nL.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}},(r=tu(t)?t:tx(t)).start(iH("",r,n,i)),r.animation),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:i,latestValues:r}=e;if(t&&n&&i){if(this!==e&&this.layout&&i&&oc(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||tE();let t=i5(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let i=i5(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+i}rI(t,n),er(t,r),i9(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new rJ),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let i=this.getStack();i&&i.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let i={};n.z&&rQ("z",e,i,this.animationValues);for(let t=0;t<rX.length;t++)rQ(`rotate${rX[t]}`,e,i,this.animationValues),rQ(`skew${rX[t]}`,e,i,this.animationValues);for(let t in e.render(),i)e.setStaticValue(t,i[t]),this.animationValues&&(this.animationValues[t]=i[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility="hidden";return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=nd(t?.pointerEvents)||"",e.transform=n?n(this.latestValues,""):"none";return}let i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=nd(t?.pointerEvents)||""),this.hasProjected&&!Y(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1);return}e.visibility="";let r=i.animationValues||i.latestValues;this.applyTransformsToTarget();let o=function(e,t,n){let i="",r=e.x.translate/t.x,o=e.y.translate/t.y,s=n?.z||0;if((r||o||s)&&(i=`translate3d(${r}px, ${o}px, ${s}px) `),(1!==t.x||1!==t.y)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:r,rotateY:o,skewX:s,skewY:a}=n;e&&(i=`perspective(${e}px) ${i}`),t&&(i+=`rotate(${t}deg) `),r&&(i+=`rotateX(${r}deg) `),o&&(i+=`rotateY(${o}deg) `),s&&(i+=`skewX(${s}deg) `),a&&(i+=`skewY(${a}deg) `)}let a=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==a||1!==l)&&(i+=`scale(${a}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,r);n&&(o=n(r,o)),e.transform=o;let{x:s,y:a}=this.projectionDelta;for(let t in e.transformOrigin=`${100*s.origin}% ${100*a.origin}% 0`,i.animationValues?e.opacity=i===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:e.opacity=i===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0,tJ){if(void 0===r[t])continue;let{correct:n,applyTo:s,isCSSVariable:a}=tJ[t],l="none"===o?r[t]:n(r[t],i);if(s){let t=s.length;for(let n=0;n<t;n++)e[s[n]]=l}else a?this.options.visualElement.renderState.vars[t]=l:e[t]=l}this.options.layoutId&&(e.pointerEvents=i===this?nd(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(r5),this.root.sharedNodes.clear()}}}function r0(e){e.updateLayout()}function r1(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){let{layoutBox:n,measuredBox:i}=e.layout,{animationType:r}=e.options,o=t.source!==e.layout.source;"size"===r?rt(e=>{let i=o?t.measuredBox[e]:t.layoutBox[e],r=i5(i);i.min=n[e].min,i.max=i.min+r}):oc(r,t.layoutBox,n)&&rt(i=>{let r=o?t.measuredBox[i]:t.layoutBox[i],s=i5(n[i]);r.max=r.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[i].max=e.relativeTarget[i].min+s)});let s=tT();i9(s,n,t.layoutBox);let a=tT();o?i9(a,e.applyTransform(i,!0),t.measuredBox):i9(a,n,t.layoutBox);let l=!r_(s),u=!1;if(!e.resumeFrom){let i=e.getClosestProjectingParent();if(i&&!i.resumeFrom){let{snapshot:r,layout:o}=i;if(r&&o){let s=tE();re(s,t.layoutBox,r.layoutBox);let a=tE();re(a,n,o.layoutBox),rG(s,a)||(u=!0),i.options.layoutRoot&&(e.relativeTarget=a,e.relativeTargetOrigin=s,e.relativeParent=i)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function r2(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function r4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function r3(e){e.clearSnapshot()}function r5(e){e.clearMeasurements()}function r6(e){e.isLayoutDirty=!1}function r9(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function r8(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function r7(e){e.resolveTargetDelta()}function oe(e){e.calcProjection()}function ot(e){e.resetSkewAndRotation()}function on(e){e.removeLeadSnapshot()}function oi(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function or(e,t,n,i){e.min=K(t.min,n.min,i),e.max=K(t.max,n.max,i)}function oo(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let os={duration:.45,ease:[.4,0,.1,1]},oa=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ol=oa("applewebkit/")&&!oa("chrome/")?Math.round:eA;function ou(e){e.min=ol(e.min),e.max=ol(e.max)}function oc(e,t,n){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(r$(t)-r$(n)))}function oh(e){return e!==e.root&&e.scroll?.wasRoot}let od=rZ({attachResizeListener:(e,t)=>i1(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),op={current:void 0},of=rZ({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!op.current){let e=new od({});e.mount(window),e.setOptions({layoutScroll:!0}),op.current=e}return op.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function om(e,t,n){if(e instanceof EventTarget)return[e];if("string"==typeof e){let i=document;t&&(i=t.current);let r=n?.[e]??i.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}function og(e,t){let n=om(e),i=new AbortController;return[n,{passive:!0,...t,signal:i.signal},()=>i.abort()]}function oy(e){return!("touch"===e.pointerType||i0.x||i0.y)}function ox(e,t,n){let{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover","Start"===n);let r=i["onHover"+n];r&&eD.postRender(()=>r(t,i4(t)))}function ov(e){return rw(e)&&"offsetHeight"in e}let ob=(e,t)=>!!t&&(e===t||ob(e,t.parentElement)),ok=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),ow=new WeakSet;function oS(e){return t=>{"Enter"===t.key&&e(t)}}function oT(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function oC(e){return i2(e)&&!(i0.x||i0.y)}function oE(e,t,n){let{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap","Start"===n);let r=i["onTap"+("End"===n?"":n)];r&&eD.postRender(()=>r(t,i4(t)))}let oP=new WeakMap,oA=new WeakMap,oj=e=>{let t=oP.get(e.target);t&&t(e)},oL=e=>{e.forEach(oj)},oM={some:0,all:1},oD=function(e,t){if("undefined"==typeof Proxy)return nk;let n=new Map,i=(n,i)=>nk(n,i,e,t);return new Proxy((e,t)=>i(e,t),{get:(r,o)=>"create"===o?i:(n.has(o)||n.set(o,nk(o,void 0,e,t)),n.get(o))})}({animation:{Feature:class extends iQ{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>(function(e,t,n={}){let i;if(e.notify("AnimationStart",t),Array.isArray(t))i=Promise.all(t.map(t=>iW(e,t,n)));else if("string"==typeof t)i=iW(e,t,n);else{let r="function"==typeof t?nw(e,t,n.custom):t;i=Promise.all(i_(e,r,n))}return i.then(()=>{e.notify("AnimationComplete",t)})})(e,t,n))),n=iY(),i=!0,r=t=>(n,i)=>{let r=nw(e,i,"exit"===t?e.presenceContext?.custom:void 0);if(r){let{transition:e,transitionEnd:t,...i}=r;n={...n,...i,...t}}return n};function o(o){let{props:s}=e,a=function e(t){if(!t)return;if(!t.isControllingVariants){let n=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(n.initial=t.props.initial),n}let n={};for(let e=0;e<i$;e++){let i=tR[e],r=t.props[i];(tD(r)||!1===r)&&(n[i]=r)}return n}(e.parent)||{},l=[],u=new Set,c={},h=1/0;for(let t=0;t<iJ;t++){var d,p;let f=iK[t],m=n[f],g=void 0!==s[f]?s[f]:a[f],y=tD(g),x=f===o?m.isActive:null;!1===x&&(h=t);let v=g===a[f]&&g!==s[f]&&y;if(v&&i&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...c},!m.isActive&&null===x||!g&&!m.prevProp||tM(g)||"boolean"==typeof g)continue;let b=(d=m.prevProp,"string"==typeof(p=g)?p!==d:!!Array.isArray(p)&&!iG(p,d)),k=b||f===o&&m.isActive&&!v&&y||t>h&&y,w=!1,S=Array.isArray(g)?g:[g],T=S.reduce(r(f),{});!1===x&&(T={});let{prevResolvedValues:C={}}=m,E={...C,...T},P=t=>{k=!0,u.has(t)&&(w=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in E){let t=T[e],n=C[e];if(!c.hasOwnProperty(e))(nT(t)&&nT(n)?iG(t,n):t===n)?void 0!==t&&u.has(e)?P(e):m.protectedKeys[e]=!0:null!=t?P(e):u.add(e)}m.prevProp=g,m.prevResolvedValues=T,m.isActive&&(c={...c,...T}),i&&e.blockInitialAnimation&&(k=!1);let A=v&&b,j=!A||w;k&&j&&l.push(...S.map(t=>{let n={type:f};if("string"==typeof t&&i&&!A&&e.manuallyAnimateOnMount&&e.parent){let{parent:i}=e,r=nw(i,t);if(i.enteringChildren&&r){let{delayChildren:t}=r.transition||{};n.delay=iq(i.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if("boolean"!=typeof s.initial){let n=nw(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let i=e.getBaseTarget(n),r=e.getValue(n);r&&(r.liveStyle=!0),t[n]=i??null}),l.push({animation:t})}let f=!!l.length;return i&&(!1===s.initial||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(f=!1),i=!1,f?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,i){if(n[t].isActive===i)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,i)),n[t].isActive=i;let r=o(t);for(let e in n)n[e].protectedKeys={};return r},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=iY()}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();tM(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends iQ{constructor(){super(...arguments),this.id=iZ++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let i=this.node.animationState.setActive("exit",!e);t&&!e&&i.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends iQ{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var e;let t;this.unmount();let{viewport:n={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:s}=n,a={root:i?i.current:void 0,rootMargin:r,threshold:"number"==typeof o?o:oM[o]},l=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,s&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),r=t?n:i;r&&r(e)};return e=this.node.current,t=function({root:e,...t}){let n=e||document;oA.has(n)||oA.set(n,{});let i=oA.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(oL,{root:e,...t})),i[r]}(a),oP.set(e,l),t.observe(e),()=>{oP.delete(e),t.unobserve(e)}}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends iQ{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,n={}){let[i,r,o]=og(e,n),s=e=>{let i=e.currentTarget;if(!oC(e))return;ow.add(i);let o=t(i,e),s=(e,t)=>{window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),ow.has(i)&&ow.delete(i),oC(e)&&"function"==typeof o&&o(e,{success:t})},a=e=>{s(e,i===window||i===document||n.useGlobalTarget||ob(i,e.target))},l=e=>{s(e,!1)};window.addEventListener("pointerup",a,r),window.addEventListener("pointercancel",l,r)};return i.forEach(e=>{((n.useGlobalTarget?window:e).addEventListener("pointerdown",s,r),ov(e))&&(e.addEventListener("focus",e=>((e,t)=>{let n=e.currentTarget;if(!n)return;let i=oS(()=>{if(ow.has(n))return;oT(n,"down");let e=oS(()=>{oT(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>oT(n,"cancel"),t)});n.addEventListener("keydown",i,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),t)})(e,r)),ok.has(e.tagName)||-1!==e.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),o}(e,(e,t)=>(oE(this.node,t,"Start"),(e,{success:t})=>oE(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends iQ{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nA(i1(this.node.current,"focus",()=>this.onFocus()),i1(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends iQ{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,n={}){let[i,r,o]=og(e,n),s=e=>{if(!oy(e))return;let{target:n}=e,i=t(n,e);if("function"!=typeof i||!n)return;let o=e=>{oy(e)&&(i(e),n.removeEventListener("pointerleave",o))};n.addEventListener("pointerleave",o,r)};return i.forEach(e=>{e.addEventListener("pointerenter",s,r)}),o}(e,(e,t)=>(ox(this.node,t,"Start"),e=>ox(this.node,e,"End"))))}unmount(){}}},pan:{Feature:class extends iQ{constructor(){super(...arguments),this.removePointerDownListener=eA}onPointerDown(e){this.session=new rr(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rn(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:rg(e),onStart:rg(t),onMove:n,onEnd:(e,t)=>{delete this.session,i&&eD.postRender(()=>i(e,t))}}}mount(){this.removePointerDownListener=i3(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends iQ{constructor(e){super(e),this.removeGroupControls=eA,this.removeListeners=eA,this.controls=new rf(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||eA}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:of,MeasureLayout:rk},layout:{ProjectionNode:of,MeasureLayout:rk}},(e,t)=>t8(e)?new t6(t):new tQ(t,{allowProjection:e!==p.Fragment}));function oN(e,t){let n,i=()=>{let{currentTime:i}=t,r=(null===i?0:i.value)/100;n!==r&&e(r),n=r};return eD.preUpdate(i,!0),()=>eN(i)}let oR=new WeakMap,oI=(e,t,n)=>(i,r)=>r&&r[0]?r[0][e+"Size"]:rS(i)&&"getBBox"in i?i.getBBox()[t]:i[n],oO=oI("inline","width","offsetWidth"),oF=oI("block","height","offsetHeight");function oB({target:e,borderBoxSize:t}){oR.get(e)?.forEach(n=>{n(e,{get width(){return oO(e,t)},get height(){return oF(e,t)}})})}function oV(e){e.forEach(oB)}let oU=new Set,oz=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),oH={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function o_(e,t,n,i){let r=n[t],{length:o,position:s}=oH[t],a=r.current,l=n.time;r.current=e[`scroll${s}`],r.scrollLength=e[`scroll${o}`]-e[`client${o}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=id(0,r.scrollLength,r.current);let u=i-l;r.velocity=u>50?0:tm(r.current-a,u)}let oq={start:0,center:.5,end:1};function oW(e,t,n=0){let i=0;if(e in oq&&(e=oq[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?i=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?i=t/100*document.documentElement.clientWidth:e.endsWith("vh")?i=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(i=t*e),n+i}let oG=[0,0],o$=[[0,0],[1,1]],oK={x:0,y:0},oJ=new WeakMap,oX=new WeakMap,oY=new WeakMap,oQ=e=>e===document.scrollingElement?window:e;function oZ(e,{container:t=document.scrollingElement,...r}={}){if(!t)return eA;let o=oY.get(t);o||(o=new Set,oY.set(t,o));let s=function(e,t,n,i={}){return{measure:t=>{!function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,i.target,n),o_(e,"x",n,t),o_(e,"y",n,t),n.time=t,(i.offset||i.target)&&function(e,t,n){let{offset:i=o$}=n,{target:r=e,axis:o="y"}=n,s="y"===o?"height":"width",a=r!==e?function(e,t){let n={x:0,y:0},i=e;for(;i&&i!==t;)if(ov(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if("svg"===i.tagName){let e=i.getBoundingClientRect(),t=(i=i.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(i instanceof SVGGraphicsElement){let{x:e,y:t}=i.getBBox();n.x+=e,n.y+=t;let r=null,o=i.parentNode;for(;!r;)"svg"===o.tagName&&(r=o),o=i.parentNode;i=r}else break;return n}(r,e):oK,l=r===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in r&&"svg"!==r.tagName?r.getBBox():{width:r.clientWidth,height:r.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate,h=i.length;for(let e=0;e<h;e++){let n=function(e,t,n,i){let r=Array.isArray(e)?e:oG,o=0;return"number"==typeof e?r=[e,e]:"string"==typeof e&&(r=(e=e.trim()).includes(" ")?e.split(" "):[e,oq[e]?e:"0"]),(o=oW(r[0],n,i))-oW(r[1],t)}(i[e],u[s],l[s],a[o]);c||n===t[o].interpolatorOffsets[e]||(c=!0),t[o].offset[e]=n}c&&(t[o].interpolate=ip(t[o].offset,im(i),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=ea(0,1,t[o].interpolate(t[o].current))}(e,n,i)},notify:()=>t(n)}}(t,e,{time:0,x:oz(),y:oz()},r);if(o.add(s),!oJ.has(t)){let e,r=()=>{for(let e of o)e.measure(eR.timestamp);eD.preUpdate(s)},s=()=>{for(let e of o)e.notify()},a=()=>eD.read(r);oJ.set(t,a);let l=oQ(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&oX.set(t,"function"==typeof t?(oU.add(t),i||(i=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};oU.forEach(t=>t(e))},window.addEventListener("resize",i)),()=>{oU.delete(t),oU.size||"function"!=typeof i||(window.removeEventListener("resize",i),i=void 0)}):(n||"undefined"!=typeof ResizeObserver&&(n=new ResizeObserver(oV)),(e=om(t)).forEach(e=>{let t=oR.get(e);t||(t=new Set,oR.set(e,t)),t.add(a),n?.observe(e)}),()=>{e.forEach(e=>{let t=oR.get(e);t?.delete(a),t?.size||n?.unobserve(e)})})),l.addEventListener("scroll",a,{passive:!0}),a()}let a=oJ.get(t);return eD.read(a,!1,!0),()=>{eN(a);let e=oY.get(t);if(!e||(e.delete(s),e.size))return;let n=oJ.get(t);oJ.delete(t),n&&(oQ(t).removeEventListener("scroll",n),oX.get(t)?.(),window.removeEventListener("resize",n))}}let o0=new Map;function o1({source:e,container:t,...n}){var i;let r,o,{axis:s}=n;e&&(t=e);let a=o0.get(t)??new Map;o0.set(t,a);let l=n.target??"self",u=a.get(l)??{},c=s+(n.offset??[]).join(",");return u[c]||(u[c]=!n.target&&iC()?new ScrollTimeline({source:t,axis:s}):(i={container:t,...n},r={value:0},o=oZ(e=>{r.value=100*e[i.axis].progress},i),{currentTime:r,cancel:o})),u[c]}let o2=()=>({scrollX:tx(0),scrollY:tx(0),scrollXProgress:tx(0),scrollYProgress:tx(0)}),o4=e=>!!e&&!e.current;function o3(e,t){let n=function(e){let t=nh(()=>tx(e)),{isStatic:n}=(0,p.useContext)(nt);if(n){let[,n]=(0,p.useState)(e);(0,p.useEffect)(()=>t.on("change",n),[])}return t}(t()),i=()=>n.set(t());return i(),nb(()=>{let t=()=>eD.preRender(i,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),eN(i)}}),n}function o5(e,t){let n=nh(()=>[]);return o3(e,()=>{n.length=0;let i=e.length;for(let t=0;t<i;t++)n[t]=e[t].get();return t(n)})}var o6=e.i(22016);function o9(){}function o8(){}let o7=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,se=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,st={};function sn(e,t){return((t||st).jsx?se:o7).test(e)}let si=/[ \t\n\f\r]/g;function sr(e){return""===e.replace(si,"")}class so{constructor(e,t){this.attribute=t,this.property=e}}so.prototype.attribute="",so.prototype.booleanish=!1,so.prototype.boolean=!1,so.prototype.commaOrSpaceSeparated=!1,so.prototype.commaSeparated=!1,so.prototype.defined=!1,so.prototype.mustUseProperty=!1,so.prototype.number=!1,so.prototype.overloadedBoolean=!1,so.prototype.property="",so.prototype.spaceSeparated=!1,so.prototype.space=void 0;let ss=0,sa=sf(),sl=sf(),su=sf(),sc=sf(),sh=sf(),sd=sf(),sp=sf();function sf(){return 2**++ss}e.s(["boolean",0,sa,"booleanish",0,sl,"commaOrSpaceSeparated",0,sp,"commaSeparated",0,sd,"number",0,sc,"overloadedBoolean",0,su,"spaceSeparated",0,sh],744);var sm=e.i(744);let sg=Object.keys(sm);class sy extends so{constructor(e,t,n,i){let r=-1;if(super(e,t),function(e,t,n){n&&(e[t]=n)}(this,"space",i),"number"==typeof n)for(;++r<sg.length;){const e=sg[r];!function(e,t,n){n&&(e[t]=n)}(this,sg[r],(n&sm[e])===sm[e])}}}function sx(e){return e.toLowerCase()}sy.prototype.defined=!0;let sv=/[A-Z]/g,sb=/-[a-z]/g,sk=/^data[-\w.:]+$/i;function sw(e){return"-"+e.toLowerCase()}function sS(e){return e.charAt(1).toUpperCase()}let sT={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};class sC{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}}function sE(e,t){let n={},i={};for(let t of e)Object.assign(n,t.property),Object.assign(i,t.normal);return new sC(n,i,t)}function sP(e){let t={},n={};for(let[i,r]of Object.entries(e.properties)){let o=new sy(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,n[sx(i)]=i,n[sx(o.attribute)]=i}return new sC(t,n,e.space)}sC.prototype.normal={},sC.prototype.property={},sC.prototype.space=void 0;let sA=sP({properties:{ariaActiveDescendant:null,ariaAtomic:sl,ariaAutoComplete:null,ariaBusy:sl,ariaChecked:sl,ariaColCount:sc,ariaColIndex:sc,ariaColSpan:sc,ariaControls:sh,ariaCurrent:null,ariaDescribedBy:sh,ariaDetails:null,ariaDisabled:sl,ariaDropEffect:sh,ariaErrorMessage:null,ariaExpanded:sl,ariaFlowTo:sh,ariaGrabbed:sl,ariaHasPopup:null,ariaHidden:sl,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:sh,ariaLevel:sc,ariaLive:null,ariaModal:sl,ariaMultiLine:sl,ariaMultiSelectable:sl,ariaOrientation:null,ariaOwns:sh,ariaPlaceholder:null,ariaPosInSet:sc,ariaPressed:sl,ariaReadOnly:sl,ariaRelevant:null,ariaRequired:sl,ariaRoleDescription:sh,ariaRowCount:sc,ariaRowIndex:sc,ariaRowSpan:sc,ariaSelected:sl,ariaSetSize:sc,ariaSort:null,ariaValueMax:sc,ariaValueMin:sc,ariaValueNow:sc,ariaValueText:null,role:null},transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase()});function sj(e,t){return t in e?e[t]:t}function sL(e,t){return sj(e,t.toLowerCase())}let sM=sP({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:sd,acceptCharset:sh,accessKey:sh,action:null,allow:null,allowFullScreen:sa,allowPaymentRequest:sa,allowUserMedia:sa,alt:null,as:null,async:sa,autoCapitalize:null,autoComplete:sh,autoFocus:sa,autoPlay:sa,blocking:sh,capture:null,charSet:null,checked:sa,cite:null,className:sh,cols:sc,colSpan:null,content:null,contentEditable:sl,controls:sa,controlsList:sh,coords:sc|sd,crossOrigin:null,data:null,dateTime:null,decoding:null,default:sa,defer:sa,dir:null,dirName:null,disabled:sa,download:su,draggable:sl,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:sa,formTarget:null,headers:sh,height:sc,hidden:su,high:sc,href:null,hrefLang:null,htmlFor:sh,httpEquiv:sh,id:null,imageSizes:null,imageSrcSet:null,inert:sa,inputMode:null,integrity:null,is:null,isMap:sa,itemId:null,itemProp:sh,itemRef:sh,itemScope:sa,itemType:sh,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:sa,low:sc,manifest:null,max:null,maxLength:sc,media:null,method:null,min:null,minLength:sc,multiple:sa,muted:sa,name:null,nonce:null,noModule:sa,noValidate:sa,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:sa,optimum:sc,pattern:null,ping:sh,placeholder:null,playsInline:sa,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:sa,referrerPolicy:null,rel:sh,required:sa,reversed:sa,rows:sc,rowSpan:sc,sandbox:sh,scope:null,scoped:sa,seamless:sa,selected:sa,shadowRootClonable:sa,shadowRootDelegatesFocus:sa,shadowRootMode:null,shape:null,size:sc,sizes:null,slot:null,span:sc,spellCheck:sl,src:null,srcDoc:null,srcLang:null,srcSet:null,start:sc,step:null,style:null,tabIndex:sc,target:null,title:null,translate:null,type:null,typeMustMatch:sa,useMap:null,value:sl,width:sc,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:sh,axis:null,background:null,bgColor:null,border:sc,borderColor:null,bottomMargin:sc,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:sa,declare:sa,event:null,face:null,frame:null,frameBorder:null,hSpace:sc,leftMargin:sc,link:null,longDesc:null,lowSrc:null,marginHeight:sc,marginWidth:sc,noResize:sa,noHref:sa,noShade:sa,noWrap:sa,object:null,profile:null,prompt:null,rev:null,rightMargin:sc,rules:null,scheme:null,scrolling:sl,standby:null,summary:null,text:null,topMargin:sc,valueType:null,version:null,vAlign:null,vLink:null,vSpace:sc,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:sa,disableRemotePlayback:sa,prefix:null,property:null,results:sc,security:null,unselectable:null},space:"html",transform:sL}),sD=sP({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:sp,accentHeight:sc,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:sc,amplitude:sc,arabicForm:null,ascent:sc,attributeName:null,attributeType:null,azimuth:sc,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:sc,by:null,calcMode:null,capHeight:sc,className:sh,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:sc,diffuseConstant:sc,direction:null,display:null,dur:null,divisor:sc,dominantBaseline:null,download:sa,dx:null,dy:null,edgeMode:null,editable:null,elevation:sc,enableBackground:null,end:null,event:null,exponent:sc,externalResourcesRequired:null,fill:null,fillOpacity:sc,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:sd,g2:sd,glyphName:sd,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:sc,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:sc,horizOriginX:sc,horizOriginY:sc,id:null,ideographic:sc,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:sc,k:sc,k1:sc,k2:sc,k3:sc,k4:sc,kernelMatrix:sp,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:sc,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:sc,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:sc,overlineThickness:sc,paintOrder:null,panose1:null,path:null,pathLength:sc,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:sh,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:sc,pointsAtY:sc,pointsAtZ:sc,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:sp,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:sp,rev:sp,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:sp,requiredFeatures:sp,requiredFonts:sp,requiredFormats:sp,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:sc,specularExponent:sc,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:sc,strikethroughThickness:sc,string:null,stroke:null,strokeDashArray:sp,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:sc,strokeOpacity:sc,strokeWidth:null,style:null,surfaceScale:sc,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:sp,tabIndex:sc,tableValues:null,target:null,targetX:sc,targetY:sc,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:sp,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:sc,underlineThickness:sc,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:sc,values:null,vAlphabetic:sc,vMathematical:sc,vectorEffect:null,vHanging:sc,vIdeographic:sc,version:null,vertAdvY:sc,vertOriginX:sc,vertOriginY:sc,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:sc,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:sj}),sN=sP({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase()}),sR=sP({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:sL}),sI=sP({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase()}),sO=sE([sA,sM,sN,sR,sI],"html"),sF=sE([sA,sD,sN,sR,sI],"svg");var sB=e.i(15511);let sV=sz("end"),sU=sz("start");function sz(e){return function(t){let n=t&&t.position&&t.position[e]||{};if("number"==typeof n.line&&n.line>0&&"number"==typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"==typeof n.offset&&n.offset>-1?n.offset:void 0}}}function sH(e){return e&&"object"==typeof e?"position"in e||"type"in e?sq(e.position):"start"in e||"end"in e?sq(e):"line"in e||"column"in e?s_(e):"":""}function s_(e){return sW(e&&e.line)+":"+sW(e&&e.column)}function sq(e){return s_(e&&e.start)+"-"+s_(e&&e.end)}function sW(e){return e&&"number"==typeof e?e:1}class sG extends Error{constructor(e,t,n){super(),"string"==typeof t&&(n=t,t=void 0);let i="",r={},o=!1;if(t&&(r="line"in t&&"column"in t||"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"==typeof e?i=e:!r.cause&&e&&(o=!0,i=e.message,r.cause=e),!r.ruleId&&!r.source&&"string"==typeof n){const e=n.indexOf(":");-1===e?r.ruleId=n:(r.source=n.slice(0,e),r.ruleId=n.slice(e+1))}if(!r.place&&r.ancestors&&r.ancestors){const e=r.ancestors[r.ancestors.length-1];e&&(r.place=e.position)}const s=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=sH(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=o&&r.cause&&"string"==typeof r.cause.stack?r.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}sG.prototype.file="",sG.prototype.name="",sG.prototype.reason="",sG.prototype.message="",sG.prototype.stack="",sG.prototype.column=void 0,sG.prototype.line=void 0,sG.prototype.ancestors=void 0,sG.prototype.cause=void 0,sG.prototype.fatal=void 0,sG.prototype.place=void 0,sG.prototype.ruleId=void 0,sG.prototype.source=void 0;let s$={}.hasOwnProperty,sK=new Map,sJ=/[A-Z]/g,sX=new Set(["table","tbody","thead","tfoot","tr"]),sY=new Set(["td","th"]),sQ="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function sZ(e,t,n){var i,r,o,s,a,l,u,c,h;let d,p,f,m,g,y,x,v,b,k,w;return"element"===t.type?(i=e,r=t,o=n,p=d=i.schema,"svg"===r.tagName.toLowerCase()&&"html"===d.space&&(i.schema=sF),i.ancestors.push(r),f=s4(i,r.tagName,!1),m=function(e,t){let n,i,r={};for(i in t.properties)if("children"!==i&&s$.call(t.properties,i)){let o=function(e,t,n){let i=function(e,t){let n=sx(t),i=t,r=so;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&sk.test(t)){if("-"===t.charAt(4)){let e=t.slice(5).replace(sb,sS);i="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!sb.test(e)){let n=e.replace(sv,sw);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}r=sy}return new r(i,t)}(e.schema,t);if(!(null==n||"number"==typeof n&&Number.isNaN(n))){var r;let t;if(Array.isArray(n)&&(n=i.commaSeparated?(t={},(""===(r=n)[r.length-1]?[...r,""]:r).join((t.padRight?" ":"")+","+(!1===t.padLeft?"":" ")).trim()):n.join(" ").trim()),"style"===i.property){let t="object"==typeof n?n:function(e,t){try{return(0,sB.default)(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};let t=new sG("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=sQ+"#cannot-parse-style-attribute",t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){let t,n={};for(t in e)s$.call(e,t)&&(n[function(e){let t=e.replace(sJ,s5);return"ms-"===t.slice(0,3)&&(t="-"+t),t}(t)]=e[t]);return n}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&i.space?sT[i.property]||i.property:i.attribute,n]}}(e,i,t.properties[i]);if(o){let[i,s]=o;e.tableCellAlignToStyle&&"align"===i&&"string"==typeof s&&sY.has(t.tagName)?n=s:r[i]=s}}return n&&((r.style||(r.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=n),r}(i,r),g=s2(i,r),sX.has(r.tagName)&&(g=g.filter(function(e){return"string"!=typeof e||!("object"==typeof e?"text"===e.type&&sr(e.value):sr(e))})),s0(i,m,f,r),s1(m,g),i.ancestors.pop(),i.schema=d,i.create(r,f,m,o)):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return o9("ExpressionStatement"===n.type),e.evaluater.evaluateExpression(n.expression)}s3(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?(s=e,a=t,l=n,x=y=s.schema,"svg"===a.name&&"html"===y.space&&(s.schema=sF),s.ancestors.push(a),v=null===a.name?s.Fragment:s4(s,a.name,!0),b=function(e,t){let n={};for(let i of t.attributes)if("mdxJsxExpressionAttribute"===i.type)if(i.data&&i.data.estree&&e.evaluater){let t=i.data.estree.body[0];o9("ExpressionStatement"===t.type);let r=t.expression;o9("ObjectExpression"===r.type);let o=r.properties[0];o9("SpreadElement"===o.type),Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else s3(e,t.position);else{let r,o=i.name;if(i.value&&"object"==typeof i.value)if(i.value.data&&i.value.data.estree&&e.evaluater){let t=i.value.data.estree.body[0];o9("ExpressionStatement"===t.type),r=e.evaluater.evaluateExpression(t.expression)}else s3(e,t.position);else r=null===i.value||i.value;n[o]=r}return n}(s,a),k=s2(s,a),s0(s,b,v,a),s1(b,k),s.ancestors.pop(),s.schema=y,s.create(a,v,b,l)):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);s3(e,t.position)}(e,t):"root"===t.type?(u=e,c=t,h=n,s1(w={},s2(u,c)),u.create(c,u.Fragment,w,h)):"text"===t.type?t.value:void 0}function s0(e,t,n,i){"string"!=typeof n&&n!==e.Fragment&&e.passNode&&(t.node=i)}function s1(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function s2(e,t){let n=[],i=-1,r=e.passKeys?new Map:sK;for(;++i<t.children.length;){let o,s=t.children[i];if(e.passKeys){let e="element"===s.type?s.tagName:"mdxJsxFlowElement"===s.type||"mdxJsxTextElement"===s.type?s.name:void 0;if(e){let t=r.get(e)||0;o=e+"-"+t,r.set(e,t+1)}}let a=sZ(e,s,o);void 0!==a&&n.push(a)}return n}function s4(e,t,n){let i;if(n)if(t.includes(".")){let e,n=t.split("."),r=-1;for(;++r<n.length;){let t=sn(n[r])?{type:"Identifier",name:n[r]}:{type:"Literal",value:n[r]};e=e?{type:"MemberExpression",object:e,property:t,computed:!!(r&&"Literal"===t.type),optional:!1}:t}o9(e,"always a result"),i=e}else i=sn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else i={type:"Literal",value:t};if("Literal"===i.type){let t=i.value;return s$.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(i);s3(e)}function s3(e,t){let n=new sG("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=sQ+"#cannot-handle-mdx-estrees-without-createevaluater",n}function s5(e){return"-"+e.toLowerCase()}let s6={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},s9={};function s8(e,t,n){var i;if((i=e)&&"object"==typeof i){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return s7(e.children,t,n)}return Array.isArray(e)?s7(e,t,n):""}function s7(e,t,n){let i=[],r=-1;for(;++r<e.length;)i[r]=s8(e[r],t,n);return i.join("")}function ae(e,t,n,i){let r,o=e.length,s=0;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,i.length<1e4)(r=Array.from(i)).unshift(t,n),e.splice(...r);else for(n&&e.splice(t,n);s<i.length;)(r=i.slice(s,s+1e4)).unshift(t,0),e.splice(...r),s+=1e4,t+=1e4}function at(e,t){return e.length>0?(ae(e,e.length,0,t),e):t}let an={}.hasOwnProperty,ai=am(/[A-Za-z]/),ar=am(/[\dA-Za-z]/),ao=am(/[#-'*+\--9=?A-Z^-~]/);function as(e){return null!==e&&(e<32||127===e)}let aa=am(/\d/),al=am(/[\dA-Fa-f]/),au=am(/[!-/:-@[-`{-~]/);function ac(e){return null!==e&&e<-2}function ah(e){return null!==e&&(e<0||32===e)}function ad(e){return -2===e||-1===e||32===e}let ap=am(/\p{P}|\p{S}/u),af=am(/\s/);function am(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function ag(e,t,n,i){let r=i?i-1:1/0,o=0;return function(i){return ad(i)?(e.enter(n),function i(s){return ad(s)&&o++<r?(e.consume(s),i):(e.exit(n),t(s))}(i)):t(i)}}let ay={tokenize:function(e){let t,n=e.attempt(this.parser.constructs.contentInitial,function(t){return null===t?void e.consume(t):(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),ag(e,n,"linePrefix"))},function(n){return e.enter("paragraph"),function n(i){let r=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=r),t=r,function t(i){if(null===i){e.exit("chunkText"),e.exit("paragraph"),e.consume(i);return}return ac(i)?(e.consume(i),e.exit("chunkText"),n):(e.consume(i),t)}(i)}(n)});return n}},ax={tokenize:function(e){let t,n,i,r=this,o=[],s=0;return a;function a(t){if(s<o.length){let n=o[s];return r.containerState=n[1],e.attempt(n[0].continuation,l,u)(t)}return u(t)}function l(e){if(s++,r.containerState._closeFlow){let n;r.containerState._closeFlow=void 0,t&&y();let i=r.events.length,o=i;for(;o--;)if("exit"===r.events[o][0]&&"chunkFlow"===r.events[o][1].type){n=r.events[o][1].end;break}g(s);let a=i;for(;a<r.events.length;)r.events[a][1].end={...n},a++;return ae(r.events,o+1,0,r.events.slice(i)),r.events.length=a,u(e)}return a(e)}function u(n){if(s===o.length){if(!t)return d(n);if(t.currentConstruct&&t.currentConstruct.concrete)return f(n);r.interrupt=!!(t.currentConstruct&&!t._gfmTableDynamicInterruptHack)}return r.containerState={},e.check(av,c,h)(n)}function c(e){return t&&y(),g(s),d(e)}function h(e){return r.parser.lazy[r.now().line]=s!==o.length,i=r.now().offset,f(e)}function d(t){return r.containerState={},e.attempt(av,p,f)(t)}function p(e){return s++,o.push([r.currentConstruct,r.containerState]),d(e)}function f(i){if(null===i){t&&y(),g(0),e.consume(i);return}return t=t||r.parser.flow(r.now()),e.enter("chunkFlow",{_tokenizer:t,contentType:"flow",previous:n}),function t(n){if(null===n){m(e.exit("chunkFlow"),!0),g(0),e.consume(n);return}return ac(n)?(e.consume(n),m(e.exit("chunkFlow")),s=0,r.interrupt=void 0,a):(e.consume(n),t)}(i)}function m(e,o){let a=r.sliceStream(e);if(o&&a.push(null),e.previous=n,n&&(n.next=e),n=e,t.defineSkip(e.start),t.write(a),r.parser.lazy[e.start.line]){let e,n,o=t.events.length;for(;o--;)if(t.events[o][1].start.offset<i&&(!t.events[o][1].end||t.events[o][1].end.offset>i))return;let a=r.events.length,l=a;for(;l--;)if("exit"===r.events[l][0]&&"chunkFlow"===r.events[l][1].type){if(e){n=r.events[l][1].end;break}e=!0}for(g(s),o=a;o<r.events.length;)r.events[o][1].end={...n},o++;ae(r.events,l+1,0,r.events.slice(a)),r.events.length=o}}function g(t){let n=o.length;for(;n-- >t;){let t=o[n];r.containerState=t[1],t[0].exit.call(r,e)}o.length=t}function y(){t.write([null]),n=void 0,t=void 0,r.containerState._closeFlow=void 0}}},av={tokenize:function(e,t,n){return ag(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}},ab={partial:!0,tokenize:function(e,t,n){return function(t){return ad(t)?ag(e,i,"linePrefix")(t):i(t)};function i(e){return null===e||ac(e)?t(e):n(e)}}};class ak{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=null==t?1/0:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-(t||0),1/0);return n&&aw(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),aw(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),aw(this.right,e.reverse())}setCursor(e){if(e!==this.left.length&&(!(e>this.left.length)||0!==this.right.length)&&(!(e<0)||0!==this.left.length))if(e<this.left.length){let t=this.left.splice(e,1/0);aw(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);aw(this.left,t.reverse())}}}function aw(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function aS(e){let t,n,i,r,o,s,a,l={},u=-1,c=new ak(e);for(;++u<c.length;){for(;u in l;)u=l[u];if(t=c.get(u),u&&"chunkFlow"===t[1].type&&"listItemPrefix"===c.get(u-1)[1].type&&((i=0)<(s=t[1]._tokenizer.events).length&&"lineEndingBlank"===s[i][1].type&&(i+=2),i<s.length&&"content"===s[i][1].type))for(;++i<s.length&&"content"!==s[i][1].type;)"chunkText"===s[i][1].type&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if("enter"===t[0])t[1].contentType&&(Object.assign(l,function(e,t){let n,i,r=e.get(t)[1],o=e.get(t)[2],s=t-1,a=[],l=r._tokenizer;!l&&(l=o.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));let u=l.events,c=[],h={},d=-1,p=r,f=0,m=0,g=[0];for(;p;){for(;e.get(++s)[1]!==p;);a.push(s),!p._tokenizer&&(n=o.sliceStream(p),p.next||n.push(null),i&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(n),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),i=p,p=p.next}for(p=r;++d<u.length;)"exit"===u[d][0]&&"enter"===u[d-1][0]&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(m=d+1,g.push(m),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),d=g.length;d--;){let t=u.slice(g[d],g[d+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),d=-1;++d<c.length;)h[f+c[d][0]]=f+c[d][1],f+=c[d][1]-c[d][0]-1;return h}(c,u)),u=l[u],a=!0);else if(t[1]._container){for(i=u,n=void 0;i--;)if("lineEnding"===(r=c.get(i))[1].type||"lineEndingBlank"===r[1].type)"enter"===r[0]&&(n&&(c.get(n)[1].type="lineEndingBlank"),r[1].type="lineEnding",n=i);else if("linePrefix"===r[1].type||"listItemIndent"===r[1].type);else break;n&&(t[1].end={...c.get(n)[1].start},(o=c.slice(n,u)).unshift(t),c.splice(n,u-n+1,o))}}return ae(e,0,1/0,c.slice(0)),!a}let aT={resolve:function(e){return aS(e),e},tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(t)};function i(t){return null===t?r(t):ac(t)?e.check(aC,o,r)(t):(e.consume(t),i)}function r(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function o(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}},aC={partial:!0,tokenize:function(e,t,n){let i=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),ag(e,r,"linePrefix")};function r(r){if(null===r||ac(r))return n(r);let o=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(r):e.interrupt(i.parser.constructs.flow,n,t)(r)}}},aE={tokenize:function(e){let t=this,n=e.attempt(ab,function(i){return null===i?void e.consume(i):(e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n)},e.attempt(this.parser.constructs.flowInitial,i,ag(e,e.attempt(this.parser.constructs.flow,i,e.attempt(aT,i)),"linePrefix")));return n;function i(i){return null===i?void e.consume(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n)}}},aP={resolveAll:aM()},aA=aL("string"),aj=aL("text");function aL(e){return{resolveAll:aM("text"===e?aD:void 0),tokenize:function(t){let n=this,i=this.parser.constructs[e],r=t.attempt(i,o,s);return o;function o(e){return l(e)?r(e):s(e)}function s(e){return null===e?void t.consume(e):(t.enter("data"),t.consume(e),a)}function a(e){return l(e)?(t.exit("data"),r(e)):(t.consume(e),a)}function l(e){if(null===e)return!0;let t=i[e],r=-1;if(t)for(;++r<t.length;){let e=t[r];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}}function aM(e){return function(t,n){let i,r=-1;for(;++r<=t.length;)void 0===i?t[r]&&"data"===t[r][1].type&&(i=r,r++):t[r]&&"data"===t[r][1].type||(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function aD(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){let i,r=e[n-1][1],o=t.sliceStream(r),s=o.length,a=-1,l=0;for(;s--;){let e=o[s];if("string"==typeof e){for(a=e.length;32===e.charCodeAt(a-1);)l++,a--;if(a)break;a=-1}else if(-2===e)i=!0,l++;else if(-1===e);else{s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){let o={type:n===e.length||i||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...o.start},r.start.offset===r.end.offset?Object.assign(r,o):(e.splice(n,0,["enter",o,t],["exit",o,t]),n+=2)}n++}return e}function aN(e){return null===e||ah(e)||af(e)?1:ap(e)?2:void 0}function aR(e,t,n){let i=[],r=-1;for(;++r<e.length;){let o=e[r].resolveAll;o&&!i.includes(o)&&(t=o(t,n),i.push(o))}return t}let aI={name:"attention",resolveAll:function(e,t){let n,i,r,o,s,a,l,u,c=-1;for(;++c<e.length;)if("enter"===e[c][0]&&"attentionSequence"===e[c][1].type&&e[c][1]._close){for(n=c;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[c][1]).charCodeAt(0)){if((e[n][1]._close||e[c][1]._open)&&(e[c][1].end.offset-e[c][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[c][1].end.offset-e[c][1].start.offset)%3))continue;a=e[n][1].end.offset-e[n][1].start.offset>1&&e[c][1].end.offset-e[c][1].start.offset>1?2:1;let h={...e[n][1].end},d={...e[c][1].start};aO(h,-a),aO(d,a),o={type:a>1?"strongSequence":"emphasisSequence",start:h,end:{...e[n][1].end}},s={type:a>1?"strongSequence":"emphasisSequence",start:{...e[c][1].start},end:d},r={type:a>1?"strongText":"emphasisText",start:{...e[n][1].end},end:{...e[c][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...s.end}},e[n][1].end={...o.start},e[c][1].start={...s.end},l=[],e[n][1].end.offset-e[n][1].start.offset&&(l=at(l,[["enter",e[n][1],t],["exit",e[n][1],t]])),l=at(l,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",r,t]]),l=at(l,aR(t.parser.constructs.insideSpan.null,e.slice(n+1,c),t)),l=at(l,[["exit",r,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[c][1].end.offset-e[c][1].start.offset?(u=2,l=at(l,[["enter",e[c][1],t],["exit",e[c][1],t]])):u=0,ae(e,n-1,c-n+3,l),c=n+l.length-u-2;break}}for(c=-1;++c<e.length;)"attentionSequence"===e[c][1].type&&(e[c][1].type="data");return e},tokenize:function(e,t){let n,i=this.parser.constructs.attentionMarkers.null,r=this.previous,o=aN(r);return function(s){return n=s,e.enter("attentionSequence"),function s(a){if(a===n)return e.consume(a),s;let l=e.exit("attentionSequence"),u=aN(a),c=!u||2===u&&o||i.includes(a),h=!o||2===o&&u||i.includes(r);return l._open=!!(42===n?c:c&&(o||!h)),l._close=!!(42===n?h:h&&(u||!c)),t(a)}(s)}}};function aO(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}let aF={continuation:{tokenize:function(e,t,n){let i=this;return function(t){return ad(t)?ag(e,r,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):r(t)};function r(i){return e.attempt(aF,t,n)(i)}}},exit:function(e){e.exit("blockQuote")},name:"blockQuote",tokenize:function(e,t,n){let i=this;return function(t){if(62===t){let n=i.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),r}return n(t)};function r(n){return ad(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}}},aB={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),i};function i(i){return au(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}},aV=document.createElement("i");function aU(e){let t="&"+e+";";aV.innerHTML=t;let n=aV.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&n!==t&&n}let az={name:"characterReference",tokenize:function(e,t,n){let i,r,o=this,s=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),a};function a(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),i=31,r=ar,u(t))}function l(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,r=al,u):(e.enter("characterReferenceValue"),i=7,r=aa,u(t))}function u(a){if(59===a&&s){let i=e.exit("characterReferenceValue");return r!==ar||aU(o.sliceSerialize(i))?(e.enter("characterReferenceMarker"),e.consume(a),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(a)}return r(a)&&s++<i?(e.consume(a),u):n(a)}}},aH={partial:!0,tokenize:function(e,t,n){let i=this;return function(t){return null===t?n(t):(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r)};function r(e){return i.parser.lazy[i.now().line]?n(e):t(e)}}},a_={concrete:!0,name:"codeFenced",tokenize:function(e,t,n){let i,r=this,o={partial:!0,tokenize:function(e,t,n){let o=0;return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s};function s(t){return e.enter("codeFencedFence"),ad(t)?ag(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):l(t)}function l(t){return t===i?(e.enter("codeFencedFenceSequence"),function t(r){return r===i?(o++,e.consume(r),t):o>=a?(e.exit("codeFencedFenceSequence"),ad(r)?ag(e,u,"whitespace")(r):u(r)):n(r)}(t)):n(t)}function u(i){return null===i||ac(i)?(e.exit("codeFencedFence"),t(i)):n(i)}}},s=0,a=0;return function(t){var o;let u;return o=t,s=(u=r.events[r.events.length-1])&&"linePrefix"===u[1].type?u[2].sliceSerialize(u[1],!0).length:0,i=o,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),function t(r){return r===i?(a++,e.consume(r),t):a<3?n(r):(e.exit("codeFencedFenceSequence"),ad(r)?ag(e,l,"whitespace")(r):l(r))}(o)};function l(o){return null===o||ac(o)?(e.exit("codeFencedFence"),r.interrupt?t(o):e.check(aH,c,f)(o)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),function t(r){return null===r||ac(r)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),l(r)):ad(r)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ag(e,u,"whitespace")(r)):96===r&&r===i?n(r):(e.consume(r),t)}(o))}function u(t){return null===t||ac(t)?l(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),function t(r){return null===r||ac(r)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),l(r)):96===r&&r===i?n(r):(e.consume(r),t)}(t))}function c(t){return e.attempt(o,f,h)(t)}function h(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),d}function d(t){return s>0&&ad(t)?ag(e,p,"linePrefix",s+1)(t):p(t)}function p(t){return null===t||ac(t)?e.check(aH,c,f)(t):(e.enter("codeFlowValue"),function t(n){return null===n||ac(n)?(e.exit("codeFlowValue"),p(n)):(e.consume(n),t)}(t))}function f(n){return e.exit("codeFenced"),t(n)}}},aq={name:"codeIndented",tokenize:function(e,t,n){let i=this;return function(t){return e.enter("codeIndented"),ag(e,r,"linePrefix",5)(t)};function r(t){let r=i.events[i.events.length-1];return r&&"linePrefix"===r[1].type&&r[2].sliceSerialize(r[1],!0).length>=4?function t(n){return null===n?o(n):ac(n)?e.attempt(aW,t,o)(n):(e.enter("codeFlowValue"),function n(i){return null===i||ac(i)?(e.exit("codeFlowValue"),t(i)):(e.consume(i),n)}(n))}(t):n(t)}function o(n){return e.exit("codeIndented"),t(n)}}},aW={partial:!0,tokenize:function(e,t,n){let i=this;return r;function r(t){return i.parser.lazy[i.now().line]?n(t):ac(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r):ag(e,o,"linePrefix",5)(t)}function o(e){let o=i.events[i.events.length-1];return o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(e):ac(e)?r(e):n(e)}}};function aG(e,t,n,i,r,o,s,a,l){let u=l||1/0,c=0;return function(t){return 60===t?(e.enter(i),e.enter(r),e.enter(o),e.consume(t),e.exit(o),h):null===t||32===t||41===t||as(t)?n(t):(e.enter(i),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),f(t))};function h(n){return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(r),e.exit(i),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),d(n))}function d(t){return 62===t?(e.exit("chunkString"),e.exit(a),h(t)):null===t||60===t||ac(t)?n(t):(e.consume(t),92===t?p:d)}function p(t){return 60===t||62===t||92===t?(e.consume(t),d):d(t)}function f(r){return!c&&(null===r||41===r||ah(r))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(i),t(r)):c<u&&40===r?(e.consume(r),c++,f):41===r?(e.consume(r),c--,f):null===r||32===r||40===r||as(r)?n(r):(e.consume(r),92===r?m:f)}function m(t){return 40===t||41===t||92===t?(e.consume(t),f):f(t)}}function a$(e,t,n,i,r,o){let s,a=this,l=0;return function(t){return e.enter(i),e.enter(r),e.consume(t),e.exit(r),e.enter(o),u};function u(h){return l>999||null===h||91===h||93===h&&!s||94===h&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):93===h?(e.exit(o),e.enter(r),e.consume(h),e.exit(r),e.exit(i),t):ac(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(t){return null===t||91===t||93===t||ac(t)||l++>999?(e.exit("chunkString"),u(t)):(e.consume(t),s||(s=!ad(t)),92===t?h:c)}function h(t){return 91===t||92===t||93===t?(e.consume(t),l++,c):c(t)}}function aK(e,t,n,i,r,o){let s;return function(t){return 34===t||39===t||40===t?(e.enter(i),e.enter(r),e.consume(t),e.exit(r),s=40===t?41:t,a):n(t)};function a(n){return n===s?(e.enter(r),e.consume(n),e.exit(r),e.exit(i),t):(e.enter(o),l(n))}function l(t){return t===s?(e.exit(o),a(s)):null===t?n(t):ac(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),ag(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(t))}function u(t){return t===s||null===t||ac(t)?(e.exit("chunkString"),l(t)):(e.consume(t),92===t?c:u)}function c(t){return t===s||92===t?(e.consume(t),u):u(t)}}function aJ(e,t){let n;return function i(r){return ac(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,i):ad(r)?ag(e,i,n?"linePrefix":"lineSuffix")(r):t(r)}}function aX(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}let aY={partial:!0,tokenize:function(e,t,n){return function(t){return ah(t)?aJ(e,i)(t):n(t)};function i(t){return aK(e,r,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function r(t){return ad(t)?ag(e,o,"whitespace")(t):o(t)}function o(e){return null===e||ac(e)?t(e):n(e)}}},aQ=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],aZ=["pre","script","style","textarea"],a0={partial:!0,tokenize:function(e,t,n){return function(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ab,t,n)}}},a1={partial:!0,tokenize:function(e,t,n){let i=this;return function(t){return ac(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r):n(t)};function r(e){return i.parser.lazy[i.now().line]?n(e):t(e)}}},a2={name:"labelEnd",resolveAll:function(e){let t=-1,n=[];for(;++t<e.length;){let i=e[t][1];if(n.push(e[t]),"labelImage"===i.type||"labelLink"===i.type||"labelEnd"===i.type){let e="labelImage"===i.type?4:2;i.type="data",t+=e}}return e.length!==n.length&&ae(e,0,e.length,n),e},resolveTo:function(e,t){let n,i,r,o,s=e.length,a=0;for(;s--;)if(n=e[s][1],i){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[s][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(r){if("enter"===e[s][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(i=s,"labelLink"!==n.type)){a=2;break}}else"labelEnd"===n.type&&(r=s);let l={type:"labelLink"===e[i][1].type?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[i][1].start},end:{...e[r][1].end}},c={type:"labelText",start:{...e[i+a+2][1].end},end:{...e[r-2][1].start}};return o=at(o=[["enter",l,t],["enter",u,t]],e.slice(i+1,i+a+3)),o=at(o,[["enter",c,t]]),o=at(o,aR(t.parser.constructs.insideSpan.null,e.slice(i+a+4,r-3),t)),o=at(o,[["exit",c,t],e[r-2],e[r-1],["exit",u,t]]),o=at(o,e.slice(r+1)),o=at(o,[["exit",l,t]]),ae(e,i,e.length,o),e},tokenize:function(e,t,n){let i,r,o=this,s=o.events.length;for(;s--;)if(("labelImage"===o.events[s][1].type||"labelLink"===o.events[s][1].type)&&!o.events[s][1]._balanced){i=o.events[s][1];break}return function(t){return i?i._inactive?c(t):(r=o.parser.defined.includes(aX(o.sliceSerialize({start:i.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),a):n(t)};function a(t){return 40===t?e.attempt(a4,u,r?u:c)(t):91===t?e.attempt(a3,u,r?l:c)(t):r?u(t):c(t)}function l(t){return e.attempt(a5,u,c)(t)}function u(e){return t(e)}function c(e){return i._balanced=!0,n(e)}}},a4={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),i};function i(t){return ah(t)?aJ(e,r)(t):r(t)}function r(t){return 41===t?u(t):aG(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function o(t){return ah(t)?aJ(e,a)(t):u(t)}function s(e){return n(e)}function a(t){return 34===t||39===t||40===t?aK(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):u(t)}function l(t){return ah(t)?aJ(e,u)(t):u(t)}function u(i){return 41===i?(e.enter("resourceMarker"),e.consume(i),e.exit("resourceMarker"),e.exit("resource"),t):n(i)}}},a3={tokenize:function(e,t,n){let i=this;return function(t){return a$.call(i,e,r,o,"reference","referenceMarker","referenceString")(t)};function r(e){return i.parser.defined.includes(aX(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}},a5={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),i};function i(i){return 93===i?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}},a6={name:"labelStartImage",resolveAll:a2.resolveAll,tokenize:function(e,t,n){let i=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),r};function r(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),o):n(t)}function o(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?n(e):t(e)}}},a9={name:"labelStartLink",resolveAll:a2.resolveAll,tokenize:function(e,t,n){let i=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),r};function r(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?n(e):t(e)}}},a8={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),ag(e,t,"linePrefix")}}},a7={name:"thematicBreak",tokenize:function(e,t,n){let i,r=0;return function(o){var s;return e.enter("thematicBreak"),i=s=o,function o(s){return s===i?(e.enter("thematicBreakSequence"),function t(n){return n===i?(e.consume(n),r++,t):(e.exit("thematicBreakSequence"),ad(n)?ag(e,o,"whitespace")(n):o(n))}(s)):r>=3&&(null===s||ac(s))?(e.exit("thematicBreak"),t(s)):n(s)}(s)}}},le={continuation:{tokenize:function(e,t,n){let i=this;return i.containerState._closeFlow=void 0,e.check(ab,function(n){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,ag(e,t,"listItemIndent",i.containerState.size+1)(n)},function(n){return i.containerState.furtherBlankLines||!ad(n)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,r(n)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(ln,t,r)(n))});function r(r){return i.containerState._closeFlow=!0,i.interrupt=void 0,ag(e,e.attempt(le,t,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(r)}}},exit:function(e){e.exit(this.containerState.type)},name:"list",tokenize:function(e,t,n){let i=this,r=i.events[i.events.length-1],o=r&&"linePrefix"===r[1].type?r[2].sliceSerialize(r[1],!0).length:0,s=0;return function(t){let r=i.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===r?!i.containerState.marker||t===i.containerState.marker:aa(t)){if(i.containerState.type||(i.containerState.type=r,e.enter(r,{_container:!0})),"listUnordered"===r)return e.enter("listItemPrefix"),42===t||45===t?e.check(a7,n,a)(t):a(t);if(!i.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),function t(r){return aa(r)&&++s<10?(e.consume(r),t):(!i.interrupt||s<2)&&(i.containerState.marker?r===i.containerState.marker:41===r||46===r)?(e.exit("listItemValue"),a(r)):n(r)}(t)}return n(t)};function a(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||t,e.check(ab,i.interrupt?n:l,e.attempt(lt,c,u))}function l(e){return i.containerState.initialBlankLine=!0,o++,c(e)}function u(t){return ad(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),c):n(t)}function c(n){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}}},lt={partial:!0,tokenize:function(e,t,n){let i=this;return ag(e,function(e){let r=i.events[i.events.length-1];return!ad(e)&&r&&"listItemPrefixWhitespace"===r[1].type?t(e):n(e)},"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5)}},ln={partial:!0,tokenize:function(e,t,n){let i=this;return ag(e,function(e){let r=i.events[i.events.length-1];return r&&"listItemIndent"===r[1].type&&r[2].sliceSerialize(r[1],!0).length===i.containerState.size?t(e):n(e)},"listItemIndent",i.containerState.size+1)}},li={name:"setextUnderline",resolveTo:function(e,t){let n,i,r,o=e.length;for(;o--;)if("enter"===e[o][0]){if("content"===e[o][1].type){n=o;break}"paragraph"===e[o][1].type&&(i=o)}else"content"===e[o][1].type&&e.splice(o,1),r||"definition"!==e[o][1].type||(r=o);let s={type:"setextHeading",start:{...e[n][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",r?(e.splice(i,0,["enter",s,t]),e.splice(r+1,0,["exit",e[n][1],t]),e[n][1].end={...e[r][1].end}):e[n][1]=s,e.push(["exit",s,t]),e},tokenize:function(e,t,n){let i,r=this;return function(t){var s;let a,l=r.events.length;for(;l--;)if("lineEnding"!==r.events[l][1].type&&"linePrefix"!==r.events[l][1].type&&"content"!==r.events[l][1].type){a="paragraph"===r.events[l][1].type;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||a)?(e.enter("setextHeadingLine"),i=t,s=t,e.enter("setextHeadingLineSequence"),function t(n){return n===i?(e.consume(n),t):(e.exit("setextHeadingLineSequence"),ad(n)?ag(e,o,"lineSuffix")(n):o(n))}(s)):n(t)};function o(i){return null===i||ac(i)?(e.exit("setextHeadingLine"),t(i)):n(i)}}};e.s(["attentionMarkers",0,{null:[42,95]},"contentInitial",0,{91:{name:"definition",tokenize:function(e,t,n){let i,r=this;return function(t){var i;return e.enter("definition"),i=t,a$.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(i)};function o(t){return(i=aX(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t)?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),s):n(t)}function s(t){return ah(t)?aJ(e,a)(t):a(t)}function a(t){return aG(e,l,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function l(t){return e.attempt(aY,u,u)(t)}function u(t){return ad(t)?ag(e,c,"whitespace")(t):c(t)}function c(o){return null===o||ac(o)?(e.exit("definition"),r.parser.defined.push(i),t(o)):n(o)}}}},"disable",0,{null:[]},"document",0,{42:le,43:le,45:le,48:le,49:le,50:le,51:le,52:le,53:le,54:le,55:le,56:le,57:le,62:aF},"flow",0,{35:{name:"headingAtx",resolve:function(e,t){let n,i,r=e.length-2,o=3;return"whitespace"===e[3][1].type&&(o+=2),r-2>o&&"whitespace"===e[r][1].type&&(r-=2),"atxHeadingSequence"===e[r][1].type&&(o===r-1||r-4>o&&"whitespace"===e[r-2][1].type)&&(r-=o+1===r?2:4),r>o&&(n={type:"atxHeadingText",start:e[o][1].start,end:e[r][1].end},i={type:"chunkText",start:e[o][1].start,end:e[r][1].end,contentType:"text"},ae(e,o,r-o+1,[["enter",n,t],["enter",i,t],["exit",i,t],["exit",n,t]])),e},tokenize:function(e,t,n){let i=0;return function(r){var o;return e.enter("atxHeading"),o=r,e.enter("atxHeadingSequence"),function r(o){return 35===o&&i++<6?(e.consume(o),r):null===o||ah(o)?(e.exit("atxHeadingSequence"),function n(i){return 35===i?(e.enter("atxHeadingSequence"),function t(i){return 35===i?(e.consume(i),t):(e.exit("atxHeadingSequence"),n(i))}(i)):null===i||ac(i)?(e.exit("atxHeading"),t(i)):ad(i)?ag(e,n,"whitespace")(i):(e.enter("atxHeadingText"),function t(i){return null===i||35===i||ah(i)?(e.exit("atxHeadingText"),n(i)):(e.consume(i),t)}(i))}(o)):n(o)}(o)}}},42:a7,45:[li,a7],60:{concrete:!0,name:"htmlFlow",resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););return t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e},tokenize:function(e,t,n){let i,r,o,s,a,l=this;return function(t){var n;return n=t,e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(n),u};function u(s){return 33===s?(e.consume(s),c):47===s?(e.consume(s),r=!0,p):63===s?(e.consume(s),i=3,l.interrupt?t:D):ai(s)?(e.consume(s),o=String.fromCharCode(s),f):n(s)}function c(r){return 45===r?(e.consume(r),i=2,h):91===r?(e.consume(r),i=5,s=0,d):ai(r)?(e.consume(r),i=4,l.interrupt?t:D):n(r)}function h(i){return 45===i?(e.consume(i),l.interrupt?t:D):n(i)}function d(i){let r="CDATA[";return i===r.charCodeAt(s++)?(e.consume(i),s===r.length)?l.interrupt?t:T:d:n(i)}function p(t){return ai(t)?(e.consume(t),o=String.fromCharCode(t),f):n(t)}function f(s){if(null===s||47===s||62===s||ah(s)){let a=47===s,u=o.toLowerCase();return!a&&!r&&aZ.includes(u)?(i=1,l.interrupt?t(s):T(s)):aQ.includes(o.toLowerCase())?(i=6,a)?(e.consume(s),m):l.interrupt?t(s):T(s):(i=7,l.interrupt&&!l.parser.lazy[l.now().line]?n(s):r?function t(n){return ad(n)?(e.consume(n),t):w(n)}(s):g(s))}return 45===s||ar(s)?(e.consume(s),o+=String.fromCharCode(s),f):n(s)}function m(i){return 62===i?(e.consume(i),l.interrupt?t:T):n(i)}function g(t){return 47===t?(e.consume(t),w):58===t||95===t||ai(t)?(e.consume(t),y):ad(t)?(e.consume(t),g):w(t)}function y(t){return 45===t||46===t||58===t||95===t||ar(t)?(e.consume(t),y):x(t)}function x(t){return 61===t?(e.consume(t),v):ad(t)?(e.consume(t),x):g(t)}function v(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),a=t,b):ad(t)?(e.consume(t),v):function t(n){return null===n||34===n||39===n||47===n||60===n||61===n||62===n||96===n||ah(n)?x(n):(e.consume(n),t)}(t)}function b(t){return t===a?(e.consume(t),a=null,k):null===t||ac(t)?n(t):(e.consume(t),b)}function k(e){return 47===e||62===e||ad(e)?g(e):n(e)}function w(t){return 62===t?(e.consume(t),S):n(t)}function S(t){return null===t||ac(t)?T(t):ad(t)?(e.consume(t),S):n(t)}function T(t){return 45===t&&2===i?(e.consume(t),A):60===t&&1===i?(e.consume(t),j):62===t&&4===i?(e.consume(t),N):63===t&&3===i?(e.consume(t),D):93===t&&5===i?(e.consume(t),M):ac(t)&&(6===i||7===i)?(e.exit("htmlFlowData"),e.check(a0,R,C)(t)):null===t||ac(t)?(e.exit("htmlFlowData"),C(t)):(e.consume(t),T)}function C(t){return e.check(a1,E,R)(t)}function E(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),P}function P(t){return null===t||ac(t)?C(t):(e.enter("htmlFlowData"),T(t))}function A(t){return 45===t?(e.consume(t),D):T(t)}function j(t){return 47===t?(e.consume(t),o="",L):T(t)}function L(t){if(62===t){let n=o.toLowerCase();return aZ.includes(n)?(e.consume(t),N):T(t)}return ai(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),L):T(t)}function M(t){return 93===t?(e.consume(t),D):T(t)}function D(t){return 62===t?(e.consume(t),N):45===t&&2===i?(e.consume(t),D):T(t)}function N(t){return null===t||ac(t)?(e.exit("htmlFlowData"),R(t)):(e.consume(t),N)}function R(n){return e.exit("htmlFlow"),t(n)}}},61:li,95:a7,96:a_,126:a_},"flowInitial",0,{[-2]:aq,[-1]:aq,32:aq},"insideSpan",0,{null:[aI,aP]},"string",0,{38:az,92:aB},"text",0,{[-5]:a8,[-4]:a8,[-3]:a8,33:a6,38:az,42:aI,60:[{name:"autolink",tokenize:function(e,t,n){let i=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r};function r(t){return ai(t)?(e.consume(t),o):64===t?n(t):a(t)}function o(t){return 43===t||45===t||46===t||ar(t)?(i=1,function t(n){return 58===n?(e.consume(n),i=0,s):(43===n||45===n||46===n||ar(n))&&i++<32?(e.consume(n),t):(i=0,a(n))}(t)):a(t)}function s(i){return 62===i?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),t):null===i||32===i||60===i||as(i)?n(i):(e.consume(i),s)}function a(t){return 64===t?(e.consume(t),l):ao(t)?(e.consume(t),a):n(t)}function l(r){return ar(r)?function r(o){return 46===o?(e.consume(o),i=0,l):62===o?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(o),e.exit("autolinkMarker"),e.exit("autolink"),t):function t(o){if((45===o||ar(o))&&i++<63){let n=45===o?t:r;return e.consume(o),n}return n(o)}(o)}(r):n(r)}}},{name:"htmlText",tokenize:function(e,t,n){let i,r,o,s=this;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),a};function a(t){return 33===t?(e.consume(t),l):47===t?(e.consume(t),b):63===t?(e.consume(t),x):ai(t)?(e.consume(t),w):n(t)}function l(t){return 45===t?(e.consume(t),u):91===t?(e.consume(t),r=0,p):ai(t)?(e.consume(t),y):n(t)}function u(t){return 45===t?(e.consume(t),d):n(t)}function c(t){return null===t?n(t):45===t?(e.consume(t),h):ac(t)?(o=c,L(t)):(e.consume(t),c)}function h(t){return 45===t?(e.consume(t),d):c(t)}function d(e){return 62===e?j(e):45===e?h(e):c(e)}function p(t){let i="CDATA[";return t===i.charCodeAt(r++)?(e.consume(t),r===i.length?f:p):n(t)}function f(t){return null===t?n(t):93===t?(e.consume(t),m):ac(t)?(o=f,L(t)):(e.consume(t),f)}function m(t){return 93===t?(e.consume(t),g):f(t)}function g(t){return 62===t?j(t):93===t?(e.consume(t),g):f(t)}function y(t){return null===t||62===t?j(t):ac(t)?(o=y,L(t)):(e.consume(t),y)}function x(t){return null===t?n(t):63===t?(e.consume(t),v):ac(t)?(o=x,L(t)):(e.consume(t),x)}function v(e){return 62===e?j(e):x(e)}function b(t){return ai(t)?(e.consume(t),k):n(t)}function k(t){return 45===t||ar(t)?(e.consume(t),k):function t(n){return ac(n)?(o=t,L(n)):ad(n)?(e.consume(n),t):j(n)}(t)}function w(t){return 45===t||ar(t)?(e.consume(t),w):47===t||62===t||ah(t)?S(t):n(t)}function S(t){return 47===t?(e.consume(t),j):58===t||95===t||ai(t)?(e.consume(t),T):ac(t)?(o=S,L(t)):ad(t)?(e.consume(t),S):j(t)}function T(t){return 45===t||46===t||58===t||95===t||ar(t)?(e.consume(t),T):function t(n){return 61===n?(e.consume(n),C):ac(n)?(o=t,L(n)):ad(n)?(e.consume(n),t):S(n)}(t)}function C(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),i=t,E):ac(t)?(o=C,L(t)):ad(t)?(e.consume(t),C):(e.consume(t),P)}function E(t){return t===i?(e.consume(t),i=void 0,A):null===t?n(t):ac(t)?(o=E,L(t)):(e.consume(t),E)}function P(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||ah(t)?S(t):(e.consume(t),P)}function A(e){return 47===e||62===e||ah(e)?S(e):n(e)}function j(i){return 62===i?(e.consume(i),e.exit("htmlTextData"),e.exit("htmlText"),t):n(i)}function L(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),M}function M(t){return ad(t)?ag(e,D,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):D(t)}function D(t){return e.enter("htmlTextData"),o(t)}}}],91:a9,92:[{name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),i};function i(i){return ac(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}},aB],93:a2,95:aI,96:{name:"codeText",previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type},resolve:function(e){let t,n,i=e.length-4,r=3;if(("lineEnding"===e[3][1].type||"space"===e[r][1].type)&&("lineEnding"===e[i][1].type||"space"===e[i][1].type)){for(t=r;++t<i;)if("codeTextData"===e[t][1].type){e[r][1].type="codeTextPadding",e[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(t=r-1,i++;++t<=i;)void 0===n?t!==i&&"lineEnding"!==e[t][1].type&&(n=t):(t===i||"lineEnding"===e[t][1].type)&&(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),i-=t-n-2,t=n+2),n=void 0);return e},tokenize:function(e,t,n){let i,r,o=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),function t(n){return 96===n?(e.consume(n),o++,t):(e.exit("codeTextSequence"),s(n))}(t)};function s(l){return null===l?n(l):32===l?(e.enter("space"),e.consume(l),e.exit("space"),s):96===l?(r=e.enter("codeTextSequence"),i=0,function n(s){return 96===s?(e.consume(s),i++,n):i===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(s)):(r.type="codeTextData",a(s))}(l)):ac(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):(e.enter("codeTextData"),a(l))}function a(t){return null===t||32===t||96===t||ac(t)?(e.exit("codeTextData"),s(t)):(e.consume(t),a)}}}}],4127);var lr=e.i(4127);let lo=/[\0\t\n\r]/g;function ls(e,t){let n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(65535&n)==65535||(65535&n)==65534||n>1114111?"�":String.fromCodePoint(n)}let la=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ll(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){let e=n.charCodeAt(1),t=120===e||88===e;return ls(n.slice(t?2:1),t?16:10)}return aU(n)||e}let lu={}.hasOwnProperty;function lc(e){return{line:e.line,column:e.column,offset:e.offset}}function lh(e,t){if(e)throw Error("Cannot close `"+e.type+"` ("+sH({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+sH({start:t.start,end:t.end})+") is open");throw Error("Cannot close document, a token (`"+t.type+"`, "+sH({start:t.start,end:t.end})+") is still open")}function ld(e){let t=this;t.parser=function(n){var i,r;let o,s,a,l;return"string"!=typeof(i={...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})&&(r=i,i=void 0),(function(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(y),autolinkProtocol:u,autolinkEmail:u,atxHeading:i(f),blockQuote:i(function(){return{type:"blockquote",children:[]}}),characterEscape:u,characterReference:u,codeFenced:i(p),codeFencedFenceInfo:r,codeFencedFenceMeta:r,codeIndented:i(p,r),codeText:i(function(){return{type:"inlineCode",value:""}},r),codeTextData:u,data:u,codeFlowValue:u,definition:i(function(){return{type:"definition",identifier:"",label:null,title:null,url:""}}),definitionDestinationString:r,definitionLabelString:r,definitionTitleString:r,emphasis:i(function(){return{type:"emphasis",children:[]}}),hardBreakEscape:i(m),hardBreakTrailing:i(m),htmlFlow:i(g,r),htmlFlowData:u,htmlText:i(g,r),htmlTextData:u,image:i(function(){return{type:"image",title:null,url:"",alt:null}}),label:r,link:i(y),listItem:i(function(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}),listItemValue:function(e){this.data.expectingFirstListItemValue&&(this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0)},listOrdered:i(x,function(){this.data.expectingFirstListItemValue=!0}),listUnordered:i(x),paragraph:i(function(){return{type:"paragraph",children:[]}}),reference:function(){this.data.referenceType="collapsed"},referenceString:r,resourceDestinationString:r,resourceTitleString:r,setextHeading:i(f),strong:i(function(){return{type:"strong",children:[]}}),thematicBreak:i(function(){return{type:"thematicBreak"}})},exit:{atxHeading:s(),atxHeadingSequence:function(e){let t=this.stack[this.stack.length-1];t.depth||(t.depth=this.sliceSerialize(e).length)},autolink:s(),autolinkEmail:function(e){c.call(this,e),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:function(e){c.call(this,e),this.stack[this.stack.length-1].url=this.sliceSerialize(e)},blockQuote:s(),characterEscapeValue:c,characterReferenceMarkerHexadecimal:d,characterReferenceMarkerNumeric:d,characterReferenceValue:function(e){let t,n=this.sliceSerialize(e),i=this.data.characterReferenceType;i?(t=ls(n,"characterReferenceMarkerNumeric"===i?10:16),this.data.characterReferenceType=void 0):t=aU(n);let r=this.stack[this.stack.length-1];r.value+=t},characterReference:function(e){this.stack.pop().position.end=lc(e.end)},codeFenced:s(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}),codeFencedFence:function(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)},codeFencedFenceInfo:function(){let e=this.resume();this.stack[this.stack.length-1].lang=e},codeFencedFenceMeta:function(){let e=this.resume();this.stack[this.stack.length-1].meta=e},codeFlowValue:c,codeIndented:s(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}),codeText:s(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),codeTextData:c,data:c,definition:s(),definitionDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},definitionLabelString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=aX(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},emphasis:s(),hardBreakEscape:s(h),hardBreakTrailing:s(h),htmlFlow:s(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlFlowData:c,htmlText:s(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlTextData:c,image:s(function(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}),label:function(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,"link"===n.type?n.children=e.children:n.alt=t},labelText:function(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=t.replace(la,ll),n.identifier=aX(t).toLowerCase()},lineEnding:function(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){n.children[n.children.length-1].position.end=lc(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(u.call(this,e),c.call(this,e))},link:s(function(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=aX(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"},resourceDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},resourceTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},resource:function(){this.data.inReference=void 0},setextHeading:s(function(){this.data.setextHeadingSlurpLineEnding=void 0}),setextHeadingLineSequence:function(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2},setextHeadingText:function(){this.data.setextHeadingSlurpLineEnding=!0},strong:s(),thematicBreak:s()}};!function e(t,n){let i=-1;for(;++i<n.length;){let r=n[i];Array.isArray(r)?e(t,r):function(e,t){let n;for(n in t)if(lu.call(t,n))switch(n){case"canContainEols":{let i=t[n];i&&e[n].push(...i);break}case"transforms":{let i=t[n];i&&e[n].push(...i);break}case"enter":case"exit":{let i=t[n];i&&Object.assign(e[n],i)}}}(t,r)}}(t,(e||{}).mdastExtensions||[]);let n={};return function(e){let i={type:"root",children:[]},s={stack:[i],tokenStack:[],config:t,enter:o,exit:a,buffer:r,resume:l,data:n},u=[],c=-1;for(;++c<e.length;)("listOrdered"===e[c][1].type||"listUnordered"===e[c][1].type)&&("enter"===e[c][0]?u.push(c):c=function(e,t,n){let i,r,o,s,a=t-1,l=-1,u=!1;for(;++a<=n;){let t=e[a];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?l++:l--,s=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!i||s||l||o||(o=a),s=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:s=void 0}if(!l&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===l&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(i){let s=a;for(r=void 0;s--;){let t=e[s];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;r&&(e[r][1].type="lineEndingBlank",u=!0),t[1].type="lineEnding",r=s}else if("linePrefix"===t[1].type||"blockQuotePrefix"===t[1].type||"blockQuotePrefixWhitespace"===t[1].type||"blockQuoteMarker"===t[1].type||"listItemIndent"===t[1].type);else break}o&&(!r||o<r)&&(i._spread=!0),i.end=Object.assign({},r?e[r][1].start:t[1].end),e.splice(r||a,0,["exit",i,t[2]]),a++,n++}if("listItemPrefix"===t[1].type){let r={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};i=r,e.splice(a,0,["enter",r,t[2]]),a++,n++,o=void 0,s=!0}}}return e[t][1]._spread=u,n}(e,u.pop(),c));for(c=-1;++c<e.length;){let n=t[e[c][0]];lu.call(n,e[c][1].type)&&n[e[c][1].type].call(Object.assign({sliceSerialize:e[c][2].sliceSerialize},s),e[c][1])}if(s.tokenStack.length>0){let e=s.tokenStack[s.tokenStack.length-1];(e[1]||lh).call(s,void 0,e[0])}for(i.position={start:lc(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:lc(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},c=-1;++c<t.transforms.length;)i=t.transforms[c](i)||i;return i};function i(e,t){return function(n){o.call(this,e(n),n),t&&t.call(this,n)}}function r(){this.stack.push({type:"fragment",children:[]})}function o(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:lc(t.start),end:void 0}}function s(e){return function(t){e&&e.call(this,t),a.call(this,t)}}function a(e,t){let n=this.stack.pop(),i=this.tokenStack.pop();if(i)i[0].type!==e.type&&(t?t.call(this,e,i[0]):(i[1]||lh).call(this,e,i[0]));else throw Error("Cannot close `"+e.type+"` ("+sH({start:e.start,end:e.end})+"): it’s not open");n.position.end=lc(e.end)}function l(){var e;return e=this.stack.pop(),s8(e,"boolean"!=typeof s9.includeImageAlt||s9.includeImageAlt,"boolean"!=typeof s9.includeHtml||s9.includeHtml)}function u(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];n&&"text"===n.type||((n={type:"text",value:""}).position={start:lc(e.start),end:void 0},t.push(n)),this.stack.push(n)}function c(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=lc(e.end)}function h(){this.data.atHardBreak=!0}function d(e){this.data.characterReferenceType=e.type}function p(){return{type:"code",lang:null,meta:null,value:""}}function f(){return{type:"heading",depth:0,children:[]}}function m(){return{type:"break"}}function g(){return{type:"html",value:""}}function y(){return{type:"link",title:null,url:"",children:[]}}function x(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}})(r)(function(e){for(;!aS(e););return e}((function(e){let t={constructs:function(e){let t={},n=-1;for(;++n<e.length;)!function(e,t){let n;for(n in t){let i,r=(an.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];if(o)for(i in o){an.call(r,i)||(r[i]=[]);let e=o[i];!function(e,t){let n=-1,i=[];for(;++n<t.length;)("after"===t[n].add?e:i).push(t[n]);ae(e,0,0,i)}(r[i],Array.isArray(e)?e:e?[e]:[])}}}(t,e[n]);return t}([lr,...(e||{}).extensions||[]]),content:n(ay),defined:[],document:n(ax),flow:n(aE),lazy:{},string:n(aA),text:n(aj)};return t;function n(e){return function(n){return function(e,t,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},r={},o=[],s=[],a=[],l={attempt:f(function(e,t){m(e,t.from)}),check:f(p),consume:function(e){ac(e)?(i.line++,i.column=1,i.offset+=-3===e?2:1,g()):-1!==e&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=e},enter:function(e,t){let n=t||{};return n.type=e,n.start=d(),u.events.push(["enter",n,u]),a.push(n),n},exit:function(e){let t=a.pop();return t.end=d(),u.events.push(["exit",t,u]),t},interrupt:f(p,{interrupt:!0})},u={code:null,containerState:{},defineSkip:function(e){r[e.line]=e.column,g()},events:[],now:d,parser:e,previous:null,sliceSerialize:function(e,t){return function(e,t){let n,i=-1,r=[];for(;++i<e.length;){let o,s=e[i];if("string"==typeof s)o=s;else switch(s){case -5:o="\r";break;case -4:o="\n";break;case -3:o="\r\n";break;case -2:o=t?" ":"	";break;case -1:if(!t&&n)continue;o=" ";break;default:o=String.fromCharCode(s)}n=-2===s,r.push(o)}return r.join("")}(h(e),t)},sliceStream:h,write:function(e){return(s=at(s,e),function(){let e;for(;i._index<s.length;){let n=s[i._index];if("string"==typeof n)for(e=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===e&&i._bufferIndex<n.length;){var t;t=n.charCodeAt(i._bufferIndex),c=c(t)}else c=c(n)}}(),null!==s[s.length-1])?[]:(m(t,0),u.events=aR(o,u.events,u),u.events)}},c=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function h(e){return function(e,t){let n,i=t.start._index,r=t.start._bufferIndex,o=t.end._index,s=t.end._bufferIndex;if(i===o)n=[e[i].slice(r,s)];else{if(n=e.slice(i,o),r>-1){let e=n[0];"string"==typeof e?n[0]=e.slice(r):n.shift()}s>0&&n.push(e[o].slice(0,s))}return n}(s,e)}function d(){let{_bufferIndex:e,_index:t,line:n,column:r,offset:o}=i;return{_bufferIndex:e,_index:t,line:n,column:r,offset:o}}function p(e,t){t.restore()}function f(e,t){return function(n,r,o){var s;let c,h,p,f;return Array.isArray(n)?m(n):"tokenize"in n?m([n]):(s=n,function(e){let t=null!==e&&s[e],n=null!==e&&s.null;return m([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(n)?n:n?[n]:[]])(e)});function m(e){return(c=e,h=0,0===e.length)?o:y(e[h])}function y(e){return function(n){let r,o,s,c,h;return(r=d(),o=u.previous,s=u.currentConstruct,c=u.events.length,h=Array.from(a),f={from:c,restore:function(){i=r,u.previous=o,u.currentConstruct=s,u.events.length=c,a=h,g()}},p=e,e.partial||(u.currentConstruct=e),e.name&&u.parser.constructs.disable.null.includes(e.name))?v(n):e.tokenize.call(t?Object.assign(Object.create(u),t):u,l,x,v)(n)}}function x(t){return e(p,f),r}function v(e){return(f.restore(),++h<c.length)?y(c[h]):o}}}function m(e,t){e.resolveAll&&!o.includes(e)&&o.push(e),e.resolve&&ae(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function g(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}(t,e,n)}}})(r).document().write((s=1,a="",l=!0,function(e,t,n){let i,r,u,c,h,d=[];for(e=a+("string"==typeof e?e.toString():new TextDecoder(t||void 0).decode(e)),u=0,a="",l&&(65279===e.charCodeAt(0)&&u++,l=void 0);u<e.length;){if(lo.lastIndex=u,c=(i=lo.exec(e))&&void 0!==i.index?i.index:e.length,h=e.charCodeAt(c),!i){a=e.slice(u);break}if(10===h&&u===c&&o)d.push(-3),o=void 0;else switch(o&&(d.push(-5),o=void 0),u<c&&(d.push(e.slice(u,c)),s+=c-u),h){case 0:d.push(65533),s++;break;case 9:for(r=4*Math.ceil(s/4),d.push(-2);s++<r;)d.push(-1);break;case 10:d.push(-4),s=1;break;default:o=!0,s=1}u=c+1}return n&&(o&&d.push(-5),a&&d.push(a),d.push(null)),d})(n,i,!0))))}}let lp="object"==typeof self?self:globalThis,lf=e=>{var t;let n,i;return(t=new Map,n=(e,n)=>(t.set(n,e),e),i=r=>{if(t.has(r))return t.get(r);let[o,s]=e[r];switch(o){case 0:case -1:return n(s,r);case 1:{let e=n([],r);for(let t of s)e.push(i(t));return e}case 2:{let e=n({},r);for(let[t,n]of s)e[i(t)]=i(n);return e}case 3:return n(new Date(s),r);case 4:{let{source:e,flags:t}=s;return n(new RegExp(e,t),r)}case 5:{let e=n(new Map,r);for(let[t,n]of s)e.set(i(t),i(n));return e}case 6:{let e=n(new Set,r);for(let t of s)e.add(i(t));return e}case 7:{let{name:e,message:t}=s;return n(new lp[e](t),r)}case 8:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{let{buffer:e}=new Uint8Array(s);return n(new DataView(e),s)}}return n(new lp[o](s),r)})(0)},{toString:lm}={},{keys:lg}=Object,ly=e=>{let t=typeof e;if("object"!==t||!e)return[0,t];let n=lm.call(e).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},lx=([e,t])=>0===e&&("function"===t||"symbol"===t),lv=(e,{json:t,lossy:n}={})=>{var i,r,o;let s,a,l=[];return(i=!(t||n),r=!!t,o=new Map,s=(e,t)=>{let n=l.push(e)-1;return o.set(t,n),n},a=e=>{if(o.has(e))return o.get(e);let[t,n]=ly(e);switch(t){case 0:{let r=e;switch(n){case"bigint":t=8,r=e.toString();break;case"function":case"symbol":if(i)throw TypeError("unable to serialize "+n);r=null;break;case"undefined":return s([-1],e)}return s([t,r],e)}case 1:{if(n){let t=e;return"DataView"===n?t=new Uint8Array(e.buffer):"ArrayBuffer"===n&&(t=new Uint8Array(e)),s([n,[...t]],e)}let i=[],r=s([t,i],e);for(let t of e)i.push(a(t));return r}case 2:{if(n)switch(n){case"BigInt":return s([n,e.toString()],e);case"Boolean":case"Number":case"String":return s([n,e.valueOf()],e)}if(r&&"toJSON"in e)return a(e.toJSON());let o=[],l=s([t,o],e);for(let t of lg(e))(i||!lx(ly(e[t])))&&o.push([a(t),a(e[t])]);return l}case 3:return s([t,e.toISOString()],e);case 4:{let{source:n,flags:i}=e;return s([t,{source:n,flags:i}],e)}case 5:{let n=[],r=s([t,n],e);for(let[t,r]of e)(i||!(lx(ly(t))||lx(ly(r))))&&n.push([a(t),a(r)]);return r}case 6:{let n=[],r=s([t,n],e);for(let t of e)(i||!lx(ly(t)))&&n.push(a(t));return r}}let{message:l}=e;return s([t,{name:n,message:l}],e)})(e),l},lb="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?lf(lv(e,t)):structuredClone(e):(e,t)=>lf(lv(e,t));function lk(e){let t=[],n=-1,i=0,r=0;for(;++n<e.length;){let o=e.charCodeAt(n),s="";if(37===o&&ar(e.charCodeAt(n+1))&&ar(e.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){let t=e.charCodeAt(n+1);o<56320&&t>56319&&t<57344?(s=String.fromCharCode(o,t),r=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return t.join("")+e.slice(i)}function lw(e,t){let n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function lS(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}let lT=function(e){var t,n;if(null==e)return lE;if("function"==typeof e)return lC(e);if("object"==typeof e){return Array.isArray(e)?function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=lT(e[n]);return lC(function(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1})}(e):(t=e,lC(function(e){let n;for(n in t)if(e[n]!==t[n])return!1;return!0}))}if("string"==typeof e){return n=e,lC(function(e){return e&&e.type===n})}throw Error("Expected function, string, or object as test")};function lC(e){return function(t,n,i){return!!(function(e){return null!==e&&"object"==typeof e&&"type"in e}(t)&&e.call(this,t,"number"==typeof n?n:void 0,i||void 0))}}function lE(){return!0}let lP=[];function lA(e,t,n,i){var r,o,s;let a,l,u,c,h,d;"function"==typeof t&&"function"!=typeof n?(l=void 0,u=t,a=n):(l=t,u=n,a=i),r=l,o=function(e,t){let n=t[t.length-1],i=n?n.children.indexOf(e):void 0;return u(e,i,n)},s=a,"function"==typeof r&&"function"!=typeof o?(s=o,o=r):c=r,h=lT(c),d=s?-1:1,(function e(t,n,i){let a=t&&"object"==typeof t?t:{};if("string"==typeof a.type){let e="string"==typeof a.tagName?a.tagName:"string"==typeof a.name?a.name:void 0;Object.defineProperty(l,"name",{value:"node ("+t.type+(e?"<"+e+">":"")+")"})}return l;function l(){var a;let l,u,c,p=lP;if((!r||h(t,n,i[i.length-1]||void 0))&&!1===(p=Array.isArray(a=o(t,i))?a:"number"==typeof a?[!0,a]:null==a?lP:[a])[0])return p;if("children"in t&&t.children&&t.children&&"skip"!==p[0])for(u=(s?t.children.length:-1)+d,c=i.concat(t);u>-1&&u<t.children.length;){if(!1===(l=e(t.children[u],u,c)())[0])return l;u="number"==typeof l[1]?l[1]:u+d}return p}})(e,void 0,[])()}function lj(e,t){let n=t.referenceType,i="]";if("collapsed"===n?i+="[]":"full"===n&&(i+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+i}];let r=e.all(t),o=r[0];o&&"text"===o.type?o.value="["+o.value:r.unshift({type:"text",value:"["});let s=r[r.length-1];return s&&"text"===s.type?s.value+=i:r.push({type:"text",value:i}),r}function lL(e){let t=e.spread;return null==t?e.children.length>1:t}function lM(e,t,n){let i=0,r=e.length;if(t){let t=e.codePointAt(i);for(;9===t||32===t;)i++,t=e.codePointAt(i)}if(n){let t=e.codePointAt(r-1);for(;9===t||32===t;)r--,t=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}let lD={blockquote:function(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){let n=t.value?t.value+"\n":"",i={},r=t.lang?t.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o={type:"element",tagName:"pre",properties:{},children:[o=e.applyData(t,o)]},e.patch(t,o),o},delete:function(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){let n,i="string"==typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=lk(r.toLowerCase()),s=e.footnoteOrder.indexOf(r),a=e.footnoteCounts.get(r);void 0===a?(a=0,e.footnoteOrder.push(r),n=e.footnoteOrder.length):n=s+1,a+=1,e.footnoteCounts.set(r,a);let l={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+o,id:i+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(n)}]};e.patch(t,l);let u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)},heading:function(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){let n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return lj(e,t);let r={src:lk(i.url||""),alt:t.alt};null!==i.title&&void 0!==i.title&&(r.title=i.title);let o={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,o),e.applyData(t,o)},image:function(e,t){let n={src:lk(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);let i={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,i),e.applyData(t,i)},inlineCode:function(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let i={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,i),e.applyData(t,i)},linkReference:function(e,t){let n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return lj(e,t);let r={href:lk(i.url||"")};null!==i.title&&void 0!==i.title&&(r.title=i.title);let o={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)},link:function(e,t){let n={href:lk(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);let i={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)},listItem:function(e,t,n){let i=e.all(t),r=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;let n=e.children,i=-1;for(;!t&&++i<n.length;)t=lL(n[i])}return t}(n):lL(t),o={},s=[];if("boolean"==typeof t.checked){let e,n=i[0];n&&"element"===n.type&&"p"===n.tagName?e=n:(e={type:"element",tagName:"p",properties:{},children:[]},i.unshift(e)),e.children.length>0&&e.children.unshift({type:"text",value:" "}),e.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){let e=i[a];(r||0!==a||"element"!==e.type||"p"!==e.tagName)&&s.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||r?s.push(e):s.push(...e.children)}let l=i[i.length-1];l&&(r||"element"!==l.type||"p"!==l.tagName)&&s.push({type:"text",value:"\n"});let u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)},list:function(e,t){let n={},i=e.all(t),r=-1;for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++r<i.length;){let e=i[r];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)},paragraph:function(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){let n=e.all(t),i=n.shift(),r=[];if(i){let n={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(t.children[0],n),r.push(n)}if(n.length>0){let i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=sU(t.children[1]),s=sV(t.children[t.children.length-1]);o&&s&&(i.position={start:o,end:s}),r.push(i)}let o={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)},tableCell:function(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){let i=n?n.children:void 0,r=0===(i?i.indexOf(t):1)?"th":"td",o=n&&"table"===n.type?n.align:void 0,s=o?o.length:t.children.length,a=-1,l=[];for(;++a<s;){let n=t.children[a],i={},s=o?o[a]:void 0;s&&(i.align=s);let u={type:"element",tagName:r,properties:i,children:[]};n&&(u.children=e.all(n),e.patch(n,u),u=e.applyData(n,u)),l.push(u)}let u={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,u),e.applyData(t,u)},text:function(e,t){let n={type:"text",value:function(e){let t=String(e),n=/\r?\n|\r/g,i=n.exec(t),r=0,o=[];for(;i;)o.push(lM(t.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(t);return o.push(lM(t.slice(r),r>0,!1)),o.join("")}(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:lN,yaml:lN,definition:lN,footnoteDefinition:lN};function lN(){}let lR={}.hasOwnProperty,lI={};function lO(e,t){e.position&&(t.position=function(e){let t=sU(e),n=sV(e);if(t&&n)return{start:t,end:n}}(e))}function lF(e,t){let n=t;if(e&&e.data){let t=e.data.hName,i=e.data.hChildren,r=e.data.hProperties;"string"==typeof t&&("element"===n.type?n.tagName=t:n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}),"element"===n.type&&r&&Object.assign(n.properties,lb(r)),"children"in n&&n.children&&null!=i&&(n.children=i)}return n}function lB(e,t){let n=[],i=-1;for(t&&n.push({type:"text",value:"\n"});++i<e.length;)i&&n.push({type:"text",value:"\n"}),n.push(e[i]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function lV(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function lU(e,t){let n,i,r,o,s=(n=t||lI,i=new Map,r=new Map,o={all:function(e){let t=[];if("children"in e){let n=e.children,i=-1;for(;++i<n.length;){let r=o.one(n[i],e);if(r){if(i&&"break"===n[i-1].type&&(Array.isArray(r)||"text"!==r.type||(r.value=lV(r.value)),!Array.isArray(r)&&"element"===r.type)){let e=r.children[0];e&&"text"===e.type&&(e.value=lV(e.value))}Array.isArray(r)?t.push(...r):t.push(r)}}}return t},applyData:lF,definitionById:i,footnoteById:r,footnoteCounts:new Map,footnoteOrder:[],handlers:{...lD,...n.handlers},one:function(e,t){let n=e.type,i=o.handlers[n];if(lR.call(o.handlers,n)&&i)return i(o,e,t);if(o.options.passThrough&&o.options.passThrough.includes(n)){if("children"in e){let{children:t,...n}=e,i=lb(n);return i.children=o.all(e),i}return lb(e)}return(o.options.unknownHandler||function(e,t){let n=t.data||{},i="value"in t&&!(lR.call(n,"hProperties")||lR.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)})(o,e,t)},options:n,patch:lO,wrap:lB},lA(e,function(e){if("definition"===e.type||"footnoteDefinition"===e.type){let t="definition"===e.type?i:r,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),o),a=s.one(e,void 0),l=function(e){let t="string"==typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||lw,i=e.options.footnoteBackLabel||lS,r=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[],l=-1;for(;++l<e.footnoteOrder.length;){let r=e.footnoteById.get(e.footnoteOrder[l]);if(!r)continue;let o=e.all(r),s=String(r.identifier).toUpperCase(),u=lk(s.toLowerCase()),c=0,h=[],d=e.footnoteCounts.get(s);for(;void 0!==d&&++c<=d;){h.length>0&&h.push({type:"text",value:" "});let e="string"==typeof n?n:n(l,c);"string"==typeof e&&(e={type:"text",value:e}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+u+(c>1?"-"+c:""),dataFootnoteBackref:"",ariaLabel:"string"==typeof i?i:i(l,c),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}let p=o[o.length-1];if(p&&"element"===p.type&&"p"===p.tagName){let e=p.children[p.children.length-1];e&&"text"===e.type?e.value+=" ":p.children.push({type:"text",value:" "}),p.children.push(...h)}else o.push(...h);let f={type:"element",tagName:"li",properties:{id:t+"fn-"+u},children:e.wrap(o,!0)};e.patch(r,f),a.push(f)}if(0!==a.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...lb(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:"\n"}]}}(s),u=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return l&&(o9("children"in u),u.children.push({type:"text",value:"\n"},l)),u}function lz(e,t){return e&&"run"in e?async function(n,i){let r=lU(n,{file:i,...t});await e.run(r,i)}:function(n,i){return lU(n,{file:i,...e||t})}}function lH(e){if(e)throw e}var l_=e.i(4100);function lq(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}let lW=function(e,t){let n;if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');lJ(e);let i=0,r=-1,o=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;o--;)if(47===e.codePointAt(o)){if(n){i=o+1;break}}else r<0&&(n=!0,r=o+1);return r<0?"":e.slice(i,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;o--;)if(47===e.codePointAt(o)){if(n){i=o+1;break}}else s<0&&(n=!0,s=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(r=o):(a=-1,r=s));return i===r?r=s:r<0&&(r=e.length),e.slice(i,r)},lG=function(e){let t;if(lJ(e),0===e.length)return".";let n=-1,i=e.length;for(;--i;)if(47===e.codePointAt(i)){if(t){n=i;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},l$=function(e){let t;lJ(e);let n=e.length,i=-1,r=0,o=-1,s=0;for(;n--;){let a=e.codePointAt(n);if(47===a){if(t){r=n+1;break}continue}i<0&&(t=!0,i=n+1),46===a?o<0?o=n:1!==s&&(s=1):o>-1&&(s=-1)}return o<0||i<0||0===s||1===s&&o===i-1&&o===r+1?"":e.slice(o,i)},lK=function(...e){var t;let n,i,r,o=-1;for(;++o<e.length;)lJ(e[o]),e[o]&&(r=void 0===r?e[o]:r+"/"+e[o]);return void 0===r?".":(lJ(t=r),n=47===t.codePointAt(0),0!==(i=function(e,t){let n,i,r="",o=0,s=-1,a=0,l=-1;for(;++l<=e.length;){if(l<e.length)n=e.codePointAt(l);else if(47===n)break;else n=47;if(47===n){if(s===l-1||1===a);else if(s!==l-1&&2===a){if(r.length<2||2!==o||46!==r.codePointAt(r.length-1)||46!==r.codePointAt(r.length-2)){if(r.length>2){if((i=r.lastIndexOf("/"))!==r.length-1){i<0?(r="",o=0):o=(r=r.slice(0,i)).length-1-r.lastIndexOf("/"),s=l,a=0;continue}}else if(r.length>0){r="",o=0,s=l,a=0;continue}}t&&(r=r.length>0?r+"/..":"..",o=2)}else r.length>0?r+="/"+e.slice(s+1,l):r=e.slice(s+1,l),o=l-s-1;s=l,a=0}else 46===n&&a>-1?a++:a=-1}return r}(t,!n)).length||n||(i="."),i.length>0&&47===t.codePointAt(t.length-1)&&(i+="/"),n?"/"+i:i)};function lJ(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function lX(e){return!!(null!==e&&"object"==typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}let lY=["history","path","basename","stem","extname","dirname"];class lQ{constructor(e){let t,n;t=e?lX(e)?{path:e}:"string"==typeof e||function(e){return!!(e&&"object"==typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":"/",this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<lY.length;){const e=lY[i];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)lY.includes(n)||(this[n]=t[n])}get basename(){return"string"==typeof this.path?lW(this.path):void 0}set basename(e){l0(e,"basename"),lZ(e,"basename"),this.path=lK(this.dirname||"",e)}get dirname(){return"string"==typeof this.path?lG(this.path):void 0}set dirname(e){l1(this.basename,"dirname"),this.path=lK(e||"",this.basename)}get extname(){return"string"==typeof this.path?l$(this.path):void 0}set extname(e){if(lZ(e,"extname"),l1(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw Error("`extname` must start with `.`");if(e.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=lK(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){lX(e)&&(e=function(e){if("string"==typeof e)e=new URL(e);else if(!lX(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){let e=TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){let e=TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}let t=e.pathname,n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){let e=t.codePointAt(n+2);if(70===e||102===e){let e=TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}(e)),l0(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"==typeof this.path?lW(this.path,this.extname):void 0}set stem(e){l0(e,"stem"),lZ(e,"stem"),this.path=lK(this.dirname||"",e+(this.extname||""))}fail(e,t,n){let i=this.message(e,t,n);throw i.fatal=!0,i}info(e,t,n){let i=this.message(e,t,n);return i.fatal=void 0,i}message(e,t,n){let i=new sG(e,t,n);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return void 0===this.value?"":"string"==typeof this.value?this.value:new TextDecoder(e||void 0).decode(this.value)}}function lZ(e,t){if(e&&e.includes("/"))throw Error("`"+t+"` cannot be a path: did not expect `/`")}function l0(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function l1(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}let l2=function(e){let t=this.constructor.prototype,n=t[e],i=function(){return n.apply(i,arguments)};return Object.setPrototypeOf(i,t),i},l4={}.hasOwnProperty;class l3 extends l2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=function(){let e=[],t={run:function(...t){let n=-1,i=t.pop();if("function"!=typeof i)throw TypeError("Expected function as last argument, not "+i);!function r(o,...s){let a=e[++n],l=-1;if(o)return void i(o);for(;++l<t.length;)(null===s[l]||void 0===s[l])&&(s[l]=t[l]);t=s,a?(function(e,t){let n;return function(...t){let o,s=e.length>t.length;s&&t.push(i);try{o=e.apply(this,t)}catch(e){if(s&&n)throw e;return i(e)}s||(o&&o.then&&"function"==typeof o.then?o.then(r,i):o instanceof Error?i(o):r(o))};function i(e,...r){n||(n=!0,t(e,...r))}function r(e){i(null,e)}})(a,r)(...s):i(null,...s)}(null,...t)},use:function(n){if("function"!=typeof n)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}()}copy(){let e=new l3,t=-1;for(;++t<this.attachers.length;){let n=this.attachers[t];e.use(...n)}return e.data((0,l_.default)(!0,{},this.namespace)),e}data(e,t){return"string"==typeof e?2==arguments.length?(l8("data",this.frozen),this.namespace[e]=t,this):l4.call(this.namespace,e)&&this.namespace[e]||void 0:e?(l8("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;for(;++this.freezeIndex<this.attachers.length;){let[e,...t]=this.attachers[this.freezeIndex];if(!1===t[0])continue;!0===t[0]&&(t[0]=void 0);let n=e.call(this,...t);"function"==typeof n&&this.transformers.use(n)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=ut(e),n=this.parser||this.Parser;return l6("parse",n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),l6("process",this.parser||this.Parser),l9("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(i,r){let o=ut(e),s=n.parse(o);function a(e,n){e||!n?r(e):i?i(n):(o9(t,"`done` is defined if `resolve` is not"),t(void 0,n))}n.run(s,o,function(e,t,i){var r,o;if(e||!t||!i)return a(e);let s=n.stringify(t,i);"string"==typeof(r=s)||(o=r)&&"object"==typeof o&&"byteLength"in o&&"byteOffset"in o?i.value=s:i.result=s,a(e,i)})}}processSync(e){let t,n=!1;return this.freeze(),l6("processSync",this.parser||this.Parser),l9("processSync",this.compiler||this.Compiler),this.process(e,function(e,i){n=!0,lH(e),t=i}),ue("processSync","process",n),o9(t,"we either bailed on an error or have a tree"),t}run(e,t,n){l7(e),this.freeze();let i=this.transformers;return n||"function"!=typeof t||(n=t,t=void 0),n?r(void 0,n):new Promise(r);function r(r,o){o9("function"!=typeof t,"`file` can’t be a `done` anymore, we checked");let s=ut(t);i.run(e,s,function(t,i,s){let a=i||e;t?o(t):r?r(a):(o9(n,"`done` is defined if `resolve` is not"),n(void 0,a,s))})}}runSync(e,t){let n,i=!1;return this.run(e,t,function(e,t){lH(e),n=t,i=!0}),ue("runSync","run",i),o9(n,"we either bailed on an error or have a tree"),n}stringify(e,t){this.freeze();let n=ut(t),i=this.compiler||this.Compiler;return l9("stringify",i),l7(e),i(e,n)}use(e,...t){let n=this.attachers,i=this.namespace;if(l8("use",this.frozen),null==e);else if("function"==typeof e)s(e,t);else if("object"==typeof e)Array.isArray(e)?o(e):r(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function r(e){if(!("plugins"in e)&&!("settings"in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(i.settings=(0,l_.default)(!0,i.settings,e.settings))}function o(e){let t=-1;if(null==e);else if(Array.isArray(e))for(;++t<e.length;)!function(e){if("function"==typeof e)s(e,[]);else if("object"==typeof e)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else r(e);else throw TypeError("Expected usable value, not `"+e+"`")}(e[t]);else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let i=-1,r=-1;for(;++i<n.length;)if(n[i][0]===e){r=i;break}if(-1===r)n.push([e,...t]);else if(t.length>0){let[i,...o]=t,s=n[r][1];lq(s)&&lq(i)&&(i=(0,l_.default)(!0,s,i)),n[r]=[e,i,...o]}}}}let l5=new l3().freeze();function l6(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `parser`")}function l9(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `compiler`")}function l8(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function l7(e){if(!lq(e)||"string"!=typeof e.type)throw TypeError("Expected node, got `"+e+"`")}function ue(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function ut(e){var t;return(t=e)&&"object"==typeof t&&"message"in t&&"messages"in t?e:new lQ(e)}let un=[],ui={allowDangerousHtml:!0},ur=/^(https?|ircs?|mailto|xmpp)$/i,uo=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function us(e){var t;let n,i,r,o,a,l=(n=(t=e).rehypePlugins||un,i=t.remarkPlugins||un,r=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...ui}:ui,l5().use(ld).use(i).use(lz,r).use(n)),u=(o=e.children||"",a=new lQ,"string"==typeof o?a.value=o:o8("Unexpected value `"+o+"` for `children` prop, expected `string`"),a);return function(e,t){let n=t.allowedElements,i=t.allowElement,r=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,u=t.urlTransform||ua;for(let e of uo)Object.hasOwn(t,e.from)&&o8("Unexpected `"+e.from+"` prop, "+(e.to?"use `"+e.to+"` instead":"remove it")+" (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#"+e.id+"> for more info)");return n&&o&&o8("Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"),lA(e,function(e,t,r){if("raw"===e.type&&r&&"number"==typeof t)return a?r.children.splice(t,1):r.children[t]={type:"text",value:e.value},t;if("element"===e.type){let t;for(t in s6)if(Object.hasOwn(s6,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],i=s6[t];(null===i||i.includes(e.tagName))&&(e.properties[t]=u(String(n||""),t,e))}}if("element"===e.type){let s=n?!n.includes(e.tagName):!!o&&o.includes(e.tagName);if(!s&&i&&"number"==typeof t&&(s=!i(e,t,r)),s&&r&&"number"==typeof t)return l&&e.children?r.children.splice(t,1,...e.children):r.children.splice(t,1),t}}),function(e,t){var n,i,r,o;let s;if(!t||void 0===t.Fragment)throw TypeError("Expected `Fragment` in options");let a=t.filePath||void 0;if(t.development){if("function"!=typeof t.jsxDEV)throw TypeError("Expected `jsxDEV` in options when `development: true`");n=a,i=t.jsxDEV,s=function(e,t,r,o){let s=Array.isArray(r.children),a=sU(e);return i(t,r,o,s,{columnNumber:a?a.column-1:void 0,fileName:n,lineNumber:a?a.line:void 0},void 0)}}else{if("function"!=typeof t.jsx)throw TypeError("Expected `jsx` in production options");if("function"!=typeof t.jsxs)throw TypeError("Expected `jsxs` in production options");r=t.jsx,o=t.jsxs,s=function(e,t,n,i){let s=Array.isArray(n.children)?o:r;return i?s(t,n,i):s(t,n)}}let l={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:s,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?sF:sO,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},u=sZ(l,e,void 0);return u&&"string"!=typeof u?u:l.create(e,l.Fragment,{children:u||void 0},void 0)}(e,{Fragment:s.Fragment,components:r,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0})}(l.runSync(l.parse(u),u),e)}function ua(e){let t=e.indexOf(":"),n=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return -1===t||-1!==r&&t>r||-1!==n&&t>n||-1!==i&&t>i||ur.test(e.slice(0,t))?e:""}let ul={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},uu={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}};function uc(){let[e,t]=(0,p.useState)(!1),[n,i]=(0,p.useState)(!1),{scrollYProgress:r}=function({container:e,target:t,...n}={}){let i=nh(o2),r=(0,p.useRef)(null),o=(0,p.useRef)(!1),s=(0,p.useCallback)(()=>(r.current=function(e,{axis:t="y",container:n=document.scrollingElement,...i}={}){var r,o;let s;if(!n)return eA;let a={axis:t,container:n,...i};return"function"==typeof e?(r=e,o=a,2===r.length?oZ(e=>{r(e[o.axis].progress,e)},o):oN(r,o1(o))):(s=o1(a),e.attachTimeline({timeline:a.target?void 0:s,observe:e=>(e.pause(),oN(t=>{e.time=e.iterationDuration*t},s))}))}((e,{x:t,y:n})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{r.current?.()}),[e,t,JSON.stringify(n.offset)]);return nb(()=>{if(o.current=!1,!(o4(e)||o4(t)))return s();o.current=!0},[s]),(0,p.useEffect)(()=>o.current?(ew(!o4(e),"Container ref is defined but not hydrated","use-scroll-ref"),ew(!o4(t),"Target ref is defined but not hydrated","use-scroll-ref"),s()):void 0,[s]),i}(),o=function(e,t,n,i){if("function"==typeof e){let t;return tg.current=[],e(),t=o3(tg.current,e),tg.current=void 0,t}let r="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],r=ip(e[1+n],e[2+n],e[3+n]);return t?r(i):r}(t,n,void 0);return Array.isArray(e)?o5(e,r):o5([e],([e])=>r(e))}(r,[0,1],[0,1]);(0,p.useEffect)(()=>{let e=()=>t(window.scrollY>50);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let a=e=>{i(!1);let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,s.jsxs)("main",{className:"min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900",children:[(0,s.jsx)(oD.div,{className:"fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]",style:{scaleX:o}}),(0,s.jsxs)("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-white/90 backdrop-blur-md shadow-sm py-3":"bg-transparent py-6"}`,children:[(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-6 flex justify-between items-center",children:[(0,s.jsxs)("span",{onClick:()=>a("home"),className:`font-bold text-xl cursor-pointer tracking-tighter ${e?"text-slate-900":"text-slate-800"}`,children:[l.full_name," ",(0,s.jsx)("span",{className:"text-blue-600",children:"."})]}),(0,s.jsx)("div",{className:"hidden md:flex gap-8",children:["Home","About","Blog","Projects","Certificates"].map(t=>(0,s.jsx)("button",{onClick:()=>a(t.toLowerCase()),className:`font-medium text-sm hover:text-blue-600 transition-colors ${e?"text-slate-600":"text-slate-700"}`,children:t},t))}),(0,s.jsx)("button",{className:"md:hidden text-slate-700",onClick:()=>i(!n),children:n?(0,s.jsx)(T,{}):(0,s.jsx)(S,{})})]}),n&&(0,s.jsx)("div",{className:"md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4",children:["Home","About","Blog","Projects","Certificates"].map(e=>(0,s.jsx)("button",{onClick:()=>a(e.toLowerCase()),className:"text-left font-medium text-slate-700 py-2 border-b border-slate-50 last:border-0",children:e},e))})]}),(0,s.jsxs)("section",{id:"home",className:"relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-white",children:[(0,s.jsx)("div",{className:"absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"}),(0,s.jsx)("div",{className:"absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"}),(0,s.jsx)("div",{className:"absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"}),(0,s.jsx)("div",{className:"max-w-5xl mx-auto text-center relative z-10",children:(0,s.jsxs)(oD.div,{initial:"hidden",animate:"visible",variants:ul,children:[(0,s.jsxs)("div",{className:"relative w-40 h-40 mx-auto mb-8 rounded-full border-[6px] border-white shadow-2xl overflow-hidden group",children:[(0,s.jsx)("img",{src:l.avatar,alt:l.full_name,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",onError:e=>{e.currentTarget.style.display="none",e.currentTarget.nextElementSibling?.classList.remove("hidden")}}),(0,s.jsx)("div",{className:"hidden w-full h-full absolute inset-0 bg-slate-100 flex items-center justify-center text-4xl font-bold text-slate-400",children:l.full_name.charAt(0)})]}),(0,s.jsxs)("h1",{className:"text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight",children:["Backend ",(0,s.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",children:"Developer"})]}),(0,s.jsx)("p",{className:"text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light",children:l.title}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[(0,s.jsxs)("a",{href:l.github,target:"_blank",className:"px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg",children:[(0,s.jsx)(b,{size:20})," GitHub"]}),(0,s.jsxs)("a",{href:`mailto:${l.email}`,className:"px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg",children:[(0,s.jsx)(v,{size:20})," Contact Me"]})]}),(0,s.jsxs)("div",{className:"mt-16 flex justify-center gap-8 text-slate-400 grayscale opacity-50",children:[(0,s.jsx)(E,{size:32}),(0,s.jsx)(P,{size:32}),(0,s.jsx)(A,{size:32}),(0,s.jsx)(j,{size:32})]})]})})]}),(0,s.jsx)("section",{id:"about",className:"py-24 px-6 bg-slate-50",children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,s.jsxs)(oD.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:uu,className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,s.jsxs)(oD.div,{variants:ul,className:"md:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow",children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2",children:[(0,s.jsx)("span",{className:"w-2 h-8 bg-blue-600 rounded-full"})," Về tôi"]}),(0,s.jsx)("div",{className:"prose prose-slate prose-lg max-w-none text-slate-600",children:(0,s.jsx)(us,{components:{strong:({node:e,...t})=>(0,s.jsx)("strong",{className:"font-bold text-slate-900",...t}),p:({node:e,...t})=>(0,s.jsx)("p",{className:"leading-relaxed mb-4",...t}),ul:({node:e,...t})=>(0,s.jsx)("ul",{className:"list-disc list-inside space-y-2 my-4",...t}),li:({node:e,...t})=>(0,s.jsx)("li",{className:"leading-relaxed",...t})},children:l.bio})})]}),(0,s.jsxs)(oD.div,{variants:ul,className:"bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-3xl text-white shadow-lg",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-6 border-b border-white/20 pb-4",children:"Kỹ năng chính"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"font-semibold text-blue-100 mb-2 text-sm uppercase tracking-wider",children:"Languages"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:["Java","JavaScript","Golang","SQL"].map(e=>(0,s.jsx)("span",{className:"bg-white/20 px-3 py-1 rounded-full text-sm font-medium",children:e},e))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"font-semibold text-blue-100 mb-2 text-sm uppercase tracking-wider",children:"Backend"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:["Spring Boot","Node.js","Gin","REST API"].map(e=>(0,s.jsx)("span",{className:"bg-white/20 px-3 py-1 rounded-full text-sm font-medium",children:e},e))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"font-semibold text-blue-100 mb-2 text-sm uppercase tracking-wider",children:"Tools"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:["Docker","Git","Postman","Linux"].map(e=>(0,s.jsx)("span",{className:"bg-white/20 px-3 py-1 rounded-full text-sm font-medium",children:e},e))})]})]})]}),(0,s.jsxs)(oD.div,{variants:ul,className:"md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,s.jsxs)("div",{className:"bg-white p-6 rounded-2xl border border-slate-100 text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold text-blue-600 mb-1",children:"1+"}),(0,s.jsx)("div",{className:"text-sm text-slate-500",children:"Năm kinh nghiệm"})]}),(0,s.jsxs)("div",{className:"bg-white p-6 rounded-2xl border border-slate-100 text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold text-purple-600 mb-1",children:"5+"}),(0,s.jsx)("div",{className:"text-sm text-slate-500",children:"Dự án hoàn thành"})]}),(0,s.jsxs)("div",{className:"bg-white p-6 rounded-2xl border border-slate-100 text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold text-pink-600 mb-1",children:"7+"}),(0,s.jsx)("div",{className:"text-sm text-slate-500",children:"Chứng chỉ"})]}),(0,s.jsxs)("div",{className:"bg-white p-6 rounded-2xl border border-slate-100 text-center",children:[(0,s.jsx)("div",{className:"text-3xl font-bold text-orange-600 mb-1",children:"100%"}),(0,s.jsx)("div",{className:"text-sm text-slate-500",children:"Đam mê"})]})]})]})})}),(0,s.jsx)("section",{id:"projects",className:"py-24 px-6 bg-white",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,s.jsxs)(oD.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Dự án nổi bật"}),(0,s.jsx)("p",{className:"text-slate-600 max-w-2xl mx-auto text-lg",children:"Các dự án thực tế áp dụng kiến thức Lập trình mạng, AI và Backend Systems."})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-10",children:c.map((e,t)=>(0,s.jsxs)(oD.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},className:"group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300",children:[(0,s.jsxs)("div",{className:"h-64 overflow-hidden relative",children:[(0,s.jsx)("img",{src:e.image_url,alt:e.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:e=>{e.currentTarget.src="https://placehold.co/800x600/f1f5f9/94a3b8?text=Project+Demo"}}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm",children:(0,s.jsx)(o6.default,{href:`/projects/${e.id}`,className:"px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform",children:"Xem chi tiết"})})]}),(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsx)("div",{className:"flex justify-between items-start mb-4",children:(0,s.jsx)("span",{className:"bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",children:e.category})}),(0,s.jsx)("h3",{className:"font-bold text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors",children:e.title}),(0,s.jsx)("p",{className:"text-slate-600 mb-6 line-clamp-2",children:e.description}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2 mb-6",children:[e.tech_stack.split(",").slice(0,3).map((e,t)=>(0,s.jsx)("span",{className:"text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-md",children:e.trim()},t)),(0,s.jsx)("span",{className:"text-xs font-medium text-slate-400 px-2 py-1",children:"+more"})]})]})]},e.id))})]})}),(0,s.jsx)("section",{id:"blog",className:"py-24 px-6 bg-slate-50",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,s.jsxs)("div",{className:"flex justify-between items-end mb-12",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-slate-900 mb-2",children:"Bài viết mới nhất"}),(0,s.jsx)("p",{className:"text-slate-600",children:"Chia sẻ kiến thức về lập trình"})]}),(0,s.jsxs)(o6.default,{href:"#",className:"hidden md:flex items-center text-blue-600 font-semibold hover:gap-2 transition-all",children:["Xem tất cả ",(0,s.jsx)(C,{size:16,className:"ml-1"})]})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-3 gap-8",children:u.slice(0,3).map((e,t)=>(0,s.jsxs)(oD.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},className:"bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all group",children:[(0,s.jsx)("div",{className:"h-48 overflow-hidden",children:(0,s.jsx)("img",{src:e.cover_image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",onError:e=>{e.currentTarget.src="https://placehold.co/600x400/e2e8f0/64748b?text=Blog"}})}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("div",{className:"flex gap-2 mb-3",children:(0,s.jsx)("span",{className:"text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md",children:e.tags.split(",")[0]})}),(0,s.jsx)("h3",{className:"font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors",children:e.title}),(0,s.jsx)("p",{className:"text-slate-500 text-sm mb-4 line-clamp-2",children:e.summary}),(0,s.jsx)(o6.default,{href:`/blog/${e.id}`,className:"text-sm font-bold text-slate-900 border-b-2 border-slate-200 hover:border-blue-600 transition-all pb-1",children:"Đọc tiếp"})]})]},e.id))})]})}),(0,s.jsx)("section",{id:"certificates",className:"py-24 px-6 bg-white",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-slate-900 mb-4",children:"Chứng chỉ & Hoạt động"}),(0,s.jsx)("p",{className:"text-slate-600 max-w-2xl mx-auto",children:"Minh chứng cho quá trình học tập và rèn luyện không ngừng nghỉ."})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:h.map(e=>(0,s.jsxs)(oD.div,{whileHover:{y:-5},className:"bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all",children:[(0,s.jsxs)("div",{className:"relative aspect-video bg-slate-100 border-b border-slate-100 group",children:[(0,s.jsx)("img",{src:e.image_url,alt:e.name,className:"w-full h-full object-cover p-4 group-hover:p-0 transition-all duration-500",onError:e=>e.currentTarget.src="https://placehold.co/400x300?text=Certificate"}),e.url&&(0,s.jsxs)("a",{href:e.url,target:"_blank",className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold",children:[(0,s.jsx)(C,{size:24,className:"mr-2"})," Xem xác thực"]})]}),(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsx)("h3",{className:"font-bold text-slate-900 line-clamp-1",title:e.name,children:e.name}),(0,s.jsx)("p",{className:"text-sm text-slate-500 mt-1",children:e.issuer}),(0,s.jsx)("p",{className:"text-xs text-blue-600 font-medium mt-2 bg-blue-50 inline-block px-2 py-1 rounded",children:e.date})]})]},e.id))}),(0,s.jsx)("h3",{className:"text-2xl font-bold text-slate-900 mb-8 border-l-4 border-purple-600 pl-4",children:"Hoạt động ngoại khóa"}),(0,s.jsx)("div",{className:"space-y-6",children:d.map(e=>(0,s.jsxs)(oD.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"flex flex-col md:flex-row gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-purple-200 transition-colors",children:[(0,s.jsx)("div",{className:"w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden",children:(0,s.jsx)("img",{src:e.image_url,alt:e.name,className:"w-full h-full object-cover hover:scale-110 transition-transform duration-500",onError:e=>e.currentTarget.src="https://placehold.co/300x200?text=Activity"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-xl font-bold text-slate-900",children:e.name}),(0,s.jsxs)("p",{className:"text-purple-700 font-medium text-sm mb-3",children:[e.role," • ",e.date]}),(0,s.jsx)("p",{className:"text-slate-600 leading-relaxed",children:e.description})]})]},e.id))})]})}),(0,s.jsxs)("section",{className:"py-24 px-6 bg-slate-900 text-white relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"}),(0,s.jsxs)("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-6",children:"Sẵn sàng hợp tác?"}),(0,s.jsx)("p",{className:"text-slate-400 mb-10 text-xl max-w-2xl mx-auto",children:"Tôi đang tìm kiếm cơ hội thực tập Backend Developer. Hãy kết nối để cùng nhau tạo ra những sản phẩm giá trị."}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[(0,s.jsxs)("a",{href:`mailto:${l.email}`,className:"px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-2",children:[(0,s.jsx)(v,{size:20})," Gửi Email"]}),(0,s.jsxs)("a",{href:l.linkedin,target:"_blank",className:"px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center gap-2",children:[(0,s.jsx)(k,{size:20})," LinkedIn"]})]})]})]}),(0,s.jsxs)("footer",{className:"py-8 bg-slate-950 text-center text-slate-500 text-sm border-t border-slate-900",children:[(0,s.jsxs)("p",{children:["© 2024 ",l.full_name,". Built with ",(0,s.jsx)("span",{className:"text-white",children:"Next.js"})," & ",(0,s.jsx)("span",{className:"text-white",children:"Tailwind CSS"}),"."]}),e&&(0,s.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-40 animate-bounce",children:(0,s.jsx)(w,{size:24})})]})]})}e.s(["default",()=>uc],31713)}]);