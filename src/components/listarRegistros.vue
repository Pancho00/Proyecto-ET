<template>
  <div>
  <h3>Listado de registros de zmorrott0</h3>
    <v-list>
        <v-list-tile v-for="session in session" :key="session.id">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{{session.date}}</div>
            {{session.duration}}
            </div>
            <span class="badge bg-primary rounded-pill">{{session.score}}</span>
            </li>
        </v-list-tile>
    
</v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
     session: [
      { id: '1',date:'02/11/2021',score:'3.9',duration:'60'},
      { id: '2',date:'09/14/2021',score:'1.6',duration:'13'},
      { id: '3',date:'04/19/2021',score:'4.1',duration:'47'},
      { id: '4',date:'03/10/2021',score:'1.2',duration:'32'},
      { id: '5',date:'02/06/2022',score:'1.5',duration:'56'},

    ]
    };
  },
};
</script>

<style scoped>

.list-group-item{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        
        font-size: 20px;
        padding: 20px;
         
    }




.sesion {
}
</style>