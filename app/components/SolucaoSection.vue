<template>
  <!-- Dark → Light transition -->
  <div>
    <div class="divider-dark-to-light"></div>
    <section class="section-light" id="solucao" style="padding: var(--section-pad)">
      <div class="container container--content solucao__inner">

        <!-- Visual: N8N logo grande + stats -->
        <div class="solucao__visual reveal">
          <!-- N8N Logo oficial -->
          <div class="solucao__n8n-card">
            <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="n8n logo">
              <text x="0" y="40" font-family="DM Mono, monospace" font-size="48" fill="#EA4B71" font-weight="700">n8n</text>
            </svg>
            <div class="solucao__n8n-label">Open Source Automation</div>
            <div class="solucao__n8n-glow" aria-hidden="true"></div>
          </div>

          <!-- Badge técnico -->
          <div class="solucao__mono-badge">
            <span>// usado em produção. não é tutorial.</span>
          </div>

          <!-- Stats cards -->
          <div class="solucao__stats">
            <div v-for="(s, i) in stats" :key="i" class="card-light solucao__stat">
              <span class="solucao__stat-num">{{ s.num }}</span>
              <span class="solucao__stat-lbl">{{ s.lbl }}</span>
            </div>
          </div>

          <div class="solucao__clients">
            <p class="solucao__clients-label">Situações que você vai automatizar:</p>
            <div class="solucao__client-tags">
              <span class="solucao__client-tag">Lead novo</span>
              <span class="solucao__client-tag">Pós-venda</span>
              <span class="solucao__client-tag">Reativação</span>
            </div>
          </div>
        </div>

        <!-- Conteúdo -->
        <div class="solucao__content">
          <div class="badge badge-gold-light reveal" style="margin-bottom: 20px">A solução</div>

          <h2 class="solucao__headline reveal reveal-delay-1">
            N8N é a ferramenta que vai mudar
            <span class="solucao__highlight"> como você trabalha e vende</span>
          </h2>

          <p class="solucao__desc reveal reveal-delay-2">
            Uma plataforma visual de automação que conecta seus sistemas, elimina trabalho manual e faz suas vendas funcionarem no piloto automático — sem pagar desenvolvedor.
          </p>

          <ul class="solucao__list reveal reveal-delay-3">
            <li v-for="(f, i) in features" :key="i" class="solucao__item">
              <div class="solucao__check" aria-hidden="true">✓</div>
              <div>
                <strong class="solucao__item-title">{{ f.title }}</strong>
                <p class="solucao__item-desc">{{ f.desc }}</p>
              </div>
            </li>
          </ul>

          <!-- Social proof inline -->
          <div class="solucao__proof reveal reveal-delay-4">
            <img
              src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/about.png"
              alt="Nattan Lima"
              class="solucao__proof-avatar"
            />
            <div>
              <p class="solucao__proof-quote">"Uso N8N todo dia em produção. É exatamente isso que você vai aprender — o que realmente funciona."</p>
              <p class="solucao__proof-name">Nattan Lima · Prisme Sales</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <div class="divider-light-to-dark"></div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { num: '1.200+', lbl: 'integrações nativas' },
  { num: 'Open', lbl: 'source & self-hosted' },
  { num: 'Zero', lbl: 'mensalidade obrigatória' },
]

const features = [
  {
    title: 'Conecta tudo sem código',
    desc: 'WhatsApp, CRM, Planilhas, Meta Ads, APIs — visualmente, sem programação.',
  },
  {
    title: 'Open source e self-hosted',
    desc: 'Você hospeda onde quiser. Sem mensalidade cara ou lock-in de plataforma.',
  },
  {
    title: 'Visual e intuitivo',
    desc: 'Feito para quem vende, não para desenvolvedor. Arrasta, conecta, ativa.',
  },
  {
    title: 'Aplicação em situações reais',
    desc: 'Você aprende cenários completos de atendimento, vendas e pós-venda para aplicar no seu negócio já na semana seguinte.',
  },
]
</script>

<style scoped>
.solucao__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Visual */
.solucao__visual {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.solucao__n8n-card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  box-shadow: var(--shadow-light);
  overflow: hidden;
}

.solucao__n8n-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 8px;
}

.solucao__n8n-glow {
  position: absolute;
  top: -20px; right: -20px;
  width: 120px; height: 120px;
  background: radial-gradient(circle, rgba(234,75,113,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.solucao__mono-badge {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--primary);
  background: rgba(245,158,11,0.06);
  border: 1px solid rgba(245,158,11,0.15);
  border-radius: var(--radius);
  padding: 12px 16px;
  letter-spacing: 0.02em;
}

.solucao__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.solucao__stat {
  border-radius: var(--radius);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.solucao__stat-num {
  font-family: var(--font-headline);
  font-size: 20px;
  font-weight: 900;
  color: var(--text-dark);
  letter-spacing: -0.02em;
}

.solucao__stat-lbl {
  font-size: 11px;
  color: var(--text-dark-dim);
  font-weight: 600;
}

.solucao__clients-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-dark-dim);
  margin-bottom: 10px;
  font-family: var(--font-headline);
  font-weight: 700;
}

.solucao__client-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.solucao__client-tag {
  padding: 8px 20px;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  font-family: var(--font-headline);
  font-weight: 800;
  font-size: 14px;
  color: var(--text-dark);
  box-shadow: var(--shadow-light);
}

/* Content */
.solucao__headline {
  font-size: clamp(26px, 3.2vw, 44px);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--text-dark);
  margin-bottom: 20px;
  line-height: 1.1;
}

.solucao__highlight {
  color: var(--primary);
}

.solucao__desc {
  font-size: 16px;
  color: var(--text-dark-secondary);
  line-height: 1.75;
  margin-bottom: 32px;
}

.solucao__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.solucao__item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.solucao__check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  color: var(--primary);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.solucao__item-title {
  font-family: var(--font-headline);
  font-size: 15px;
  font-weight: 800;
  color: var(--text-dark);
  display: block;
  margin-bottom: 3px;
}

.solucao__item-desc {
  font-size: 14px;
  color: var(--text-dark-dim);
  line-height: 1.5;
}

/* Proof inline */
.solucao__proof {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px 24px;
  background: var(--bg-light-alt);
  border: 1px solid var(--border-light);
  border-left: 3px solid var(--primary);
  border-radius: var(--radius-lg);
}

.solucao__proof-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 2px solid var(--primary-border);
  flex-shrink: 0;
}

.solucao__proof-quote {
  font-size: 14px;
  color: var(--text-dark-secondary);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 6px;
}

.solucao__proof-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
  font-family: var(--font-headline);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@media (max-width: 960px) {
  .solucao__inner { grid-template-columns: 1fr; gap: 48px; }
  .solucao__stats { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 480px) {
  .solucao__stats { grid-template-columns: 1fr; }
}
</style>
