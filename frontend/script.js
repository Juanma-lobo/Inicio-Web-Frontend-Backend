document.getElementById("dataForm").addEventListener("submit", async(event) => { event.preventDefault(); 
  const name = document.getElementById("name").value;

  const response = await fetch("http://localhost:3000/data", {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({name})
  });

  const data = await response.json();
  document.getElementById("responseMessage").textContent = data.message

});

