const inp = document.getElementById("inp");
const btn = document.getElementById("addtodo");
const list = document.getElementById("List");

btn.onclick = function(e){
    const todotext = inp.value;
    const li = document.createElement("li");
    li.innerText = todotext;
    list.append(li);
    
    li.onclick = function(e){
        e.target.remove()
    }
    inp.value = " ";
}
