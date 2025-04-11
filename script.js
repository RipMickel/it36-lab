const SUPABASE_URL = "https://your-supabase-url.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Sign Up Function
async function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        alert(error.message);
    } else {
        alert("Check your email for verification!");
    }
}

// Login Function
async function signIn() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        alert(error.message);
    } else {
        window.location.href = "dashboard.html";
    }
}

// Check Auth & Get Role
async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("user-email").textContent = user.email;

    // Fetch user role
    const { data, error } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    if (error) {
        console.error(error);
    } else {
        document.getElementById("user-role").textContent = data.role;
    }
}

// Logout
async function logout() {
    await supabase.auth.signOut();
    window.location.href = "login.html";
}

// Run auth check on dashboard
if (window.location.pathname.includes("dashboard.html")) {
    checkAuth();
}
