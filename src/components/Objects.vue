<template>
  <div class="objetsContainer">
    <router-link
      :to="{path: '/'+ $route.params.id +'/'+ object }"
      class="object"
      v-for="(object, id) in objects"
      :key="id"
    >
      <p>Objet n° {{id + 1 }}</p>
    </router-link>
  </div>
</template>

<script>
import { getObjectsByDepartmentIdSrv } from "../services/metSrv";
export default {
  name: "objects",
  data: () => ({
    objects: []
  }),
  created() {
    console.log(this.$route.params.id);
    this.getObjects();
  },
  methods: {
    getObjects: async function() {
      this.objects = await getObjectsByDepartmentIdSrv(this.$route.params.id);
    }
  }
};
</script>

<style>
.objetsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.object {
  margin: 1%;
  padding: 1%;
  border: solid 1px grey;
  border-radius: 7px;
}
div a {
  text-decoration: none;
}
</style>