(function () {
  if (window.__bioscopeRefs) return;
  window.__bioscopeRefs = true;

  function init() {
  var list = document.getElementById('citation-list');

  // Halaman filum belum punya elemen daftar pustaka di HTML-nya, jadi
  // dibuat otomatis tepat di bawah isi materi (sebelum footer).
  if (!list) {
    var host = document.querySelector('[data-division]');
    if (!host) return;

    var section = document.createElement('section');
    section.className = 'section citation-section';
    section.innerHTML =
      '<div class="container narrow">' +
        '<span class="eyebrow">Referensi</span>' +
        '<h2>Daftar Pustaka</h2>' +
        '<div class="cite-style-switch">' +
          '<button type="button" class="cite-style-btn is-active" data-style="apa">APA</button>' +
          '<button type="button" class="cite-style-btn" data-style="mla">MLA</button>' +
          '<button type="button" class="cite-style-btn" data-style="chicago">Chicago</button>' +
          '<button type="button" class="cite-style-btn" data-style="ieee">IEEE</button>' +
        '</div>' +
        '<ol id="citation-list" class="citation-list"></ol>' +
      '</div>';
    host.parentNode.insertBefore(section, host.nextSibling);
    list = section.querySelector('#citation-list');
  }

  // ---------- 1a. Pustaka sumber (tulis tiap sumber SEKALI di sini) ----------
  // Tiap sumber punya id unik. type: 'book' | 'journal' | 'web'.
var referenceLibrary = [
  {
    id: 'adl2019',
    type: 'journal',
    authors: [
      { last: 'Adl', first: 'S. M.' },
      { last: 'Bass', first: 'D.' },
      { last: 'Lane', first: 'C. E.' },
      { last: 'Lukeš', first: 'J.' },
      { last: 'Schoch', first: 'C. L.' },
      { last: 'Smirnov', first: 'A.' },
      { last: 'Agatha', first: 'S.' },
      { last: 'Berney', first: 'C.' },
      { last: 'Brown', first: 'M. W.' },
      { last: 'Burki', first: 'F.' },
      { last: 'Cárdenas', first: 'P.' },
      { last: 'Čepička', first: 'I.' },
      { last: 'Chistyakova', first: 'L.' },
      { last: 'del Campo', first: 'J.' },
      { last: 'Dunthorn', first: 'M.' },
      { last: 'Edvardsen', first: 'B.' },
      { last: 'Eglit', first: 'Y.' },
      { last: 'Guillou', first: 'L.' },
      { last: 'Hampl', first: 'V.' },
      { last: 'Heiss', first: 'A. A.' },
      { last: 'Hoppenrath', first: 'M.' },
      { last: 'James', first: 'T. Y.' },
      { last: 'Karnkowska', first: 'A.' },
      { last: 'Karpov', first: 'S.' },
      { last: 'Kim', first: 'E.' },
      { last: 'Kolisko', first: 'M.' },
      { last: 'Kudryavtsev', first: 'A.' },
      { last: 'Lahr', first: 'D. J. G.' },
      { last: 'Lara', first: 'E.' },
      { last: 'Le Gall', first: 'L.' },
      { last: 'Lynn', first: 'D. H.' },
      { last: 'Mann', first: 'D. G.' },
      { last: 'Massana', first: 'R.' },
      { last: 'Mitchell', first: 'E. A. D.' },
      { last: 'Morrow', first: 'C.' },
      { last: 'Park', first: 'J. S.' },
      { last: 'Pawlowski', first: 'J. W.' },
      { last: 'Powell', first: 'M. J.' },
      { last: 'Richter', first: 'D. J.' },
      { last: 'Rueckert', first: 'S.' },
      { last: 'Shadwick', first: 'L.' },
      { last: 'Shimano', first: 'S.' },
      { last: 'Spiegel', first: 'F. W.' },
      { last: 'Torruella', first: 'G.' },
      { last: 'Youssef', first: 'N.' },
      { last: 'Zlatogursky', first: 'V.' },
      { last: 'Zhang', first: 'Q.' }
    ],
    year: 2019,
    title: 'Revisions to the classification, nomenclature, and diversity of eukaryotes',
    journal: 'Journal of Eukaryotic Microbiology',
    volume: '66',
    issue: '1',
    pages: '4–119',
    doi: '10.1111/jeu.12691'
  },

  {
    id: 'antinori2012',
    type: 'journal',
    authors: [
      { last: 'Antinori', first: 'S.' },
      { last: 'Galimberti', first: 'L.' },
      { last: 'Milazzo', first: 'L.' },
      { last: 'Corbellino', first: 'M.' }
    ],
    year: 2012,
    title: 'Biology of human malaria plasmodia including Plasmodium knowlesi',
    journal: 'Mediterranean Journal of Hematology and Infectious Diseases',
    volume: '4',
    issue: '1',
    pages: 'e2012013',
    doi: '10.4084/MJHID.2012.013'
  },

  {
    id: 'archibald2015',
    type: 'journal',
    authors: [
      { last: 'Archibald', first: 'J. M.' }
    ],
    year: 2015,
    title: 'Endosymbiosis and eukaryotic cell evolution',
    journal: 'Current Biology',
    volume: '25',
    issue: '19',
    pages: 'R911–R921',
    doi: '10.1016/j.cub.2015.07.055'
  },

  {
    id: 'burki2020',
    type: 'journal',
    authors: [
      { last: 'Burki', first: 'F.' },
      { last: 'Roger', first: 'A. J.' },
      { last: 'Brown', first: 'M. W.' },
      { last: 'Simpson', first: 'A. G. B.' }
    ],
    year: 2020,
    title: 'The new tree of eukaryotes',
    journal: 'Trends in Ecology & Evolution',
    volume: '35',
    issue: '1',
    pages: '43–55',
    doi: '10.1016/j.tree.2019.08.008'
  },

  {
    id: 'field1998',
    type: 'journal',
    authors: [
      { last: 'Field', first: 'C. B.' },
      { last: 'Behrenfeld', first: 'M. J.' },
      { last: 'Randerson', first: 'J. T.' },
      { last: 'Falkowski', first: 'P.' }
    ],
    year: 1998,
    title: 'Primary production of the biosphere: Integrating terrestrial and oceanic components',
    journal: 'Science',
    volume: '281',
    issue: '5374',
    pages: '237–240',
    doi: '10.1126/science.281.5374.237'
  },

  {
    id: 'urry2021',
    type: 'book',
    authors: [
      { last: 'Urry', first: 'L. A.' },
      { last: 'Cain', first: 'M. L.' },
      { last: 'Wasserman', first: 'S. A.' },
      { last: 'Minorsky', first: 'P. V.' },
      { last: 'Orr', first: 'R. B.' }, { last: 'Campbell', first: 'N. A.' }
    ],
    year: 2021,
    title: 'Campbell biology',
    edition: '12th',
    publisher: 'Pearson'
  },

  {
    id: 'davies2021',
    type: 'journal',
    authors: [
      { last: 'Davies', first: 'J. S.' },
      { last: 'Currie', first: 'M. J.' },
      { last: 'Wright', first: 'J. D.' },
      { last: 'Newton-Vesty', first: 'M. C.' },
      { last: 'North', first: 'R. A.' },
      { last: 'Mace', first: 'P. D.' },
      { last: 'Allison', first: 'J. R.' },
      { last: 'Dobson', first: 'R. C. J.' }
    ],
    year: 2021,
    title: 'Selective nutrient transport in bacteria: Multicomponent transporter systems reign supreme',
    journal: 'Frontiers in Molecular Biosciences',
    volume: '8',
    doi: '10.3389/fmolb.2021.699222'
  },

  {
    id: 'karasz2022',
    type: 'journal',
    authors: [
      { last: 'Karasz', first: 'D. C.' },
      { last: 'Weaver', first: 'A. I.' },
      { last: 'Buckley', first: 'D. H.' },
      { last: 'Wilhelm', first: 'R. C.' }
    ],
    year: 2022,
    title: 'Conditional filamentation as an adaptive trait of bacteria and its ecological significance in soils',
    journal: 'Environmental Microbiology',
    volume: '24',
    issue: '1',
    pages: '1–17',
    doi: '10.1111/1462-2920.15871'
  },

  {
    id: 'madigan2019',
    type: 'book',
    authors: [
      { last: 'Madigan', first: 'M. T.' },
      { last: 'Bender', first: 'K. S.' },
      { last: 'Buckley', first: 'D. H.' },
      { last: 'Sattley', first: 'W. M.' },
      { last: 'Stahl', first: 'D. A.' }
    ],
    year: 2019,
    title: 'Brock biology of microorganisms',
    edition: '15th',
    publisher: 'Pearson'
  },

  {
    id: 'raza2023',
    type: 'journal',
    authors: [
      { last: 'Raza', first: 'T.' },
      { last: 'Qadir', first: 'M. F.' },
      { last: 'Khan', first: 'K. S.' },
      { last: 'Eash', first: 'N. S.' },
      { last: 'Yousuf', first: 'M.' },
      { last: 'Chatterjee', first: 'S.' },
      { last: 'Manzoor', first: 'R.' },
      { last: 'Rehman', first: 'S. ur' },
      { last: 'Oetting', first: 'J. N.' }
    ],
    year: 2023,
    title: 'Unraveling the potential of microbes in decomposition of organic matter and release of carbon in the ecosystem',
    journal: 'Journal of Environmental Management',
    volume: '344',
    pages: '118529',
    doi: '10.1016/j.jenvman.2023.118529'
  },

  {
    id: 'sheikh2024',
    type: 'journal',
    authors: [
      { last: 'Sheikh', first: 'J.' },
      { last: 'Tian Swee', first: 'T.' },
      { last: 'Malik', first: 'S.' },
      { last: 'Saidin', first: 'S.' },
      { last: 'Suan Chua', first: 'L.' }
    ],
    year: 2024,
    title: 'Bacterial morphology and microscopic advancements: Navigating from basics to breakthroughs',
    journal: 'Microbiological & Immunological Communications',
    volume: '3',
    issue: '01',
    pages: '03–41',
    doi: '10.55627/mic.003.001.0567'
  },

  {
    id: 'cezanne2024',
    type: 'journal',
    authors: [
      { last: 'Cezanne', first: 'A.' },
      { last: 'Foo', first: 'S.' },
      { last: 'Kuo', first: 'Y.-W.' },
      { last: 'Baum', first: 'B.' }
    ],
    year: 2024,
    title: 'The archaeal cell cycle',
    journal: 'Annual Review of Cell and Developmental Biology',
    volume: '40',
    issue: '1',
    pages: '1–23',
    doi: '10.1146/annurev-cellbio-111822-120242'
  },

  {
    id: 'frohn2022',
    type: 'journal',
    authors: [
      { last: 'Frohn', first: 'B. P.' },
      { last: 'Härtel', first: 'T.' },
      { last: 'Cox', first: 'J.' },
      { last: 'Schwille', first: 'P.' }
    ],
    year: 2022,
    title: 'Tracing back variations in archaeal ESCRT-based cell division to protein domain architectures',
    journal: 'PLOS ONE',
    volume: '17',
    issue: '3',
    pages: 'e0266395',
    doi: '10.1371/journal.pone.0266395'
  },

  {
    id: 'garcia2022',
    type: 'journal',
    authors: [
      { last: 'Garcia', first: 'P. S.' },
      { last: 'Gribaldo', first: 'S.' },
      { last: 'Borrel', first: 'G.' }
    ],
    year: 2022,
    title: 'Diversity and evolution of methane-related pathways in archaea',
    journal: 'Annual Review of Microbiology',
    volume: '76',
    issue: '1',
    pages: '727–755',
    doi: '10.1146/annurev-micro-041020-024935'
  },

  {
    id: 'garritano2022',
    type: 'journal',
    authors: [
      { last: 'Garritano', first: 'A. N.' },
      { last: 'Song', first: 'W.' },
      { last: 'Thomas', first: 'T.' }
    ],
    year: 2022,
    title: 'Carbon fixation pathways across the bacterial and archaeal tree of life',
    journal: 'PNAS Nexus',
    volume: '1',
    issue: '5',
    doi: '10.1093/pnasnexus/pgac226'
  },

  {
    id: 'sivabalasarma2025',
    type: 'journal',
    authors: [
      { last: 'Sivabalasarma', first: 'S.' },
      { last: 'van Wolferen', first: 'M.' },
      { last: 'Albers', first: 'S.-V.' },
      { last: 'Charles-Orszag', first: 'A.' }
    ],
    year: 2025,
    title: 'Biogenesis, function and evolution of the archaeal S-layer',
    journal: 'Current Opinion in Cell Biology',
    volume: '95',
    pages: '102534',
    doi: '10.1016/j.ceb.2025.102534'
  },

  {
    id: 'strakova2025',
    type: 'journal',
    authors: [
      { last: 'Straková', first: 'D.' },
      { last: 'Sánchez-Porro', first: 'C.' },
      { last: 'de la Haba', first: 'R. R.' },
      { last: 'Ventosa', first: 'A.' }
    ],
    year: 2025,
    title: 'Strategies of environmental adaptation in the haloarchaeal genera Haloarcula and Natrinema',
    journal: 'Microorganisms',
    volume: '13',
    issue: '4',
    pages: '761',
    doi: '10.3390/microorganisms13040761'
  },

  {
    id: 'woese1977',
    type: 'journal',
    authors: [
      { last: 'Woese', first: 'C. R.' },
      { last: 'Fox', first: 'G. E.' }
    ],
    year: 1977,
    title: 'Phylogenetic structure of the prokaryotic domain: The primary kingdoms',
    journal: 'Proceedings of the National Academy of Sciences',
    volume: '74',
    issue: '11',
    pages: '5088–5090',
    doi: '10.1073/pnas.74.11.5088'
  },

  {
    id: 'woese1990',
    type: 'journal',
    authors: [
      { last: 'Woese', first: 'C. R.' },
      { last: 'Kandler', first: 'O.' },
      { last: 'Wheelis', first: 'M. L.' }
    ],
    year: 1990,
    title: 'Towards a natural system of organisms: Proposal for the domains Archaea, Bacteria, and Eucarya',
    journal: 'Proceedings of the National Academy of Sciences',
    volume: '87',
    issue: '12',
    pages: '4576–4579',
    doi: '10.1073/pnas.87.12.4576'
  },

  {
    id: 'parks2018',
    type: 'journal',
    authors: [
      { last: 'Parks', first: 'D. H.' },
      { last: 'Chuvochina', first: 'M.' },
      { last: 'Waite', first: 'D. W.' },
      { last: 'Rinke', first: 'C.' },
      { last: 'Skarshewski', first: 'A.' },
      { last: 'Chaumeil', first: 'P.-A.' },
      { last: 'Hugenholtz', first: 'P.' }
    ],
    year: 2018,
    title: 'A standardized bacterial taxonomy based on genome phylogeny substantially revises the tree of life',
    journal: 'Nature Biotechnology',
    volume: '36',
    issue: '10',
    pages: '996–1004',
    doi: '10.1038/nbt.4229'
  },

  {
    id: 'razin1998',
    type: 'journal',
    authors: [
      { last: 'Razin', first: 'S.' },
      { last: 'Yogev', first: 'D.' },
      { last: 'Naot', first: 'Y.' }
    ],
    year: 1998,
    title: 'Molecular biology and pathogenicity of mycoplasmas',
    journal: 'Microbiology and Molecular Biology Reviews',
    volume: '62',
    issue: '4',
    pages: '1094–1156',
    doi: '10.1128/mmbr.62.4.1094-1156.1998'
  },

  {
    id: 'zaremba2017',
    type: 'journal',
    authors: [
      { last: 'Zaremba-Niedzwiedzka', first: 'K.' },
      { last: 'Caceres', first: 'E. F.' },
      { last: 'Saw', first: 'J. H.' },
      { last: 'Bäckström', first: 'D.' },
      { last: 'Juzokaite', first: 'L.' },
      { last: 'Vancaester', first: 'E.' },
      { last: 'Seitz', first: 'K. W.' },
      { last: 'Anantharaman', first: 'K.' },
      { last: 'Starnawski', first: 'P.' },
      { last: 'Kjeldsen', first: 'K. U.' },
      { last: 'Stott', first: 'M. B.' },
      { last: 'Nunoura', first: 'T.' },
      { last: 'Banfield', first: 'J. F.' },
      { last: 'Schramm', first: 'A.' },
      { last: 'Baker', first: 'B. J.' },
      { last: 'Spang', first: 'A.' },
      { last: 'Ettema', first: 'T. J. G.' }
    ],
    year: 2017,
    title: 'Asgard archaea illuminate the origin of eukaryotic cellular complexity',
    journal: 'Nature',
    volume: '541',
    issue: '7637',
    pages: '353–358',
    doi: '10.1038/nature21031'
  },

  {
    id: 'coleine2022',
    type: 'journal',
    authors: [
      { last: 'Coleine', first: 'C.' },
      { last: 'Stajich', first: 'J. E.' },
      { last: 'Selbmann', first: 'L.' }
    ],
    year: 2022,
    title: 'Fungi are key players in extreme ecosystems',
    journal: 'Trends in Ecology & Evolution',
    volume: '37',
    issue: '6',
    pages: '517–528',
    doi: '10.1016/j.tree.2022.02.002'
  },

  {
    id: 'faturrahman2024',
    type: 'journal',
    authors: [
      { last: 'Faturrahman', first: 'M. A.' },
      { last: 'Asyrofi', first: 'H.' },
      { last: 'Sandra', first: 'K. M.' },
      { last: 'Wahyuni', first: 'D.' },
      { last: 'Ningsih', first: 'K.' },
      { last: 'Afandi', first: 'A.' }
    ],
    year: 2024,
    title: 'Basidiomycota mushroom diversity in West Kalimantan, Indonesia: A literature review and their potential as a senior high school biology learning resource',
    journal: 'Jurnal Biologi Tropis',
    volume: '24',
    issue: '1b',
    doi: '10.29303/jbt.v24i1b.8048'
  },

  {
    id: 'gidalishova2023',
    type: 'journal',
    authors: [
      { last: 'Gidalishova', first: 'Ch. G.' },
      { last: 'Usaeva', first: 'Ya. S.' },
      { last: 'Turlova', first: 'F. S.' }
    ],
    year: 2023,
    title: 'Biological features of fungi of the genus Mucor',
    journal: 'BIO Web of Conferences',
    volume: '63',
    pages: '06009',
    doi: '10.1051/bioconf/20236306009'
  },

  {
    id: 'he2022',
    type: 'journal',
    authors: [
      { last: 'He', first: 'M.-Q.' },
      { last: 'Zhao', first: 'R.-L.' },
      { last: 'Liu', first: 'D.-M.' },
      { last: 'Denchev', first: 'T. T.' },
      { last: 'Begerow', first: 'D.' },
      { last: 'Yurkov', first: 'A.' },
      { last: 'Kemler', first: 'M.' },
      { last: 'Millanes', first: 'A. M.' },
      { last: 'Wedin', first: 'M.' },
      { last: 'McTaggart', first: 'A. R.' },
      { last: 'Shivas', first: 'R. G.' },
      { last: 'Buyck', first: 'B.' },
      { last: 'Chen', first: 'J.' },
      { last: 'Vizzini', first: 'A.' },
      { last: 'Papp', first: 'V.' },
      { last: 'Zmitrovich', first: 'I. V.' },
      { last: 'Davoodian', first: 'N.' },
      { last: 'Hyde', first: 'K. D.' }
    ],
    year: 2022,
    title: 'Species diversity of Basidiomycota',
    journal: 'Fungal Diversity',
    volume: '114',
    issue: '1',
    pages: '281–325',
    doi: '10.1007/s13225-021-00497-3'
  },

  {
    id: 'martin2025',
    type: 'journal',
    authors: [
      { last: 'Martin', first: 'F.' },
      { last: 'Tan', first: 'H.' }
    ],
    year: 2025,
    title: 'Saprotrophy-to-symbiosis continuum in fungi',
    journal: 'Current Biology',
    volume: '35',
    issue: '11',
    pages: 'R469–R475',
    doi: '10.1016/j.cub.2025.01.032'
  },

  {
    id: 'naranjo2019',
    type: 'journal',
    authors: [
      { last: 'Naranjo-Ortiz', first: 'M. A.' },
      { last: 'Gabaldón', first: 'T.' }
    ],
    year: 2019,
    title: 'Fungal evolution: Diversity, taxonomy and phylogeny of the Fungi',
    journal: 'Biological Reviews',
    volume: '94',
    issue: '6',
    pages: '2101–2137',
    doi: '10.1111/brv.12550'
  },

  {
    id: 'rahmatullah2023',
    type: 'web',
    authors: [
      { last: 'Rahmatullah', first: 'N.' },
      { last: 'Fahma', first: 'F. D.' },
      { last: 'Mulyani', first: 'L.' },
      { last: 'Fitri', first: 'R.' }
    ],
    year: 2023,
    title: 'Identifikasi jamur Basidiomycota kawasan Waduk Universitas Andalas',
    site: 'Prosiding SEMNAS BIO 2023',
    url: 'https://semnas.biologi.fmipa.unp.ac.id/index.php/prosiding/article/download/666/628/2440'
  },

  {
    id: 'spatafora2016',
    type: 'journal',
    authors: [
      { last: 'Spatafora', first: 'J. W.' },
      { last: 'Chang', first: 'Y.' },
      { last: 'Benny', first: 'G. L.' },
      { last: 'Lazarus', first: 'K.' },
      { last: 'Smith', first: 'M. E.' },
      { last: 'Berbee', first: 'M. L.' },
      { last: 'Bonito', first: 'G.' },
      { last: 'Corradi', first: 'N.' },
      { last: 'Grigoriev', first: 'I.' },
      { last: 'Gryganskyi', first: 'A.' },
      { last: 'James', first: 'T. Y.' },
      { last: 'O\'Donnell', first: 'K.' },
      { last: 'Roberson', first: 'R. W.' },
      { last: 'Taylor', first: 'T. N.' },
      { last: 'Uehling', first: 'J.' },
      { last: 'Vilgalys', first: 'R.' },
      { last: 'White', first: 'M. M.' },
      { last: 'Stajich', first: 'J. E.' }
    ],
    year: 2016,
    title: 'A phylum-level phylogenetic classification of zygomycete fungi based on genome-scale data',
    journal: 'Mycologia',
    volume: '108',
    issue: '5',
    pages: '1028–1046',
    doi: '10.3852/16-042'
  },

  {
    id: 'thome2024',
    type: 'journal',
    authors: [
      { last: 'Thomé', first: 'P. C.' },
      { last: 'Wolinska', first: 'J.' },
      { last: 'van den Wyngaert', first: 'S.' },
      { last: 'Reñé', first: 'A.' },
      { last: 'Ilicic', first: 'D.' },
      { last: 'Agha', first: 'R.' },
      { last: 'Grossart', first: 'H.-P.' },
      { last: 'Garcés', first: 'E.' },
      { last: 'Monaghan', first: 'M. T.' },
      { last: 'Strassert', first: 'J. F. H.' }
    ],
    year: 2024,
    title: 'Phylogenomics including new sequence data of phytoplankton-infecting chytrids reveals multiple independent lifestyle transitions across the phylum',
    journal: 'Molecular Phylogenetics and Evolution',
    volume: '197',
    pages: '108103',
    doi: '10.1016/j.ympev.2024.108103'
  },

  {
    id: 'vandenwyngaert2022',
    type: 'journal',
    authors: [
      { last: 'van den Wyngaert', first: 'S.' },
      { last: 'Ganzert', first: 'L.' },
      { last: 'Seto', first: 'K.' },
      { last: 'Rojas-Jimenez', first: 'K.' },
      { last: 'Agha', first: 'R.' },
      { last: 'Berger', first: 'S. A.' },
      { last: 'Woodhouse', first: 'J.' },
      { last: 'Padisak', first: 'J.' },
      { last: 'Wurzbacher', first: 'C.' },
      { last: 'Kagami', first: 'M.' },
      { last: 'Grossart', first: 'H.-P.' }
    ],
    year: 2022,
    title: 'Seasonality of parasitic and saprotrophic zoosporic fungi: Linking sequence data to ecological traits',
    journal: 'The ISME Journal',
    volume: '16',
    issue: '9',
    pages: '2242–2254',
    doi: '10.1038/s41396-022-01267-y'
  },

  {
    id: 'webster2007',
    type: 'book',
    authors: [
      { last: 'Webster', first: 'J.' },
      { last: 'Weber', first: 'R. W. S.' }
    ],
    year: 2007,
    title: 'Introduction to fungi',
    edition: '3rd',
    city: 'Cambridge',
    publisher: 'Cambridge University Press'
  },

  {
    id: 'borah2022',
    type: 'journal',
    authors: [
      { last: 'Borah', first: 'P.' },
      { last: 'Barukial', first: 'J.' }
    ],
    year: 2022,
    title: 'Taxonomic studies of some epiphytic ferns of Upper Brahmaputra Valley, Assam',
    journal: 'International Journal for Research in Applied Science and Engineering Technology',
    volume: '10',
    issue: '2',
    pages: '1391–1394',
    doi: '10.22214/ijraset.2022.40496'
  },

  {
    id: 'chen2022',
    type: 'journal',
    authors: [
      { last: 'Chen', first: 'D.' },
      { last: 'Cai', first: 'M.' },
      { last: 'Li', first: 'D.' },
      { last: 'Yang', first: 'S.' },
      { last: 'Wu', first: 'J.' }
    ],
    year: 2022,
    title: 'Response of soil organic carbon stock to bryophyte removal is regulated by forest types in Southwest China',
    journal: 'Forests',
    volume: '13',
    issue: '12',
    pages: '2125',
    doi: '10.3390/f13122125'
  },

  {
    id: 'clark2018',
    type: 'book',
    authors: [
      { last: 'Clark', first: 'M. A.' },
      { last: 'Choi', first: 'J. H.' },
      { last: 'Douglas', first: 'M.' }
    ],
    year: 2018,
    title: 'Biology 2e',
    edition: '2nd',
    publisher: 'OpenStax College, Rice University'
  },

  {
    id: 'cong2021',
    type: 'journal',
    authors: [
      { last: 'Cong', first: 'C.' },
      { last: 'Liu', first: 'T.' },
      { last: 'Zhang', first: 'X.' }
    ],
    year: 2021,
    title: 'Influence of drought stress and rehydration on moisture and photosynthetic physiological changes in three epilithic moss species in areas of karst rocky desertification',
    journal: 'Journal of Chemistry',
    volume: '2021',
    pages: '1–12',
    doi: '10.1155/2021/4944012'
  },

  {
    id: 'crandall2007',
    type: 'book',
    authors: [
      { last: 'Crandall-Stotler', first: 'B.' },
      { last: 'Bartholomew-Began', first: 'S. E.' }
    ],
    year: 2007,
    title: 'Morphology of mosses (phylum Bryophyta). In Flora of North America north of Mexico (Vol. 27, pp. 3–13)',
    publisher: 'Oxford University Press'
  },

  {
    id: 'farrar2022',
    type: 'journal',
    authors: [
      { last: 'Farrar', first: 'D. R.' },
      { last: 'Johnson', first: 'C. L.' }
    ],
    year: 2022,
    title: 'Methodologies for soil extraction and conservation analysis of ferns and lycophytes with belowground gametophytes',
    journal: 'Applications in Plant Sciences',
    volume: '10',
    issue: '2',
    doi: '10.1002/aps3.11469'
  },

  {
    id: 'firoozi2025',
    type: 'journal',
    authors: [
      { last: 'Firoozi', first: 'S.' },
      { last: 'Arzac', first: 'M. I.' },
      { last: 'García-Plazaola', first: 'J. I.' },
      { last: 'Quintanilla', first: 'L. G.' },
      { last: 'Fernández Marín', first: 'B.' }
    ],
    year: 2025,
    title: 'Survival below zero: Overlooked aspects of freezing-tolerance in photosynthetic fern tissues',
    journal: 'Plant Ecophysiology',
    volume: '8',
    doi: '10.53941/plantecophys.2025.100008'
  },

  {
    id: 'guillen2024',
    type: 'journal',
    authors: [
      { last: 'Guillen-Otero', first: 'T.' },
      { last: 'Lee', first: 'S.-J.' },
      { last: 'Hertel', first: 'D.' },
      { last: 'Kessler', first: 'M.' }
    ],
    year: 2024,
    title: 'Facultative mycorrhization in a fern (Struthiopteris spicant L. Weiss) is bound to light intensity',
    journal: 'BMC Plant Biology',
    volume: '24',
    issue: '1',
    pages: '103',
    doi: '10.1186/s12870-024-04782-6'
  },

  {
    id: 'jacobsen2021',
    type: 'journal',
    authors: [
      { last: 'Jacobsen', first: 'A. L.' }
    ],
    year: 2021,
    title: 'Diversity in conduit and pit structure among extant gymnosperm taxa',
    journal: 'American Journal of Botany',
    volume: '108',
    issue: '4',
    pages: '559–570',
    doi: '10.1002/ajb2.1641'
  },

  {
    id: 'jassey2022',
    type: 'journal',
    authors: [
      { last: 'Jassey', first: 'V. E. J.' },
      { last: 'Hamard', first: 'S.' },
      { last: 'Lepère', first: 'C.' },
      { last: 'Céréghino', first: 'R.' },
      { last: 'Corbara', first: 'B.' },
      { last: 'Küttim', first: 'M.' },
      { last: 'Leflaive', first: 'J.' },
      { last: 'Leroy', first: 'C.' },
      { last: 'Carrias', first: 'J.-F.' }
    ],
    year: 2022,
    title: 'Photosynthetic microorganisms effectively contribute to bryophyte CO2 fixation in boreal and tropical regions',
    journal: 'ISME Communications',
    volume: '2',
    issue: '1',
    doi: '10.1038/s43705-022-00149-w'
  },

  {
    id: 'jhariya2026',
    type: 'web',
    authors: [
      { last: 'Jhariya', first: 'M. K.' },
      { last: 'Banerjee', first: 'A.' },
      { last: 'Bargali', first: 'S. S.' },
      { last: 'Devi', first: 'A.' },
      { last: 'Mankur', first: 'M. K.' },
      { last: 'Gupta', first: 'J. T.' }
    ],
    year: 2026,
    title: 'Unfolding the ecological tapestry of angiosperms: A review',
    site: 'Flowering Plant Species - An Ecological Insight. IntechOpen',
    url: 'https://doi.org/10.5772/intechopen.1016239'
  },

  {
    id: 'kumari2024',
    type: 'journal',
    authors: [
      { last: 'Kumari', first: 'P.' },
      { last: 'Bhatia', first: 'M.' },
      { last: 'Giri', first: 'P.' },
      { last: 'Uniyal', first: 'P. L.' }
    ],
    year: 2024,
    title: 'Mycorrhizal association and its relation with pteridophytes',
    journal: 'Frontiers in Microbiology',
    volume: '15',
    doi: '10.3389/fmicb.2024.1406891'
  },

  {
    id: 'linde2021',
    type: 'journal',
    authors: [
      { last: 'Linde', first: 'A.-M.' },
      { last: 'Eklund', first: 'D. M.' },
      { last: 'Cronberg', first: 'N.' },
      { last: 'Bowman', first: 'J. L.' },
      { last: 'Lagercrantz', first: 'U.' }
    ],
    year: 2021,
    title: 'Rates and patterns of molecular evolution in bryophyte genomes, with focus on complex thalloid liverworts, Marchantiopsida',
    journal: 'Molecular Phylogenetics and Evolution',
    volume: '165',
    pages: '107295',
    doi: '10.1016/j.ympev.2021.107295'
  },

  {
    id: 'liu2022',
    type: 'journal',
    authors: [
      { last: 'Liu', first: 'G.-Q.' },
      { last: 'Lian', first: 'L.' },
      { last: 'Wang', first: 'W.' }
    ],
    year: 2022,
    title: 'The molecular phylogeny of land plants: Progress and future prospects',
    journal: 'Diversity',
    volume: '14',
    issue: '10',
    pages: '782',
    doi: '10.3390/d14100782'
  },

  {
    id: 'nigris2021',
    type: 'journal',
    authors: [
      { last: 'Nigris', first: 'S.' },
      { last: 'D\'Apice', first: 'G.' },
      { last: 'Moschin', first: 'S.' },
      { last: 'Ciarle', first: 'R.' },
      { last: 'Baldan', first: 'B.' }
    ],
    year: 2021,
    title: 'Fleshy structures associated with ovule protection and seed dispersal in gymnosperms: A systematic and evolutionary overview',
    journal: 'Critical Reviews in Plant Sciences',
    volume: '40',
    issue: '4',
    pages: '285–302',
    doi: '10.1080/07352689.2021.1938397'
  },

  {
    id: 'perera2022',
    type: 'journal',
    authors: [
      { last: 'Perera-Castro', first: 'A. V.' },
      { last: 'González-Rodríguez', first: 'Á. M.' },
      { last: 'Fernández-Marín', first: 'B.' }
    ],
    year: 2022,
    title: 'When time is not of the essence: Constraints to the carbon balance of bryophytes',
    journal: 'Journal of Experimental Botany',
    volume: '73',
    issue: '13',
    pages: '4562–4575',
    doi: '10.1093/jxb/erac104'
  },

  {
    id: 'riosmelendez2021',
    type: 'journal',
    authors: [
      { last: 'Ríos-Meléndez', first: 'S.' },
      { last: 'Valadez-Hernández', first: 'E.' },
      { last: 'Delgadillo', first: 'C.' },
      { last: 'Luna-Guevara', first: 'M. L.' },
      { last: 'Martínez-Núñez', first: 'M. A.' },
      { last: 'Sánchez-Pérez', first: 'M.' },
      { last: 'Martínez-y-Pérez', first: 'J. L.' },
      { last: 'Arroyo-Becerra', first: 'A.' },
      { last: 'Cárdenas', first: 'L.' },
      { last: 'Bibbins-Martínez', first: 'M.' },
      { last: 'Maldonado-Mendoza', first: 'I. E.' },
      { last: 'Villalobos-López', first: 'M. A.' }
    ],
    year: 2021,
    title: 'Pseudocrossidium replicatum (Taylor) R.H. Zander is a fully desiccation-tolerant moss that expresses an inducible molecular mechanism in response to severe abiotic stress',
    journal: 'Plant Molecular Biology',
    volume: '107',
    issue: '4–5',
    pages: '387–404',
    doi: '10.1007/s11103-021-01167-3'
  },

  {
    id: 'stanton2021',
    type: 'journal',
    authors: [
      { last: 'Stanton', first: 'D. E.' },
      { last: 'Coe', first: 'K. K.' }
    ],
    year: 2021,
    title: '500 million years of charted territory: Functional ecological traits in bryophytes',
    journal: 'Bryophyte Diversity and Evolution',
    volume: '43',
    issue: '1',
    doi: '10.11646/bde.43.1.17'
  },

  {
    id: 'trueba2022',
    type: 'journal',
    authors: [
      { last: 'Trueba', first: 'S.' },
      { last: 'Théroux-Rancourt', first: 'G.' },
      { last: 'Earles', first: 'J. M.' },
      { last: 'Buckley', first: 'T. N.' },
      { last: 'Love', first: 'D.' },
      { last: 'Johnson', first: 'D. M.' },
      { last: 'Brodersen', first: 'C.' }
    ],
    year: 2022,
    title: 'The three-dimensional construction of leaves is coordinated with water use efficiency in conifers',
    journal: 'New Phytologist',
    volume: '233',
    issue: '2',
    pages: '851–861',
    doi: '10.1111/nph.17772'
  },

  {
    id: 'valderrama2024',
    type: 'journal',
    authors: [
      { last: 'Valderrama-Martín', first: 'J. M.' },
      { last: 'Ortigosa', first: 'F.' },
      { last: 'Cantón', first: 'F. R.' },
      { last: 'Ávila', first: 'C.' },
      { last: 'Cañas', first: 'R. A.' },
      { last: 'Cánovas', first: 'F. M.' }
    ],
    year: 2024,
    title: 'Emerging insights into nitrogen assimilation in gymnosperms',
    journal: 'Trees',
    volume: '38',
    issue: '2',
    pages: '273–286',
    doi: '10.1007/s00468-023-02403-7'
  },

  {
    id: 'yang2024',
    type: 'journal',
    authors: [
      { last: 'Yang', first: 'Y.' },
      { last: 'Yang', first: 'Z.' },
      { last: 'Ferguson', first: 'D. K.' }
    ],
    year: 2024,
    title: 'The systematics and evolution of gymnosperms with an emphasis on a few problematic taxa',
    journal: 'Plants',
    volume: '13',
    issue: '16',
    pages: '2196',
    doi: '10.3390/plants13162196'
  },

  {
    id: 'diezvives2022',
    type: 'journal',
    authors: [
      { last: 'Díez-Vives', first: 'C.' },
      { last: 'Koutsouveli', first: 'V.' },
      { last: 'Conejero', first: 'M.' },
      { last: 'Riesgo', first: 'A.' }
    ],
    year: 2022,
    title: 'Global patterns in symbiont selection and transmission strategies in sponges',
    journal: 'Frontiers in Ecology and Evolution',
    volume: '10',
    doi: '10.3389/fevo.2022.1015592'
  },

  {
    id: 'rossi2026',
    type: 'journal',
    authors: [
      { last: 'Rossi', first: 'M. E.' },
      { last: 'Keating', first: 'J. N.' },
      { last: 'Kenny', first: 'N. J.' },
      { last: 'Giacomelli', first: 'M.' },
      { last: 'Alvarez-Carretero', first: 'S.' },
      { last: 'Schuster', first: 'A.' },
      { last: 'Cardenas', first: 'P.' },
      { last: 'Taboada', first: 'S.' },
      { last: 'Koutsouveli', first: 'V.' },
      { last: 'Donoghue', first: 'P.' },
      { last: 'Riesgo', first: 'A.' },
      { last: 'Pisani', first: 'D.' }
    ],
    year: 2026,
    title: 'Independent origins of spicules reconcile paleontological and molecular evidence of sponge evolutionary history',
    journal: 'Science Advances',
    volume: '12',
    issue: '2',
    doi: '10.1126/sciadv.adx1754'
  },

  {
    id: 'pawlik2025',
    type: 'journal',
    authors: [
      { last: 'Pawlik', first: 'J. R.' }
    ],
    year: 2025,
    title: 'Ecosystem engineers on tropical reefs in transition: Giant barrel sponges in the Anthropocene',
    journal: 'Journal of Experimental Biology',
    volume: '228',
    issue: '10',
    doi: '10.1242/jeb.250082'
  },

  {
    id: 'nadir2023',
    type: 'journal',
    authors: [
      { last: 'Nadir', first: 'E.' },
      { last: 'Lotan', first: 'T.' },
      { last: 'Benayahu', first: 'Y.' }
    ],
    year: 2023,
    title: 'Xenia umbellata (Octocorallia): A novel model organism for studying octocoral regeneration ability',
    journal: 'Frontiers in Marine Science',
    volume: '10',
    doi: '10.3389/fmars.2023.1021679'
  },

  {
    id: 'li2024',
    type: 'journal',
    authors: [
      { last: 'Li', first: 'Y.' },
      { last: 'Peng', first: 'S.' },
      { last: 'Liu', first: 'Y.' },
      { last: 'Sun', first: 'K.' },
      { last: 'Wu', first: 'L.' },
      { last: 'Yu', first: 'Z.' },
      { last: 'He', first: 'K.' },
      { last: 'Ma', first: 'Y.' },
      { last: 'Wang', first: 'F.' },
      { last: 'Xu', first: 'P.' },
      { last: 'Li', first: 'J.' },
      { last: 'Sun', first: 'T.' },
      { last: 'Zheng', first: 'H.' },
      { last: 'Ye', first: 'L.' },
      { last: 'Wang', first: 'L.' },
      { last: 'Hao', first: 'W.' },
      { last: 'Zhao', first: 'J.' },
      { last: 'Lin', first: 'Q.' },
      { last: 'Chen', first: 'K.' },
      { last: 'Dong', first: 'Z.' }
    ],
    year: 2024,
    title: 'Molecular and cellular basis of life cycle transition provides new insights into ecological adaptation in jellyfish',
    journal: 'The Innovation Geoscience',
    volume: '2',
    issue: '2',
    pages: '100063',
    doi: '10.59717/j.xinn-geo.2024.100063'
  },

  {
    id: 'martinezgonzalez2022',
    type: 'journal',
    authors: [
      { last: 'Martínez-González', first: 'J. de J.' },
      { last: 'Guevara-Flores', first: 'A.' },
      { last: 'del Arenal Mena', first: 'I. P.' }
    ],
    year: 2022,
    title: 'Evolutionary adaptations of parasitic flatworms to different oxygen tensions',
    journal: 'Antioxidants',
    volume: '11',
    issue: '6',
    pages: '1102',
    doi: '10.3390/antiox11061102'
  },

  {
    id: 'caira2021',
    type: 'journal',
    authors: [
      { last: 'Caira', first: 'J. N.' },
      { last: 'Jensen', first: 'K.' }
    ],
    year: 2021,
    title: 'Electron microscopy reveals novel external specialized organs housing bacteria in eagle ray tapeworms',
    journal: 'PLOS ONE',
    volume: '16',
    issue: '1',
    pages: 'e0244586',
    doi: '10.1371/journal.pone.0244586'
  },

{
  id: 'martinduran2012',
  type: 'journal',
  authors: [
    { last: 'Martín-Durán', first: 'J. M.' },
    { last: 'Egger', first: 'B.' }
  ],
  year: 2012,
  title: 'Developmental diversity in free-living flatworms',
  journal: 'EvoDevo',
  volume: '3',
  pages: '7',
  doi: '10.1186/2041-9139-3-7'
},

  {
    id: 'wang2024',
    type: 'journal',
    authors: [
      { last: 'Wang', first: 'Y.' },
      { last: 'Huang', first: 'J.' },
      { last: 'Zhang', first: 'Y.' },
      { last: 'Wang', first: 'A.' }
    ],
    year: 2024,
    title: 'Molecular phylogeny and ethology of the family Plagiostomidae (Platyhelminthes, Prolecithophora), with integrative description of a new species, Plagiostomum robusta A. Wang, sp. nov.',
    journal: 'Frontiers in Marine Science',
    volume: '11',
    doi: '10.3389/fmars.2024.1332011'
  },

  {
    id: 'zhang2024',
    type: 'journal',
    authors: [
      { last: 'Zhang', first: 'C.' },
      { last: 'Wright', first: 'I. J.' },
      { last: 'Nielsen', first: 'U. N.' },
      { last: 'Geisen', first: 'S.' },
      { last: 'Liu', first: 'M.' }
    ],
    year: 2024,
    title: 'Linking nematodes and ecosystem function: A trait-based framework',
    journal: 'Trends in Ecology & Evolution',
    volume: '39',
    issue: '7',
    pages: '644–653',
    doi: '10.1016/j.tree.2024.02.002'
  },

  {
    id: 'zhao2022',
    type: 'journal',
    authors: [
      { last: 'Zhao', first: 'J.' },
      { last: 'Zhang', first: 'J.' },
      { last: 'Zhu', first: 'X.' },
      { last: 'Lu', first: 'J.' },
      { last: 'Jin', first: 'B.' },
      { last: 'Chen', first: 'H.' }
    ],
    year: 2022,
    title: 'The life cycle of the bacterial-feeding nematode Diplolaimella stagnosa and its population growth in response to temperature and food availability',
    journal: 'Frontiers in Ecology and Evolution',
    volume: '10',
    pages: '953608',
    doi: '10.3389/fevo.2022.953608'
  },

  {
    id: 'glasby2021',
    type: 'journal',
    authors: [
      { last: 'Glasby', first: 'C. J.' },
      { last: 'Erséus', first: 'C.' },
      { last: 'Martin', first: 'P.' }
    ],
    year: 2021,
    title: 'Annelids in extreme aquatic environments: Diversity, adaptations and evolution',
    journal: 'Diversity',
    volume: '13',
    issue: '2',
    pages: '98',
    doi: '10.3390/d13020098'
  },

  {
    id: 'purschke2023',
    type: 'web',
    authors: [
      { last: 'Purschke', first: 'G.' },
      { last: 'Helm', first: 'C.' }
    ],
    year: 2023,
    title: 'Development and structure of the anterior nervous system and sense organs in the holopelagic annelid Tomopteris spp. (Phyllodocida, Errantia)',
    site: 'Organisms Diversity & Evolution',
    url: 'https://doi.org/10.1007/s13127-023-00603-0'
  },

  {
    id: 'zanol2021',
    type: 'journal',
    authors: [
      { last: 'Zanol', first: 'J.' },
      { last: 'Carrera-Parra', first: 'L. F.' },
      { last: 'Steiner', first: 'T. M.' },
      { last: 'Amaral', first: 'A. C. Z.' },
      { last: 'Wiklund', first: 'H.' },
      { last: 'Ravara', first: 'A.' },
      { last: 'Budaeva', first: 'N.' }
    ],
    year: 2021,
    title: 'The current state of Eunicida (Annelida) systematics and biodiversity',
    journal: 'Diversity',
    volume: '13',
    issue: '2',
    pages: '74',
    doi: '10.3390/d13020074'
  },

  {
    id: 'koshelev2021',
    type: 'journal',
    authors: [
      { last: 'Koshelev', first: 'O. I.' },
      { last: 'Gensytskyi', first: 'M. V.' },
      { last: 'Koshelev', first: 'V. O.' },
      { last: 'Yorkina', first: 'N. V.' },
      { last: 'Kunakh', first: 'O. M.' }
    ],
    year: 2021,
    title: 'Anthropogenic load is a leading factor in the morphological variability of Chondrula tridens (Gastropoda, Enidae) in the northwestern Azov Sea region',
    journal: 'Biosystems Diversity',
    volume: '29',
    issue: '2',
    pages: '102–110',
    doi: '10.15421/012114'
  },

  {
    id: 'ravalo2024',
    type: 'web',
    authors: [
      { last: 'Ravalo', first: 'L. G.' }
    ],
    year: 2024,
    title: 'Native and invasive smooth shelled blue mussels (Mytilus spp.) in New Zealand: Evolutionary, biosecurity and aquaculture implications [Tesis]',
    site: 'Open Access Te Herenga Waka–Victoria University of Wellington',
    url: 'https://doi.org/10.26686/wgtn.25989046'
  },

  {
    id: 'xavier2022',
    type: 'journal',
    authors: [
      { last: 'Xavier', first: 'J. C.' },
      { last: 'Golikov', first: 'A. V.' },
      { last: 'Queirós', first: 'J. P.' },
      { last: 'Perales-Raya', first: 'C.' },
      { last: 'Rosas-Luis', first: 'R.' },
      { last: 'Abreu', first: 'J.' },
      { last: 'Bello', first: 'G.' },
      { last: 'Bustamante', first: 'P.' },
      { last: 'Capaz', first: 'J. C.' },
      { last: 'Dimkovikj', first: 'V. H.' },
      { last: 'González', first: 'A. F.' },
      { last: 'Guímaro', first: 'H.' },
      { last: 'Guerra-Marrero', first: 'A.' },
      { last: 'Gomes-Pereira', first: 'J. N.' },
      { last: 'Kubodera', first: 'T.' },
      { last: 'Laptikhovsky', first: 'V.' },
      { last: 'Lefkaditou', first: 'E.' },
      { last: 'Lishchenko', first: 'F.' },
      { last: 'Luna', first: 'A.' },
      { last: 'Liu', first: 'B.' },
      { last: 'Pierce', first: 'G. J.' },
      { last: 'Pissarra', first: 'V.' },
      { last: 'Reveillac', first: 'E.' },
      { last: 'Romanov', first: 'E. V.' },
      { last: 'Rosa', first: 'R.' },
      { last: 'Roscian', first: 'M.' },
      { last: 'Rose-Mann', first: 'L.' },
      { last: 'Rouget', first: 'I.' },
      { last: 'Sánchez', first: 'P.' },
      { last: 'Sánchez-Márquez', first: 'A.' },
      { last: 'Seixas', first: 'S.' },
      { last: 'Souquet', first: 'L.' },
      { last: 'Varela', first: 'J.' },
      { last: 'Vidal', first: 'E. A. G.' },
      { last: 'Cherel', first: 'Y.' }
    ],
    year: 2022,
    title: 'The significance of cephalopod beaks as a research tool: An update',
    journal: 'Frontiers in Physiology',
    volume: '13',
    pages: '1038064',
    doi: '10.3389/fphys.2022.1038064'
  },

  {
    id: 'benoit2023',
    type: 'journal',
    authors: [
      { last: 'Benoit', first: 'J. B.' },
      { last: 'McCluney', first: 'K. E.' },
      { last: 'DeGennaro', first: 'M. J.' },
      { last: 'Dow', first: 'J. A. T.' }
    ],
    year: 2023,
    title: 'Dehydration dynamics in terrestrial arthropods: From water sensing to trophic interactions',
    journal: 'Annual Review of Entomology',
    volume: '68',
    issue: '1',
    pages: '129–149',
    doi: '10.1146/annurev-ento-120120-091609'
  },

  {
    id: 'chandrakumara2023',
    type: 'journal',
    authors: [
      { last: 'Chandrakumara', first: 'K.' },
      { last: 'Sau', first: 'A. K.' },
      { last: 'Ankur' },
      { last: 'Rajesh' },
      { last: 'Tanwar', first: 'A. K.' },
      { last: 'Hadimani', first: 'B. N.' }
    ],
    year: 2023,
    title: 'Variations in the biological and ecological attributes of insects due to climate change: A review',
    journal: 'Indian Journal of Entomology',
    pages: '1–10',
    doi: '10.55446/IJE.2023.899'
  },

  {
    id: 'marin2023',
    type: 'journal',
    authors: [
      { last: 'Marin', first: 'I. N.' },
      { last: 'Tiunov', first: 'A. V.' }
    ],
    year: 2023,
    title: 'Terrestrial crustaceans (Arthropoda, Crustacea): Taxonomic diversity, terrestrial adaptations, and ecological functions',
    journal: 'ZooKeys',
    volume: '1169',
    pages: '95–162',
    doi: '10.3897/zookeys.1169.97812'
  },

  {
    id: 'perillo2024',
    type: 'journal',
    authors: [
      { last: 'Perillo', first: 'M.' },
      { last: 'Sepe', first: 'R. M.' },
      { last: 'Paganos', first: 'P.' },
      { last: 'Toscano', first: 'A.' },
      { last: 'Annunziata', first: 'R.' }
    ],
    year: 2024,
    title: 'Sea cucumbers: An emerging system in evo-devo',
    journal: 'EvoDevo',
    volume: '15',
    issue: '1',
    pages: '3',
    doi: '10.1186/s13227-023-00220-0'
  },

  {
    id: 'purcell2016',
    type: 'journal',
    authors: [
      { last: 'Purcell', first: 'S. W.' },
      { last: 'Conand', first: 'C.' },
      { last: 'Uthicke', first: 'S.' },
      { last: 'Byrne', first: 'M.' }
    ],
    year: 2016,
    title: 'Ecological roles of exploited sea cucumbers',
    journal: 'Oceanography and Marine Biology: An Annual Review',
    volume: '54',
    pages: '367–386', 
    doi: '10.1201/9781315368597-8'
  },

  {
    id: 'delsuc2006',
    type: 'journal',
    authors: [
      { last: 'Delsuc', first: 'F.' },
      { last: 'Brinkmann', first: 'H.' },
      { last: 'Chourrout', first: 'D.' },
      { last: 'Philippe', first: 'H.' }
    ],
    year: 2006,
    title: 'Tunicates and not cephalochordates are the closest living relatives of vertebrates',
    journal: 'Nature',
    volume: '439',
    issue: '7079',
    pages: '965–968',
    doi: '10.1038/nature04336'
  },

  {
    id: 'karaiskou2015',
    type: 'journal',
    authors: [
      { last: 'Karaiskou', first: 'A.' },
      { last: 'Swalla', first: 'B. J.' },
      { last: 'Sasakura', first: 'Y.' },
      { last: 'Chambon', first: 'J.-P.' }
    ],
    year: 2015,
    title: 'Metamorphosis in solitary ascidians',
    journal: 'Genesis',
    volume: '53',
    issue: '1',
    pages: '34–47',
    doi: '10.1002/dvg.22824'
  },
  {
    id: 'mcgrath2017',
    type: 'journal',
    authors: [{ last: 'McGrath', first: 'E. C.' }, { last: 'Smith', first: 'D. J.' }, { last: 'Jompa', first: 'J.' }, { last: 'Bell', first: 'J. J.' }],
    year: 2017,
    title: 'Adaptive mechanisms and physiological effects of suspended and settled sediment on barrel sponges',
    journal: 'Journal of Experimental Marine Biology and Ecology', volume: '496', pages: '74–83',
    doi: '10.1016/j.jembe.2017.07.013'
  },
  {
    id: 'deline2020',
    type: 'journal',
    authors: [{ last: 'Deline', first: 'B.' }, { last: 'Thompson', first: 'J. R.' }, { last: 'Smith', first: 'N. S.' }, { last: 'Zamora', first: 'S.' }, { last: 'Rahman', first: 'I. A.' }, { last: 'Sheffield', first: 'S. L.' }, { last: 'Ausich', first: 'W. I.' }, { last: 'Kammer', first: 'T. W.' }, { last: 'Sumrall', first: 'C. D.' }],
    year: 2020,
    title: 'Evolution and development at the origin of a phylum',
    journal: 'Current Biology', volume: '30', issue: '9', pages: '1672–1679',
    doi: '10.1016/j.cub.2020.02.054'
  },
  {
    id: 'formery2023',
    type: 'journal',
    authors: [{ last: 'Formery', first: 'L.' }, { last: 'Peluso', first: 'P.' }, { last: 'Kohnle', first: 'I.' }, { last: 'Malnick', first: 'J.' }, { last: 'Thompson', first: 'J. R.' }, { last: 'Pitel', first: 'M.' }, { last: 'Uhlinger', first: 'K. R.' }, { last: 'Rokhsar', first: 'D. S.' }, { last: 'Rank', first: 'D. R.' }, { last: 'Lowe', first: 'C. J.' }],
    year: 2023,
    title: 'Molecular evidence of anteroposterior patterning in adult echinoderms',
    journal: 'Nature', volume: '623', issue: '7987', pages: '555–561',
    doi: '10.1038/s41586-023-06669-2'
  },
  {
    id: 'wilkie2021',
    type: 'chapter',
    authors: [{ last: 'Wilkie', first: 'I. C.' }, { last: 'Sugni', first: 'M.' }, { last: 'Gupta', first: 'H. S.' }, { last: 'Candia Carnevali', first: 'M. D.' }, { last: 'Elphick', first: 'M. R.' }],
    year: 2021,
    title: 'The mutable collagenous tissue of echinoderms: From biology to biomedical applications',
    bookTitle: 'Soft matter for biomedical applications',
    editors: [{ last: 'Azevedo', first: 'H. S.' }, { last: 'Mano', first: 'J. F.' }, { last: 'Borges', first: 'J.' }],
    publisher: 'Royal Society of Chemistry', pages: '1–33',
    doi: '10.1039/9781839161124-00001'
  },
  {
    id: 'garciaarraras2010',
    type: 'journal',
    authors: [{ last: 'García-Arrarás', first: 'J. E.' }, { last: 'Dolmatov', first: 'I. Y.' }],
    year: 2010,
    title: 'Echinoderms: Potential model systems for studies on muscle regeneration',
    journal: 'Current Pharmaceutical Design', volume: '16', issue: '8', pages: '942–955',
    doi: '10.2174/138161210790883426'
  },
  {
    id: 'candiacarnevali2006',
    type: 'journal',
    authors: [{ last: 'Candia Carnevali', first: 'M. D.' }],
    year: 2006,
    title: 'Regeneration in echinoderms: Repair, regrowth, cloning',
    journal: 'Invertebrate Survival Journal', volume: '3', pages: '64–76'
  },
  {
    id: 'novackgottshall2022',
    type: 'journal',
    authors: [{ last: 'Novack-Gottshall', first: 'P. M.' }, { last: 'Sultan', first: 'A.' }, { last: 'Smith', first: 'N. S.' }, { last: 'Purcell', first: 'J.' }, { last: 'Hanson', first: 'K. E.' }, { last: 'Lively', first: 'R.' }, { last: 'Ranjha', first: 'I.' }, { last: 'Collins', first: 'C.' }, { last: 'Parker', first: 'R.' }, { last: 'Sumrall', first: 'C. D.' }, { last: 'Deline', first: 'B.' }],
    year: 2022,
    title: 'Morphological volatility precedes ecological innovation in early echinoderms',
    journal: 'Nature Ecology & Evolution', volume: '6', issue: '3', pages: '263–272',
    doi: '10.1038/s41559-021-01656-0'
  },
  {
    id: 'vanni2022',
    type: 'chapter',
    authors: [{ last: 'Vanni', first: 'V.' }, { last: 'Ballarin', first: 'L.' }, { last: 'Gasparini', first: 'F.' }, { last: 'Peronato', first: 'A.' }, { last: 'Manni', first: 'L.' }],
    year: 2022,
    title: 'Studying regeneration in ascidians: An historical overview',
    bookTitle: 'Whole-body regeneration: Methods and protocols',
    editors: [{ last: 'Blanchoud', first: 'S.' }, { last: 'Galliot', first: 'B.' }],
    publisher: 'Humana', city: 'New York', pages: '27–48',
    doi: '10.1007/978-1-0716-2172-1_2'
  },
  {
    id: 'jeffery2015',
    type: 'journal',
    authors: [{ last: 'Jeffery', first: 'W. R.' }],
    year: 2015,
    title: 'Closing the wounds: One hundred and twenty-five years of regenerative biology in the ascidian Ciona intestinalis',
    journal: 'Genesis', volume: '53', pages: '48–65',
    doi: '10.1002/dvg.22799'
  },
  {
    id: 'gordon2021',
    type: 'journal',
    authors: [{ last: 'Gordon', first: 'T.' }, { last: 'Upadhyay', first: 'A. K.' }, { last: 'Manni', first: 'L.' }, { last: 'Huchon', first: 'D.' }, { last: 'Shenkar', first: 'N.' }],
    year: 2021,
    title: 'And then there were three…: Extreme regeneration ability of the solitary chordate Polycarpa mytiligera',
    journal: 'Frontiers in Cell and Developmental Biology', volume: '9', pages: '652466',
    doi: '10.3389/fcell.2021.652466'
  },
  {
    id: 'voskoboynik2007',
    type: 'journal',
    authors: [{ last: 'Voskoboynik', first: 'A.' }, { last: 'Simon-Blecher', first: 'N.' }, { last: 'Soen', first: 'Y.' }, { last: 'Rinkevich', first: 'B.' }, { last: 'De Tomaso', first: 'A. W.' }, { last: 'Ishizuka', first: 'K. J.' }, { last: 'Weissman', first: 'I. L.' }],
    year: 2007,
    title: 'Striving for normality: Whole body regeneration through a series of abnormal generations',
    journal: 'The FASEB Journal', volume: '21', pages: '1335–1344',
    doi: '10.1096/fj.06-7337com'
  },
  {
    id: 'alie2020',
    type: 'journal',
    authors: [{ last: 'Alié', first: 'A.' }, { last: 'Hiebert', first: 'L. S.' }, { last: 'Scelzo', first: 'M.' }, { last: 'Tiozzo', first: 'S.' }],
    year: 2020,
    title: 'The eventful history of nonembryonic development in tunicates',
    journal: 'Journal of Experimental Zoology Part B: Molecular and Developmental Evolution', volume: '336', issue: '3', pages: '250–266',
    doi: '10.1002/jez.b.22940'
  },
  {
    id: 'udagawa2022',
    type: 'journal',
    authors: [{ last: 'Udagawa', first: 'S.' }, { last: 'Ikeda', first: 'T.' }, { last: 'Oguchi', first: 'K.' }, { last: 'Kohtsuka', first: 'H.' }, { last: 'Miura', first: 'T.' }],
    year: 2022,
    title: 'Hydrocoel morphogenesis forming the pentaradial body plan in a sea cucumber, Apostichopus japonicus',
    journal: 'Scientific Reports', volume: '12', issue: '1', pages: '6025',
    doi: '10.1038/s41598-022-09691-y'
  },
  {
    id: 'sasaki2013',
    type: 'journal',
    authors: [
      { last: 'Sasaki', first: 'G.' },
      { last: 'Ishiwata', first: 'K.' },
      { last: 'Machida', first: 'R.' },
      { last: 'Miyata', first: 'T.' },
      { last: 'Su', first: 'Z.-H.' }
    ],
    year: 2013,
    title: 'Molecular phylogenetic analyses support the monophyly of Hexapoda and suggest the paraphyly of Entognatha',
    journal: 'BMC Evolutionary Biology',
    volume: '13',
    pages: '236',
    doi: '10.1186/1471-2148-13-236'
  },
  {
    id: 'pisani2015',
    type: 'journal',
    authors: [
      { last: 'Pisani', first: 'D.' },
      { last: 'Pett', first: 'W.' },
      { last: 'Dohrmann', first: 'M.' },
      { last: 'Feuda', first: 'R.' },
      { last: 'Rota-Stabelli', first: 'O.' },
      { last: 'Philippe', first: 'H.' },
      { last: 'Lartillot', first: 'N.' },
      { last: 'Wörheide', first: 'G.' }
    ],
    year: 2015,
    title: 'Genomic data do not support comb jellies as the sister group to all other animals',
    journal: 'Proceedings of the National Academy of Sciences',
    volume: '112',
    issue: '50',
    pages: '15402–15407',
    doi: '10.1073/pnas.1518127112'
  },
  {
    id: 'king2017',
    type: 'journal',
    authors: [
      { last: 'King', first: 'N.' },
      { last: 'Rokas', first: 'A.' }
    ],
    year: 2017,
    title: 'Embracing uncertainty in reconstructing early animal evolution',
    journal: 'Current Biology',
    volume: '27',
    issue: '19',
    pages: 'R1081–R1097',
    doi: '10.1016/j.cub.2017.08.056'
  }
];

  // ---------- 1b. Daftar pustaka per halaman (TEMPLATE) ----------
  // Kunci = id halaman (sama dengan data-division di HTML, atau data-page
  // pada <ol id="citation-list">). Isi = id sumber dari pustaka di atas.
  // Daftar otomatis diurutkan abjad. Halaman tanpa isi tampil kosong.
  var pageReferences = {
    eubacteria: ['davies2021', 'karasz2022', 'madigan2019', 'parks2018', 'raza2023', 'razin1998', 'sheikh2024'],
    archaea: ['cezanne2024', 'frohn2022', 'garcia2022', 'garritano2022', 'madigan2019', 'sivabalasarma2025', 'strakova2025', 'woese1977', 'woese1990', 'zaremba2017'],
    protozoa: ['adl2019', 'antinori2012', 'burki2020', 'urry2021'],
    algae: ['adl2019', 'archibald2015', 'burki2020', 'field1998', 'urry2021'],
    'slime-molds': ['adl2019', 'urry2021'],
    chytridiomycota: ['naranjo2019', 'thome2024', 'vandenwyngaert2022', 'webster2007'],
    zygomycota: ['gidalishova2023', 'naranjo2019', 'spatafora2016', 'webster2007'],
    ascomycota: ['coleine2022', 'martin2025', 'naranjo2019', 'webster2007'],
    basidiomycota: ['faturrahman2024', 'he2022', 'rahmatullah2023', 'webster2007'],
    bryophyta: ['chen2022', 'clark2018', 'cong2021', 'crandall2007', 'jassey2022', 'linde2021', 'liu2022', 'perera2022', 'riosmelendez2021', 'stanton2021', 'urry2021'],
    pteridophyta: ['borah2022', 'farrar2022', 'firoozi2025', 'guillen2024', 'kumari2024', 'liu2022', 'perera2022', 'urry2021'],
    gymnosperms: ['jacobsen2021', 'nigris2021', 'trueba2022', 'urry2021', 'valderrama2024', 'yang2024'],
    angiosperms: ['jhariya2026', 'urry2021'],
    porifera: ['diezvives2022', 'pawlik2025', 'rossi2026', 'urry2021', 'mcgrath2017', 'pisani2015', 'king2017'],
    cnidaria: ['li2024', 'nadir2023', 'urry2021'],
    platyhelminthes: ['caira2021', 'martinezgonzalez2022', 'martinduran2012', 'urry2021', 'wang2024'],
    nematoda: ['martinezgonzalez2022', 'urry2021', 'zhang2024', 'zhao2022'],
    annelida: ['glasby2021', 'purschke2023', 'urry2021', 'zanol2021'],
    mollusca: ['koshelev2021', 'ravalo2024', 'urry2021', 'xavier2022'],
    arthropoda: ['benoit2023', 'chandrakumara2023', 'marin2023', 'urry2021', 'sasaki2013'],
    echinodermata: ['perillo2024', 'purcell2016', 'urry2021', 'deline2020', 'formery2023', 'wilkie2021', 'garciaarraras2010', 'candiacarnevali2006', 'novackgottshall2022', 'udagawa2022'],
    chordata: ['delsuc2006', 'karaiskou2015', 'urry2021', 'vanni2022', 'jeffery2015', 'gordon2021', 'voskoboynik2007', 'alie2020']
  };


  var pageId = list.getAttribute('data-page') ||
    (document.querySelector('[data-division]') || { dataset: {} }).dataset.division ||
    '';
  var pageIds = pageReferences[pageId] || [];
  var references = referenceLibrary.filter(function (ref) {
    return pageIds.indexOf(ref.id) !== -1;
  }).sort(function (a, b) {
    return a.authors[0].last.localeCompare(b.authors[0].last);
  });

  // ---------- 2. Helper nama penulis per gaya sitasi ----------
  function initials(first) {
    if (/^([A-Z]\.(-[A-Z]\.)?\s?)+$/.test(first.trim())) return first.trim();
    return first
      .split(' ')
      .filter(Boolean)
      .map(function (n) { return n.charAt(0).toUpperCase() + '.'; })
      .join(' ');
  }

  function authorsAPA(a) {
    var parts = a.map(function (x) {
      return x.first ? x.last + ', ' + initials(x.first) : x.last;
    });
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return parts[0] + ', & ' + parts[1];
    if (parts.length > 20) {
      return parts.slice(0, 19).join(', ') + ', . . . ' + parts[parts.length - 1];
    }
    return parts.slice(0, -1).join(', ') + ', & ' + parts[parts.length - 1];
  }

  function authorsMLA(a) {
    if (!a.length) return '';
    var first = a[0];
    var out = first.first ? first.last + ', ' + first.first : first.last;
    if (a.length === 2) {
      var second = a[1];
      out += ', and ' + (second.first ? second.first + ' ' + second.last : second.last);
    } else if (a.length > 2) {
      out += ', et al.';
    }
    return out;
  }

  function authorsChicago(a) {
    var parts = a.map(function (x, i) {
      if (i === 0) return x.first ? x.last + ', ' + x.first : x.last;
      return x.first ? x.first + ' ' + x.last : x.last;
    });
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return parts[0] + ', and ' + parts[1];
    if (parts.length > 10) return parts.slice(0, 7).join(', ') + ', et al';
    return parts.slice(0, -1).join(', ') + ', and ' + parts[parts.length - 1];
  }

  function authorsIEEE(a) {
    var parts = a.map(function (x) {
      return x.first ? initials(x.first) + ' ' + x.last : x.last;
    });
    if (parts.length <= 1) return parts.join('');
    if (parts.length > 6) return parts[0] + ' et al';
    return parts.slice(0, -1).join(', ') + ', and ' + parts[parts.length - 1];
  }

  // Tautan DOI (dipertahankan di semua gaya) dan bagian opsional
  function doiLink(ref) {
    if (!ref.doi) return '';
    var url = 'https://doi.org/' + ref.doi;
    return ' <a href="' + url + '" target="_blank" rel="noopener">' + url + '</a>';
  }

  function withPages(ref, prefix) {
    return ref.pages ? prefix + ref.pages : '';
  }

  function editorsList(eds, conj) {
    var names = (eds || []).map(function (x) { return x.first ? x.first + ' ' + x.last : x.last; });
    if (names.length <= 1) return names.join('');
    if (names.length === 2) return names[0] + ' ' + conj + ' ' + names[1];
    return names.slice(0, -1).join(', ') + ', ' + conj + ' ' + names[names.length - 1];
  }

  // ---------- 3. Formatter per gaya sitasi ----------
  var formatters = {
    apa: function (ref) {
      var a = authorsAPA(ref.authors);
      if (ref.type === 'chapter') {
        return a + ' (' + ref.year + '). ' + ref.title + '. In ' + editorsList(ref.editors, '&') + (ref.editors && ref.editors.length > 1 ? ' (Eds.)' : ' (Ed.)') +
          ', <em>' + ref.bookTitle + '</em>' + withPages(ref, ' (pp. ').replace(/(.+)/, '$1)') + '. ' + ref.publisher + '.' + doiLink(ref);
      }
      if (ref.type === 'book') {
        return a + ' (' + ref.year + '). <em>' + ref.title + '</em>' +
          (ref.edition ? ' (' + ref.edition + ' ed.)' : '') + '. ' + ref.publisher + '.';
      }
      if (ref.type === 'journal') {
        return a + ' (' + ref.year + '). ' + ref.title + '. <em>' + ref.journal + (ref.volume ? ', ' + ref.volume : '') + '</em>' + (ref.issue ? '(' + ref.issue + ')' : '') + withPages(ref, ', ') + '.' + doiLink(ref);
      }
      return a + ' (' + ref.year + '). ' + ref.title + '. <em>' + ref.site + '</em>. ' + ref.url;
    },
    mla: function (ref) {
      var a = authorsMLA(ref.authors);
      if (ref.type === 'chapter') {
        return a + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.bookTitle + '</em>, edited by ' + editorsList(ref.editors, 'and') + ', ' +
          ref.publisher + ', ' + ref.year + withPages(ref, ', pp. ') + '.' + doiLink(ref);
      }
      if (ref.type === 'book') {
        return a + '. <em>' + ref.title + '</em>. ' + (ref.edition ? ref.edition + ' ed., ' : '') +
          ref.publisher + ', ' + ref.year + '.';
      }
      if (ref.type === 'journal') {
        return a + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.journal + '</em>' + (ref.volume ? ', vol. ' + ref.volume : '') +
          (ref.issue ? ', no. ' + ref.issue : '') + ', ' + ref.year + withPages(ref, ', pp. ') + '.' + doiLink(ref);
      }
      return a + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.site + '</em>, ' + ref.year + ', ' + ref.url + '.';
    },
    chicago: function (ref) {
      var a = authorsChicago(ref.authors);
      if (ref.type === 'chapter') {
        return a + '. ' + ref.year + '. &ldquo;' + ref.title + '.&rdquo; In <em>' + ref.bookTitle + '</em>, edited by ' + editorsList(ref.editors, 'and') +
          withPages(ref, ', ') + '. ' + (ref.city ? ref.city + ': ' : '') + ref.publisher + '.' + doiLink(ref);
      }
      if (ref.type === 'book') {
        return a + '. ' + ref.year + '. <em>' + ref.title + '</em>' +
          (ref.edition ? ', ' + ref.edition + ' ed' : '') + '. ' + (ref.city ? ref.city + ': ' : '') + ref.publisher + '.';
      }
      if (ref.type === 'journal') {
        return a + '. ' + ref.year + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.journal + '</em>' + (ref.volume ? ' ' + ref.volume : '') +
          (ref.issue ? ' (' + ref.issue + ')' : '') + withPages(ref, ': ') + '.' + doiLink(ref);
      }
      return a + '. ' + ref.year + '. &ldquo;' + ref.title + '.&rdquo; ' + ref.site + '. ' + ref.url + '.';
    },
    ieee: function (ref) {
      var a = authorsIEEE(ref.authors);
      if (ref.type === 'chapter') {
        return a + ', &ldquo;' + ref.title + ',&rdquo; in <em>' + ref.bookTitle + '</em>, ' + editorsList(ref.editors, 'and') + ', ' + (ref.editors && ref.editors.length > 1 ? 'Eds. ' : 'Ed. ') +
          (ref.city ? ref.city + ': ' : '') + ref.publisher + ', ' + ref.year + withPages(ref, ', pp. ') + '.' + doiLink(ref);
      }
      if (ref.type === 'book') {
        return a + ', <em>' + ref.title + '</em>' + (ref.edition ? ', ' + ref.edition + ' ed' : '') +
          '. ' + (ref.city ? ref.city + ': ' : '') + ref.publisher + ', ' + ref.year + '.';
      }
      if (ref.type === 'journal') {
        return a + ', &ldquo;' + ref.title + ',&rdquo; <em>' + ref.journal + '</em>' + (ref.volume ? ', vol. ' + ref.volume : '') +
          (ref.issue ? ', no. ' + ref.issue : '') + withPages(ref, ', pp. ') + ', ' + ref.year + '.' + doiLink(ref);
      }
      return a + ', &ldquo;' + ref.title + ',&rdquo; ' + ref.site + ', ' + ref.year + '. [Online]. Available: ' + ref.url;
    }
  };

  var currentStyle = 'apa';

  // ---------- 4. Salin ke clipboard (dengan fallback untuk file://) ----------
  function copyText(str) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(str);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = str;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  // ---------- 5. Render daftar ----------
  function render() {
    list.innerHTML = '';
    references.forEach(function (ref) {
      var li = document.createElement('li');
      li.id = 'ref-' + ref.id;

      var text = document.createElement('span');
      text.className = 'citation-text';
      text.innerHTML = formatters[currentStyle](ref);
      li.appendChild(text);

      var copyBtn = document.createElement('button');
      copyBtn.type = 'button';
      copyBtn.className = 'citation-copy';
      copyBtn.textContent = 'Salin kutipan';
      copyBtn.addEventListener('click', function () {
        copyText(text.textContent).then(function () {
          copyBtn.textContent = 'Tersalin';
          copyBtn.classList.add('is-copied');
          setTimeout(function () {
            copyBtn.textContent = 'Salin kutipan';
            copyBtn.classList.remove('is-copied');
          }, 1500);
        });
      });
      li.appendChild(copyBtn);

      list.appendChild(li);
    });
  }

  // ---------- 6. Switcher gaya sitasi ----------
  var buttons = document.querySelectorAll('.cite-style-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentStyle = btn.getAttribute('data-style');
      render();
    });
  });

  // ---------- 7. Kutipan di teks -> tautan ke daftar pustaka ----------
  // Contoh "(Madigan dkk., 2019; Urry dkk., 2020)" dan "Burki dkk. (2020)"
  // otomatis jadi tautan ke butir yang sama di Daftar Pustaka halaman ini.
  function norm(x) {
    return String(x).toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
  }

  var citeMap = {};
  // Penulis pertama diutamakan; penulis lain dipakai untuk kutipan naratif
  // seperti "Webster dan Weber (2007)".
  references.forEach(function (ref) {
    ref.authors.forEach(function (au, i) {
      var key = norm(au.last) + ref.year;
      if (i === 0 || !citeMap[key]) citeMap[key] = ref.id;
    });
  });

  function lookup(authorText, year) {
    var first = authorText.split(/ dkk\.| &| dan | et al/)[0];
    return citeMap[norm(first) + year] || null;
  }

  var CITE_RE = new RegExp(
    '(\\p{Lu}[\\p{L}\'\\-]+(?: (?:dkk\\.|(?:&|dan) \\p{Lu}[\\p{L}\'\\-]+))?) \\((\\d{4}[a-z]?)\\)' +
    '|\\(([^()]*?\\d{4}[a-z]?)\\)', 'gu');

  function makeLink(text, id) {
    var a = document.createElement('a');
    a.className = 'cite-link';
    a.href = '#ref-' + id;
    a.title = 'Lihat di Daftar Pustaka';
    a.textContent = text;
    return a;
  }

  function linkifyNode(node) {
    var text = node.nodeValue;
    CITE_RE.lastIndex = 0;
    var frag = document.createDocumentFragment();
    var last = 0, changed = false, m;
    while ((m = CITE_RE.exec(text)) !== null) {
      var piece = null;
      if (m[1]) {
        var id = lookup(m[1], m[2]);
        if (id) piece = makeLink(m[0], id);
      } else {
        var inner = m[3], ok = false, wrap = document.createDocumentFragment();
        wrap.appendChild(document.createTextNode('('));
        inner.split(';').forEach(function (part, i) {
          if (i > 0) wrap.appendChild(document.createTextNode(';'));
          var pm = part.match(/^(\s*)(.+?),\s*(\d{4}[a-z]?)(\s*)$/);
          var pid = pm ? lookup(pm[2], pm[3]) : null;
          if (pid) {
            ok = true;
            wrap.appendChild(document.createTextNode(pm[1]));
            wrap.appendChild(makeLink(pm[2] + ', ' + pm[3], pid));
            wrap.appendChild(document.createTextNode(pm[4]));
          } else {
            wrap.appendChild(document.createTextNode(part));
          }
        });
        wrap.appendChild(document.createTextNode(')'));
        if (ok) piece = wrap;
      }
      if (piece) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        frag.appendChild(piece);
        last = m.index + m[0].length;
        changed = true;
      }
    }
    if (!changed) return;
    frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  function linkifyCitations() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!/\d{4}/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (p.closest('.citation-section, #citation-list, a, script, style, textarea, input, .cite-link')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(linkifyNode);
  }

  // Gaya tautan + sorotan butir yang dituju
  var style = document.createElement('style');
  style.textContent =
    '.cite-link{color:inherit;text-decoration:underline dotted;text-underline-offset:3px;cursor:pointer}' +
    '.cite-link:hover{text-decoration-style:solid}' +
    '.citation-list li{scroll-margin-top:120px}' +
    '.citation-list li:target{background:rgba(110,200,150,.18);outline:2px solid rgba(110,200,150,.55);outline-offset:4px;border-radius:4px}';
  document.head.appendChild(style);

  // Konten materi dirender oleh main.js, jadi pantau perubahan DOM.
  var linkTimer = null;
  function scheduleLink() {
    clearTimeout(linkTimer);
    linkTimer = setTimeout(linkifyCitations, 80);
  }
  new MutationObserver(scheduleLink).observe(document.body, { childList: true, subtree: true });
  scheduleLink();

  render();
}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();