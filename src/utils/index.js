import { format } from "date-fns";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const formatDob = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [month, day, year] = inputDate.split("-");
  const formattedDate = `${months[Number(month) - 1]} ${parseInt(
    day,
    10
  )}, ${year}`;

  return formattedDate;
};

const formatNextBill = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const formatExpiration = (expMonth, expYear) => {
  // Format the month as two digits (MM)
  const formattedMonth =
    expMonth < 10 ? `0${expMonth}` : expMonth.toString().slice(-2);

  // Format the year as the last two digits (YY)
  const formattedYear = expYear.toString().slice(-2);

  // Combine them into "MM/YY" format
  return `${formattedMonth}/${formattedYear}`;
};

const formatLastActive = (inputDate) => {
  const date = new Date(inputDate);
  return format(date, "d MMM ''yy", { awareOfUnicodeTokens: true });
};

const convertDateFormat = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateParts = inputDate.split(" ");

  if (dateParts.length === 3) {
    const month = (months.indexOf(dateParts[0]) + 1)
      .toString()
      .padStart(2, "0");
    const day = dateParts[1].replace(",", "").padStart(2, "0");
    const year = dateParts[2];

    return `${month}-${day}-${year}`;
  } else {
    // Handle invalid input
    return "Invalid Date";
  }
};

const calculateProfileCompletion = (user) => {
  const keys = [
    "gender",
    "ethnicity",
    "religion",
    "education",
    "relationship_goals",
    "kids",
    "smoking",
    "drinking",
    "height",
    "age",
    "distance",
  ];

  //

  // Check that all required keys are present with non-empty values
  const preferenceKeysExist =
    user?.preferences &&
    keys.every(
      (key) =>
        user.preferences[key] !== undefined &&
        user.preferences[key] !== "" &&
        (Array.isArray(user.preferences[key])
          ? user.preferences[key].every((value) => value !== "")
          : true)
    );

  // Define the criteria for each field
  const criteria = {
    name: user?.name !== undefined && user.name !== "",
    phone: user?.phone !== undefined && user.phone !== "",
    email: user?.email !== undefined && user.email !== "",
    dob: user?.dob !== undefined && user.dob !== "",
    gender: user?.gender !== undefined && user.gender !== "",
    location: user?.location !== undefined && user.location !== "",
    bio: user?.bio !== undefined && user.bio !== "",
    my_interests:
      Array.isArray(user?.my_interests) && user.my_interests.length >= 6,
    photos: Array.isArray(user?.photos) && user.photos.length >= 2,
    preferences: preferenceKeysExist,
  };

  // Calculate the total criteria count
  const totalCriteria = Object.values(criteria).filter(Boolean).length;

  // Calculate the progress as a percentage
  const progress = (totalCriteria / Object.keys(criteria).length) * 100;

  return `${Math.min(100, progress)}`; // Ensure progress doesn't exceed 100%
};

const generateStrongPassword = () => {
  // Implement your password generation logic here
  // This is just a simple example, you can make it more complex
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

export {
  formatDate,
  formatDob,
  formatNextBill,
  formatExpiration,
  formatLastActive,
  convertDateFormat,
  calculateProfileCompletion,
  generateStrongPassword,
};
