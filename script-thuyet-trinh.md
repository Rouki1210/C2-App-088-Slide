# Kịch bản thuyết trình — Aurelia Concierge (C2-App-088)

> Bản ngắn gọn theo từng slide, giọng phù hợp ban giám khảo cuộc thi.
> Tổng thời lượng ~5 phút. Đọc chậm 3 con số **10 giây / 55% / 621**; slide 8 lướt nhanh; dồn năng lượng vào slide 9 (Demo) và slide 10 (Giá trị).
> *Câu in nghiêng đầu mỗi slide là câu nối chuyển ý — vẫn nói ra, giúp bài liền mạch.*

---

## SLIDE 1 — Aurelia Concierge *(~18s)*

Kính chào ban giám khảo. **9 giờ tối**, một vị khách đang trong phòng có vài việc cần lo: muốn **đặt bàn ăn tối, hỏi giờ mở cửa hồ bơi, và xin thêm khăn**. Nhưng khách ngại gọi trực tiếp cho lễ tân — mà đường dây lúc này cũng đang bận, vì nhân viên còn phục vụ hàng loạt khách khác.

Chỉ với một tin nhắn, **Aurelia — trợ lý AI 24/7 cho khu nghỉ dưỡng** — xử lý cả ba yêu cầu đó ngay lập tức, và tự động báo cho nhân viên phần cần con người.

## SLIDE 2 — Vấn đề *(~30s)*

*Nhưng để thấy vì sao khoảnh khắc đó lại khó, hãy nhìn vào bài toán vận hành của resort.*

Vận hành resort có ba nỗi đau: **quá tải** giờ cao điểm vì hàng trăm câu hỏi lặp lại; **trải nghiệm thiếu nhất quán** — khách quay lại là bắt đầu lại từ đầu; và **phản ứng chậm** — resort chỉ biết khách không hài lòng khi đã nhận review xấu. Nói ngắn gọn: nhiều kênh, ít ngữ cảnh, khó ưu tiên.

## SLIDE 3 — Giải pháp *(~30s)*

*Vậy Aurelia giải quyết ba nỗi đau đó bằng cách nào?*

Aurelia là lớp AI đặt giữa khách và đội vận hành. Khách nhắn tin tự nhiên, AI hiểu ý định, tạo bản xem trước để khách xác nhận, rồi **thực thi ngay**: đặt bàn, tạo ticket, cảnh báo nhân viên. Khác biệt nằm ở chữ *thực thi* — đa số chatbot chỉ trả lời, còn Aurelia **hành động ngay trong hội thoại**.

## SLIDE 4 — Cơ hội thị trường *(~25s)*

*Và đây không phải giải pháp cho một thị trường nhỏ.*

Thị trường AI lưu trú toàn cầu đạt **26,5 tỷ đô năm 2026**. Điểm vào của tụi em là khách sạn 4–5 sao Việt Nam: **621 cơ sở, gần 140.000 phòng** theo số liệu Cục Du lịch. Đúng lúc du lịch Việt phục hồi kỷ lục với 21 triệu lượt khách quốc tế — thời điểm không thể hợp hơn.

## SLIDE 5 — Ba nhóm người dùng *(~20s)*

*Vậy cụ thể, sản phẩm phục vụ những ai?*

Một hệ thống, phục vụ ba vai trò: **khách** chat để được phục vụ; **nhân viên** có dashboard điều phối; và **quản lý** nắm bức tranh vận hành realtime. Giao diện và quyền thao tác tách riêng theo từng vai trò.

## SLIDE 6 — Kiến trúc *(~25s)*

*Để làm được điều đó, bên dưới là gì?*

Về mặt kỹ thuật: frontend React, backend FastAPI, agent chạy trên **LangGraph**, dữ liệu trên PostgreSQL và Qdrant cho RAG. Hai thành phần tạo khác biệt là **Memory** — nhớ khách qua nhiều lần lưu trú, và **Realtime Manager** — đẩy cập nhật tức thì cho nhân viên.

## SLIDE 7 — AI Agent *(~25s)*

*Và trái tim của kiến trúc này chính là AI Agent.*

Agent có bộ **sáu công cụ**: tra cứu thông tin, tạo yêu cầu dịch vụ, đề xuất đặt chỗ, kiểm tra tình trạng, theo dõi và chuyển tiếp cho nhân viên. Quan trọng: mọi hành động ảnh hưởng dịch vụ đều **chờ khách xác nhận** — AI nhanh, nhưng con người luôn nắm quyền.

## SLIDE 8 — Tech Stack *(~15s — lướt nhanh)*

*Tất cả chạy trên một nền tảng công nghệ vững và production-ready.*

LangGraph, FastAPI, PostgreSQL, Qdrant, và Mem0 cho cá nhân hóa. Em xin phép không đi sâu để dành thời gian cho phần demo.

## SLIDE 9 — Demo *(~40s — phần quan trọng nhất)*

*Nói thì có phần trừu tượng — vậy hãy quay lại đúng vị khách lúc 9 giờ tối ban đầu, và xem Aurelia hoạt động thật.*

Đây là kịch bản thật. Một khách quen quay lại — Aurelia **chào đúng tên và nhớ anh thích phòng yên tĩnh, thích bơi buổi sáng**. Khách hỏi đặt bàn và xin thêm khăn; AI tạo ngay preview đặt bàn cùng housekeeping ticket. Và khi có rủi ro trễ hạn, hệ thống **tự động cảnh báo SLA** đẩy sang nhân viên. Một tin nhắn — ba luồng xử lý song song.

## SLIDE 10 — Giá trị tạo ra *(~25s)*

*Từ kịch bản đó, giá trị đo được là gì?*

Kết quả bước đầu rất rõ: thời gian phản hồi giảm từ ~8 phút xuống **hơn 10 giây**; hiện đã **tự động hóa 55%** yêu cầu và đang tăng khi mở rộng dữ liệu; tiết kiệm **80–100 giờ** nhân viên mỗi tháng. Giảm tải, tăng tốc, và cá nhân hóa — cùng lúc.

## SLIDE 11 — Khác biệt cạnh tranh *(~25s)*

*Vậy điều gì khiến Aurelia khác biệt so với các giải pháp đang có?*

So với chatbot thông thường: họ chỉ trả lời — tụi em **thực thi ngay**. Họ không nhớ khách — tụi em có **Memory xuyên nhiều lần lưu trú**. Họ để nhân viên tự xoay — tụi em có **dashboard realtime kèm cảnh báo SLA**. Và tụi em giữ **con người trong vòng kiểm soát**.

## SLIDE 12 — Lộ trình *(~20s)*

*Và tụi em sẽ đi tiếp như thế nào?*

Lộ trình bốn giai đoạn: hoàn thiện lõi concierge, mở rộng công cụ cho nhân viên, đào sâu cá nhân hóa, và triển khai **pilot tại resort thật** để đo lường và tinh chỉnh.

## SLIDE 13 — Đội ngũ *(~15s)*

*Đằng sau lộ trình đó là con người.*

Aurelia được xây bởi một đội ngũ phủ đủ ba mảng: AI & backend, frontend, và hạ tầng — đến từ AI20K Build Cohort 2.

## SLIDE 14 — Lời kêu gọi *(~20s)*

*Và cuối cùng, đây là điều tụi em mong muốn.*

Tụi em đang tìm **resort pilot**, **cố vấn vận hành khách sạn**, và hỗ trợ kỹ thuật để đưa sản phẩm ra thực tế. Sản phẩm đã chạy được, mời ban giám khảo trải nghiệm tại link demo. Nhóm em xin sẵn sàng cho phần hỏi đáp. Em cảm ơn ban giám khảo!

---

## Ghi chú khi trình bày

- **Nhấn giọng** vào các từ khóa: *thực thi · trí nhớ · realtime · con người nắm quyền*.
- Đọc **chậm lại** ở 3 con số: **10 giây / 55% / 621** để giám khảo kịp thấm.
- **Câu in nghiêng** đầu mỗi slide là câu nối — nói ra để bài liền mạch, nhưng giữ nhịp nhanh, đừng dừng lâu.
- Nếu bị hỏi *"55% có thấp không?"* → trả lời tự tin: *"Đó là số thật hiện tại, đang mở rộng RAG, lộ trình lên ~72%."*
- Slide 8 (Tech Stack): lướt nhanh, không đọc từng dòng.
- Dồn năng lượng và ánh mắt vào ban giám khảo ở slide 9 (Demo) và slide 10 (Giá trị).
- **Callback:** hook slide 1 (khách 9 giờ tối) được gọi lại ở slide 9 — nhấn sự liên kết này để bài có mở–đóng trọn vẹn.
