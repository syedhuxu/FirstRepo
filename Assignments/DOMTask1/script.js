const arr = [
  {
    team_name: "Chennai Super Kings",
    team_image:
      "https://i.pinimg.com/736x/03/b0/b5/03b0b54ca52d096fd1cb0dada03f96e2.jpg",
    captain: "MS Dhoni",
    trophies: 5,
    last_trophy_year: 2023,
    instagram_followers: 17.8,
  },
  {
    team_name: "Mumbai Indians",
    team_image:
      "https://i.pinimg.com/1200x/28/09/a8/2809a841bb08827603ccac5c6aee8b33.jpg",
    captain: "Rohit Sharma",
    trophies: 5,
    last_trophy_year: 2020,
    instagram_followers: 16.3,
  },
  {
    team_name: "Royal Challengers Bengaluru",
    team_image:
      "https://i.pinimg.com/736x/45/98/55/459855b3941724ecbe0108aaf85984d9.jpg",
    captain: "Rajat Patidar",
    trophies: 1,
    last_trophy_year: 2025,
    instagram_followers: 17.8,
  },
  {
    team_name: "Kolkata Knight Riders",
    team_image:
      "https://i.pinimg.com/1200x/a9/1a/11/a91a1152e5121ec18f7ab9795753c228.jpg",
    captain: "Ajinkya Rahane",
    trophies: 3,
    last_trophy_year: 2024,
    instagram_followers: 6.9,
  },
  {
    team_name: "Sunrisers Hyderabad",
    team_image:
      "https://i.pinimg.com/736x/2f/ed/39/2fed39b7152a1c0505c2c09ab38f4050.jpg",
    captain: "Pat Cummins",
    trophies: 1,
    last_trophy_year: 2016,
    instagram_followers: 7.0,
  },
  {
    team_name: "Rajasthan Royals",
    team_image:
      "https://i.pinimg.com/736x/df/c4/e2/dfc4e201bafb4767bc35633d0f05ec21.jpg",
    captain: "Sanju Samson",
    trophies: 1,
    last_trophy_year: 2008,
    instagram_followers: 4.7,
  },
  {
    team_name: "Gujarat Titans",
    team_image:
      "https://i.pinimg.com/736x/1c/33/97/1c339749f5940d5ef992c68b5712b91d.jpg",
    captain: "Hardik Pandya",
    trophies: 1,
    last_trophy_year: 2022,
    instagram_followers: 4.5,
  },
  {
    team_name: "Lucknow Super Giants",
    team_image:
      "https://i.pinimg.com/736x/42/92/9f/42929f323d5f435c7838c8d7ab26f40b.jpg",
    captain: "KL Rahul",
    trophies: 0,
    last_trophy_year: "Not Yet",
    instagram_followers: 3.5,
  },
  {
    team_name: "Delhi Capitals",
    team_image:
      "https://i.pinimg.com/736x/02/ca/ad/02caada927f9f8f662429aae05f97848.jpg",
    captain: "Axar Patel",
    trophies: 0,
    last_trophy_year: "Not Yet",
    instagram_followers: 4.3,
  },
  {
    team_name: "Punjab Kings",
    team_image:
      "https://i.pinimg.com/1200x/b6/0e/ec/b60eecd12ae6dda51af12720b4478e1e.jpg",
    captain: "Shreyas Iyer",
    trophies: 0,
    last_trophy_year: "Not Yet",
    instagram_followers: 3.7,
  },
];
const heading = document.querySelector("#heading");
const teamImage = document.querySelector("#team-img");
const team = document.querySelector("#team");
const captain = document.querySelector("#captain");
const trophies = document.querySelector("#trophies");
const lastWin = document.querySelector("#last-win");
const followers = document.querySelector("#followers");
const guessBtn = document.querySelector("#guess-btn");

guessBtn.addEventListener("click", function () {
  heading.innerHTML = "Guess 2026 Winner";
  const randomIndex = Math.floor(Math.random() * arr.length);
  const selectedTeam = arr[randomIndex];
  teamImage.setAttribute("src", selectedTeam.team_image);

  team.innerHTML = `Team: ${selectedTeam.team_name}`;
  captain.innerHTML = `Captain: ${selectedTeam.captain}`;
  trophies.innerHTML = `Trophies: ${selectedTeam.trophies}`;
  lastWin.innerHTML = `Last Win: ${selectedTeam.last_trophy_year}`;
  followers.innerHTML = `Followers: ${selectedTeam.instagram_followers}M`;

  console.log(selectedTeam);
  console.log(selectedTeam.team_name);
});
