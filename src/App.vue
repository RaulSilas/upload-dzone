<template>
  <div id="app">
    <vue-dropzone ref="fileDropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue-dropzone>
  
    <div v-if="files.length > 0">
      <div v-for="file in files" :key="file.src">
        <img :src="file.src">
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import vue2Dropzone from 'vue2-dropzone';
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");


export default {
  name: 'App',
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      files: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 250,
        thumnailHeight: 250,
        addRemoveLinks: false,
        acceptedFiles: ".xlsx, .xls"
      }
    }
  },
  methods: {
    async afterComplete(file) {
      try {
        const fileName = uuid.v1();
        const metaData = {
          contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }

        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(`images/${fileName}.xlsx`);

        await fileRef.put(file, metaData);

        const downloadUrl = await fileRef.getDownloadURL();

        this.files.push({ src: downloadUrl });

        this.$refs.fileDropzone.removeFile(file);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

  .img-div {
    display: flex;
    margin: 25px;
  }

  img {
    max-width: 250px;
    margin: 15px;
  }

</style>
