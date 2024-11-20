//This is an declarative way to program
 //ReactDOM.render( <h1 className="header" >Hello, Ract!</h1>,     document.getElementById("root"))  


//This is an imperative way to program

/* const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1); */

const navbar = (
    <nav>
        <h1> Brand name</h1>
        <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    </nav>
    
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
    
)