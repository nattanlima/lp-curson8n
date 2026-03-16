<template>
  <section class="section-dark-alt" id="problema" style="padding: var(--section-pad)">
    <div class="container container--content">
      <div class="section-headline reveal">
        <div class="badge badge-gold" style="margin-bottom: 20px">O problema</div>
        <h2>Reconhece alguma dessas situações?</h2>
        <p>Esses problemas custam leads, tempo e dinheiro — todo dia.</p>
      </div>

      <div class="grid-2 problema__grid">
        <div
          v-for="(item, i) in problems"
          :key="i"
          class="glass problema__card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="problema__icon-wrap">
            <span class="problema__emoji" aria-hidden="true">{{ item.emoji }}</span>
          </div>
          <div class="problema__body">
            <h3 class="problema__title">{{ item.title }}</h3>
            <p class="problema__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Empathy close -->
      <div class="problema__empathy reveal">
        <div class="problema__quote-mark" aria-hidden="true">&ldquo;</div>
        <p>
          Se você marcou pelo menos 2 situações acima, o N8N vai resolver isso nas 4 primeiras horas de aula.
        </p>
        <a href="#comprar" class="btn btn-primary problema__cta">Quero resolver isso →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const problems = [
  {
    emoji: '📱',
    title: 'WhatsApp virando um segundo trabalho',
    desc: 'Você ou sua equipe passam horas respondendo as mesmas perguntas, perdendo tempo que poderia estar em vendas.',
  },
  {
    emoji: '💸',
    title: 'Lead perdido por demora na resposta',
    desc: 'O cliente perguntou, você demorou 20 minutos, ele já comprou do concorrente. Acontece todo dia.',
  },
  {
    emoji: '🔧',
    title: 'Pagar dev caro pra fazer coisa simples',
    desc: 'Automações básicas custam fortunas porque você depende de terceiros pra tudo que parece "técnico".',
  },
  {
    emoji: '🗂️',
    title: 'Ferramentas que não se falam',
    desc: 'CRM numa planilha, WhatsApp no celular, pedidos no e-mail. Nenhuma ferramenta conversa com a outra.',
  },
  {
    emoji: '🤖',
    title: 'Quer usar IA, mas sem processo vira bagunça',
    desc: 'Você até testa IA para responder clientes, mas sem fluxo e sem dados organizados o atendimento fica inconsistente.',
  },
  {
    emoji: '📉',
    title: 'Pós-venda esquecido e cliente esfriando',
    desc: 'Depois da compra ninguém acompanha. Resultado: menos recompra, menos indicação e menos previsibilidade.',
  },
]
</script>

<style scoped>
.problema__grid {
  margin-bottom: 56px;
}

.problema__card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  border-radius: var(--radius-xl);
  padding: 28px;
  border-left: 3px solid rgba(245, 158, 11, 0.40);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.problema__card:hover {
  border-left-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(245, 158, 11, 0.08);
}

.problema__icon-wrap {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: var(--radius);
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.problema__emoji {
  font-size: 24px;
}

.problema__body { flex: 1; }

.problema__title {
  font-family: var(--font-headline);
  font-size: 16px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.3;
}

.problema__desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Empathy quote */
.problema__empathy {
  position: relative;
  max-width: 640px;
  margin-inline: auto;
  text-align: center;
  padding: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border-dark-2);
  border-radius: var(--radius-xl);
}

.problema__quote-mark {
  font-family: var(--font-headline);
  font-size: 80px;
  font-weight: 900;
  color: rgba(245, 158, 11, 0.15);
  line-height: 0.5;
  margin-bottom: 16px;
}

.problema__empathy p {
  font-family: var(--font-headline);
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
}

.problema__cta {
  margin-top: 8px;
}

@media (max-width: 768px) {
  .problema__card { flex-direction: column; gap: 12px; }
}
</style>
