document.addEventListener("DOMContentLoaded", () => {
    // ✅ Initialize Supabase only when the DOM is ready
    const SUPABASE_URL = "https://your-supabase-url.supabase.co"; 
    const SUPABASE_ANON_KEY = "your-anon-key";
    
    // Initialize Supabase client properly by renaming the variable
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
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
