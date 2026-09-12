document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('citation-list');
  if (!list) return;

  // ---------- 1. Data referensi (GANTI dengan data asli) ----------
var references = [
  {
    type: 'book',
    authors: [
      { last: 'Campbell', first: 'Neil A.' },
      { last: 'Reece', first: 'Jane B.' },
      { last: 'Urry', first: 'Lisa A.' },
      { last: 'Cain', first: 'Michael L.' },
      { last: 'Wasserman', first: 'Steven A.' },
      { last: 'Minorsky', first: 'Peter V.' },
      { last: 'Jackson', first: 'Robert B.' }
    ],
    year: 2012,
    title: 'Biologi',
    edition: '8',
    volume: '2',
    translator: 'D. T. Wulandari',
    city: 'Jakarta',
    publisher: 'Penerbit Erlangga'
  },

  {
    type: 'book',
    authors: [
      { last: 'Eig', first: 'Jonathan' }
    ],
    year: 2023,
    title: 'King: A Life',
    city: 'New York',
    publisher: 'Farrar, Straus and Giroux'
  },

  {
    type: 'book',
    authors: [
      { last: 'Evert', first: 'Ray F.' },
      { last: 'Eichhorn', first: 'Susan E.' }
    ],
    year: 2013,
    title: 'Raven Biology of Plants',
    edition: '8',
    city: 'New York',
    publisher: 'W. H. Freeman and Company Publishers'
  },

  {
    type: 'book',
    authors: [
      { last: 'Hickman', first: 'Cleveland P., Jr.' },
      { last: 'Roberts', first: 'Larry S.' },
      { last: 'Keen', first: 'Susan L.' },
      { last: 'Larson', first: 'Allan' },
      { last: "I'Anson", first: 'Helen' },
      { last: 'Eisenhour', first: 'David J.' }
    ],
    year: 2008,
    title: 'Integrated Principles of Zoology',
    edition: '14',
    city: 'Boston',
    publisher: 'McGraw-Hill Higher Education'
  },

  {
    type: 'book',
    authors: [
      { last: 'Webster', first: 'John' },
      { last: 'Weber', first: 'Roland W. S.' }
    ],
    year: 2007,
    title: 'Introduction to Fungi',
    edition: '3',
    city: 'Cambridge',
    publisher: 'Cambridge University Press'
  },

  {
    type: 'journal',
    authors: [
      { last: 'Pohlschroder', first: 'Mechthild' },
      { last: 'Schulze', first: 'Sarah' },
      { last: 'Pfeiffer', first: 'Friedrich' },
      { last: 'Hong', first: 'Yong' }
    ],
    year: 2025,
    title: 'Haloferax volcanii: a versatile model for studying archaeal biology',
    journal: 'Journal of Bacteriology',
    volume: '207',
    issue: '6',
    pages: 'e0006225',
    doi: '10.1128/jb.00062-25'
  }
];
  // ---------- 2. Helper nama penulis per gaya sitasi ----------
  function initials(first) {
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
    return parts.slice(0, -1).join(', ') + ', and ' + parts[parts.length - 1];
  }

  function authorsIEEE(a) {
    var parts = a.map(function (x) {
      return x.first ? initials(x.first) + ' ' + x.last : x.last;
    });
    if (parts.length <= 1) return parts.join('');
    return parts.slice(0, -1).join(', ') + ', and ' + parts[parts.length - 1];
  }

  // ---------- 3. Formatter per gaya sitasi ----------
  var formatters = {
    apa: function (ref) {
      var a = authorsAPA(ref.authors);
      if (ref.type === 'book') {
        return a + ' (' + ref.year + '). <em>' + ref.title + '</em>' +
          (ref.edition ? ' (' + ref.edition + ' ed.)' : '') + '. ' + ref.publisher + '.';
      }
      if (ref.type === 'journal') {
        return a + ' (' + ref.year + '). ' + ref.title + '. <em>' + ref.journal + '</em>, ' +
          ref.volume + '(' + ref.issue + '), ' + ref.pages + '.';
      }
      return a + ' (' + ref.year + '). ' + ref.title + '. <em>' + ref.site + '</em>. ' + ref.url;
    },
    mla: function (ref) {
      var a = authorsMLA(ref.authors);
      if (ref.type === 'book') {
        return a + '. <em>' + ref.title + '</em>. ' + (ref.edition ? ref.edition + ' ed., ' : '') +
          ref.publisher + ', ' + ref.year + '.';
      }
      if (ref.type === 'journal') {
        return a + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.journal + '</em>, vol. ' + ref.volume +
          ', no. ' + ref.issue + ', ' + ref.year + ', pp. ' + ref.pages + '.';
      }
      return a + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.site + '</em>, ' + ref.year + ', ' + ref.url + '.';
    },
    chicago: function (ref) {
      var a = authorsChicago(ref.authors);
      if (ref.type === 'book') {
        return a + '. ' + ref.year + '. <em>' + ref.title + '</em>' +
          (ref.edition ? ', ' + ref.edition + ' ed' : '') + '. ' + ref.city + ': ' + ref.publisher + '.';
      }
      if (ref.type === 'journal') {
        return a + '. ' + ref.year + '. &ldquo;' + ref.title + '.&rdquo; <em>' + ref.journal + '</em> ' +
          ref.volume + ' (' + ref.issue + '): ' + ref.pages + '.';
      }
      return a + '. ' + ref.year + '. &ldquo;' + ref.title + '.&rdquo; ' + ref.site + '. ' + ref.url + '.';
    },
    ieee: function (ref) {
      var a = authorsIEEE(ref.authors);
      if (ref.type === 'book') {
        return a + ', <em>' + ref.title + '</em>' + (ref.edition ? ', ' + ref.edition + ' ed' : '') +
          '. ' + ref.city + ': ' + ref.publisher + ', ' + ref.year + '.';
      }
      if (ref.type === 'journal') {
        return a + ', &ldquo;' + ref.title + ',&rdquo; <em>' + ref.journal + '</em>, vol. ' + ref.volume +
          ', no. ' + ref.issue + ', pp. ' + ref.pages + ', ' + ref.year + '.';
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

  render();
});