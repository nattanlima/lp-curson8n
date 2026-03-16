<template>
  <div class="mockup">
    <!-- N8N official logo prominente -->
    <div class="n8n-logo-wrap">
      <N8nLogo />
    </div>
    <svg viewBox="0 0 440 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="mockup__svg" aria-hidden="true">
      <!-- Card background -->
      <rect x="8" y="8" width="424" height="364" rx="20" fill="#0A0F1E" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>

      <!-- Top bar -->
      <rect x="8" y="8" width="424" height="44" rx="20" fill="#0A0F1E"/>
      <rect x="8" y="30" width="424" height="22" fill="#0A0F1E"/>
      <circle cx="34" cy="30" r="5.5" fill="#FF5F57"/>
      <circle cx="52" cy="30" r="5.5" fill="#FEBC2E"/>
      <circle cx="70" cy="30" r="5.5" fill="#28C840"/>
      <text x="88" y="35" font-family="DM Mono, monospace" font-size="11" fill="rgba(255,255,255,0.25)">workflow-n8n · turma-abril-2026.json</text>

      <!-- Horizontal line below header -->
      <line x1="8" y1="52" x2="432" y2="52" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

      <!-- Animated connectors -->
      <line x1="128" y1="136" x2="176" y2="136" stroke="#F59E0B" stroke-width="2" stroke-dasharray="7 4" class="conn"/>
      <line x1="264" y1="136" x2="312" y2="136" stroke="#F59E0B" stroke-width="2" stroke-dasharray="7 4" class="conn conn2"/>
      <line x1="220" y1="172" x2="220" y2="220" stroke="#F59E0B" stroke-width="2" stroke-dasharray="7 4" class="conn conn3"/>
      <line x1="128" y1="260" x2="176" y2="260" stroke="rgba(148,163,184,0.4)" stroke-width="1.5" stroke-dasharray="5 4"/>
      <line x1="264" y1="260" x2="312" y2="260" stroke="rgba(148,163,184,0.4)" stroke-width="1.5" stroke-dasharray="5 4"/>

      <!-- Node: WhatsApp trigger -->
      <rect x="48" y="104" width="80" height="64" rx="14" fill="rgba(15,23,42,0.9)" stroke="rgba(37,211,102,0.5)" stroke-width="1.5"/>
      <rect x="56" y="112" width="26" height="26" rx="7" fill="#25D366"/>
      <text x="64" y="129" font-family="DM Mono,monospace" font-size="14" fill="white" font-weight="700">W</text>
      <text x="58" y="150" font-family="Open Sans,sans-serif" font-size="9.5" fill="#F8FAFC" font-weight="600">WhatsApp</text>
      <text x="62" y="162" font-family="Open Sans,sans-serif" font-size="9" fill="#94A3B8">Trigger</text>
      <circle cx="128" cy="136" r="4" fill="#25D366"/>

      <!-- Node: n8n Router (center — primary color amber) -->
      <rect x="184" y="104" width="72" height="64" rx="14" fill="rgba(15,23,42,0.9)" stroke="#F59E0B" stroke-width="2.5" class="node-glow"/>
      <!-- n8n mini logo inside -->
      <text x="194" y="128" font-family="DM Mono,monospace" font-size="12" fill="#F59E0B" font-weight="700">n8n</text>
      <text x="195" y="142" font-family="Open Sans,sans-serif" font-size="9" fill="#94A3B8">Router</text>
      <text x="195" y="154" font-family="Open Sans,sans-serif" font-size="8.5" fill="rgba(148,163,184,0.5)">if / switch</text>
      <circle cx="184" cy="136" r="4" fill="#F59E0B"/>
      <circle cx="256" cy="136" r="4" fill="#F59E0B"/>
      <circle cx="220" cy="168" r="4" fill="#F59E0B"/>

      <!-- Node: CRM -->
      <rect x="312" y="104" width="80" height="64" rx="14" fill="rgba(15,23,42,0.9)" stroke="rgba(245,158,11,0.35)" stroke-width="1.5"/>
      <rect x="320" y="112" width="26" height="26" rx="7" fill="rgba(245,158,11,0.15)"/>
      <text x="326" y="129" font-family="DM Mono,monospace" font-size="13" fill="#F59E0B">◈</text>
      <text x="322" y="150" font-family="Open Sans,sans-serif" font-size="9.5" fill="#F8FAFC" font-weight="600">CRM</text>
      <text x="322" y="162" font-family="Open Sans,sans-serif" font-size="9" fill="#94A3B8">Criar lead</text>
      <circle cx="312" cy="136" r="4" fill="#F59E0B"/>

      <!-- Node: Google Sheets -->
      <rect x="184" y="220" width="72" height="64" rx="14" fill="rgba(15,23,42,0.9)" stroke="rgba(66,133,244,0.4)" stroke-width="1.5"/>
      <rect x="192" y="228" width="22" height="22" rx="5" fill="#0F9D58"/>
      <text x="197" y="243" font-family="DM Mono,monospace" font-size="12" fill="white">≡</text>
      <text x="193" y="264" font-family="Open Sans,sans-serif" font-size="9" fill="#F8FAFC" font-weight="600">Sheets</text>
      <text x="193" y="276" font-family="Open Sans,sans-serif" font-size="9" fill="#94A3B8">Registrar</text>
      <circle cx="220" cy="220" r="4" fill="#4285F4"/>

      <!-- Node: Meta Ads -->
      <rect x="48" y="228" width="80" height="64" rx="14" fill="rgba(15,23,42,0.9)" stroke="rgba(24,119,242,0.35)" stroke-width="1.5"/>
      <rect x="56" y="236" width="26" height="26" rx="7" fill="#1877F2"/>
      <text x="64" y="253" font-family="DM Mono,monospace" font-size="14" fill="white" font-weight="700">f</text>
      <text x="58" y="274" font-family="Open Sans,sans-serif" font-size="9.5" fill="#F8FAFC" font-weight="600">Meta Ads</text>
      <text x="60" y="286" font-family="Open Sans,sans-serif" font-size="9" fill="#94A3B8">Evento</text>
      <circle cx="128" cy="260" r="4" fill="#1877F2"/>

      <!-- Node: Notificação -->
      <rect x="312" y="228" width="80" height="64" rx="14" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.25)" stroke-width="1.5"/>
      <text x="338" y="258" font-family="DM Mono,monospace" font-size="22" fill="rgba(148,163,184,0.7)">🔔</text>
      <text x="318" y="278" font-family="Open Sans,sans-serif" font-size="9" fill="#F8FAFC" font-weight="600">Notificação</text>
      <text x="324" y="290" font-family="Open Sans,sans-serif" font-size="9" fill="#94A3B8">Equipe</text>
      <circle cx="312" cy="260" r="4" fill="#94A3B8"/>

      <!-- Status bar -->
      <rect x="24" y="320" width="392" height="34" rx="10" fill="rgba(2,6,23,0.8)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <circle cx="44" cy="337" r="5" fill="#F59E0B"/>
      <text x="56" y="341" font-family="DM Mono,monospace" font-size="10" fill="#F59E0B">● ativo</text>
      <text x="106" y="341" font-family="DM Mono,monospace" font-size="10" fill="rgba(148,163,184,0.4)">|</text>
      <text x="116" y="341" font-family="DM Mono,monospace" font-size="10" fill="#64748B">execuções: 1.247</text>
      <text x="270" y="341" font-family="DM Mono,monospace" font-size="10" fill="rgba(148,163,184,0.4)">|</text>
      <text x="280" y="341" font-family="DM Mono,monospace" font-size="10" fill="rgba(100,116,139,0.5)">última: 3s atrás</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
// N8N Logo como componente inline
const N8nLogo = defineComponent({
  render: () => h('svg', {
    width: '80', height: '28', viewBox: '0 0 120 40', fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg', style: 'display:block'
  }, [
    h('text', {
      x: '0', y: '30',
      'font-family': 'DM Mono, monospace',
      'font-size': '32',
      fill: '#EA4B71',
      'font-weight': '700',
    }, 'n8n'),
  ])
})
</script>

<style scoped>
.mockup {
  width: 100%;
  max-width: 480px;
  position: relative;
}

.n8n-logo-wrap {
  position: absolute;
  top: 20px;
  right: 24px;
  z-index: 2;
  opacity: 0.85;
}

.mockup__svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 32px 64px rgba(245, 158, 11, 0.10)) drop-shadow(0 8px 24px rgba(0,0,0,0.5));
}

.conn {
  stroke-dashoffset: 100;
  animation: dashflow 2.2s linear infinite;
}
.conn2 { animation-delay: 0.7s; }
.conn3 { animation-delay: 1.4s; }

.node-glow {
  animation: nodeGlow 2.5s ease-in-out infinite;
}

@keyframes nodeGlow {
  0%, 100% { stroke: #F59E0B; filter: drop-shadow(0 0 6px rgba(245,158,11,0.4)); }
  50% { stroke: #FACC15; filter: drop-shadow(0 0 16px rgba(245,158,11,0.7)); }
}
</style>
