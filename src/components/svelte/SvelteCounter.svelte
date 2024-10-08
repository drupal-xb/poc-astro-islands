<script lang="ts">
  export let count;
  function add() {
        count += 1;
    }

    function subtract() {
        count -= 1;
    }
</script>

<style>
.counter {
    display: grid;
    font-size: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2em;
    place-items: center;
}
.svelte-message {
  text-align: center;
  color: #ff3e00;
} 
</style>

<div class="counter">
    <button on:click={subtract}>-</button>
    <pre>{count}</pre>
    <button on:click={add}>+</button>
</div>
<div class="svelte-message">
  <slot name="slot1"/>
</div>