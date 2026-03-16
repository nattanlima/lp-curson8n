<template>
  <section class="section-dark-alt" id="prova" style="padding: var(--section-pad)">
    <div class="container container--content">
      <div class="section-headline reveal">
        <div class="badge badge-gold" style="margin-bottom: 20px">Prova social</div>
        <h2>Resultados de quem aplicou e continuou no acompanhamento</h2>
        <p>Foco em execução real com grupo fechado, trocas constantes e evolução após as aulas.</p>
      </div>

      <div class="grid-3 prova__grid">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="glass prova__card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <p class="prova__context">{{ t.context }}</p>
          <div class="prova__stars">★★★★★</div>
          <blockquote class="prova__quote">"{{ t.quote }}"</blockquote>
          <div class="prova__footer">
            <div class="prova__avatar" :style="{ background: t.bgColor }">
              <span>{{ t.initials }}</span>
            </div>
            <div class="prova__info">
              <strong>{{ t.name }}</strong>
              <span>{{ t.role }}</span>
            </div>
            <div class="prova__kpi">
              <span class="prova__kpi-num heading-gradient">{{ t.kpi }}</span>
              <span class="prova__kpi-lbl">{{ t.kpiLabel }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust bar -->
      <div class="prova__trust reveal">
        <div class="prova__trust-stars">★★★★★</div>
        <p>Mais de <strong>500 empresários atendidos</strong> em <strong>6 anos de consultoria</strong>, com comunidade de <strong>1.500 pessoas no WhatsApp</strong></p>
      </div>
      <div class="prova__cta-wrap reveal">
        <a href="#comprar" class="btn btn-primary">Garantir minha vaga →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    context: 'E-commerce de moda, equipe de 3 pessoas',
    quote: 'Antes passava o dia inteiro respondendo WhatsApp. Com as automações, minha equipe agora tem tempo pra vender de verdade. Os resultados foram imediatos.',
    name: 'Carlos M.',
    role: 'Dono de e-commerce',
    initials: 'CM',
    bgColor: 'rgba(245,158,11,0.15)',
    kpi: '+40%',
    kpiLabel: 'nas vendas',
  },
  {
    context: 'Agência de marketing, 8 clientes',
    quote: 'Reduzi meu custo operacional em 50% em 3 meses. O N8N conectou CRM, WhatsApp e planilhas sem contratar desenvolvedor. O grupo fechado me ajudou a tirar dúvidas na hora.',
    name: 'Ana P.',
    role: 'Agência de marketing',
    initials: 'AP',
    bgColor: 'rgba(234,75,113,0.12)',
    kpi: '-50%',
    kpiLabel: 'custo operacional',
  },
  {
    context: 'Consultor B2B, atendimento manual',
    quote: 'Meu funil funciona 24h. A consultoria mudou como enxergo processos. O acompanhamento posterior fez eu realmente implementar — não ficou só na aula.',
    name: 'Roberto K.',
    role: 'Consultor de negócios',
    initials: 'RK',
    bgColor: 'rgba(15,157,88,0.12)',
    kpi: '24/7',
    kpiLabel: 'vendas automáticas',
  },
]
</script>

<style scoped>
.prova__grid { margin-bottom: 48px; }

.prova__card {
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.prova__card:hover {
  border-color: var(--border-dark-2);
  transform: translateY(-4px);
}

.prova__context {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}

.prova__stars {
  color: var(--primary-accent);
  font-size: 16px;
  letter-spacing: 3px;
}

.prova__quote {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  font-style: italic;
  flex: 1;
}

.prova__footer {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--border-dark);
}

.prova__avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-headline);
  font-size: 14px;
  font-weight: 800;
  color: var(--text);
  flex-shrink: 0;
  border: 1px solid var(--border-dark-2);
}

.prova__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.prova__info strong {
  font-family: var(--font-headline);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}

.prova__info span {
  font-size: 11px;
  color: var(--text-dim);
}

.prova__kpi {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.prova__kpi-num {
  font-family: var(--font-headline);
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.prova__kpi-lbl {
  font-size: 10px;
  color: var(--text-dim);
  text-align: right;
}

.prova__trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 15px;
  color: var(--text-secondary);
  flex-wrap: wrap;
  text-align: center;
}

.prova__trust-stars {
  color: var(--primary-accent);
  font-size: 20px;
  letter-spacing: 3px;
}

.prova__trust strong { color: var(--text); }

.prova__cta-wrap {
  text-align: center;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .prova__grid { grid-template-columns: 1fr; }
}
</style>
