
const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

const addTask = () => {

    if (input.value === '') {
        alert('Please enter a task');
    } else {
        const li = document.createElement('li');
        li.setAttribute("class", "list-group-item");
        li.setAttribute("style", "font-size:18px");

        let div1 = document.createElement('div');
        // checkboxes
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "form-check-input border-0");
        checkbox.setAttribute("id","");
        div1.appendChild(checkbox);

        //task content
        const task = document.createTextNode(" " + input.value);
        div1.appendChild(task);
        console.log(li);


        // for remove task 
        const rm = document.createElement("span");
        rm.setAttribute("style", "float:right");
        const remove = document.createElement("i");
        remove.setAttribute("class", "bi bi-trash");
        rm.append(remove);
        div1.appendChild(rm);

        li.appendChild(div1);

        let div2 = document.createElement("div");
        // for task added date
        var dt = new Date();
        const date = document.createElement("span");
        date.setAttribute("style", "font-size:15px");
        date.setAttribute("class", " ml-4 text-muted");
        date.innerText = dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear();
        div2.appendChild(date);

        li.appendChild(div2);

        list.appendChild(li);
        console.log(list);
        savedata();
    }
    input.value = '';
    savedata();
};

list.addEventListener("click", function (e) {
    if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    if (e.target.tagName === 'INPUT') {
        if (e.target.checked) {
            e.target.setAttribute("checked",true);
            e.target.parentElement.style.textDecoration = 'line-through';
        }
        else {
            e.target.removeAttribute("checked");
            e.target.parentElement.style.textDecoration = 'none';
        }
    }
    savedata();
})

function savedata() {
    var data = JSON.stringify(list.innerHTML);
    localStorage.setItem("list_data", data);
}

function showdata() {

    if (localStorage.getItem("list_data") !== null) {
        var getdata = localStorage.getItem("list_data");
        list.innerHTML = JSON.parse(getdata);
        console.log(list.innerHTML); 
        
    }
}
showdata();
