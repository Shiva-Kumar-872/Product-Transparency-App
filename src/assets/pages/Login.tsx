import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [attempts, setAttempts] = useState(0);
  const [showRecovery, setShowRecovery] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    const newErrors: typeof errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (email === "admin@example.com" && password === "securePass123") {
        localStorage.setItem("userEmail", email); // ✅ Save login
        navigate("/dashboard");
      } else {
        const newAttemptCount = attempts + 1;
        setAttempts(newAttemptCount);

        if (newAttemptCount >= 3) {
          setShowRecovery(true);
        }

        setErrors({
          email: "Email or password is incorrect.",
          password: "Please try again.",
        });
      }
    }
  };

  const handleSocialLogin = (provider: string) => {
    window.location.href = `/api/auth/${provider}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e8f5e9] to-[#ffffff] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Login to Transparency App</h1>
          <p className="text-sm text-gray-500">Access your company dashboard securely.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              autoComplete="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-600 mt-2">
            {showRecovery ? (
              <a href="/forgot-password" className="text-red-600 font-semibold hover:underline">
                Forgot password?
              </a>
            ) : (
              <>
                <a href="/create-account" className="text-green-600 hover:underline">
                  New here? Create an account
                </a>
              </>
            )}
          </div>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-500 mb-2">Or login with</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleSocialLogin("google")}
              className="bg-white border px-3 py-2 rounded-full shadow hover:bg-gray-50 transition flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
                className="h-5 w-5"
              >
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.2-1.5-34-4.5-50.2H272v95.1h147.7c-6.4 34.5-25 63.6-53.3 83.2l86.5 67.2c50.6-46.7 80.1-115.7 80.1-195.3z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c72.9 0 134-24.1 178.7-65.5l-86.5-67.2c-24.1 16.2-55 25.5-92.2 25.5-70.7 0-130.6-47.5-152-111.3l-90.1 69.5C63.3 491.1 161.5 544.3 272 544.3z"
                />
                <path
                  fill="#FBBC04"
                  d="M120 325.8c-10.6-31.1-10.6-64.5 0-95.6l-90.1-69.6c-39.3 78.5-39.3 171.6 0 250.1l90.1-69.5z"
                />
                <path
                  fill="#EA4335"
                  d="M272 108.1c39.6-.6 77.7 13.5 106.8 39.7l80.1-80.1C432.5 25.5 353.8 0 272 0 161.5 0 63.3 53.2 29.9 134.8l90.1 69.5C141.5 155.5 201.3 108.1 272 108.1z"
                />
              </svg>
            </button>

            <button
              onClick={() => handleSocialLogin("twitter")}
              className="bg-white border px-3 py-2 rounded-full shadow hover:bg-gray-50 transition flex items-center"
            >
           <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="h-5 w-5"
  fill="#1DA1F2"
>
  <path d="M8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0 0 22 5.92a8.19 8.19 0 0 1-2.36.65 4.11 4.11 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99A4.09 4.09 0 0 0 12.27 9a11.6 11.6 0 0 1-8.42-4.27 4.09 4.09 0 0 0 1.27 5.46 4.05 4.05 0 0 1-1.85-.51v.05c0 2.07 1.47 3.8 3.42 4.19a4.1 4.1 0 0 1-1.84.07c.52 1.63 2.02 2.82 3.8 2.86A8.23 8.23 0 0 1 4 18.39a11.62 11.62 0 0 0 6.29 1.84" />
</svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
