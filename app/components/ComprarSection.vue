<template>
  <section class="section-dark" id="comprar" style="padding: var(--section-pad); position: relative; overflow: hidden;">
    <!-- Glow center -->
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:700px;background:radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 70%);pointer-events:none;z-index:0;" aria-hidden="true"></div>

    <!-- Top line -->
    <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,rgba(245,158,11,0.4),transparent);" aria-hidden="true"></div>

    <div class="container" style="position:relative;z-index:1">
      <div class="section-headline reveal">
        <div class="badge badge-gold" style="margin-bottom:20px">
          <span class="badge-dot"></span>
          Vagas Limitadas
        </div>
        <h2>Garanta sua vaga agora</h2>
        <p>Turma de Abril 2026. Quando lotar, fecha. Sem segunda chance de lançamento.</p>
      </div>

      <div class="comprar__layout">
        <!-- Pricing card principal -->
        <div class="comprar__card glass reveal">
          <div class="comprar__product">
            <span class="comprar__mono-label">Curso N8N — 100% ao vivo</span>
            <div class="comprar__dates-line">4 Sábados · 04/04 a 25/04 · 2h cada · Não é gravado</div>
          </div>

          <div class="comprar__pricing">
            <div class="comprar__from">De <s>R$ 1.497,00</s></div>
            <div class="comprar__price-row">
              <span class="comprar__curr">R$</span>
              <span class="comprar__amount heading-gradient">997</span>
              <span class="comprar__cents heading-gradient">,50</span>
            </div>
            <div class="comprar__installment">
              ou 12x de <strong>R$ 97,67</strong> no cartão
            </div>
          </div>

          <div class="comprar__value-stack">
            <p class="comprar__value-label">O que você leva:</p>
            <ul class="comprar__includes">
              <li v-for="(item, i) in includes" :key="i">
                <span class="comprar__check">✓</span>
                {{ item }}
              </li>
            </ul>
            <p class="comprar__value-total">Valor equivalente a <strong>R$ 2.497</strong> — hoje por <strong class="heading-gradient">R$ 997,50</strong></p>
          </div>

          <a
            :href="config.public.checkoutUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-lg comprar__cta"
          >
            QUERO AUTOMATIZAR AGORA →
          </a>

          <div class="comprar__security">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Pagamento seguro via Stripe · Cartão · Pix · Boleto
          </div>

          <div class="comprar__guarantee">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
            <span>Garantia de <strong>7 dias</strong> — se não gostar, reembolso total, sem perguntas</span>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="comprar__sidebar reveal reveal-delay-2">
          <!-- Countdown -->
          <div class="glass comprar__countdown-box">
            <p class="comprar__cd-title">Primeira aula em:</p>
            <CountdownMini />
          </div>

          <!-- Por que agora -->
          <div class="glass comprar__reasons">
            <h3>Por que garantir agora?</h3>
            <ul>
              <li v-for="(r, i) in reasons" :key="i">{{ r }}</li>
            </ul>
          </div>

          <!-- Nattan mini card -->
          <div class="glass comprar__nattan">
            <img
              src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/principal.png"
              alt="Nattan Lima"
              class="comprar__nattan-photo"
            />
            <div>
              <strong>Nattan Lima</strong>
              <span>Prisme Sales · Especialista N8N</span>
            </div>
          </div>
        </div>

        <!-- Mobile: countdown + reasons (sidebar visível) -->
        <div class="comprar__mobile-urgency reveal">
          <div class="glass comprar__countdown-box">
            <p class="comprar__cd-title">Primeira aula em:</p>
            <CountdownMini />
          </div>
          <div class="glass comprar__reasons">
            <h3>Por que garantir agora?</h3>
            <ul>
              <li v-for="(r, i) in reasons" :key="i">{{ r }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const includes = [
  '4 aulas 100% ao vivo (2h cada) — não é gravado',
  'Gravações para revisão após cada aula',
  'Grupo fechado no WhatsApp com 1.500 empresários',
  'Acompanhamento posterior para implementação e ajustes',
  'Workflows prontos para usar',
  'Módulo prático com IA e banco de dados aplicados',
  'Garantia de 7 dias sem perguntas',
]

const reasons = [
  '⏰ Turma limitada para garantir qualidade',
  '📅 Datas fixas — próxima turma sem previsão',
  '👥 Grupo fechado para tirar dúvidas no dia a dia',
  '🎯 Sai de cada aula com resultado concreto + plano de continuidade',
]
</script>

<style scoped>
.comprar__layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 28px;
  align-items: start;
  max-width: 960px;
  margin-inline: auto;
}

/* Card principal */
.comprar__card {
  border-radius: var(--radius-xl);
  padding: 40px;
  border: 2px solid var(--primary-border);
  box-shadow: var(--shadow-primary);
  position: relative;
}

.comprar__card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--primary-accent), var(--primary));
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.comprar__mono-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 4px;
}

.comprar__dates-line {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.comprar__from {
  font-size: 14px;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.comprar__from s { opacity: 0.6; }

.comprar__price-row {
  display: flex;
  align-items: flex-start;
  line-height: 1;
  margin-bottom: 8px;
}

.comprar__curr {
  font-family: var(--font-headline);
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-top: 12px;
  margin-right: 4px;
}

.comprar__amount {
  font-family: var(--font-headline);
  font-size: 80px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
}

.comprar__cents {
  font-family: var(--font-headline);
  font-size: 28px;
  font-weight: 700;
  margin-top: 12px;
}

.comprar__installment {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.comprar__installment strong { color: var(--text); }

.comprar__value-stack {
  margin-bottom: 28px;
}

.comprar__value-label {
  font-family: var(--font-headline);
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.comprar__includes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
  padding: 20px;
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  border-radius: var(--radius-lg);
}

.comprar__value-total {
  font-size: 14px;
  color: var(--text-secondary);
}

.comprar__value-total strong { color: var(--text); }

.comprar__includes li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--text-secondary);
}

.comprar__check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  color: var(--primary);
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.comprar__cta {
  width: 100%;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 16px;
  letter-spacing: 0.04em;
  animation: glow-pulse 3s ease-in-out infinite;
}

.comprar__security {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 12px;
  color: var(--text-dim);
  margin-bottom: 16px;
}

.comprar__guarantee {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  border-radius: var(--radius);
  font-size: 14px;
  color: var(--text-secondary);
}

.comprar__guarantee strong { color: var(--primary); }

/* Sidebar */
.comprar__sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comprar__countdown-box {
  border-radius: var(--radius-xl);
  padding: 24px;
}

.comprar__cd-title {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.comprar__reasons {
  border-radius: var(--radius-xl);
  padding: 24px;
}

.comprar__reasons h3 {
  font-family: var(--font-headline);
  font-size: 14px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 14px;
  letter-spacing: 0.02em;
}

.comprar__reasons ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comprar__reasons li {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.comprar__nattan {
  border-radius: var(--radius-lg);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.comprar__nattan-photo {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 2px solid var(--primary-border);
  flex-shrink: 0;
}

.comprar__nattan strong {
  display: block;
  font-family: var(--font-headline);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}

.comprar__nattan span {
  font-size: 11px;
  color: var(--text-dim);
}

.comprar__mobile-urgency {
  display: none;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  max-width: 560px;
  margin-inline: auto;
}

@media (max-width: 960px) {
  .comprar__layout { grid-template-columns: 1fr; max-width: 560px; }
  .comprar__sidebar { display: none; }
  .comprar__mobile-urgency { display: flex; }
}
</style>
