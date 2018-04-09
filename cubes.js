let cubes = function(parent, settings) {
  if (!parent) {
    console.error("Cubes: Element is undefined");
    return
  }
  if (!parent.id) {
    console.error("Cubes: Element must have id");
    return
  }
  const wNum = settings.columns || 10,
    hNum = settings.rows || 10,
    wCub = parent.offsetWidth / wNum,
    hCub = parent.offsetHeight / hNum || wCub,
    speed = settings.speed || 100,
    transition = settings.transition + 'ms' || '1000ms';
    let once = settings.once? -1:1;
  //generate grid
  {
    const color = settings.color || 'rgba(66, 134, 244, 1)';
    let html = '<div class="cubes">';
    for (let i = 0; i < hNum; i++) {
      html = html + ` <div class="cubes-row" data-cubes="${i}">`
      for (let j = 0; j < wNum; j++) {
        html = html + ` <div class="cubes-block cubes-block__base" data-cubes="${j}"></div>`
      }
      html = html + `</div>`
    }
    html = html + `</div>`

    if(parent.getElementsByClassName('cubes')[0]){
      parent.removeChild(parent.getElementsByClassName('cubes')[0]);
    }
    
    parent.innerHTML = parent.innerHTML + html;

    parent.style.position = 'relative';
    const css = `
    #${parent.id} .cubes {
      position: absolute;
      top:0;
      left:0;
    }
    #${parent.id} .cubes-row {
      height: ${hCub}px;
      position: relative;
    }

    #${parent.id} .cubes-block {
      width: ${wCub}px;
       height: ${hCub}px;
      position: absolute;
      transition: ${transition};
    }

    #${parent.id} .cubes-block__base {
      background-color: ${color};
    }

    #${parent.id} .cubes-block__toggled {
      background-color: rgba(0, 0, 0, 0);
    }`,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }

  let allblocks = Array.from(parent.getElementsByClassName("cubes-row")),
    ammountAllBlocks = 0,
    ammoutBlocks = 0,
    toggleShow = true;

  allblocks.forEach((block, index) => {
    allblocks[index] = [];

    Array.from(block.getElementsByClassName("cubes-block")).forEach((element) => {
      ammountAllBlocks++;

      allblocks[index][element.dataset.cubes] = element;
      element.style.left = wCub * parseInt(element.dataset.cubes) + "px";

      element.addEventListener("mouseenter",function handler () {
        if(once){
          once++;
         changeColor(parseInt(this.dataset.cubes), parseInt(this.parentNode.dataset.cubes));
       }
      });
    });
  });

  let changeColor = (x, y) => {
    let base, toggled;
    if (toggleShow) {
      base = "cubes-block__base";
      toggled = "cubes-block__toggled";
    } else {
      base = "cubes-block__toggled";
      toggled = "cubes-block__base";
    }
    setTimeout(() => {
      let block = allblocks[y][x];
      if (block !== undefined && !block.classList.contains(toggled)) {
        ammoutBlocks++;
        block.classList.toggle(base);
        block.classList.toggle(toggled);
        if (allblocks[y][x - 1] !== undefined) changeColor(x - 1, y);
        if (allblocks[y][x + 1] !== undefined) changeColor(x + 1, y);
        if (allblocks[y - 1] !== undefined) changeColor(x, y - 1);
        if (allblocks[y + 1] !== undefined) changeColor(x, y + 1);
        if (ammoutBlocks === ammountAllBlocks) {
          ammoutBlocks = 0;
          toggleShow = !toggleShow;
        }
      }
    }, speed);
  };
};
