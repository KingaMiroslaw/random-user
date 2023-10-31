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
    <div className="md:text-2xl text-1xl font-extrabold text-[#00df9a] dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-r dark:from-[#00df9a] dark:to-white flex flex-col items-center">
      <h1 className="uppercase">{phrases[activeLink].label}</h1>
      <h1>{phrases[activeLink].value}</h1>
    </div>
  );
};

export default PhraseGenerator;
