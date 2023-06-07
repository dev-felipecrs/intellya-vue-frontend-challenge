<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <header>
    <div>
      <img src="/logo.png" alt="Intellya" />

      <nav>
        <RouterLink to="/users">Usuários</RouterLink>
      </nav>
    </div>

    <SearchBar />
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  padding: 0 7rem;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 1.5rem;
    gap: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 100%;

    img {
      max-width: 8.25rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 100%;

      @media (max-width: 480px) {
        height: 2rem;
      }

      a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-weight: 700;
        color: var(--black);
        text-decoration: none;

        &.router-link-exact-active::after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: var(--yellow-100);
        }
      }
    }
  }
}
</style>
