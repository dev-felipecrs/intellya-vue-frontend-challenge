<script lang="ts">
import SearchIconVue from './icons/SearchIcon.vue'

type User = {
  id: number
  name: string
  email: string
  role: 'member' | 'admin'
  active: boolean
  created_at: string
}

export default {
  data() {
    return {
      search: '',
      users: [] as User[]
    }
  },
  methods: {
    getUsers() {
      fetch('http://localhost:3000/db', {
        headers: {
          'x-api-key': '70335667-2408-4011-a994-ea3e7042d96f'
        }
      })
        .then((data) => data.json())
        .then(
          ({ users }) =>
            (this.users = users.filter((user: User) =>
              user.name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .includes(
                  this.search
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                )
            ))
        )
    },
    cleanSearch() {
      this.search = ''
    }
  },
  mounted() {
    this.getUsers()
  },
  watch: {
    search() {
      this.getUsers()
    }
  },
  components: {
    SearchIconVue
  }
}
</script>

<template>
  <div class="container">
    <label>
      <div class="icon">
        <SearchIconVue />
      </div>
      <input type="text" placeholder="Buscar" v-model="search" />
    </label>

    <ul v-if="search.length > 3">
      <li v-for="user in users" :key="user.id" @click="cleanSearch">
        <RouterLink :to="`/users/${user.id}`">{{ user.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;

  > label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--gray-100);

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0;
    }

    input {
      display: block;
      height: 100%;
      font-size: 1rem;
      border: 0;
      outline: 0;

      &::placeholder {
        color: var(--gray-100);
      }
    }
  }

  > ul {
    position: absolute;
    top: calc(100% + 1rem);
    width: 100%;

    background: var(--white);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    list-style: none;

    li {
      padding: 1rem;

      a {
        display: block;
        font-weight: 700;
        color: var(--black);
        text-decoration: none;
        width: 100%;
      }
    }
  }
}
</style>
