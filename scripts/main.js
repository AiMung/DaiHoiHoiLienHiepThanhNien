document.addEventListener('DOMContentLoaded', () => {
  // Populate work units datalist
  const workUnits = [
    "THCS&THPT Tây Sơn (THCS)", "THCS&THPT Tây Sơn (THPT)",
    "Trường TH Nam Thành", "Trường THCS Phan Chu Trinh", "Trường TH Trưng Vương",
    "Trường TH Đa Lợi", "Trường TH Mê Linh", "Trường THCS Quang Trung",
    "Trường THCS Nguyễn Du", "Trường TH Cửu Long", "Trường TH Đoàn Kết",
    "Trường TH Lê Quý Đôn", "Trường TH Đoàn Thị Điểm", "Trường TH Hùng Vương",
    "Trường TH An Dương Vương",
    "THPT Chuyên Thăng Long", "THPT Trần Phú", "THPT Bùi Thị Xuân", "TT Giaó Dục Thường Xuyên Đà Lạt",
    "Đoàn Thanh niên Công an phường", "Chi đoàn Quân sự", "Chi đoàn Paster", "Chi đoàn Trung tâm Y Tế",
    "Chi đoàn Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", "Chi đoàn Ngân hàng Co-op bank (Hợp tác CN Lâm Đồng)",
    "Chi đoàn Công ty cổ phần Dịch vụ Đô thị Đà Lạt", "Chi đoàn cơ sở Y tế khu vực Đà Lạt",
    "Chi đoàn Công ty cổ phần Sài Gòn - Đà Lạt", "Chi đoàn giáo viên Mầm Non 2", "Chi đoàn giáo viên Mầm Non 4",
    "Chi đoàn giáo viên Mầm Non 10", "Chi đoàn giáo viên Mầm Non Anh Đào",
    "Chi đoàn Thanh niên Tổ dân phố Đồi Dinh", "Chi đoàn Thanh niên Tổ dân phố Nguyễn Văn Trỗi.",
    "Chi đoàn Thanh niên Tổ dân phố Phan Bội Châu.", "Chi đoàn Thanh niên Tổ dân phố Đoàn Kết.",
    "Chi đoàn Thanh niên Tổ dân phố Hòa Bình.", "Chi đoàn Thanh niên Tổ dân phố Nam Kỳ Khởi Nghĩa.",
    "Chi đoàn Thanh niên Tổ dân phố Ánh Sáng.", "Chi đoàn Thanh niên Tổ dân phố Đa Hòa.",
    "Chi đoàn Thanh niên Tổ dân phố Mimosa.", "Chi đoàn Thanh niên Tổ dân phố Hàm Nghi.",
    "Chi đoàn Thanh niên Tổ dân phố Trưng Vương.", "Chi đoàn Thanh niên Tổ dân phố Bùi Thị Xuân 1.",
    "Chi đoàn Thanh niên Tổ dân phố Lý Tự Trọng.", "Chi đoàn Thanh niên Tổ dân phố Võ Thị Sáu.",
    "Chi đoàn Thanh niên Tổ dân phố Nguyễn Thị Nghĩa.", "Chi đoàn Thanh niên Tổ dân phố Bùi Thị Xuân 2.",
    "Chi đoàn Thanh niên Tổ dân phố Tô Ngọc Vân.", "Chi đoàn Thanh niên Tổ dân phố Phan Đình Phùng 1.",
    "Chi đoàn Thanh niên Tổ dân phố Phan Đình Phùng 2.", "Chi đoàn Thanh niên Tổ dân phố Nguyễn Công Trứ.",
    "Chi đoàn Thanh niên Tổ dân phố An Dương Vương.", "Chi đoàn Thanh niên Tổ dân phố Mỹ Lộc.",
    "Chi đoàn Thanh niên Tổ dân phố Cổ Loa.", "Chi đoàn Thanh niên Tổ dân phố Nguyễn Lương Bằng.",
    "Chi đoàn Thanh niên Tổ dân phố Nguyễn Du.", "Chi đoàn Thanh niên Tổ dân phố Phạm Ngũ Lão.",
    "Chi đoàn Thanh niên Tổ dân phố Lê Đại Hành.", "Chi đoàn Thanh niên Tổ dân phố Trần Phú.",
    "Chi đoàn Thanh niên Tổ dân phố Suối Cát.", "Chi đoàn Thanh niên Tổ dân phố Xuân An.",
    "Chi đoàn Thanh niên Tổ dân phố Nhà Chung.", "Chi đoàn Thanh niên Tổ dân phố Hà Huy Tập 1.",
    "Chi đoàn Thanh niên Tổ dân phố Tân Bình.", "Chi đoàn Thanh niên Tổ dân phố Hà Huy Tập 2.",
    "Chi đoàn Thanh niên Tổ dân phố Lương Thế Vinh.", "Chi đoàn Thanh niên Tổ dân phố Ba Tháng Tư.",
    "Chi đoàn Thanh niên Tổ dân phố Đặng Thái Thân.", "Chi đoàn Thanh niên Tổ dân phố Nguyễn Tri Phương.",
    "Chi đoàn Thanh niên Tổ dân phố Nguyễn Trung Trực 2", "Chi đoàn Thanh niên Tổ dân phố An Bình 1",
    "Chi đoàn Thanh niên Tổ dân phố An Bình 2", "Chi đoàn Thanh niên Tổ dân phố Tô Hiến Thành.",
    "Chi đoàn Thanh niên Tổ dân phố Tân Lạc", "Chi đoàn Thanh niên Tổ dân phố Prenn.",
    "Chi đoàn Thanh niên Tổ dân phố Trường Chinh.", "Chi đoàn Thanh niên Tổ dân phố Thiên Thành.",
    "Chi đoàn Thanh niên Tổ dân phố Mạc Đỉnh Chi 1.", "Chi đoàn Thanh niên Tổ dân phố Mạc Đỉnh Chi 2.",
    "Chi đoàn Thanh niên Tổ dân phố Trần Lê.", "Chi đoàn Thanh niên Tổ dân phố Thiện Mỹ.",
    "Chi đoàn Thanh niên Tổ dân phố Đồng Thiện", "Chi đoàn Thanh niên Ngô Thì Nhậm",
    "Chi đoàn Thanh niên Tổ dân phố Nam Thiên.", "Chi đoàn Thanh niên Tổ dân phố Huyền Trân Công Chúa.",
    "Chi đoàn Thanh niên Tổ dân phố Ngô Thì Sỹ", "Chi đoàn Thanh niên Tổ dân phố Lê Hồng Phong.",
    "Chi đoàn Thanh niên Tổ dân phố Huỳnh Thúc Kháng.", "Chi đoàn Thanh niên Tổ dân phố An Lạc 1.",
    "Chi đoàn Thanh niên Tổ dân phố An Lạc 2.", "Chi đoàn Thanh niên Tổ dân phố Nguyễn Trung Trực 1.",
    "Chi đoàn Thanh niên Tổ dân phố An Sơn 1.", "Chi đoàn Thanh niên Tổ dân phố An Sơn 2.",
    "Chi đoàn Thanh niên Tổ dân phố Trần Thái Tông.", "Chi đoàn Thanh niên Tổ dân phố Yên Thế.",
    "Chi đoàn Thanh niên Tổ dân phố Hoàng Hoa Thám.", "Chi đoàn Thanh niên Tổ dân phố Đa Lợi.",
    "Chi đoàn Thanh niên Tổ dân phố Lê Văn Tám.", "Chi đoàn Thanh niên Tổ dân phố Khe Sanh.",
    "Chi đoàn Thanh niên Tổ dân phố Sở Lăng.", "Chi đoàn Thanh niên Tổ dân phố Trần Quý Cáp",
    "Chi đoàn Thanh niên Tổ dân phố Hồng Lạc", "Chi đoàn Thanh niên Tổ dân phố Phạm Hồng Thái",
    "Chi đoàn Thanh niên Tổ dân phố Trần Hưng Đạo", "Chi đoàn Thanh niên Tổ dân phố Khởi Nghĩa Bắc Sơn",
    "Chi đoàn Thanh niên Tổ dân phố Nhất Thống", "Chi đoàn Thanh niên Tổ dân phố Yersin",
    "Chi đoàn Thanh niên Tổ dân phố Trần Quang Diệu",
  ];
  const unitInputs = document.querySelectorAll('.unit-search');
  unitInputs.forEach(input => {
    const wrapper = input.parentElement;
    const optionsList = wrapper.querySelector('.custom-options');

    const renderOptions = (filterText = '') => {
      optionsList.innerHTML = '';
      const filtered = workUnits.filter(u => u.toLowerCase().includes(filterText.toLowerCase()));
      if (filtered.length === 0) {
        optionsList.innerHTML = '<li class="custom-option" style="color: #94a3b8; cursor: default; text-align: center;">Không tìm thấy kết quả</li>';
      } else {
        filtered.forEach(unit => {
          const li = document.createElement('li');
          li.className = 'custom-option';
          li.textContent = unit;
          li.addEventListener('mousedown', (e) => {
            e.preventDefault(); // prevent input blur
            input.value = unit;
            optionsList.classList.remove('show');
          });
          optionsList.appendChild(li);
        });
      }
    };

    input.addEventListener('focus', () => {
      renderOptions(input.value);
      optionsList.classList.add('show');
    });

    input.addEventListener('input', (e) => {
      renderOptions(e.target.value);
      optionsList.classList.add('show');
    });

    input.addEventListener('blur', () => {
      optionsList.classList.remove('show');
    });
  });

  // Sticky Header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger once on load

  // Number Counter Animation
  const counters = document.querySelectorAll('.stat-number');
  let hasCounted = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCounter();
    });
  };

  // Only run counters when stats section is visible
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasCounted) {
        runCounters();
        hasCounted = true;
      }
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  }

  // Hero Image Social Stats Count-up
  const heroStatNums = document.querySelectorAll('.hero-stat-num');
  let heroStatsCounted = false;

  const runHeroStats = () => {
    heroStatNums.forEach(el => {
      const target = +el.getAttribute('data-target');
      const duration = 1800;
      const increment = target / (duration / 16);
      let current = 0;
      const update = () => {
        current += increment;
        if (current < target) {
          el.textContent = Math.ceil(current).toLocaleString();
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toLocaleString();
          // Add '+' suffix to make it look like mock social numbers
          if (target >= 1000) {
            el.textContent = (target / 1000).toFixed(1).replace('.0','') + 'K+';
          } else {
            el.textContent = target + '+';
          }
        }
      };
      update();
    });
  };

  const heroSection = document.querySelector('.hero');
  if (heroSection && heroStatNums.length) {
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !heroStatsCounted) {
        setTimeout(runHeroStats, 800);
        heroStatsCounted = true;
      }
    }, { threshold: 0.3 });
    heroObserver.observe(heroSection);
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Update active class
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Scroll to element
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Feedback form handling with Google Forms
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = feedbackForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
      btn.disabled = true;

      const formData = new FormData(feedbackForm);
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSciIvaO_6FD1ur2FrKjkYbL98i_YUo4iqNmGREYZeg4wwoXsA/formResponse';

      fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      }).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Đã gửi thành công!';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');

        // Clear only the feedback-specific fields
        const topicSelect = feedbackForm.querySelector('select[name="entry.924281829"]');
        const contentTextarea = feedbackForm.querySelector('textarea[name="entry.2019975905"]');
        if (topicSelect) topicSelect.value = '';
        if (contentTextarea) contentTextarea.value = '';

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('btn-outline');
          btn.classList.add('btn-primary');
          btn.disabled = false;
        }, 3000);
      }).catch(err => {
        btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Lỗi kết nối!';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 3000);
      });
    });
  }
  // --- EPIC FEATURES LOGIC ---

  const bgMusic = document.getElementById('bg-music');
  const musicPlayer = document.querySelector('.music-player');
  const playBtn = document.getElementById('btn-play-pause');
  const playIcon = playBtn ? playBtn.querySelector('i') : null;
  let fadeInterval;

  // Audio Fade Functions
  const fadeAudio = (audio, dir) => {
    clearInterval(fadeInterval);
    if (dir === 'in') {
      audio.volume = 0;
      audio.play().catch(e => console.log('Audio play failed:', e));
      fadeInterval = setInterval(() => {
        if (audio.volume < 0.95) {
          audio.volume += 0.05;
        } else {
          audio.volume = 1;
          clearInterval(fadeInterval);
        }
      }, 100);
    } else {
      fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fadeInterval);
        }
      }, 100);
    }
  };

  // Preloader Logic
  const preloader = document.getElementById('preloader');
  const enterBtn = document.getElementById('enter-btn');

  if (enterBtn && preloader) {
    enterBtn.addEventListener('click', () => {
      preloader.classList.add('hidden');
      if (bgMusic && musicPlayer) {
        musicPlayer.classList.add('playing');
        fadeAudio(bgMusic, 'in');
      }
    });
  }

  // Music Player Controls
  if (playBtn && bgMusic) {
    playBtn.addEventListener('click', () => {
      if (bgMusic.paused) {
        musicPlayer.classList.add('playing');
        playIcon.className = 'fa-solid fa-pause';
        fadeAudio(bgMusic, 'in');
      } else {
        musicPlayer.classList.remove('playing');
        playIcon.className = 'fa-solid fa-play';
        fadeAudio(bgMusic, 'out');
      }
    });
  }

  // Modals Logic
  const checkinModal = document.getElementById('checkin-modal');
  const btnOpenCheckin = document.getElementById('btn-open-checkin');
  const lyricsModal = document.getElementById('lyrics-modal');
  const btnLyrics = document.getElementById('btn-lyrics');

  const setupModal = (modal, openBtn) => {
    if (!modal) return;
    const closeBtn = modal.querySelector('.close-modal');

    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  };

  setupModal(checkinModal, btnOpenCheckin);
  setupModal(lyricsModal, btnLyrics);

  // Spotify-style Lyrics Highlighting & Sync
  const lyricsContainer = document.getElementById('lyrics-container');
  const lyricLines = document.querySelectorAll('.lyrics-body p');

  // Create an array of lyric objects with time and element reference
  const lyricsData = Array.from(lyricLines).map(line => {
    return {
      time: parseFloat(line.getAttribute('data-time') || 0),
      element: line
    };
  });

  // Sync lyrics with audio
  let lastActiveIndex = -1;
  if (bgMusic && lyricsContainer) {
    bgMusic.addEventListener('timeupdate', () => {
      const currentTime = bgMusic.currentTime;
      let activeIndex = -1;

      // Find the current lyric line
      for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time) {
          activeIndex = i;
        } else {
          break; // Since times are sequential, we can stop once we exceed current time
        }
      }

      if (activeIndex !== -1 && activeIndex !== lastActiveIndex) {
        lastActiveIndex = activeIndex;
        // Remove active class from all
        lyricLines.forEach(l => l.classList.remove('active'));
        // Add active class to current
        const activeLyric = lyricsData[activeIndex].element;
        activeLyric.classList.add('active');
      }
    });
  }

  // Allow manual clicking to jump to time
  lyricLines.forEach(line => {
    line.addEventListener('click', function () {
      if (bgMusic) {
        const targetTime = parseFloat(this.getAttribute('data-time') || 0);
        bgMusic.currentTime = targetTime;
        if (bgMusic.paused) {
          musicPlayer.classList.add('playing');
          playIcon.className = 'fa-solid fa-pause';
          fadeAudio(bgMusic, 'in');
        }
      }
    });
  });

  // Checkin Form Submit
  const checkinForm = document.getElementById('checkin-form');
  if (checkinForm) {
    checkinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = checkinForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang điểm danh...';
      btn.disabled = true;

      const formData = new FormData(checkinForm);
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScWl0gfPwjSRWNjqV5XcGjwE9H4mhEQVhJ-dgAoXEsp26auhg/formResponse';

      fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      }).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Điểm danh thành công!';

        // Auto-fill feedback form
        const feedbackName = document.querySelector('#feedbackForm input[name="entry.624389307"]');
        const feedbackPhone = document.querySelector('#feedbackForm input[name="entry.1959986995"]');
        const feedbackUnit = document.querySelector('#feedbackForm input[name="entry.355202443"]');

        if (feedbackName) feedbackName.value = formData.get('entry.890636435') || '';
        if (feedbackPhone) feedbackPhone.value = formData.get('entry.895161366') || '';
        if (feedbackUnit) feedbackUnit.value = formData.get('entry.1800317999') || '';

        checkinForm.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          if (checkinModal) checkinModal.classList.remove('show');
        }, 2000);
      }).catch(err => {
        btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Lỗi kết nối!';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 2000);
      });
    });
  }
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fa-solid fa-bars';
      });
    });
  }
});
