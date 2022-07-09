import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      if (!datetime.length) return '-'
      return moment(datetime).fromNow()
    }
  }
}