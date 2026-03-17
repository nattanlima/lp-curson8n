<template>
  <section class="section-dark-alt" id="para-quem" style="padding: var(--section-pad)">
    <div class="container container--narrow">
      <div class="section-headline reveal">
        <div class="badge badge-gold" style="margin-bottom: 20px">Para quem é</div>
        <h2>Esse curso é para você se...</h2>
        <p>Detalhamos o perfil ideal para você saber se faz sentido.</p>
      </div>

      <div class="qualifica__intro reveal">
        <p>O curso é <strong>100% ao vivo</strong> — não é gravado. Você precisa estar presente nos 4 sábados para tirar dúvidas em tempo real e montar suas automações junto com o instrutor.</p>
      </div>

      <div class="qualifica__grid">
        <div class="glass qualifica__card qualifica__card--sim reveal">
          <h3 class="qualifica__title">É para você</h3>
          <ul class="qualifica__list">
            <li v-for="(item, i) in paraQuem" :key="i">{{ item }}</li>
          </ul>
          <p class="qualifica__perfis">Perfis: dono de e-commerce, agência, consultor, prestador de serviços, infoprodutor, equipe comercial — qualquer negócio que usa WhatsApp para vender ou atender.</p>
        </div>
        <div class="glass qualifica__card qualifica__card--nao reveal reveal-delay-1">
          <h3 class="qualifica__title">Não é para você</h3>
          <ul class="qualifica__list">
            <li v-for="(item, i) in naoParaQuem" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const paraQuem = [
  'Usa WhatsApp para vender ou atender clientes no dia a dia',
  'Quer automatizar sem depender de desenvolvedor ou agência',
  'Tem negócio próprio e quer reduzir trabalho manual',
  'Pode estar presente nos 4 sábados ao vivo (não é gravado)',
  'Quer grupos reduzidos e acesso ao grupo exclusivo focado no curso para implementar depois',
]

const naoParaQuem = [
  'Busca curso gravado para assistir quando quiser',
  'Não tem tempo para as 4 aulas ao vivo nos sábados',
  'Quer solução pronta sem montar nada',
  'Prefere só teoria, sem colocar a mão na massa',
]
</script>

<style scoped>
.qualifica__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 860px;
  margin-inline: auto;
}

.qualifica__card {
  border-radius: var(--radius-xl);
  padding: 28px;
  border-left: 4px solid transparent;
}

.qualifica__card--sim {
  border-left-color: var(--primary);
}

.qualifica__card--nao {
  border-left-color: var(--border-dark-2);
}

.qualifica__title {
  font-family: var(--font-headline);
  font-size: 16px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.qualifica__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.qualifica__list li {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
}

.qualifica__card--sim .qualifica__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: 700;
}

.qualifica__card--nao .qualifica__list li::before {
  content: '×';
  position: absolute;
  left: 0;
  color: var(--text-dim);
  font-weight: 700;
}

.qualifica__intro {
  text-align: center;
  margin-bottom: 32px;
  padding: 20px 24px;
  background: var(--primary-light);
  border: 1px solid var(--primary-border);
  border-radius: var(--radius-lg);
}

.qualifica__intro p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.65;
}

.qualifica__intro strong { color: var(--primary); }

.qualifica__perfis {
  font-size: 13px;
  color: var(--text-dim);
  line-height: 1.5;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-dark);
}

@media (max-width: 640px) {
  .qualifica__grid {
    grid-template-columns: 1fr;
  }
}
</style>
