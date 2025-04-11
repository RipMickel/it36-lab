document.addEventListener("DOMContentLoaded", () => {
    // ✅ Initialize Supabase only when the DOM is ready
    const SUPABASE_URL = "https://your-supabase-url.supabase.co"; 
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZya3d0cnB1Z3V6dWR3Z3B1eHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxOTg2OTYsImV4cCI6MjA1OTc3NDY5Nn0.tX1usjj4KX_4LgQrLsY_1oF0AqK5XL-Ji8IPJECm6bI";
    
    // Initialize Supabase client properly by renaming the variable
    const supabaseClient = supabase.createClient(
        "https://your-supabase-url.supabase.co",  // Replace with your actual Supabase URL
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZya3d0cnB1Z3V6dWR3Z3B1eHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxOTg2OTYsImV4cCI6MjA1OTc3NDY5Nn0.tX1usjj4KX_4LgQrLsY_1oF0AqK5XL-Ji8IPJECm6bI"  // Replace with your actual Supabase anon key
    );
    
    
    console.log("✅ Supabase Initialized:", supabaseClient); // Log for debugging

    // 🚀 Sign-up function
    async function signUp() {
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            console.log("Error during sign-up:", error.message);
            alert("Sign-up failed: " + error.message);
        } else {
            console.log("Sign-up success:", data);
            alert("Sign-up successful! Check your email for verification.");
        }
    }

    // Add event listener for the Sign Up button
    const signupButton = document.querySelector("button");
    if (signupButton) {
        signupButton.addEventListener("click", signUp);
    } else {
        console.log("❌ Could not find the sign-up button");
    }
});
