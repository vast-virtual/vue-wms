<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>

      <el-table-column label="Name">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
      <template slot-scope="scope">
      <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | formatStatus }}</el-tag>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getQuery } from '@/api/demo/query'
  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          0: 'success',
          1: 'gray',
          2: 'danger'
        }
        return statusMap[status]
      },
      formatStatus(status) {
        const statusMap = {
          0: '正常',
          1: '删除',
          2: '禁用'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.listLoading = true;
        getQuery().then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      }
    }

  }
</script>
