<template>
  <section class="hero section-dark">
    <!-- Ambient glow background -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__bg-orb hero__bg-orb--1"></div>
      <div class="hero__bg-orb hero__bg-orb--2"></div>
      <div class="hero__bg-dot-grid"></div>
    </div>

    <div class="container hero__inner">
      <!-- Left: conteúdo -->
      <div class="hero__content">

        <!-- Badge n8n -->
        <div class="badge badge-n8n reveal" style="margin-bottom: 20px">
          <span class="badge-dot"></span>
          100% ao vivo · Não é gravado
        </div>

        <!-- Headline (foco em N8N) -->
        <h1 class="hero__headline reveal reveal-delay-1">
          Aprenda N8N e
          <span class="heading-gradient"> automatize WhatsApp</span>,
          atendimento e vendas —
          <em>em 4 aulas ao vivo</em>
        </h1>

        <!-- Sub (enxuto) -->
        <p class="hero__sub reveal reveal-delay-2">
          Aulas ao vivo — não é curso gravado. Grupos reduzidos para atenção personalizada. Você participa em tempo real, tira dúvidas na hora e sai de cada aula com automação rodando. Acesso ao grupo exclusivo focado no curso e acompanhamento posterior.
        </p>

        <!-- CTAs + trust inline (prioridade na primeira dobra) -->
        <div class="hero__ctas-block reveal reveal-delay-3">
          <div class="hero__ctas">
            <a href="#comprar" class="btn btn-primary btn-lg hero__cta-primary">
              Garantir minha vaga
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
            <a href="#programa" class="btn btn-outline btn-lg">Ver o programa</a>
          </div>
          <p class="hero__trust-line">30k+ no YouTube · 500+ empresários atendidos</p>
        </div>

        <!-- Countdown (abaixo do CTA para não competir) -->
        <div class="hero__countdown reveal reveal-delay-4">
          <p class="hero__countdown-label">Primeira aula em:</p>
          <div class="hero__countdown-row">
            <div class="hero__cd-unit">
              <span class="hero__cd-num">{{ pad.days }}</span>
              <span class="hero__cd-lbl">dias</span>
            </div>
            <span class="hero__cd-sep">:</span>
            <div class="hero__cd-unit">
              <span class="hero__cd-num">{{ pad.hours }}</span>
              <span class="hero__cd-lbl">h</span>
            </div>
            <span class="hero__cd-sep">:</span>
            <div class="hero__cd-unit">
              <span class="hero__cd-num">{{ pad.minutes }}</span>
              <span class="hero__cd-lbl">min</span>
            </div>
            <span class="hero__cd-sep">:</span>
            <div class="hero__cd-unit">
              <span class="hero__cd-num">{{ pad.seconds }}</span>
              <span class="hero__cd-lbl">seg</span>
            </div>
          </div>
        </div>

        <!-- Métricas (secundárias, abaixo) -->
        <div class="hero__metrics reveal reveal-delay-4">
          <div v-for="(m, i) in metrics" :key="i" class="hero__metric">
            <span class="hero__metric-num">{{ m.num }}</span>
            <span class="hero__metric-lbl">{{ m.lbl }}</span>
          </div>
        </div>
      </div>

      <!-- Right: mockup do vídeo primeiro (em cima) + foto Nattan -->
      <div class="hero__right">
        <!-- Tela do PC com vídeo n8n — em cima para aparecer na dobra -->
        <div class="hero__workflow">
          <VideoScreenMockup />
        </div>
        <!-- Foto Nattan -->
        <div class="hero__photo-card">
          <img
            src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/principal.png"
            alt="Nattan Lima — Instrutor do Curso N8N"
            class="hero__photo"
          />
          <div class="hero__photo-overlay" aria-hidden="true"></div>
          <div class="hero__float-badge">
            <span class="hero__float-dot"></span>
            <span>Usa N8N em produção</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Gradient bottom -->
    <div class="hero__bottom-grad" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'

const targetDate = new Date('2026-04-04T13:00:00Z')

const countdown = reactive({ d: 0, h: 0, m: 0, s: 0 })

const pad = computed(() => ({
  days: String(countdown.d).padStart(2, '0'),
  hours: String(countdown.h).padStart(2, '0'),
  minutes: String(countdown.m).padStart(2, '0'),
  seconds: String(countdown.s).padStart(2, '0'),
}))

function update() {
  const diff = Math.max(0, targetDate.getTime() - Date.now())
  countdown.d = Math.floor(diff / 86_400_000)
  countdown.h = Math.floor((diff % 86_400_000) / 3_600_000)
  countdown.m = Math.floor((diff % 3_600_000) / 60_000)
  countdown.s = Math.floor((diff % 60_000) / 1_000)
}

update()
useIntervalFn(update, 1000)

const metrics = [
  { num: '30.000+', lbl: 'seguidores no YouTube' },
  { num: '1.500+', lbl: 'grupo no WhatsApp' },
  { num: '500+', lbl: 'empresários atendidos' },
  { num: '6 anos', lbl: 'de consultoria prática' },
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 110px 0 80px;
  overflow: hidden;
}

/* Backgrounds */
.hero__bg { position: absolute; inset: 0; pointer-events: none; }

.hero__bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
}

.hero__bg-orb--1 {
  top: -10%;
  left: -5%;
  width: 600px;
  height: 600px;
  background: rgba(245, 158, 11, 0.08);
}

.hero__bg-orb--2 {
  bottom: -10%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: rgba(245, 158, 11, 0.05);
}

.hero__bg-dot-grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: radial-gradient(circle, #F59E0B 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Layout */
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 6vw, 96px);
  align-items: center;
}

/* Headline */
.hero__headline {
  font-size: clamp(36px, 4.5vw, 60px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 24px;
}

.hero__headline em {
  font-style: italic;
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-underline-offset: 6px;
}

.hero__sub {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 36px;
}

/* Countdown */
.hero__countdown { margin-bottom: 32px; }

.hero__countdown-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.hero__countdown-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero__cd-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border-dark-2);
  border-radius: var(--radius);
  padding: 12px 16px;
  min-width: 64px;
}

.hero__cd-num {
  font-family: var(--font-mono);
  font-size: 28px;
  line-height: 1;
  color: var(--primary);
}

.hero__cd-lbl {
  font-size: 10px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 4px;
}

.hero__cd-sep {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--text-dim);
  margin-bottom: 16px;
}

/* CTAs + trust */
.hero__ctas-block {
  margin-bottom: 32px;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.hero__cta-primary {
  animation: glow-pulse 3s ease-in-out infinite;
}

.hero__trust-line {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-dim);
  letter-spacing: 0.04em;
}

/* Metrics */
.hero__metrics {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid var(--border-dark);
}

.hero__metric {
  display: flex;
  flex-direction: column;
}

.hero__metric-num {
  font-family: var(--font-headline);
  font-size: 20px;
  font-weight: 900;
  color: var(--text);
  letter-spacing: -0.02em;
}

.hero__metric-lbl {
  font-size: 11px;
  color: var(--text-dim);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Right side */
.hero__right {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

/* Foto card */
.hero__photo-card {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 1px solid var(--border-dark-2);
  box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.08);
}

.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.7s ease;
}

.hero__photo-card:hover .hero__photo {
  transform: scale(1.04);
}

.hero__photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(2,6,23,0.85) 0%, transparent 50%);
  z-index: 1;
}

.hero__float-badge {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(2, 6, 23, 0.9);
  border: 1px solid var(--primary-border);
  border-radius: 999px;
  font-family: var(--font-headline);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text);
  white-space: nowrap;
  backdrop-filter: blur(12px);
}

.hero__float-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  animation: ping 1.8s infinite;
  flex-shrink: 0;
}

/* Workflow */
.hero__workflow {
  width: 100%;
  max-width: 380px;
  animation: float 7s ease-in-out infinite;
}

/* Bottom gradient */
.hero__bottom-grad {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, var(--bg));
  pointer-events: none;
}

@media (max-width: 960px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero__right {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .hero__photo-card, .hero__workflow { max-width: 300px; }
}

@media (max-width: 600px) {
  /* Mobile: centralizar, menos bordas, vídeo maior, remover foto abaixo */
  .hero .container {
    padding-inline: 12px;
  }
  .hero__inner {
    text-align: center;
    justify-items: center;
  }
  .hero__sub { margin-inline: auto; }
  .hero__ctas { justify-content: center; }
  .hero__countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero__countdown-row { justify-content: center; }
  .hero__right {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
  .hero__workflow {
    max-width: 100%;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero__ctas { flex-direction: column; }
  .hero__ctas .btn { width: 100%; justify-content: center; min-height: 52px; }
  .hero__trust-line { font-size: 11px; }
  .hero__cd-unit { min-width: 52px; padding: 8px 10px; }
  .hero__cd-num { font-size: 22px; }
  .hero__metrics { display: none; }
}
</style>
