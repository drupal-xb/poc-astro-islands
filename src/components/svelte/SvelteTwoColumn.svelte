<script>
  export let width = 50; 
</script>

<div class="two-column-container">
    <div class="column-one width-{width}">
      <slot name="column_one" />
    </div>

    <div class="column-two width-{100-width}">
      <slot name="column_two" />
    </div>
</div>

<style>
  .two-column-container{
    display: flex;
  }
  .width-25 {
    flex: 0 1 25%;
    max-width: 25%;
  }
  .width-33 {
    flex: 0 1 33%;
    max-width: 33%;
  }
  .width-34 {
    flex: 0 1 34%;
    max-width: 34%;
  }
  .width-50 {
    flex: 0 1 50%;
    max-width: 50%;
  }
  .width-66 {
    flex: 0 1 66%;
    max-width: 66%;
  }
  .width-67 {
    flex: 0 1 67%;
    max-width: 67%;
  }
</style>
