

// Read Prompts from SupaBase
getPrompts();
async function getPrompts () {
    const data = {
        "id": 13
    }
    // await window.axios.supaBase('delete',data)
    const response = await window.axios.supaBase("get"); 
    const myTable = document.getElementById('myBody'); 
    const sample = {
        "a": 1,
        "b": 1,
        "c": "hesa",
        "ad": 1,
        "asa": "fdsafds",
    }
    function del(id){
        console.log(id);
        // await window.axios.supaBase('delete','',id)
    }

    Object.keys(response).forEach(key => {
        const newRow = document.createElement('tr');
        const newCell1 = document.createElement('td');
        const newCell2 = document.createElement('td');
        const newCell3 = document.createElement('td');
        const newCell4 = document.createElement('td');
        const newCell5 = document.createElement('td');
        const button = document.createElement('button');
        newCell1.textContent = response[key].id
        newCell2.textContent = response[key].input
        newCell3.textContent = response[key].output
        newCell4.textContent = response[key].updated_at
        button.textContent = "Delete"
        button.style.color = 'red';
        newCell5.append(button)
        
        const data = {"id":response[key].id}
        button.addEventListener('click',function() {
            // Your code here
            console.log(data.id);
            window.axios.supaBase('delete',data)
            location.reload()
            // Add your desired functionality here
          });

        newRow.append(newCell1,newCell2,newCell3,newCell4,newCell5)
        myTable.appendChild(newRow)

    })
}