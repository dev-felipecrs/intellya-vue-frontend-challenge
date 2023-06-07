<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '@/lib/api'
import type { User } from '@/@types'

type GetUsersOutput = {
  users: User[]
}

const users = ref<User[]>([])

onMounted(async () => {
  const { data } = await api.get<GetUsersOutput>('/db')
  users.value = data.users
})
</script>

<template>
  <main>
    <h1>Listagem de Usuários</h1>
    <p>Visualize os usuários que acessam sua plataforma.</p>

    <div class="users">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nível de Acesso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role === 'member' ? 'Membro' : 'Admin' }}</td>
            <td>
              <RouterLink :to="`/users/${user.id}`" v-bin>Visualizar</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 0 7rem 4rem;
  margin-top: 2.75rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  p {
    margin-top: 1.25rem;
  }

  .users {
    max-width: 100%;
    overflow-x: auto;

    table {
      width: 100%;
      min-width: 768px;
      margin-top: 2rem;
      border-radius: 8px;
      border: 2px solid var(--gray-100);
      border-collapse: separate;
      border-spacing: 0;
      border-radius: 8px;
      overflow: auto;

      thead {
        background: var(--gray-50);

        tr {
          th {
            text-align: start;
            padding: 1.5rem 0;
            font-weight: 700;

            &:first-child {
              padding-left: 1.5rem;
              border-top-left-radius: 8px;
            }

            &:last-child {
              padding-left: 1.5rem;
              border-top-right-radius: 8px;
            }
          }
        }
      }

      tbody {
        tr {
          &:first-child td {
            border-top: 2px solid var(--gray-100);
          }

          td {
            padding: 1.25rem 0;
            color: var(--gray-500);

            &:first-child {
              color: var(--black);
              font-weight: 700;
              padding-left: 1.5rem;
            }

            &:last-child {
              text-align: end;
              padding-right: 1.5rem;
            }

            a {
              font-weight: 700;
              text-decoration: none;
              color: var(--brown-100);
              transition: filter 0.2s;

              &:hover {
                filter: brightness(0.8);
              }
            }
          }
        }
      }
    }
  }
}
</style>
