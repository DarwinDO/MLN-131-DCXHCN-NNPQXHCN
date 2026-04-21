/* ============================================
   HỒ SƠ VỤ VIỆC ÔNG BÌNH — INTERACTIVE SCRIPT
   All interaction logic for the academic website
   ============================================ */

// ===== VIOLATION MODAL DATA =====
const violationData = {
  A: {
    title: 'Vượt Thẩm Quyền',
    sections: [
      {
        heading: 'Hành vi',
        content: 'Ông Bình — Chủ tịch UBND huyện — tự ký phê duyệt dự án xây trường trị giá 18 tỷ đồng, vượt quá mức thẩm quyền phê duyệt được pháp luật quy định cho cấp huyện. Thay vì trình lên cấp có thẩm quyền, ông tự quyết định để "kịp tiến độ".'
      },
      {
        heading: 'Vì sao nguy hiểm',
        content: 'Khi một cá nhân tự ý vượt thẩm quyền, ranh giới pháp lý giữa các cấp chính quyền bị phá vỡ. Nếu chấp nhận tiền lệ này, bất kỳ ai có chức vụ đều có thể viện dẫn "mục đích tốt" để hành động ngoài khuôn khổ pháp luật — dẫn đến tình trạng quyền lực bị cá nhân hóa.'
      },
      {
        heading: 'Nguyên tắc pháp quyền bị xâm phạm',
        content: 'Vi phạm trực tiếp nguyên tắc thượng tôn Hiến pháp và pháp luật: mọi quyền lực nhà nước phải được thực hiện đúng thẩm quyền, đúng trình tự, đúng quy định pháp luật. Đồng thời xâm phạm cơ chế kiểm soát quyền lực — khi một cá nhân tự phê duyệt vượt cấp, cơ chế kiểm tra giữa các cấp chính quyền bị vô hiệu hóa.'
      },
      {
        heading: 'Liên hệ',
        content: '"Mục đích tốt" không cho phép cá nhân đứng trên quy trình pháp lý. Trong Nhà nước pháp quyền, cách thức đạt được mục tiêu cũng quan trọng không kém bản thân mục tiêu. Bỏ qua trình tự là bỏ qua sự kiểm soát — và mất kiểm soát là mảnh đất của lạm quyền.'
      }
    ],
    conclusion: 'Vượt thẩm quyền không chỉ là sai về hành chính — đó là sự xâm phạm nguyên tắc nền tảng rằng không ai được đứng trên pháp luật, kể cả khi nhân danh lợi ích công.'
  },
  B: {
    title: 'Chỉ Định Thầu Cho Người Thân',
    sections: [
      {
        heading: 'Hành vi',
        content: 'Ông Bình chỉ định thầu cho công ty của anh vợ mà không qua đấu thầu công khai, viện lý do cần triển khai nhanh. Mối quan hệ gia đình giữa người phê duyệt và nhà thầu tạo ra xung đột lợi ích nghiêm trọng.'
      },
      {
        heading: 'Vì sao nguy hiểm',
        content: 'Chỉ định thầu cho người thân xóa bỏ cạnh tranh, minh bạch và công bằng trong sử dụng ngân sách công. Tiền thuế của người dân được chuyển vào túi người thân của quan chức qua một quyết định hành chính không ai giám sát. Đây là mô hình cổ điển của tham nhũng dựa trên quan hệ.'
      },
      {
        heading: 'Nguyên tắc pháp quyền bị xâm phạm',
        content: 'Vi phạm nguyên tắc minh bạch, liêm chính công vụ. Xâm phạm yêu cầu phòng ngừa xung đột lợi ích — một trong những trụ cột của Luật Phòng, chống tham nhũng. Đồng thời phá vỡ tinh thần "của dân, vì dân" khi lợi ích công bị chuyển hóa thành lợi ích gia đình.'
      },
      {
        heading: 'Liên hệ',
        content: 'Đấu thầu công khai không chỉ là thủ tục — đó là cơ chế để bảo đảm rằng tiền thuế của dân được sử dụng hiệu quả, công bằng, và chịu sự giám sát. Bỏ qua đấu thầu là bỏ qua quyền giám sát của nhân dân đối với ngân sách công.'
      }
    ],
    conclusion: 'Chỉ định thầu cho người thân là biểu hiện điển hình của xung đột lợi ích và lợi ích nhóm — làm xói mòn minh bạch và niềm tin xã hội vào tính liêm chính của chính quyền.'
  },
  C: {
    title: 'Chênh Lệch 4,5 Tỷ Đồng',
    sections: [
      {
        heading: 'Hành vi',
        content: 'Sau khi công trình hoàn thành, cơ quan thanh tra phát hiện quyết toán chênh lệch 4,5 tỷ đồng so với khối lượng thực tế thi công. Nghĩa là số tiền được thanh toán từ ngân sách đã vượt xa giá trị công việc thực tế được thực hiện.'
      },
      {
        heading: 'Vì sao nguy hiểm',
        content: '4,5 tỷ đồng thất thoát không phải là con số tài chính đơn thuần. Đó là tài sản công — tiền thuế, tiền đóng góp của hàng triệu người dân — bị thất thoát qua một quy trình thiếu minh bạch. Số tiền đó có thể xây thêm cơ sở vật chất, mua thiết bị dạy học, hoặc phục vụ hàng nghìn học sinh khác.'
      },
      {
        heading: 'Nguyên tắc pháp quyền bị xâm phạm',
        content: 'Xâm phạm trực tiếp lợi ích công và niềm tin xã hội. Khi ngân sách bị thất thoát mà không được xử lý, người dân mất niềm tin rằng tiền thuế của họ được sử dụng đúng mục đích. Đồng thời cho thấy cơ chế giám sát tài chính công tại địa phương đã bị vô hiệu hóa.'
      },
      {
        heading: 'Liên hệ',
        content: 'Dù trường vẫn được xây xong, không thể coi đây là "ổn" khi quá trình thực hiện vi phạm pháp luật và gây thất thoát. Trong Nhà nước pháp quyền XHCN, hiệu quả phải đi đôi với liêm chính — kết quả không biện hộ cho phương pháp sai trái.'
      }
    ],
    conclusion: 'Thất thoát 4,5 tỷ đồng là bằng chứng cụ thể về tổn hại lợi ích công. Nó cho thấy khi thiếu minh bạch và kiểm soát, ngân sách nhà nước dễ trở thành "nguồn lợi" cho nhóm lợi ích.'
  }
};

// ===== QUIZ FEEDBACK DATA =====
const quizFeedbackData = {
  A: {
    correct: false,
    text: 'Lấy kết quả bề ngoài ("trường đã xây xong") để hợp thức hóa vi phạm pháp luật là đi ngược nguyên tắc thượng tôn pháp luật. Nếu chấp nhận cách này, bất kỳ ai cũng có thể vượt thẩm quyền rồi viện dẫn "đã có kết quả tốt" để thoát trách nhiệm.'
  },
  B: {
    correct: false,
    text: 'Động cơ "tích cực" không thay thế được trách nhiệm pháp lý. Vượt thẩm quyền, chỉ định thầu cho người thân, gây thất thoát ngân sách mà chỉ nhắc nhở nội bộ sẽ tạo tiền lệ nguy hiểm: vi phạm nghiêm trọng có thể giải quyết bằng "rút kinh nghiệm".'
  },
  C: {
    correct: true,
    text: 'Đây là phương án phù hợp nhất với tinh thần Nhà nước pháp quyền XHCN. Kiểm tra, thanh tra toàn diện đảm bảo thượng tôn pháp luật; xử lý trách nhiệm cá nhân và tổ chức đảm bảo kiểm soát quyền lực; làm rõ xung đột lợi ích và thất thoát bảo vệ lợi ích công và niềm tin xã hội. Phương án này ngăn chặn tiền lệ xấu và khẳng định: không ai đứng trên pháp luật.'
  },
  D: {
    correct: false,
    text: 'Chỉ yêu cầu hoàn trả tiền là thu hẹp sai phạm công quyền thành bài toán tài chính đơn thuần. Vụ việc này không chỉ về 4,5 tỷ — mà còn về vượt thẩm quyền, xung đột lợi ích, phá vỡ minh bạch. Nếu chỉ trả tiền là xong, pháp luật trở thành thứ có thể "mua chuộc".'
  }
};

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
  initScrollProgress();
  initNavigation();
  initScrollAnimations();
  initSmoothScroll();
  initHeroParticles();
});

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  });
}

// ===== NAVIGATION =====
function initNavigation() {
  const header = document.getElementById('navHeader');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link tracking
    updateActiveNav();
  });

  // Mobile toggle
  toggle.addEventListener('click', function() {
    links.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      links.classList.remove('open');
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === current) {
      link.classList.add('active');
    }
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Add stagger delay based on index within parent
        const parent = entry.target.parentElement;
        const siblings = parent.querySelectorAll('[data-animate]');
        let index = 0;
        siblings.forEach(function(sibling, i) {
          if (sibling === entry.target) index = i;
        });

        setTimeout(function() {
          entry.target.classList.add('visible');
        }, index * 120);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  animatedElements.forEach(function(el) {
    observer.observe(el);
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== VIOLATION MODAL =====
function openViolationModal(type) {
  const modal = document.getElementById('violationModal');
  const body = document.getElementById('violationModalBody');
  const data = violationData[type];

  if (!data) return;

  let html = '<h3>' + data.title + '</h3>';

  data.sections.forEach(function(section) {
    html += '<div class="modal-section">';
    html += '<h4>' + section.heading + '</h4>';
    html += '<p>' + section.content + '</p>';
    html += '</div>';
  });

  html += '<div class="modal-conclusion">' + data.conclusion + '</div>';

  body.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeViolationModal() {
  const modal = document.getElementById('violationModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
  if (e.target.id === 'violationModal') {
    closeViolationModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeViolationModal();
  }
});

// ===== PRINCIPLE CARDS =====
function togglePrinciple(card) {
  const isExpanded = card.classList.contains('expanded');

  // Close all cards
  document.querySelectorAll('.principle-card').forEach(function(c) {
    c.classList.remove('expanded');
  });

  // Toggle clicked card
  if (!isExpanded) {
    card.classList.add('expanded');
  }
}

// ===== QUIZ =====
function selectAnswer(answer) {
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');
  const resetBtn = document.getElementById('quizReset');
  const data = quizFeedbackData[answer];

  if (!data) return;

  // Disable all options
  options.forEach(function(opt) {
    opt.classList.add('disabled');
  });

  // Mark selected
  const selected = document.querySelector('[data-answer="' + answer + '"]');
  selected.classList.remove('disabled');
  selected.classList.add('selected');

  if (data.correct) {
    selected.classList.add('correct');
  } else {
    selected.classList.add('incorrect');
    // Highlight correct answer
    const correctOption = document.querySelector('[data-answer="C"]');
    correctOption.classList.remove('disabled');
    correctOption.classList.add('highlight-correct');
  }

  // Show feedback
  const feedbackClass = data.correct ? 'correct' : 'incorrect';
  const feedbackLabel = data.correct ? '✓ Chính xác' : '✗ Chưa chính xác';

  feedback.innerHTML = '<div class="quiz-feedback-inner ' + feedbackClass + '">' +
    '<div class="quiz-feedback-label">' + feedbackLabel + '</div>' +
    '<p class="quiz-feedback-text">' + data.text + '</p>' +
    '</div>';

  setTimeout(function() {
    feedback.classList.add('show');
  }, 100);

  // Show reset button
  resetBtn.style.display = 'inline-flex';
}

function resetQuiz() {
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');
  const resetBtn = document.getElementById('quizReset');

  options.forEach(function(opt) {
    opt.classList.remove('disabled', 'selected', 'correct', 'incorrect', 'highlight-correct');
  });

  feedback.classList.remove('show');
  feedback.innerHTML = '';
  resetBtn.style.display = 'none';
}

// ===== AI SECTION ACCORDION =====
function toggleAISection(header) {
  const card = header.parentElement;
  const isOpen = card.classList.contains('open');

  if (isOpen) {
    card.classList.remove('open');
  } else {
    card.classList.add('open');
  }
}

// ===== HERO PARTICLES =====
function initHeroParticles() {
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    const hero = canvas.parentElement;
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 25000);
    for (let i = 0; i < Math.min(count, 40); i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.05
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
      p.x += p.dx;
      p.y += p.dy;

      // Wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')';
      ctx.fill();
    });

    // Draw subtle connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.03 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(draw);
  }

  // Only run particles when hero is visible (performance)
  const heroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (!animationId) draw();
      } else {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      }
    });
  }, { threshold: 0.1 });

  resize();
  createParticles();
  heroObserver.observe(canvas.parentElement);

  window.addEventListener('resize', function() {
    resize();
    createParticles();
  });
}
