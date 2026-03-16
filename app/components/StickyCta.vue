<template>
  <div class="sticky-cta">
    <a href="#comprar" class="sticky-cta__btn">
      Garantir minha vaga — R$ 997,50
    </a>
  </div>
</template>

<style scoped>
.sticky-cta {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  padding: 12px 16px;
  padding-bottom: max(12px, env(safe-area-inset-bottom));
  background: rgba(2, 6, 23, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--primary-border);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.3);
}

.sticky-cta__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 52px;
  padding: 14px 24px;
  background: var(--primary);
  color: var(--bg);
  font-family: var(--font-headline);
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: var(--radius-lg);
  border: 2px solid var(--primary);
  box-shadow: var(--shadow-primary);
  transition: background 0.2s, transform 0.2s;
}

.sticky-cta__btn:active {
  transform: scale(0.98);
}

@media (max-width: 679px) {
  .sticky-cta {
    display: block;
  }
}

@media (min-width: 680px) {
  .sticky-cta {
    display: none;
  }
}
</style>
