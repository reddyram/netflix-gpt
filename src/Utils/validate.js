export const checkValidateData = (email, pass, name = "", state) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

  if (!isEmailValid && !state) return "Email is not valid";
  if (!isPasswordValid && !state) return "Password is not valid";
  if (name.length === 0 && !state) return "Name cannot be empty";

  return null;
};
