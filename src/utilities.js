const labelMap = {
  1: {
    name: 'Hello',
    color: 'yellow'
  },
  2: {
    name: 'Yes',
    color: 'green'
  },
  3: {
    name: 'No',
    color: 'red'
  },
  4: {
    name: 'Thank You',
    color: 'lime'
  },
  5: {
    name: 'I Love You',
    color: 'purple'
  }
}

// Define drawing funciton
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
  for(let i=0; i<boxes.length; i++) {
    if(boxes[i] && classes[i] && (scores[i] > threshold)) {
      const [y, x, height, width] = boxes[i];
      console.log(boxes[i]);
      const text = classes[i];

      ctx.strokeStyle = labelMap[text]['color'];
      ctx.lineWidth = 2;
      ctx.fillStyle = 'white';
      ctx.font = '30px Consolas';

      ctx.beginPath();
      ctx.fillText(`${labelMap[text]['name']} - ${Math.round(scores[i]*100)}%`, x*imgWidth, y*imgHeight-10);
      ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
      ctx.stroke();
    }
  }
}
