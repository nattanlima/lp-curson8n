<template>
  <div class="screen-mockup">
    <div class="screen-mockup__logo" aria-hidden="true">n8n</div>

    <div class="monitor">
      <div class="monitor__top-bar">
        <span class="monitor__dot monitor__dot--red"></span>
        <span class="monitor__dot monitor__dot--yellow"></span>
        <span class="monitor__dot monitor__dot--green"></span>
        <span class="monitor__filename">workflow · n8n</span>
      </div>
      <div class="monitor__screen">
        <iframe
          class="monitor__video"
          :src="youtubeEmbedUrl"
          title="Vídeo n8n — YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div class="monitor__screen-overlay" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// YouTube: sem controles, só o vídeo (autoplay + mute para funcionar)
const VIDEO_ID = 'D1QW0vGVdQc'
const youtubeEmbedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&rel=0`
</script>

<style scoped>
.screen-mockup {
  width: 100%;
  max-width: 480px;
  position: relative;
}

.screen-mockup__logo {
  position: absolute;
  top: 12px;
  right: 20px;
  z-index: 2;
  font-family: 'DM Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ea4b71;
  opacity: 0.9;
  letter-spacing: -0.02em;
}

/* Moldura do monitor = tela do PC (sem base para evitar elemento estranho no rodapé) */
.monitor {
  background: #0f172a;
  border-radius: 16px;
  padding: 0;
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.45),
    0 12px 24px rgba(245, 158, 11, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

/* Barra superior (estilo janela macOS / VS Code) */
.monitor__top-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px 10px 16px;
  background: #0a0f1e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.monitor__dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.monitor__dot--red   { background: #ff5f57; }
.monitor__dot--yellow { background: #febc2e; }
.monitor__dot--green { background: #28c840; }

.monitor__filename {
  margin-left: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
}

/* Área da tela = onde fica o vídeo */
.monitor__screen {
  position: relative;
  aspect-ratio: 16 / 10;
  min-height: 240px;
  width: 100%;
  background: #0f172a;
  overflow: hidden;
}

.monitor__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  border: none;
  z-index: 0;
}

.monitor__screen-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 85%,
    rgba(2, 6, 23, 0.2) 100%
  );
}

/* Mobile: área do vídeo maior, bordas menores */
@media (max-width: 600px) {
  .screen-mockup {
    max-width: 100%;
    padding: 0 4px;
  }
  .monitor {
    border-width: 1px;
    border-radius: 12px;
  }
  .monitor__top-bar {
    padding: 8px 10px 8px 12px;
    gap: 6px;
  }
  .monitor__filename { font-size: 10px; }
  .monitor__screen {
    min-height: 200px;
  }
}
</style>
