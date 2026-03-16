<template>
  <section class="final section-dark" style="position:relative;overflow:hidden;padding-top:96px;">
    <!-- Ambient glow -->
    <div class="final__glow" aria-hidden="true"></div>
    <!-- Top line -->
    <div class="final__topline" aria-hidden="true"></div>

    <div class="container container--narrow final__inner">
      <div class="final__content reveal">
        <!-- Logo real da Prisme -->
        <div class="final__logo">
          <img
            src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/logo_canal.png"
            alt="Faz que Vende"
            width="56" height="56"
            style="border-radius: 14px; border: 1px solid rgba(255,255,255,0.1);"
          />
        </div>

        <p class="final__eyebrow font-mono">// última chamada para turma de abril</p>

        <h2 class="final__headline">
          Enquanto você lê isso, alguém no seu mercado está
          <span class="heading-gradient"> automatizando</span>.
          <br>Não fique pra trás.
        </h2>

        <p class="final__sub">
          4 sábados. Aplicação prática. <strong>R$997,50</strong>.<br>
          Grupo fechado, acompanhamento posterior e método de quem já atendeu 500+ empresários.
        </p>

        <a href="#comprar" class="btn btn-primary btn-lg final__cta">
          GARANTIR MINHA VAGA AGORA →
        </a>

        <!-- Datas finais -->
        <div class="final__dates">
          <div v-for="(aula, i) in aulas" :key="i" class="glass final__date">
            <span class="final__date-num heading-gradient">0{{ i + 1 }}</span>
            <span class="final__date-text">{{ aula }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <img
            src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/logo_canal.png"
            alt="Faz que Vende"
            width="28" height="28"
            style="border-radius: 6px;"
          />
          <span>Faz que <strong>Vende</strong></span>
        </div>
        <p class="footer__copy">© 2026 Prisme Sales · Todos os direitos reservados</p>
        <div class="footer__links">
          <a href="#">Política de privacidade</a>
          <a href="#">Termos de uso</a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
const aulas = [
  'Sábado 04/04 · Fundamentos N8N',
  'Sábado 11/04 · WhatsApp API',
  'Sábado 18/04 · Integrações',
  'Sábado 25/04 · Casos Reais',
]
</script>

<style scoped>
.final__glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(245,158,11,0.10) 0%, transparent 65%);
  pointer-events: none;
}

.final__topline {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(245,158,11,0.5), transparent);
}

.final__inner {
  position: relative;
  z-index: 1;
}

.final__content {
  text-align: center;
  max-width: 760px;
  margin-inline: auto;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.final__logo {
  margin-bottom: 32px;
}

.final__eyebrow {
  font-size: 12px;
  color: var(--text-dim);
  margin-bottom: 20px;
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
}

.final__headline {
  font-size: clamp(28px, 4.5vw, 56px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 20px;
}

.final__sub {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.7;
}

.final__sub strong { color: var(--text); }

.final__cta {
  min-width: 360px;
  justify-content: center;
  margin-bottom: 56px;
  font-size: 17px;
  letter-spacing: 0.05em;
  animation: glow-pulse 3s ease-in-out infinite;
}

.final__dates {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.final__date {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: var(--radius);
}

.final__date-num {
  font-family: var(--font-headline);
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.final__date-text {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 600;
}

/* Footer */
.footer {
  background: var(--bg-alt);
  border-top: 1px solid var(--border-dark);
  padding: 28px 24px;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-headline);
  font-size: 14px;
  font-weight: 700;
  color: var(--text-secondary);
}

.footer__brand strong { color: var(--primary); font-style: italic; }

.footer__copy {
  font-size: 12px;
  color: var(--text-dim);
}

.footer__links {
  display: flex;
  gap: 20px;
}

.footer__links a {
  font-size: 12px;
  color: var(--text-dim);
  transition: color 0.2s;
}

.footer__links a:hover { color: var(--primary); }

@media (max-width: 480px) {
  .final__cta { min-width: unset; width: 100%; }
  .final__dates { flex-direction: column; align-items: stretch; }
  .footer__inner { flex-direction: column; text-align: center; }
}
</style>
