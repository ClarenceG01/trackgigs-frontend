export async function login(data) {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    return result;
  } catch (error) {

	console.error("Login error:", error);
	throw error; 
  }
}
export async function signUp(data) {
  try {
	const response = await fetch("/api/users/register", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(data),
	});

	const result = await response.json();
	if (!response.ok) {
	  throw new Error(result.message || "Registration failed");
	}

	return result;
  } catch (error) {
	console.error("Registration error:", error);
	throw error;
  }
}
export async function verifyEmail(data) {
	console.log("Verifying email with data:", data);
  try {
	const response = await fetch("/api/users/verify", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(data),
	});

	const result = await response.json();
	if (!response.ok) {
	  throw new Error(result.message || "Verification failed");
	}

	return result;
  } catch (error) {
	console.error("Verification error:", error);
	throw error;
  }
}
export async function resendOtp(email) {
  try {
	const response = await fetch("/api/users/resend-otp", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify({ email }),
	});

	const result = await response.json();
	if (!response.ok) {
	  throw new Error(result.message || "Resend OTP failed");
	}

	return result;
  } catch (error) {
	console.error("Resend OTP error:", error);
	throw error;
  }
}