<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconac: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    ac : {
      type:Number,
      default:0
    }
  },
  render(h, context) {
    const { icon, iconac, title ,ac} = context.props
    const vnodes = []
    if (icon && ac==0) {
      vnodes.push(<svg-icon icon-class={icon}/>)
    }
    if (icon && ac==1) {
      vnodes.push(<svg-icon icon-class={iconac}/>)
    }
    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
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

