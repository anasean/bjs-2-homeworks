//Задача № 1



function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
      const hash = md5(JSON.stringify(args));
      let objectInCache = cache.find((item) => item.hash === hash);
  
      if (objectInCache) {
        console.log("Из кеша: " + objectInCache.value);
        return "Из кеша: " + objectInCache.value;
      }
  
      let result = func(...args);
      cache.push({ hash, value: result });
  
      if (cache.length > 5) {
        cache.shift();
      }
  
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  
    return wrapper;
  }
    
  
  
  const addAndMultiply = (a, b, c) => (a + b) * c;
  const upgraded = cachingDecoratorNew(addAndMultiply);




//Задача № 2

function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let count = 0;
    let allCount = 0;
  
    function wrapper(...args) {
      clearTimeout(timeoutId);
      count++;
      allCount++;
      timeoutId = setTimeout(() => {
        count = 0;
        func(...args);
      }, delay);
    }
  
    wrapper.count = () => count;
    wrapper.allCount = () => allCount;
  
    return wrapper;
  }