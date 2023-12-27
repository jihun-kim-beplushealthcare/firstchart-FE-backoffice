export async function addAuthGroup() {
  fetch(`${import.meta.env.VITE_BACKOFFICE_URL}/auth-groups`);
}

export async function updateAuthGroupInfo() {}

export async function removeIDToAuthGroups() {}

export async function addIDToAuthGroups() {}

export async function checkAuthName() {}

export async function getAuthGroupsOnMenuTypes() {}

export async function getAuthGroups() {
  const results = await fetch(`${import.meta.env.VITE_BACKOFFICE_URL}/auth-groups/get-all`);
  console.log(results);
}
