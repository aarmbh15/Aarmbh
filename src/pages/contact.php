<?php

// Set response as JSON
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");  // Add if CORS issues; remove if not needed
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost"; // Your server name
$username = "u544665256_aarmbh"; // Your MySQL username
$password = "Aarmbh@08"; // Your MySQL password
$dbname = "u544665256_aarmbh"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Function to get client IP
function getClientIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

// Function to get browser and OS
function getBrowserInfo() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $browser = "Unknown";
    $platform = "Unknown";

    // Detect OS
    if (preg_match('/windows|win32/i', $userAgent)) {
        $platform = "Windows";
    } elseif (preg_match('/macintosh|mac os x/i', $userAgent)) {
        $platform = "Mac OS";
    } elseif (preg_match('/linux/i', $userAgent)) {
        $platform = "Linux";
    } elseif (preg_match('/android/i', $userAgent)) {
        $platform = "Android";
    } elseif (preg_match('/iphone|ipad|ipod/i', $userAgent)) {
        $platform = "iOS";
    }

    // Detect browser
    if (preg_match('/MSIE|Trident/i', $userAgent)) {
        $browser = "Internet Explorer";
    } elseif (preg_match('/Edge/i', $userAgent)) {
        $browser = "Microsoft Edge";
    } elseif (preg_match('/Firefox/i', $userAgent)) {
        $browser = "Mozilla Firefox";
    } elseif (preg_match('/Chrome/i', $userAgent)) {
        $browser = "Google Chrome";
    } elseif (preg_match('/Safari/i', $userAgent)) {
        $browser = "Apple Safari";
    } elseif (preg_match('/Opera|OPR/i', $userAgent)) {
        $browser = "Opera";
    }

    return [
        "browser" => $browser,
        "platform" => $platform,
        "userAgent" => $userAgent
    ];
}

// Get user details
$ipAddress = getClientIP();
$browserInfo = getBrowserInfo(); 
$browser = $browserInfo["browser"];
$platform = $browserInfo["platform"];
$userAgent = $browserInfo["userAgent"];

// Set timezone to IST (India)
$conn->query("SET time_zone = '+05:30'");

// Collect form data (matching contact.jsx field names)
$name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : "";
$email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : "";
$phone = isset($_POST["phone"]) ? strip_tags(trim($_POST["phone"])) : ""; // Missing in form, default empty
$subject = isset($_POST["subject"]) ? strip_tags(trim($_POST["subject"])) : "No Subject";
$service = isset($_POST["service"]) ? strip_tags(trim($_POST["service"])) : ""; // Missing in form, default empty
$message = isset($_POST["message"]) ? strip_tags(trim($_POST["message"])) : "";
$honeypot = isset($_POST["honeypot"]) ? trim($_POST["honeypot"]) : "";

// Honeypot check: If filled, it's a bot - reject silently or with error
// if (!empty($honeypot)) {
//     // Bot detected - respond with success to not alert bot, but don't store
//     echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
//     exit;
// }

// Honeypot check: If filled, it's a bot - log it, fake success, and exit
if (!empty($honeypot)) {
    // Log bot attempt (connection still open here)
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    $honeypot_val = $honeypot;
    
    // Generate IST timestamp for bot log
    $ist_now_bot = (new \DateTime('now', new \DateTimeZone('Asia/Kolkata')))->format('Y-m-d H:i:s');
    
    $log_sql = "INSERT INTO bot_attempts (ip_address, honeypot_value, attempted_at) VALUES (?, ?, ?)";
    $log_stmt = $conn->prepare($log_sql);
    if ($log_stmt !== false) {
        $log_stmt->bind_param("sss", $ip, $honeypot_val, $ist_now_bot);
        $log_stmt->execute();
        $log_stmt->close();
    } // If prepare fails, silently ignore (don't alert bot)
    
    // Fake success to not alert the bot, but don't store in main table
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    $conn->close();
    exit;
}

// Basic server-side validation
if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($service)) {
    echo json_encode(["status" => "error", "message" => "All required fields must be filled."]);
    $conn->close();
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    $conn->close();
    exit;
}

// Optional: Validate phone (E.164 format)
if (!preg_match('/^\+[1-9]\d{1,14}$/', $phone)) {
    echo json_encode(["status" => "error", "message" => "Invalid phone number format."]);
    $conn->close();
    exit;
}

// Insert into DB only if not bot
$sql = "INSERT INTO contact_form (full_name, email, phone_number, subject, service, message) 
        VALUES (?, ?, ?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);
if ($stmt === false) {
    $response["message"] = "Failed to prepare the SQL statement: " . $conn->error;
    echo json_encode($response);
    $conn->close();
    exit;
}

// Bind parameters (all strings)
$stmt->bind_param("ssssss", $name, $email, $phone, $subject, $service, $message);

// DEMO LOGIC APPLIED HERE ✔  
if ($stmt->execute()) {

    // ONLY NOW send email (exact structure of your demo)
    $stmt->close();

    $to = "contact@aarmbhinfotech.com";
    $subjectMail = "New Contact: $name";

    $email_body = "";
    $email_body  = "Name: $name\r\n";
    $email_body .= "Email: $email\r\n";
    $email_body .= "Phone: $phone\r\n";
    $email_body .= "Service: $service\r\n";
    $email_body .= "Subject: $subject\r\n";
    $email_body .= "Message:\r\n$message\r\n";
    $email_body .= "--------------------------\r\n";
    $email_body .= "IP Address: $ipAddress\r\n";
    $email_body .= "Browser: $browser\r\n";
    $email_body .= "OS: $platform\r\n";
    $email_body .= "User Agent: $userAgent\r\n";

    $headers  = "From: contact@aarmbhinfotech.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail($to, $subjectMail, $email_body, $headers);

    echo json_encode(["status" => "success", "message" => "Your message has been sent successfully!"]);
    $conn->close();
    exit;

} else {
    echo json_encode(["status" => "error", "message" => "Database insert failed: " . $stmt->error]);
    $stmt->close();
    $conn->close();
    exit;
}

// Default response
// $response = ["status" => "error", "message" => ""];

// // Email recipient
// $to = "contact@aarmbhinfotech.com";

// // Email content
// $email_body .= "Name: $name\r\n";
// $email_body .= "Email: $email\r\n";
// $email_body .= "Phone: $phone\r\n";
// $email_body .= "Service: $service\r\n";
// $email_body .= "Subject: $subject\r\n";
// $email_body .= "Message:\r\n$message\r\n";
// $email_body .= "--------------------------\r\n";
// $email_body .= "User Details:\r\n";
// $email_body .= "IP Address: $ipAddress\r\n";
// $email_body .= "Browser: $browser\r\n";
// $email_body .= "Operating System: $platform\r\n";
// $email_body .= "User Agent: $userAgent\r\n";

// // Email headers
// $headers = "From: contact@aarmbhinfotech.com\r\n";
// $headers .= "Reply-To: $email\r\n";
// $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// // Send email
// if (mail($to, "New Contact: $name", $email_body, $headers)) {
//     echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
// } else {
//     echo json_encode(["status" => "error", "message" => "Failed to send email"]);
// }

// // Execute the statement
// if ($stmt->execute()) {
//     $response = ["status" => "success", "message" => "Message stored successfully!"];
// } else {
//     $response["message"] = "Database insert failed: " . $stmt->error;
// }

// $stmt->close();
// $conn->close();

// echo json_encode($response);

?>