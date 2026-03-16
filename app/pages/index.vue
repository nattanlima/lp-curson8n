<template>
  <div class="page">
    <AppNav />
    <StickyCta />
    <main>
      <HeroSection />
      <ProblemaSection />
      <SolucaoSection />
      <ProgramaSection />
      <ProvaSection />
      <InstrutorSection />
      <QualificaSection />
      <ComprarSection />
      <FaqSection />
      <FinalCta />
    </main>
  </div>
</template>

<script setup lang="ts">
useScrollReveal()
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: var(--bg);
}

@media (max-width: 679px) {
  .page main {
    padding-bottom: 88px;
  }
}
</style>
