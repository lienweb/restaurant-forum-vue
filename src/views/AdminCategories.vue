<template>
  <div class="container py-5">
    <AdminNav />
    <form class="my-4">
      <div class="form-row input-group">
        <div class="col-auto me-1">
          <input type="text" class="form-control" placeholder="新增餐廳類別..." v-model="newCategory"
            @enter.prevent.stop="createCategory">
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-primary" :disabled="isProcessing" @click.prevent.stop="createCategory">
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th scope="col" width="210">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div class="category-name" v-show="!category.isEditing">
              {{ category.name }}
            </div>
            <input v-show="category.isEditing" v-model="category.name" type="text" class="form-control">
            <span v-show="category.isEditing" class="cancel" @click.prevent.stop="handleCancel(category.id)">
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button type="button" class="btn btn-link me-2" v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)">
              Edit
            </button>
            <button type="button" class="btn btn-link me-2" v-show="category.isEditing"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })">
              Save
            </button>
            <button type="button" class="btn btn-link me-2" @click.stop.prevent="deleteCategory(category.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  components: {
    AdminNav
  },
  data () {
    return {
      categories: [],
      newCategory: '',
      isProcessing: false
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories.map(category => ({
          id: category.id,
          name: category.name,
          isEditing: false,
          nameCached: ''
        }))
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別資料，請稍後再試'
        })
      }
    },
    async createCategory () {
      // API向後端伺服器新增類別
      try {
        if (!this.newCategory.trim()) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入餐廳類別'
          })
          return
        }
        this.isProcessing = true
        const { data } = await adminAPI.categories.create({ name: this.newCategory })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 成功新增，重新拉資料
        this.categories.push({
          id: data.categoryId,
          name: this.newCategory.trim(),
          isEditing: false,
          nameCached: ''
        })
        this.isProcessing = false
        this.newCategory = ''
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        this.newCategory = ''
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    async deleteCategory (categoryId) {
      try {
        const { data } = await adminAPI.categories.delete(categoryId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // 將該餐廳類別從陣列中移除
        this.categories = this.categories.filter(category => category.id !== categoryId)
        Toast.fire({
          icon: 'success',
          title: '成功刪除該餐廳類別'
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試'
        })
      }
    },
    toggleIsEditing (categoryId) {
      this.categories = this.categories.map(category => {
        return category.id === categoryId ? {
          ...category,
          isEditing: !category.isEditing,
          nameCached: category.name // temp, store previous name
        } : category
      })
    },
    async updateCategory ({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // press save, flag turn off
        this.toggleIsEditing(categoryId)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法編輯餐廳類別，請稍後再試'
        })
      }
    },
    handleCancel (categoryId) {
      // use name cache
      this.categories = this.categories.map(category => {
        return category.id === categoryId ? {
          ...category,
          name: category.nameCached,
          isEditing: !category.isEditing
        } : category
      })
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
