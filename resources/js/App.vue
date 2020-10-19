<template>
  <main>
    <div>
      <b-jumbotron
        class="text-white text-center"
        bg-variant="info"
        header="VueX App"
      >
      </b-jumbotron>

      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="2" class="bg-danger text-white"> col Size 2</b-col>
          <b-col
            cols="8"
            class="justify-content-md-center bg-primary text-white"
          >
            col Size 8</b-col
          >
          <b-col cols="2" class="bg-warning text-white">col Size 2</b-col>
        </b-row>
      </b-container>

      <b-modal ref="editname" id="my-modal" title="Edit Names" hide-footer>
        <b-form @submit.prevent="onEdit">
          <b-form-group
            id="input-group-1"
            label="ENTER NAME:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="name"
              value=""
              type="text"
              required
             
            ></b-form-input>
          </b-form-group>
          <div class="text-right">
            <b-button type="submit" variant="success">Edit</b-button>
           <b-button type="button" variant="info" @click="close">close</b-button>
          
          </div>
          
        </b-form>
      </b-modal>

      <br />

      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" class="bg-success text-white">
            <b-form @submit.prevent="onSubmit">
              <b-form-group
                id="input-group-1"
                label="ENTER NAME:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="name"
                  type="text"
                  required
                  placeholder="Enter Name"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger" @submit.prevent="reset"
                >Reset</b-button
              >
            </b-form>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-container class="bv-example-row">
        <b-row>
          <b-col
            cols="12"
            class="justify-content-md-center bg-primary text-white"
          >
            <h4>DATA</h4>
            <table class="table text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">NAME</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(name, index) in names" :key="index">
                  <th scope="row">{{ name.id }}</th>
                  <td>{{ name.name }}</td>
                  <td>
                    <Button class="btn btn-danger" @click="deletes(name.id)">
                      Delete</Button
                    >
                    <Button class="btn btn-info" @click="edit(name.id)">
                      Edit</Button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </main>
</template>
<script>
import { log } from 'util';
import Store from "./Store/store";

export default {
  name: "App",
  created() {
    this.namesList();
  },

  data() {
    return {
      // meg: Store.state.mesg,
      name: "",
      id:"",
      names: [],
    };
  },

  methods: {
    namesList: function () {
      this.names = Store.state.names;
    },

    close:function(){
      this.$refs.editname.hide();
    },
    edit: function (id) {
    // let editname = this.names.filter(name => name.id === id);
      const found = this.names.find(name => name.id == id);
      this.name=found.name;
      this.id=found.id;
      // console.log(found.name);
      this.$refs.editname.show();

    },
    onEdit:function(){
       Store.dispatch("editname", {
        id: this.id,
        name: this.name,
      });
        this.name="";
        this.$refs.editname.hide();
        this.namesList()
        console.log(this.names);

    },

    onSubmit: function () {
      Store.dispatch("addname", {
        id: new Date().getMinutes() + Math.floor(Math.random() * 100),
        name: this.name,
      });
      this.namesList();
      //this.addname({id: new Date().getMinutes() + Math.floor(Math.random() * 100),name:this.name})

      this.name = "";
    },
    deletes: function (userid) {
      // console.log(userid);
      // this.names = this.names.filter(name => name.id != userid);
      Store.dispatch("deletename", userid);
      this.namesList();
    },

    reset: function () {
      this.name = "";
    },
  },
};
</script>
<style  scoped>
</style>