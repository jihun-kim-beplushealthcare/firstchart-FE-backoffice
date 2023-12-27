import { IAddAccount } from "@/interface/IAccount";
import styled from "@emotion/styled";
import React, { useState } from "react";

type JoinContainerType = {
  label: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function JoinContainer({ label, onChangeInput }: JoinContainerType) {
  return (
    <JoinContainerWrapper>
      <div className="label">{label}</div>
      <input type="text" onChange={onChangeInput} />
    </JoinContainerWrapper>
  );
}

export default function Join() {
  const [groupId, setGroupId] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function callJoinAPI(join: IAddAccount) {
    fetch(import.meta.env.VITE_ACCOUNTS_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(join),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleSubmit(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(import.meta.env.VITE_ACCOUNTS_URL);
    callJoinAPI({
      authGroudId: Number(groupId),
      groupName,
      name,
      userId,
      email,
    });
  }

  return (
    <JoinWrapper>
      <form>
        <JoinContainer
          label="authgroupId"
          onChangeInput={(e) => setGroupId(e.target.value)}
        />
        <JoinContainer
          label="groupName"
          onChangeInput={(e) => setGroupName(e.target.value)}
        />
        <JoinContainer
          label="name"
          onChangeInput={(e) => setName(e.target.value)}
        />
        <JoinContainer
          label="userId"
          onChangeInput={(e) => setUserId(e.target.value)}
        />
        <JoinContainer
          label="email"
          onChangeInput={(e) => setEmail(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} value="test" />
      </form>
    </JoinWrapper>
  );
}

const JoinWrapper = styled.main``;

const JoinContainerWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 10px;

  .label {
    width: 100px;
  }
`;
