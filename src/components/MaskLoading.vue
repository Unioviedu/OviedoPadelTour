<template>
  <div v-if="active" class="mask_loading">
    <div class="content">
      <img class="content_img" :src="img" />
      <span class="content_text">
        Cargando
        <span class="dot1">.</span>
        <span class="dot2">.</span>
        <span class="dot3">.</span>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'
import logo from '@/assets/images/loading.png'

export default defineComponent({
  name: 'MaskLoading',
  props: {
    active: Boolean
  },
  setup (props) {
    const img = logo

    watchEffect(() => {
      document.body.style.overflow = props.active
        ? 'hidden'
        : 'initial'
    })

    return { img }
  }
})
</script>

<style lang="scss" scoped>
.mask_loading {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);

  .content {
    display: flex;
    flex-direction: column;

    &_text {
      margin-top:20px;
      color: white;
      font-size: 2rem;
      font-weight: 600;
    }

    &_img {
      height: 300px;
      animation: lds-hourglass 4s infinite;
    }

    @keyframes lds-hourglass {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }

      .dot1 {
        animation: visibility 3s linear infinite;
      }

      @keyframes visibility {
        0% {
          opacity: 1;
        }
        65% {
          opacity: 1;
        }
        66% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }

      .dot2 {
        animation: visibility2 3s linear infinite;
      }

      @keyframes visibility2 {
        0% {
          opacity: 0;
        }
        21% {
          opacity: 0;
        }
        22% {
          opacity: 1;
        }
        65% {
          opacity: 1;
        }
        66% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }

      .dot3 {
        animation: visibility3 3s linear infinite;
      }
      @keyframes visibility3 {
        0% {
          opacity: 0;
        }
        43% {
          opacity: 0;
        }
        44% {
          opacity: 1;
        }
        65% {
          opacity: 1;
        }
        66% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }
}
</style>
