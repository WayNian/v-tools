<template>
  <div id="draw"></div>
</template>
<script setup lang="ts">
  import { useKeydown } from "@/hooks/core/useKeydown";
  import { G, Line, Path, Svg, SVG } from "@svgdotjs/svg.js";
  import { onMounted } from "vue";

  const { isKeydown } = useKeydown("Shift");

  interface IPoint {
    x: number;
    y: number;
  }
  let isDraw = false;
  let pathStr = "";
  let layoutPoint: IPoint;

  const getPoint = (e: MouseEvent): IPoint => {
    const { clientX, clientY } = e;
    const { x, y } = layoutPoint;
    const pointX = clientX - x;
    const pointY = clientY - y;
    return {
      x: pointX,
      y: pointY,
    };
  };

  let startPoint: IPoint;

  const drawPath = (draw: Svg, pathStr: string): Path => {
    return draw.path(pathStr).fill("none").stroke({
      color: "red",
      width: 2,
    });
  };

  onMounted(() => {
    const draw = SVG().addTo("#draw").size(1000, 600).css({ background: "#ccc" });
    let group: G;
    draw.mousedown((e: MouseEvent) => {
      const point = document.querySelector("#draw")?.getClientRects()[0] as DOMRect;
      isDraw = true;
      layoutPoint = { x: point.x, y: point.y };
      const { x, y } = getPoint(e);
      group = draw.group();
      startPoint = { x, y };
      pathStr = `M${x} ${y}`;
    });
    draw.mousemove((e: MouseEvent) => {
      if (!isDraw || !group) return;
      const { x, y } = getPoint(e);
      let drawObj!: Line | Path;
      group.clear();
      if (isKeydown.value) {
        pathStr = `M${startPoint.x} ${startPoint.y} L${x} ${y} `;
      } else {
        pathStr = pathStr + ` L${x} ${y} `;
      }
      drawObj = drawPath(draw, pathStr);
      group.add(drawObj);
    });
    draw.mouseup((e: MouseEvent) => {
      group.clear();
      let drawObj!: Line | Path;
      if (isKeydown.value) {
        const { x, y } = getPoint(e);
        pathStr = `M${startPoint.x} ${startPoint.y} L${x} ${y} `;
      }
      drawObj = drawPath(draw, pathStr);
      draw.add(drawObj);
      pathStr = "";
      group.remove();
      isDraw = false;
    });
  });
</script>
<style></style>
