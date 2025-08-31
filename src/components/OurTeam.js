// src/components/OurTeam.js
import React from 'react';
import '../styles/OurTeam.css';

const teamMembers = [
  {
    id: 1,
    name: 'Courtney Henry',
    role: 'Development Manager',
    image: process.env.PUBLIC_URL + 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2_KjA32wHKNwL4j5SelUFm6oh41papwJkg&s', // Ganti dengan path gambar Anda
  },
  {
    id: 2,
    name: 'Jerome Bell',
    role: 'Software Tester',
    image: process.env.PUBLIC_URL + 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoW5Emc972ZZRleY_qShwfau4lg5WF9DnVtw&s', // Ganti dengan path gambar Anda
  },
  {
    id: 3,
    name: 'Arlene McCoy',
    role: 'Software Developer',
    image: process.env.PUBLIC_URL + 'https://i.pinimg.com/736x/20/9e/da/209edaa0d7d1c80fead43d914852b82f.jpg', // Ganti dengan path gambar Anda
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    role: 'UX/UI Designer',
    image: process.env.PUBLIC_URL + 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzH_nb5SYgX8PNp2tQWRIE4EuYW8X4xcb6OA&s', // Ganti dengan path gambar Anda
  },
  {
    id: 5,
    name: 'Salsa Howard',
    role: 'Marketing Specialist',
    image:  process.env.PUBLIC_URL + 'https://www.hipwee.com/wp-content/uploads/2020/11/hipwee-e40bca5a1ddc7f9988f45c51079d8c1c-477x640.jpg', // Placeholder
  },
];

function OurTeam() {
  return (
    <div className="our-team-section">
      <div className="our-team-header">
        <h2>Team Kami</h2>
        <a href="#view-all-team" className="view-all-team-link"> <i className="fas fa-arrow-right"></i></a>
      </div>
      <div className="team-members-container">
        {teamMembers.map(member => (
          <div className="team-member-card" key={member.id}>
            <img src={member.image} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;