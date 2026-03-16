<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <!-- Logo com imagem real -->
      <a href="#" class="nav__logo" aria-label="Faz que Vende">
        <img
          src="https://raw.githubusercontent.com/nattanlima/lpconsultoria-nattan/main/public/logo_canal.png"
          alt="Faz que Vende"
          class="nav__logo-img"
          width="36" height="36"
        />
        <div class="nav__logo-text">
          <span class="nav__logo-top">Faz que</span>
          <span class="nav__logo-bottom">Vende</span>
        </div>
      </a>

      <!-- Badge -->
      <div class="badge badge-gold nav__badge">
        <span class="badge-dot"></span>
        Turma Aberta · Abril 2026
      </div>

      <!-- CTA desktop -->
      <a href="#comprar" class="btn btn-primary nav__cta">
        Garantir minha vaga →
      </a>

      <!-- Mobile toggle -->
      <button
        class="nav__hamburger"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
      >
        <span :class="{ 'open': mobileOpen }"></span>
        <span :class="{ 'open': mobileOpen }"></span>
        <span :class="{ 'open': mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="mobileOpen" class="nav__drawer">
        <p class="nav__drawer-kicker">Turma de abril com acompanhamento posterior</p>
        <a href="#programa" @click="mobileOpen = false">Programa</a>
        <a href="#para-quem" @click="mobileOpen = false">Para quem é</a>
        <a href="#instrutor" @click="mobileOpen = false">Instrutor</a>
        <a href="#faq" @click="mobileOpen = false">Perguntas</a>
        <a href="#comprar" class="btn btn-primary" style="justify-content:center" @click="mobileOpen = false">
          Garantir minha vaga →
        </a>
        <div class="nav__drawer-stats">
          <span>30k+ YouTube</span>
          <span>1.500 no grupo</span>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 40)
const mobileOpen = ref(false)
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  background: rgba(2, 6, 23, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.3);
  border-color: rgba(245, 158, 11, 0.16);
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 76px;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-decoration: none;
}

.nav__logo-img {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid var(--border-dark-2);
}

.nav__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.nav__logo-top {
  font-family: var(--font-headline);
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nav__logo-bottom {
  font-family: var(--font-headline);
  font-size: 14px;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-style: italic;
}

.nav__badge { display: none; }

.nav__cta {
  margin-left: auto;
  padding: 10px 20px;
  font-size: 12px;
  letter-spacing: 0.06em;
}

/* Hamburger */
.nav__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  flex-direction: column;
  gap: 5px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border-dark-2);
  border-radius: 12px;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.nav__hamburger:hover {
  border-color: var(--primary-border);
  background: rgba(245, 158, 11, 0.08);
}

.nav__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav__hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.nav__hamburger span.open:nth-child(2) { opacity: 0; }
.nav__hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* Drawer */
.nav__drawer {
  background: var(--bg-alt);
  border-top: 1px solid var(--border-dark);
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav__drawer-kicker {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.nav__drawer a {
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 14px 0;
  color: var(--text-secondary);
  font-family: var(--font-headline);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border-dark);
  transition: color 0.2s;
}

.nav__drawer a:last-child { border-bottom: none; margin-top: 8px; }
.nav__drawer a:hover { color: var(--primary); }

.nav__drawer-stats {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.nav__drawer-stats span {
  font-size: 10px;
  font-family: var(--font-mono);
  color: var(--text-dim);
  border: 1px solid var(--border-dark-2);
  border-radius: 999px;
  padding: 6px 10px;
}

/* Transitions */
.drawer-enter-active, .drawer-leave-active { transition: all 0.3s ease; }
.drawer-enter-from, .drawer-leave-to { opacity: 0; transform: translateY(-8px); }

@media (min-width: 680px) {
  .nav__badge { display: inline-flex; }
}

@media (max-width: 679px) {
  .nav__cta { display: none; }
  .nav__hamburger { display: flex; }
  .nav__inner { height: 72px; }
  .nav__logo-top { font-size: 11px; }
  .nav__logo-bottom { font-size: 13px; }
}
</style>
