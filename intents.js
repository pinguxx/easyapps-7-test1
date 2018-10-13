import HyperHTMLElement from 'hyperhtml-element';
import octicons from 'octicons';
const {hyper} = HyperHTMLElement;

hyper.define('oct-icon', (node, icon) => {
  if (octicons[icon]) {
    node.innerHTML = ' ' + octicons[icon].toSVG();
  }
  return icon;
});

hyper.define('date', (date) => {
  let formatted = '-',
    newdate = date;
  if (date) {
    if (typeof newdate.getMonth !== 'function') {
      newdate = new Date(date);
    }
    if (!isNaN(newdate.getTime()) && typeof newdate.getMonth === 'function') {
      formatted = `
        ${newdate.getMonth() + 1}/${newdate.getDate()}/${newdate.getFullYear()}
      `;
    }
  }
  return {
    text: formatted
  }
});