# Stage 1: Staging (Tự động phát hiện Build Context là repo root hay src/landing_page)
FROM alpine:3.19 AS staging

WORKDIR /staging
COPY . .

RUN mkdir -p /tmp/out && \
    if [ -f "src/landing_page/index.html" ]; then \
        cp -a src/landing_page/. /tmp/out/; \
    elif [ -f "index.html" ]; then \
        cp -a . /tmp/out/; \
    else \
        echo "Error: Không tìm thấy index.html!" && exit 1; \
    fi

# Stage 2: Production Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Xoá trang mặc định của Nginx
RUN rm -rf ./*

# Copy đúng các file static vào Nginx html directory
COPY --from=staging /tmp/out ./

# Mở port 80 cho container
EXPOSE 80

# Khai báo Healthcheck cho Dokploy
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost:80/ > /dev/null || exit 1
