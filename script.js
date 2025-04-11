document.addEventListener("DOMContentLoaded", () => {

const SUPABASE_URL = "https://vrkwtrpuguzudwgpuxvv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZya3d0cnB1Z3V6dWR3Z3B1eHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxOTg2OTYsImV4cCI6MjA1OTc3NDY5Nn0.tX1usjj4KX_4LgQrLsY_1oF0AqK5XL-Ji8IPJECm6bI";

// ✅ Initialize Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🚀 SIGN-UP FUNCTION
document.getElementById("signup-btn").onclick = async () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        document.getElementById("message").innerText = "Error: " + error.message;
    } else {
        document.getElementById("message").innerText = "✅ Check your email for verification!";
    }
};

// 🚀 LOGIN FUNCTION
document.getElementById("login-btn").onclick = async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        document.getElementById("message").innerText = "Error: " + error.message;
    } else {
        document.getElementById("message").innerText = "✅ Login successful!";
    
    }
};
});
