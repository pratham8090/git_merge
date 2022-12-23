const Books = () => {
   const getBooks = async ()=> {
    const response = await fetch("http://localhost:5000/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json)
    if (localStorage.getItem("token")) {
      console.log("i am token");
    } else {
      alert("Invalid credentials");
    }
   }
  getBooks()
};

export default Books;
