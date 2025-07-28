import React from 'react';

function UserProfile() {
    // User information stored in variables
    const name = "Nicole Rodriguez";
    const bio = "SMC Student taking CS 81 during the Summer of 2025.";
    const profileImage = "https://i.imgur.com/CLvv4V3.jpeg";

    // Handle button click to toggle the button text
    const handleClick = (e) => {
        const button = e.target;
        // Toggle text between "Click Me" and "Click Me Again"
        if (button.innerText === "Click Me") {
            button.innerText = "Click Me Again";
        } else {
            button.innerText = "Click Me";
        }
    };

    // Return a single JSX element that displays the profile
    return (
        <div style={{
            maxWidth: '400px',
            margin: '20px auto',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        }}>
            {/* Circular profile image */}
            <img
                src={profileImage}
                alt={`${name}'s profile`}
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #e1e5e9',
                    marginBottom: '16px'
                }}
            />
            {/* User name */}
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>{name}</h1>
            {/* Short bio */}
            <p style={{ fontSize: '16px', color: '#555', margin: '8px 0 16px' }}>{bio}</p>
            {/* Toggle button */}
            <button onClick={handleClick} style={{
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#007BFF',
                color: 'white'
            }}>
                Click Me
            </button>
        </div>
    );
}

export default UserProfile;
