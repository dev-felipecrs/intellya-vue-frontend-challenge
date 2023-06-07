<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { api } from '@/lib/api'
import type { User } from '@/@types'

type GetUsersOutput = {
  users: User[]
}

const route = useRoute()
const user = ref<User | null>(null)

onMounted(async () => {
  const { data } = await api.get<GetUsersOutput>('/db')
  user.value = data.users.find((user) => user.id === Number(route.params.id)) || null
})
</script>

<template>
  <main>
    <h1>Usuário n° {{ user?.id }}</h1>
    <p>Visualize as informações do usuário solicitado abaixo.</p>

    <div class="user-info">
      <div class="table-container">
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <td>{{ user?.name }}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{{ user?.email }}</td>
            </tr>
            <tr>
              <th>Nível de Acesso</th>
              <td>{{ user?.role === 'member' ? 'Membro' : 'Admin' }}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{{ user?.active ? 'Ativo' : 'Inativo' }}</td>
            </tr>
            <tr>
              <th>Data de Cadastro</th>
              <td>
                {{
                  format(new Date(user?.created_at ?? new Date()), "dd/MM/yyyy 'às' HH:mm", {
                    locale: ptBR
                  })
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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

  .user-info {
    margin-top: 2.25rem;
    border-radius: 8px;
    border: 2px solid var(--gray-100);
    white-space: nowrap;

    .table-container {
      max-height: 480px;
      overflow-x: auto;
    }

    table {
      width: 100%;

      tr {
        &:not(:last-child) {
          th,
          td {
            border-bottom: 2px solid var(--gray-100);
          }
        }

        th,
        td {
          padding: 1rem;
          text-align: left;
        }

        th {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
