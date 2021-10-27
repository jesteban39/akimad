export type user = {
  id: number;
  login: string;
  avatar_url: string;
};

export type repo = {
  id: number;
  name: string;
};

export type org = {
  id: number;
  login: string;
  description: string;
};
export type userData = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
};

export type userDetail = {
  status: string;
  userData: userData;
  repos: repo[];
  orgs: org[];
};
