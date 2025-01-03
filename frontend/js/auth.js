document.getElementById("auth-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("authToken", token);
      window.location.href = "feed.html";
    } else {
      alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
});
