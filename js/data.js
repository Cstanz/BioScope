const BIOSCOPE_DATA = {
  "kingdoms": {
    "monera": {
      "name": "Monera",
      "eyebrow": "Kingdom 01",
      "embedUrl": "https://sketchfab.com/models/42439edc90cd4d87b8ae322a4dcee8de/embed?autostart=1&",
      
      // Teks pengantar ringkas di atas 3D
      "summary": "Selamat datang di materi Monera. Putar dan perbesar model 3D di samping untuk melihat bagian-bagian sel prokariotik secara detail.",
      
      // Teks lengkap khusus untuk Overview bawah
      "overview": "Monera adalah kelompok organisme yang seluruh anggotanya bersifat prokariotik — sel-selnya tidak memiliki membran inti sejati. Konsep ini pertama kali diperkenalkan oleh Robert H. Whittaker pada tahun 1969 (sistem 5 kingdom). Namun, penelitian lanjutan oleh Carl Woese (1977 & 1990) menunjukkan bahwa Monera terdiri dari dua kelompok yang secara evolusi sangat berbeda: Eubacteria (bakteri sejati) dan Archaebacteria (bakteri purba).",
      
      "chars": [
        "<strong>Organisasi Prokariotik Murni:</strong> Sel tidak memiliki membran inti sejati (nucleus), melainkan wilayah nukleoid sirkular bebas. Ketiadaan organel bermembran membuat seluruh aktivitas transkripsi dan translasi terjadi secara simultan di sitoplasma.",
        "<strong>Diferensiasi Dinding Sel:</strong> Komposisi biokimia dinding sel sangat bervariasi; Eubacteria kaya akan peptidoglikan yang rentan terhadap antibiotik beta-laktam, sementara Archaea menggunakan pseudomurein atau protein kompleks yang kebal.",
        "<strong>Arsitektur Membran Sel:</strong> Membran plasma Eubacteria tersusun dari ikatan ester dengan rantai asam lemak lurus, kontras tajam dengan Archaea yang menggunakan ikatan eter rantai isoprenoid bercabang untuk bertahan di suhu ekstrem.",
        "<strong>Mesin Genetik & Translasi:</strong> Proses sintesis protein pada Eubacteria diawali oleh asam amino khusus berupa formilmetionin (fMet), sedangkan Archaea menggunakan metionin murni, menunjukkan kedekatan evolusioner unik dengan domain Eukarya."
      ],
      "criteria": [
        "<strong>Filogeni Molekuler (rRNA 16S):</strong> Klasifikasi modern sepenuhnya meninggalkan morfologi luar dan beralih pada perbandingan sekuens basa RNA ribosom 16S untuk melacak jarak kekerabatan evolusi yang akurat.",
        "<strong>Profil Biokimiawi & Lipid:</strong> Pengelompokan didasarkan pada cetak biru biokimia fundamental, khususnya struktur kimia penyusun membran lipid dan kerentanan terhadap agen antimikroba.",
        "<strong>Diversitas Jalur Metabolik:</strong> Klasifikasi mencakup spektrum luas cara memperoleh energi—mulai dari fotoautotrof, kemolitotrof (mengoksidasi senyawa anorganik), hingga chemoheterotrof parasit.",
        "<strong>Ekofisiologi Spesifik:</strong> Pemetaan habitat ekstrim tempat organisme beradaptasi, meliputi kelompok metanogen anaerob, halofil ekstrem, hingga termoasidofil vulkanik."
      ],
      "division_ids": [
        "eubacteria",
        "archaea"
      ],
      "quiz": [
        [
          "Ciri utama yang membedakan Monera dari kingdom lain dalam sistem klasifikasi 5 kingdom adalah...",
          [
            "Bersifat multiseluler",
            "Bersifat prokariotik (tidak memiliki membran inti)",
            "Dapat berfotosintesis",
            "Memiliki dinding sel dari selulosa"
          ],
          "Bersifat prokariotik (tidak memiliki membran inti)",
          "Sel Monera tidak memiliki membran inti sejati, sehingga materi genetiknya tersebar bebas di sitoplasma."
        ],
        [
          "Sistem klasifikasi 5 kingdom, termasuk Monera di dalamnya, pertama kali diperkenalkan oleh...",
          [
            "Carl Woese",
            "Charles Darwin",
            "Robert H. Whittakers",
            "Carl Linnaeus"
          ],
          "Robert H. Whittakers",
          "Robert H. Whittaker memperkenalkan sistem klasifikasi 5 kingdom pada tahun 1969."
        ],
        [
          "Monera kemudian dipecah menjadi dua kingdom terpisah berdasarkan penelitian Carl Woese, yaitu... ",
          [
            "Eubacteria dan Archaebacteria",
            "Protozoa dan Algae",
            "Jamur dan Ganggang",
            "Virus dan Bakteri"
          ],
          "Eubacteria dan Archaebacteria",
          "Woese menunjukkan bahwa Eubacteria (bakteri sejati) dan Archaebacteria (bakteri purba) memiliki garis evolusi yang berbeda meski sama-sama prokariotik."
        ],
        [
          "Dasar utama yang digunakan Woese untuk memisahkan Monera menjadi dua kingdom adalah...",
          [
            "Perbedaan bentuk sel",
            "Perbedaan ukuran tubuh",
            "Analisis materi genetik (RNA ribosom)",
            "Perbedaan habitat"
          ],
          "Analisis materi genetik (RNA ribosom)",
          "Woese membandingkan urutan basa pada molekul RNA ribosom 16S dari berbagai organisme. Perbedaan signifikan pada urutan ini menunjukkan bahwa Eubacteria dan Archaebacteria memiliki garis keturunan yang berbeda."
        ],
        [
          "Berikut yang BUKAN merupakan kriteria yang digunakan untuk mengklasifikasikan Monera adalah...",
          [
            "Tipe sel",
            "Dinding sel dan membran",
            "Karena semua anggotanya bersifat parasit",
            "Warna organisme"
          ],
          "Karena Monera mampu hidup di berbagai lingkungan dengan cara memperoleh energi yang beragam",
          "Anggota Monera memiliki cara memperoleh energi yang bervariasi, mulai dari fotosintesis, kemosintesis, hingga menyerap bahan organik, sehingga mampu hidup di lingkungan yang sangat beragam."
        ]
      ],
      
      "unlock_text": "Tersedia sejak awal.",

      "dichotomousKey": {
        "title": "Kunci Dikotomi: Kelompok Monera",
        "scenario": "Seorang mahasiswa mengamati mikroorganisme prokariotik yang diisolasi dari sampel tanah kebun. Gunakan kunci dikotomi berikut untuk menentukan kelompok organisme tersebut.",
        "start": "k1",
        "steps": {
          "k1": {
            "number": "1",
            "couplet": [
              {
                "text": "Dinding sel mengandung peptidoglikan",
                "next": "eubacteria"
              },
              {
                "text": "Dinding sel tidak mengandung peptidoglikan (tersusun dari pseudomurin)",
                "next": "archaea"
              }
            ]
          }
        },
        "results": {
          "eubacteria": {
            "label": "Eubacteria (Bakteri Sejati)",
            "description": "Spesimen tergolong Eubacteria. Dinding selnya mengandung peptidoglikan &mdash; ciri utama yang membedakannya dari Archaea, sekaligus menjadi target kerja sebagian besar antibiotik seperti penisilin.",
            "link": "divisions/eubacteria.html",
            "linkLabel": "Pelajari Eubacteria"
          },
          "archaea": {
            "label": "Archaea (Archaebacteria)",
            "description": "Spesimen tergolong Archaea. Dinding selnya tersusun dari pseudomurin, bukan peptidoglikan &mdash; itulah sebabnya Archaea tidak terpengaruh oleh antibiotik yang menyasar peptidoglikan.",
            "link": "divisions/archaea.html",
            "linkLabel": "Pelajari Archaea"
          }
        }
      }
    },
    "protista": {
      "name": "Protista",
      "eyebrow": "Kingdom 02",
      "embedUrl": "https://sketchfab.com/models/8df6e9add2c24beaa989b3278d96245a/embed?autostart=1",
      "summary": "Kelompok eukariotik yang secara tradisional digunakan untuk mengorganisasi beragam organisme yang bukan hewan, tumbuhan, atau fungi dalam sistem lima kingdom. Keragamannya membuat ciri sel dan cara hidup menjadi penting untuk dibandingkan.",
      "chars": [
        "Eukariotik",
        "Banyak yang uniseluler",
        "Cara memperoleh nutrisi beragam",
        "Umumnya hidup di lingkungan berair/lembap"
      ],
      "criteria": [
        "Organisasi sel",
        "Cara memperoleh nutrisi",
        "Motilitas",
        "Siklus hidup"
      ],
      "division_ids": [
        "protozoa",
        "algae",
        "slime-molds"
      ],
      "quiz": [
        [
          "Kelompok protista umumnya dibedakan terutama berdasarkan…",
          [
            "Warna tubuh saja",
            "Ciri sel dan cara hidup",
            "Jumlah kaki",
            "Ada tidaknya tulang"
          ],
          "Ciri sel dan cara hidup",
          "Protista sangat beragam, sehingga ciri sel, nutrisi, dan cara hidup menjadi dasar pengenalan."
        ],
        [
          "Mengapa lingkungan berair sering penting bagi protista?",
          [
            "Semua protista hidup di laut",
            "Banyak protista memerlukan air untuk hidup atau bergerak",
            "Protista tidak memiliki membran sel",
            "Air menggantikan inti sel"
          ],
          "Banyak protista memerlukan air untuk hidup atau bergerak",
          "Banyak protista hidup di air atau tempat lembap, dan sebagian menggunakan air sebagai medium pergerakan."
        ]
      ],
      "unlock_text": "Selesaikan Monera dengan skor minimal 85%."
    },
    "fungi": {
      "name": "Fungi",
      "eyebrow": "Kingdom 03",
      "embedUrl": "https://sketchfab.com/models/0dc381077a0e48cdb211b4505ab0be09/embed?autostart=1&transparent=1",
      "summary": "Kelompok eukariotik yang memperoleh nutrisi secara absorptif. Tubuh fungi sering tersusun atas hifa yang membentuk miselium, meskipun bentuk dan siklus hidupnya sangat beragam.",
      "chars": [
        "Eukariotik",
        "Nutrisi secara absorpsi",
        "Dinding sel umumnya mengandung kitin",
        "Banyak membentuk spora"
      ],
      "criteria": [
        "Struktur tubuh",
        "Cara memperoleh nutrisi",
        "Cara reproduksi",
        "Ciri spora"
      ],
      "division_ids": [
        "chytridiomycota",
        "zygomycota",
        "ascomycota",
        "basidiomycota"
      ],
      "quiz": [
        [
          "Cara memperoleh nutrisi yang khas pada fungi adalah…",
          [
            "Fotosintesis",
            "Absorpsi",
            "Menelan makanan utuh",
            "Filtrasi air"
          ],
          "Absorpsi",
          "Fungi mensekresikan enzim dan menyerap hasil pemecahan bahan organik."
        ],
        [
          "Struktur yang sering membentuk tubuh vegetatif fungi adalah…",
          [
            "Hifa",
            "Neuron",
            "Akar sejati",
            "Cangkang"
          ],
          "Hifa",
          "Hifa adalah filamen yang pada banyak fungi membentuk jaringan miselium."
        ]
      ],
      "unlock_text": "Selesaikan Protista dengan skor minimal 85%."
    },
    "plantae": {
      "name": "Plantae",
      "eyebrow": "Kingdom 04",
      "summary": "Kelompok tumbuhan yang umumnya fotosintetik dan memiliki dinding sel. Dalam pembelajaran ini, perkembangan struktur tubuh dan sistem reproduksi membantu menelusuri kelompok tumbuhan dari bentuk sederhana hingga tumbuhan berbunga.",
      "chars": [
        "Eukariotik",
        "Multiseluler",
        "Fotosintetik",
        "Dinding sel selulosa"
      ],
      "criteria": [
        "Jaringan vaskular",
        "Biji",
        "Bunga/buah",
        "Dominasi fase hidup"
      ],
      "division_ids": [
        "bryophyta",
        "pteridophyta",
        "gymnosperms",
        "angiosperms"
      ],
      "quiz": [
        [
          "Ciri yang paling membantu membedakan tumbuhan vaskular dari bryophyta adalah…",
          [
            "Kehadiran jaringan pengangkut",
            "Warna hijau",
            "Kemampuan hidup di darat",
            "Adanya sel"
          ],
          "Kehadiran jaringan pengangkut",
          "Tumbuhan vaskular memiliki jaringan pengangkut khusus untuk air dan hasil fotosintesis."
        ],
        [
          "Kelompok tumbuhan yang menghasilkan bunga dan buah adalah…",
          [
            "Bryophyta",
            "Pteridophyta",
            "Gymnosperms",
            "Angiosperms"
          ],
          "Angiosperms",
          "Angiosperms adalah tumbuhan berbunga; bijinya berkembang di dalam struktur reproduktif yang menghasilkan buah."
        ]
      ],
      "unlock_text": "Selesaikan Fungi dengan skor minimal 85%."
    },
    "animalia": {
      "name": "Animalia",
      "eyebrow": "Kingdom 05",
      "summary": "Kelompok hewan multiseluler dengan organisasi tubuh yang kompleks dan nutrisi heterotrof. Perbandingan simetri, jaringan, rongga tubuh, segmentasi, dan kerangka membantu memahami filum-filumnya.",
      "chars": [
        "Eukariotik",
        "Multiseluler",
        "Heterotrof",
        "Tidak memiliki dinding sel"
      ],
      "criteria": [
        "Simetri tubuh",
        "Jaringan dan organ",
        "Rongga tubuh",
        "Segmentasi dan kerangka"
      ],
      "division_ids": [
        "porifera",
        "cnidaria",
        "platyhelminthes",
        "nematoda",
        "annelida",
        "mollusca",
        "arthropoda",
        "echinodermata",
        "chordata"
      ],
      "quiz": [
        [
          "Ciri yang paling umum untuk Animalia adalah…",
          [
            "Prokariotik",
            "Multiseluler dan heterotrof",
            "Selalu fotosintetik",
            "Memiliki dinding sel"
          ],
          "Multiseluler dan heterotrof",
          "Hewan merupakan eukariotik multiseluler yang memperoleh nutrisi dari bahan organik."
        ],
        [
          "Kelompok yang memiliki notokorda pada tahap perkembangan tertentu adalah…",
          [
            "Mollusca",
            "Arthropoda",
            "Echinodermata",
            "Chordata"
          ],
          "Chordata",
          "Chordata dicirikan oleh notokorda pada setidaknya satu tahap perkembangan."
        ]
      ],
      "unlock_text": "Selesaikan Plantae dengan skor minimal 85%."
    }
  },
  "divisions": {
    "eubacteria": {
      "id": "eubacteria",
      "kingdom": "monera",
      "label": "Bacteria",
      "title": "Bakteri sejati (Eubacteria)",
      "scientific": "Eubacteria",
      "definition": "Domain organisme prokariotik uniseluler dengan dinding sel kaya peptidoglikan dan membran plasma berbasis ikatan ester asam lemak rantai lurus.",
      "embedUrl": "https://sketchfab.com/models/42439edc90cd4d87b8ae322a4dcee8de/embed?autostart=1",
      "body": "Secara sitologis, sel Eubacteria berukuran 1 sampai 5 mikrometer dan tidak memiliki sistem endomembran maupun nukleus sejati. Materi genetiknya berupa DNA sirkular ganda di area nukleoid, sering kali disertai plasmid. Arsitektur dinding selnya didominasi oleh polimer peptidoglikan yang tersusun atas NAG dan NAM. Berdasarkan uji pewarnaan Gram, dinding sel ini membagi bakteri menjadi Gram-positif (lapisan tebal) dan Gram-negatif (lapisan tipis dengan membran luar lipopolisakarida).",
      "morphologyProfile": [
        {
          "label": "Bentuk Sel",
          "value": "Kokus, Basil, Spiral",
          "desc": "Bentuk dasar dapat tersusun tunggal, berpasangan (diplo-), berantai (strepto-), atau bergerombol (stafilo-)."
        },
        {
          "label": "Materi Genetik",
          "value": "Nukleoid & Plasmid",
          "desc": "DNA sirkular ganda tanpa membran inti, sering disertai plasmid ekstra-kromosomal."
        },
        {
          "label": "Dinding Sel",
          "value": "Gram-positif / Gram-negatif",
          "desc": "Dibedakan dari ketebalan lapisan peptidoglikan lewat uji pewarnaan Gram."
        }
      ],
      "habitat": "Eubacteria memiliki sebaran kosmopolitan yang sangat luas di biosfer—mulai dari tanah terestrial, perairan tawar dan laut, hingga zona interseluler atau permukaan mukosa organisme inang. Sebagian besar bersifat mesofilik dengan kisaran toleransi pH netral, namun beberapa kelompok khusus mampu beradaptasi pada lingkungan ekstrem.",
      "habitatProfile": [
        {
          "label": "Oksigen (O₂)",
          "value": "Aerob & Anaerob",
          "desc": "Mampu hidup mutlak memerlukan oksigen, toleran, hingga anaerob obligat."
        },
        {
          "label": "Derajat Keasaman",
          "value": "pH 6.5 – 7.5 (Neutrofil)",
          "desc": "Sebagian besar tumbuh optimal pada kisaran pH netral, meski ada acidofil/alkalifil."
        },
        {
          "label": "Termal & Suhu",
          "value": "Mesofilik (20°–45°C)",
          "desc": "Dominan pada suhu moderat, dengan variasi psikrofil (dingin) dan termofil."
        }
      ],
      "nutrition": "Strategi metabolik Eubacteria sangat variatif. Kelompok autotrof mencakup fotoautotrof (seperti Cyanobacteria yang melakukan fotosintesis oksigenik) dan kemolitotrof. Sementara itu, mayoritas merupakan heterotrof (saprofit pengurai atau parasit patogen) yang menyerap nutrien organik melalui transpor aktif.",
      "reproduction": "Reproduksi generatif murni tidak ditemukan; perkembangbiakan utama berlangsung secara aseksual melalui pembelahan biner amitosis. Keragaman genetik dijaga melalui transfer gen horizontal (transformasi, transduksi, dan konjugasi). Pada kondisi ekstrem, beberapa genus membentuk endospora yang sangat resisten.",
      "ecology": "Dalam siklus biogeokimia global, Eubacteria memegang kendali utama sebagai agen dekomposisi pengurai materi organik mati. Kelompok simbiotik seperti Rhizobium berperan krusial dalam fiksasi nitrogen atmosfer menjadi amonia yang dapat diserap tanaman.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposisi biogeokimia &mdash; mendaur ulang karbon, sulfur, dan nitrogen di ekosistem.",
          "Fiksasi nitrogen biologis &mdash; simbiosis mutualisme Rhizobium pada nodul akar legum.",
          "Bioteknologi & industri &mdash; pemanfaatan Lactobacillus dalam fermentasi pangan.",
          "Mikrobiota normal &mdash; menjaga homeostasis pencernaan manusia."
        ],
        "harms": [
          "Infeksi akut &mdash; Mycobacterium tuberculosis penyebab tuberkulosis paru.",
          "Penyakit saluran cerna &mdash; Vibrio cholerae dan Salmonella typhi.",
          "Toksikogenesis &mdash; pelepasan endotoksin LPS yang memicu syok septik."
        ]
      },
      "examples": "Escherichia coli, Bacillus subtilis, Staphylococcus aureus, Rhizobium leguminosarum, Cyanobacteria, Clostridium botulinum",
      "exampleNotes": [
        { "name": "Escherichia coli", "note": "Flora normal usus, sebagian galur bersifat patogen" },
        { "name": "Bacillus subtilis", "note": "Bakteri tanah, penghasil enzim & endospora" },
        { "name": "Staphylococcus aureus", "note": "Patogen kulit oportunistik" },
        { "name": "Rhizobium leguminosarum", "note": "Simbion pengikat nitrogen pada akar legum" },
        { "name": "Cyanobacteria", "note": "Produsen primer fotosintetik di perairan" },
        { "name": "Clostridium botulinum", "note": "Penghasil toksin botulinum pada makanan kaleng" }
      ],
      "recognize": "Identifikasi mikrobiologis dilakukan melalui tahapan komprehensif: pengamatan morfologi sel lewat mikroskop, konfirmasi dinding sel dengan pewarnaan Gram, serta uji biokimia metabolik lanjutan.",
      "recognizeSteps": [
        "<strong>Amati morfologi sel</strong> di bawah mikroskop cahaya &mdash; tentukan bentuk dasar (kokus, basil, atau spiral) dan pola susunan koloninya (tunggal, berantai, atau bergerombol).",
        "<strong>Lakukan uji pewarnaan Gram</strong> untuk mengonfirmasi struktur dinding sel &mdash; Gram-positif menyerap warna ungu, Gram-negatif menyerap warna merah muda.",
        "<strong>Lanjutkan dengan uji biokimia</strong> (misalnya uji katalase, oksidase, atau fermentasi gula) untuk memastikan identifikasi hingga ke tingkat genus atau spesies."
      ],
      "challenge": {
        "question": "Seorang peneliti mikrobiologi menganalisis dinding sel bakteri patogen dan menemukan struktur membran luar yang kaya akan lipopolisakarida (LPS) serta lapisan peptidoglikan yang tipis. Ketika diuji dengan pewarnaan Gram, bakteri ini dipastikan akan berwarna...",
        "options": [
          "Merah atau merah muda (Gram-negatif)",
          "Ungu pekat (Gram-positif)",
          "Hijau transparan (Bakteri tahan asam)",
          "Kuning keemasan"
        ],
        "answer": "Merah atau merah muda (Gram-negatif)",
        "explanation": "Bakteri Gram-negatif memiliki lapisan peptidoglikan tipis dengan membran luar LPS yang melunturkan warna kristal violet saat dekolorisasi, sehingga menyerap safranin menjadi merah."
      }
    },
    "archaea": {
      "id": "archaea",
      "kingdom": "monera",
      "label": "Archaea",
      "title": "Archaea",
      "scientific": "Archaea",
      "definition": "Prokariotik; membran dan dinding sel memiliki ciri kimia yang berbeda dari banyak bakteri.",
      "body": "Sel prokariotik dengan biokimia khas; beberapa memiliki metabolisme ekstrem.",
      "habitat": "Ditemukan di lingkungan biasa maupun ekstrem, termasuk habitat asin, panas, atau anaerob.",
      "nutrition": "Metabolisme beragam; sebagian menghasilkan metana atau menggunakan sumber energi anorganik.",
      "reproduction": "Umumnya membelah secara aseksual.",
      "ecology": "Penting dalam siklus biogeokimia dan ekosistem ekstrem.",
      "examples": "Methanogens, halophiles, thermophiles",
      "recognize": "Perhatikan ciri prokariotik dan konteks habitat/metabolisme; jangan mengandalkan bentuk saja.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Perhatikan ciri prokariotik dan konteks habitat/metabolisme; jangan mengandalkan bentuk saja.",
        "options": [
          "Archaea",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Archaea",
        "explanation": "Ciri diagnostik yang digunakan adalah: Perhatikan ciri prokariotik dan konteks habitat/metabolisme; jangan mengandalkan bentuk saja."
      }
    },
    "protozoa": {
      "id": "protozoa",
      "kingdom": "protista",
      "label": "Protozoa",
      "title": "Protista — Protozoa",
      "scientific": "Protozoa",
      "definition": "Protista heterotrof yang umumnya uniseluler dan dapat bergerak dengan struktur khusus.",
      "body": "Satu sel menjalankan fungsi makan, bergerak, dan reproduksi.",
      "habitat": "Air tawar, laut, tanah lembap, atau sebagai simbion/parasit.",
      "nutrition": "Umumnya memperoleh nutrisi dengan menelan atau menyerap bahan organik.",
      "reproduction": "Banyak bereproduksi secara aseksual; beberapa memiliki tahap seksual.",
      "ecology": "Predator mikro, konsumen, simbion, atau parasit.",
      "examples": "Amoeba, Paramecium, Giardia",
      "recognize": "Cari organisme uniseluler eukariotik dengan alat gerak atau cara makan yang khas.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari organisme uniseluler eukariotik dengan alat gerak atau cara makan yang khas.",
        "options": [
          "Protozoa",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Protozoa",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari organisme uniseluler eukariotik dengan alat gerak atau cara makan yang khas."
      }
    },
    "algae": {
      "id": "algae",
      "kingdom": "protista",
      "label": "Algae",
      "title": "Protista — Algae",
      "scientific": "Algae",
      "definition": "Protista fotosintetik yang mencakup bentuk uniseluler hingga multiseluler sederhana.",
      "body": "Memiliki pigmen fotosintetik; organisasi tubuh tidak selalu berupa jaringan sejati.",
      "habitat": "Air tawar, laut, dan permukaan lembap.",
      "nutrition": "Fotosintesis menghasilkan bahan organik; sebagian memanfaatkan sumber nutrisi tambahan.",
      "reproduction": "Dapat aseksual maupun seksual, bergantung kelompok.",
      "ecology": "Produsen penting dalam rantai makanan akuatik dan penghasil oksigen.",
      "examples": "Diatom, kelp, dinoflagellates",
      "recognize": "Cari pigmen fotosintetik dan habitat akuatik; jangan menyamakan semua algae dengan tumbuhan sejati.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari pigmen fotosintetik dan habitat akuatik; jangan menyamakan semua algae dengan tumbuhan sejati.",
        "options": [
          "Algae",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Algae",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari pigmen fotosintetik dan habitat akuatik; jangan menyamakan semua algae dengan tumbuhan sejati."
      }
    },
    "slime-molds": {
      "id": "slime-molds",
      "kingdom": "protista",
      "label": "Slime molds",
      "title": "Protista — Slime molds",
      "scientific": "Slime molds",
      "definition": "Protista dengan fase hidup yang dapat menyerupai massa lendir dan fase pembentuk spora.",
      "body": "Sel/struktur hidup dapat bergabung membentuk massa plasmodial pada beberapa kelompok.",
      "habitat": "Umumnya di tempat lembap, kayu lapuk, atau bahan organik membusuk.",
      "nutrition": "Memakan mikroorganisme dan bahan organik dengan cara absorpsi/fagositosis sesuai kelompok.",
      "reproduction": "Menghasilkan struktur reproduktif dan spora.",
      "ecology": "Membantu dekomposisi bahan organik.",
      "examples": "Plasmodial slime molds, cellular slime molds",
      "recognize": "Cari pola pertumbuhan pada bahan organik lembap dan struktur reproduktif berbentuk spora.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari pola pertumbuhan pada bahan organik lembap dan struktur reproduktif berbentuk spora.",
        "options": [
          "Slime molds",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Slime molds",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari pola pertumbuhan pada bahan organik lembap dan struktur reproduktif berbentuk spora."
      }
    },
    "chytridiomycota": {
      "id": "chytridiomycota",
      "kingdom": "fungi",
      "label": "Chytridiomycota",
      "title": "Fungi — Chytridiomycota",
      "scientific": "Chytridiomycota",
      "definition": "Fungi yang menghasilkan zoospora berflagel pada tahap tertentu.",
      "body": "Umumnya mikroskopis; dapat memiliki rizoid atau struktur sederhana.",
      "habitat": "Sering terkait lingkungan air atau sangat lembap.",
      "nutrition": "Absorpsi bahan organik dari substrat atau inang.",
      "reproduction": "Zoospora berflagel merupakan ciri penting kelompok.",
      "ecology": "Pengurai dan bagian ekosistem akuatik; beberapa spesies patogen.",
      "examples": "Chytrids",
      "recognize": "Cari hubungan dengan air dan adanya tahap zoospora berflagel.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari hubungan dengan air dan adanya tahap zoospora berflagel.",
        "options": [
          "Chytridiomycota",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Chytridiomycota",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari hubungan dengan air dan adanya tahap zoospora berflagel."
      }
    },
    "zygomycota": {
      "id": "zygomycota",
      "kingdom": "fungi",
      "label": "Zygomycota",
      "title": "Fungi — Zygomycota",
      "scientific": "Zygomycota",
      "definition": "Nama tradisional untuk kelompok fungi yang mencakup banyak fungi dengan hifa dan sporangium; klasifikasi modern memisahkan beberapa garis keturunan.",
      "body": "Hifa umumnya tidak bersekat pada banyak anggota tradisional.",
      "habitat": "Tanah, bahan organik, dan makanan.",
      "nutrition": "Menguraikan bahan organik dengan enzim ekstraseluler.",
      "reproduction": "Dapat menghasilkan sporangiospora dan struktur seksual khas pada kelompok tradisional.",
      "ecology": "Pengurai dan kadang patogen oportunistik.",
      "examples": "Rhizopus",
      "recognize": "Cari hifa dan sporangium; gunakan istilah ini sebagai kategori pembelajaran tradisional.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari hifa dan sporangium; gunakan istilah ini sebagai kategori pembelajaran tradisional.",
        "options": [
          "Zygomycota",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Zygomycota",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari hifa dan sporangium; gunakan istilah ini sebagai kategori pembelajaran tradisional."
      }
    },
    "ascomycota": {
      "id": "ascomycota",
      "kingdom": "fungi",
      "label": "Ascomycota",
      "title": "Fungi — Ascomycota",
      "scientific": "Ascomycota",
      "definition": "Fungi yang menghasilkan spora seksual di dalam struktur bernama askus.",
      "body": "Hifa biasanya bersekat; beberapa berbentuk ragi uniseluler.",
      "habitat": "Darat, serasah, makanan, dan hubungan simbiosis seperti lichen.",
      "nutrition": "Absorptif; banyak berperan sebagai pengurai atau simbion.",
      "reproduction": "Askospora dibentuk dalam askus.",
      "ecology": "Pengurai, fermenter, patogen, dan simbion.",
      "examples": "Yeasts, Penicillium, morels",
      "recognize": "Ciri kunci adalah pembentukan askospora di dalam askus.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Ciri kunci adalah pembentukan askospora di dalam askus.",
        "options": [
          "Ascomycota",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Ascomycota",
        "explanation": "Ciri diagnostik yang digunakan adalah: Ciri kunci adalah pembentukan askospora di dalam askus."
      }
    },
    "basidiomycota": {
      "id": "basidiomycota",
      "kingdom": "fungi",
      "label": "Basidiomycota",
      "title": "Fungi — Basidiomycota",
      "scientific": "Basidiomycota",
      "definition": "Fungi yang menghasilkan basidiospora pada struktur bernama basidium.",
      "body": "Hifa bersekat; banyak membentuk tubuh buah yang tampak jelas.",
      "habitat": "Tanah, kayu, serasah, dan sebagai simbion akar.",
      "nutrition": "Absorpsi; banyak menjadi pengurai lignoselulosa.",
      "reproduction": "Basidiospora terbentuk pada basidium.",
      "ecology": "Pengurai utama kayu dan serasah; beberapa patogen tumbuhan.",
      "examples": "Mushrooms, bracket fungi, rusts",
      "recognize": "Cari tubuh buah atau struktur basidium dan perhatikan perannya sebagai pengurai.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari tubuh buah atau struktur basidium dan perhatikan perannya sebagai pengurai.",
        "options": [
          "Basidiomycota",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Basidiomycota",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari tubuh buah atau struktur basidium dan perhatikan perannya sebagai pengurai."
      }
    },
    "bryophyta": {
      "id": "bryophyta",
      "kingdom": "plantae",
      "label": "Bryophyta",
      "title": "Plantae — Bryophyta",
      "scientific": "Bryophyta",
      "definition": "Kelompok tumbuhan non-vaskular yang mencakup lumut sejati dalam pengertian sempit.",
      "body": "Tidak memiliki jaringan vaskular sejati; gametofit dominan.",
      "habitat": "Tempat lembap dan teduh, walau beberapa tahan kondisi lebih kering.",
      "nutrition": "Fotosintesis; menyerap air dan mineral melalui permukaan tubuh.",
      "reproduction": "Sporofit tumbuh melekat pada gametofit dan menghasilkan spora.",
      "ecology": "Menahan air, membantu pembentukan tanah, dan menjadi mikrohabitat.",
      "examples": "Mosses",
      "recognize": "Cari tubuh kecil tanpa jaringan pengangkut sejati dan ketergantungan kuat pada lingkungan lembap.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari tubuh kecil tanpa jaringan pengangkut sejati dan ketergantungan kuat pada lingkungan lembap.",
        "options": [
          "Bryophyta",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Bryophyta",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari tubuh kecil tanpa jaringan pengangkut sejati dan ketergantungan kuat pada lingkungan lembap."
      }
    },
    "pteridophyta": {
      "id": "pteridophyta",
      "kingdom": "plantae",
      "label": "Pteridophyta",
      "title": "Plantae — Pteridophyta",
      "scientific": "Pteridophyta",
      "definition": "Istilah tradisional untuk tumbuhan berpembuluh tanpa biji, seperti paku-pakuan.",
      "body": "Memiliki xilem dan floem; berkembang biak dengan spora.",
      "habitat": "Terutama lingkungan darat lembap, meski variasinya luas.",
      "nutrition": "Fotosintesis; memiliki akar, batang, dan daun sejati.",
      "reproduction": "Spora dihasilkan pada sporangium; fase gametofit dan sporofit bergantian.",
      "ecology": "Produsen dan bagian penting ekosistem hutan/lembap.",
      "examples": "Ferns, horsetails",
      "recognize": "Cari daun sejati dan struktur penghasil spora tanpa biji.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari daun sejati dan struktur penghasil spora tanpa biji.",
        "options": [
          "Pteridophyta",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Pteridophyta",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari daun sejati dan struktur penghasil spora tanpa biji."
      }
    },
    "gymnosperms": {
      "id": "gymnosperms",
      "kingdom": "plantae",
      "label": "Gymnosperms",
      "title": "Plantae — Gymnosperms",
      "scientific": "Gymnosperms",
      "definition": "Tumbuhan berbiji dengan bakal biji yang tidak tertutup oleh ovarium seperti pada angiosperms.",
      "body": "Vaskular; menghasilkan biji dan umumnya strobilus/kerucut.",
      "habitat": "Hutan, daerah pegunungan, dan lingkungan darat beragam.",
      "nutrition": "Fotosintesis; akar mengambil air dan mineral dari tanah.",
      "reproduction": "Menghasilkan serbuk sari dan biji; tidak membentuk buah sejati dari ovarium.",
      "ecology": "Produsen dan pembentuk habitat; beberapa bernilai ekonomi.",
      "examples": "Pines, cycads, ginkgo",
      "recognize": "Cari biji yang tidak terbungkus buah sejati dan struktur reproduktif seperti strobilus.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari biji yang tidak terbungkus buah sejati dan struktur reproduktif seperti strobilus.",
        "options": [
          "Gymnosperms",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Gymnosperms",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari biji yang tidak terbungkus buah sejati dan struktur reproduktif seperti strobilus."
      }
    },
    "angiosperms": {
      "id": "angiosperms",
      "kingdom": "plantae",
      "label": "Angiosperms",
      "title": "Plantae — Angiosperms",
      "scientific": "Angiosperms",
      "definition": "Tumbuhan berbunga yang bijinya berkembang di dalam ovarium dan umumnya kemudian berada dalam buah.",
      "body": "Vaskular; bunga dan buah merupakan ciri penting.",
      "habitat": "Hampir semua habitat darat, dengan sebagian beradaptasi pada air.",
      "nutrition": "Fotosintesis; akar dan jaringan vaskular mendukung pertumbuhan kompleks.",
      "reproduction": "Bunga membantu penyerbukan; biji berkembang dalam struktur buah.",
      "ecology": "Produsen dominan di banyak ekosistem dan sumber pangan utama.",
      "examples": "Grasses, orchids, oaks",
      "recognize": "Cari bunga, buah, dan biji yang terlindung dalam struktur reproduktif.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari bunga, buah, dan biji yang terlindung dalam struktur reproduktif.",
        "options": [
          "Angiosperms",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Angiosperms",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari bunga, buah, dan biji yang terlindung dalam struktur reproduktif."
      }
    },
    "porifera": {
      "id": "porifera",
      "kingdom": "animalia",
      "label": "Porifera",
      "title": "Animalia — Porifera",
      "scientific": "Porifera",
      "definition": "Hewan sederhana dengan tubuh berpori dan sistem aliran air untuk memperoleh makanan.",
      "body": "Tidak memiliki jaringan sejati seperti hewan yang lebih kompleks; tubuh berpori.",
      "habitat": "Laut terutama, sebagian di air tawar.",
      "nutrition": "Filter feeder; air membawa partikel makanan melalui tubuh.",
      "reproduction": "Reproduksi seksual dan aseksual dapat terjadi.",
      "ecology": "Penyaring air dan habitat bagi organisme kecil.",
      "examples": "Sponges",
      "recognize": "Cari banyak pori dan pola aliran air; tidak ada organ kompleks.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari banyak pori dan pola aliran air; tidak ada organ kompleks.",
        "options": [
          "Porifera",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Porifera",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari banyak pori dan pola aliran air; tidak ada organ kompleks."
      }
    },
    "cnidaria": {
      "id": "cnidaria",
      "kingdom": "animalia",
      "label": "Cnidaria",
      "title": "Animalia — Cnidaria",
      "scientific": "Cnidaria",
      "definition": "Hewan dengan jaringan sejati dan sel penyengat yang disebut cnidocytes.",
      "body": "Simetri radial; bentuk polip dan/atau medusa.",
      "habitat": "Terutama laut, dengan beberapa kelompok air tawar.",
      "nutrition": "Predator; menangkap mangsa menggunakan tentakel dan cnidocytes.",
      "reproduction": "Seksual maupun aseksual, bergantung kelompok.",
      "ecology": "Predator dan pembentuk ekosistem terumbu pada beberapa kelompok.",
      "examples": "Jellyfish, corals, sea anemones",
      "recognize": "Cari tentakel dan ciri sel penyengat; simetri radial juga membantu.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari tentakel dan ciri sel penyengat; simetri radial juga membantu.",
        "options": [
          "Cnidaria",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Cnidaria",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari tentakel dan ciri sel penyengat; simetri radial juga membantu."
      }
    },
    "platyhelminthes": {
      "id": "platyhelminthes",
      "kingdom": "animalia",
      "label": "Platyhelminthes",
      "title": "Animalia — Platyhelminthes",
      "scientific": "Platyhelminthes",
      "definition": "Cacing pipih dengan tubuh dorsoventral pipih dan simetri bilateral.",
      "body": "Triploblastik, tidak memiliki rongga tubuh sejati.",
      "habitat": "Air, tanah lembap, atau sebagai parasit.",
      "nutrition": "Karnivor, pemakan detritus, atau parasit.",
      "reproduction": "Banyak hermafrodit; reproduksi seksual dan regenerasi pada beberapa kelompok.",
      "ecology": "Predator kecil, pengurai, dan parasit.",
      "examples": "Planarians, tapeworms",
      "recognize": "Cari tubuh pipih bilateral; perhatikan apakah hidup bebas atau parasitik.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari tubuh pipih bilateral; perhatikan apakah hidup bebas atau parasitik.",
        "options": [
          "Platyhelminthes",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Platyhelminthes",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari tubuh pipih bilateral; perhatikan apakah hidup bebas atau parasitik."
      }
    },
    "nematoda": {
      "id": "nematoda",
      "kingdom": "animalia",
      "label": "Nematoda",
      "title": "Animalia — Nematoda",
      "scientific": "Nematoda",
      "definition": "Cacing gilig dengan tubuh silindris tidak bersegmen dan kutikula.",
      "body": "Bilateral; pseudocoelomate; tubuh dilindungi kutikula.",
      "habitat": "Tanah, air, jaringan tumbuhan/hewan, dan lingkungan lain.",
      "nutrition": "Makan bakteri, fungi, jaringan, atau menjadi parasit.",
      "reproduction": "Reproduksi seksual umum; jantan dan betina biasanya terpisah.",
      "ecology": "Penting dalam jaring makanan tanah; sebagian merupakan parasit.",
      "examples": "Roundworms",
      "recognize": "Cari tubuh silindris ramping tanpa segmen dan kutikula.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari tubuh silindris ramping tanpa segmen dan kutikula.",
        "options": [
          "Nematoda",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Nematoda",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari tubuh silindris ramping tanpa segmen dan kutikula."
      }
    },
    "annelida": {
      "id": "annelida",
      "kingdom": "animalia",
      "label": "Annelida",
      "title": "Animalia — Annelida",
      "scientific": "Annelida",
      "definition": "Cacing bersegmen dengan tubuh tersusun atas unit-unit berulang.",
      "body": "Segmentasi jelas; coelom berkembang baik pada banyak anggota.",
      "habitat": "Laut, air tawar, dan tanah.",
      "nutrition": "Pemakan detritus, predator, atau pengisap darah pada kelompok tertentu.",
      "reproduction": "Seksual; beberapa memiliki regenerasi/aseksual terbatas.",
      "ecology": "Pengurai, pengaduk tanah, dan bagian penting rantai makanan.",
      "examples": "Earthworms, leeches, polychaetes",
      "recognize": "Cari segmentasi tubuh yang jelas dan susunan organ yang mengikuti unit tubuh.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari segmentasi tubuh yang jelas dan susunan organ yang mengikuti unit tubuh.",
        "options": [
          "Annelida",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Annelida",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari segmentasi tubuh yang jelas dan susunan organ yang mengikuti unit tubuh."
      }
    },
    "mollusca": {
      "id": "mollusca",
      "kingdom": "animalia",
      "label": "Mollusca",
      "title": "Animalia — Mollusca",
      "scientific": "Mollusca",
      "definition": "Hewan bertubuh lunak dengan mantel; banyak memiliki cangkang.",
      "body": "Tubuh umumnya terdiri atas kaki, massa viseral, dan mantel.",
      "habitat": "Laut, air tawar, dan darat.",
      "nutrition": "Herbivor, predator, filter feeder, atau detritivor bergantung kelompok.",
      "reproduction": "Seksual; pola perkembangan bervariasi.",
      "ecology": "Konsumen, predator, filter feeder, dan sumber makanan bagi banyak organisme.",
      "examples": "Snails, clams, squids",
      "recognize": "Cari tubuh lunak dan mantel; cangkang ada pada banyak tetapi tidak semua anggota.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari tubuh lunak dan mantel; cangkang ada pada banyak tetapi tidak semua anggota.",
        "options": [
          "Mollusca",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Mollusca",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari tubuh lunak dan mantel; cangkang ada pada banyak tetapi tidak semua anggota."
      }
    },
    "arthropoda": {
      "id": "arthropoda",
      "kingdom": "animalia",
      "label": "Arthropoda",
      "title": "Animalia — Arthropoda",
      "scientific": "Arthropoda",
      "definition": "Hewan dengan kaki beruas, tubuh bersegmen, dan eksoskeleton.",
      "body": "Eksoskeleton kitin; appendages beruas; segmentasi tubuh termodifikasi.",
      "habitat": "Hampir semua habitat darat dan air.",
      "nutrition": "Herbivor, predator, detritivor, parasit, dan filter feeder.",
      "reproduction": "Seksual; pertumbuhan memerlukan molting.",
      "ecology": "Penyerbuk, predator, pengurai, dan komponen utama jaring makanan.",
      "examples": "Insects, spiders, crustaceans",
      "recognize": "Cari eksoskeleton dan appendages beruas; molting adalah bagian penting siklus hidup.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari eksoskeleton dan appendages beruas; molting adalah bagian penting siklus hidup.",
        "options": [
          "Arthropoda",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Arthropoda",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari eksoskeleton dan appendages beruas; molting adalah bagian penting siklus hidup."
      }
    },
    "echinodermata": {
      "id": "echinodermata",
      "kingdom": "animalia",
      "label": "Echinodermata",
      "title": "Animalia — Echinodermata",
      "scientific": "Echinodermata",
      "definition": "Hewan laut dengan sistem pembuluh air dan ciri dewasa berupa simetri radial sekunder.",
      "body": "Endoskeleton berkapur; sistem pembuluh air; larva bilateral.",
      "habitat": "Laut.",
      "nutrition": "Predator, herbivor, detritivor, atau pemakan suspensi.",
      "reproduction": "Seksual umum; regenerasi kuat pada beberapa kelompok.",
      "ecology": "Mempengaruhi struktur komunitas dasar laut.",
      "examples": "Starfish, sea urchins, sea cucumbers",
      "recognize": "Cari habitat laut, kaki tabung, dan pola tubuh radial pada dewasa.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari habitat laut, kaki tabung, dan pola tubuh radial pada dewasa.",
        "options": [
          "Echinodermata",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Echinodermata",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari habitat laut, kaki tabung, dan pola tubuh radial pada dewasa."
      }
    },
    "chordata": {
      "id": "chordata",
      "kingdom": "animalia",
      "label": "Chordata",
      "title": "Animalia — Chordata",
      "scientific": "Chordata",
      "definition": "Kelompok yang memiliki notokorda, tali saraf dorsal berongga, celah faring, endostil/tiroid, dan ekor post-anal pada setidaknya satu tahap perkembangan.",
      "body": "Ciri chordata muncul pada tahap perkembangan tertentu; banyak anggota memiliki tulang belakang.",
      "habitat": "Laut, air tawar, dan darat.",
      "nutrition": "Sangat beragam: herbivor, karnivor, omnivor, filter feeder.",
      "reproduction": "Seksual umum; perkembangan sangat beragam.",
      "ecology": "Konsumen penting dan bagian dari hampir semua tipe ekosistem.",
      "examples": "Fish, amphibians, reptiles, birds, mammals",
      "recognize": "Cari ciri chordata pada tahap perkembangan; jangan menyamakan Chordata hanya dengan mamalia.",
      "challenge": {
        "question": "Kelompok manakah yang paling sesuai dengan ciri: Cari ciri chordata pada tahap perkembangan; jangan menyamakan Chordata hanya dengan mamalia.",
        "options": [
          "Chordata",
          "Kelompok lain dalam kingdom yang sama",
          "Kelompok dari kingdom berbeda",
          "Bukan kelompok biologis"
        ],
        "answer": "Chordata",
        "explanation": "Ciri diagnostik yang digunakan adalah: Cari ciri chordata pada tahap perkembangan; jangan menyamakan Chordata hanya dengan mamalia."
      }
    }
  }
};