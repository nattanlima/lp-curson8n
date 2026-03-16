<template>
  <div class="countdown-mini">
    <div v-for="(unit, i) in units" :key="i" class="countdown-mini__group">
      <div class="countdown-mini__unit">
        <span class="countdown-mini__num">{{ unit.value }}</span>
        <span class="countdown-mini__lbl">{{ unit.label }}</span>
      </div>
      <span v-if="i < units.length - 1" class="countdown-mini__sep">:</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'

const targetDate = new Date('2026-04-04T13:00:00Z')

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, '0')
}

const units = reactive([
  { value: '00', label: 'dias' },
  { value: '00', label: 'hrs' },
  { value: '00', label: 'min' },
  { value: '00', label: 'seg' },
])

function update() {
  const diff = targetDate.getTime() - Date.now()
  if (diff <= 0) return
  units[0].value = pad(Math.floor(diff / 86_400_000))
  units[1].value = pad(Math.floor((diff % 86_400_000) / 3_600_000))
  units[2].value = pad(Math.floor((diff % 3_600_000) / 60_000))
  units[3].value = pad(Math.floor((diff % 60_000) / 1_000))
}

update()
useIntervalFn(update, 1000)
</script>

<style scoped>
.countdown-mini {
  display: flex;
  align-items: center;
  gap: 4px;
}

.countdown-mini__group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.countdown-mini__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(2,6,23,0.6);
  border: 1px solid var(--border-dark-2);
  border-radius: var(--radius);
  padding: 8px 10px;
  min-width: 54px;
}

.countdown-mini__num {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--primary);
  line-height: 1;
}

.countdown-mini__lbl {
  font-size: 10px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 3px;
  font-family: var(--font-headline);
  font-weight: 700;
}

.countdown-mini__sep {
  font-family: var(--font-mono);
  font-size: 18px;
  color: var(--text-dim);
  margin-bottom: 14px;
}
</style>
