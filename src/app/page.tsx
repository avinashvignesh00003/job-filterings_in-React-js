"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import { log } from "console";

export default function Home() {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [isvalid, setvalid] = useState(true);

  const router = useRouter();

  let handleSubmit = () => {
    if (id == "user" && password=="user1") {
      console.log("camein");
      localStorage.setItem("logged", "yes");

      router.push("/Content");

      setvalid(true);
    } else {
      setvalid(false);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center  text-center mt-5 ">
        <div
          className="p-5  m-5 rounded shadow bg-white"
          style={{ width: "500px" }}
        >
          <h2 className="">Welcome to job market🏢</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className=""
                placeholder="Enter id here"
                onChange={(e) => setid(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                className=""
                placeholder="Enter password here"
                onChange={(e) => setpassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <button className="hp0 btn btn-primary" onClick={handleSubmit}>
              Go to job!
            </button>
            {!isvalid && <p>Enter correct data to go😒😎</p>}
          </Form>
        </div>
      </div>
    </>
  );
}
