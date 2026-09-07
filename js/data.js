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
            "Robert H. Whittakers",
            "Carl Linnaeus"
          ],
          "Robert H. Whittakers",
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
      "embedUrl": "https://sketchfab.com/models/8df6e9add2c24beaa989b3278d96245a/embed?autostart=1&transparent=1",
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