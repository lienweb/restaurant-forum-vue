<template>
  <div class="container py-5">
    <AdminNav />
    <form class="my-4">
      <div class="form-row input-group">
        <div class="col-auto me-1">
          <input type="text" class="form-control" placeholder="新增餐廳類別..." v-model="newCategory">
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-primary" @click.prevent.stop="createCategory">
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
              @click.stop.prevent="updateCategory(category.id)">
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
import { v4 as uuidv4 } from 'uuid'

//  2. 定義暫時使用的資料
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}

export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data () {
    return {
      categories: [],
      newCategory: ''
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created () {
    this.fetchCategories()
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    fetchCategories () {
      // 添加屬性到原資料
      this.categories = dummyData.categories.map(category => {
        return {
          ...category,
          isEditing: false,
          nameCached: ''
        }
      })
      // or ({})
    },
    createCategory () {
      // API向後端伺服器新增類別
      this.categories.push({
        id: uuidv4(),
        name: this.newCategory
      })
      this.newCategory = ''
    },
    deleteCategory (categoryId) {
      // TODO: 透過 API 告知伺服器欲刪除的餐廳類別
      // 將該餐廳類別從陣列中移除
      this.categories = this.categories.filter(category => category.id !== categoryId)
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
    updateCategory (categoryId) {
      // TODO: 透過API像伺服器更新類別
      // press save, flag turn off
      this.toggleIsEditing(categoryId)
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
