<template>
  <div class="container">
    <div class="event-info">
        <h6 class="text-container">Eventos</h6>
        <q-btn-dropdown
            class="btn-container"
            :label="mesName"
            rounded
        >
        <q-list v-for="(mes) in meses" :key="mes.id">
            <Meses @accion="whichItem" :mes="mes"/>
        </q-list>
        </q-btn-dropdown>
    </div>
    <div class="container-card">
      <router-link
        v-for="evento in eventos"
        :key="evento.id"
        :to="{name: 'eventos', params: {id:evento.event_id}}"
      >
        <Card
          :evento="evento"
          :mes="mesName"
          />
      </router-link>
    </div>
   </div>
</template>

<script>

import Meses from 'src/components/eventosCliente/Meses.vue'
import Card from 'src/components/eventosCliente/Card.vue'
import EventService from '../services/EventService'
// import data from 'src/components/eventosCliente/db.json'

const meses = [
  { id: '-1', name: 'Todo' },
  { id: '01', name: 'Enero' },
  { id: '02', name: 'Febrero' },
  { id: '03', name: 'Marzo' },
  { id: '04', name: 'Abril' },
  { id: '05', name: 'Mayo' },
  { id: '06', name: 'Junio' },
  { id: '07', name: 'Julio' },
  { id: '08', name: 'Agosto' },
  { id: '09', name: 'Septiembre' },
  { id: '10', name: 'Octubre' },
  { id: '11', name: 'Noviembre' },
  { id: '12', name: 'Diciembre' }
]

export default {
  data: () => ({
    meses,
    mesName: 'Todo',
    eventos: null,
    mesId: '-1'
  }),
  components: {
    Meses,
    Card
  },
  mounted () {
    this.getEvent(this.mesId)
  },
  methods: {
    whichItem (item) {
      this.mesName = item.name
      console.log('desde meses', this.mesName)
      this.mesId = item.id
      this.getEvent(this.mesId)
    },
    async getEvent (mesId) {
      try {
        const data = {}
        data.token = localStorage.getItem('token')
        data.event_date = mesId
        if (mesId === '-1') {
          const res = await EventService.getEvents(data)
          if (res.data.data) {
            this.eventos = res.data.data
          } else {
            this.eventos = []
          }
        } else {
          const res = await EventService.getEventsByDate(data)
          if (res.data.data) {
            this.eventos = res.data.data
          } else {
            this.eventos = []
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.container{
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0px 5%;
}
.btn-container{
  height: 40px;
  min-width: 114px;
  max-width: 150px;
  background-color: #E5E5E5;
}
.event-info{
  height: auto;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.container-card{
  display: grid;
  justify-content: center;
  grid-column-gap: 30px;
  grid-template-columns: 323px;
}

@media only screen and (min-width: 700px){
    .container-card{
      grid-template-columns: repeat(2, 287px);
      justify-content: flex-start;
    }
}
@media only screen and (min-width: 1000px){
    .container-card{
    grid-template-columns: repeat(3, 287px);
    justify-content: flex-start;
    }
}
@media only screen and (min-width: 1350px){
    .container-card{
      grid-template-columns: repeat(4, 287px);
      justify-content: flex-start;
    }
}

</style>
