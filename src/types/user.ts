export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
  };
  location: {
    city: string;
    postcode: number;
  };

  cell: string;
  picture: {
    large: string;
  };
};
