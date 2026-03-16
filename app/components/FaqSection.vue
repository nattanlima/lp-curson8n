<template>
  <section class="section-dark-alt" id="faq" style="padding: var(--section-pad)">
    <div class="container container--narrow">
      <div class="section-headline reveal">
        <div class="badge badge-gold" style="margin-bottom:20px">Dúvidas</div>
        <h2>Perguntas frequentes</h2>
        <p>Respondo aqui o que todo mundo pergunta antes de comprar.</p>
      </div>

      <div class="faq__list reveal reveal-delay-1">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="glass faq__item"
          :class="{ 'faq__item--open': openIndex === i }"
        >
          <button
            class="faq__question"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span>{{ item.q }}</span>
            <svg
              class="faq__chevron"
              width="20" height="20" viewBox="0 0 20 20"
              fill="none" aria-hidden="true"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <Transition name="faq">
            <div v-if="openIndex === i" class="faq__answer">
              <p>{{ item.a }}</p>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA abaixo -->
      <div class="faq__cta reveal">
        <p>Ainda tem dúvida? Fala comigo no WhatsApp.</p>
        <a
          :href="`https://wa.me/${config.public.whatsappNumber}`"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const openIndex = ref<number | null>(0)
function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    q: 'Preciso saber programar para fazer o curso?',
    a: 'Não. O N8N foi criado para quem não é desenvolvedor. Você vai criar automações arrastando e conectando blocos visualmente. Se você sabe usar um celular, consegue usar o N8N.',
  },
  {
    q: 'O curso é gravado ou ao vivo?',
    a: '100% ao vivo. Não é curso gravado — você participa em tempo real nos 4 sábados, tira dúvidas na hora e monta as automações junto com o instrutor. As gravações ficam disponíveis após cada aula só para revisão.',
  },
  {
    q: 'Vou ter acesso às gravações das aulas?',
    a: 'Sim, como bônus. As gravações ficam disponíveis logo após cada aula ao vivo para você rever. Mas o curso em si é ao vivo — a experiência principal é participar em tempo real.',
  },
  {
    q: 'Em que horário são as aulas aos sábados?',
    a: 'As aulas são aos sábados de 04/04 a 25/04/2026, às 9h (horário de Brasília). Duração de 2h cada.',
  },
  {
    q: 'Para qual tipo de negócio é indicado?',
    a: 'Dono de e-commerce, agência, consultor, prestador de serviços, infoprodutor, equipe comercial — qualquer negócio que usa WhatsApp para vender ou atender clientes. Se você tem cliente e quer automatizar, o curso serve para você. Veja a seção "Para quem é" para mais detalhes.',
  },
  {
    q: 'Qual plataforma vou usar durante o curso?',
    a: 'O N8N, que pode ser instalado gratuitamente para aprender. Vamos mostrar instalação local e hospedagem em servidor — do básico ao avançado.',
  },
  {
    q: 'Tem suporte depois do curso?',
    a: 'Sim. Você entra no grupo fechado no WhatsApp com mais de 1.500 empresários, onde tira dúvidas e compartilha suas automações. O acompanhamento é contínuo para você implementar tudo após as aulas.',
  },
  {
    q: 'E se eu não gostar ou não conseguir acompanhar?',
    a: 'Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso — devolvemos 100% do valor, sem perguntas.',
  },
]
</script>

<style scoped>
.faq__list {
  max-width: 720px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
}

.faq__item {
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.25s ease;
}

.faq__item--open {
  border-color: var(--primary-border);
}

.faq__question {
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px;
  background: none;
  border: none;
  color: var(--text);
  font-family: var(--font-headline);
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s;
  letter-spacing: -0.01em;
}

.faq__question:hover { color: var(--primary); }
.faq__item--open .faq__question { color: var(--primary); }

.faq__chevron {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: currentColor;
}
.faq__item--open .faq__chevron { transform: rotate(180deg); }

.faq__answer {
  padding: 0 24px 20px;
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
}

/* Transition */
.faq-enter-active, .faq-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.faq-enter-from, .faq-leave-to {
  opacity: 0;
  max-height: 0;
  padding-bottom: 0;
}
.faq-enter-to, .faq-leave-from {
  opacity: 1;
  max-height: 300px;
}

.faq__cta {
  max-width: 720px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.faq__cta p {
  font-size: 15px;
  color: var(--text-secondary);
}
</style>
