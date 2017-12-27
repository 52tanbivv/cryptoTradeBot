<template>
  <footer class="footer" id="footer">
    <div class="footer__contacts">
      <ul class="footer__list">
        <li class="footer__listItem">
          <a class="footer__link" href="#"><img class="footer__img" src="../img/vkIcon.svg" alt=""></a>
        </li>
        <li class="footer__listItem">
          <a class="footer__link" href="#"><img class="footer__img" src="fbIcon.svg" alt=""></a>
        </li>
        <li class="footer__listItem">
          <a class="footer__link" href="#"><img class="footer__img" src="gooIcon.svg" alt=""></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'foo',
  data () {
    return {
      dateYear: '',
      socialNets: {
        first: 'Reddit',
        second: 'Report an Issue',
        third: 'Facebook',
        fourth: 'Instagram'
      },
      links: {
        first: 'https://www.reddit.com/r/bandforge',
        second: 'https://wantoo.io/bandforge/',
        third: 'https://www.facebook.com/bandforge',
        fourth: 'https://www.instagram.com/bandforge'
      },
      subdivisionLocal: {
        title: 'hhhh',
        phone: '7777',
        address: '199hhhh'
      }
    }
  },
  methods: {
    goToAboutPage (e) {
      e.preventDefault()
      this.$store.dispatch('hideEventBanners')
      this.$router.push('/nested/aboutPage')
    },
    goToNewsPage (e) {
      e.preventDefault()
      this.$store.dispatch('hideEventBanners')
      this.$router.push('/nested/newsPage')
    },
    goToTicketOffices (e) {
      e.preventDefault()
      this.$store.dispatch('hideEventBanners')
      this.$router.push('/nested/ticketOffices')
    },
    goToOrganizations (e) {
      e.preventDefault()
      this.$store.dispatch('hideEventBanners')
      this.$router.push('/nested/organizations')
    }
  },
  computed: {
    ...mapState({
      modals: state => state.modals,
      subdivisions: state => state.onload.subdivisions,
      db: state => state.onload.currentDb
    }),
    subdivision (state) {
      console.log('subdivisions in footer - ', this.subdivisions)
      if (this.subdivisions === null) {
        console.log(this.subdivisionLocal)
        let defaultSubdiv = {
          address: '123242, Москва, Дружинниковская, 15, офис 213',
          city: 'Москва',
          db: 'msk',
          id: '10',
          phone: '(495) 638-55-54',
          port: '5433',
          price_markup: '5.00',
          state: '1',
          title: 'ООО "Городские Зрелищные Кассы"',
          tz: 'Europe/Moscow'
        }
        return defaultSubdiv
      } else {
        let db = this.db
        if (db === undefined) {
          return 'msk'
        } else {
          var thisDivision = this.subdivisions.filter(function (e) {
            console.log(db)
            return e.db === db
          })
          console.log('thisDivision ', thisDivision[0])
          return thisDivision[0]
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/foo'
</style>
