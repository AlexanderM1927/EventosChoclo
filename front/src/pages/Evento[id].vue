<template>
  <div class="container-evento">
      <div>
        <p class="item">
            <router-link
            to="/eventos"
            class="item"
            >Eventos > </router-link>
            {{evento && evento.event_name}}
        </p>
        <router-link
            to="/eventos"
            class="item-arrow"
            ><q-icon name="fas fa-arrow-left" />
        </router-link>
        <hr class="barra">
      </div>
      <div class="card">
          <img class="card-img" src="~assets/evento.jpg" alt="Imagen de evento">
          <div class="card-info">
            <div>
              <p class="fecha">{{evento && evento.event_date}}</p>
              <h1 class="card-title card-title_evento">{{evento && evento.event_name}}</h1>
              <p class="card-price"> ${{evento && evento.event_price}}</p>
            </div>
            <button v-if="user" @click="buyTicket" class="card-button">Comprar boleta</button>
          </div>
      </div>
      <div class="card-show" >
        <h1 class="show-title">Shows</h1>
        <div class="shows">
          <Show v-for="(show,index) in shows" :key="index" :show="show"/>
        </div>
      </div>
      <div class="card-detalle">
        <h1 class="card-title">Acerca del evento</h1>
        <p>
          {{evento && evento.event_description}}
        </p>
      </div>
      <!-- <Modal :itClicked="itClicked" @accion="isShow"/> -->
   </div>
</template>

<script>

import Show from 'src/components/eventosCliente/Show'
// import Modal from 'src/components/eventosCliente/Modal'
import EventService from '../services/EventService'
import SellService from '../services/SellService'
import { functions } from '../functions.js'
import moment from 'moment'

export default {
  mixins: [functions],
  data: () => ({
    evento: null,
    shows: null,
    itClicked: false,
    user: JSON.parse(localStorage.getItem('user'))
  }),
  mounted () {
    this.getEvento()
  },
  methods: {
    async getEvento () {
      try {
        const data = {}
        data.token = localStorage.getItem('token')
        data.id = this.$route.params.id
        const res = await EventService.getEventById(data)
        if (res.data.data) {
          this.evento = res.data.data
          this.evento.event_date = moment(new Date(this.evento.event_date)).format('YYYY-MM-DD')
          this.shows = res.data.data.shows
        } else {
          this.evento = {}
        }
      } catch (error) {
        console.log(error)
      }
    },
    detectarClick () {
      this.itClicked = true
      console.log(this.itClicked)
    },
    isShow (value) {
      this.itClicked = value
    },
    async buyTicket () {
      try {
        const data = {}
        data.token = localStorage.getItem('token')
        data.event_id = this.evento.event_id
        data.user_id = this.user.user_id
        await SellService.store(data)
        this.alert('positive', 'Boleta comprada exitosamente')
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Show
    // Modal
  }
}
</script>

<style scoped>

.container-evento{
    display: flex;
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 65px;
    flex-direction: column;
}
.barra, .item{
    display: none;
}

.item-arrow{
  width: 30px;
  height: 20px;
  text-decoration: none;
}

.card{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.show-title{
  font-weight: bold;
  margin-top: 50px;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: var(--color-text-dark);
}
.card-info {
  margin-top:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align:left;
  max-height: 353px;
  width: 100%;
}

.card-img{
    background: #C4C4C4;
    border-radius: 20px;
    border: none;
    width: 100%;
    height: 280px;
    object-fit: cover;
}
.card-title{
  margin: 10px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: var(--color-text-dark);
}

.card-title_evento{
  font-size: 20px;
}

.card-parrafo{
  color: var(--color-text-dark);
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.05em;
}
.card-button{
  margin-top: 20px;
  align-self: flex-end;
  border:none;
  border-radius: 20px;
  background: #FDDB3A;
  color: var(--color-text-dark);
  cursor: pointer;
  font-size: 16px;
  height: 44px;
  bottom:0px;
  letter-spacing: 0.05em;
  outline: none;
  width: 100%;
}

.card-price{
  font-size: 16px;
  margin: 5% 0 0 0;
  font-style: normal;
  letter-spacing: 0.05em;
  font-weight: normal;
  color: var(--color-text-dark);
}

.fecha{
  margin: 10px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #787878;
}

.shows{
  display: flex;
  justify-content: space-between;
  min-height: 54px;
  width: 100%;
}

@media only screen and (min-width: 600px){
  .card-button{
    width: 200px;
  }

  .card-img{
    height: 353px;
  }

  .item-arrow{
    display: none;
  }
}
@media only screen and (min-width: 1000px){
  .container-evento{
    display: flex;
    width: 80%;
  }

  .card{
    flex-direction: row;
  }

  .barra{
    display: block;
    border: 1px solid #E5E5E5;
  }

  .item{
    display: inline-flex;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #787878 !important;
    text-decoration: none;
  }

  .item-arrow{
    display: none;
  }

  .card-img{
    width: 432px;
    height: 353px;
  }

  .card-info{
    margin: 30px 0 0 20px;
  }

  .card-button{
    width: 159px;
  }

  .fecha{
    font-size: 20px;
  }

  .card-title_evento{
    font-size: 30px;
    line-height: 37px;
  }

  .card-price{
    font-size: 22px;
  }

}
</style>
