// models/Subscriber.js
import mongoose from 'mongoose'; // Use import instead of require

// Define the subscriber schema
const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Optional: Trim whitespace from email
        lowercase: true, // Optional: Convert email to lowercase before saving
    },
});

// Export the Subscriber model
const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export default Subscriber; // Use export instead of module.exports
