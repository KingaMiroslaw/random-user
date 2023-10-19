import { User } from "../types/user";

type PhraseProps = {
  user: User;
};

const PhraseGenerator = ({ user }: PhraseProps) => {
  const birthDate = new Intl.DateTimeFormat("default", {
    timeZone: "UTC",
  }).format(new Date(user.dob.date));

  const phrases = [
    `Name: ${user.name.first} ${user.name.last}`,
    `Email: ${user.email}`,
    `Date of birth: ${birthDate}`,
    `Address: ${user.location.postcode} ${user.location.city}`,
    `Phone number: ${user.cell}`,
  ];

  return <h1>{phrases}</h1>;
};

export default PhraseGenerator;
