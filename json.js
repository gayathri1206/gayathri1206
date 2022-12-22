let d1 = document.getElementById("getd1");
d1.addEventListener("click",function rajini()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>handle(data))
}
)




let t = document.getElementById("table1")
function handle(data)
 {
    for (let i in data)
     {
        let row=
       `<tr>
           <td>
               ${data[i].id}
            <td>
             ${data[i].name}
         </td>
        </tr>`
        t.innerHTML += row 
     }
 }
