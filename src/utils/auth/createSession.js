async function createSession(sessionData) {
  const res = await fetch("/api/auth/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: sessionData.name,
      email: sessionData.email,
      role: sessionData.role,
    }),
  });

  return res
}

export default createSession;
