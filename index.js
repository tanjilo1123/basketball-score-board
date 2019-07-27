(function () {
  let players = [
    { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
    { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
    { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
    { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
    { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
  ]

  const dataPanel = document.querySelector('#data-panel')
  // write your code here

  function displayPlayerList(data) {
    let writeInHtml = ''
    //write icon
    const calculateIcon = `
  <span class="fa fa-plus-circle"></span>
  <span class="fa fa-minus-circle"></span>
  `
    //get array for object
    for (const key in players) {
      writeInHtml += `
    <tr>
      <td>${players[key].name}</td>
      <td class="data"><span>${players[key].pts}</span>${calculateIcon}</td>
      <td class="data"><span>${players[key].reb}</span>${calculateIcon}</td>
      <td class="data"><span>${players[key].ast}</span>${calculateIcon}</td>
      <td class="data"><span>${players[key].stl}</span>${calculateIcon}</td>
      <td class="data"><span>${players[key].blk}</span>${calculateIcon}</td>
    </tr>
    `
    }

    dataPanel.innerHTML = writeInHtml
  }
  displayPlayerList(players)

  //add Event
  let tbody = document.querySelector('tbody')

  tbody.addEventListener('click', addData)

  function addData(event) {
    //create data
    let firstGet = event.target.parentElement.firstElementChild
    let dataNumber = Number(firstGet.textContent)
    let calculateIcon = event.target.classList

    if (calculateIcon.contains('fa-plus-circle')) {
      firstGet.innerText = dataNumber + 1
    } else if (calculateIcon.contains('fa-minus-circle')) {
      firstGet.innerText = dataNumber - 1
    }
  }
})()