import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        mesg: "Hello World from Updates",
        names: [
            { id: 1, name: "Ashan" },
        ],
    },


    mutations: {
        newname: (state, newdata) => {
            state.names = [newdata, ...state.names]
        },
        delname: (state, id) => {
                // console.log(id);
            // state.names = [{id:id,name:${id}}, ...state.names];
              state.names = state.names.filter(name => name.id != id);
         },

         editdata: (state,data)=>{
            let edit= state.names.map( (name) =>{
                if(name.id==data.id){
                    name.name=data.name;
                }

            });
         }

    },
    actions: {
        addname: (context, username) => {
            context.commit("newname", username)

        },
        deletename: (context, id) => {
            context.commit("delname", id)
        },

        editname:(context,editdata)=>{
            context.commit("editdata",editdata)
        }
    }
});
