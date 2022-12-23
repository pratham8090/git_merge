import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-9">
            <div className="card mt-5">
                <div className="card-header">Login Here</div>
                <div className="card-body">
                    <Link className="btn btn-primary mx-1" to="/login" role="button">LogIn</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
