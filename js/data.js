const BIOSCOPE_DATA = {
  "kingdoms": {
    "monera": {
      "name": "Monera",
      "eyebrow": "Kerajaan 01",
      "embedUrl": "https://sketchfab.com/models/42439edc90cd4d87b8ae322a4dcee8de/embed?autostart=1&transparent=1",
      
      // Teks pengantar ringkas di atas 3D
      "summary": "Selamat datang di materi Monera. Putar dan perbesar model 3D di samping untuk melihat bagian-bagian sel prokariotik secara detail.",
      
      // Teks lengkap khusus untuk Overview bawah
      "overview": "Monera adalah kelompok organisme yang seluruh anggotanya bersifat prokariotik — sel-selnya tidak memiliki membran inti sejati. Konsep ini pertama kali diperkenalkan oleh Robert H. Whittaker pada tahun 1969 (sistem lima kingdom). Namun, penelitian lanjutan oleh Carl Woese (1977 & 1990) menunjukkan bahwa Monera terdiri dari dua kelompok yang secara evolusi sangat berbeda: Eubacteria (bakteri sejati, kini disebut domain Bacteria) dan Archaebacteria (bakteri purba, kini lebih dikenal sebagai domain Archaea).",
      
      "chars": [
        "<strong>Organisasi Sel Prokariotik:</strong> Sel tidak memiliki membran inti sejati; materi genetiknya tersebar bebas di sitoplasma dalam wilayah nukleoid.",
        "<strong>Dinding Sel Bervariasi:</strong> Eubacteria umumnya memiliki dinding sel dari peptidoglikan, sedangkan Archaea tidak memiliki peptidoglikan dan menggunakan bahan penyusun lain.",
        "<strong>Reproduksi Aseksual:</strong> Sebagian besar berkembang biak dengan cara pembelahan biner (membelah diri menjadi dua sel baru).",
        "<strong>Habitat Sangat Beragam:</strong> Eubacteria dapat ditemukan hampir di semua lingkungan, sedangkan Archaea dikenal banyak menghuni lingkungan ekstrem, meski juga ditemukan di lingkungan biasa."
      ],
      "criteria": [
        "<strong>Materi Genetik (RNA Ribosom):</strong> Perbandingan urutan RNA ribosom digunakan untuk menelusuri hubungan kekerabatan evolusi antarorganisme.",
        "<strong>Komposisi Dinding Sel & Membran:</strong> Pengelompokan didasarkan pada perbedaan bahan penyusun dinding sel dan membran sel.",
        "<strong>Cara Memperoleh Energi:</strong> Klasifikasi mempertimbangkan cara organisme memperoleh energi, baik sebagai autotrof (membuat makanan sendiri) maupun heterotrof (menyerap dari lingkungan).",
        "<strong>Habitat:</strong> Pemetaan lingkungan tempat organisme hidup, mulai dari lingkungan biasa hingga lingkungan ekstrem."
      ],
      "division_ids": [
        "eubacteria",
        "archaea"
      ],
      "quiz": [
        [
          "Ciri utama yang membedakan Monera dari kingdom lain dalam sistem klasifikasi lima kingdom adalah…",
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
          "Sistem klasifikasi lima kingdom, termasuk Monera di dalamnya, pertama kali diperkenalkan oleh…",
          [
            "Carl Woese",
            "Charles Darwin",
            "Robert H. Whittaker",
            "Carl Linnaeus"
          ],
          "Robert H. Whittaker",
          "Robert H. Whittaker memperkenalkan sistem klasifikasi lima kingdom pada tahun 1969."
        ],
        [
          "Monera kemudian dipecah menjadi dua kingdom terpisah berdasarkan penelitian Carl Woese, yaitu…",
          [
            "Eubacteria dan Archaebacteria",
            "Protozoa dan Algae",
            "Jamur dan Ganggang",
            "Virus dan Bakteri"
          ],
          "Eubacteria dan Archaebacteria",
          "Woese menunjukkan bahwa Eubacteria (bakteri sejati, kini domain Bacteria) dan Archaebacteria (bakteri purba, kini domain Archaea) memiliki garis evolusi yang berbeda meski sama-sama prokariotik."
        ],
        [
          "Dasar utama yang digunakan Woese untuk memisahkan Monera menjadi dua kingdom adalah…",
          [
            "Perbedaan bentuk sel",
            "Perbedaan ukuran tubuh",
            "Analisis materi genetik (RNA ribosom)",
            "Perbedaan habitat"
          ],
          "Analisis materi genetik (RNA ribosom)",
          "Woese membandingkan urutan basa pada molekul RNA ribosom 16S dari berbagai organisme. Perbedaan signifikan pada urutan ini menunjukkan bahwa Eubacteria (Bacteria) dan Archaebacteria (Archaea) memiliki garis keturunan yang berbeda."
        ],
        [
          "Berikut yang BUKAN merupakan kriteria yang digunakan untuk mengklasifikasikan Monera adalah…",
          [
            "Tipe sel",
            "Dinding sel dan membran",
            "Cara memperoleh energi",
            "Warna organisme"
          ],
          "Warna organisme",
          "Warna organisme bukan merupakan dasar klasifikasi ilmiah Monera. Klasifikasi modern menggunakan materi genetik, komposisi dinding sel dan membran, serta cara organisme memperoleh energi."
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
      "eyebrow": "Kerajaan 02",
      "embedUrl": "https://sketchfab.com/models/8df6e9add2c24beaa989b3278d96245a/embed?autostart=1",
 
      "summary": "Selamat datang di materi Protista. Putar dan perbesar model 3D di samping untuk melihat kompleksitas struktur sel eukariotik uniseluler secara detail.",
 
      "overview": "Protista adalah kelompok organisme eukariotik yang secara tradisional dihimpun dalam sistem lima kingdom karena tidak memenuhi kriteria kingdom Animalia, Plantae, Fungi, maupun Monera. Berbeda dari Monera yang disatukan oleh kesamaan filogenetik prokariotik, Protista bersifat polifiletik &mdash; ia menghimpun garis keturunan evolusi yang sangat beragam, dari kelompok mirip hewan (Protozoa), mirip tumbuhan (Algae), hingga mirip fungi (Slime molds). Klasifikasi modern telah merevisi kelompok ini secara filogenetik molekuler ke dalam beberapa supergroup (Excavata, SAR, Amoebozoa, Archaeplastida), meski pembagian klasik berdasarkan kemiripan kingdom lain masih relevan untuk pengantar.",
 
      "chars": [
        "<strong>Organisasi Eukariotik namun Polifiletik:</strong> Sel memiliki membran inti sejati beserta organel bermembran lengkap (mitokondria, retikulum endoplasma, aparatus Golgi), namun secara filogenetik Protista bukan kelompok alami tunggal &mdash; ia menghimpun garis keturunan yang sangat beragam yang hanya disatukan karena tidak memenuhi kriteria kingdom Animalia, Plantae, Fungi, maupun Monera.",
        "<strong>Diferensiasi Pembungkus Sel:</strong> Arsitektur pembungkus sel sangat bervariasi; kelompok mirip hewan umumnya tanpa dinding sel (dibungkus pelikel elastis atau membran plasma telanjang), sementara kelompok mirip tumbuhan memiliki dinding sel dari selulosa, silika (pada diatom), atau kalsium karbonat (pada foraminifera).",
        "<strong>Arsitektur Alat Gerak:</strong> Mekanisme pergerakan mencerminkan keragaman evolusioner kelompok ini &mdash; mulai dari pseudopodia (aliran sitoplasma pada amoeba), flagela (dorongan berombak), silia (getaran terkoordinasi masif pada permukaan sel), hingga ketiadaan alat gerak total pada kelompok parasit obligat di sebagian besar siklus hidupnya.",
        "<strong>Mesin Fotosintetik & Pigmentasi:</strong> Sebagian anggota memiliki kloroplas hasil peristiwa endosimbiosis sekunder yang terjadi berulang kali secara independen dalam sejarah evolusi, menghasilkan keragaman pigmen (klorofil a/b, fukosantin, fikoeritrin, karotenoid) yang kontras tajam dengan anggota non-fotosintetik dalam kelompok yang sama.",
        "<strong>Jembatan Evolusioner Menuju Multiseluleritas:</strong> Protista uniseluler merupakan titik nenek moyang dari seluruh eukariota multiseluler besar di Bumi &mdash; tumbuhan darat diturunkan dari garis keturunan alga hijau (charophyta), fungi diturunkan dari protista berflagela mirip nucleariid, dan hewan diturunkan dari nenek moyang bersel tunggal berkerabat dekat dengan choanoflagellata &mdash; membuktikan bahwa multiselularitas berkembang secara independen beberapa kali dari nenek moyang protista yang berbeda."
      ],
      "criteria": [
        "<strong>Filogeni Molekuler (SSU rRNA):</strong> Klasifikasi modern Protista telah direvisi total berdasarkan filogenetik molekuler (18S rRNA); istilah lama seperti \"Protozoa\" terbukti bersifat polifiletik dan kini direstrukturisasi menjadi supergroup baru (Excavata, SAR, Amoebozoa, Archaeplastida) berdasarkan jarak kekerabatan evolusi yang sesungguhnya.",
        "<strong>Tipe Alat Gerak:</strong> Klasifikasi klasik yang masih relevan untuk pengantar membagi kelompok mirip hewan berdasarkan struktur pergerakannya &mdash; pseudopodia (Rhizopoda), flagela (Flagellata), silia (Ciliata), atau tanpa alat gerak (Sporozoa).",
        "<strong>Profil Pigmen Fotosintetik:</strong> Untuk kelompok mirip tumbuhan, pengelompokan bergantung pada pigmen dominan penyusun kloroplas &mdash; klorofil a dan b (Chlorophyta, hijau), fukosantin (Phaeophyta, cokelat), fikoeritrin (Rhodophyta, merah), atau karotenoid (Chrysophyta, keemasan).",
        "<strong>Cara Hidup & Siklus Nutrisi:</strong> Pembagian juga mempertimbangkan strategi memperoleh nutrisi dan pola siklus hidup &mdash; heterotrof fagotrofik pada kelompok mirip hewan, autotrof fotosintetik pada kelompok mirip tumbuhan, atau saprotrof/parasit dengan fase menyerupai jamur pada kelompok mirip jamur."
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
        ],
        [
          "Mengapa Kingdom Protista dianggap bersifat polifiletik?",
          [
            "Karena seluruh anggotanya berasal dari satu nenek moyang yang sama",
            "Karena beberapa kelompok protista lebih dekat kekerabatannya dengan tumbuhan, fungi, atau hewan dibanding sesama protista lain",
            "Karena semua protista bersifat multiseluler",
            "Karena protista tidak memiliki materi genetik"
          ],
          "Karena beberapa kelompok protista lebih dekat kekerabatannya dengan tumbuhan, fungi, atau hewan dibanding sesama protista lain",
          "Sistematika modern menunjukkan berbagai garis keturunan protista secara evolusioner lebih dekat dengan kingdom lain daripada dengan sesama protista, sehingga Kingdom Protista sebagai kelompok tunggal tidak mencerminkan filogeni yang sebenarnya."
        ],
        [
          "Sekitar berapa persen fotosintesis dunia yang diperkirakan dilakukan oleh protista fotosintetik?",
          [
            "Kurang dari 5%",
            "Sekitar 10%",
            "Lebih dari 25%",
            "Hampir 90%"
          ],
          "Lebih dari 25%",
          "Protista fotosintetik seperti diatom, dinoflagellata, dan alga berperan sebagai produsen primer utama di ekosistem akuatik, dengan kontribusi diperkirakan lebih dari seperempat total fotosintesis dunia."
        ]
      ],
      "unlock_text": "Selesaikan Monera (skor ≥85%) untuk membuka Protista."
    },
    "fungi": {
      "name": "Fungi",
      "eyebrow": "Kerajaan 03",
      "embedUrl": "https://sketchfab.com/models/0dc381077a0e48cdb211b4505ab0be09/embed?autostart=1&transparent=1",
      "summary": "Selamat datang di materi Fungi. Putar dan perbesar model 3D di samping untuk melihat struktur hifa dan tubuh buah jamur secara detail.",
      "overview": "Fungi adalah kelompok organisme eukariotik heterotrof yang tidak berklorofil dan tidak dapat berfotosintesis, sehingga secara mendasar berbeda dari Plantae. Berbeda pula dari Animalia, fungi tidak menelan makanannya (ingesti); mereka mengeluarkan enzim pencerna ke luar tubuh untuk merombak materi organik kompleks (pencernaan ekstraseluler), kemudian menyerap hasil rombakannya (absorpsi) langsung ke dalam sel. Tubuh vegetatif sebagian besar fungi tersusun atas hifa &mdash; benang-benang halus bercabang yang bersama-sama membentuk jaringan miselium. Klasifikasi klasik membagi fungi menjadi empat filum utama berdasarkan struktur dan spora seksualnya: Chytridiomycota, Zygomycota, Ascomycota, dan Basidiomycota, meski filogenetika molekuler modern menunjukkan Zygomycota bersifat polifiletik dan kini mulai dipecah ke filum-filum baru seperti Mucoromycota dan Glomeromycota.",
      "chars": [
        "<strong>Nutrisi Absorptif:</strong> Fungi memperoleh makanan lewat pencernaan ekstraseluler &mdash; enzim hidrolitik disekresikan keluar tubuh untuk merombak bahan organik kompleks, lalu senyawa sederhana hasil rombakan diserap langsung masuk ke dalam sel, berbeda dari cara hewan menelan makanan (ingesti).",
        "<strong>Dinding Sel Berkitin:</strong> Dinding sel fungi tersusun atas serat kitin (polimer N-acetylglucosamine) yang tertanam dalam matriks glukan dan protein &mdash; berbeda dari dinding sel tumbuhan yang berbahan selulosa maupun sel hewan yang tidak berdinding sel sama sekali.",
        "<strong>Hifa & Miselium:</strong> Tubuh vegetatif sebagian besar fungi tersusun atas hifa, benang halus bercabang yang bersama-sama membentuk jaringan miselium; hifa dapat bersekat berpori (septate, pada Ascomycota & Basidiomycota) atau tidak bersekat sama sekali (aseptate/koenositik, pada Zygomycota) sehingga banyak nukleus berbagi satu massa sitoplasma.",
        "<strong>Reproduksi Berbasis Spora:</strong> Fungi umumnya bereproduksi lewat pembentukan spora, baik aseksual (misalnya zoospora berflagela pada Chytridiomycota, sporangiospora pada Zygomycota) maupun seksual (zigospora, askospora dalam askus, atau basidiospora pada basidium) yang menjadi dasar utama klasifikasi filum-filumnya."
      ],
      "criteria": [
        "<strong>Struktur & Sekat Hifa:</strong> Klasifikasi klasik mempertimbangkan apakah hifa bersekat dengan pori (septate, seperti Ascomycota dan Basidiomycota) atau tidak bersekat sama sekali (aseptate/koenositik, seperti Zygomycota).",
        "<strong>Fase Sel Motil:</strong> Chytridiomycota menjadi satu-satunya filum fungi sejati yang menghasilkan zoospora (spora kembara) berflagela tunggal tipe cambuk; ketiga filum lain tidak pernah memiliki fase sel yang dapat bergerak aktif sepanjang siklus hidupnya.",
        "<strong>Struktur Penghasil Spora Seksual:</strong> Zygomycota menghasilkan zigospora dari peleburan gametangia; Ascomycota menghasilkan askospora di dalam askus berbentuk kantung; Basidiomycota menghasilkan basidiospora secara eksternal di ujung basidium berbentuk gada.",
        "<strong>Cara Hidup & Simbiosis:</strong> Pengelompokan juga mempertimbangkan strategi memperoleh nutrisi &mdash; saprofit (menguraikan bahan organik mati), parasit (menyerang jaringan inang hidup), atau simbion mutualisme seperti mikoriza dengan akar tanaman dan lichen dengan alga/cyanobacteria."
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
        ],
        [
          "Komponen utama penyusun dinding sel fungi adalah…",
          [
            "Selulosa",
            "Peptidoglikan",
            "Kitin",
            "Silika"
          ],
          "Kitin",
          "Dinding sel fungi tersusun atas serat kitin yang tertanam dalam matriks glukan dan protein, berbeda dari dinding sel tumbuhan (selulosa) maupun bakteri (peptidoglikan)."
        ],
        [
          "Filum fungi sejati yang unik karena menghasilkan zoospora berflagela adalah…",
          [
            "Zygomycota",
            "Chytridiomycota",
            "Ascomycota",
            "Basidiomycota"
          ],
          "Chytridiomycota",
          "Chytridiomycota adalah satu-satunya filum fungi sejati yang menghasilkan spora kembara motil (zoospora) berflagela tunggal; filum fungi lain tidak memiliki fase sel yang dapat bergerak aktif."
        ]
      ],
      "unlock_text": "Selesaikan Protista (skor ≥85%) untuk membuka Fungi."
    },
    "plantae": {
      "name": "Plantae",
      "eyebrow": "Kerajaan 04",
      "summary": "Selamat datang di materi Plantae. Telusuri klasifikasi tumbuhan dari lumut sederhana hingga tumbuhan berbunga untuk memahami perkembangan struktur tubuh dan reproduksinya secara detail.",
      "overview": "Anggota Kingdom Plantae juga dikenal sebagai embryophyte karena memiliki ciri khas pembentukan embrio multiseluler yang bergantung pada nutrisi induk selama tahap awal perkembangannya. Tumbuhan darat berevolusi dari nenek moyang alga hijau, secara spesifik dari kelompok alga hijau charophyta. Transisi habitat dari perairan ke daratan mendorong evolusi berbagai adaptasi struktur kunci &mdash; kutikula kedap air, stomata pengatur pertukaran gas, jaringan vaskular (xilem & floem) yang diperkuat lignin, serta organ reproduksi multiseluler pelindung gamet dan embrio. Kingdom ini secara klasik dikelompokkan ke dalam empat divisi utama berdasarkan tingkat kompleksitas jaringan vaskular, keberadaan biji, dan organ reproduksi: Bryophyta, Pteridophyta, Gymnospermae, dan Angiospermae.",
      "chars": [
        "<strong>Fotosintesis (Autotrof):</strong> Menggunakan pigmen klorofil a dan b yang tersimpan di dalam kloroplas untuk menangkap energi cahaya matahari dan mengubahnya menjadi energi kimia.",
        "<strong>Dinding Sel Selulosa:</strong> Sel-sel eukariotiknya memiliki kloroplas dan vakuola, dikelilingi oleh dinding sel yang mengandung selulosa.",
        "<strong>Multiseluler & Diferensiasi Jaringan:</strong> Memiliki tingkat organisasi multiseluler kompleks dengan diferensiasi sel membentuk jaringan dan organ khusus untuk fotosintesis, penyerapan, dan penyokong.",
        "<strong>Spora Berdinding Sporopollenin:</strong> Menghasilkan spora yang dilindungi dinding berlapis sporopollenin, bahan organik yang sangat tahan terhadap kekeringan dan pembusukan."
      ],
      "criteria": [
        "<strong>Jaringan Vaskular:</strong> Kehadiran xilem dan floem sejati untuk mengangkut air, mineral, dan hasil fotosintesis membedakan tumbuhan vaskular (Pteridophyta, Gymnospermae, Angiospermae) dari Bryophyta yang nonvaskular.",
        "<strong>Keberadaan Biji:</strong> Bryophyta dan Pteridophyta bereproduksi lewat spora, sedangkan Gymnospermae dan Angiospermae menghasilkan biji sebagai unit penyebaran utama yang berisi embrio dan cadangan makanan.",
        "<strong>Bunga & Buah:</strong> Hanya Angiospermae yang memiliki organ reproduksi berupa bunga sejati, dengan bakal biji terbungkus rapat di dalam bakal buah (karpel) yang berkembang menjadi buah.",
        "<strong>Dominasi Fase Hidup:</strong> Pada Bryophyta, gametofit haploid dominan dan hidup bebas; seiring evolusi menuju Pteridophyta, Gymnospermae, hingga Angiospermae, fase sporofit diploid menjadi semakin dominan sementara gametofit tereduksi."
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
            "Gymnospermae",
            "Angiospermae"
          ],
          "Angiospermae",
          "Angiospermae adalah tumbuhan berbunga; bijinya berkembang di dalam struktur reproduktif (ovarium) yang menghasilkan buah."
        ],
        [
          "Tumbuhan darat diperkirakan berevolusi dari nenek moyang…",
          [
            "Alga merah (Rhodophyta)",
            "Alga hijau charophyta",
            "Diatom",
            "Sianobakteri"
          ],
          "Alga hijau charophyta",
          "Bukti molekuler dan struktural menunjukkan tumbuhan darat berevolusi dari kelompok alga hijau charophyta (charophycean green algae), kerabat terdekat Plantae di antara alga."
        ],
        [
          "Fungsi utama sporopollenin pada dinding spora tumbuhan adalah…",
          [
            "Menangkap cahaya matahari untuk fotosintesis",
            "Melindungi spora dari kekeringan dan pembusukan",
            "Mengangkut air dan mineral",
            "Menyimpan cadangan karbohidrat"
          ],
          "Melindungi spora dari kekeringan dan pembusukan",
          "Sporopollenin adalah bahan organik yang sangat tahan terhadap kekeringan dan pembusukan, sehingga melindungi spora tumbuhan agar dapat bertahan hingga menemukan kondisi yang sesuai untuk berkecambah."
        ]
      ],
      "unlock_text": "Selesaikan Fungi (skor ≥85%) untuk membuka Plantae."
    },
    "animalia": {
      "name": "Animalia",
      "eyebrow": "Kerajaan 05",
      "summary": "Selamat datang di materi Animalia. Telusuri simetri tubuh, rongga tubuh, dan segmentasi kesembilan filum hewan untuk memahami keragaman arsitektur tubuhnya secara detail.",
      "overview": "Anggota Kingdom Animalia bersifat multiseluler (metazoa) dengan tubuh terorganisasi secara hierarkis dari sel, jaringan, organ, hingga sistem organ yang saling bekerja sama; sel-selnya mengalami spesialisasi fungsi dan tidak mampu hidup mandiri secara terpisah. Sebagai organisme heterotrof, hewan memperoleh nutrisi dengan mencerna atau memakan organisme lain, bukan menyintesisnya sendiri. Sel hewan tidak memiliki dinding sel kaku maupun filamen hifa, dan umumnya memiliki kemampuan bergerak mandiri lewat sistem tubuhnya sendiri, baik di seluruh tahap hidup maupun terbatas pada fase tertentu (misalnya fase larva). Pengelompokan sembilan filum klasik Animalia &mdash; dari Porifera yang paling sederhana hingga Chordata yang paling kompleks &mdash; didasarkan pada empat kriteria arsitektur tubuh: simetri tubuh, lapisan jaringan embrionik, rongga tubuh, dan segmentasi.",
      "chars": [
        "<strong>Multiseluler (Metazoa):</strong> Tubuh tersusun atas banyak sel terorganisasi hierarkis (sel, jaringan, organ, sistem organ) yang saling bekerja sama; sel-sel hewan mengalami spesialisasi fungsi dan tidak mampu hidup mandiri secara terpisah.",
        "<strong>Heterotrof:</strong> Hewan tidak dapat menyintesis makanannya sendiri dari bahan anorganik seperti tumbuhan autotrof, melainkan memperoleh nutrisi dengan mencerna atau memakan organisme lain.",
        "<strong>Tanpa Dinding Sel & Hifa:</strong> Sel hewan hanya dibatasi membran plasma tanpa dinding sel kaku seperti tumbuhan, dan tidak memiliki struktur filamen hifa seperti jamur.",
        "<strong>Motil pada Fase Hidupnya:</strong> Memiliki kemampuan bergerak terkontrol dan mandiri dari dalam sistem tubuhnya sendiri, baik di seluruh tahapan hidup maupun terbatas pada fase tertentu, misalnya fase larva."
      ],
      "criteria": [
        "<strong>Simetri Tubuh:</strong> Asimetri (tanpa bidang pembagi seimbang), simetri radial (dapat dibagi oleh lebih dari dua bidang melalui sumbu longitudinal, cocok untuk hewan sesil/terapung bebas), atau simetri bilateral (dapat dibagi menjadi dua bagian cermin hanya oleh satu bidang sagital, mendukung pergerakan searah ke depan).",
        "<strong>Lapisan Jaringan Embrionik (Germ Layers):</strong> Diploblastik (dua lapisan &mdash; ektoderm dan endoderm) atau triploblastik (tiga lapisan &mdash; ektoderm, mesoderm, dan endoderm).",
        "<strong>Rongga Tubuh (Coelom):</strong> Aselomata (tanpa rongga tubuh sekunder, terisi parenkim mesoderm), pseudoselomata (rongga tubuh semu dari sisa blastocoel embrionik, tak dilapisi mesoderm utuh), atau selomata/eucoelomate (rongga tubuh sejati yang dilapisi selaput mesoderm/peritoneum).",
        "<strong>Segmentasi Tubuh (Metamerisme):</strong> Pengulangan serial unit-unit tubuh yang serupa (metamere/somit) di sepanjang sumbu longitudinal tubuh, memungkinkan mobilitas dan fleksibilitas fungsi tubuh yang lebih tinggi."
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
        ],
        [
          "Filum yang memiliki rongga tubuh semu (pseudoselomata) dan tubuh tidak bersegmen adalah…",
          [
            "Annelida",
            "Nematoda",
            "Mollusca",
            "Arthropoda"
          ],
          "Nematoda",
          "Nematoda memiliki pseudoselomata (rongga tubuh semu dari sisa blastocoel embrionik yang tidak dilapisi utuh oleh mesoderm) dan tubuh silindrisnya tidak bersegmen, berbeda dari Annelida yang selomata sejati dan bersegmen."
        ],
        [
          "Dua garis besar evolusi utama pada kelompok Bilateria (hewan bersimetri bilateral) adalah…",
          [
            "Radiata dan Bilateria",
            "Protostomia dan Deuterostomia",
            "Diploblastik dan Triploblastik",
            "Aselomata dan Pseudoselomata"
          ],
          "Protostomia dan Deuterostomia",
          "Bilateria terbagi menjadi Protostomia (mencakup klade Lophotrochozoa seperti Platyhelminthes, Mollusca, Annelida, dan Ecdysozoa seperti Nematoda, Arthropoda) dan Deuterostomia (meliputi Echinodermata dan Chordata)."
        ]
      ],
      "unlock_text": "Selesaikan Plantae (skor ≥85%) untuk membuka Animalia."
    }
  },
  "divisions": {
    "eubacteria": {
      "id": "eubacteria",
      "kingdom": "monera",
      "label": "Eubacteria",
      "title": "Eubacteria: Bakteri Sejati",
      "scientific": "Eubacteria",
      "definition": "Eubacteria adalah kelompok mikroorganisme prokariotik uniseluler yang paling beragam dan tersebar luas di Bumi, mencakup ribuan spesies dengan bentuk dan cara hidup yang sangat bervariasi. Sel-selnya tidak memiliki membran inti maupun organel bermembran layaknya sel eukariotik, dan dinding selnya umumnya tersusun dari peptidoglikan &mdash; ciri utama yang membedakannya dari Archaea sekaligus menjadi target kerja sebagian besar antibiotik seperti penisilin.",
      "embedUrl": "https://sketchfab.com/models/1e085616d0ff43c3bfd1f86cdbdb5755/embed?autostart=1&transparent=1",
      "body": "Seperti prokariotik lain, sel Eubacteria tidak memiliki organel yang dibungkus membran maupun membran inti sejati. Materi genetiknya berupa DNA sirkular yang tersebar bebas di sitoplasma dalam bentuk nukleoid.",
      "morphologyProfile": [
        {
          "label": "Bentuk Sel",
          "value": "Kokus, Basil, Spiral, & Filamen",
          "desc": "Bentuk dasar sel Eubacteria dapat berupa bulat (kokus), batang (basil), spiral, atau filamen, bergantung pada spesiesnya."
        },
        {
          "label": "Dinding Sel",
          "value": "Peptidoglikan",
          "desc": "Sebagian besar Eubacteria memiliki dinding sel yang tersusun dari peptidoglikan, salah satu ciri utama yang membedakannya dari Archaea."
        },
        {
          "label": "Materi Genetik",
          "value": "Nukleoid & Plasmid",
          "desc": "Materi genetik utama berupa satu DNA sirkular yang tersebar bebas di sitoplasma (nukleoid). Sebagian bakteri juga memiliki plasmid, yaitu DNA tambahan berukuran kecil."
        }
      ],
      "habitat": "Eubacteria dapat ditemukan hampir di seluruh lingkungan di Bumi, mulai dari tanah dan air, hingga hidup berasosiasi dengan organisme lain. Beberapa jenis bahkan mampu bertahan hidup di lingkungan yang ekstrem.",
      "habitatProfile": [
        {
          "label": "Kebutuhan Oksigen",
          "value": "Sangat bervariasi",
          "desc": "Ada bakteri yang memerlukan oksigen untuk hidup (aerob), ada yang dapat hidup dengan atau tanpa oksigen, dan ada pula yang justru mati bila terpapar oksigen (anaerob)."
        },
        {
          "label": "Derajat Keasaman",
          "value": "Umumnya netral, sebagian ekstrem",
          "desc": "Sebagian besar bakteri hidup pada lingkungan dengan pH mendekati netral, tetapi ada pula yang mampu bertahan di lingkungan yang sangat asam atau sangat basa."
        },
        {
          "label": "Ketahanan Termal",
          "value": "Dingin hingga sangat panas",
          "desc": "Ada bakteri yang hidup nyaman di lingkungan dingin, sedangkan sebagian lain mampu bertahan pada suhu yang sangat panas."
        }
      ],
      "nutrition": "Eubacteria memiliki cara memperoleh energi yang sangat beragam. Sebagian besar bersifat heterotrof, yaitu menyerap bahan organik dari lingkungannya, tetapi ada pula yang bersifat autotrof melalui fotosintesis atau dengan memanfaatkan senyawa anorganik sebagai sumber energi.",
      "reproduction": "Eubacteria umumnya berkembang biak secara aseksual melalui pembelahan biner, yaitu satu sel membelah menjadi dua sel baru yang identik. Beberapa jenis bakteri, seperti Bacillus, dapat membentuk endospora yang sangat tahan terhadap kondisi lingkungan yang buruk.",
      "ecology": "Eubacteria berperan penting dalam siklus biogeokimia, terutama sebagai pengurai bahan organik dan mitra fiksasi nitrogen bagi tumbuhan. Selain itu, beberapa jenis dimanfaatkan dalam bidang kesehatan dan bioteknologi, misalnya dalam produksi antibiotik.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposisi &mdash; membantu menguraikan sisa organisme mati di tanah maupun perairan.",
          "Fiksasi nitrogen &mdash; misalnya Rhizobium yang bersimbiosis dengan akar tanaman legum, membantu menyuburkan tanah.",
          "Produksi antibiotik &mdash; misalnya Streptomyces yang menghasilkan berbagai jenis antibiotik yang digunakan dalam pengobatan."
        ],
        "harms": [
          "Patogen manusia &mdash; misalnya Mycobacterium tuberculosis penyebab TBC dan Vibrio cholerae penyebab kolera.",
          "Produksi toksin &mdash; misalnya Clostridium botulinum yang menghasilkan racun berbahaya pada makanan.",
          "Infeksi di lingkungan rumah sakit &mdash; beberapa bakteri, seperti Pseudomonas, dapat menyebabkan infeksi yang sulit diobati."
        ]
      },
      "examples": "Escherichia coli, Rhizobium leguminosarum, Streptomyces griseus",
      "exampleNotes": [
        { "name": "Escherichia coli", "note": "Umumnya hidup sebagai flora normal di usus manusia, meski beberapa galur bisa bersifat patogen" },
        { "name": "Rhizobium leguminosarum", "note": "Bersimbiosis dengan akar tanaman legum untuk membantu proses fiksasi nitrogen" },
        { "name": "Streptomyces griseus", "note": "Bakteri tanah yang dikenal sebagai penghasil antibiotik streptomycin" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Eubacteria adalah bentuk selnya dan keberadaan dinding sel berbahan peptidoglikan.",
      "challenge": {
        "question": "Ciri utama yang membedakan dinding sel Eubacteria dari Archaea adalah…",
        "options": [
          "Eubacteria memiliki dinding sel dari peptidoglikan, sedangkan Archaea tidak",
          "Eubacteria tidak memiliki dinding sel sama sekali",
          "Hanya Archaea yang memiliki dinding sel",
          "Keduanya memiliki komposisi dinding sel yang identik"
        ],
        "answer": "Eubacteria memiliki dinding sel dari peptidoglikan, sedangkan Archaea tidak",
        "explanation": "Sebagian besar Eubacteria memiliki dinding sel yang mengandung peptidoglikan, sementara Archaea sama sekali tidak memiliki peptidoglikan pada dinding selnya."
      }
    },
    
"archaea": {
      "id": "archaea",
      "kingdom": "monera",
      "label": "Archaea",
      "title": "Archaea: Domain Prokariotik yang Unik",
      "scientific": "Archaea",
      "definition": "Archaea (dahulu disebut Archaebacteria) adalah domain organisme prokariotik uniseluler yang berbeda secara evolusioner dari Bacteria maupun Eukarya. Dulu, Archaea dikenal sebagai organisme purba yang hanya mampu bertahan hidup di lingkungan ekstrem. Penelitian modern menunjukkan anggapan itu keliru: Archaea sebenarnya tersebar luas di seluruh biosfer, termasuk di tanah dan lautan yang kondisinya biasa saja.",
      "embedUrl": "https://sketchfab.com/models/eb47b67df9ca4c47b681716d572e3177/embed?autostart=1&transparent=1",
      "body": "Seperti prokariotik lainnya, sel Archaea tidak memiliki organel yang dibungkus membran maupun membran inti sejati. Ciri paling khas dari Archaea ada pada dinding selnya: berbeda dari Bacteria, dinding sel Archaea sama sekali tidak mengandung peptidoglikan, melainkan bahan penyusun lain seperti pseudomurein.",
      "morphologyProfile": [
        {
          "label": "Bentuk Sel",
          "value": "Sangat beragam (bulat, batang, filamen, dll)",
          "desc": "Bentuk sel Archaea sangat bervariasi, mulai dari bulat, batang, hingga filamen, bergantung pada spesiesnya."
        },
        {
          "label": "Dinding Sel",
          "value": "Tanpa peptidoglikan",
          "desc": "Ketiadaan peptidoglikan inilah yang membedakan Archaea secara mendasar dari Bacteria. Sebagai gantinya, dinding sel Archaea tersusun dari bahan lain seperti pseudomurein atau lapisan protein."
        },
        {
          "label": "Lipid Membran",
          "value": "Ikatan eter, bukan ester",
          "desc": "Pada Bacteria dan Eukarya, lipid membran sel terhubung lewat ikatan ester. Archaea justru memakai ikatan eter, salah satu ciri biokimia unik yang membedakannya dari kedua domain lainnya."
        }
      ],
      "habitat": "Archaea dikenal luas karena kemampuannya hidup di lingkungan ekstrem, seperti kolam garam yang sangat asin, kawasan vulkanik, dan lubang hidrotermal di dasar laut. Namun, penelitian modern menunjukkan Archaea juga banyak ditemukan di lingkungan biasa, seperti tanah dan lautan pada umumnya.",
      "habitatProfile": [
        {
          "label": "Kebutuhan Oksigen",
          "value": "Sangat bervariasi",
          "desc": "Metanogen tidak bisa hidup jika terpapar oksigen, sedangkan sebagian besar Archaea yang hidup di lingkungan sangat asin justru memerlukan oksigen untuk hidup."
        },
        {
          "label": "Derajat Keasaman",
          "value": "Sangat luas",
          "desc": "Archaea dapat ditemukan pada rentang pH yang sangat lebar, dari lingkungan yang sangat asam hingga lingkungan yang sangat basa."
        },
        {
          "label": "Ketahanan Termal",
          "value": "Dingin hingga sangat panas",
          "desc": "Sebagian Archaea hidup di perairan kutub yang dingin, sedangkan sebagian lain mampu bertahan pada suhu yang sangat tinggi, bahkan mendekati titik didih air."
        }
      ],
      "nutrition": "Archaea memiliki cara memperoleh energi yang beragam. Salah satu yang paling khas adalah metanogenesis, yaitu kemampuan menghasilkan gas metana, yang hanya ditemukan pada kelompok Archaea tertentu. Beberapa Archaea lain memperoleh energi dari senyawa anorganik, sementara sebagian kecil dapat memanfaatkan cahaya sebagai sumber energi.",
      "reproduction": "Archaea berkembang biak secara aseksual, umumnya melalui pembelahan biner. Berbeda dari beberapa Eubacteria, Archaea tidak membentuk endospora sebagai struktur bertahan hidup.",
      "ecology": "Archaea berperan penting dalam siklus biogeokimia. Metanogen, misalnya, berperan dalam siklus karbon di lingkungan tanpa oksigen dengan menghasilkan gas metana. Beberapa jenis lain berperan dalam siklus nitrogen atau dimanfaatkan dalam bidang industri.",
      "ecologyRoles": {
        "benefits": [
          "Siklus Nitrogen &mdash; sebagian Archaea berperan dalam oksidasi amonia di tanah dan lautan.",
          "Siklus Karbon &mdash; metanogen menghasilkan gas metana pada proses dekomposisi bahan organik tanpa oksigen.",
          "Bioteknologi &mdash; beberapa Archaea tahan panas dimanfaatkan sebagai sumber enzim yang stabil pada suhu tinggi."
        ],
        "harms": [
          "Kerusakan Makanan &mdash; Haloarchaea dapat tumbuh pada makanan yang sangat asin sehingga menyebabkan pembusukan.",
          "Emisi Gas Rumah Kaca &mdash; metanogen dari lahan basah dan hewan ternak melepaskan gas metana ke atmosfer.",
          "Catatan &mdash; hingga saat ini belum ditemukan Archaea yang bersifat patogen bagi manusia."
        ]
      },
      "examples": "Methanopyrus kandleri, Sulfolobus, Halobacterium",
      "exampleNotes": [
        { "name": "Methanopyrus kandleri", "note": "Salah satu metanogen yang mampu hidup pada suhu sangat tinggi" },
        { "name": "Sulfolobus", "note": "Archaea yang hidup di lingkungan asam dan bersuhu tinggi, dimanfaatkan dalam industri pengolahan bijih logam" },
        { "name": "Halobacterium", "note": "Archaea yang hidup di lingkungan yang sangat asin dan dapat memanfaatkan cahaya sebagai sumber energi" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Archaea adalah ketiadaan peptidoglikan pada dinding selnya serta kemampuannya hidup di lingkungan yang beragam, termasuk lingkungan ekstrem.",
      "challenge": {
        "question": "Ciri biokimia utama yang membedakan Archaea dari Eubacteria adalah…",
        "options": [
          "Archaea tidak memiliki peptidoglikan pada dinding selnya, sedangkan Eubacteria umumnya memilikinya",
          "Archaea selalu hidup di lingkungan ekstrem, sedangkan Eubacteria tidak",
          "Archaea memiliki membran inti sejati, sedangkan Eubacteria tidak",
          "Archaea bersifat multiseluler, sedangkan Eubacteria uniseluler"
        ],
        "answer": "Archaea tidak memiliki peptidoglikan pada dinding selnya, sedangkan Eubacteria umumnya memilikinya",
        "explanation": "Ketiadaan peptidoglikan pada dinding sel merupakan salah satu ciri biokimia utama yang membedakan Archaea dari Eubacteria."
      }
    },
    "protozoa": {
      "id": "protozoa",
      "kingdom": "protista",
      "label": "Protozoa",
      "title": "Protista Mirip Hewan: Protozoa",
      "scientific": "Protozoa",
      "definition": "Protozoa (Protista Mirip Hewan) adalah istilah informal untuk kelompok protista uniseluler heterotrof yang umumnya bermotilitas (dapat bergerak aktif). Protozoa bukan takson formal seperti filum atau kelas, melainkan pengelompokan ekologis dan fungsional berdasarkan kemiripan cara hidupnya dengan hewan.",
      "body": "Sebagai sel eukariotik tunggal, Protozoa menjalankan seluruh fungsi vital &mdash; makan, bergerak, dan bereproduksi &mdash; yang pada hewan multiseluler dilakukan oleh organ tubuh terpisah. Klasifikasi klasik membagi Protozoa menjadi empat subkelompok berdasarkan alat geraknya: Rhizopoda (pseudopodia), Flagellata (flagela), Ciliata (silia), dan Sporozoa (tanpa alat gerak aktif). Sistematika modern kemudian memetakan keempatnya ke supergrup eukariota yang berbeda-beda &mdash; Rhizopoda tersebar ke Amoebozoa dan Rhizaria, Flagellata parasit ke Excavata, sedangkan Ciliata dan Sporozoa sama-sama masuk ke Alveolata (SAR).",
      "morphologyProfile": [
        {
          "label": "Alat Gerak",
          "value": "Pseudopodia, Flagela, Silia, atau Tanpa Alat Gerak",
          "desc": "Rhizopoda bergerak dengan pseudopodia (kaki semu) hasil penjuluran sitoplasma; Flagellata memakai satu atau lebih flagela; Ciliata ditutupi silia yang bergetar terkoordinasi; Sporozoa (Apicomplexa) sama sekali tidak memiliki alat gerak aktif pada fase dewasanya karena hidup sebagai parasit obligat."
        },
        {
          "label": "Pembungkus Sel",
          "value": "Pelikel, Cangkang, atau Tanpa Dinding Sel",
          "desc": "Protozoa tidak memiliki dinding sel dari selulosa. Sebagai gantinya, sebagian diperkuat oleh pelikel &mdash; pita-pita protein heliks di bawah membran plasma (misalnya pada Euglena) &mdash; sementara Foraminifera memiliki cangkang kalsium karbonat dan Radiolaria memiliki rangka silika."
        },
        {
          "label": "Organel Khusus",
          "value": "Vakuola Kontraktil & Vakuola Makanan",
          "desc": "Vakuola kontraktil memompa kelebihan air keluar sel agar tidak lisis di lingkungan hipotonik (terutama pada Protozoa air tawar), sedangkan vakuola makanan terbentuk dari fagositosis dan berfusi dengan lisosom untuk mencerna mangsa secara intraseluler. Ciliata seperti Paramecium bahkan memiliki dua jenis nukleus (mikronukleus dan makronukleus) sekaligus."
        }
      ],
      "habitat": "Protozoa didominasi oleh organisme akuatik dan dapat ditemukan hampir di semua tempat yang mengandung air, mulai dari laut, danau, sungai, kolam, tanah basah, hingga tumpukan dedaunan lembap. Spesies hidup bebas berperan sebagai zooplankton atau bentos, sementara spesies parasit menetap di cairan tubuh, saluran pencernaan, atau jaringan organ inangnya.",
      "habitatProfile": [
        {
          "label": "Hidup Bebas",
          "value": "Zooplankton & Bentos Akuatik",
          "desc": "Paramecium caudatum hidup di air tawar, Radiolaria dan Foraminifera menghuni plankton dan dasar laut, sedangkan Gymnamoeba dapat ditemukan di tanah maupun perairan bebas."
        },
        {
          "label": "Parasit (Endoparasit)",
          "value": "Menetap di Jaringan Inang",
          "desc": "Giardia intestinalis di usus halus mamalia, Trichomonas vaginalis di saluran urogenital manusia, Trypanosoma di darah vertebrata, serta Plasmodium di sel hati dan sel darah merah manusia."
        },
        {
          "label": "Vektor Penular",
          "value": "Serangga Penghisap Darah",
          "desc": "Banyak Protozoa parasit ditularkan lewat gigitan serangga tertentu &mdash; nyamuk Anopheles untuk Plasmodium, lalat tsetse untuk Trypanosoma brucei, dan serangga triatomine untuk Trypanosoma cruzi."
        }
      ],
      "nutrition": "Protozoa memperoleh nutrisi melalui fagositosis (fagotrof) &mdash; menelan partikel makanan padat seperti bakteri lewat pseudopodia atau pusaran silia menuju vakuola makanan &mdash; maupun absorpsi (osmotrof) berupa penyerapan molekul organik terlarut langsung dari lingkungan atau inang, terutama pada spesies parasit seperti Trypanosoma. Beberapa spesies bersifat miksotrof, menggabungkan fotosintesis saat ada cahaya dan menyerap nutrisi organik saat gelap (misalnya Euglena).",
      "reproduction": "Reproduksi aseksual umumnya berlangsung melalui pembelahan biner mitosis, sedangkan Apicomplexa dapat melakukan pembelahan ganda (skizogoni) di dalam sel inang untuk menghasilkan ribuan sel infeksius baru sekaligus. Ciliata seperti Paramecium melakukan konjugasi &mdash; pertukaran mikronukleus haploid antar dua sel yang bertindak sebagai proses seksual rekombinasi genetik tanpa menambah jumlah individu secara langsung. Plasmodium memiliki siklus hidup dua inang yang kompleks: fase aseksual pada manusia (sporozoit &rarr; merozoit &rarr; gametosit) dan fase seksual pada nyamuk Anopheles (fertilisasi gamet &rarr; zigot &rarr; sporozoit baru).",
      "ecology": "Protozoa hidup bebas berperan penting sebagai zooplankton pemakan mikroba dan fitoplankton sekaligus pakan utama larva ikan, sementara spesies parasitnya menjadi penyebab sejumlah penyakit serius pada manusia dan hewan. Fosil cangkang Foraminifera bahkan menjadi penanda geologis penting dalam penentuan umur lapisan batuan sedimen.",
      "ecologyRoles": {
        "benefits": [
          "Zooplankton &mdash; Ciliata, Foraminifera, dan Radiolaria hidup bebas menjadi dasar jaring makanan akuatik dan pakan utama larva ikan.",
          "Simbion Pencerna Selulosa &mdash; Parabasalid dalam usus rayap menghasilkan enzim pengurai selulosa kayu, tanpanya rayap tidak dapat mencerna kayu.",
          "Penanda Biostratigrafi &mdash; fosil cangkang kalsium karbonat Foraminifera yang menumpuk di dasar laut menjadi indikator akurat umur lapisan batuan sedimen dan penunjuk lokasi pengeboran minyak bumi."
        ],
        "harms": [
          "Malaria &mdash; Plasmodium falciparum yang ditularkan nyamuk Anopheles menyebabkan anemia berat hingga kematian massal di wilayah tropis.",
          "Disentri Amoeba &mdash; Entamoeba histolytica merusak dinding usus besar dan memicu diare berdarah lewat air atau makanan tercemar kista.",
          "Penyakit Tidur Afrika & Penyakit Chagas &mdash; Trypanosoma brucei dan Trypanosoma cruzi menyerang sistem saraf pusat dan jantung lewat gigitan lalat tsetse serta triatomine."
        ]
      },
      "examples": "Paramecium caudatum, Plasmodium falciparum, Trypanosoma brucei, Entamoeba histolytica, Giardia intestinalis",
      "exampleNotes": [
        { "name": "Paramecium caudatum", "note": "Ciliata air tawar berbentuk sandal, organisme model laboratorium untuk mempelajari organel sel tunggal dan proses konjugasi" },
        { "name": "Plasmodium falciparum", "note": "Apicomplexa parasit penyebab malaria tropika mematikan dengan siklus hidup dua inang (manusia dan nyamuk Anopheles)" },
        { "name": "Trypanosoma brucei", "note": "Kinetoplastid penyebab penyakit tidur Afrika, terkenal dengan strategi 'umpan-dan-ganti' protein permukaan sel untuk menghindari sistem imun inang" },
        { "name": "Entamoeba histolytica", "note": "Amoeba parasit penyebab disentri ameba lewat rute fekal-oral" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Protozoa adalah sifatnya sebagai sel tunggal heterotrof dengan alat gerak khas (pseudopodia, flagela, atau silia) atau, pada Sporozoa, ketiadaan alat gerak akibat gaya hidup parasit obligat.",
      "challenge": {
        "question": "Kelompok Protozoa yang tidak memiliki alat gerak aktif pada fase dewasa karena hidup sebagai parasit obligat intraseluler adalah…",
        "options": [
          "Rhizopoda",
          "Flagellata",
          "Ciliata",
          "Sporozoa (Apicomplexa)"
        ],
        "answer": "Sporozoa (Apicomplexa)",
        "explanation": "Sporozoa seperti Plasmodium tidak memiliki alat gerak aktif pada fase dewasanya; mereka menyebar sebagai sel penginfeksi kecil bernama sporozoit dan bergantung pada kompleks apikal untuk menembus sel inang."
      }
    },
    "algae": {
      "id": "algae",
      "kingdom": "protista",
      "label": "Algae",
      "title": "Protista Mirip Tumbuhan: Algae",
      "scientific": "Algae",
      "definition": "Algae (Protista Mirip Tumbuhan) adalah istilah informal untuk protista fotoautotrof yang memiliki plastida (kloroplas) untuk berfotosintesis. Algae bukan takson formal tunggal karena bersifat polifiletik; berbagai garis keturunannya diperoleh secara independen lewat peristiwa endosimbiosis yang berbeda-beda sepanjang sejarah evolusi.",
      "body": "Keragaman kloroplas Algae terbentuk lewat endosimbiosis berulang. Endosimbiosis primer &mdash; saat eukariota heterotrofik purba menelan sianobakteri &mdash; melahirkan alga merah (Rhodophyta) dan alga hijau (Chlorophyta). Endosimbiosis sekunder kemudian terjadi saat alga hijau atau alga merah uniseluler ditelan kembali oleh eukariota heterotrofik lain, menghasilkan kelompok seperti Euglenophyta (dari alga hijau) serta Chromalveolata seperti diatom, alga cokelat, dan Dinoflagellata (dari alga merah). Bukti paling nyata terlihat pada Chlorarachniophyta, yang plastidanya masih menyisakan nukleomorph &mdash; sisa inti sel alga hijau yang ditelannya, terbungkus oleh hingga empat lapis membran.",
      "morphologyProfile": [
        {
          "label": "Dinding Sel",
          "value": "Selulosa, Silika, atau Algin",
          "desc": "Alga merah dan hijau memiliki dinding sel kaya selulosa; Diatom memiliki dinding kaca dari silika terhidrasi yang tersusun dari dua belahan bertumpuk mirip kotak sepatu; alga cokelat diperkuat serat selulosa dan matriks algin pelindung ombak."
        },
        {
          "label": "Pigmen Dominan",
          "value": "Klorofil a/b, Fukosantin, atau Fikoeritrin",
          "desc": "Chlorophyta memakai klorofil a dan b (hijau); Phaeophyta memakai fukosantin (cokelat); Rhodophyta memakai fikoeritrin yang menyerap cahaya biru-hijau sehingga mampu hidup di laut sangat dalam; Chrysophyta memakai karotenoid keemasan."
        },
        {
          "label": "Organisasi Tubuh",
          "value": "Uniseluler hingga Multiseluler Kompleks",
          "desc": "Mulai dari sel tunggal (Diatom, Dinoflagellata), koloni (Volvox), hingga talus multiseluler kompleks pada alga cokelat raksasa dengan diferensiasi holdfast (mirip akar), stipe (mirip batang), dan blade (mirip daun). Caulerpa bahkan membentuk 'supersel' multinukleat raksasa tanpa sekat sel."
        }
      ],
      "habitat": "Mayoritas Algae adalah organisme akuatik. Diatom dan alga pirang melimpah di laut terbuka maupun air tawar sebagai komponen plankton utama; alga cokelat mendominasi pesisir berbatu bersuhu dingin membentuk hutan kelp; alga merah dominan di laut tropis hangat hingga kedalaman lebih dari 260 meter; alga hijau mayoritas hidup di air tawar, dengan beberapa spesies beradaptasi ekstrem di salju gletser.",
      "habitatProfile": [
        {
          "label": "Laut Dangkal & Terbuka",
          "value": "Diatom & Dinoflagellata",
          "desc": "Menjadi komponen plankton fotosintetik paling melimpah, menyokong seluruh jaring makanan akuatik dari zooplankton hingga paus raksasa."
        },
        {
          "label": "Pesisir Berbatu Dingin",
          "value": "Hutan Kelp (Alga Cokelat)",
          "desc": "Phaeophyta multiseluler raksasa membentuk ekosistem hutan kelp bawah laut yang menjadi habitat penting bagi berbagai organisme laut."
        },
        {
          "label": "Habitat Ekstrem",
          "value": "Salju Gletser & Laut Dalam",
          "desc": "Chlamydomonas nivalis hidup di salju pegunungan beku menghasilkan fenomena 'salju semangka', sementara Rhodophyta berpigmen fikoeritrin mampu berfotosintesis hingga kedalaman laut lebih dari 260 meter."
        }
      ],
      "nutrition": "Sebagian besar Algae bersifat fotoautotrof obligat, memanfaatkan energi cahaya matahari untuk mereduksi CO2 menjadi gula. Beberapa kelompok bersifat miksotrof &mdash; Euglena berfotosintesis saat terang dan menyerap molekul organik saat gelap, sementara Dinobryon dapat menelan bakteri lewat fagositosis saat cahaya redup. Sebagian kecil spesies Rhodophyta bahkan kehilangan kloroplasnya sepenuhnya dan hidup sebagai parasit heterotrof pada alga merah lain.",
      "reproduction": "Reproduksi aseksual pada Algae uniseluler berlangsung lewat pembelahan biner mitosis atau pembentukan zoospora berflagela. Reproduksi seksual melibatkan meiosis dan fertilisasi, dan pada alga multiseluler dapat menghasilkan pergiliran generasi (alternation of generations) &mdash; fase sporofit diploid dan gametofit haploid yang sama-sama multiseluler dan bergiliran menghasilkan satu sama lain, baik secara heteromorfik (berbeda bentuk, seperti pada Laminaria) maupun isomorfik (bentuk identik, seperti pada Ulva).",
      "ecology": "Algae fotosintetik merupakan produsen primer utama ekosistem akuatik dan diperkirakan menyumbang lebih dari 25% fotosintesis dunia. Dinoflagellata fotosintetik (zooxanthellae) juga bersimbiosis mutualisme dengan polip koral, menjadi mesin penggerak pertumbuhan terumbu karang.",
      "ecologyRoles": {
        "benefits": [
          "Produsen Primer Global &mdash; Diatom dan Dinoflagellata menjadi fondasi jaring makanan akuatik dan menyumbang lebih dari seperempat fotosintesis dunia.",
          "Simbion Terumbu Karang &mdash; zooxanthellae (Dinoflagellata) menyuplai energi hasil fotosintesis bagi pertumbuhan polip koral pembangun terumbu.",
          "Manfaat Ekonomi &mdash; algin dari alga cokelat digunakan sebagai pengental makanan, nori dari Porphyra (alga merah) dipakai membungkus sushi, dan tanah diatom dimanfaatkan sebagai bahan penyaring air."
        ],
        "harms": [
          "Ledakan Alga Beracun (Red Tide) &mdash; pencemaran nutrien memicu ledakan populasi Dinoflagellata yang melepaskan toksin saraf, membunuh ikan massal dan meracuni kerang yang dikonsumsi manusia.",
          "Kerusakan Kulit Ikan &mdash; Dinoflagellata parasit Pfiesteria shumwayae merusak jaringan kulit ikan hingga menyebabkan kematian massal.",
          "Catatan &mdash; Oomycetes seperti Phytophthora infestans, meski diturunkan dari nenek moyang berplastida, telah kehilangan kloroplas fungsionalnya dan kini diklasifikasikan terpisah sebagai protista mirip jamur."
        ]
      },
      "examples": "Laminaria, Porphyra, Chlamydomonas nivalis, Ulva, Caulerpa",
      "exampleNotes": [
        { "name": "Laminaria", "note": "Alga cokelat multiseluler raksasa (kelp) dengan siklus hidup pergiliran generasi heteromorfik, dikonsumsi sebagai kombu di Jepang" },
        { "name": "Porphyra", "note": "Alga merah multiseluler tipis yang dibudidayakan untuk memproduksi lembaran nori pembungkus sushi" },
        { "name": "Chlamydomonas nivalis", "note": "Alga hijau uniseluler beradaptasi di salju gletser beku, menghasilkan fenomena 'salju semangka' berkat pigmen karotenoid merah" },
        { "name": "Caulerpa", "note": "Alga hijau intertidal tanpa sekat sel; seluruh talusnya adalah satu supersel multinukleat raksasa (coenositik)" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Algae adalah keberadaan kloroplas berpigmen dan dinding sel sejati (selulosa, silika, atau algin), berbeda dari Protozoa yang heterotrof dan tidak berdinding sel kaku.",
      "challenge": {
        "question": "Alga hijau Caulerpa memiliki talus raksasa yang menyerupai tumbuhan multiseluler, namun secara sitologis ia tetap dianggap sebagai...",
        "options": [
          "Organisme multiseluler sejati seperti Ulva",
          "Satu sel raksasa multinukleat (coenositik) tanpa sekat",
          "Koloni sel independen seperti Volvox",
          "Organisme prokariotik"
        ],
        "answer": "Satu sel raksasa multinukleat (coenositik) tanpa sekat",
        "explanation": "Pada Caulerpa, mitosis nukleus terjadi berulang tanpa disertai sitokinesis, sehingga seluruh talusnya yang bercabang tetap merupakan satu sitoplasma bersambung dengan banyak nukleus, bukan kumpulan sel-sel terpisah."
      }
    },
    "slime-molds": {
      "id": "slime-molds",
      "kingdom": "protista",
      "label": "Protista Mirip Jamur",
      "title": "Protista Mirip Jamur: Jamur Lendir & Jamur Air",
      "scientific": "Myxomycota, Acrasiomycota, & Oomycota",
      "definition": "Protista Mirip Jamur adalah istilah informal untuk kelompok protista heterotrof yang memiliki kemiripan morfologi dan cara hidup dengan fungi sejati &mdash; menghasilkan tubuh buah penghasil spora atau jaringan berfilamen mirip hifa. Kemiripan ini terbentuk lewat evolusi konvergen, bukan kekerabatan dekat: jamur lendir (Myxomycota & Acrasiomycota) sebenarnya berkerabat dengan amoeba di Amoebozoa, sedangkan jamur air (Oomycota) justru berkerabat dekat dengan alga fotosintetik di Stramenopila.",
      "body": "Dinding sel adalah pembeda utamanya dari fungi sejati: dinding sel jamur mirip protista ini tersusun dari selulosa, bukan kitin seperti pada fungi. Myxomycota (jamur lendir plasmodial) pada fase mencari makan berbentuk plasmodium &mdash; satu massa sitoplasma raksasa berlendir tanpa sekat sel yang mengandung ribuan nukleus diploid hasil mitosis berulang tanpa sitokinesis. Acrasiomycota (jamur lendir seluler) berbeda karena sel-sel ameboid haploidnya tetap bersekat individual, dan hanya beragregasi membentuk 'siput' semu saat makanan menipis. Oomycota (jamur air) sama sekali tidak membentuk plasmodium maupun agregat, melainkan tumbuh sebagai jaringan hifa multinukleat yang menyerap nutrisi secara absorptif.",
      "morphologyProfile": [
        {
          "label": "Fase Vegetatif",
          "value": "Plasmodium, Ameba Soliter, atau Hifa",
          "desc": "Myxomycota membentuk plasmodium tak bersekat yang merayap dan menelan makanan lewat fagositosis; Acrasiomycota berupa sel ameba soliter bersekat yang beragregasi saat kelaparan; Oomycota tumbuh sebagai hifa diploid multinukleat yang menyerap nutrisi lewat dinding selulosanya."
        },
        {
          "label": "Struktur Reproduktif",
          "value": "Sporangium & Tubuh Buah",
          "desc": "Jamur lendir plasmodial maupun seluler sama-sama membentuk tubuh buah bertangkai penghasil spora saat kondisi memburuk, mirip secara visual dengan spora fungi sejati meski terbentuk lewat mekanisme evolusi yang berbeda."
        },
        {
          "label": "Aliran Sitoplasma",
          "value": "Cytoplasmic Streaming",
          "desc": "Di dalam plasmodium Myxomycota, sitoplasma mengalir berdenyut bolak-balik untuk mengedarkan oksigen dan nutrien ke seluruh bagian tubuh raksasa yang tak bersekat tersebut."
        }
      ],
      "habitat": "Jamur lendir (Myxomycota & Acrasiomycota) melimpah di lantai hutan yang rindang dan lembap, merayap di atas tanah basah, serasah dedaunan, atau kayu lapuk yang kaya mikroba. Jamur air (Oomycota) sebagian besar hidup bebas di ekosistem air tawar tenang, sementara kerabatnya seperti karat putih dan embun tepung beradaptasi sebagai parasit obligat pada daun tanaman budidaya.",
      "habitatProfile": [
        {
          "label": "Lantai Hutan Lembap",
          "value": "Jamur Lendir",
          "desc": "Myxomycota dan Acrasiomycota merayap di atas serasah dedaunan basah dan kayu busuk, memakan bakteri dan mikroba lewat fagositosis."
        },
        {
          "label": "Perairan Tawar",
          "value": "Jamur Air Hidup Bebas",
          "desc": "Oomycota akuatik berperan sebagai dekomposer, menguraikan bangkai serangga, ikan, dan bahan organik mati di dasar air."
        },
        {
          "label": "Jaringan Tanaman",
          "value": "Oomycetes Parasit Obligat",
          "desc": "Beberapa Oomycota darat hidup sebagai parasit pada daun dan batang tanaman budidaya, menembus jaringan lewat hifa untuk menyerap cairan sel inang."
        }
      ],
      "nutrition": "Jamur lendir (Myxomycota & Acrasiomycota) bersifat fagotrof &mdash; menelan bakteri, ragi, spora, dan detritus organik lewat pseudopodia ke dalam vakuola makanan. Jamur air (Oomycota) bersifat osmotrof/absorptif, mensekresikan enzim hidrolitik untuk memecah molekul organik kompleks di luar tubuh sebelum menyerap hasilnya lewat dinding selulosa dan membran hifa; sebagian hidup sebagai parasit obligat yang menyerap cairan sel inang tanpa langsung membunuhnya.",
      "reproduction": "Myxomycota: plasmodium diploid tumbuh tegak membentuk sporangium bertangkai saat makanan menipis, di dalamnya terjadi meiosis menghasilkan spora haploid berdinding tebal; spora bergerminasi menjadi sel ameboid atau berflagela yang dapat berfusi (fertilisasi) membentuk zigot diploid dan plasmodium baru. Acrasiomycota: sel ameba haploid beragregasi membentuk tubuh buah aseksual bertangkai, di mana sel penyusun tangkai mengering dan mati untuk menyokong sel-sel di puncak yang berdiferensiasi menjadi spora; siklus seksual (jarang terjadi) melibatkan fusi dua sel ameba membentuk zigot diploid yang kemudian bermeiosis. Oomycota: reproduksi aseksual lewat zoosporangium penghasil zoospora biflagelata, sedangkan reproduksi seksual melibatkan oogonium betina dan hifa anteridial jantan yang menghasilkan zigot berdinding tebal (oospora) tahan dormansi ekstrem.",
      "ecology": "Sebagai dekomposer, kelompok ini menguraikan bahan organik mati di lantai hutan maupun ekosistem perairan tawar, membantu mendaur ulang unsur hara bagi produsen primer. Namun, beberapa Oomycota merupakan patogen tanaman pertanian dan kehutanan yang berdampak sejarah maupun ekonomi besar.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposer Lantai Hutan &mdash; Myxomycota dan Acrasiomycota menguraikan serasah dan kayu lapuk lembap, mendaur ulang nutrien tanah.",
          "Dekomposer Akuatik &mdash; Oomycota menguraikan bangkai organisme dan bahan organik mati di dasar perairan tawar.",
          "Organisme Model Riset &mdash; Dictyostelium discoideum menjadi model laboratorium penting untuk mempelajari evolusi multiselularitas dan komunikasi sosial antarsel."
        ],
        "harms": [
          "Hawar Daun Kentang &mdash; Phytophthora infestans memicu Bencana Kelaparan Besar di Irlandia abad ke-19 yang menewaskan sekitar satu juta orang.",
          "Kematian Mendadak Ek (Sudden Oak Death) &mdash; Phytophthora ramorum telah membunuh lebih dari satu juta pohon ek di pesisir California dan Oregon sejak 1995.",
          "Penyakit Tanaman Lain &mdash; kerabat Oomycota seperti karat putih dan embun tepung menyerang daun tanaman budidaya di lahan pertanian lembap."
        ]
      },
      "examples": "Dictyostelium discoideum, Phytophthora infestans, Phytophthora ramorum",
      "exampleNotes": [
        { "name": "Dictyostelium discoideum", "note": "Jamur lendir seluler yang menjadi organisme model untuk mempelajari agregasi sel dan evolusi multiselularitas" },
        { "name": "Phytophthora infestans", "note": "Oomycetes penyebab hawar daun kentang yang memicu kelaparan massal bersejarah di Irlandia" },
        { "name": "Phytophthora ramorum", "note": "Oomycetes parasit kehutanan penyebab Sudden Oak Death yang membunuh jutaan pohon ek di pantai barat Amerika Serikat" }
      ],
      "recognize": "Ciri utama untuk mengenali kelompok ini adalah fase vegetatif berupa plasmodium/ameba soliter (jamur lendir) atau hifa berselulosa (jamur air), dilanjutkan dengan pembentukan struktur reproduktif penghasil spora yang menyerupai fungi sejati, meski dinding selnya tetap tersusun dari selulosa, bukan kitin.",
      "challenge": {
        "question": "Meskipun sama-sama disebut 'protista mirip jamur', jamur lendir (Myxomycota) dan jamur air (Oomycota) sebenarnya berkerabat sangat jauh karena…",
        "options": [
          "Jamur lendir masuk Amoebozoa (Unikonta), sedangkan jamur air masuk Stramenopila dan berkerabat dekat dengan alga fotosintetik",
          "Keduanya sama-sama masuk ke dalam Kingdom Fungi",
          "Jamur lendir bersifat fotosintetik, sedangkan jamur air tidak",
          "Keduanya memiliki dinding sel dari kitin"
        ],
        "answer": "Jamur lendir masuk Amoebozoa (Unikonta), sedangkan jamur air masuk Stramenopila dan berkerabat dekat dengan alga fotosintetik",
        "explanation": "Kemiripan bentuk hifa dan tubuh buah antara jamur lendir dan jamur air terbentuk lewat evolusi konvergen, bukan kekerabatan dekat. Analisis molekuler menunjukkan jamur lendir berkerabat dengan ameba di Amoebozoa, sedangkan jamur air (Oomycota) justru berkerabat dekat dengan diatom dan alga cokelat di Stramenopila."
      }
    },
    "chytridiomycota": {
      "id": "chytridiomycota",
      "kingdom": "fungi",
      "label": "Chytridiomycota",
      "title": "Fungi — Chytridiomycota (Chytrid)",
      "scientific": "Chytridiomycota",
      "definition": "Chytridiomycota (chytrid) adalah kelompok fungi sejati (Eumycota) berjumlah sekitar 900 spesies yang sebagian besar tumbuh secara aerobik di tanah, lumpur, atau air. Ciri paling unik dan diagnostik kelompok ini adalah kemampuannya menghasilkan zoospora (spora kembara) motil berflagela tunggal tipe cambuk (whiplash) di bagian posterior &mdash; satu-satunya filum fungi sejati yang memiliki fase sel berflagela di sepanjang siklus hidupnya.",
      "body": "Talus (tubuh jamur) Chytridiomycota sangat bervariasi: dari sel tunggal holokarpik yang seluruh talusnya berkembang di dalam sel inang dan berubah menjadi sporangium (misalnya Olpidium), sistem eucarpic monosentrik dengan struktur mirip akar tunggal bercabang, sistem eucarpic polisentrik dengan rhizomycelium bercabang luas yang menghubungkan banyak sporangium, hingga sistem hifa sederhana yang berongga dan multinukleat pada Monoblepharidales. Dinding selnya umumnya tersusun dari kitin, meski pada genus Gonapodya turut mengandung selulosa.",
      "morphologyProfile": [
        {
          "label": "Zoospora",
          "value": "Berflagela Tunggal Tipe Cambuk",
          "desc": "Zoospora berenang dengan gerakan terputus-putus (jerky/hopping) berkat satu flagela whiplash posterior berstruktur mikrotubulus 9+2 klasik &mdash; ciri yang tidak dimiliki tiga filum fungi klasik lainnya."
        },
        {
          "label": "Rhizoid",
          "value": "Struktur Mirip Akar Tanpa Nukleus",
          "desc": "Rhizoid halus bercabang menembus substrat untuk menambatkan posisi talus dan menyerap nutrisi dari luar, tetapi tidak mengandung nukleus di dalamnya."
        },
        {
          "label": "Mekanisme Pelepasan Spora",
          "value": "Operculate atau Inoperculate",
          "desc": "Sporangium operculate membuka lewat penutup mirip katup (misalnya pada Chytriomyces), sedangkan inoperculate melepaskan spora lewat ujung saluran yang melunak menjadi gelatin tanpa katup khusus (misalnya pada Olpidium)."
        }
      ],
      "habitat": "Mayoritas chytrid ditemukan di lingkungan akuatik seperti air tawar, muara sungai, dan laut, atau lingkungan darat yang sangat lembap seperti lumpur dan tanah basah. Distribusinya bersifat kosmopolitan di seluruh dunia.",
      "habitatProfile": [
        {
          "label": "Akuatik & Lumpur Basah",
          "value": "Habitat Utama",
          "desc": "Mayoritas chytrid hidup di air tawar, muara sungai, laut, atau tanah dan lumpur yang sangat lembap."
        },
        {
          "label": "Rumen Herbivora",
          "value": "Neocallimastigales (Habitat Khusus)",
          "desc": "Kelompok ini hidup secara anaerobik di dalam organ pencernaan (rumen) hewan mamalia pemakan rumput, membantu mencerna selulosa dan xilan dari serat rumput."
        },
        {
          "label": "Distribusi",
          "value": "Kosmopolitan",
          "desc": "Filum ini tersebar luas di seluruh dunia, tidak terbatas pada wilayah geografis tertentu."
        }
      ],
      "nutrition": "Chytridiomycota memperoleh energi secara heterotrof absorptif &mdash; mengeluarkan enzim pencerna ke luar tubuh lalu menyerap senyawa organik sederhana hasil rombakannya. Cara hidupnya meliputi saprofit (menguraikan bahan organik keras seperti selulosa, kitin, dan keratin), parasit biotrof (menginfeksi alga filamen, diatom, atau jaringan tumbuhan vaskular), mikoparasit (parasit pada miselium/spora jamur darat lain), dan simbion mutualisme pada rumen herbivora yang membantu mencerna serat rumput.",
      "reproduction": "Zoospora aseksual motil diproduksi di dalam zoosporangium dan dilepaskan lewat mekanisme operculate atau inoperculate akibat tekanan air internal. Sebelum tumbuh menjadi talus baru, zoospora mengalami enkistasi &mdash; berhenti bergerak, melepaskan flagelanya, lalu mensekresikan dinding sel pelindung. Reproduksi seksual sangat bervariasi: gametogami (isogami pada Synchytrium atau anisogami pada Allomyces), somatogami (penggabungan langsung rhizoid/hifa vegetatif dua talus berdekatan), dan oogami (peleburan sel telur nonmotil besar dengan spermatozoid berflagela kecil, khusus pada Monoblepharidales). Hasil akhirnya berupa spora istirahat berdinding tebal kaya lipid untuk bertahan di lingkungan ekstrem.",
      "ecology": "Sebagai dekomposer akuatik, chytrid berperan vital mendaur ulang unsur hara dengan menguraikan materi organik tangguh seperti selulosa, kitin, dan keratin, sekaligus membantu pencernaan serat pakan pada hewan ternak herbivora lewat simbiosis di rumen. Namun beberapa spesies juga bertindak sebagai patogen fitoplankton, tanaman pangan, dan vektor virus tanaman.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposer Akuatik & Tanah Basah &mdash; menguraikan selulosa tumbuhan, kitin serangga, dan keratin, mendaur ulang unsur hara di ekosistem perairan.",
          "Simbion Rumen Herbivora &mdash; Neocallimastigales membantu mamalia pemakan rumput mencerna selulosa dan xilan dari serat rumput.",
          "Regulator Populasi Plankton &mdash; parasit chytrid alami dapat menekan populasi diatom fitoplankton, ikut menjaga keseimbangan ekosistem perairan."
        ],
        "harms": [
          "Epidemi Fitoplankton &mdash; Rhizophydium planktonicum dapat menekan populasi diatom Asterionella formosa secara drastis di danau air tawar.",
          "Patogen Tanaman Pangan &mdash; Synchytrium endobioticum menyebabkan penyakit kutil hitam yang merusak umbi kentang.",
          "Vektor Virus Tanaman &mdash; Olpidium brassicae menularkan virus tanaman berbahaya seperti virus big vein pada selada dari satu tanaman ke tanaman lain."
        ]
      },
      "examples": "Synchytrium endobioticum, Olpidium brassicae, Rhizophydium planktonicum",
      "exampleNotes": [
        { "name": "Synchytrium endobioticum", "note": "Patogen obligat penyebab penyakit kutil hitam (black wart disease) pada umbi kentang" },
        { "name": "Olpidium brassicae", "note": "Parasit endobiotik akar kubis-kubisan yang bertindak sebagai vektor penular virus tanaman" },
        { "name": "Rhizophydium planktonicum", "note": "Parasit diatom Asterionella formosa yang dapat memicu epidemi penekan populasi fitoplankton danau" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Chytridiomycota adalah kemampuannya menghasilkan zoospora berflagela tunggal tipe cambuk &mdash; satu-satunya filum fungi sejati dengan fase sel motil di sepanjang siklus hidupnya.",
      "challenge": {
        "question": "Ciri diagnostik utama yang membedakan Chytridiomycota dari tiga filum fungi klasik lainnya (Zygomycota, Ascomycota, Basidiomycota) adalah…",
        "options": [
          "Dinding selnya tersusun dari selulosa, bukan kitin",
          "Kemampuan menghasilkan zoospora motil berflagela tunggal tipe cambuk",
          "Tidak pernah membentuk struktur reproduktif",
          "Hidup secara fotoautotrof"
        ],
        "answer": "Kemampuan menghasilkan zoospora motil berflagela tunggal tipe cambuk",
        "explanation": "Chytridiomycota adalah satu-satunya filum fungi sejati (Eumycota) yang menghasilkan zoospora motil berflagela posterior tipe cambuk (whiplash); tiga filum fungi klasik lainnya sama sekali tidak memiliki fase sel berflagela di sepanjang siklus hidupnya."
      }
    },
    "zygomycota": {
      "id": "zygomycota",
      "kingdom": "fungi",
      "label": "Zygomycota",
      "title": "Fungi — Zygomycota",
      "scientific": "Zygomycota",
      "definition": "Zygomycota adalah kelompok fungi sejati (Eumycota) yang dicirikan dengan hilangnya fase sel motil sepanjang siklus hidupnya, menghasilkan spora aseksual non-motil di dalam sporangium, dan bereproduksi seksual lewat kopulasi gametangia yang membentuk spora istirahat berdinding tebal bernama zigospora. Analisis filogenetika molekuler menunjukkan Zygomycota secara tradisional bersifat polifiletik, sehingga kelompok seperti Glomales kini disarankan dipisah menjadi filum tersendiri, Glomeromycota.",
      "body": "Berbeda dari Ascomycota dan Basidiomycota yang hifanya bersekat, hifa Zygomycota umumnya tidak bersekat (aseptate/koenositik) &mdash; banyak nukleus tersebar bebas dalam satu massa sitoplasma yang sama, dengan sekat hanya terbentuk di bagian hifa tua atau dasar organ reproduksi. Pada ujung hifa yang tumbuh, vesikel sekretori tersebar longgar tanpa membentuk struktur Spitzenk&ouml;rper terorganisasi seperti pada Ascomycota/Basidiomycota. Dinding selnya tersusun dari kitin yang mengalami deasetilasi menjadi kitosan, tertanam dalam matriks glukan dan protein.",
      "morphologyProfile": [
        {
          "label": "Hifa",
          "value": "Aseptate / Koenositik",
          "desc": "Hifa Zygomycota umumnya tidak memiliki sekat melintang, sehingga banyak nukleus berbagi satu massa sitoplasma bersama; sekat hanya muncul pada hifa tua atau dasar organ reproduksi."
        },
        {
          "label": "Dinding Sel",
          "value": "Kitin Terdeasetilasi Menjadi Kitosan",
          "desc": "Serat kitin dinding sel mengalami deasetilasi parsial atau lengkap menghasilkan kitosan, yang tertanam dalam matriks glukan dan protein."
        },
        {
          "label": "Spora Aseksual",
          "value": "Sporangiospora (Aplanospora)",
          "desc": "Spora non-motil ini diproduksi lewat pembelahan sitoplasma di dalam sporangium bulat, kemudian disebarkan lewat angin (kering) atau lendir yang terbawa cipratan air hujan/serangga."
        }
      ],
      "habitat": "Zygomycota bersifat kosmopolitan, melimpah di lingkungan darat dan perairan tawar namun sangat jarang di laut. Saprofit dari kelompok ini umum ditemukan di tanah, kotoran hewan (dung), dan berbagai bahan organik yang membusuk bersentuhan dengan tanah.",
      "habitatProfile": [
        {
          "label": "Tanah & Kotoran Hewan",
          "value": "Saprofit Kosmopolitan",
          "desc": "Melimpah di tanah, dung, dan bahan organik membusuk yang bersentuhan dengan tanah, sebagai pengurai awal (early colonizer)."
        },
        {
          "label": "Makanan & Substrat Kaya Pati",
          "value": "Kolonisator Cepat",
          "desc": "Sering menjadi kontaminan cepat pada buah dan makanan kaya pati seperti roti."
        },
        {
          "label": "Air Laut",
          "value": "Sangat Jarang",
          "desc": "Berbeda dari kelimpahannya di darat dan air tawar, Zygomycota sangat jarang ditemukan di lingkungan laut."
        }
      ],
      "nutrition": "Zygomycota memperoleh nutrisi secara heterotrof absorptif, mengeluarkan enzim ekstraseluler untuk merombak senyawa organik kompleks lalu menyerap hasil rombakannya. Mereka dapat memanfaatkan gula sederhana dan menguraikan pati (amilum), namun umumnya tidak dapat menguraikan selulosa. Cara hidupnya mencakup saprofit (pengurai awal makanan/materi organik mati), patogen lemah pada jaringan tumbuhan lunak, simbion mikoriza pada akar tanaman (Glomales), parasit serangga (Entomophthorales), serta komensal di usus arthropoda (Trichomycetes).",
      "reproduction": "Reproduksi aseksual menghasilkan sporangiospora non-motil di dalam sporangium bulat. Reproduksi seksual &mdash; ciri diagnostik utama filum ini &mdash; dimulai saat dua hifa kompatibel (tipe kawin positif dan negatif) saling mendekat membentuk progametangia yang membengkak; setelah bersentuhan, terbentuk gametangium bernukleus banyak yang terpisah dari suspensor penopang; dinding penyekat antar-gametangium larut sehingga sitoplasma melebur (plasmogami lalu kariogami) membentuk zigospora berdinding tebal, berkerut, gelap, dan kaya sporopollenin yang tahan kondisi buruk di tanah. Saat kondisi membaik, zigospora berkecambah menghasilkan sporangium kecambah baru.",
      "ecology": "Sebagai saprotrof awal, Zygomycota berperan penting mendaur ulang hara dari sisa organik mati di tanah dan kotoran hewan. Beberapa spesies juga dimanfaatkan manusia dalam fermentasi makanan tradisional dan bioteknologi, sementara yang lain menyebabkan pembusukan pangan atau infeksi oportunistik berbahaya (mukormikosis) pada manusia dengan imunitas lemah.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposer Awal &mdash; berperan penting mendaur ulang hara dari sisa organik mati di tanah dan kotoran hewan.",
          "Fermentasi Makanan &mdash; dimanfaatkan sebagai agen pembuat tempe, sufu, dan ragi tradisional.",
          "Bioteknologi &mdash; digunakan dalam biotransformasi senyawa kimia dan sebagai produsen lipid kaya asam lemak tak jenuh ganda (PUFA)."
        ],
        "harms": [
          "Pembusukan Pangan &mdash; Rhizopus stolonifer menyebabkan kerusakan ekonomi lewat pembusukan buah dan produk kaya pati seperti roti.",
          "Mukormikosis &mdash; sejumlah spesies menjadi patogen oportunistik berbahaya pada pasien diabetes, leukemia, atau kanker, menyerang sistem vaskular, paru-paru, atau otak.",
          "Hawar Bibit Padi &mdash; Rhizopus microsporus, berkat toksin rhizoxin dari bakteri endosimbion Burkholderia di sitoplasmanya, merusak pembelahan sel akar tanaman padi."
        ]
      },
      "examples": "Rhizopus stolonifer, Mucor mucedo, Rhizopus sexualis",
      "exampleNotes": [
        { "name": "Rhizopus stolonifer", "note": "Saprotrof cepat tumbuh, penyebab pembusukan stroberi, tomat, dan ubi jalar, sering menjadi kontaminan laboratorium" },
        { "name": "Mucor mucedo", "note": "Saprotrof pemakan kotoran hewan (coprophilous), kolonisator awal dalam suksesi jamur pada feses herbivora" },
        { "name": "Rhizopus sexualis", "note": "Zygomycota homotalik yang dapat membuahi diri sendiri dan mudah membentuk zigospora dalam dua hari di laboratorium" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Zygomycota adalah hifa tidak bersekat (koenositik) serta pembentukan zigospora berdinding tebal dan berkerut sebagai hasil peleburan dua gametangia.",
      "challenge": {
        "question": "Struktur reproduktif seksual yang menjadi ciri diagnostik utama filum Zygomycota adalah…",
        "options": [
          "Askospora di dalam askus",
          "Basidiospora di ujung basidium",
          "Zigospora hasil peleburan dua gametangia",
          "Zoospora berflagela tunggal"
        ],
        "answer": "Zigospora hasil peleburan dua gametangia",
        "explanation": "Zygomycota dicirikan oleh pembentukan zigospora &mdash; spora istirahat berdinding tebal, berkerut, dan kaya sporopollenin &mdash; yang terbentuk dari peleburan (plasmogami dan kariogami) dua gametangia hifa yang kompatibel."
      }
    },
    "ascomycota": {
      "id": "ascomycota",
      "kingdom": "fungi",
      "label": "Ascomycota",
      "title": "Fungi — Ascomycota (Fungi Kantung)",
      "scientific": "Ascomycota",
      "definition": "Ascomycota adalah filum terbesar dalam Kingdom Fungi (Eumycota), diperkirakan mencakup lebih dari 32.000 spesies dalam sekitar 3.400 genus. Namanya berasal dari kata Yunani askos (kantung) dan mykes (jamur) &mdash; karakteristik diagnostik utamanya adalah spora seksual (askospora) yang diproduksi di dalam struktur sel berbentuk kantung khusus bernama askus.",
      "body": "Sebagian besar Ascomycota memiliki miselium berupa hifa bersekat (septate), namun sekat (septum) ini tidak terbentuk utuh melainkan menyisakan satu pori pusat yang memungkinkan sitoplasma, organel, bahkan nukleus mengalir bebas antarsel. Di dekat pori tersebut terdapat Woronin bodies, organel protein bulat khas Ascomycota yang menyumbat pori secara cepat bila hifa rusak untuk mencegah hilangnya sitoplasma. Tidak semua anggotanya multiseluler &mdash; sebagian tumbuh sebagai sel tunggal (ragi/yeast) yang membelah biner (Schizosaccharomyces pombe) atau bertunas (Saccharomyces cerevisiae), dan beberapa genus seperti Candida bersifat dimorfik, dapat berganti fase antara ragi uniseluler dan hifa berfilamen.",
      "morphologyProfile": [
        {
          "label": "Hifa & Septum",
          "value": "Septate Berpori dengan Woronin Bodies",
          "desc": "Sekat hifa menyisakan pori pusat yang memungkinkan aliran sitoplasma antarsel; Woronin bodies di dekat pori menyumbatnya secara cepat saat hifa rusak untuk mencegah kebocoran sitoplasma."
        },
        {
          "label": "Askus",
          "value": "Unitunicate, Bitunicate, atau Prototunicate",
          "desc": "Unitunicate memiliki dinding satu lapis elastis yang tetap menyatu saat menembak spora; bitunicate memiliki dua lapis dinding dengan mekanisme pelepasan 'jack-in-the-box'; prototunicate berdinding tipis dan melarut pasif tanpa mekanisme penembakan."
        },
        {
          "label": "Bentuk Uniseluler",
          "value": "Ragi Berfisi atau Bertunas",
          "desc": "Beberapa anggota tumbuh sebagai sel tunggal, membelah secara biner/fisi (Schizosaccharomyces pombe) atau bertunas (Saccharomyces cerevisiae); genus Candida bahkan dapat berganti fase antara ragi dan hifa berfilamen (dimorfisme)."
        }
      ],
      "habitat": "Ascomycota memiliki adaptasi ekologis luas dan ditemukan di berbagai lingkungan darat, serasah daun, tanah, air tawar, hingga laut, serta sering mengontaminasi makanan yang disimpan. Sekitar 40% spesies Ascomycota yang teridentifikasi hidup di darat lewat asosiasi mutualisme membentuk lichen.",
      "habitatProfile": [
        {
          "label": "Darat & Serasah",
          "value": "Habitat Utama",
          "desc": "Melimpah di tanah, serasah daun, dan kayu sebagai saprofit pengurai bahan organik mati."
        },
        {
          "label": "Simbiosis Lichen",
          "value": "~40% Spesies Darat",
          "desc": "Sekitar 40% spesies Ascomycota yang teridentifikasi hidup di darat lewat asosiasi mutualisme erat membentuk lichen bersama alga hijau atau cyanobacteria."
        },
        {
          "label": "Air Tawar & Laut",
          "value": "Adaptasi Akuatik",
          "desc": "Sejumlah anggota juga mampu hidup di lingkungan air tawar maupun laut, menunjukkan fleksibilitas ekologis filum ini."
        }
      ],
      "nutrition": "Ascomycota memperoleh makanan secara heterotrof lewat pencernaan ekstraseluler dan absorpsi. Sebagai saprofit, mereka mampu menguraikan polimer organik kompleks seperti pati dan selulosa dari sisa materi organik mati di tanah atau kayu. Sebagai parasit, mereka menyerang jaringan hidup tumbuhan maupun hewan (termasuk manusia) baik secara nekrotrofik maupun biotrofik. Sebagai simbion, mereka membentuk lichen bersama alga/cyanobacteria fotosintetik, atau ektomikoriza (mikoriza selubung) dengan akar pepohonan hutan seperti pohon ek dan beech (misalnya genus Tuber).",
      "reproduction": "Askus berkembang dari hifa askogen lewat struktur berbentuk kait (crozier); dua nukleus haploid melebur (kariogami) membentuk nukleus diploid, yang lalu bermeiosis menghasilkan 4 nukleus haploid, kemudian bermitosis sekali lagi menjadi 8 nukleus haploid. Kedelapan nukleus tersebut masing-masing diselimuti membran pembatas bersama sebagian sitoplasma askus, membentuk 8 askospora dalam satu askus. Pelepasan spora pada banyak spesies terjadi lewat tekanan turgor hidrostatik tinggi yang membuat askus meregang hingga pecah dan menembakkan spora secara eksplosif ke udara.",
      "ecology": "Ascomycota berperan besar dalam fermentasi makanan dan minuman, produksi antibiotik medis, serta sebagai bioindikator polusi udara dan bahan kuliner mewah. Di sisi lain, sejumlah spesies menjadi patogen tanaman serius maupun kontaminan makanan penghasil racun berbahaya.",
      "ecologyRoles": {
        "benefits": [
          "Fermentasi Makanan & Minuman &mdash; Saccharomyces cerevisiae digunakan global dalam pembuatan roti serta fermentasi bir dan anggur.",
          "Sumber Antibiotik &mdash; Penicillium chrysogenum merupakan sumber komersial antibiotik penisilin.",
          "Bahan Kuliner Mewah &mdash; tubuh buah genus Tuber (truffle) dan Morchella (morel) sangat dihargai di dunia kuliner internasional."
        ],
        "harms": [
          "Penyakit Tanaman &mdash; Blumeria graminis menyebabkan embun tepung pada serealia, sedangkan Claviceps purpurea menyebabkan penyakit ergot pada gandum hitam.",
          "Kontaminasi Toksin Pangan &mdash; Aspergillus flavus menghasilkan aflatoksin karsinogenik pada serealia dan kacang tanah.",
          "Pembusukan Buah &mdash; Penicillium expansum membusukkan buah apel (brown rot) dan menghasilkan racun patulin."
        ]
      },
      "examples": "Saccharomyces cerevisiae, Penicillium chrysogenum, Claviceps purpurea, Aspergillus flavus",
      "exampleNotes": [
        { "name": "Saccharomyces cerevisiae", "note": "Ragi uniseluler bertunas, digunakan luas dalam industri pembuatan roti dan fermentasi minuman beralkohol" },
        { "name": "Penicillium chrysogenum", "note": "Jamur kapang penghasil penisilin G, antibiotik pertama temuan Alexander Fleming" },
        { "name": "Claviceps purpurea", "note": "Parasit serealia pembentuk sklerotium (ergot) kaya alkaloid beracun bagi manusia dan ternak" },
        { "name": "Aspergillus flavus", "note": "Kontaminan makanan penghasil aflatoksin karsinogenik yang merusak organ hati" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Ascomycota adalah pembentukan askospora (biasanya 8 spora) di dalam struktur kantung bernama askus, serta hifa bersekat berpori dengan Woronin bodies di dekatnya.",
      "challenge": {
        "question": "Organel protein khas Ascomycota yang berfungsi menyumbat pori septum secara cepat saat hifa mengalami kerusakan adalah…",
        "options": [
          "Woronin bodies",
          "Mitosom",
          "Kinetoplas",
          "Nukleomorph"
        ],
        "answer": "Woronin bodies",
        "explanation": "Woronin bodies adalah organel protein bulat yang terletak di dekat pori septum hifa Ascomycota; organel ini secara cepat menyumbat pori bila terjadi kerusakan hifa untuk mencegah hilangnya sitoplasma."
      }
    },
    "basidiomycota": {
      "id": "basidiomycota",
      "kingdom": "fungi",
      "label": "Basidiomycota",
      "title": "Fungi — Basidiomycota (Jamur Gada)",
      "scientific": "Basidiomycota",
      "definition": "Basidiomycota adalah kelompok besar dalam Kingdom Fungi yang mencakup lebih dari 30.000 spesies. Karakteristik utamanya adalah menghasilkan spora seksual haploid bernama basidiospora secara eksternal di permukaan struktur gada khusus yang disebut basidium. Kelompok ini paling dikenal luas karena sebagian besar anggotanya membentuk tubuh buah (basidiokarp) besar dan mencolok &mdash; mencakup jamur payung, jamur kayu/papan, jamur kuping, puffball, hingga jamur karat dan jamur gosong yang penting di bidang pertanian.",
      "body": "Sel vegetatif berupa miselium bersekat dengan dolipore septa &mdash; penyekat berbentuk barel berpori yang diselimuti tudung membran pelindung bernama parenthesome. Pada fase hifa dikariotik (dua nukleus haploid berbeda dalam tiap kompartemen sel), terbentuk clamp connection, jembatan kecil yang memastikan pembagian pasangan nukleus merata saat sel membelah. Tubuh buah (basidiokarp) tersusun atas jalinan hifa dikariotik yang terorganisasi rapat, dan berdasarkan tipe hifa penyusunnya dapat bersifat monomitic (hanya hifa generatif berdinding tipis, seperti kebanyakan jamur payung), dimitic (generatif & skeletal berdinding tebal), atau trimitic (generatif, skeletal, dan pengikat/binding, menghasilkan tubuh buah sekeras kayu seperti pada jamur kayu).",
      "morphologyProfile": [
        {
          "label": "Septum Hifa",
          "value": "Dolipore Septa & Parenthesome",
          "desc": "Sekat hifa berbentuk barel berpori (dolipore) yang diselimuti tudung membran pelindung (parenthesome) &mdash; struktur khas yang tidak ditemukan pada Ascomycota."
        },
        {
          "label": "Clamp Connection",
          "value": "Sambungan Pengapit pada Hifa Dikariotik",
          "desc": "Jembatan kecil yang terbentuk pada hifa berinti ganda (dikariotik) untuk memastikan pembagian pasangan nukleus yang merata saat sel hifa membelah."
        },
        {
          "label": "Tipe Hifa Tubuh Buah",
          "value": "Monomitic, Dimitic, atau Trimitic",
          "desc": "Monomitic hanya berisi hifa generatif berdinding tipis; dimitic menambah hifa skeletal berdinding tebal; trimitic memiliki tiga jenis hifa (generatif, skeletal, pengikat) sehingga tubuh buah menjadi keras dan liat seperti kayu, misalnya pada jamur kayu."
        }
      ],
      "habitat": "Sebagian besar Basidiomycota hidup di lingkungan darat, tumbuh subur di tanah, seresah daun hutan, kayu lapuk, hingga menempel pada tanaman hidup sebagai parasit. Beberapa spesies juga ditemukan di perairan tawar maupun laut. Distribusinya bersifat kosmopolitan di seluruh dunia.",
      "habitatProfile": [
        {
          "label": "Lantai & Kayu Hutan",
          "value": "Dekomposer Lignoselulosa",
          "desc": "Tumbuh subur di tanah, seresah daun, dan kayu lapuk sebagai pengurai utama komponen kayu yang keras."
        },
        {
          "label": "Akar Pepohonan",
          "value": "Simbion Ektomikoriza",
          "desc": "Membentuk selubung (mantel) di sekitar akar pohon hutan, berasosiasi erat dengan sistem perakaran pepohonan besar."
        },
        {
          "label": "Tanaman Budidaya",
          "value": "Parasit Komoditas Pertanian",
          "desc": "Jamur karat dan jamur gosong menempel dan menyerang jaringan hidup tanaman pertanian seperti serealia."
        }
      ],
      "nutrition": "Basidiomycota memperoleh nutrisi secara heterotrof absorptif. Sebagai saprofit, mereka menjadi dekomposer utama kayu di hutan lewat dua mekanisme: white-rot (menguraikan selulosa dan lignin secara simultan dengan enzim oksidatif, menyisakan kayu memutih dan berserat) dan brown-rot (hanya mendegradasi selulosa, menyisakan lignin teroksidasi sehingga kayu kering, retak berbentuk kubus, dan berwarna cokelat). Sebagai parasit, jamur karat dan jamur gosong menyerang komoditas pertanian. Sebagai simbion, mereka membentuk ektomikoriza dengan akar pepohonan hutan &mdash; mantel di permukaan akar dan jala Hartig (Hartig net) di sela sel korteks akar &mdash; membantu penyerapan air dan fosfat bagi tumbuhan, ditukar dengan glukosa hasil fotosintesis.",
      "reproduction": "Basidium, sel reproduksi seksual diagnostik utama berbentuk gada, dapat berupa sel tunggal tidak bersekat (holobasidia pada jamur payung) atau sel bersekat (phragmobasidia/heterobasidia pada jamur jeli, karat, dan gosong). Basidiospora haploid dibentuk secara eksternal, umumnya 4 spora per basidium, masing-masing ditopang tangkai steril kecil bernama sterigma; pada jamur payung, basidium tersusun rapat membentuk lapisan subur (hymenium) di lembaran (gills) bawah tudung atau di dalam pori jamur kayu. Pelepasan spora dipicu mekanisme surface tension catapult: tetesan cairan Buller's drop di dekat hilum spora dan adaxial drop di permukaan spora membesar hingga saling bersentuhan dan melebur instan, menghasilkan pergeseran pusat massa yang menembakkan spora secara vertikal keluar dari sterigma.",
      "ecology": "Sebagai dekomposer kayu utama, Basidiomycota mengembalikan siklus hara lewat perombakan lignin dan selulosa hutan, sekaligus menjadi simbion ektomikoriza vital bagi pepohonan hutan dan sumber pangan penting bagi manusia. Namun, kelompok ini juga mencakup jamur karat penyebab gagal panen serealia, perusak kayu bangunan, dan jamur liar beracun mematikan.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposer Kayu Utama &mdash; Trametes versicolor (white-rot) dan Phanerochaete chrysosporium mengembalikan siklus hara lewat perombakan lignin hutan.",
          "Simbion Ektomikoriza &mdash; Amanita muscaria dan Boletus edulis membantu penyerapan hara pohon pinus dan birch lewat jala Hartig.",
          "Bahan Pangan &mdash; Agaricus bisporus (jamur kancing), Pleurotus ostreatus (jamur tiram), dan Lentinula edodes (shiitake) menjadi sumber pangan bernilai ekonomi penting."
        ],
        "harms": [
          "Jamur Karat &mdash; Puccinia graminis menyebabkan kegagalan panen gandum lewat siklus hidup kompleks lima fase spora.",
          "Kerusakan Kayu Bangunan &mdash; Serpula lacrymans (dry rot) merambat di sela bata dan menguraikan selulosa kayu konstruksi rumah.",
          "Jamur Beracun Mematikan &mdash; Amanita phalloides ('death cap') menghasilkan amatoksin yang merusak hati dan ginjal jika dikonsumsi."
        ]
      },
      "examples": "Agaricus bisporus, Amanita phalloides, Puccinia graminis, Pleurotus ostreatus",
      "exampleNotes": [
        { "name": "Agaricus bisporus", "note": "Jamur kancing putih budidaya yang populer sebagai bahan makanan komersial di seluruh dunia" },
        { "name": "Amanita phalloides", "note": "Jamur liar mematikan penghasil amatoksin perusak hati dan ginjal, dikenal sebagai 'death cap'" },
        { "name": "Puccinia graminis", "note": "Jamur karat obligat dengan siklus hidup lima fase spora, penyebab gagal panen tanaman gandum" },
        { "name": "Pleurotus ostreatus", "note": "Jamur tiram saprotrofik berbentuk kipas, dibudidayakan sebagai pangan bernilai ekonomi tinggi" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Basidiomycota adalah kehadiran basidium berbentuk gada penghasil basidiospora eksternal, sering kali pada tubuh buah (basidiokarp) besar dan mencolok seperti jamur payung atau jamur kayu.",
      "challenge": {
        "question": "Struktur khas yang terbentuk pada hifa dikariotik Basidiomycota untuk memastikan pembagian pasangan nukleus yang merata saat sel membelah adalah…",
        "options": [
          "Woronin bodies",
          "Clamp connection",
          "Haustorium",
          "Rhizomycelium"
        ],
        "answer": "Clamp connection",
        "explanation": "Clamp connection adalah jembatan kecil khas yang terbentuk pada fase hifa dikariotik Basidiomycota, berfungsi memastikan kedua nukleus haploid yang berbeda terbagi secara merata ke setiap kompartemen sel baru saat hifa membelah."
      }
    },
    "bryophyta": {
      "id": "bryophyta",
      "kingdom": "plantae",
      "label": "Bryophyta",
      "title": "Plantae — Bryophyta (Tumbuhan Lumut)",
      "scientific": "Bryophyta",
      "definition": "Bryophyta (tumbuhan lumut) adalah kelompok tumbuhan darat pertama yang berukuran kecil dan berstruktur sederhana. Ciri paling unik yang membedakannya secara tegas dari tiga divisi tumbuhan lain adalah sifatnya yang nonvaskular (tanpa xilem dan floem sejati), fase gametofit yang dominan dan hidup bebas, serta sporofit yang berukuran kecil dan bergantung penuh secara nutrisi pada gametofit betina.",
      "body": "Bryophyta tidak memiliki akar, batang, atau daun sejati; bagian mirip daun dan batang yang tampak pada lumut merupakan organ fase gametofit, bukan sporofit. Sebagai pengganti akar, lumut memiliki rhizoid &mdash; struktur mirip rambut halus yang berfungsi menempelkan tubuh pada substrat, bukan sebagai organ utama penyerap air. Rhizoid berbentuk multiseluler pada lumut daun (mosses), namun uniseluler pada lumut hati (liverworts) dan lumut tanduk (hornworts). Secara ilmiah, lumut dikelompokkan ke dalam tiga filum: Marchantiophyta (lumut hati, talus berlobus, tanpa stomata, rhizoid uniseluler), Bryophyta sensu stricto (lumut daun, struktur 'daun' spiral, ada stomata pada sporofit, rhizoid multiseluler), dan Anthocerotophyta (lumut tanduk, sporofit silindris memanjang dari meristem basal, sel berkloroplas tunggal besar).",
      "morphologyProfile": [
        {
          "label": "Rhizoid",
          "value": "Struktur Penambat, Bukan Akar Sejati",
          "desc": "Rhizoid multiseluler pada lumut daun atau uniseluler pada lumut hati/tanduk berfungsi menempelkan tubuh pada substrat, bukan sebagai organ penyerapan air utama."
        },
        {
          "label": "Sporofit",
          "value": "Kaki, Seta, dan Kapsul",
          "desc": "Sporofit tersusun dari kaki (menancap di jaringan gametofit untuk menyerap makanan), seta (tangkai pengangkat kapsul, tidak ada pada lumut tanduk), dan kapsul (sporangium tempat meiosis menghasilkan spora haploid)."
        },
        {
          "label": "Plasenta Matrotrofik",
          "value": "Jaringan Penghubung Gametofit-Sporofit",
          "desc": "Sporofit tidak pernah hidup mandiri; ia menyerap nutrisi (matrotrofi) dari gametofit betina lewat plasenta berisi sel transfer khusus yang memaksimalkan transportasi nutrisi secara aktif."
        }
      ],
      "habitat": "Mayoritas lumut hidup di area teduh dan lembap seperti lantai hutan, tepi sungai, atau batuan basah karena tubuhnya rentan kehilangan air. Meski begitu, distribusinya sangat luas, dari gurun kering, batuan panas, hingga tundra Arktik dan Antartika yang dingin. Lumut sangat bergantung pada air eksternal untuk reproduksi seksual karena sperma berflagela dua harus berenang lewat lapisan air tipis menuju sel telur di dalam arkegonium.",
      "habitatProfile": [
        {
          "label": "Lantai Hutan & Batuan Lembap",
          "value": "Habitat Utama",
          "desc": "Mayoritas lumut hidup di area teduh dan lembap seperti lantai hutan, tepi sungai, atau permukaan batuan basah."
        },
        {
          "label": "Habitat Ekstrem",
          "value": "Gurun hingga Kutub",
          "desc": "Meski menyukai kelembapan, lumut memiliki sebaran sangat luas &mdash; ditemukan di gurun kering, batuan panas, hingga tundra Arktik dan Antartika."
        },
        {
          "label": "Ketergantungan pada Air",
          "value": "Reproduksi Seksual",
          "desc": "Sperma berflagela dua harus berenang lewat lapisan air tipis di permukaan tanah/tumbuhan untuk mencapai sel telur di dalam arkegonium."
        }
      ],
      "nutrition": "Lumut bersifat fotosintetik (autotrof), dengan sebagian besar aktivitas fotosintesis dilakukan oleh fase gametofit yang kaya klorofil. Karena tidak memiliki akar penyerap sejati maupun jaringan vaskular, lumut menyerap air dan mineral secara langsung dan cepat lewat seluruh permukaan luar tubuh gametofitnya, mengalir lewat jalur dinding sel (apoplast) dan sitoplasma (symplast) menuju sel-sel tetangga.",
      "reproduction": "Bryophyta bereproduksi lewat pergiliran generasi heteromorfik yang khas. Spora haploid yang jatuh di tempat lembap berkecambah menjadi protonema (pada lumut daun) yang berkembang menjadi tumbuhan lumut dewasa. Gametofit menghasilkan organ kelamin multiseluler: anteridium (organ jantan penghasil sperma berflagela dua) dan arkegonium (organ betina berbentuk botol pelindung satu sel telur). Sperma berenang lewat bantuan air membuahi sel telur, membentuk zigot diploid yang tumbuh di dalam arkegonium menjadi embrio sporofit. Sporofit tidak pernah hidup mandiri, menyerap nutrisi lewat plasenta dari gametofit betina sepanjang hidupnya.",
      "ecology": "Bersama liken, lumut merupakan kolonisator pertama pada batuan gundul, membantu pelapukan batuan menjadi tanah subur bagi tumbuhan lain. Lumut gambut (Sphagnum) berperan sangat besar dalam menyimpan air dan karbon global, sementara sejumlah spesies lumut lain bertindak sebagai bioindikator polusi udara yang sensitif.",
      "ecologyRoles": {
        "benefits": [
          "Pionir Pembentuk Tanah &mdash; bersama liken, lumut menjadi kolonisator pertama pada batuan gundul dan membantu pelapukan menjadi tanah subur.",
          "Penahan Air Raksasa &mdash; Sphagnum memiliki sel mati (hyaline cells) yang menyimpan air hingga 20 kali lipat berat keringnya, mencegah banjir dan menjaga kelembapan tanah.",
          "Penyimpan Karbon Global &mdash; lahan gambut yang didominasi Sphagnum menutupi 1&ndash;3% permukaan bumi dan berperan besar menyimpan cadangan karbon global."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan langsung dari Bryophyta; sebaliknya, kepekaan lumut terhadap polusi udara justru dimanfaatkan sebagai bioindikator kualitas lingkungan.",
          "Sensitivitas Ekologis &mdash; sejumlah spesies lumut menghilang secara alami dari area yang mengalami polusi udara parah, menandakan kerentanannya terhadap gangguan lingkungan."
        ]
      },
      "examples": "Sphagnum, Marchantia, Anthoceros, Tortula obtusissima",
      "exampleNotes": [
        { "name": "Sphagnum", "note": "Lumut gambut penyimpan air dan karbon raksasa yang membentuk ekosistem lahan gambut di belahan bumi utara" },
        { "name": "Marchantia", "note": "Lumut hati bertalus lebar dengan mangkuk gemma untuk reproduksi aseksual dan struktur payung penopang organ seksual" },
        { "name": "Anthoceros", "note": "Lumut tanduk dengan sporofit silindris memanjang, talus gametofitnya dihuni bakteri pengikat nitrogen Nostoc secara mutualisme" },
        { "name": "Tortula obtusissima", "note": "Lumut gurun Meksiko yang mampu merehidrasi diri dalam hitungan menit setelah kekeringan ekstrem" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Bryophyta adalah tubuh kecil tanpa jaringan pengangkut sejati, gametofit hijau yang dominan dan hidup bebas, serta sporofit kecil yang selalu menumpang dan bergantung nutrisi pada gametofitnya.",
      "challenge": {
        "question": "Mengapa fase sporofit Bryophyta tidak pernah tumbuh menjadi organisme yang hidup mandiri seperti pada tumbuhan vaskular?",
        "options": [
          "Karena sporofit tidak memiliki materi genetik lengkap",
          "Karena sporofit menyerap nutrisi lewat plasenta dari gametofit betina sepanjang hidupnya",
          "Karena sporofit tidak pernah terbentuk pada Bryophyta",
          "Karena sporofit bersifat haploid seperti gametofit"
        ],
        "answer": "Karena sporofit menyerap nutrisi lewat plasenta dari gametofit betina sepanjang hidupnya",
        "explanation": "Sporofit Bryophyta bersifat matrotrofik &mdash; ia menumpang hidup dan menyerap nutrisi secara terus-menerus dari gametofit betina lewat jaringan plasenta berisi sel transfer khusus, sehingga tidak pernah menjadi generasi yang mandiri secara nutrisi seperti pada tumbuhan vaskular."
      }
    },
    "pteridophyta": {
      "id": "pteridophyta",
      "kingdom": "plantae",
      "label": "Pteridophyta",
      "title": "Plantae — Pteridophyta (Tumbuhan Paku)",
      "scientific": "Pteridophyta",
      "definition": "Pteridophyta (tumbuhan paku) adalah kelompok tumbuhan darat pertama yang memiliki jaringan vaskular sejati (xilem dan floem berlignin) namun belum menghasilkan biji. Berbeda dari Bryophyta yang sporofitnya bergantung penuh pada gametofit, sporofit Pteridophyta tumbuh mandiri, dominan, dan dapat berukuran besar; namun ia masih mewarisi ketergantungan leluhurnya pada air eksternal untuk fertilisasi karena sperma berflagelanya harus berenang menuju sel telur.",
      "body": "Istilah Pteridophyta secara tradisional mencakup empat kelompok utama tumbuhan berpembuluh tanpa biji: Lycophyta (paku kawat, berdaun mikrofil kecil bertulang tunggal, misalnya Lycopodium dan Selaginella), Psilotophyta (paku purba tanpa akar dan daun sejati, misalnya Psilotum), Sphenophyta/Equisetophyta (paku ekor kuda berbatang beruas dan bersilika, misalnya Equisetum), dan Pterophyta (paku sejati berdaun makrofil besar bernama frond, kelompok terbesar dan paling dikenal). Daun muda paku sejati tergulung khas menyerupai kepala biola (fiddlehead atau crozier) sebelum membuka sempurna. Sebagian besar Pteridophyta bersifat homospora (menghasilkan satu jenis spora), tetapi Selaginella dan Isoetes bersifat heterospora (menghasilkan mikrospora dan megaspora terpisah) &mdash; pola yang dianggap sebagai cikal bakal evolusi biji pada tumbuhan berbiji.",
      "morphologyProfile": [
        {
          "label": "Daun (Frond)",
          "value": "Makrofil Bertulang Daun Bercabang",
          "desc": "Daun paku sejati (frond) berukuran relatif besar dengan sistem tulang daun bercabang kompleks, berbeda dari mikrofil bertulang tunggal pada Lycophyta; daun muda tergulung khas menyerupai kepala biola (fiddlehead)."
        },
        {
          "label": "Sporangium & Sorus",
          "value": "Kumpulan Kotak Spora di Balik Daun",
          "desc": "Sporangium penghasil spora umumnya berkumpul dalam kelompok bernama sorus di permukaan bawah daun, sering kali terlindung oleh selaput tipis pelindung bernama indusium."
        },
        {
          "label": "Gametofit Independen",
          "value": "Protalus Fotosintetik Hidup Bebas",
          "desc": "Berbeda dari Bryophyta, gametofit Pteridophyta (protalus) berukuran kecil berbentuk hati namun hidup mandiri secara fotosintetik dan tidak bergantung pada sporofit."
        }
      ],
      "habitat": "Pteridophyta paling melimpah di lantai hutan tropis dan subtropis yang lembap dan teduh, tetapi beberapa kelompok beradaptasi luas hingga daerah beriklim sedang, rawa, bahkan perairan tawar (paku air Azolla dan Salvinia). Seperti Bryophyta, Pteridophyta tetap memerlukan lapisan air tipis di permukaan tanah agar sperma berflagelanya dapat berenang mencapai sel telur.",
      "habitatProfile": [
        {
          "label": "Lantai Hutan Tropis",
          "value": "Habitat Utama",
          "desc": "Sebagian besar spesies paku melimpah di lantai hutan tropis dan subtropis yang lembap dan teduh, termasuk sebagai epifit yang menempel di batang pohon."
        },
        {
          "label": "Rawa & Perairan Tawar",
          "value": "Paku Air",
          "desc": "Azolla dan Salvinia beradaptasi hidup mengambang bebas di permukaan air tawar seperti sawah, kolam, dan rawa."
        },
        {
          "label": "Ketergantungan pada Air",
          "value": "Fertilisasi Eksternal",
          "desc": "Seperti lumut, sperma berflagela Pteridophyta harus berenang lewat lapisan air tipis di permukaan gametofit untuk mencapai sel telur di dalam arkegonium."
        }
      ],
      "nutrition": "Pteridophyta bersifat fotoautotrof penuh pada fase sporofitnya, menyerap air dan mineral lewat akar sejati serta jaringan vaskular yang mengangkutnya ke seluruh bagian tubuh. Gametofitnya (protalus) juga bersifat fotosintetik dan mampu hidup mandiri, meski hanya berumur pendek dan berukuran sangat kecil.",
      "reproduction": "Pteridophyta bereproduksi lewat pergiliran generasi heteromorfik dengan sporofit dominan. Sporangium pada permukaan bawah daun (umumnya berkumpul dalam sorus) menghasilkan spora haploid lewat meiosis; spora yang jatuh di tempat lembap berkecambah menjadi gametofit protalus kecil berbentuk hati yang hidup bebas dan fotosintetik. Protalus menghasilkan anteridium (penghasil sperma berflagela) dan arkegonium (penghasil sel telur); sperma berenang lewat lapisan air tipis untuk membuahi sel telur, membentuk zigot yang tumbuh menjadi sporofit baru sambil untuk sesaat menumpang pada gametofit sebelum mandiri sepenuhnya. Selaginella dan Isoetes bersifat heterospora, menghasilkan mikrospora (gametofit jantan) dan megaspora (gametofit betina) yang terpisah.",
      "ecology": "Pada periode Karbon (sekitar 359&ndash;299 juta tahun lalu), Lycophyta dan Sphenophyta raksasa mendominasi hutan rawa purba dan menjadi sumber utama pembentukan cadangan batu bara dunia saat ini. Di ekosistem modern, Pteridophyta berperan sebagai komponen penting understory hutan tropis, penahan erosi tanah, serta simbion pengikat nitrogen (Azolla) yang dimanfaatkan sebagai pupuk hayati alami di lahan persawahan.",
      "ecologyRoles": {
        "benefits": [
          "Pembentuk Cadangan Batu Bara &mdash; hutan rawa Lycophyta dan Sphenophyta raksasa periode Karbon menjadi sumber utama deposit batu bara dunia saat ini.",
          "Pupuk Hayati Sawah &mdash; Azolla pinnata bersimbiosis dengan cyanobacteria pengikat nitrogen Anabaena azollae, dimanfaatkan petani sebagai pupuk hayati alami di lahan sawah.",
          "Penstabil Tanah & Understory Hutan &mdash; akar dan rimpang paku membantu menahan erosi tanah lembap sekaligus menjadi komponen penting lantai hutan tropis."
        ],
        "harms": [
          "Gulma Beracun Ternak &mdash; Pteridium aquilinum (paku pakis kawat/bracken) bersifat invasif dan mengandung senyawa karsinogenik serta enzim thiaminase yang meracuni ternak penggembalaan.",
          "Catatan &mdash; selain sifat invasif dan toksisitas Pteridium aquilinum bagi ternak, sumber tidak mencantumkan dampak merugikan besar lain dari Pteridophyta terhadap manusia."
        ]
      },
      "examples": "Pteridium aquilinum, Equisetum arvense, Selaginella lepidophylla, Azolla pinnata",
      "exampleNotes": [
        { "name": "Pteridium aquilinum", "note": "Paku pakis kawat (bracken fern) yang invasif dan beracun bagi ternak, salah satu tumbuhan berpembuluh paling luas sebarannya di dunia" },
        { "name": "Equisetum arvense", "note": "Paku ekor kuda berbatang beruas kaya silika, dahulu digunakan sebagai penggosok logam (scouring rush)" },
        { "name": "Selaginella lepidophylla", "note": "Paku kawat 'tumbuhan kebangkitan' (resurrection plant) yang mampu mengering total lalu segar kembali setelah terkena air" },
        { "name": "Azolla pinnata", "note": "Paku air kecil yang bersimbiosis dengan cyanobacteria Anabaena azollae pengikat nitrogen, dimanfaatkan sebagai pupuk hayati sawah" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Pteridophyta adalah daun sejati dengan sorus/sporangium penghasil spora di permukaan bawahnya (tanpa bunga maupun biji), serta daun muda yang tergulung khas menyerupai kepala biola.",
      "challenge": {
        "question": "Bukti evolusioner yang menunjukkan Selaginella (Lycophyta heterospora) sebagai kerabat terdekat dengan cikal bakal tumbuhan berbiji adalah…",
        "options": [
          "Kemampuannya menghasilkan bunga sederhana",
          "Produksi mikrospora dan megaspora yang terpisah (heterospora)",
          "Tidak adanya jaringan vaskular sama sekali",
          "Sporofitnya yang bergantung penuh pada gametofit"
        ],
        "answer": "Produksi mikrospora dan megaspora yang terpisah (heterospora)",
        "explanation": "Berbeda dari mayoritas Pteridophyta yang homospora, Selaginella dan Isoetes bersifat heterospora dengan mikrospora (menghasilkan gametofit jantan) dan megaspora (menghasilkan gametofit betina) yang terpisah &mdash; pola reproduksi yang dianggap sebagai cikal bakal evolusi biji pada tumbuhan berbiji (Gymnospermae dan Angiospermae)."
      }
    },
    "gymnosperms": {
      "id": "gymnosperms",
      "kingdom": "plantae",
      "label": "Gymnospermae",
      "title": "Plantae — Gymnospermae (Biji Terbuka)",
      "scientific": "Gymnospermae",
      "definition": "Gymnospermae secara harfiah berarti 'biji telanjang' (naked seed) &mdash; merujuk pada kondisi bakal biji (ovul) dan biji yang terekspos langsung pada permukaan daun termodifikasi (sporofil) atau struktur analognya. Berbeda dari Pteridophyta yang masih bereproduksi dengan spora, Gymnospermae telah menghasilkan biji sebagai unit penyebaran utama; berbeda dari Angiospermae, Gymnospermae tidak memiliki bunga atau buah sejati karena bijinya terekspos bebas di permukaan sisik strobilus, bukan terbungkus ovarium.",
      "body": "Gymnospermae memiliki jaringan vaskular sejati (xilem dan floem). Daunnya umumnya termodifikasi menjadi bentuk jarum (seperti pinus) atau sisik (seperti cemara) untuk meminimalkan penguapan. Struktur reproduksi utamanya adalah strobilus (kerucut/cone): strobilus jantan (microsporangiate cone) menghasilkan mikrospora yang berkembang menjadi polen, sedangkan strobilus betina (megasporangiate cone) memiliki sisik bakal biji (seed-scale complex) yang membawa ovul terekspos di permukaannya. Kelompok yang masih hidup terbagi menjadi empat filum: Coniferophyta (konifer, terbesar dan paling melimpah), Cycadophyta (sikad mirip palem tropis), Ginkgophyta (hanya satu spesies hidup, Ginkgo biloba), dan Gnetophyta (Gnetum, Ephedra, Welwitschia).",
      "morphologyProfile": [
        {
          "label": "Strobilus",
          "value": "Kerucut Jantan & Betina Terpisah",
          "desc": "Strobilus jantan menghasilkan mikrospora yang berkembang menjadi polen; strobilus betina memiliki sisik bakal biji kompleks yang membawa ovul terekspos di permukaannya."
        },
        {
          "label": "Daun Jarum",
          "value": "Adaptasi Hemat Air",
          "desc": "Daun jarum konifer memiliki kutikula tebal, hipodermis berdinding tebal, dan stomata terbenam (sunken stomata) di bawah permukaan daun untuk meminimalkan hilangnya uap air lewat transpirasi."
        },
        {
          "label": "Struktur Biji",
          "value": "Embrio, Kulit Biji, & Cadangan Makanan",
          "desc": "Biji tersusun dari embrio (generasi sporofit baru, 2n), kulit biji pelindung (jaringan sporofit induk, 2n), dan cadangan makanan dari jaringan gametofit betina haploid (n)."
        }
      ],
      "habitat": "Gymnospermae sangat dominan di kawasan beriklim sedang hingga dingin pegunungan tinggi belahan bumi utara, membentuk bioma hutan konifer (taiga) yang luas. Beberapa kelompok seperti cycad dan gnetofit tersebar di daerah tropis basah hingga semi-kering.",
      "habitatProfile": [
        {
          "label": "Hutan Konifer (Taiga)",
          "value": "Habitat Dominan",
          "desc": "Kawasan beriklim sedang hingga dingin pegunungan tinggi belahan bumi utara didominasi hutan konifer yang luas."
        },
        {
          "label": "Tropis & Subtropis",
          "value": "Cycad & Gnetofit",
          "desc": "Beberapa kelompok seperti cycad dan gnetofit tersebar luas di daerah tropis basah hingga semi-kering."
        },
        {
          "label": "Gurun Ekstrem",
          "value": "Welwitschia mirabilis",
          "desc": "Gnetofit unik ini hidup di gurun pasir Namibia, Afrika, salah satu habitat paling ekstrem bagi tumbuhan berbiji."
        }
      ],
      "nutrition": "Gymnospermae bersifat fotoautotrof, mengasimilasi karbon dan memproduksi energi lewat fotosintesis menggunakan klorofil di dalam kloroplas. Daun berbentuk jarum pada konifer memiliki adaptasi anatomis khusus untuk menghemat air selama musim dingin atau kering ekstrem, termasuk kutikula tebal, hipodermis berdinding tebal, dan stomata terbenam.",
      "reproduction": "Sporofit (tubuh tumbuhan utama) dominan dan mandiri, sedangkan gametofit sangat tereduksi dan bergantung pada sporofit. Ovul menempel terbuka pada permukaan sisik strobilus betina. Penyerbukan tidak lagi membutuhkan air eksternal seperti pada lumut atau paku &mdash; polen diterbangkan angin (wind pollination) dan ditangkap tetes penyerbukan pada liang bakal biji (micropyle). Polen berkecambah membentuk tabung polen yang tumbuh menembus jaringan bakal biji untuk mengantarkan sperma langsung ke sel telur di dalam arkegonium. Setelah fertilisasi, bakal biji berkembang menjadi biji lengkap dengan embrio, kulit biji, dan cadangan makanan.",
      "ecology": "Vegetasi hutan konifer merupakan salah satu penyerap karbon (carbon sink) global terbesar di daratan, sekaligus menyediakan sebagian besar pasokan kayu industri dunia (softwood). Sistem perakaran pohon konifer yang mendalam di pegunungan juga berperan penting mencegah tanah longsor.",
      "ecologyRoles": {
        "benefits": [
          "Penyerap Karbon Raksasa &mdash; vegetasi hutan konifer merupakan salah satu carbon sink daratan terbesar yang membantu menstabilkan iklim bumi.",
          "Sumber Kayu Komersial &mdash; genus Pinus, Abies, dan Picea menyediakan sebagian besar pasokan kayu industri dunia (softwood) untuk bangunan, furnitur, dan pulp.",
          "Pencegah Erosi Lereng &mdash; sistem perakaran pohon konifer yang mendalam di pegunungan menahan struktur tanah dan mencegah tanah longsor."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan langsung dari Gymnospermae terhadap manusia atau ekosistem lain.",
          "Kerentanan Populasi Klonal &mdash; penanaman massal klon jantan Ginkgo biloba secara eksklusif di perkotaan (untuk menghindari bau biji betina) berisiko meningkatkan kerentanan populasi terhadap serangan patogen dibanding populasi alami yang berkembang biak seksual."
        ]
      },
      "examples": "Pinus palustris, Sequoia sempervirens, Ginkgo biloba, Welwitschia mirabilis",
      "exampleNotes": [
        { "name": "Pinus palustris", "note": "Pinus daun panjang yang mendominasi hutan pasir belahan bumi utara, sumber utama kayu komersial" },
        { "name": "Sequoia sempervirens", "note": "Redwood pesisir, tumbuhan vaskular tertinggi di dunia (lebih dari 115 meter), tumbuh di California dan Oregon" },
        { "name": "Ginkgo biloba", "note": "'Fosil hidup' berdaun kipas yang sangat toleran terhadap polusi udara perkotaan" },
        { "name": "Welwitschia mirabilis", "note": "Gnetofit gurun Namibia yang sepanjang hidupnya hanya menghasilkan dua daun pita raksasa" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Gymnospermae adalah biji yang tidak terbungkus buah sejati (terekspos di permukaan sisik strobilus) serta ketiadaan bunga sejati, berbeda dari Angiospermae yang bijinya terlindung di dalam bakal buah.",
      "challenge": {
        "question": "Perbedaan utama yang membedakan biji Gymnospermae dari biji Angiospermae adalah…",
        "options": [
          "Gymnospermae tidak menghasilkan biji sama sekali",
          "Biji Gymnospermae terekspos bebas di permukaan sisik strobilus, tidak terbungkus bakal buah",
          "Gymnospermae hanya bereproduksi dengan spora",
          "Gymnospermae tidak memiliki jaringan vaskular"
        ],
        "answer": "Biji Gymnospermae terekspos bebas di permukaan sisik strobilus, tidak terbungkus bakal buah",
        "explanation": "Nama Gymnospermae berarti 'biji telanjang' karena bakal biji dan bijinya terekspos langsung pada permukaan sisik strobilus, berbeda dari Angiospermae yang bakal bijinya terbungkus rapat di dalam bakal buah (karpel) yang kemudian berkembang menjadi buah."
      }
    },
    "angiosperms": {
      "id": "angiosperms",
      "kingdom": "plantae",
      "label": "Angiospermae",
      "title": "Plantae — Angiospermae (Tumbuhan Berbunga)",
      "scientific": "Angiospermae",
      "definition": "Angiospermae (dari bahasa Yunani angeion, 'wadah/kantung', dan sperma, 'biji') adalah kelompok tumbuhan berbiji paling beragam dan dominan di daratan modern, mencakup lebih dari 300.000 spesies. Ciri diagnostik utamanya adalah bunga sebagai organ reproduksi khas dan bakal biji yang terbungkus rapat di dalam bakal buah (ovarium), berbeda dari Gymnospermae yang bakal bijinya terekspos telanjang di permukaan sisik strobilus.",
      "body": "Bunga tersusun atas empat lingkaran organ termodifikasi dari daun: sepal (kelopak pelindung kuncup), petal (mahkota penarik penyerbuk), stamen (benang sari penghasil polen), dan karpel (putik berisi bakal biji yang menyatu membentuk ovarium). Setelah fertilisasi, dinding ovarium berkembang menjadi buah (perikarp) yang melindungi sekaligus membantu penyebaran biji. Ciri unik lain Angiospermae adalah fertilisasi ganda: satu sel sperma membuahi sel telur membentuk zigot (2n), sedangkan sel sperma kedua melebur dengan dua inti polar membentuk jaringan endosperma triploid (3n) sebagai cadangan makanan embrio. Angiospermae terbagi menjadi dua kelompok evolusioner utama: monokotil (satu daun lembaga, tulang daun sejajar, akar serabut, berkas pembuluh tersebar, bagian bunga kelipatan tiga) dan eudikotil (dua daun lembaga, tulang daun menjala, akar tunggang, berkas pembuluh melingkar, bagian bunga kelipatan empat atau lima).",
      "morphologyProfile": [
        {
          "label": "Bunga",
          "value": "Sepal, Petal, Stamen, & Karpel",
          "desc": "Organ reproduksi khas Angiospermae tersusun dari empat lingkaran daun termodifikasi: sepal pelindung kuncup, petal penarik penyerbuk, stamen penghasil polen, dan karpel (putik) yang menyatu membentuk ovarium pembungkus bakal biji."
        },
        {
          "label": "Buah",
          "value": "Perikarp Hasil Perkembangan Ovarium",
          "desc": "Dinding ovarium yang telah dibuahi berkembang menjadi buah (perikarp), melindungi biji sekaligus membantu penyebarannya lewat angin, air, atau hewan pemakan buah."
        },
        {
          "label": "Monokotil vs Eudikotil",
          "value": "Dua Klade Evolusioner Utama",
          "desc": "Monokotil berdaun lembaga tunggal, tulang daun sejajar, akar serabut, dan bagian bunga kelipatan tiga; eudikotil berdaun lembaga ganda, tulang daun menjala, akar tunggang, dan bagian bunga kelipatan empat atau lima."
        }
      ],
      "habitat": "Angiospermae mendominasi hampir seluruh habitat darat, dari hutan hujan tropis, padang rumput, gurun, hingga tundra Arktik. Sejumlah kecil kelompok bahkan berhasil kembali beradaptasi hidup di lingkungan akuatik, mulai dari tumbuhan air tawar mengapung hingga lamun (seagrass) yang sepenuhnya terendam air laut.",
      "habitatProfile": [
        {
          "label": "Seluruh Bioma Daratan",
          "value": "Vegetasi Dominan Global",
          "desc": "Angiospermae menjadi produsen dan pembentuk struktur vegetasi dominan di hampir seluruh bioma darat, dari hutan hujan tropis hingga tundra Arktik."
        },
        {
          "label": "Adaptasi Akuatik",
          "value": "Lamun & Tumbuhan Air",
          "desc": "Zostera marina (lamun) merupakan salah satu dari sedikit kelompok Angiospermae yang berhasil beradaptasi hidup sepenuhnya terendam air laut, sementara Nymphaea (teratai) mengapung di perairan tawar."
        },
        {
          "label": "Ceruk Ekologis Ekstrem",
          "value": "Epifit, Parasit, & Karnivor",
          "desc": "Sejumlah Angiospermae beradaptasi ekstrem sebagai epifit penumpang pohon (anggrek), parasit tanpa klorofil penghisap inang (Rafflesia), atau tumbuhan karnivor pemakan serangga (Dionaea)."
        }
      ],
      "nutrition": "Mayoritas Angiospermae bersifat fotoautotrof, menyerap air dan mineral lewat akar serta jaringan vaskular yang lebih efisien berkat unsur pembuluh (vessel element) pada xilemnya. Namun, sejumlah kecil spesies berevolusi menyimpang dari pola ini: Rafflesia arnoldii kehilangan seluruh klorofil dan hidup sebagai parasit holoparasitik penuh pada akar tumbuhan inang, sementara Dionaea muscipula bersifat karnivor, menangkap dan mencerna serangga untuk melengkapi kebutuhan nitrogennya di tanah miskin hara.",
      "reproduction": "Ciri reproduksi paling khas Angiospermae adalah fertilisasi ganda: satu sel sperma dari tabung polen membuahi sel telur membentuk zigot diploid (2n) yang tumbuh menjadi embrio, sedangkan sel sperma kedua melebur dengan dua inti polar sel sentral membentuk endosperma triploid (3n) sebagai cadangan makanan embrio. Penyerbukan (transfer polen dari stamen ke kepala putik) dapat dibantu angin maupun hewan penyerbuk seperti lebah, kupu-kupu, burung, dan kelelawar, mendorong koevolusi bentuk dan warna bunga yang sangat beragam. Setelah fertilisasi, bakal biji berkembang menjadi biji sementara ovarium berkembang menjadi buah, yang membantu penyebaran biji lewat angin, air, atau hewan pemakan buah.",
      "ecology": "Sebagai produsen primer dominan di sebagian besar ekosistem darat, Angiospermae menopang hampir seluruh rantai makanan terestrial dan menjadi sumber pangan utama manusia lewat serealia, buah, dan sayuran. Koevolusi jangka panjang dengan hewan penyerbuk dan penyebar biji juga menjadikannya pendorong utama keanekaragaman hayati hewan di banyak ekosistem.",
      "ecologyRoles": {
        "benefits": [
          "Sumber Pangan Utama Manusia &mdash; Oryza sativa (padi), Triticum (gandum), dan Zea mays (jagung) menjadi tumpuan ketahanan pangan miliaran manusia di dunia.",
          "Koevolusi dengan Penyerbuk &mdash; kemitraan mutualisme dengan lebah, kupu-kupu, burung, dan kelelawar mendorong keanekaragaman bentuk bunga sekaligus menopang populasi hewan penyerbuk global.",
          "Bahan Baku Industri & Obat &mdash; kayu keras (hardwood), serat kapas, karet alam, serta ribuan senyawa obat modern diturunkan dari Angiospermae."
        ],
        "harms": [
          "Tumbuhan Beracun &mdash; Atropa belladonna dan Nerium oleander menghasilkan alkaloid dan glikosida jantung yang sangat toksik, berpotensi fatal jika tertelan manusia maupun ternak.",
          "Gulma Invasif & Alergen Serbuk Sari &mdash; sejumlah spesies menjadi gulma invasif yang menekan vegetasi asli, sementara serbuk sari tumbuhan penyerbukan angin (misalnya Ambrosia/ragweed) memicu reaksi alergi rinitis musiman pada manusia."
        ]
      },
      "examples": "Oryza sativa, Nymphaea sp., Rafflesia arnoldii, Dionaea muscipula",
      "exampleNotes": [
        { "name": "Oryza sativa", "note": "Padi, monokotil serealia yang menjadi makanan pokok bagi lebih dari separuh populasi manusia dunia" },
        { "name": "Nymphaea sp.", "note": "Teratai, eudikotil akuatik dengan daun mengapung dan bunga khas yang membuka-menutup mengikuti siklus cahaya" },
        { "name": "Rafflesia arnoldii", "note": "Eudikotil parasit holoparasitik tanpa klorofil, menghasilkan bunga tunggal terbesar di dunia berdiameter hingga satu meter" },
        { "name": "Dionaea muscipula", "note": "Venus flytrap, eudikotil karnivor dengan daun perangkap bergerak cepat untuk menangkap serangga di tanah rawa miskin nitrogen" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Angiospermae adalah kehadiran bunga sejati dan biji yang terlindung di dalam buah hasil perkembangan ovarium; jumlah daun lembaga serta pola tulang daun membantu membedakan monokotil dari eudikotil.",
      "challenge": {
        "question": "Ciri reproduksi unik yang hanya dimiliki Angiospermae, tidak ditemukan pada Gymnospermae maupun tumbuhan berpembuluh lain, adalah…",
        "options": [
          "Penyerbukan dengan bantuan angin",
          "Fertilisasi ganda yang membentuk zigot sekaligus endosperma triploid",
          "Kehadiran jaringan xilem dan floem",
          "Pergiliran generasi antara sporofit dan gametofit"
        ],
        "answer": "Fertilisasi ganda yang membentuk zigot sekaligus endosperma triploid",
        "explanation": "Fertilisasi ganda adalah ciri diagnostik unik Angiospermae: satu sel sperma membuahi sel telur membentuk zigot (2n), sedangkan sel sperma kedua melebur dengan dua inti polar membentuk endosperma triploid (3n) sebagai cadangan makanan embrio &mdash; mekanisme yang tidak ditemukan pada Gymnospermae maupun kelompok tumbuhan berpembuluh lainnya."
      }
    },
    "porifera": {
      "id": "porifera",
      "kingdom": "animalia",
      "label": "Porifera",
      "title": "Animalia — Porifera (Spons)",
      "scientific": "Porifera",
      "definition": "Porifera (spons) dikelompokkan ke dalam cabang Parazoa dalam subdivisi kingdom hewan. Ciri paling mendasar dari Porifera adalah berada pada tingkat organisasi seluler (cellular grade of organization) &mdash; metazoa paling sederhana yang sel-sel tubuhnya telah mengalami pembagian kerja, namun tidak terorganisasi kuat membentuk jaringan sejati (true tissues).",
      "body": "Spons secara umum tidak memiliki lapisan jaringan embrionik sejati (germ layers) maupun rongga tubuh atau rongga usus/pencernaan. Setelah tahap blastula, sel-sel spons mengalami reorganisasi membentuk struktur tubuh individu dewasa. Bentuk tubuhnya umumnya asimetris atau bernoda simetri radial sederhana. Penelitian embriologi pada demosponge bahkan menunjukkan bahwa setelah tahap blastula, migrasi sel dapat menghasilkan bentuk gastrula dua lapisan yang kemudian membentuk lapisan ketiga sebelum menjadi larva berenang bebas &mdash; memberi petunjuk bahwa tahap blastula dan gastrula kemungkinan sudah dimiliki nenek moyang bersama seluruh Metazoa purba.",
      "morphologyProfile": [
        {
          "label": "Tingkat Organisasi",
          "value": "Seluler (Agregat Sel)",
          "desc": "Sel-sel Porifera mengalami pembagian kerja namun tidak terorganisasi kuat menjadi jaringan sejati, menjadikannya metazoa dengan tingkat organisasi tubuh paling sederhana."
        },
        {
          "label": "Lapisan Embrionik",
          "value": "Tidak Ada Germ Layer Sejati",
          "desc": "Berbeda dari hewan diploblastik maupun triploblastik, Porifera secara klasik tidak memiliki lapisan jaringan embrionik sejati, meski riset pada demosponge menunjukkan anomali perkembangan menuju gastrula dua-tiga lapisan."
        },
        {
          "label": "Simetri Tubuh",
          "value": "Asimetris atau Radial Sederhana",
          "desc": "Bentuk tubuh spons umumnya asimetris atau bernoda simetri radial sederhana, tanpa rongga tubuh maupun rongga pencernaan."
        }
      ],
      "habitat": "Sumber mencatat keberadaan spons di lingkungan air tawar (freshwater sponges) dan laut.",
      "habitatProfile": [
        {
          "label": "Laut",
          "value": "Habitat Mayoritas",
          "desc": "Sebagian besar spesies Porifera hidup di lingkungan laut."
        },
        {
          "label": "Air Tawar",
          "value": "Freshwater Sponges",
          "desc": "Sejumlah spesies spons juga menghuni lingkungan air tawar dan mampu bertahan lewat pembentukan gemula saat kondisi memburuk."
        }
      ],
      "nutrition": "Tidak dibahas secara rinci pada sumber materi ini.",
      "reproduction": "Spons air tawar dapat melakukan reproduksi aseksual lewat pembentukan gemula (gemmulation) &mdash; kumpulan sel yang terbungkus kapsul resisten pada musim gugur, mampu bertahan melewati musim dingin di dalam tubuh induk yang mengering atau membeku. Ketika musim semi tiba, sel-sel di dalamnya aktif kembali, keluar dari kapsul, dan tumbuh menjadi spons baru.",
      "ecology": "Sumber materi ini tidak membahas secara rinci peran ekologis Porifera dalam ekosistem.",
      "ecologyRoles": {
        "benefits": [
          "Catatan &mdash; sumber tidak mencantumkan detail peran ekologis menguntungkan Porifera secara spesifik."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan dari Porifera."
        ]
      },
      "examples": "Hexactinellida, Demospongiae, Calcarea",
      "exampleNotes": [
        { "name": "Hexactinellida", "note": "Kelas spons dengan spikula kaca (silika) yang khas" },
        { "name": "Demospongiae", "note": "Kelas spons terbesar, menjadi objek riset embriologi anomali perkembangan gastrula dua-tiga lapisan" },
        { "name": "Calcarea", "note": "Kelas spons dengan rangka spikula tersusun dari kalsium karbonat" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Porifera adalah tubuh berpori tanpa jaringan sejati, tanpa rongga usus, dan berada pada tingkat organisasi seluler paling sederhana di antara seluruh Metazoa.",
      "challenge": {
        "question": "Porifera dianggap sebagai metazoa paling sederhana karena tingkat organisasi tubuhnya berada pada tahap…",
        "options": [
          "Organ-sistem",
          "Jaringan-organ",
          "Sel-jaringan",
          "Seluler (cell aggregate)"
        ],
        "answer": "Seluler (cell aggregate)",
        "explanation": "Sel-sel Porifera telah mengalami pembagian kerja (division of labor) namun belum terorganisasi kuat membentuk jaringan sejati, sehingga tingkat organisasinya disebut seluler (cellular grade of organization) &mdash; paling sederhana di antara seluruh filum Animalia."
      }
    },
    "cnidaria": {
      "id": "cnidaria",
      "kingdom": "animalia",
      "label": "Cnidaria",
      "title": "Animalia — Cnidaria (Ubur-ubur, Anemon Laut)",
      "scientific": "Cnidaria",
      "definition": "Filum Cnidaria (bersama Ctenophora) dikelompokkan ke dalam kelompok hewan bersimetri radial yang dikenal sebagai Radiata, dengan sumbu oral-aboral yang membedakannya dari Platyhelminthes bersimetri bilateral. Cnidaria berada pada tingkat organisasi sel-jaringan (cell-tissue grade of organization), di mana sel-sel serupa terorganisasi membentuk jaringan sejati seperti jaring saraf (nerve net) untuk koordinasi tubuh &mdash; lebih kompleks dibandingkan Porifera yang baru berada pada tingkat organisasi seluler.",
      "body": "Cnidaria bersifat diploblastik, berkembang dari dua lapisan jaringan embrionik utama: ektoderm (luar) dan endoderm (dalam). Pencernaannya berlangsung di dalam rongga gastrovaskular (usus buta/blind gut), tempat makanan masuk dan sisa pencernaan keluar lewat lubang tunggal yang sama. Salah satu bentuk arsitektur tubuhnya adalah polip, yang bersifat sesil/menetap. Klasifikasi internalnya mencakup tiga kelas utama: Hydrozoa, Scyphozoa, dan Anthozoa.",
      "morphologyProfile": [
        {
          "label": "Simetri Tubuh",
          "value": "Radial dengan Sumbu Oral-Aboral",
          "desc": "Tubuh Cnidaria memancar dari sumbu oral (mulut) ke aboral, berbeda dari simetri bilateral pada Platyhelminthes dan filum bilateria lainnya."
        },
        {
          "label": "Lapisan Embrionik",
          "value": "Diploblastik",
          "desc": "Berkembang dari dua lapisan jaringan embrionik &mdash; ektoderm (luar) dan endoderm (dalam) &mdash; tanpa lapisan mesoderm sejati seperti pada hewan triploblastik."
        },
        {
          "label": "Rongga Pencernaan",
          "value": "Gastrovaskular (Usus Buta)",
          "desc": "Makanan masuk dan sisa pencernaan keluar lewat lubang tunggal yang sama pada rongga gastrovaskular, karena Cnidaria tidak memiliki saluran pencernaan lengkap dengan anus terpisah."
        }
      ],
      "habitat": "Sumber mencatat ilustrasi ekosistem terumbu karang dan biota laut sebagai gambaran habitat Cnidaria.",
      "habitatProfile": [
        {
          "label": "Ekosistem Laut",
          "value": "Terumbu Karang",
          "desc": "Cnidaria seperti karang berperan penting sebagai pembentuk terumbu karang (coral reef) yang menopang keanekaragaman hayati laut."
        }
      ],
      "nutrition": "Pencernaan Cnidaria terjadi di dalam rongga gastrovaskular (blind gut); makanan yang dikonsumsi dicerna di rongga ini, dan materi tak tercerna dikeluarkan kembali melalui mulut yang sama.",
      "reproduction": "Cnidaria dapat bereproduksi secara aseksual lewat pertunasan (budding), seperti pada genus Hydra, maupun lewat fragmentasi &mdash; tubuh membelah menjadi dua dan meregenerasi bagian yang hilang, seperti pada sebagian besar anemon laut dan hydroid.",
      "ecology": "Cnidaria seperti karang berperan penting dalam ekosistem laut sebagai pembentuk terumbu karang (coral reef) yang menopang keanekaragaman hayati laut.",
      "ecologyRoles": {
        "benefits": [
          "Pembentuk Terumbu Karang &mdash; karang (Anthozoa) membangun struktur terumbu yang menopang keanekaragaman hayati laut yang sangat tinggi."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan spesifik dari Cnidaria."
        ]
      },
      "examples": "Botruanthus benedini, Dendronephthya sp., Hydra sp.",
      "exampleNotes": [
        { "name": "Botruanthus benedini", "note": "Spesies anemon tabung (tube anemone) yang ditemukan di Samudra Pasifik timur" },
        { "name": "Dendronephthya sp.", "note": "Polip cnidaria yang merepresentasikan simetri radial dan tingkat organisasi sel-jaringan" },
        { "name": "Hydra sp.", "note": "Contoh klasik cnidaria yang melakukan reproduksi aseksual lewat pembentukan tunas (budding)" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Cnidaria adalah simetri radial dengan sumbu oral-aboral, rongga gastrovaskular bermulut tunggal, dan tingkat organisasi sel-jaringan dengan jaring saraf sederhana.",
      "challenge": {
        "question": "Tingkat organisasi tubuh Cnidaria yang lebih kompleks dibandingkan Porifera ditandai dengan kehadiran…",
        "options": [
          "Rongga tubuh sejati (selom)",
          "Jaringan sejati seperti jaring saraf (nerve net)",
          "Sistem organ lengkap",
          "Segmentasi tubuh"
        ],
        "answer": "Jaringan sejati seperti jaring saraf (nerve net)",
        "explanation": "Cnidaria berada pada tingkat organisasi sel-jaringan (cell-tissue grade), di mana sel-sel serupa terorganisasi membentuk jaringan sejati seperti jaring saraf untuk koordinasi tubuh, sesuatu yang tidak dimiliki Porifera yang baru pada tingkat organisasi seluler."
      }
    },
    "platyhelminthes": {
      "id": "platyhelminthes",
      "kingdom": "animalia",
      "label": "Platyhelminthes",
      "title": "Animalia — Platyhelminthes (Cacing Pipih)",
      "scientific": "Platyhelminthes",
      "definition": "Platyhelminthes (cacing pipih) adalah kelompok hewan triploblastik pada tingkat organisasi jaringan-organ (tissue-organ grade), di mana jaringan terorganisasi membentuk organ berspesialisasi seperti bintik mata (eyespots), probosis, dan sistem reproduksi. Memiliki simetri bilateral dan tergolong Bilateria, serta bersifat aselomata &mdash; tidak memiliki rongga tubuh sekunder di luar saluran pencernaan, dengan ruang antara epidermis dan usus terisi penuh jaringan mesoderm parenkim. Berdasarkan perkembangan embrionalnya, Platyhelminthes dikelompokkan ke dalam Protostomia, klade Lophotrochozoa.",
      "body": "Tubuh cacing pipih memipih menyerupai pita atau cakram (pemipihan dorsoventral), memungkinkan ukuran tubuh besar tanpa kompleksitas organ internal rumit karena tidak ada sel internal yang berjarak terlalu jauh dari permukaan luar tubuh. Saluran pencernaannya berupa usus buta (blind gut/gastrovascular cavity) tempat makanan masuk dan sisa metabolisme keluar lewat lubang tunggal; pada beberapa kelompok, saluran pencernaan bahkan tidak ada sama sekali. Seluruh jaringan mesoderm pembentuk organ dan parenkim pada embrio Platyhelminthes yang mengalami pembelahan spiral berasal dari satu sel blastomer khusus bernama sel 4d.",
      "morphologyProfile": [
        {
          "label": "Bentuk Tubuh",
          "value": "Gepeng Dorsoventral",
          "desc": "Tubuh memipih menyerupai pita atau cakram, solusi evolusioner yang memungkinkan ukuran besar tanpa memerlukan sistem peredaran darah atau organ pernapasan internal kompleks."
        },
        {
          "label": "Rongga Tubuh",
          "value": "Aselomata",
          "desc": "Tidak memiliki rongga tubuh sekunder di luar saluran pencernaan; ruang antara epidermis dan usus terisi penuh oleh jaringan mesoderm parenkim."
        },
        {
          "label": "Asal Mesoderm",
          "value": "Sel 4d",
          "desc": "Pada embrio yang mengalami pembelahan spiral, seluruh jaringan mesoderm pembentuk organ dan parenkim berasal dari satu sel blastomer khusus pada tahap 29&ndash;64 sel, disebut sel 4d."
        }
      ],
      "habitat": "Cacing pipih mencakup kelompok hidup bebas maupun endoparasit pada organisme lain.",
      "habitatProfile": [
        {
          "label": "Hidup Bebas",
          "value": "Perairan & Tanah Lembap",
          "desc": "Sejumlah spesies cacing pipih hidup bebas, dicontohkan lewat Planaria sp. sebagai organisme aselomata klasik."
        },
        {
          "label": "Endoparasit",
          "value": "Menempati Organisme Inang",
          "desc": "Kelompok lain hidup sebagai endoparasit di dalam tubuh organisme inang lain."
        }
      ],
      "nutrition": "Cacing pipih memperoleh makanan lewat rongga gastrovaskular; kelompok yang tidak memiliki usus (no gut) menyerap nutrisi secara langsung dari lingkungan atau inangnya.",
      "reproduction": "Sebagian besar cacing pipih bersifat hermafrodit (monoecious), memiliki organ reproduksi jantan dan betina dalam satu individu. Reproduksi aseksual dapat berlangsung lewat partenogenesis amiotik (telur dibentuk tanpa pembelahan meiosis) maupun ginogenesis.",
      "ecology": "Sumber materi ini tidak membahas secara rinci peran ekologis maupun dampak medis Platyhelminthes.",
      "ecologyRoles": {
        "benefits": [
          "Catatan &mdash; sumber tidak mencantumkan detail peran ekologis menguntungkan Platyhelminthes secara spesifik."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak medis atau ekologis merugikan Platyhelminthes secara spesifik dalam materi ini."
        ]
      },
      "examples": "Planaria sp.",
      "exampleNotes": [
        { "name": "Planaria sp.", "note": "Cacing pipih aselomata klasik yang embrionya berkembang hingga gastrula awal lalu membentuk lapisan mesoderm parenkim pengisi rongga tubuh" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Platyhelminthes adalah tubuh gepeng bersimetri bilateral, tanpa rongga tubuh sejati (aselomata), dan seringnya sifat hermafrodit pada organ reproduksinya.",
      "challenge": {
        "question": "Mengapa cacing pipih dapat tumbuh berukuran relatif besar tanpa memiliki sistem peredaran darah atau organ pernapasan internal yang kompleks?",
        "options": [
          "Karena tubuhnya memipih (dorsoventral) sehingga tidak ada sel internal yang berjarak jauh dari permukaan luar",
          "Karena memiliki rongga tubuh sejati yang efisien",
          "Karena bersifat diploblastik",
          "Karena mengalami segmentasi tubuh"
        ],
        "answer": "Karena tubuhnya memipih (dorsoventral) sehingga tidak ada sel internal yang berjarak jauh dari permukaan luar",
        "explanation": "Pemipihan dorsoventral pada Platyhelminthes merupakan solusi geometris rasio luas permukaan terhadap volume: bentuk gepeng memungkinkan pertukaran zat berlangsung langsung lewat difusi ke seluruh sel tubuh tanpa memerlukan sistem sirkulasi atau pernapasan internal yang rumit."
      }
    },
    "nematoda": {
      "id": "nematoda",
      "kingdom": "animalia",
      "label": "Nematoda",
      "title": "Animalia — Nematoda (Cacing Gilig)",
      "scientific": "Nematoda",
      "definition": "Nematoda (roundworms/cacing gilig) adalah filum hewan triploblastik yang dikelompokkan ke dalam klade Ecdysozoa pada divisi Protostomia. Memiliki simetri bilateral dan rongga tubuh semu (pseudoselomata/pseudocoelom) &mdash; rongga berisi cairan yang hanya dilapisi mesoderm di dinding luar tubuh, tidak pada saluran pencernaan. Kriteria ini membedakannya dari Platyhelminthes (aselomata) dan Annelida (selomata sejati). Tubuh Nematoda tidak bersegmen, berbeda dari Annelida yang bermetamerisme, dan mengalami proses ganti kulit (ecdysis).",
      "body": "Nematoda memiliki bentuk tubuh silindris (roundworm) yang dilapisi kutikula pelindung, dengan arsitektur tube-within-a-tube berupa saluran pencernaan lengkap (complete gut) di mana makanan mengalir satu arah dari mulut hingga anus yang terpisah. Data genetik molekuler menempatkan Nematoda lebih dekat kekerabatannya dengan Arthropoda dalam klade Ecdysozoa karena keduanya sama-sama mengalami ecdysis (pengelupasan kutikula), memperbarui pengelompokan tradisional yang hanya berbasis bentuk rongga tubuh.",
      "morphologyProfile": [
        {
          "label": "Rongga Tubuh",
          "value": "Pseudoselomata (Pseudocoelom)",
          "desc": "Rongga berisi cairan yang mesodermnya hanya melapisi dinding luar tubuh (di bawah ektoderm), tidak melapisi saluran pencernaan secara utuh seperti pada hewan selomata sejati."
        },
        {
          "label": "Pelindung Tubuh",
          "value": "Kutikula",
          "desc": "Lapisan pelindung luar berupa kutikula yang mengalami pengelupasan berkala (ecdysis) seiring pertumbuhan tubuh, ciri khas klade Ecdysozoa."
        },
        {
          "label": "Saluran Pencernaan",
          "value": "Saluran Pencernaan Lengkap (Tabung dalam Tabung)",
          "desc": "Berbeda dari Platyhelminthes dan Cnidaria, Nematoda memiliki saluran pencernaan lengkap dengan mulut dan anus terpisah, sehingga makanan mengalir satu arah."
        }
      ],
      "habitat": "Sumber materi ini tidak membahas secara rinci detail habitat Nematoda.",
      "habitatProfile": [
        {
          "label": "Catatan",
          "value": "Tidak Dibahas Rinci di Sumber",
          "desc": "Materi sumber hanya mencantumkan judul filum Nematoda tanpa deskripsi habitat spesifik."
        }
      ],
      "nutrition": "Sumber materi ini tidak membahas secara rinci cara hidup Nematoda sebagai pemakan bakteri/fungi maupun parasit.",
      "reproduction": "Sumber materi ini tidak membahas secara rinci mekanisme reproduksi seksual Nematoda, selain menyebutkan morfologi unik sel spermanya.",
      "ecology": "Sumber materi ini tidak membahas secara rinci peran ekologis maupun medis Nematoda.",
      "ecologyRoles": {
        "benefits": [
          "Catatan &mdash; sumber tidak mencantumkan detail peran ekologis menguntungkan Nematoda secara spesifik."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak medis atau pertanian merugikan Nematoda secara spesifik dalam materi ini."
        ]
      },
      "examples": "Roundworms (nama spesies spesifik tidak dicantumkan pada sumber)",
      "exampleNotes": [],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Nematoda adalah tubuh silindris tidak bersegmen berlapis kutikula, rongga tubuh semu (pseudoselomata), dan saluran pencernaan lengkap dari mulut hingga anus.",
      "challenge": {
        "question": "Analisis filogenetik molekuler menunjukkan Nematoda lebih dekat kekerabatannya dengan Arthropoda dalam klade Ecdysozoa karena keduanya sama-sama…",
        "options": [
          "Memiliki rongga tubuh sejati (selomata)",
          "Mengalami pengelupasan kutikula (ecdysis)",
          "Bersegmen tubuh (metamerisme)",
          "Bersifat diploblastik"
        ],
        "answer": "Mengalami pengelupasan kutikula (ecdysis)",
        "explanation": "Nematoda dan Arthropoda sama-sama memiliki kutikula pelindung tubuh yang harus dilepas dan diganti secara berkala seiring pertumbuhan (ecdysis) &mdash; sifat evolusioner bersama yang menjadi dasar pengelompokan keduanya ke dalam klade Ecdysozoa berdasarkan data genetik, menggantikan klasifikasi tradisional berbasis bentuk rongga tubuh saja."
      }
    },
    "annelida": {
      "id": "annelida",
      "kingdom": "animalia",
      "label": "Annelida",
      "title": "Animalia — Annelida (Cacing Bersegmen)",
      "scientific": "Annelida",
      "definition": "Annelida (dari bahasa Latin annelus, 'cincin-cincin kecil') adalah kelompok cacing bersegmen yang tergolong klade Bilateria dan Lophotrochozoa. Memiliki tubuh bersimetri bilateral, bersifat triploblastik, menunjukkan segmentasi tubuh sejati (metamerisme), dan memiliki rongga tubuh sejati (selomata/eucoelomate) yang dilapisi penuh jaringan mesoderm &mdash; berbeda dari Nematoda yang pseudoselomata dan tidak bersegmen.",
      "body": "Tubuh Annelida tersusun dari deretan unit segmen berulang (metamere/somit) yang dipisahkan secara internal oleh sekat jaringan (septa). Organ internal berkembang baik dan diulang pada setiap segmen, mencakup sepasang metanefridium (organ ekskresi) dan pasangan ganglion saraf segmental yang dihubungkan batang saraf ventral. Sistem sirkulasinya tertutup, dengan darah mengalir di pembuluh longitudinal dan cabang lateral. Otot sirkular dan longitudinal pada dinding tubuh bekerja berlawanan dengan cairan selom yang bertindak sebagai rangka hidrostatik untuk menghasilkan pergerakan, dibantu seta berbahan kitin untuk mencengkeram substrat.",
      "morphologyProfile": [
        {
          "label": "Segmentasi",
          "value": "Metamerisme dengan Septa",
          "desc": "Tubuh tersusun dari unit segmen berulang (metamere/somit) yang dipisahkan secara internal oleh sekat jaringan (septa), dengan organ ekskresi dan ganglion saraf yang diulang di tiap segmen."
        },
        {
          "label": "Sistem Sirkulasi",
          "value": "Tertutup",
          "desc": "Darah mengalir di dalam pembuluh darah longitudinal dan pembuluh cabang lateral, sistem sirkulasi tertutup yang lebih efisien dibanding sirkulasi terbuka."
        },
        {
          "label": "Rangka Hidrostatik",
          "value": "Cairan Selom & Seta",
          "desc": "Cairan di rongga selom bertindak sebagai rangka hidrostatik yang bekerja berlawanan dengan kontraksi otot sirkular/longitudinal, dibantu seta kitin untuk mencengkeram substrat saat bergerak."
        }
      ],
      "habitat": "Annelida memiliki distribusi ekologis sangat luas. Sebagian besar Polychaeta (cacing laut) hidup di samudra, dari daerah pasang surut hingga lubang sembur hidrotermal laut dalam. Oligochaeta dan Hirudinea banyak menghuni perairan tawar serta lingkungan tanah daratan lembap.",
      "habitatProfile": [
        {
          "label": "Samudra",
          "value": "Polychaeta",
          "desc": "Cacing laut berbulu hidup dari daerah pasang surut, dasar laut bentik, hingga lingkungan ekstrem seperti lubang sembur hidrotermal laut dalam."
        },
        {
          "label": "Tanah & Air Tawar",
          "value": "Oligochaeta & Hirudinea",
          "desc": "Cacing tanah dan lintah banyak menghuni perairan tawar serta lingkungan tanah daratan yang lembap."
        }
      ],
      "nutrition": "Sebagai detritivor, Annelida seperti cacing tanah memakan tanah atau sisa bahan organik mati dan menyerap nutrisi saat melewati saluran pencernaan lengkap. Sebagai predator/filter feeder, cacing laut Polychaeta berburu invertebrata kecil atau menyaring partikel makanan dari air menggunakan tentakel/parapodia. Sebagai penghisap darah/parasit temporer, lintah menempel pada inang dan menghisap darah atau cairan tubuhnya.",
      "reproduction": "Sebagian kelompok bersifat hermafrodit/monoecious (cacing tanah dan lintah) namun tetap melakukan fertilisasi silang antarindividu, sedangkan Polychaeta umumnya berkelamin terpisah (dioecious). Pada cacing tanah, klitelum menyekresikan kepompong mukus (cocoon) untuk melindungi telur dan sperma terfertilisasi hingga berkembang menjadi embrio. Beberapa spesies juga mampu bereproduksi aseksual lewat fragmentasi tubuh diikuti kemampuan regenerasi.",
      "ecology": "Aktivitas cacing tanah meliang di dalam tanah menciptakan rongga udara yang memfasilitasi aerasi dan sirkulasi air tanah, sekaligus mencerna bahan organik mati dan menghasilkan ekskreta (casting) kaya nutrisi yang menyuburkan topsoil.",
      "ecologyRoles": {
        "benefits": [
          "Penggembur & Pengaerasi Tanah &mdash; cacing tanah menciptakan rongga udara yang memfasilitasi aerasi dan sirkulasi air tanah.",
          "Dekomposer & Penyubur Topsoil &mdash; mencerna bahan organik mati dan menghasilkan ekskreta (casting) kaya nutrisi yang memulihkan kesuburan lapisan tanah atas.",
          "Sumber Senyawa Medis &mdash; Hirudo medicinalis menyekresikan hirudin, senyawa antikoagulan yang dimanfaatkan dalam terapi medis bedah rekonstruktif."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan langsung dari Annelida terhadap manusia atau ekosistem selain gigitan lintah penghisap darah."
        ]
      },
      "examples": "Lumbricus terrestris, Hirudo medicinalis, Spirobranchus giganteus, Hesiolyra bergi",
      "exampleNotes": [
        { "name": "Lumbricus terrestris", "note": "Cacing tanah darat yang berperan penting menguraikan bahan organik dan meningkatkan aerasi tanah pertanian" },
        { "name": "Hirudo medicinalis", "note": "Lintah medis air tawar yang menyekresikan zat pembius lokal dan senyawa antikoagulan hirudin" },
        { "name": "Spirobranchus giganteus", "note": "Cacing pohon natal, Polychaeta laut yang hidup menetap dalam tabung kapur di terumbu karang" },
        { "name": "Hesiolyra bergi", "note": "Polychaeta laut yang hidup bebas di ekosistem ekstrem sekitar lubang sembur hidrotermal laut dalam" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Annelida adalah segmentasi tubuh yang jelas (metamerisme) dengan organ internal yang berulang di tiap segmen, serta rongga tubuh sejati (selomata).",
      "challenge": {
        "question": "Perbedaan mendasar yang membedakan Annelida dari Nematoda dalam hal arsitektur tubuh adalah…",
        "options": [
          "Annelida memiliki rongga tubuh sejati (selomata) dan tubuh bersegmen, sedangkan Nematoda pseudoselomata dan tidak bersegmen",
          "Annelida tidak memiliki saluran pencernaan lengkap",
          "Nematoda memiliki sistem sirkulasi tertutup, Annelida tidak",
          "Annelida bersifat diploblastik, Nematoda triploblastik"
        ],
        "answer": "Annelida memiliki rongga tubuh sejati (selomata) dan tubuh bersegmen, sedangkan Nematoda pseudoselomata dan tidak bersegmen",
        "explanation": "Annelida memiliki selom sejati yang dilapisi penuh jaringan mesoderm serta tubuh bersegmen (metamerisme) yang jelas, sedangkan Nematoda tergolong pseudoselomata (rongga tubuh semu) dan tubuh silindrisnya tidak bersegmen."
      }
    },
    "mollusca": {
      "id": "mollusca",
      "kingdom": "animalia",
      "label": "Mollusca",
      "title": "Animalia — Mollusca (Hewan Lunak)",
      "scientific": "Mollusca",
      "definition": "Mollusca (dari bahasa Latin molluscus, 'lunak') adalah kelompok hewan triploblastik bersimetri bilateral dan bersifat selomata. Seluruh moluska memiliki arsitektur tubuh dasar tiga bagian: kaki berotot (foot) untuk lokomosi/menggali/menempel, massa viseral (visceral mass) yang menampung organ dalam, dan mantel (mantle) yang membungkus massa viseral dan menyekresikan cangkang kapur.",
      "body": "Mantel membentuk rongga mantel (mantle cavity) berisi air yang menampung insang, anus, dan pori ekskresi. Sebagian besar moluska memiliki radula, sabuk bergigi kitin untuk menggerus makanan. Mantel menyekresikan cangkang pelindung dari kalsium karbonat; pada cumi-cumi dan sotong cangkang mengalami reduksi menjadi cangkang internal, sedangkan pada gurita dan siput telanjang cangkang hilang sepenuhnya. Filum ini terbagi menjadi beberapa kelas utama: Polyplacophora (kiton, cangkang 8 lempeng dorsal), Gastropoda (siput & bekicot, mengalami torsi 180&deg;, ~3/4 spesies moluska), Bivalvia (kima, tiram, kerang, cangkang dua belahan berengsel), dan Cephalopoda (cumi-cumi, gurita, sotong, nautilus, kaki termodifikasi menjadi tentakel).",
      "morphologyProfile": [
        {
          "label": "Tiga Bagian Tubuh",
          "value": "Kaki, Massa Viseral, Mantel",
          "desc": "Kaki berotot untuk lokomosi/menggali/menempel, massa viseral menampung organ dalam (pencernaan, ekskresi, reproduksi), dan mantel membungkus massa viseral sekaligus menyekresikan cangkang."
        },
        {
          "label": "Radula",
          "value": "Organ Pemarut Bergigi Kitin",
          "desc": "Sabuk bergigi kitin khas moluska (kecuali Bivalvia) yang digunakan untuk menggerus makanan, terutama pada kiton dan gastropoda herbivor."
        },
        {
          "label": "Cangkang",
          "value": "Kalsium Karbonat, Tereduksi, atau Hilang",
          "desc": "Mantel menyekresikan cangkang kaku dari kalsium karbonat; cephalopoda modern seperti cumi-cumi dan sotong mereduksinya menjadi cangkang internal, sedangkan gurita dan siput telanjang kehilangannya sepenuhnya."
        }
      ],
      "habitat": "Habitat moluska sangat luas: laut menjadi habitat utama mayoritas spesies (dari daerah pasang surut hingga laut dalam), air tawar dihuni kima/remis/siput air tawar, dan darat dihuni siput darat (bekicot) serta siput telanjang yang beradaptasi dengan lingkungan lembap.",
      "habitatProfile": [
        {
          "label": "Laut",
          "value": "Habitat Utama Mayoritas Spesies",
          "desc": "Dari daerah pasang surut hingga laut dalam, laut menjadi rumah bagi mayoritas spesies moluska termasuk seluruh Cephalopoda."
        },
        {
          "label": "Air Tawar",
          "value": "Kima, Remis, & Siput Air Tawar",
          "desc": "Berbagai spesies bivalvia dan gastropoda air tawar menghuni sungai, danau, dan kolam."
        },
        {
          "label": "Darat",
          "value": "Siput Darat & Siput Telanjang",
          "desc": "Bekicot dan siput telanjang (slug) beradaptasi hidup di lingkungan darat yang lembap."
        }
      ],
      "nutrition": "Sebagai herbivor, kiton dan mayoritas gastropoda menggerus alga dari bebatuan atau memakan tumbuhan menggunakan radula. Sebagai predator/karnivor, cephalopoda memburu mangsa aktif dengan tentakel dan paruh beracun, atau siput pemangsa membor cangkang moluska lain. Sebagai pemakan suspensi (filter feeder), bivalvia menyaring partikel makanan organik halus dari aliran air lewat mukus pada insang.",
      "reproduction": "Sebagian besar spesies berkelamin terpisah (dioecious) dengan gonad di massa viseral, meski banyak siput darat bersifat hermafrodit. Fertilisasi dapat eksternal maupun internal. Pada sebagian besar moluska laut, perkembangan telur menghasilkan tahap larva bersilia berenang bebas bernama larva trokofor (trochophore).",
      "ecology": "Bivalvia berperan sebagai penyaring air alami (biofilter) yang membersihkan perairan dari suspensi organik dan alga berlebih, sementara Cephalopoda dan Gastropoda berperan sebagai predator dan mangsa kunci dalam jaring-jaring makanan laut. Moluska juga menjadi sumber protein hewani bernilai ekonomi tinggi bagi manusia.",
      "ecologyRoles": {
        "benefits": [
          "Biofilter Alami &mdash; Bivalvia menyaring suspensi organik dan alga berlebih, membersihkan kualitas air perairan.",
          "Predator & Mangsa Kunci &mdash; Cephalopoda dan Gastropoda menjaga keseimbangan jaring-jaring makanan laut.",
          "Sumber Pangan Ekonomi &mdash; cumi-cumi, tiram, kerang, dan remis menjadi sumber protein hewani bernilai ekonomi tinggi bagi manusia."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan spesifik dari Mollusca."
        ]
      },
      "examples": "Loligo sp., Architeuthis dux, Achatina fulica, Mytilus edulis, Nautilus sp.",
      "exampleNotes": [
        { "name": "Loligo sp.", "note": "Cumi-cumi, Cephalopoda predator laut berenang cepat dengan cangkang internal tereduksi" },
        { "name": "Architeuthis dux", "note": "Cumi-cumi raksasa laut dalam, mangsa utama paus sperma" },
        { "name": "Achatina fulica", "note": "Bekicot, Gastropoda darat yang menggunakan rongga mantel berpembuluh darah sebagai paru-paru" },
        { "name": "Mytilus edulis", "note": "Kerang laut/remis, Bivalvia pemakan suspensi yang menempel dengan benang byssal" },
        { "name": "Nautilus sp.", "note": "Satu-satunya genus Cephalopoda modern yang masih mempertahankan cangkang eksternal beruang-ruang" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Mollusca adalah tubuh lunak yang terbagi menjadi kaki, massa viseral, dan mantel; cangkang kapur hadir pada banyak anggota namun tidak selalu ada.",
      "challenge": {
        "question": "Mengapa Cephalopoda mengembangkan sistem peredaran darah tertutup dan otak besar yang kompleks, berbeda dari Bivalvia yang bersirkulasi terbuka?",
        "options": [
          "Karena Cephalopoda adalah predator laut aktif yang membutuhkan suplai oksigen cepat dan koordinasi saraf tinggi untuk berburu",
          "Karena Cephalopoda tidak memiliki cangkang sama sekali",
          "Karena Bivalvia hidup di darat sehingga tidak memerlukan sirkulasi kompleks",
          "Karena Cephalopoda tidak memiliki radula"
        ],
        "answer": "Karena Cephalopoda adalah predator laut aktif yang membutuhkan suplai oksigen cepat dan koordinasi saraf tinggi untuk berburu",
        "explanation": "Gaya hidup Cephalopoda sebagai predator laut aktif menuntut sistem sirkulasi darah tertutup yang lebih efisien mengantarkan oksigen, serta sefalisasi (otak besar dan mata kompleks) untuk berburu dan memecahkan masalah &mdash; berbeda dari Bivalvia yang bergerak lambat sebagai pemakan suspensi dan tidak membutuhkan kompleksitas saraf setinggi itu."
      }
    },
    "arthropoda": {
      "id": "arthropoda",
      "kingdom": "animalia",
      "label": "Arthropoda",
      "title": "Animalia — Arthropoda (Hewan Berbuku-buku)",
      "scientific": "Arthropoda",
      "definition": "Arthropoda (dari bahasa Yunani arthron = sendi/buku, pous = kaki) merupakan filum terbesar di Kingdom Animalia &mdash; sekitar dua dari tiga spesies hewan yang telah dideskripsikan di bumi adalah anggotanya. Cirinya meliputi eksoskeleton kaku dari protein dan kitin, anggota tubuh/kaki beruas-ruas (jointed appendages), bersifat triploblastik, bersimetri bilateral, dan tergolong selomata dengan rongga tubuh utama berupa hemosol (hemocoel) dalam sistem sirkulasi terbuka.",
      "body": "Eksoskeleton kitin melindungi organ dalam, mencegah dehidrasi di daratan, dan menyediakan tempat perlekatan otot. Tubuh bersegmen mengalami tagmatisasi &mdash; penyatuan dan spesialisasi fungsi menjadi tagmata seperti kepala-toraks-abdomen pada serangga, atau sefalotoraks-abdomen pada keliserata dan mayoritas krustasea. Karena eksoskeleton kaku tidak dapat membesar, Arthropoda harus melepas kerangka lamanya secara berkala lewat molting (ekdisis) dan menyekresikan eksoskeleton baru yang lebih besar. Filum ini terbagi menjadi empat subfilum: Cheliceriformes (laba-laba, kalajengking, mimi), Myriapoda (kaki-seribu, lipan), Hexapoda (serangga), dan Crustacea (udang, kepiting, krill).",
      "morphologyProfile": [
        {
          "label": "Eksoskeleton",
          "value": "Kitin & Protein",
          "desc": "Rangka luar kaku yang melindungi organ dalam, mencegah dehidrasi/kehilangan air di daratan, serta menyediakan tempat perlekatan otot untuk pergerakan."
        },
        {
          "label": "Tagmatisasi",
          "value": "Kepala-Toraks-Abdomen atau Sefalotoraks-Abdomen",
          "desc": "Tubuh bersegmen menyatu dan terspesialisasi menjadi tagmata: kepala, toraks, abdomen pada serangga; atau sefalotoraks (kepala-dada menyatu) dan abdomen pada keliserata dan mayoritas krustasea."
        },
        {
          "label": "Ekdisis (Molting)",
          "value": "Pergantian Eksoskeleton Berkala",
          "desc": "Karena eksoskeleton kaku tidak dapat membesar, Arthropoda harus melepas kerangka lama secara berkala dan menyekresikan eksoskeleton baru yang lebih besar untuk tumbuh."
        }
      ],
      "habitat": "Arthropoda memiliki kisaran habitat paling luas di antara semua filum hewan &mdash; ditemukan di hampir seluruh biosfer: laut dan air tawar (didominasi Crustacea), daratan (didominasi Hexapoda, Arachnida, dan Myriapoda), hingga udara (serangga terbang).",
      "habitatProfile": [
        {
          "label": "Laut & Air Tawar",
          "value": "Crustacea",
          "desc": "Krustasea seperti udang, kepiting, dan krill mendominasi ekosistem akuatik laut maupun air tawar."
        },
        {
          "label": "Daratan",
          "value": "Hexapoda, Arachnida, & Myriapoda",
          "desc": "Serangga, laba-laba/kalajengking, serta kaki-seribu/lipan mendominasi habitat daratan di hampir seluruh biosfer."
        },
        {
          "label": "Udara",
          "value": "Serangga Terbang",
          "desc": "Hexapoda bersayap merupakan satu-satunya kelompok invertebrata yang berhasil beradaptasi untuk terbang aktif di udara."
        }
      ],
      "nutrition": "Cara hidup dan organ pencernaan Arthropoda sangat bervariasi: herbivor (belalang, kaki-seribu), predator/karnivor (laba-laba, kalajengking, lipan, capung), parasit/ektoparasit (caplak, tungau, kutu, pinjal), detritivor/dekomposer (rayap, kutu kayu), dan filter feeder (teritip).",
      "reproduction": "Umumnya bereproduksi secara seksual dengan kelamin terpisah (dioecious) dan fertilisasi internal pada spesies darat. Pertumbuhan individu bersifat tidak kontinu dan memerlukan molting bertahap. Pada serangga, pertumbuhan larva menuju dewasa mengalami metamorfosis tidak sempurna (tahap nimfa) atau metamorfosis sempurna (larva &rarr; pupa &rarr; imago/dewasa).",
      "ecology": "Sebagai penyerbuk, sumber pangan penyokong jaring makanan, sekaligus dekomposer bahan organik, Arthropoda memegang peran ekologis sentral di hampir semua ekosistem. Namun sejumlah spesies juga menjadi hama pertanian maupun vektor penyakit berbahaya bagi manusia.",
      "ecologyRoles": {
        "benefits": [
          "Penyerbuk (Polinator) &mdash; lebah madu Apis mellifera menyerbuki tanaman pertanian dan bunga liar.",
          "Sumber Pangan & Jaring Makanan &mdash; krill Euphausia superba, udang, dan kepiting menjadi sumber protein manusia sekaligus penyokong jaring makanan samudra.",
          "Dekomposer &mdash; kutu kayu Armadillidium vulgare dan rayap menguraikan bahan organik mati tanah."
        ],
        "harms": [
          "Hama Pertanian &mdash; kumbang jepang Popillia japonica dan belalang merusak tanaman pangan.",
          "Vektor Penyakit &mdash; nyamuk Anopheles sp. menyebarkan malaria dan lalat tsetse Glossina sp. menyebarkan penyakit tidur."
        ]
      },
      "examples": "Apis mellifera, Limulus polyphemus, Scolopendra morsitans, Euphausia superba, Drosophila melanogaster",
      "exampleNotes": [
        { "name": "Apis mellifera", "note": "Lebah madu (Hexapoda), serangga sosial penyerbuk penghasil madu dan lilin lebah" },
        { "name": "Limulus polyphemus", "note": "Mimi/horseshoe crab (Cheliceriformes), 'fosil hidup' laut dengan darah biru untuk deteksi endotoksin" },
        { "name": "Scolopendra morsitans", "note": "Lipan (Myriapoda), karnivor darat bersegmen dengan cakar beracun pelumpuh mangsa" },
        { "name": "Euphausia superba", "note": "Krill Antartika (Crustacea), planktonik bergerombol, makanan utama paus balin" },
        { "name": "Drosophila melanogaster", "note": "Lalat buah (Hexapoda), organisme model klasik riset genetika dan biologi perkembangan" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Arthropoda adalah eksoskeleton kaku dari kitin, anggota tubuh beruas-ruas, dan tubuh bersegmen yang tergabung menjadi tagmata (kepala, toraks, abdomen atau sefalotoraks-abdomen).",
      "challenge": {
        "question": "Struktur sayap serangga memberikan keuntungan adaptif dibanding vertebrata terbang karena…",
        "options": [
          "Sayap serangga adalah penjuluran kutikula toraks, bukan modifikasi tungkai, sehingga kaki tetap berfungsi penuh untuk lokomosi",
          "Sayap serangga terbuat dari tulang seperti sayap burung",
          "Serangga tidak memerlukan otot untuk terbang",
          "Sayap serangga selalu lebih besar dari tubuhnya"
        ],
        "answer": "Sayap serangga adalah penjuluran kutikula toraks, bukan modifikasi tungkai, sehingga kaki tetap berfungsi penuh untuk lokomosi",
        "explanation": "Berbeda dari vertebrata terbang (burung, kelelawar) yang harus memodifikasi sepasang kaki depannya menjadi sayap, sayap serangga merupakan perluasan/ekstensi kutikula luar toraks &mdash; sehingga serangga tetap mempertahankan tiga pasang kaki penuh untuk berjalan sekaligus mampu terbang, memberikan efisiensi lokomosi ganda di daratan dan udara."
      }
    },
    "echinodermata": {
      "id": "echinodermata",
      "kingdom": "animalia",
      "label": "Echinodermata",
      "title": "Animalia — Echinodermata (Hewan Berkulit Duri)",
      "scientific": "Echinodermata",
      "definition": "Echinodermata (dari bahasa Yunani echin = berduri, derma = kulit) adalah kelompok hewan triploblastik bersimetri radial yang tergolong klade Deuterostomia bersama Chordata. Larvanya bersimetri bilateral, namun saat dewasa tubuhnya berubah menjadi bersimetri radial (umumnya memancar dalam 5 ruji/penta-radial). Ciri paling unik filum ini adalah sistem pembuluh air (water vascular system) &mdash; jejaring kanal hidraulik internal bercabang yang terhubung dengan kaki tabung (tube feet).",
      "body": "Echinodermata memiliki endoskeleton lempengan kapur (calcareous plates) yang keras, dilapisi epidermis tipis dan umumnya dilengkapi duri atau tonjolan kaku. Kaki tabung digerakkan secara hidraulik oleh sistem pembuluh air lewat kombinasi organ ampula dan podium, menyekresikan zat adhesif untuk melekat dan de-adhesif untuk melepas substrat &mdash; berfungsi untuk lokomosi, menangkap mangsa, dan pertukaran gas. Filum ini terbagi menjadi 6 kelas: Asteroidea (bintang laut), Ophiuroidea (bintang mengular), Echinoidea (bulu babi & dolar pasir), Crinoidea (lili laut & bintang bulu), Holothuroidea (teripang), dan Concentricycloidea (aster laut).",
      "morphologyProfile": [
        {
          "label": "Sistem Pembuluh Air",
          "value": "Water Vascular System",
          "desc": "Jejaring kanal hidraulik internal bercabang yang terhubung dengan kaki tabung, menjadi ciri paling unik dan diagnostik seluruh anggota Echinodermata."
        },
        {
          "label": "Kaki Tabung",
          "value": "Digerakkan Ampula & Podium",
          "desc": "Kaki tabung (tube feet) digerakkan secara hidraulik, menyekresikan zat adhesif untuk melekat dan de-adhesif untuk melepas substrat; berfungsi untuk lokomosi, menangkap mangsa, dan pertukaran gas."
        },
        {
          "label": "Endoskeleton",
          "value": "Lempengan Kapur Berduri",
          "desc": "Epidermis tipis melapisi endoskeleton lempengan kapur (calcareous plates) yang keras dan umumnya dilengkapi duri atau tonjolan kaku, sumber nama 'berkulit duri'."
        }
      ],
      "habitat": "Seluruh anggota Echinodermata hidup di laut (marine), umumnya bentik di dasar laut dengan pergerakan lambat atau bersifat sesil.",
      "habitatProfile": [
        {
          "label": "Dasar Laut (Bentik)",
          "value": "Habitat Eksklusif Marine",
          "desc": "Seluruh anggota Echinodermata hidup eksklusif di laut, umumnya bentik di dasar laut dengan pergerakan lambat atau bersifat sesil (menetap)."
        }
      ],
      "nutrition": "Sebagai predator, bintang laut mendekap cangkang bivalvia dengan kaki tabung lalu menjulurkan lambungnya ke dalam cangkang mangsa untuk mencerna secara eksternal. Sebagai herbivor, bulu babi memakan alga/rumput laut dengan organ mulut mirip-rahang. Sebagai filter feeder, lili laut dan bintang bulu menangkap partikel makanan dengan lengan berbulu. Sebagai detritivor, bintang mengular dan teripang mengonsumsi bangkai dan materi organik mati di dasar laut.",
      "reproduction": "Umumnya berkelamin terpisah (dioecious), melepaskan gamet langsung ke air laut untuk fertilisasi eksternal. Bintang laut dan ekinodermata lain memiliki kemampuan regenerasi organ tubuh sangat tinggi &mdash; dapat menumbuhkan kembali lengan yang putus, bahkan sepotong lengan dapat tumbuh menjadi individu utuh jika masih membawa sebagian cakram pusat.",
      "ecology": "Bintang laut berperan mengontrol populasi cangkang bivalvia sebagai predator utama, sedangkan bulu babi mengontrol keberlimpahan rumput laut/alga di ekosistem bentik, menjadikan Echinodermata pengatur penting struktur komunitas dasar laut.",
      "ecologyRoles": {
        "benefits": [
          "Predator Kontrol Populasi &mdash; bintang laut mengontrol populasi bivalvia sebagai predator utama di komunitas dasar laut.",
          "Pengontrol Alga &mdash; bulu babi mengontrol keberlimpahan rumput laut/alga di ekosistem bentik, menjaga keseimbangan komunitas."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan spesifik dari Echinodermata."
        ]
      },
      "examples": "Asteroidea, Echinoidea, Holothuroidea (nama spesies binomial spesifik tidak dicantumkan pada sumber)",
      "exampleNotes": [
        { "name": "Asteroidea (Bintang laut)", "note": "Lengan majemuk memancar dari cakram pusat, predator bivalvia dengan mekanisme lambung eversible" },
        { "name": "Echinoidea (Bulu babi & Dolar pasir)", "note": "Tubuh bulat/cakram tanpa lengan, duri dapat digerakkan, struktur mulut mirip-rahang" },
        { "name": "Holothuroidea (Teripang)", "note": "Tubuh memanjang tanpa duri, endoskeleton tereduksi, tentakel penangkap makanan di sekitar mulut" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Echinodermata adalah simetri radial (biasanya 5 ruji) pada fase dewasa, endoskeleton kapur berduri, dan kaki tabung yang digerakkan sistem pembuluh air.",
      "challenge": {
        "question": "Perubahan simetri tubuh Echinodermata dari bilateral (larva) menjadi radial (dewasa) merupakan bentuk adaptasi sekunder yang menguntungkan…",
        "options": [
          "Gaya hidup predator aktif yang berburu mangsa cepat",
          "Gaya hidup bentik yang bergerak lambat atau sesil",
          "Kemampuan terbang di udara",
          "Kehidupan parasit di dalam inang"
        ],
        "answer": "Gaya hidup bentik yang bergerak lambat atau sesil",
        "explanation": "Simetri radial memungkinkan Echinodermata dewasa merespons lingkungan secara merata dari segala arah tanpa perlu 'kepala' yang mengarahkan pergerakan searah &mdash; sangat sesuai untuk gaya hidup bentik yang bergerak lambat atau menetap di dasar laut, berbeda dari larva bilateralnya yang perlu berenang aktif mencari tempat menetap."
      }
    },
    "chordata": {
      "id": "chordata",
      "kingdom": "animalia",
      "label": "Chordata",
      "title": "Animalia — Chordata (Hewan Kordata/Vertebrata)",
      "scientific": "Chordata",
      "definition": "Filum Chordata merupakan kelompok hewan triploblastik bersimetri bilateral yang tergolong klade Deuterostomia bersama Echinodermata. Seluruh kordata memiliki 4 ciri struktural kunci yang muncul pada tahap tertentu perkembangan embrioniknya: notokord (batang penyokong fleksibel dorsal), batang saraf dorsal berongga (berkembang menjadi otak dan sumsum tulang belakang), celah/sibakan faring (alat penyaring makanan atau berkembang menjadi insang/struktur leher-telinga), dan ekor post-anal berotot.",
      "body": "Arsitektur tubuh Chordata mengalami serangkaian inovasi evolusioner bertahap: sefalisasi & kraniata (pembentukan kepala dengan otak terpusat dan tengkorak), bumbungan neural/neural crest (sel embrionik pembentuk tulang tengkorak, gigi, sel saraf), rahang berengsel (Gnathostomata), tungkai berjari (Tetrapoda), hingga telur amniotik (Amniota) untuk beradaptasi penuh di daratan kering. Filum ini terbagi menjadi 3 subfilum: Cephalochordata (lanselet), Urochordata (tunikata), dan Vertebrata/Craniata &mdash; mencakup Agnatha (tak berahang), Chondrichthyes (ikan berkartilago), Osteichthyes (ikan bertulang), Amphibia, Reptilia/Aves, dan Mammalia.",
      "morphologyProfile": [
        {
          "label": "Empat Ciri Kordata",
          "value": "Notokord, Batang Saraf Dorsal, Celah Faring, Ekor Post-Anal",
          "desc": "Keempat ciri struktural ini muncul pada tahap tertentu perkembangan embrionik seluruh anggota Chordata, meski tidak semuanya bertahan hingga dewasa pada setiap kelompok."
        },
        {
          "label": "Neural Crest",
          "value": "Sel Embrionik Pembentuk Kepala",
          "desc": "Kumpulan sel embrionik unik yang bermigrasi membentuk tulang/kartilago tengkorak, gigi, dan sel saraf, menjadi kunci evolusi sefalisasi (pembentukan kepala) pada Vertebrata."
        },
        {
          "label": "Telur Amniotik",
          "value": "4 Membran Ekstraembrionik",
          "desc": "Amniota memiliki amnion (bantalan cairan penahan guncangan), korion (pertukaran gas), kantong kuning telur (nutrisi), dan alantois (penampung sisa metabolik) &mdash; adaptasi kunci untuk berkembang biak penuh di daratan kering."
        }
      ],
      "habitat": "Chordata mendiami kisaran habitat paling luas di biosfer: laut (lanselet, tunikata, ikan, hiu, pari, mamalia laut), air tawar (ikan bertulang, larva lampre, amfibia, kura-kura air tawar), serta darat dan udara (amfibia dewasa, reptil, mamalia, burung).",
      "habitatProfile": [
        {
          "label": "Laut",
          "value": "Kordata Invertebrata & Vertebrata Laut",
          "desc": "Dihuni lanselet dan tunikata (kordata invertebrata), ikan pasuk, hiu, pari, serta mamalia laut seperti paus dan lumba-lumba."
        },
        {
          "label": "Air Tawar",
          "value": "Ikan, Larva Lampre, & Amfibia",
          "desc": "Berbagai ikan bertulang, larva lampre, amfibia, dan kura-kura air tawar menghuni sungai dan danau."
        },
        {
          "label": "Darat & Udara",
          "value": "Amfibia Dewasa, Reptil, Mamalia, & Burung",
          "desc": "Dihuni secara luas oleh amfibia dewasa, reptil, mamalia, serta kelompok burung yang teradaptasi untuk terbang."
        }
      ],
      "nutrition": "Sebagai filter feeder, lanselet, tunikata, dan larva lampre menyaring partikel makanan lewat mukus pada celah faring. Sebagai ektoparasit, lampre dewasa mengisap darah/jaringan ikan lewat mulut parut lingkaran. Sebagai predator/karnivora, hiu, krokodilia, burung pemangsa, dan mamalia karnivora berburu mangsa aktif dengan rahang dan gigi tajam. Sebagai herbivora/omnivora, reptil herbivora, burung, dan mamalia ungulata memakan tumbuhan, buah, atau rumput.",
      "reproduction": "Fertilisasi eksternal terjadi pada mayoritas ikan bersirip-duri dan amfibia, sedangkan fertilisasi internal terjadi pada hiu, reptil, burung, dan mamalia. Adaptasi Amniota berupa telur amniotik dengan 4 membran ekstraembrionik memungkinkan reproduksi penuh di daratan. Pola perkembangannya bervariasi: ovipar (bertelur, pada sebagian hiu, amfibia, reptil, burung, monotremata), ovovivipar (telur menetas dalam uterus, pada sebagian hiu dan ular), dan vivipar (anak berkembang dalam uterus via plasenta, pada sebagian hiu dan mayoritas mamalia euteria).",
      "ecology": "Sebagai predator puncak, Chordata mengendalikan populasi herbivora dan invertebrata dalam menjaga keseimbangan jaring-jaring makanan ekosistem laut, air tawar, dan darat, sekaligus menjadi sumber pangan protein hewani terbesar dari sektor perikanan, peternakan, dan perunggasan. Amfibia yang berkulit permeabel dan bertelur tanpa cangkang bertindak sebagai indikator lingkungan yang sangat peka terhadap perubahan iklim dan pencemaran.",
      "ecologyRoles": {
        "benefits": [
          "Predator Puncak &mdash; mengendalikan populasi herbivora dan invertebrata, menjaga keseimbangan jaring-jaring makanan ekosistem laut, air tawar, dan darat.",
          "Sumber Pangan Global &mdash; sektor perikanan, peternakan, dan perunggasan menjadikan Chordata komoditas ekonomi protein hewani terbesar dunia.",
          "Indikator Lingkungan &mdash; amfibia sangat peka terhadap perubahan iklim dan pencemaran perairan berkat kulit permeabel dan telur tanpa cangkang."
        ],
        "harms": [
          "Catatan &mdash; sumber tidak mencantumkan dampak merugikan spesifik dari Chordata terhadap manusia atau ekosistem lain."
        ]
      },
      "examples": "Branchiostoma sp., Petromyzon marinus, Latimeria chalumnae, Archaeopteryx lithographica, Tachyglossus aculeatus",
      "exampleNotes": [
        { "name": "Branchiostoma sp.", "note": "Lanselet (Cephalochordata), kordata invertebrata kecil yang menanamkan tubuh di pasir dan menyaring makanan dari air" },
        { "name": "Petromyzon marinus", "note": "Lampre laut (Petromyzontida), vertebrata tak berahang parasitik pengisap darah ikan lewat mulut parut melingkar" },
        { "name": "Latimeria chalumnae", "note": "Koelakan (Sarcopterygii), 'fosil hidup' ikan bersirip-daging dengan tulang batang berdaging di dalam siripnya" },
        { "name": "Archaeopteryx lithographica", "note": "Fosil transisi burung terawal, memiliki bulu terbang sejati namun mempertahankan gigi dan ekor bertulang khas theropoda" },
        { "name": "Tachyglossus aculeatus", "note": "Ekidna paruh-pendek (Monotremata), mamalia Australia berduri yang bertelur namun menyusui anaknya" }
      ],
      "recognize": "Ciri utama yang bisa diamati untuk mengenali Chordata adalah kehadiran notokord dan batang saraf dorsal tunggal berongga pada tahap perkembangan tertentu &mdash; jangan menyamakan Chordata hanya dengan hewan bertulang belakang (vertebrata) semata.",
      "challenge": {
        "question": "Evolusi tulang martil (malleus) dan tulang landasan (incus) di telinga tengah mamalia berasal dari modifikasi…",
        "options": [
          "Tulang tengkorak neural crest",
          "Tulang artikular dan kuadrat pada engsel rahang reptil/sinapsida purba",
          "Notokord embrionik",
          "Celah faring embrionik"
        ],
        "answer": "Tulang artikular dan kuadrat pada engsel rahang reptil/sinapsida purba",
        "explanation": "Pada sinapsida awal, sendi rahang bawah dibentuk oleh tulang artikular dan kuadrat. Seiring evolusi menuju mamalia, rahang bawah menyederhana menjadi satu tulang (dentaris), sementara tulang artikular dan kuadrat bergeser posisi masuk ke telinga tengah dan berkembang menjadi tulang martil (malleus) dan tulang landasan (incus) &mdash; contoh klasik penurunan dengan modifikasi (descent with modification) yang meningkatkan sensitivitas pendengaran mamalia di daratan."
      }
    }
  }
};