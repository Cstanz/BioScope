const BIOSCOPE_DATA = {
  "kingdoms": {
    "monera": {
      "name": "Monera",
      "eyebrow": "Kingdom 01",
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
      "eyebrow": "Kingdom 02",
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
      "unlock_text": "Selesaikan Monera dengan skor minimal 85%."
    },
    "fungi": {
      "name": "Fungi",
      "eyebrow": "Kingdom 03",
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
      "label": "Eubacteria",
      "title": "Eubacteria: Bakteri Sejati",
      "scientific": "Eubacteria",
      "definition": "Eubacteria adalah kelompok mikroorganisme prokariotik uniseluler yang paling beragam dan tersebar luas di Bumi, mencakup ribuan spesies dengan bentuk dan cara hidup yang sangat bervariasi.",
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
          "value": "Ragi (Yeast) Berfisi atau Bertunas",
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
      "title": "Plantae — Bryophyta",
      "scientific": "Bryophyta",
      "definition": "Kelompok tumbuhan nonvaskular yang mencakup lumut sejati dalam pengertian sempit.",
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