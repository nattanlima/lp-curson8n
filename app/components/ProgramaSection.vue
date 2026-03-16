<template>
  <section class="section-dark" id="programa" style="padding: var(--section-pad)">
    <div class="container container--content">
      <div class="section-headline reveal">
        <div class="badge badge-gold" style="margin-bottom: 20px">O programa</div>
        <h2>O que você vai <span class="heading-gradient">construir</span> em cada aula</h2>
        <p>4 sábados, 2h cada. Você sai de cada aula com uma automação funcionando de verdade.</p>
      </div>

      <div class="programa__grid">
        <div
          v-for="(aula, i) in aulas"
          :key="i"
          class="glass programa__card reveal"
          :class="`reveal-delay-${i % 2 + 1}`"
        >
          <div class="programa__header">
            <span class="programa__num heading-gradient">0{{ i + 1 }}</span>
            <div class="programa__date-badge">{{ aula.date }}</div>
          </div>

          <div class="programa__divider"></div>

          <h3 class="programa__title">{{ aula.title }}</h3>

          <ul class="programa__topics">
            <li v-for="(t, j) in aula.topics" :key="j">
              <span aria-hidden="true">›</span> {{ t }}
            </li>
          </ul>

          <!-- Entrega prática — destaque -->
          <div class="programa__entrega">
            <div class="programa__entrega-header">
              <span aria-hidden="true">🎯</span>
              <span>Você sai dessa aula com:</span>
            </div>
            <p class="programa__entrega-text">{{ aula.entrega }}</p>
          </div>
        </div>
      </div>

      <!-- CTA abaixo do programa -->
      <div class="programa__bottom reveal">
        <a href="#comprar" class="btn btn-primary btn-lg">
          Quero construir isso tudo →
        </a>
        <p>Cada aula entrega resultado concreto. Não só teoria.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const aulas = [
  {
    date: '04/04 · Sábado',
    title: 'Fundamentos + Instalação',
    topics: [
      'Instalação local e em servidor (passo a passo)',
      'Primeiro workflow do zero com boas práticas',
      'Lógica de automação visual com nodes e condições',
      'Conectar N8N ao WhatsApp para respostas iniciais',
    ],
    entrega: 'Fluxo de boas-vindas no WhatsApp rodando e pronto para adaptar ao seu negócio',
  },
  {
    date: '11/04 · Sábado',
    title: 'WhatsApp + Situações Reais de Atendimento',
    topics: [
      'Configuração prática da API oficial do WhatsApp',
      'Situação 1: lead novo pedindo orçamento',
      'Situação 2: cliente sem resposta em horário comercial',
      'Ramificações inteligentes com fallback para humano',
    ],
    entrega: 'Atendimento automático com regras reais para pré-venda e suporte',
  },
  {
    date: '18/04 · Sábado',
    title: 'IA + Banco de Dados + Integrações',
    topics: [
      'Como usar IA para classificar e responder mensagens',
      'Banco de dados para histórico, contexto e memória de atendimento',
      'CRM + planilhas + APIs externas + webhooks',
      'Notificações automáticas para equipe comercial',
    ],
    entrega: 'Fluxo com IA e banco de dados para qualificar leads e registrar tudo automaticamente',
  },
  {
    date: '25/04 · Sábado',
    title: 'Escala, Monitoramento e Pós-venda',
    topics: [
      'Situação 3: recuperação de carrinho e reativação de leads',
      'Situação 4: pós-venda e acompanhamento automático de clientes',
      'Monitoramento, alertas e manutenção sem depender de dev',
      'Plano de evolução dos seus fluxos após o curso',
    ],
    entrega: 'Estrutura pronta para escalar automações e manter ganhos no acompanhamento posterior',
  },
]
</script>

<style scoped>
.programa__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}

.programa__card {
  border-radius: var(--radius-xl);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.programa__card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.programa__card:hover {
  border-color: var(--border-dark-2);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(245,158,11,0.06);
}

.programa__card:hover::before { opacity: 1; }

.programa__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.programa__num {
  font-family: var(--font-headline);
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
}

.programa__date-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-dim);
  text-align: right;
  line-height: 1.4;
  padding: 6px 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-dark);
  border-radius: var(--radius);
}

.programa__divider {
  height: 1px;
  background: var(--border-dark);
  margin-bottom: 20px;
}

.programa__title {
  font-family: var(--font-headline);
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.programa__topics {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  flex: 1;
}

.programa__topics li {
  font-size: 14px;
  color: var(--text-secondary);
  display: flex;
  gap: 8px;
  align-items: flex-start;
  line-height: 1.5;
}

.programa__topics li span {
  color: var(--primary);
  font-size: 16px;
  flex-shrink: 0;
  line-height: 1.4;
}

.programa__entrega {
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  border-radius: var(--radius);
  padding: 16px;
}

.programa__entrega-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-family: var(--font-headline);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
  margin-bottom: 8px;
}

.programa__entrega-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.4;
}

.programa__bottom {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.programa__bottom p {
  font-size: 14px;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .programa__grid { grid-template-columns: 1fr; }
}
</style>
