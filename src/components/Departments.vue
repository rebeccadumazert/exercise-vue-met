<template>
  <div>
    <h1>DEPARTEMENTS</h1>
    <div class="departmentsContainer">
      <router-link
        v-for="(department, id) in departments"
        :to="{path: '/'+department.departmentId }"
        class="department"
        :key="id"
      >
        <p>{{department.displayName}}</p>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { getDepartmentsSrv } from "../services/metSrv";

export default {
  name: "departments",
  data: () => ({
    departments: []
  }),
  created() {
    this.getDepartments();
  },
  methods: {
    getDepartments: async function() {
      this.departments = await getDepartmentsSrv();
    }
  }
};
</script>

<style>
.departmentsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.department {
  border: solid 1px grey;
  width: 200px;
  margin: 1%;
  padding: 1%;
  border-radius: 7px;
}
div a {
  text-decoration: none;
  color: black;
}
</style>
