<template>
  <div>
    <h1>{{objectDetails.title}}</h1>
    <p>Culture : {{objectDetails.culture}}</p>
    <p>Département de l'objet : {{objectDetails.department}}</p>
    <a :href="objectDetails.url" target="_blank">En savoir plus sur cet objet</a>
  </div>
</template>

<script>
import { getObjectByIdSrv } from "../services/metSrv";
export default {
  name: "objectDetail",
  data: () => ({
    objectDetails: {}
  }),
  created() {
    this.getObjectById();
  },
  methods: {
    getObjectById: async function() {
      this.objectDetails = await getObjectByIdSrv(this.$route.params.objectId);
    }
  }
};
</script>

<style>

</style>