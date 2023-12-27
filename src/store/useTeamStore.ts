import { create } from "zustand";

export type TeamType = {
  menu1: {
    isNone: boolean;
    isRead: boolean;
    isWrite: boolean;
  };
  menu2: {
    isNone: boolean;
    isRead: boolean;
    isWrite: boolean;
  };
  menu3: {
    isNone: boolean;
    isRead: boolean;
    isWrite: boolean;
  };
};

interface ITeamStore {
  operatorTeam: TeamType;
  operatorTeam2: TeamType;
  dataTeam: TeamType;
  setOperatorTeam: (option: TeamType) => void;
  setOperatorTeam2: (option: TeamType) => void;
  setDataTeam: (option: TeamType) => void;
}

const useTeamStore = create<ITeamStore>((set) => ({
  operatorTeam: {
    menu1: {
      isNone: true,
      isRead: false,
      isWrite: false,
    },
    menu2: {
      isNone: false,
      isRead: true,
      isWrite: false,
    },
    menu3: {
      isNone: false,
      isRead: false,
      isWrite: true,
    },
  },
  operatorTeam2: {
    menu1: {
      isNone: true,
      isRead: false,
      isWrite: true,
    },
    menu2: {
      isNone: false,
      isRead: false,
      isWrite: true,
    },
    menu3: {
      isNone: true,
      isRead: false,
      isWrite: false,
    },
  },
  dataTeam: {
    menu1: {
      isNone: true,
      isRead: false,
      isWrite: false,
    },
    menu2: {
      isNone: true,
      isRead: false,
      isWrite: false,
    },
    menu3: {
      isNone: true,
      isRead: false,
      isWrite: false,
    },
  },
  setOperatorTeam: (option: TeamType) => set({ operatorTeam: option }),
  setOperatorTeam2: (option: TeamType) => set({ operatorTeam2: option }),
  setDataTeam: (option: TeamType) => set({ dataTeam: option }),
}));

export default useTeamStore;
