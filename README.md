# Gudang Sparepart — PT. Tigermandiri Pratama

Sistem keluar masuk barang gudang sparepart berbasis web.

## Setup

### 1. Supabase
1. Buka project Supabase kamu
2. Masuk ke SQL Editor
3. Jalankan isi file `supabase_schema.sql`
4. Pastikan email confirmation **dimatikan**: Authentication > Providers > Email > uncheck "Confirm email"

### 2. Buat akun PJ Gudang
Di Supabase Dashboard > Authentication > Users > Add user:
- Email: `namapj@gudang.tigermandiri` (format ini yang dipakai untuk login)
- Password: terserah

Contoh: username `pak_budi` → email `pak_budi@gudang.tigermandiri`

### 3. Konfigurasi
Edit file `js/config.js`:
```js
const SUPABASE_URL = 'https://XXXXX.supabase.co'
const SUPABASE_ANON_KEY = 'eyJxxxx...'
```

Ambil dari Supabase > Project Settings > API.

### 4. Deploy ke GitHub Pages
1. Push semua file ke repo GitHub
2. Settings > Pages > Deploy from branch > main

## Struktur File
```
index.html          → Halaman utama (pilih nama / login PJ)
pengambilan.html    → Form pengambilan barang (user lapangan)
dashboard.html      → Dashboard PJ Gudang
js/config.js        → Konfigurasi Supabase
supabase_schema.sql → Schema database
```

## Fitur
- User lapangan: klik nama → form pengambilan multi-item dengan filter per kategori
- PJ Gudang: approve/reject request, input barang masuk, kelola master data, laporan
- Import CSV barang (format: nama_barang, kategori, satuan, stok)
- Stok otomatis update saat approve
- Kategori auto-create saat import CSV
