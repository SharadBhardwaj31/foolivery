import React ,{useState}from "react";
import "./style.css";
import { LockKeyhole, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [text,setText] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      if (text.length === 0){
        alert("Enter text");
      } else if (email.length === 0){
        alert("Email is required");
      } else if (number.length === 0){
        alert("Enter the number");
      }else if (number.length !==10){
        alert("Enter required number");
      } else if (password.length === 0){
        alert("Password is required");
      }  else if (password.length < 8){
        alert("Password should be atleast of 8 characters");
    }else{

      console.log(text);
      console.log(email);
      console.log(number);
      console.log(password);
      }
      setText("");
      setEmail("");
      setNumber("");
      setPassword("");

      };

    return(
     
      <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Signup to Foolivery</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signupInput">
            <User size={22} strokeWidth={1.5} />
            <input type="text" placeholder="Enter your full name" value={text} onChange={(e) => setText(e.target.value)}/>
          </div>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input type="email" placeholder="Enter your mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="signupInput">
            <Phone size={22} strokeWidth={1.5} />
            <input type="number" placeholder="Enter your phone" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input type="password" placeholder="Enter password" value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button type="submit">Signup</button>
        </form>
        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
     
    );
};

export default Signup;