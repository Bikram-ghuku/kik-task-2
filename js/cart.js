window.onload = () => {
    var data = JSON.parse(localStorage.getItem('product'));
    console.log(data);
    document.getElementById('totItemVal').innerHTML = data.length;
    document.getElementById('totItem').innerHTML = data.length + ' Items';
    var tbody = document.getElementById('tbody');
    var total = 0;
    for(var elem in data){
        var elem2 = JSON.parse(data[elem]);
        total += parseInt(elem2.price);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        td.innerHTML = parseInt(elem) + 1
        td1.innerHTML = elem2.name;
        td2.innerHTML = "<img src='"+elem2.img+"' width='100px' height='100px'>";
        td3.innerHTML = elem2.price;
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    document.getElementById('total').innerHTML = '₹'+ total;
}