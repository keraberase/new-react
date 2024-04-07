
const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Get the user data from the form
    const userData = {
      login: login.value,
      password: password.value,
    };

    // Call the callback function passed from the parent component
    onLogin(userData);

    // Reset the form fields after submission
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm; // This line exports the LoginForm component as the default export
