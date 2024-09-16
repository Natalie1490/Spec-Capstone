import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <h1>Welcome to License Lab</h1>
      <h4>
        Where passing your written driving test is just a few clicks away!
      </h4>
      <h3>
        We are your go-to hub for mastering driving knowledge with interactive
        flashcards designed to make studying effective and engaging. Whether
        you’re gearing up for your first test or brushing up on your skills, our
        tools and resources will help you ace the exam with confidence. Dive in,
        test your knowledge, and get ready to hit the road with a solid
        understanding of the rules and regulations. Let’s get started on your
        journey to becoming a licensed driver!
      </h3>
      <div className="homeButtons">
        {/* <Link to="Home" style={{ textDecoration: "none" }}>
          <h5>Test your Self</h5>
        </Link> */}
        <Link to="Study">
          <h5 className="nextCard" style={{ textDecoration: "none" }}>
            Study up
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Home;
