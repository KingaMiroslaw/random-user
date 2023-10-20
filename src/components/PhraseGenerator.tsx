import { User } from "../types/user";

type PhraseProps = {
  user: User;
  activeLink: number;
};

const PhraseGenerator = ({ user, activeLink }: PhraseProps) => {
  const birthDate = new Intl.DateTimeFormat("default", {
    timeZone: "UTC",
  }).format(new Date(user.dob.date));

  const phrases = [
    {
      label: "Name",
      value: `${user.name.first} ${user.name.last}`,
    },
    {
      label: "Email",
      value: `${user.email}`,
    },
    {
      label: "Date of birth",
      value: `${birthDate}`,
    },
    {
      label: "Address",
      value: `${user.location.postcode} ${user.location.city}`,
    },
    {
      label: "Phone ",
      value: `${user.cell}`,
    },
  ];

  return (
    <div>
      <h1>{phrases[activeLink].label}</h1>
      <h1>{phrases[activeLink].value}</h1>
    </div>
  );
};

export default PhraseGenerator;
