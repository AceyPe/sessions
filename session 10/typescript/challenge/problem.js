const dataFetch = async () => {
  const request = await fetch("https://api.restful-api.dev/objects");

  const data = await request.json();

  data.map((item) => {
    console.log("**********")
    console.log("id:", item.id)
    console.log("name:", item.name)
    console.log("**********")
  })
}





dataFetch();
