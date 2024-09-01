// This code  is intended to validate whether a given string is a valid email address.
export const ValidateEmail = (email) => {
    // Correct regex pattern for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Using the correct method to test the email
    return regex.test(email);
}


export const getInitials = (name) => {
    // If the name is empty or not provided, return an empty string
    if (!name) return "";

    // Split the name into words based on spaces
    const words = name.split(" ");
    
    // Initialize an empty string to hold the initials
    let initials = "";

    // Loop through the first up to two words in the array
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        // Append the first letter of each word to the initials string
        initials += words[i][0];
    }

    // Convert the initials to uppercase and return the result
    return initials.toUpperCase();
}

