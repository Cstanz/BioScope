const BIOSCOPE_DATA = {
  "kingdoms": {
    "monera": {
      "name": "Monera",
      "eyebrow": "Kingdom 01",
      "embedUrl": "https://sketchfab.com/models/42439edc90cd4d87b8ae322a4dcee8de/embed?autostart=1&transparent=1",
      
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
      "title": "Eubacteria: Bakteri Sejati",
      "scientific": "Eubacteria",
      "definition": "Eubacteria adalah kelompok mikroorganisme prokariotik uniseluler yang paling beragam dan tersebar luas di Bumi. Lewat sekuens gen 16S rRNA, sudah teridentifikasi lebih dari 80 filum berbeda. Meski begitu, sebagian besar bakteri yang berhasil dibiakkan di laboratorium hanya berasal dari empat filum utama: Proteobacteria, Actinobacteria, Firmicutes, dan Bacteroidetes.",
      "embedUrl": "https://sketchfab.com/models/1e085616d0ff43c3bfd1f86cdbdb5755/embed?autostart=1&transparent=1",
      "body": "Seperti prokariotik lain, sel Eubacteria tidak memiliki organel yang dibungkus membran. Materi genetiknya tersebar bebas di sitoplasma dalam bentuk nukleoid, bukan di dalam inti sel yang terpisah. Namun gambaran ini tidak selalu sesederhana itu. Lewat teknik pencitraan cryo-electron tomography, para peneliti menemukan bahwa filum Planctomycetes ternyata memiliki lipatan membran dalam yang mengelilingi materi genetiknya, bahkan membentuk kompartemen khusus bernama anammoxosome. Temuan ini sempat memunculkan dugaan bahwa Planctomycetes adalah bentuk transisi menuju sel eukariotik &mdash; sebelum akhirnya terbantahkan, karena kelompok ini tetap memiliki peptidoglikan seperti Eubacteria lainnya.",
      "morphologyProfile": [
        {
          "label": "Bentuk Sel",
          "value": "Kokus, Basil, Spiral, & Filamen",
          "desc": "Selain tiga bentuk dasar ini, ada variasi menarik seperti filamen bercabang pada Streptomyces yang menyerupai hifa jamur, sel yang tumbuh dengan cara bertunas, dan sel yang memiliki apendiks."
        },
        {
          "label": "Dinding Sel",
          "value": "Peptidoglikan (dengan pengecualian)",
          "desc": "Peptidoglikan umumnya tersusun dari tiga komponen utama: N-acetylglucosamine (NAG), N-acetylmuramic acid (NAM), dan asam diaminopimelat. Tapi ada pengecualian: Mycoplasma sama sekali tidak berdinding sel, sedangkan Deinococcus radiodurans berstruktur Gram-negatif namun hasil pewarnaannya justru Gram-positif."
        },
        {
          "label": "Materi Genetik",
          "value": "Nukleoid & Plasmid",
          "desc": "Genom utama berupa satu DNA sirkular ganda yang bebas tanpa membran inti. Bakteri juga sering membawa plasmid tambahan seperti R-plasmid, yang bisa mengodekan resistensi antibiotik dan berpindah antarsel."
        }
      ],
      "habitat": "Eubacteria adalah organisme kosmopolit yang bisa ditemukan hampir di seluruh biosfer Bumi &mdash; dari tanah dan perairan, hingga hidup berasosiasi erat dengan organisme eukariotik. Beberapa kelompok bahkan sudah beradaptasi dengan lingkungan ekstrem sejak awal kehidupan di Bumi. Aquificae dan Thermotogae, misalnya, adalah garis keturunan hipertermofilik purba yang menempati cabang paling dalam pada pohon filogenetik bakteri, sebuah petunjuk bahwa nenek moyang mereka sudah terbiasa hidup di lingkungan panas dan kaya belerang.",
      "habitatProfile": [
        {
          "label": "Kebutuhan Oksigen",
          "value": "Sangat bervariasi",
          "desc": "Ada bakteri yang benar-benar membutuhkan oksigen (aerob obligat), ada yang bisa hidup dengan atau tanpa oksigen (aerob fakultatif), ada yang hanya bertahan pada kadar oksigen rendah (mikroaerofil, 3&ndash;15%), hingga yang justru mati jika terpapar oksigen (anaerob obligat). Bakteri asam laktat termasuk kelompok anaerob yang tetap toleran terhadap oksigen."
        },
        {
          "label": "Derajat Keasaman",
          "value": "pH 2 &ndash; 10",
          "desc": "Rentangnya sangat luas: Sarcina ventriculi tergolong asidofil ekstrem yang tumbuh optimal pada pH serendah 2, sedangkan Sporosarcina ureae adalah alkalifil yang justru nyaman hidup di lingkungan basa dengan pH mendekati 10."
        },
        {
          "label": "Ketahanan Termal",
          "value": "Psikrofilik &ndash; Hipertermofilik",
          "desc": "Bakteri psikrofilik hidup nyaman di perairan kutub yang dingin, di bawah 20°C. Di ujung yang berlawanan, Aquifex justru tumbuh optimal pada suhu di atas 80°C dan masih bertahan hingga 95°C."
        }
      ],
      "nutrition": "Dari semua makhluk hidup, bakteri punya keragaman cara memperoleh energi yang paling luas. Sebagian besar bersifat heterotrof (chemoorganotroph) &mdash; mereka memperoleh energi dengan mengoksidasi senyawa organik lewat respirasi atau fermentasi. Ada juga kelompok yang lebih unik: chemolithotroph memperoleh energi dari senyawa anorganik seperti hidrogen, hidrogen sulfida, atau ion besi, bukan dari senyawa organik. Bakteri autotrof lain mengikat karbon dioksida lewat jalur seperti Siklus Calvin, atau siklus asam sitrat terbalik pada kelompok hipertermofilik seperti Aquifex. Beberapa kelompok bahkan memanfaatkan cahaya sebagai sumber energi lewat pigmen bakterioklorofil &mdash; termasuk bakteri fotosintetik anoksigenik yang uniknya tidak menghasilkan oksigen sebagai produk sampingan. Ada pula methylotroph, yang mampu hidup hanya dengan mengandalkan senyawa satu karbon seperti metanol.",
      "reproduction": "Bakteri bereproduksi secara aseksual lewat pembelahan biner, proses yang membutuhkan protein sitoskeleton bernama FtsZ untuk membentuk sekat pemisah di tengah sel. Ada beberapa variasi menarik dari pola dasar ini: Planctomyces membelah diri dengan cara bertunas tanpa melibatkan FtsZ sama sekali, Arthrobacter melakukan snapping division yang membentuk pola huruf V, sementara bakteri bertangkai seperti Caulobacter membelah secara asimetris. Perlu dibedakan antara reproduksi dan cara bakteri menjaga keragaman genetiknya: reproduksi hanya menghasilkan sel yang identik secara genetik dengan induknya, sedangkan keragaman genetik justru muncul lewat transfer gen horizontal &mdash; konjugasi, transduksi, atau transformasi &mdash; yang berperan penting menyebarkan gen fiksasi nitrogen maupun resistensi antibiotik antarbakteri. Dalam kondisi yang tidak menguntungkan, beberapa bakteri Gram-positif seperti Bacillus dan Clostridium membentuk endospora, struktur dorman yang sangat tahan terhadap kondisi ekstrem, sedangkan Streptomyces membentuk conidia dari hifa udaranya untuk menyebar ke lingkungan baru.",
      "ecology": "Eubacteria memegang peran kunci dalam siklus biogeokimia global, terutama sebagai pengurai utama materi organik yang sudah mati dan sebagai mitra fiksasi nitrogen secara simbiosis. Di luar peran ekologisnya, kelompok ini juga punya kontribusi ekonomi yang besar, mulai dari produksi antibiotik hingga bioteknologi molekuler modern.",
      "ecologyRoles": {
        "benefits": [
          "Dekomposisi & siklus karbon &mdash; Bacteroidetes (seperti Cytophaga) dan Clostridium yang selulolitik membantu mendegradasi selulosa dan kitin di tanah maupun perairan.",
          "Fiksasi nitrogen &mdash; Rhizobium dan Bradyrhizobium hidup bersimbiosis dengan akar tanaman legum, sementara Azospirillum melakukannya secara bebas tanpa inang.",
          "Produksi antibiotik &mdash; Streptomyces menghasilkan lebih dari separuh antibiotik klinis yang dipakai di dunia, termasuk streptomycin, tetracycline, dan eritromisin.",
          "Bioteknologi &mdash; Taq polymerase dari Thermus aquaticus merevolusi teknik PCR, sedangkan Bt-toxin dari Bacillus thuringiensis dipakai sebagai bioinsektisida ramah lingkungan."
        ],
        "harms": [
          "Patogen manusia &mdash; beberapa contoh utamanya adalah Mycobacterium tuberculosis penyebab TBC, Vibrio cholerae penyebab kolera, dan Neisseria meningitidis penyebab meningitis.",
          "Produksi toksin &mdash; Clostridium tetani dan Clostridium botulinum menghasilkan toksin berbahaya, begitu juga E. coli galur O157:H7 yang bisa menyebabkan keracunan makanan akut.",
          "Infeksi nosokomial &mdash; Pseudomonas aeruginosa dikenal sulit diobati karena resistensinya terhadap banyak antibiotik sekaligus, yang diwariskan lewat R-plasmid.",
          "Fitopatogen &mdash; Pseudomonas syringae dan Burkholderia cepacia dapat merusak jaringan tanaman."
        ]
      },
      "examples": "Escherichia coli, Streptomyces griseus, Rhizobium leguminosarum, Deinococcus radiodurans, Mycoplasma pneumoniae, Clostridium botulinum",
      "exampleNotes": [
        { "name": "Escherichia coli", "note": "Umumnya hidup sebagai flora normal di usus manusia, meski beberapa galur seperti O157:H7 bisa bersifat patogen dan menghasilkan enterotoksin" },
        { "name": "Streptomyces griseus", "note": "Bakteri tanah dari filum Actinobacteria, dikenal sebagai penghasil antibiotik streptomycin" },
        { "name": "Rhizobium leguminosarum", "note": "Bersimbiosis dengan akar tanaman legum untuk membantu proses fiksasi nitrogen" },
        { "name": "Deinococcus radiodurans", "note": "Sangat tahan terhadap radiasi ekstrem; strukturnya Gram-negatif, tapi hasil pewarnaannya justru Gram-positif" },
        { "name": "Mycoplasma pneumoniae", "note": "Tidak memiliki dinding sel sama sekali; koloninya punya bentuk khas yang disebut 'fried-egg'" },
        { "name": "Clostridium botulinum", "note": "Penghasil toksin botulinum, sering ditemukan pada makanan kaleng yang terkontaminasi" }
      ],
      "recognize": "Untuk mengenali dan mengidentifikasi bakteri, ada tiga langkah yang biasanya dilakukan secara berurutan: mengamati morfologi sel dan koloninya, melakukan pewarnaan diferensial, lalu memastikan identitasnya lewat uji biokimia hingga ke tingkat genus atau spesies.",
      "recognizeSteps": [
        "<strong>Amati morfologi sel dan koloni</strong> &mdash; perhatikan bentuknya, misalnya diplokokus pada Neisseria atau rantai sel pada Streptococcus. Bentuk koloni juga bisa jadi petunjuk, seperti koloni 'fried-egg' pada Mycoplasma, koloni berkerut pada Mycobacterium, pola swarming melingkar pada Proteus, atau warna merah dari pigmen prodigiosin pada Serratia.",
        "<strong>Lakukan pewarnaan diferensial</strong> &mdash; pewarnaan Gram membantu membedakan bakteri Gram-positif (berwarna ungu) dari Gram-negatif (berwarna merah). Untuk kasus khusus, pewarnaan tahan asam (Ziehl-Neelsen) bisa mendeteksi asam mikolat pada Mycobacterium, sementara pewarnaan spora dipakai untuk memastikan keberadaan endospora.",
        "<strong>Lanjutkan dengan uji biokimia</strong> &mdash; misalnya uji katalase (positif pada Staphylococcus, negatif pada Streptococcus), uji oksidase (membedakan Pseudomonas/Vibrio dari bakteri enterik), atau uji fermentasi gula untuk melihat pola metabolisme, seperti mixed-acid pada E. coli dibandingkan butanediol pada Enterobacter."
      ],
      "challenge": {
        "question": "Seorang mahasiswa mengamati dua isolat bakteri. Isolat P memiliki struktur dinding sel Gram-negatif lengkap dengan membran luar, tetapi hasil pewarnaan Gram-nya justru menunjukkan warna ungu pekat. Isolat Q sama sekali tidak memiliki dinding sel, namun tetap stabil karena membrannya diperkuat oleh sterol dan lipoglikan. Berdasarkan informasi ini, kesimpulan manakah yang paling tepat mengenai kedua isolat tersebut?",
        "options": [
          "Kedua isolat pasti salah identifikasi karena hasil pewarnaan Gram selalu 100% konsisten dengan struktur dinding sel",
          "Isolat P kemungkinan besar Deinococcus radiodurans dengan peptidoglikan atipikal beresidu ornitin, sedangkan Isolat Q kemungkinan Mycoplasma (Tenericutes) yang memang tidak berdinding sel",
          "Isolat P pasti Gram-negatif biasa dan Isolat Q pasti tergolong jamur, karena hanya jamur yang tidak berdinding sel",
          "Kedua isolat tidak dapat digolongkan sebagai Eubacteria karena tidak mengikuti aturan dinding sel standar"
        ],
        "answer": "Isolat P kemungkinan besar Deinococcus radiodurans dengan peptidoglikan atipikal beresidu ornitin, sedangkan Isolat Q kemungkinan Mycoplasma (Tenericutes) yang memang tidak berdinding sel",
        "explanation": "Pewarnaan Gram adalah alat bantu, bukan penentu mutlak dari struktur dinding sel. Deinococcus radiodurans, misalnya, secara struktural tergolong Gram-negatif karena memiliki membran luar, tapi hasil pewarnaannya tetap Gram-positif akibat kandungan peptidoglikan unik dengan residu ornitin. Di sisi lain, Mycoplasma (filum Tenericutes) memang tidak memiliki dinding sel sama sekali, namun tetap digolongkan sebagai Eubacteria berdasarkan ciri prokariotik dan filogeninya. Stabilitas membrannya dijaga oleh sterol dan lipoglikan, menggantikan fungsi dinding sel yang hilang."
      }
    },
    
"archaea": {
      "id": "archaea",
      "kingdom": "monera",
      "label": "Archaea",
      "title": "Archaea: Domain Prokariotik yang Unik",
      "scientific": "Archaea",
      "definition": "Archaea adalah domain organisme prokariotik uniseluler yang berbeda secara evolusioner dari Bacteria maupun Eukarya. Dulu, Archaea dikenal sebagai organisme purba yang hanya mampu bertahan hidup di lingkungan ekstrem. Penelitian molekuler modern menunjukkan anggapan itu keliru, Archaea sebenarnya tersebar luas di seluruh biosfer, termasuk di tanah dan lautan yang kondisinya biasa saja.",
      "embedUrl": "https://sketchfab.com/models/8df6e9add2c24beaa989b3278d96245a/embed?autostart=1&transparent=1",
      "body": "Seperti prokariotik lainnya, sel Archaea tidak memiliki organel yang dibungkus membran. Namun ada satu kemiripan menarik dengan sel eukariotik: enzim RNA polimerase pada Archaea secara struktural mirip dengan RNA polimerase pada Eukarya. Materi genetiknya umumnya berbentuk sirkular dan tersebar bebas di wilayah nukleoid. Pada kelompok haloarchaea yang hidup di lingkungan sangat asin, plasmid tambahan bahkan bisa menyusun hingga 30% dari total DNA sel. Ciri paling khas dari Archaea justru ada pada dinding selnya: berbeda dari Bacteria, dinding sel Archaea sama sekali tidak mengandung peptidoglikan. Sebagai gantinya, Archaea memakai bahan penyusun lain seperti pseudomurein, glikoprotein, atau lapisan protein kristalin yang disebut S-layer. Beberapa Archaea yang hidup di suhu sangat tinggi (hipertermofil) juga punya mekanisme khusus untuk menjaga kestabilan DNA-nya. Protein tertentu membantu mengemas DNA menjadi struktur yang menyerupai nukleosom pada sel eukariotik, sedangkan enzim seperti reverse DNA gyrase membantu mencegah DNA rusak akibat panas ekstrem.",
      "morphologyProfile": [
        {
          "label": "Bentuk Sel",
          "value": "Sangat beragam (kokoid, batang, filamen, hingga kotak)",
          "desc": "Archaea punya variasi bentuk yang sangat luas: ada yang bulat tak beraturan seperti Nitrososphaera, berbentuk batang seperti Methanopyrus dan Thermoproteus, atau filamen tipis dan panjang seperti Korarchaeum. Salah satu yang paling unik adalah Haloquadratum, yang selnya berbentuk kotak sempurna dan dilengkapi vesikel gas supaya bisa mengapung."
        },
        {
          "label": "Dinding Sel",
          "value": "Tanpa peptidoglikan (pseudomurein / glikoprotein / S-layer)",
          "desc": "Ketiadaan peptidoglikan inilah yang membedakan Archaea secara mendasar dari Bacteria. Sebagai gantinya, beberapa kelompok memakai pseudomurein (seperti pada Methanobacterium dan Methanopyrus), glikoprotein (seperti pada Halobacterium dan Pyrodictium), atau lapisan protein kristalin yang disebut S-layer."
        },
        {
          "label": "Lipid Membran",
          "value": "Ikatan eter (ether-linked), bukan ester",
          "desc": "Pada Bacteria dan Eukarya, gliserol pada membran sel dihubungkan ke rantai lipid lewat ikatan ester. Archaea justru memakai ikatan eter untuk menghubungkan gliserol dengan rantai fitanil. Pada kelompok hipertermofilik, lipid ini bahkan bisa membentuk lapisan tunggal (monolayer) yang jauh lebih tahan terhadap panas ekstrem."
        }
      ],
      "habitat": "Archaea adalah organisme kosmopolit yang bisa ditemukan hampir di seluruh biosfer Bumi. Dulu, Archaea paling dikenal karena kemampuannya mendominasi lingkungan yang sangat ekstrem, seperti kolam garam hipersalin, kawasan vulkanik yang penuh belerang, atau lubang hidrotermal di dasar laut. Namun gambaran itu berubah setelah para peneliti mulai memakai teknik genetika yang tidak memerlukan pembiakan di laboratorium. Ternyata, Archaea juga hidup melimpah di lingkungan yang biasa-biasa saja. Filum Thaumarchaeota, misalnya, bersifat mesofilik dan netral, tapi jumlahnya sangat besar &mdash; organisme ini menyusun sekitar seperlima populasi picoplankton di lautan dunia, dan bahkan ditemukan melimpah di perairan Antartika yang sangat dingin.",
      "habitatProfile": [
        {
          "label": "Kebutuhan Oksigen",
          "value": "Sangat bervariasi",
          "desc": "Metanogen termasuk anaerob obligat &mdash; mereka tidak bisa hidup jika terpapar oksigen, karena kofaktor yang dipakai dalam metanogenesisnya sangat sensitif terhadap oksigen. Sebaliknya, sebagian besar haloarchaea justru bersifat aerob obligat dan memerlukan oksigen untuk hidup."
        },
        {
          "label": "Derajat Keasaman",
          "value": "pH &lt;0 &ndash; 11",
          "desc": "Rentang pH hidup Archaea sangat lebar. Picrophilus, misalnya, tetap tumbuh optimal pada pH 0,7 dan bahkan bertahan hidup pada pH di bawah nol, sementara Ferroplasma juga tergolong asidofil ekstrem yang biasa ditemukan di area tambang. Di ujung yang berlawanan, Natronobacterium justru nyaman hidup di danau soda yang sangat basa, dengan pH optimal 9 sampai 11."
        },
        {
          "label": "Ketahanan Termal",
          "value": "Psikrofilik &ndash; Hipertermofilik ekstrem",
          "desc": "Archaea psikrofilik hidup di perairan kutub yang sangat dingin, sekitar 0 hingga 4°C. Di sisi lain, Methanopyrus kandleri memegang rekor sebagai organisme dengan suhu pertumbuhan tertinggi yang pernah tercatat di Bumi &mdash; ia masih bisa membelah diri pada suhu 122°C."
        }
      ],
      "nutrition": "Archaea punya cara memperoleh energi yang sangat beragam. Salah satu yang paling khas adalah metanogenesis, jalur metabolisme yang sejauh ini hanya ditemukan pada Archaea. Lewat bantuan koenzim khusus bernama koenzim M, metanogen bisa mengubah karbon dioksida, metanol, atau asetat menjadi gas metana. Kelompok Thaumarchaeota memperoleh energi dengan cara yang berbeda lagi: mereka mengoksidasi amonia menjadi nitrit di lingkungan samudra terbuka yang kaya oksigen. Sementara itu, kelompok hipertermofilik seperti Sulfolobus memperoleh energi dari oksidasi sulfur menjadi asam sulfat. Ada juga haloarchaea yang memanfaatkan cahaya sebagai sumber energi, tetapi caranya berbeda dari fotosintesis pada tumbuhan &mdash; mereka memakai protein bernama bacteriorhodopsin, bukan klorofil, untuk menangkap energi cahaya. Salah satu kasus paling ekstrem ditemukan pada Nanoarchaeum equitans: genomnya sangat kecil dan sudah kehilangan banyak gen penting, sehingga ia hanya bisa bertahan hidup sebagai parasit metabolik pada inangnya, Ignicoccus hospitalis.",
      "reproduction": "Archaea bereproduksi murni secara aseksual. Cara utamanya adalah pembelahan biner: sel membelah secara simetris setelah materi genetiknya selesai direplikasi. Ada satu pengecualian menarik, yaitu Nanoarchaeum equitans, yang hanya bisa bereplikasi selama ia menempel pada sel inangnya. Berbeda dari Bacteria, Archaea tidak membentuk endospora atau tahapan istirahat lainnya. Untuk bertahan dalam kondisi ekstrem, Archaea justru mengandalkan struktur selnya sendiri &mdash; misalnya lipid monolayer pada membrannya yang tahan mendidih, atau protein pelindung bernama thermosome yang bisa memperbaiki protein-protein yang rusak akibat panas. Perlu dicatat, reproduksi bukan satu-satunya cara Archaea memperoleh keragaman genetik. Meski tidak bereproduksi secara seksual, Archaea tetap bisa bertukar materi genetik lewat transfer gen horizontal, proses yang terpisah dari reproduksi itu sendiri. Salah satu contohnya adalah gen reduksi sulfat yang diperkirakan berpindah dari bakteri Deltaproteobacteria ke leluhur Archaeoglobus.",
      "ecology": "Archaea berperan penting dalam siklus biogeokimia global. Thaumarchaeota, misalnya, menjadi salah satu penggerak utama siklus nitrogen lewat oksidasi amonia di tanah dan lautan &mdash; bahkan di beberapa tanah asam, perannya jauh lebih besar dibandingkan bakteri nitrifikasi. Di lingkungan tanpa oksigen, metanogen berperan mengakhiri rantai dekomposisi bahan organik sambil menghasilkan gas metana, yang kemudian dimanfaatkan sebagai sumber gas alam komersial. Beberapa Archaea hipertermofilik dan asidofilik seperti Sulfolobus juga dimanfaatkan industri untuk mengolah bijih besi dan tembaga, sementara enzim serta protein tahan panasnya menjadi acuan penting dalam teknologi stabilisasi molekul.",
      "ecologyRoles": {
        "benefits": [
          "Siklus Nitrogen Global &mdash; Thaumarchaeota berperan besar dalam oksidasi amonia di tanah dan lautan, bahkan mengungguli bakteri nitrifikasi hingga 1000 kali lipat di beberapa tanah asam.",
          "Siklus Karbon & Energi &mdash; Metanogen mengakhiri proses dekomposisi bahan organik di lingkungan tanpa oksigen (seperti sedimen laut, lahan basah, dan saluran cerna hewan ternak), sekaligus menghasilkan gas alam komersial.",
          "Bioremediasi & Hidrometalurgi &mdash; Sulfolobus yang hipertermofilik dimanfaatkan industri untuk proses bioleaching, yaitu mengolah bijih besi dan tembaga pada suhu tinggi.",
          "Teknologi Enzim Tahan Panas &mdash; Organisme hipertermofilik menjadi sumber enzim yang stabil pada suhu tinggi, termasuk protein chaperon seperti thermosome pada Pyrodictium yang dipakai sebagai acuan stabilisasi molekul dalam industri."
        ],
        "harms": [
          "Kerusakan Makanan Bergaram &mdash; Haloarchaea bisa tumbuh subur di makanan yang sangat asin, seperti ikan asin, sosis, dan daging asin, sehingga menyebabkan pembusukan.",
          "Emisi Gas Rumah Kaca &mdash; Metanogen di lahan pertanian basah dan sistem pencernaan hewan ternak melepaskan gas metana dalam jumlah besar ke atmosfer, yang turut mempercepat pemanasan global.",
          "Pencemaran Drainase Asam Tambang &mdash; Ferroplasma mengoksidasi besi di area bekas tambang, menghasilkan asam sulfat pekat yang bisa menurunkan pH lingkungan hingga mendekati nol.",
          "Catatan &mdash; berbeda dari Eubacteria, hingga saat ini belum ada satu pun spesies Archaea yang terbukti bersifat patogen bagi manusia, hewan, maupun tumbuhan."
        ]
      },
      "examples": "Methanopyrus kandleri, Nanoarchaeum equitans, Ignicoccus hospitalis, Nitrosopumilus maritimus, Sulfolobus, Halobacterium",
      "exampleNotes": [
        { "name": "Methanopyrus kandleri", "note": "Hipertermofil pemegang rekor dunia; masih bisa membelah diri pada suhu 122°C" },
        { "name": "Nanoarchaeum equitans", "note": "Genomnya sangat kecil sehingga hidup sebagai parasit metabolik pada inangnya" },
        { "name": "Ignicoccus hospitalis", "note": "Berperan sebagai inang wajib bagi Nanoarchaeum equitans" },
        { "name": "Nitrosopumilus maritimus", "note": "Thaumarchaeota laut yang memperoleh energi dari oksidasi amonia" },
        { "name": "Sulfolobus", "note": "Hipertermofil asidofilik yang dimanfaatkan industri untuk mengolah bijih besi dan tembaga" },
        { "name": "Halobacterium", "note": "Haloarchaea yang memanfaatkan protein bacteriorhodopsin untuk menangkap energi cahaya" }
      ],
      "recognize": "Untuk mengenali Archaea, ada tiga langkah utama yang biasa dilakukan: menganalisis gen 16S rRNA-nya, memeriksa profil lipid membrannya, lalu melakukan uji fisiologis khusus untuk memastikan identitasnya sampai ke tingkat genus atau spesies.",
      "recognizeSteps": [
        "<strong>Analisis gen 16S rRNA</strong> &mdash; DNA diekstrak dari sampel lingkungan atau kultur murni, lalu diperbanyak lewat PCR memakai primer khusus Archaea. Hasilnya kemudian disekuensing untuk menentukan posisi taksonominya pada pohon filogenetik.",
        "<strong>Periksa profil lipid membran</strong> &mdash; lipid sel diekstrak, lalu dianalisis lewat kromatografi untuk mendeteksi ikatan eter pada rantai fitanil atau tetraether-nya. Ciri ini yang secara tegas membedakan Archaea dari Bacteria maupun Eukarya, karena keduanya memakai ikatan ester.",
        "<strong>Lakukan uji fisiologis khusus</strong> &mdash; misalnya uji produksi metana secara anaerobik lewat kromatografi gas untuk mengonfirmasi metanogen, atau uji toleransi terhadap kadar garam tinggi untuk memastikan suatu isolat benar-benar tergolong haloarchaea."
      ],
      "challenge": {
        "question": "Seorang peneliti mengisolasi sebuah mikroorganisme uniseluler prokariotik dari lubang hidrotermal di laut dalam. Hasil analisis biokimia menunjukkan dua hal: dinding selnya sama sekali tidak mengandung peptidoglikan, dan lipid membrannya tersusun dari gliserol yang terhubung ke rantai fitanil lewat ikatan eter, bukan ester. Berdasarkan dua ciri tersebut, isolat ini paling tepat digolongkan sebagai...",
        "options": [
          "Bacteria, karena habitat ekstrem umum ditemukan pada bakteri hipertermofilik seperti Aquifex",
          "Archaea, karena ketiadaan peptidoglikan dan lipid membran berikatan eter merupakan ciri diagnostik yang secara mutlak membedakannya dari Bacteria",
          "Eukarya, karena kompleksitas biokimia lipid menunjukkan organisme berinti sejati",
          "Tidak dapat ditentukan tanpa melihat bentuk selnya terlebih dahulu"
        ],
        "answer": "Archaea, karena ketiadaan peptidoglikan dan lipid membran berikatan eter merupakan ciri diagnostik yang secara mutlak membedakannya dari Bacteria",
        "explanation": "Ketiadaan peptidoglikan dan penggunaan ikatan eter pada lipid membran adalah dua ciri biokimia yang secara tegas membedakan Archaea dari Bacteria maupun Eukarya. Kemiripan habitat saja tidak cukup jadi dasar penggolongan, karena bakteri hipertermofilik pun bisa hidup di lingkungan ekstrem yang serupa. Bentuk sel juga bukan penentu yang bisa diandalkan, sebab Archaea sendiri menampilkan morfologi yang sangat beragam."
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