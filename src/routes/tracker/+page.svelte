<script lang="ts">
  import type { MonthBlock } from "../../utils/types"
  import MonthCell from "./monthCell.svelte";

  let cellsInfo: MonthBlock[] = [{
    year: 2025,
    month: "June",
    cells: [
      [4, 8, 10, 0]
    ]
  }]
</script>

<div>
  <MonthCell {...cellsInfo[0]} />
</div>