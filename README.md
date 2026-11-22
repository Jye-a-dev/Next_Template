# Next_Template (Production-Ready)

Repository template Next.js App Router hiện đại, được tối ưu hóa cho cả làm việc độc lập (**Solo**) và theo nhóm (**Team**). Kiến trúc phân tầng rõ ràng (Feature-Based Hybrid), quản lý biến môi trường an toàn, thiết lập sẵn Port 5000 qua `.env`, cùng hệ thống guardrails chất lượng code tự động.

---

## Tech Stack

| Thư viện / Công cụ         | Phiên bản            | Mô tả                                                              |
| :------------------------- | :------------------- | :----------------------------------------------------------------- |
| **Next.js**                | `16.4.6`             | App Router, React Server Components (RSC), Turbopack               |
| **React** & **React DOM**  | `19.3.0`             | React 19 stable                                                    |
| **TypeScript**             | `^5`                 | Type-safety toàn diện                                              |
| **Tailwind CSS**           | `4.3.3`              | Tailwind v4 với CSS-first configuration (`@import "tailwindcss";`) |
| **@tanstack/react-query**  | `^5.108.2`           | Quản lý asynchronous server state & caching                        |
| **Zustand**                | `^5.1.0`             | Global client state siêu nhẹ, không boilerplate                    |
| **Zod**                    | `^4.6.7`             | Schema validation cho runtime env và forms                         |
| **Axios**                  | `^1.21.1`            | HTTP client kèm interceptors cấu hình sẵn                          |
| **Lucide React**           | `^1.77.0`            | Bộ icon SVG tối ưu                                                 |
| **ESLint** & **Prettier**  | `^9` / `^3.10.1`     | Linter Flat Config & Formatter kèm Tailwind class sorting          |
| **Husky** & **Commitlint** | `^9.1.7` / `^21.2.4` | Git hooks kiểm soát Conventional Commits & Lint-staged             |

---

## Yêu cầu Hệ thống

- **Node.js:** Phiên bản `>= 20.x` (Khuyến nghị `22.x` theo file `.nvmrc`)
- **Package Manager:** `npm` (hoặc `pnpm` / `yarn`)

---

## Hướng dẫn Quick Start

Chỉ với 4 bước đơn giản để khởi chạy dự án:

```bash
# 1. Clone repository
git clone <repository-url> next_template
cd next_template

# 2. Tạo file cấu hình môi trường từ template
cp .env.example .env

# 3. Cài đặt các dependencies
npm install

# 4. Chạy môi trường phát triển (Mặc định tự động nhận Port 5000)
npm run dev
```

Mở trình duyệt tại: [http://localhost:5000](http://localhost:5000)

---

## Cấu hình Biến Môi trường (.env)

Dự án được cấu hình để Next.js tự động đọc biến `PORT` từ file `.env` mà không cần hardcode cờ `-p` trong script `package.json`.

```env
# Port chạy ứng dụng (áp dụng cho cả `npm run dev` và `npm run start`)
PORT=5000

# URL ứng dụng client
NEXT_PUBLIC_APP_URL=http://localhost:5000

# Base URL của Backend API (dùng cho Axios instance)
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

> **Ghi chú về bảo mật:** File `.env` và các biến thể local đã được đưa vào `.gitignore`. File `.env.example` được lưu trên Git làm mẫu tham chiếu cho toàn team. Toàn bộ biến môi trường được validate runtime tại `src/config/env.ts` bằng Zod.

---

## Cấu trúc Thư mục & Nguyên tắc Phân chia Code

Dự án áp dụng mô hình **App Router + Feature-Based Hybrid**:

```plaintext
src/
├── app/                        # Routing & Layouts (Giữ mỏng, không chứa business logic)
│   ├── (auth)/                 # Route group xác thực (login, register...)
│   │   └── login/page.tsx
│   ├── (dashboard)/            # Route group trang quản trị / nghiệp vụ chính
│   │   └── dashboard/page.tsx
│   ├── api/                    # Route Handlers / Backend-For-Frontend (BFF)
│   │   └── health/route.ts
│   ├── globals.css             # Tailwind v4 import & theme variables
│   ├── layout.tsx              # Root Server Component Layout (bọc QueryProvider)
│   ├── page.tsx                # Landing page mẫu
│   ├── loading.tsx             # Global loading boundary
│   ├── error.tsx               # Global error boundary ('use client')
│   └── not-found.tsx           # Global 404 page
├── components/
│   └── ui/                     # UI components nguyên tử dùng chung (Button, Input, Modal...)
├── config/
│   └── env.ts                  # Zod schema validation cho biến môi trường (Server + Client)
├── features/                   # Mô hình Feature-based (Mỗi module nghiệp vụ nằm trọn trong 1 thư mục)
│   └── example/
│       ├── actions/            # Server Actions ('use server')
│       ├── api/                # API fetchers & Axios endpoints
│       ├── components/         # Component riêng của feature này
│       ├── hooks/              # Custom hooks riêng của feature ('use client')
│       ├── schemas/            # Zod validation schemas
│       └── types/              # TypeScript types / interfaces riêng
├── hooks/                      # Custom hooks dùng chung toàn app (useDebounce...)
├── lib/
│   ├── axios.ts                # Axios instance với base config & interceptors
│   └── queryClient.ts          # TanStack Query client factory (Server + Browser safe)
├── providers/
│   └── QueryProvider.tsx       # Client provider bọc QueryClientProvider
├── stores/                     # Zustand global store
├── types/                      # TypeScript definitions dùng chung
└── utils/
    └── cn.ts                   # Helper merge Tailwind class (clsx + tailwind-merge)
```

### Nguyên tắc Đặt Code:

1. **`src/app/`**: Chỉ định nghĩa route, metadata, server layout, boundary (`loading`, `error`, `not-found`). Tuyệt đối không viết logic xử lý dữ liệu phức tạp tại đây.
2. **`src/features/<feature>/`**: Mọi nghiệp vụ liên quan đến module (ví dụ: `auth`, `products`, `orders`) gom toàn bộ vào đây. Các lập trình viên trong team có thể làm việc song song mà không sợ xung đột mã nguồn.
3. **`src/components/ui/`**: Chỉ chứa các UI primitives không gắn liền với logic nghiệp vụ cụ thể.

---

## Danh sách NPM Scripts

| Script               | Lệnh                 | Mục đích                                                          |
| :------------------- | :------------------- | :---------------------------------------------------------------- |
| `npm run dev`        | `next dev`           | Khởi chạy local dev server trên cổng quy định trong `.env` (5000) |
| `npm run build`      | `next build`         | Kiểm tra và build production bundle                               |
| `npm run start`      | `next start`         | Khởi chạy production server trên cổng quy định trong `.env`       |
| `npm run lint`       | `eslint`             | Kiểm tra linting với ESLint v9 Flat Config                        |
| `npm run type-check` | `tsc --noEmit`       | Kiểm tra toàn bộ types TypeScript mà không sinh file              |
| `npm run format`     | `prettier --write .` | Format toàn bộ mã nguồn và tự động sắp xếp class Tailwind         |

---

## Quy ước Git Commit (Conventional Commits)

Repository được cài đặt sẵn Husky v9 và Commitlint để tự động chuẩn hóa commit message:

```plaintext
<type>(<scope>): <mô tả ngắn gọn>
```

- **`feat:`** Thêm tính năng mới (ví dụ: `feat(auth): implement jwt refresh token flow`)
- **`fix:`** Sửa lỗi (ví dụ: `fix(dashboard): correct layout shift on mobile view`)
- **`refactor:`** Tái cấu trúc mã nguồn không làm thay đổi tính năng
- **`chore:`** Thay đổi cấu hình, dependencies, tooling
- **`docs:`** Cập nhật tài liệu, README
- **`style:`** Định dạng code, dấu chấm phẩy, khoảng trắng

Khi chạy `git commit`, hook `pre-commit` sẽ kích hoạt **lint-staged** để tự động chạy ESLint và Prettier trên các file staged; sau đó hook `commit-msg` sẽ kiểm tra cú pháp commit message.
