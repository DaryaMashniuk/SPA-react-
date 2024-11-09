export default function debounce(func, sec) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(()=> func.apply(this.args) , sec)
    }
  }