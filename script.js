/* ============================================================================
   PORTOFOLIO RAYYAN — MAHASISWA PENDIDIKAN AGAMA ISLAM
   Seluruh konten pribadi berada di satu tempat: objek `konten` di bawah ini.

   Cara mempersonalisasi:
   1. Isi peran, institusi, domisili, email, dan tautan sosial.
   2. Ganti foto: letakkan berkas (mis. "potret.jpg") di folder yang sama,
      lalu isi profile.foto dengan nama berkasnya. Bila dikosongkan, situs
      menampilkan placeholder yang jelas.
   3. Sesuaikan teks tentang diri, keterampilan, karya, dan pendidikan.
   4. Karya yang ditandai "demo" adalah konsep latihan — hapus tanda itu
      hanya untuk karya yang benar-benar sudah Anda kerjakan.
   ============================================================== */

const konten = {
  /* ----------------------------------------------------------- identitas */
  profile: {
    nama: "Rayyan shalihhamidzic hutagaol",
    peran: "GuruPendidikan Agama Islam",
    pengantar:
      "Menyiapkan diri menjadi pendidik yang terus belajar, membimbing, dan menghadirkan pembelajaran yang bermakna.",
    ketersediaan:
      "Sedang menempuh studi pendidikan · terbuka untuk belajar dan berkolaborasi",
    /* Isi dengan nama berkas, mis. "potret.jpg". Kosongkan bila belum ada. */
    foto: "",
    fotoAlt: "Potret Rayyan, mahasiswa Pendidikan Agama Islam",
    keteranganPotret:
      "Potret — foto asli menyusul. Letakkan berkas foto Anda (mis. potret.jpg) di folder ini, lalu isi profile.foto di script.js.",
    keteranganFoto: "Potret — Rayyan",
  },

  /* ------------------------------------------------------------ tentang */
  tentang: {
    paragraf: [
      "Saya Rayyan, mahasiswa Pendidikan Agama Islam yang sedang mempersiapkan diri menjadi guru. Hari-hari saya diisi perkuliahan, membaca, dan menyusun bahan belajar — bagian yang paling saya tunggu biasanya momen kecil: saat seseorang akhirnya paham setelah sebelumnya bingung.",
      "Di sela perkuliahan, saya melatih keterampilan digital yang kelak berguna di ruang kelas: menyusun dokumen rapi di Microsoft Word, menata data sederhana di Microsoft Excel, dan membuat materi visual lewat Canva. Saya memandangnya sebagai alat bantu, bukan tujuan — cara agar bahan belajar lebih tertata dan lebih mudah dipahami.",
      "Saya juga sadar masih banyak yang harus saya pelajari. Belum banyak pengalaman mengajar yang bisa saya ceritakan, dan saya tidak ingin berpura-pura sebaliknya. Yang bisa saya tawarkan sekarang adalah kemauan untuk terus memperbaiki cara saya belajar dan, kelak, cara saya mengajar.",
    ],
    fakta: [
      { label: "Status", nilai: "Mahasiswa Pendidikan Agama Islam" },
      { label: "Fokus saat ini", nilai: "Persiapan mengajar & literasi digital" },
      { label: "Institusi", nilai: "[Nama universitas / institusi]" },
      { label: "Domisili", nilai: "[Kota, Indonesia]" },
      { label: "Alat sehari-hari", nilai: "Word · Excel · Canva" },
    ],
  },

  /* -------------------------------------------------------- keterampilan */
  keterampilan: [
    {
      nama: "Microsoft Word",
      bidang: "Dokumen & penyusunan naskah",
      ikon: "dokumen",
      detail:
        "Menyiapkan dan memformat dokumen agar terstruktur dan enak dibaca: pengaturan gaya judul, penomoran, tabel, dan tampilan halaman yang rapi.",
      contoh: [
        "Lembar kerja peserta didik",
        "Modul ajar sederhana",
        "Laporan tugas kuliah",
        "Dokumen administrasi kelas",
      ],
    },
    {
      nama: "Microsoft Excel",
      bidang: "Data & administrasi",
      ikon: "tabel",
      detail:
        "Menata informasi menjadi tabel yang mudah dibaca, memakai formula dasar untuk menghitung, dan menjaga data tetap tertib agar cepat diperbarui.",
      contoh: [
        "Rekap nilai siswa",
        "Daftar hadir & kegiatan",
        "Anggaran kegiatan kelas",
        "Inventaris alat peraga",
      ],
    },
    {
      nama: "Canva",
      bidang: "Materi visual & presentasi",
      ikon: "visual",
      detail:
        "Merancang presentasi, poster, dan bahan belajar yang sederhana namun menarik, menjaga keterbacaan teks serta konsistensi tampilan antarhalaman.",
      contoh: [
        "Presentasi pembelajaran",
        "Poster & pengumuman kelas",
        "Kartu materi dan infografis",
        "Slide pertemuan orang tua",
      ],
    },
  ],

  /* ----------------------------------------------------------- portofolio */
  /* Hapus tanda demo hanya untuk karya yang benar-benar sudah dikerjakan. */
  portofolio: [
    {
      judul: "Presentasi Pembelajaran: Mengenal Rukun Islam",
      alat: "Canva",
      demo: true,
      rasio: "16/9",
      deskripsi:
        "Konsep slide untuk satu pertemuan: satu ide per halaman, visual sederhana, dan ruang untuk tanya jawab di akhir.",
      pratinjau: "presentasi",
    },
    {
      judul: "Poster Akhlak: Kejujuran Setiap Hari",
      alat: "Canva",
      demo: true,
      rasio: "3/4",
      deskripsi:
        "Poster pengingat kebiasaan jujur, dibuat agar tetap terbaca dari jarak jauh dan mudah diganti isinya.",
      pratinjau: "poster",
    },
    {
      judul: "Lembar Kerja Peserta Didik: Hadis tentang Kejujuran",
      alat: "Microsoft Word",
      demo: true,
      rasio: "3/4",
      deskripsi:
        "Konsep lembar kerja dengan struktur yang tertata: identitas, instruksi, ruang kerja siswa, dan bagian penilaian diri.",
      pratinjau: "dokumen",
    },
    {
      judul: "Rekap Nilai & Kehadiran Satu Kelas",
      alat: "Microsoft Excel",
      demo: true,
      rasio: "4/3",
      deskripsi:
        "Konsep tabel rekap sederhana untuk mencatat nilai tugas, ulangan, dan kehadiran dalam satu tempat yang mudah diperbarui.",
      pratinjau: "tabel",
    },
  ],

  /* -------------------------------------------------------- nilai (mimpi) */
  nilai: {
    kutipan:
      "Saya ingin menjadi guru yang membuat siswa merasa aman untuk bertanya — sisanya bisa dipelajari bersama.",
    daftar: [
      {
        judul: "Belajar dengan ikhlas",
        teks: "Mendekati ilmu dan proses mengajar sebagai amanah, bukan sekadar formalitas yang harus dilewati.",
      },
      {
        judul: "Meneladankan akhlak",
        teks: "Berusaha jujur, sabar, dan menghormati orang lain — termasuk pada hal-hal yang kecil.",
      },
      {
        judul: "Menjelaskan dengan sederhana",
        teks: "Menyusun materi agar mudah dipahami, bukan agar terdengar rumit.",
      },
      {
        judul: "Teknologi yang tepat guna",
        teks: "Memakai alat digital hanya ketika ia benar-benar membantu proses belajar.",
      },
      {
        judul: "Terus berkembang",
        teks: "Menganggap mengajar sebagai perjalanan belajar yang tidak pernah selesai.",
      },
    ],
  },

  /* --------------------------------------------------------- pendidikan */
  pendidikan: [
    {
      periode: "[20XX — sekarang]",
      instansi: "[Nama universitas / institusi]",
      jurusan: "[Program studi / pendidikan]",
      status: "Mahasiswa aktif — semester [X]. [Tambahkan status studi Anda di sini.]",
    },
    {
      periode: "[20XX]",
      instansi: "[Nama kegiatan, pelatihan, atau organisasi]",
      jurusan: "[Peran atau bidang kegiatan]",
      status: "[Uraian singkat apa yang Anda kerjakan atau pelajari di sini.]",
    },
  ],

  pengembangan: [
    { judul: "[Mata kuliah / pelatihan relevan]", keterangan: "[Penyelenggara] — [Tahun]" },
    { judul: "[Kegiatan organisasi atau pengabdian]", keterangan: "[Peran] — [Tahun]" },
    { judul: "[Buku, kursus mandiri, atau komunitas belajar]", keterangan: "[Catatan singkat]" },
  ],

  /* ------------------------------------------------------------- kontak */
  kontak: {
    ajakan:
      "Baik untuk berdiskusi tentang dunia pendidikan, berbagi bahan belajar, atau sekadar menyapa — saya senang mendengar dari Anda.",
    surel: "[email@anda.com]",
    sosial: [
      { label: "Instagram", url: "" },
      { label: "LinkedIn", url: "" },
      { label: "WhatsApp", url: "" },
    ],
  },
};

/* ============================================================================
   Bagian di bawah ini mengisi halaman dari data di atas.
   Umumnya tidak perlu diubah kecuali Anda menambahkan konten baru.
   ============================================================== */

const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const el = (tag, kelas, teks) => {
  const node = document.createElement(tag);
  if (kelas) node.className = kelas;
  if (teks != null) node.textContent = teks;
  return node;
};

/* ------------------------------------------------------- 1. Bidang teks */
function isiBidangTeks() {
  document.querySelectorAll("[data-field]").forEach((node) => {
    const kunci = node.dataset.field;
    switch (kunci) {
      case "nama":
        node.textContent = konten.profile.nama;
        break;
      case "peran":
        node.textContent = konten.profile.peran;
        break;
      case "pengantar":
        node.textContent = konten.profile.pengantar;
        break;
      case "ketersediaan":
        node.textContent = konten.profile.ketersediaan;
        break;
      case "surel-tautan": {
        const alamat = (konten.kontak.surel || "").trim();
        node.textContent = alamat;
        if (alamat && alamat.includes("@") && !alamat.startsWith("[")) {
          node.href = "mailto:" + alamat;
        } else {
          /* Placeholder: jangan buat tautan mailto yang rusak. */
          node.removeAttribute("href");
          node.setAttribute("role", "text");
        }
        break;
      }
      default:
        break;
    }
  });

  /* Inisial merek & judul halaman */
  const hurufPertama = (konten.profile.nama.match(/[A-Za-zÀ-ÿ]/) || ["N"])[0].toUpperCase();
  document.querySelectorAll("[data-inisial]").forEach((n) => (n.textContent = hurufPertama));
  if (!konten.profile.nama.startsWith("[")) {
    document.title = `${konten.profile.nama} — ${konten.profile.peran}`;
    const metaDesc = document.querySelector('meta[name="author"]');
    if (metaDesc) metaDesc.setAttribute("content", konten.profile.nama);
  }

  document.querySelectorAll("[data-tahun]").forEach(
    (n) => (n.textContent = new Date().getFullYear())
  );
}

/* --------------------------------------------------------------- 2. Foto */
function isiPotret() {
  const wadah = document.querySelector("[data-potret]");
  if (!wadah) return;

  const ket = document.querySelector('[data-field="keterangan-potret"]');
  const setKeterangan = (teks) => {
    if (ket) ket.textContent = teks;
  };

  const buatPlaceholder = () => {
    wadah.replaceChildren();
    const ph = el("div", "potret-placeholder");
    ph.append(
      el("p", "potret-placeholder__atas", "Slot potret"),
      (() => {
        const bawah = el("div", "potret-placeholder__bawah");
        const judul = el("strong", null, "Foto asli Anda di sini");
        const teks = el(
          "span",
          null,
          "Placeholder ini disengaja agar jelas ini bukan foto stok. Letakkan berkas foto, lalu isi profile.foto di script.js."
        );
        bawah.append(judul, teks);
        return bawah;
      })()
    );
    wadah.append(ph);
    setKeterangan(konten.profile.keteranganPotret);
  };

  if (!konten.profile.foto) {
    buatPlaceholder();
    return;
  }

  const img = document.createElement("img");
  img.src = konten.profile.foto;
  img.alt = konten.profile.fotoAlt;
  img.width = 800;
  img.height = 1000;
  img.decoding = "async";
  img.addEventListener("error", buatPlaceholder);
  img.addEventListener("load", () => setKeterangan(konten.profile.keteranganFoto));
  wadah.replaceChildren(img);
  if (img.complete) setKeterangan(konten.profile.keteranganFoto);
}

/* -------------------------------------------------------------- 3. Tentang */
function isiTentang() {
  const naskah = document.querySelector("[data-paragraf-tentang]");
  if (naskah) {
    naskah.replaceChildren(
      ...konten.tentang.paragraf.map((t) => el("p", null, t))
    );
  }

  const dl = document.querySelector("[data-fakta]");
  if (dl) {
    dl.replaceChildren(
      ...konten.tentang.fakta.map((f) => {
        const baris = el("div", "tentang__fakta-baris");
        baris.append(el("dt", null, f.label), el("dd", null, f.nilai));
        return baris;
      })
    );
  }
}

/* -------------------------------------------------------- 4. Keterampilan */
/* Ikon garis kecil agar judul alat punya penanda visual tanpa logo merek. */
const ikonKeterampilan = {
  dokumen:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="3" width="15" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  tabel:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 4.5v15M15 4.5v15"/></svg>',
  visual:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="0.8"/><circle cx="16.5" cy="7.5" r="3.6"/><path d="M7.5 14l3.6 6H3.9z"/><rect x="13.5" y="14" width="7" height="6" rx="1"/></svg>',
};

function isiKeterampilan() {
  const daftar = document.querySelector("[data-keterampilan]");
  if (!daftar) return;

  daftar.replaceChildren(
    ...konten.keterampilan.map((k, i) => {
      const item = el("li", "keterampilan__item reveal");

      const kepala = el("div", "keterampilan__kepala-baris");
      kepala.append(
        el("span", "keterampilan__nomor", String(i + 1).padStart(2, "0")),
        (() => {
          const ikon = el("span", "keterampilan__ikon");
          ikon.innerHTML = ikonKeterampilan[k.ikon] || ikonKeterampilan.dokumen;
          return ikon;
        })(),
        (() => {
          const wrap = el("div", "keterampilan__judul-wrap");
          wrap.append(
            el("h3", "keterampilan__nama", k.nama),
            el("span", "keterampilan__bidang", k.bidang)
          );
          return wrap;
        })()
      );

      const isi = el("div", "keterampilan__isi");
      isi.append(el("p", null, k.detail));
      const contoh = el("ul", "keterampilan__contoh");
      contoh.setAttribute("aria-label", "Contoh penerapan " + k.nama);
      contoh.append(...k.contoh.map((c) => el("li", null, c)));
      isi.append(contoh);

      item.append(kepala, isi);
      return item;
    })
  );
}

/* -------------------------------------------------------- 5. Portofolio */
/* Pratinjau SVG inline: cepat, ringan, dan tidak butuh berkas gambar. */
const pratinjau = {
  presentasi: `
    <svg viewBox="0 0 640 360" role="img" aria-label="Pratinjau slide presentasi: judul Rukun Islam di panel hijau, poin pembelajaran di kanan" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="360" fill="#F3F0E7"/>
      <rect x="0" y="0" width="240" height="360" fill="#555D43"/>
      <text x="36" y="152" font-family="Georgia, serif" font-size="34" fill="#F3F0E7">Rukun</text>
      <text x="36" y="194" font-family="Georgia, serif" font-size="34" fill="#F3F0E7">Islam</text>
      <rect x="36" y="222" width="64" height="3" fill="#A58B67"/>
      <text x="36" y="316" font-family="Helvetica, sans-serif" font-size="12" letter-spacing="3" fill="#E4E0D5">PAI · MATERI PERTEMUAN</text>
      <text x="288" y="96" font-family="Helvetica, sans-serif" font-size="13" letter-spacing="2" fill="#555D43">POIN PEMBELAJARAN</text>
      <rect x="288" y="118" width="300" height="2" fill="#292B25"/>
      <circle cx="296" cy="156" r="4" fill="#A58B67"/>
      <rect x="312" y="152" width="220" height="8" fill="#E4E0D5"/>
      <circle cx="296" cy="196" r="4" fill="#A58B67"/>
      <rect x="312" y="192" width="264" height="8" fill="#E4E0D5"/>
      <circle cx="296" cy="236" r="4" fill="#A58B67"/>
      <rect x="312" y="232" width="188" height="8" fill="#E4E0D5"/>
      <text x="288" y="322" font-family="Georgia, serif" font-style="italic" font-size="15" fill="#555D43">“Bagaimana kita mengamalkannya sehari-hari?”</text>
    </svg>`,
  poster: `
    <svg viewBox="0 0 360 480" role="img" aria-label="Pratinjau poster: judul besar Jujur Setiap Hari dengan pola bintang biru" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="480" fill="#E4E0D5"/>
      <g fill="none" stroke="#A58B67" stroke-width="2" opacity="0.85">
        <rect x="216" y="56" width="118" height="118"/>
        <rect x="216" y="56" width="118" height="118" transform="rotate(45 275 115)"/>
      </g>
      <text x="40" y="132" font-family="Georgia, serif" font-size="46" fill="#292B25">Jujur</text>
      <text x="40" y="180" font-family="Georgia, serif" font-size="46" fill="#292B25">Setiap</text>
      <text x="40" y="228" font-family="Georgia, serif" font-size="46" fill="#555D43">Hari</text>
      <rect x="40" y="256" width="280" height="1" fill="#292B25" opacity="0.5"/>
      <text x="40" y="290" font-family="Helvetica, sans-serif" font-size="13" fill="#292B25">Kebiasaan kecil yang dibiasakan</text>
      <text x="40" y="312" font-family="Helvetica, sans-serif" font-size="13" fill="#292B25">sejak di bangku sekolah.</text>
      <rect x="40" y="348" width="122" height="36" fill="#555D43"/>
      <text x="58" y="371" font-family="Helvetica, sans-serif" font-size="12" letter-spacing="2" fill="#F3F0E7">AKHLAK</text>
      <text x="40" y="440" font-family="Helvetica, sans-serif" font-size="11" letter-spacing="3" fill="#555D43">POSTER PEMBELAJARAN PAI</text>
    </svg>`,
  dokumen: `
    <svg viewBox="0 0 360 480" role="img" aria-label="Pratinjau lembar kerja: kop dokumen, instruksi, tabel, dan ruang jawab" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="480" fill="#E4E0D5"/>
      <rect x="30" y="30" width="300" height="420" fill="#FFFFFF" stroke="#A58B67"/>
      <text x="54" y="76" font-family="Helvetica, sans-serif" font-size="10" letter-spacing="3" fill="#555D43">LEMBAR KERJA PESERTA DIDIK</text>
      <text x="54" y="112" font-family="Georgia, serif" font-size="21" fill="#292B25">Hadis tentang Kejujuran</text>
      <rect x="54" y="128" width="252" height="1" fill="#292B25"/>
      <text x="54" y="156" font-family="Helvetica, sans-serif" font-size="11" fill="#54574B">Nama: ..................  Kelas: .......</text>
      <text x="54" y="190" font-family="Helvetica, sans-serif" font-size="11" fill="#65675A">1. Bacalah teks berikut dengan saksama.</text>
      <rect x="54" y="204" width="252" height="7" fill="#E8E4D9"/>
      <rect x="54" y="218" width="252" height="7" fill="#E8E4D9"/>
      <rect x="54" y="232" width="196" height="7" fill="#E8E4D9"/>
      <rect x="54" y="262" width="252" height="58" fill="none" stroke="#A58B67"/>
      <line x1="54" y1="291" x2="306" y2="291" stroke="#A58B67"/>
      <line x1="136" y1="262" x2="136" y2="320" stroke="#A58B67"/>
      <text x="62" y="282" font-family="Helvetica, sans-serif" font-size="10" fill="#54574B">Urutan</text>
      <text x="144" y="282" font-family="Helvetica, sans-serif" font-size="10" fill="#54574B">Jawaban Anda</text>
      <text x="54" y="348" font-family="Helvetica, sans-serif" font-size="11" fill="#65675A">2. Tuliskan penilaian dirimu:</text>
      <rect x="54" y="362" width="10" height="10" fill="none" stroke="#555D43"/>
      <rect x="54" y="384" width="10" height="10" fill="none" stroke="#555D43"/>
      <rect x="54" y="406" width="10" height="10" fill="none" stroke="#555D43"/>
      <text x="74" y="371" font-family="Helvetica, sans-serif" font-size="10" fill="#54574B">Saya paham</text>
      <text x="74" y="393" font-family="Helvetica, sans-serif" font-size="10" fill="#54574B">Sebagian paham</text>
      <text x="74" y="415" font-family="Helvetica, sans-serif" font-size="10" fill="#54574B">Perlu penjelasan lagi</text>
    </svg>`,
  tabel: `
    <svg viewBox="0 0 480 360" role="img" aria-label="Pratinjau tabel rekap nilai dan kehadiran di Excel" xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="360" fill="#E4E0D5"/>
      <rect x="28" y="28" width="424" height="304" fill="#F3F0E7" stroke="#A58B67"/>
      <rect x="28" y="28" width="424" height="34" fill="#555D43"/>
      <text x="46" y="50" font-family="Helvetica, sans-serif" font-size="11" letter-spacing="2" fill="#F3F0E7">REKAP NILAI &amp; KEHADIRAN</text>
      <g font-family="Helvetica, sans-serif" font-size="10" fill="#54574B">
        <rect x="28" y="62" width="424" height="26" fill="#E4E0D5"/>
        <text x="46" y="79">No</text>
        <text x="88" y="79">Nama</text>
        <text x="248" y="79">Tugas</text>
        <text x="312" y="79">Ulangan</text>
        <text x="384" y="79">Hadir</text>
        <g stroke="#DAD5C7">
          <line x1="28" y1="88" x2="452" y2="88"/>
          <line x1="28" y1="122" x2="452" y2="122"/>
          <line x1="28" y1="156" x2="452" y2="156"/>
          <line x1="28" y1="190" x2="452" y2="190"/>
          <line x1="28" y1="224" x2="452" y2="224"/>
          <line x1="28" y1="258" x2="452" y2="258"/>
          <line x1="72" y1="62" x2="72" y2="332"/>
          <line x1="232" y1="62" x2="232" y2="332"/>
          <line x1="296" y1="62" x2="296" y2="332"/>
          <line x1="368" y1="62" x2="368" y2="332"/>
        </g>
        <text x="46" y="109">1</text><text x="88" y="109">Siswa A</text><text x="252" y="109">84</text><text x="318" y="109">78</text><text x="392" y="109">12/13</text>
        <text x="46" y="143">2</text><text x="88" y="143">Siswa B</text><text x="252" y="143">90</text><text x="318" y="143">85</text><text x="392" y="143">13/13</text>
        <text x="46" y="177">3</text><text x="88" y="177">Siswa C</text><text x="252" y="177">72</text><text x="318" y="177">80</text><text x="392" y="177">11/13</text>
        <text x="46" y="211">4</text><text x="88" y="211">Siswa D</text><text x="252" y="211">88</text><text x="318" y="211">92</text><text x="392" y="211">13/13</text>
        <text x="46" y="245">5</text><text x="88" y="245">Siswa E</text><text x="252" y="245">76</text><text x="318" y="245">74</text><text x="392" y="245">10/13</text>
        <rect x="28" y="258" width="424" height="26" fill="#E4E0D5"/>
        <text x="88" y="275">Rata-rata kelas</text>
        <text x="252" y="275" fill="#555D43">82</text>
        <text x="318" y="275" fill="#555D43">81,8</text>
        <text x="392" y="275" fill="#555D43">11,8</text>
        <text x="46" y="312" font-size="9" fill="#65675A">Formula: =RATA-RATA(C2:C6) · Data contoh, bukan data siswa sungguhan</text>
      </g>
    </svg>`,
};

function isiPortofolio() {
  const daftar = document.querySelector("[data-karya]");
  if (!daftar) return;

  daftar.replaceChildren(
    ...konten.portofolio.map((k, i) => {
      const item = el("article", "karya__item reveal");

      const pratinjauWrap = el("div", "karya__pratinjau");
      pratinjauWrap.style.aspectRatio = k.rasio;
      /* Pratinjau potret dibatasi lebarnya agar tidak mendominasi kolom. */
      if (k.rasio === "3/4") pratinjauWrap.classList.add("karya__pratinjau--potret");
      pratinjauWrap.innerHTML = pratinjau[k.pratinjau] || "";

      const ket = el("div", "karya__keterangan");
      const label = el("p", "karya__label");
      label.append(
        el("span", "karya__nomor", String(i + 1).padStart(2, "0")),
        el("span", null, k.alat)
      );
      if (k.demo) label.append(el("span", "karya__demo", "Konsep demo"));
      ket.append(label, el("h3", "karya__judul", k.judul), el("p", "karya__deskripsi", k.deskripsi));

      item.append(pratinjauWrap, ket);
      return item;
    })
  );
}

/* ----------------------------------------------------------- 6. Nilai */
function isiNilai() {
  const kutipan = document.querySelector("[data-kutipan]");
  if (kutipan) kutipan.textContent = konten.nilai.kutipan;

  const daftar = document.querySelector("[data-nilai]");
  if (daftar) {
    daftar.replaceChildren(
      ...konten.nilai.daftar.map((n, i) => {
        const item = el("li", "nilai__item reveal");
        item.append(el("span", "nilai__nomor", String(i + 1).padStart(2, "0")));
        const isi = el("div", "nilai__isi");
        isi.append(el("h3", null, n.judul), el("p", null, n.teks));
        item.append(isi);
        return item;
      })
    );
  }
}

/* -------------------------------------------------------- 7. Pendidikan */
function isiPendidikan() {
  const daftar = document.querySelector("[data-pendidikan]");
  if (daftar) {
    daftar.replaceChildren(
      ...konten.pendidikan.map((p) => {
        const item = el("li", "pendidikan__item reveal");
        const isi = el("div");
        isi.append(
          el("h3", "pendidikan__instansi", p.instansi),
          el("p", "pendidikan__jurusan", p.jurusan),
          el("p", "pendidikan__status", p.status)
        );
        item.append(el("p", "pendidikan__periode", p.periode), isi);
        return item;
      })
    );
  }

  const pengembangan = document.querySelector("[data-pengembangan]");
  if (pengembangan) {
    pengembangan.replaceChildren(
      ...konten.pengembangan.map((d) => {
        const item = el("li", "reveal");
        const isi = el("div");
        isi.append(el("p", null, d.judul), el("span", null, d.keterangan));
        item.append(isi);
        return item;
      })
    );
  }
}

/* ------------------------------------------------------------ 8. Kontak */
function isiKontak() {
  const ajakan = document.querySelector("[data-ajakan]");
  if (ajakan) ajakan.textContent = konten.kontak.ajakan;

  const sosial = document.querySelector("[data-sosial]");
  if (sosial) {
    sosial.replaceChildren(
      ...konten.kontak.sosial.map((s) => {
        if (s.url && s.url.trim() && !s.url.startsWith("[")) {
          const a = el("a", null, s.label);
          a.href = s.url;
          a.rel = "noopener";
          if (/^(https?:|mailto:|tel:)/.test(s.url)) a.target = "_blank";
          return a;
          /* Catatan: tautan mailto/tel tidak perlu tab baru. */
        }
        const span = el("span", "belum-diisi", `${s.label} — tautan belum diisi`);
        return span;
      })
    );
  }
}

/* -------------------------------------------------------- 9. Animasi masuk */
function pasangReveal() {
  const elemen = Array.from(document.querySelectorAll(".reveal"));
  if (REDUCE_MOTION) {
    elemen.forEach((e) => e.classList.add("isi-terlihat"));
    return;
  }

  /* Jeda bertahap dalam satu bagian, dibatasi agar tidak terasa lambat. */
  const bagianTerakhir = new Map();
  elemen.forEach((e) => {
    const bagian = e.closest("section") || document.body;
    const urutan = bagianTerakhir.get(bagian) || 0;
    e.style.setProperty("--jeda", Math.min(urutan * 90, 360) + "ms");
    bagianTerakhir.set(bagian, urutan + 1);
  });

  /* Penyapuan berbasis posisi: setiap elemen yang sudah berada di atas
     garis bawah viewport langsung ditampilkan. Berbeda dari pengamat
     persilangan, cara ini tetap andal saat pengguna melompati bagian
     halaman (seret scrollbar, tombol End, atau tautan jangkar).

   Penyapuan berjalan langsung dari event gulir DAN dari penghitung waktu
     kecil sebagai jaring pengaman — agar konten tidak pernah tersangkut
     tersembunyi hanya karena satu event tidak sempat terkirim. Penghitung
     berhenti sendiri begitu seluruh elemen tampil. */
  let sisa = elemen;
  let pengawas = 0;

  function berhenti() {
    window.removeEventListener("scroll", sapu);
    window.removeEventListener("resize", sapu);
    if (pengawas) {
      clearInterval(pengawas);
      pengawas = 0;
    }
  }

  function sapu() {
    const batas = window.innerHeight * 0.94;
    sisa = sisa.filter((e) => {
      if (e.getBoundingClientRect().top < batas) {
        e.classList.add("isi-terlihat");
        return false;
      }
      return true;
    });
    if (sisa.length === 0) berhenti();
  }

  window.addEventListener("scroll", sapu, { passive: true });
  window.addEventListener("resize", sapu);
  pengawas = setInterval(sapu, 200);
  sapu();
}

/* ------------------------------------------- 10. Menu seluler & kepala situs */
function pasangMenu() {
  const kepala = document.querySelector(".kepala");
  const tombol = document.querySelector(".kepala__tombol");
  if (!kepala || !tombol) return;

  const nav = document.getElementById(tombol.getAttribute("aria-controls"));
  const teksMenu = tombol.querySelector("[data-teks-menu]");
  if (!nav) return;

  const atur = (buka) => {
    kepala.classList.toggle("is-menu-buka", buka);
    tombol.setAttribute("aria-expanded", String(buka));
    if (teksMenu) teksMenu.textContent = buka ? "Tutup menu" : "Buka menu";
  };

  tombol.addEventListener("click", () => {
    atur(!kepala.classList.contains("is-menu-buka"));
  });

  /* Tutup menu ketika salah satu tautan dipilih. */
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) atur(false);
  });

  /* Tutup dengan Escape dan kembalikan fokus ke tombol. */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && kepala.classList.contains("is-menu-buka")) {
      atur(false);
      tombol.focus();
    }
  });

  /* Kembali ke tata letak desktop tanpa menyisakan state menu terbuka. */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) atur(false);
  });
}

function pasangNavigasi() {
  const kepala = document.querySelector(".kepala");
  const tautanNav = Array.from(document.querySelectorAll(".kepala__nav a"));

  const onScroll = () => {
    if (kepala) kepala.classList.toggle("is-tergulir", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Tandai bagian yang sedang dibaca. */
  if ("IntersectionObserver" in window) {
    const peta = new Map(tautanNav.map((a) => [a.getAttribute("href").slice(1), a]));
    const pengamat = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tautanNav.forEach((a) => a.removeAttribute("aria-current"));
          const a = peta.get(entry.target.id);
          if (a) a.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => pengamat.observe(s));
  }

  /* Perilaku gulir halus dengan penghormatan pada preferensi gerak minimal. */
  if (REDUCE_MOTION) document.documentElement.style.scrollBehavior = "auto";
}

/* ------------------------------------------------------------------ mulai */
isiBidangTeks();
isiPotret();
isiTentang();
isiKeterampilan();
isiPortofolio();
isiNilai();
isiPendidikan();
isiKontak();
pasangReveal();
pasangMenu();
pasangNavigasi();
