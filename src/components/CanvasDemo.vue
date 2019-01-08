<template>
 <div>
   Canvas Demo<br/>
   <canvas :ts="drawCanvas" width="500" height="400" style="cursor: pointer; border: 1px solid blue;" @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove" ref="canvas">

   </canvas>
   <br/>
   X: <input type="number" v-model="x">
   Y: <input type="number" v-model="y">
   <div>
     <button @click="selectedColor=color" v-for="color in colors" :key="color" :style="{ backgroundColor: color }">{{color}}</button>
   </div>
 </div> 
</template>

<script>
export default {
  name: 'CanvasDemo',
  data() {
    return {
      colors: ['white', 'black', 'red', 'blue', 'yellow', 'green'],
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      ctx: null,
      updateCount: 0,
      canvasBoundingRect: {},
      penDown: false,
      selectedColor: 'red'
    }
  },
  computed: {
    drawCanvas() {
      if(this.ctx && this.penDown){ 
        this.ctx.beginPath()
        this.ctx.fillStyle = this.selectedColor
        this.ctx.strokeStyle = this.selectedColor
        //this.ctx.fillRect(this.x, this.y, 10, 10)
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, true)
        this.ctx.stroke()
      }
      return this.updateCount++
    }
  },
  methods: {
    mousedown(ev) {
      this.penDown = true
    },
    mouseup(ev) {
      this.penDown = false
    },
    mousemove(ev) {
      if(this.canvasBoundingRect) {
       this.x = ev.clientX - this.ctx.canvas.offsetLeft
       this.y = ev.clientY - this.ctx.canvas.offsetTop
      }
    }
  },
  mounted() {
    let canvas = this.$refs['canvas']
    this.ctx = canvas.getContext('2d')
    this.ctx.clearRect(0, 0, this.width, this.height)
    let style = window.getComputedStyle(canvas)
    this.width = parseInt(style.getPropertyValue('width'), 10)
    this.height = parseInt(style.getPropertyValue('height'), 10)
    this.canvasBoundingRect = canvas.getBoundingClientRect()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
