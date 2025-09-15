fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.date').textContent = data.date_pronostic;
    document.querySelector('h1').textContent = data.course.title;
    document.querySelector('h3').textContent = data.course.h3;

    const r1Container = document.querySelector('.box-reniou');
    r1Container.innerHTML = `<h4>Pronostic R-1</h4>`;
    data.pronostics['R-1'].forEach(item => {
      const div = document.createElement('div');
      div.className = 'corssa';
      div.innerHTML = `<p>${item.name}</p><p>${item.numbers}</p>`;
      r1Container.appendChild(div);
    });

    const r2Container = document.querySelector('.pronostic-r1-r2');
    r2Container.innerHTML = `<h4>Pronostic R-2</h4>`;
    data.pronostics['R-2'].forEach(item => {
      const div = document.createElement('div');
      div.className = 'corssa';
      div.innerHTML = `<p>${item.name}</p><p>${item.numbers}</p>`;
      r2Container.appendChild(div);
    });

    const rappourContainer = document.querySelector('.rappour');
    rappourContainer.innerHTML = `<h4>${data.rappour.title}</h4><p>arevei Qounte ${data.rappour.date}</p><h6>${data.rappour.numbers}</h6>`;
    data.rappour.orders.forEach(order => {
      const div = document.createElement('div');
      div.className = 'arive';
      div.innerHTML = `<p>${order.name}</p><p>${order.amount}</p>`;
      rappourContainer.appendChild(div);
    });

    const divDownload = document.createElement('div');
    divDownload.className = 'sini';
    divDownload.innerHTML = `<p>${data.download_text}</p>`;
    rappourContainer.appendChild(divDownload);
  })
  .catch(error => console.error(error));
