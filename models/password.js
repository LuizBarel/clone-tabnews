import bcryptjs from "bcryptjs";

const pepper = process.env.PEPPER || "default_pepper";

async function hash(password) {
  const rounds = getNumberOfRounds();
  const pwWithPepper = password + pepper;

  return await bcryptjs.hash(pwWithPepper, rounds);
}

function getNumberOfRounds() {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

async function compare(providedPassword, storedPassword) {
  const pwWithPepper = providedPassword + pepper;

  return await bcryptjs.compare(pwWithPepper, storedPassword);
}

const password = {
  hash,
  compare,
};

export default password;
