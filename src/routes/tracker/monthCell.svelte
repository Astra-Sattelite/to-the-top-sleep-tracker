<script lang="ts">
  import type { MonthBlock } from "../../utils/types";

  let week: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  let props: MonthBlock = $props()

</script>

<div class="flex flex-col">
  <h1>{props.month}</h1>
  
  <div class="grid grid-rows-1">
    <div class="grid grid-cols-7 gap-2">
      {#each week as dayname}
        <div class="h-8 flex px-2 items-center bg-sleep-lavanda">
          {dayname}
        </div>
      {/each}

      {#each props.cells as matrixRow}
        {#each matrixRow as cell}
          <div class="h-8 flex px-2 items-center bg-sleep-lavanda">
            {cell}
          </div>
        {/each}
      {/each}
    </div>
  </div>
</div>

<style>

</style>