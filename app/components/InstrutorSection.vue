<template>
  <!-- Light section — humanizada com foto real -->
  <section class="section-light" id="instrutor" style="padding: var(--section-pad)">
    <div class="container container--content instrutor__inner">

      <!-- Foto real (about.png) -->
      <div class="instrutor__photo-col reveal">
        <div class="instrutor__photo-frame">
          <img
            src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/about.png"
            alt="Nattan Lima — Fundador da Prisme Sales"
            class="instrutor__photo"
          />
          <div class="instrutor__photo-bottom">
            <div class="instrutor__photo-bar"></div>
            <span class="instrutor__photo-caption">Fundador · Prisme Sales</span>
          </div>
        </div>

        <!-- YouTube card flutuante -->
        <div class="instrutor__yt-card card-light">
          <div class="instrutor__yt-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="red">
              <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
            </svg>
          </div>
          <div>
            <div class="instrutor__yt-num">+30.000</div>
            <div class="instrutor__yt-lbl">Inscritos fiéis</div>
          </div>
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="instrutor__content">
        <div class="badge badge-gold-light reveal" style="margin-bottom: 20px">
          <span class="badge-dot" style="background: #92400E"></span>
          Quem vai te ensinar
        </div>

        <h2 class="instrutor__name reveal reveal-delay-1">
          Nattan <span style="color: var(--primary); font-style: italic">Lima</span>
        </h2>

        <p class="instrutor__role reveal reveal-delay-1">
          Fundador da Prisme Sales e especialista em N8N + IA
        </p>

        <div class="instrutor__bios reveal reveal-delay-2">
          <p>
            Há mais de 6 anos ajudo pequenos e médios empresários a <strong>destravarem as vendas</strong> através da automação. Fundei a Prisme Sales, com foco em WhatsApp, N8N, IA e implementação prática com acompanhamento.
          </p>
          <blockquote class="instrutor__quote">
            <span class="instrutor__quote-mark">&ldquo;</span>
            Minha abordagem é pragmática: identifico o gargalo, monto a automação e você sai com tudo rodando. Se não funciona, não serve.
          </blockquote>
        </div>

        <!-- Credenciais -->
        <div class="instrutor__badges reveal reveal-delay-3">
          <div v-for="(c, i) in creds" :key="i" class="badge badge-gold-light">
            <span>{{ c }}</span>
          </div>
        </div>

        <!-- Métricas -->
        <div class="instrutor__metrics reveal reveal-delay-3">
          <div v-for="(m, i) in metrics" :key="i" class="instrutor__metric card-light">
            <span class="instrutor__metric-num">{{ m.num }}</span>
            <span class="instrutor__metric-lbl">{{ m.lbl }}</span>
          </div>
        </div>

        <!-- Link YouTube -->
        <a
          href="https://www.youtube.com/@fazquevende"
          target="_blank"
          rel="noopener noreferrer"
          class="instrutor__yt-link reveal reveal-delay-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="red">
            <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
          </svg>
          Ver canal no YouTube →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const creds = [
  '30K+ no YouTube',
  '1.500 no grupo fechado',
  '118+ aulas',
  'Especialista N8N + IA',
  '16+ anos em vendas',
]

const metrics = [
  { num: '500+', lbl: 'empresários atendidos' },
  { num: '6+', lbl: 'países atendidos' },
  { num: '6+', lbl: 'anos de consultoria' },
]
</script>

<style scoped>
.instrutor__inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
  align-items: start;
}

/* Foto */
.instrutor__photo-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
}

.instrutor__photo-frame {
  width: 280px;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-light-hover);
  border: 1px solid var(--border-light);
}

.instrutor__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.7s ease;
}

.instrutor__photo-frame:hover .instrutor__photo {
  transform: scale(1.04);
}

.instrutor__photo-bottom {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  z-index: 2;
}

.instrutor__photo-bar {
  width: 40px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
  margin-bottom: 8px;
}

.instrutor__photo-caption {
  font-family: var(--font-headline);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-dark);
}

.instrutor__yt-card {
  width: 100%;
  max-width: 280px;
  border-radius: var(--radius-xl);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 2px solid rgba(245,158,11,0.25);
}

.instrutor__yt-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  background: rgba(255,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.instrutor__yt-num {
  font-family: var(--font-headline);
  font-size: 22px;
  font-weight: 900;
  color: var(--text-dark);
  letter-spacing: -0.03em;
}

.instrutor__yt-lbl {
  font-size: 11px;
  color: var(--text-dark-dim);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Content */
.instrutor__name {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--text-dark);
  margin-bottom: 8px;
  line-height: 1;
}

.instrutor__role {
  font-size: 18px;
  color: var(--text-dark-secondary);
  font-weight: 600;
  margin-bottom: 28px;
}

.instrutor__bios {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.instrutor__bios p {
  font-size: 16px;
  color: var(--text-dark-secondary);
  line-height: 1.75;
}

.instrutor__bios strong { color: var(--text-dark); }

.instrutor__quote {
  position: relative;
  padding: 20px 24px 20px 28px;
  background: #fff;
  border-left: 3px solid var(--primary);
  border-radius: 0 var(--radius) var(--radius) 0;
  font-style: italic;
  font-size: 16px;
  color: var(--text-dark);
  line-height: 1.6;
  box-shadow: var(--shadow-light);
}

.instrutor__quote-mark {
  display: block;
  font-size: 56px;
  color: rgba(245,158,11,0.15);
  font-family: var(--font-headline);
  font-weight: 900;
  line-height: 0.3;
  margin-bottom: 12px;
}

.instrutor__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.instrutor__metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}

.instrutor__metric {
  border-radius: var(--radius);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.instrutor__metric-num {
  font-family: var(--font-headline);
  font-size: 22px;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.instrutor__metric-lbl {
  font-size: 11px;
  color: var(--text-dark-dim);
  font-weight: 600;
}

.instrutor__yt-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-headline);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--text-dark-secondary);
  padding: 12px 20px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow-light);
  transition: all 0.25s ease;
}

.instrutor__yt-link:hover {
  border-color: rgba(255,0,0,0.3);
  color: var(--text-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-light-hover);
}

@media (max-width: 960px) {
  .instrutor__inner { grid-template-columns: 1fr; gap: 40px; }
  .instrutor__photo-col { flex-direction: row; flex-wrap: wrap; align-items: flex-start; }
  .instrutor__photo-frame { width: 200px; }
  .instrutor__yt-card { max-width: 200px; }
  .instrutor__metrics { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .instrutor__photo-col { flex-direction: column; align-items: stretch; }
  .instrutor__photo-frame, .instrutor__yt-card { max-width: 100%; width: 100%; }
}
</style>
