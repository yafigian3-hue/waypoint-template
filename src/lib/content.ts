export const siteContent = {
  nav: {
    logo: "Waypoint",
    links: [
      { label: "Product", href: "#product" },
      { label: "Pricing", href: "#pricing" },
      { label: "Docs", href: "#docs" },
      { label: "Blog", href: "#blog" },
    ],
    ctaLabel: "Start free trial",
  },

  hero: {
    headline:
      "Tahu di mana error Anda terjadi, sebelum user memberi tahu Anda.",
    subheadline:
      "Waypoint melacak setiap error API sampai ke baris kode penyebabnya, lalu memberi tahu tim yang tepat dalam hitungan detik.",
    primaryCta: "Mulai gratis",
    secondaryCta: "Lihat demo",
  },

  logoCloud: {
    label: "Dipercaya oleh tim engineering di",
    logos: ["Northstar", "Vector", "Orbit", "Atlas", "Signal", "Foundry"],
  },

  features: {
    eyebrow: "Built for backend teams",
    headline: "Semua yang tim backend butuhkan untuk berhenti menebak-nebak",
    items: [
      {
        title: "Pelacakan real-time",
        description:
          "Pantau error API saat terjadi tanpa menunggu laporan dari user.",
        icon: "Activity",
      },
      {
        title: "Root cause otomatis",
        description:
          "Temukan baris kode penyebab error tanpa menelusuri log secara manual.",
        icon: "SearchCode",
      },
      {
        title: "Notifikasi tim yang tepat",
        description:
          "Kirim alert ke orang yang bertanggung jawab berdasarkan service dan severity.",
        icon: "BellRing",
      },
      {
        title: "Integrasi Slack & PagerDuty",
        description:
          "Hubungkan alert Waypoint dengan workflow incident response yang sudah digunakan tim.",
        icon: "Plug",
      },
      {
        title: "Riwayat error 90 hari",
        description:
          "Telusuri pola error dan perubahan service dengan riwayat yang lengkap.",
        icon: "History",
      },
      {
        title: "Dashboard per-service",
        description:
          "Lihat kesehatan setiap service dari satu dashboard yang terstruktur.",
        icon: "LayoutDashboard",
      },
    ],
  },

  howItWorks: {
    headline: "Dari error ke root cause dalam tiga langkah",
    steps: [
      {
        title: "Hubungkan Waypoint ke service Anda",
        description:
          "Tambahkan Waypoint ke service backend Anda dan mulai mengirim error secara otomatis.",
      },
      {
        title: "Waypoint memantau tiap request otomatis",
        description:
          "Setiap request dianalisis untuk menemukan error, pola kegagalan, dan konteks teknisnya.",
      },
      {
        title: "Tim Anda dapat notifikasi dengan konteks lengkap",
        description:
          "Saat sesuatu gagal, orang yang tepat menerima alert lengkap dengan root cause dan stack trace.",
      },
    ],
  },

  productPreview: {
    headline: "Lihat apa yang sebenarnya terjadi di production",
    tabs: [
      {
        label: "Error tracking",
        description:
          "Pantau seluruh error API dan lihat service mana yang terdampak secara real-time.",
        image: "/images/error-tracking.webp",
      },
      {
        label: "Root cause",
        description:
          "Telusuri error sampai ke baris kode yang menyebabkan request gagal.",
        image: "/images/root-cause.webp",
      },
      {
        label: "Team alerts",
        description:
          "Pastikan setiap incident sampai ke tim yang tepat dengan konteks yang mereka butuhkan.",
        image: "/images/team-alerts.webp",
      },
    ],
  },

  testimonials: {
    headline: "Dibuat untuk engineer yang tidak punya waktu untuk menebak",
    items: [
      {
        quote:
          "Waypoint memangkas waktu kami mencari penyebab error dari berjam-jam menjadi beberapa menit.",
        name: "Raka Pratama",
        role: "Backend Engineer",
        company: "Northstar Labs",
      },
      {
        quote:
          "Sekarang kami tahu service mana yang bermasalah sebelum customer mulai menghubungi support.",
        name: "Maya Chen",
        role: "Engineering Lead",
        company: "Vector Systems",
      },
      {
        quote:
          "Konteks error yang diberikan Waypoint membuat incident response jauh lebih cepat.",
        name: "Dimas Arya",
        role: "Senior Software Engineer",
        company: "Orbit Cloud",
      },
    ],
  },

  pricing: {
    headline: "Harga sederhana untuk setiap tahap pertumbuhan",
    subheadline:
      "Mulai kecil, lalu naikkan kapasitas ketika traffic production Anda bertambah.",
    tiers: [
      {
        name: "Starter",
        price: "19",
        period: "month",
        description: "Untuk tim kecil yang baru mulai.",
        features: [
          "5.000 error events / bulan",
          "7 hari error history",
          "Basic error tracking",
          "Email alerts",
        ],
        ctaLabel: "Mulai dengan Starter",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "49",
        period: "month",
        description: "Untuk tim yang sudah punya traffic produksi.",
        features: [
          "50.000 error events / bulan",
          "90 hari error history",
          "Automatic root cause",
          "Slack & PagerDuty",
          "Service dashboards",
        ],
        ctaLabel: "Mulai dengan Pro",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Untuk organisasi dengan kebutuhan compliance & SLA.",
        features: [
          "Unlimited error events",
          "Custom data retention",
          "Advanced access control",
          "SLA & priority support",
          "Custom integrations",
        ],
        ctaLabel: "Hubungi kami",
        highlighted: false,
      },
    ],
  },

  faq: {
    headline: "Pertanyaan yang sering ditanyakan",
    items: [
      {
        question: "Apakah Waypoint bisa dipakai tanpa mengubah kode?",
        answer:
          "Waypoint membutuhkan integrasi ringan pada service Anda agar error dan konteks request dapat dikirim ke sistem monitoring.",
      },
      {
        question: "Bagaimana cara kerja root cause otomatis?",
        answer:
          "Waypoint menganalisis stack trace, request context, service, dan pola error untuk membantu mengidentifikasi sumber kegagalan.",
      },
      {
        question: "Apakah ada free trial tanpa kartu kredit?",
        answer:
          "Ya. Anda dapat mencoba Waypoint tanpa memasukkan kartu kredit selama masa trial.",
      },
      {
        question: "Apakah Waypoint hanya untuk API backend?",
        answer:
          "Saat ini Waypoint berfokus pada monitoring API dan service backend. Dukungan untuk jenis monitoring lain sedang dalam roadmap kami.",
      },
      {
        question: "Berapa lama data error disimpan?",
        answer:
          "Retention bergantung pada paket yang Anda gunakan. Paket Pro menyediakan riwayat error hingga 90 hari.",
      },
      {
        question:
          "Apakah Waypoint bisa terhubung dengan workflow incident kami?",
        answer:
          "Ya. Waypoint dirancang untuk terhubung dengan tools seperti Slack dan PagerDuty sehingga alert dapat masuk ke workflow tim Anda.",
      },
    ],
  },

  ctaFinal: {
    headline: "Berhenti menebak. Mulai lacak.",
    subheadline:
      "Temukan penyebab error production sebelum user Anda yang menemukannya.",
    ctaLabel: "Mulai gratis",
  },

  footer: {
    logo: "Waypoint",
    tagline: "Error monitoring yang menunjukkan jalan menuju root cause.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#product" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "#integrations" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Blog", href: "#blog" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#docs" },
          { label: "Changelog", href: "#changelog" },
          { label: "Status", href: "#status" },
        ],
      },
    ],
  },
} as const;
