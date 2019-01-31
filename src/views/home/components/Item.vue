<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    iconac: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const {iconac} = context.props
    const vnodes = []
    if (iconac) {
      vnodes.push(<svg-icon icon-class={iconac}/>)
    }
    return vnodes
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
span{
  font-family:Bahnschrift;
}
</style>

