import React, { useState } from "react";
import "./AddJob.css"; // Import your CSS file

const AddJob = () => {
  const [yearOfPassout, setYearOfPassout] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [isFresher, setIsFresher] = useState(true);
  const [resume, setResume] = useState(null);

  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [languages, setLanguages] = useState("");
  const [dob, setDob] = useState("");

  const [hasExperience, setHasExperience] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobApplication = {
      yearOfPassout,
      skills: skills.split(",").map((skill) => skill.trim()),
      description,
      isFresher,
      resume,
      candidateDetails: {
        name,
        phno,
        email,
        languages: languages.split(",").map((lang) => lang.trim()),
        dob,
      },
      experienceDetails: hasExperience ? { roleName, company } : null,
    };

    console.log(jobApplication);

    

    // Clear input fields after submission
    setYearOfPassout("");
    setSkills("");
    setDescription("");
    setIsFresher(true);
    setResume(null);
    setName("");
    setPhno("");
    setEmail("");
    setLanguages("");
    setDob("");
    setHasExperience(false);
    setRoleName("");
    setCompany("");
  };

  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Fill in the Job Application
      </p>
      <div className="job-form">
        <form onSubmit={handleSubmit}>
          <div className="form-section shadow job-requirements-container">
             
            <h2>Job Requirements</h2>
            <div className="basic-input">
            <label htmlFor="yearOfPassout" className="label-input label">YEAR OF PASSOUT</label>
            <input
            id="yearOfPassout"
              className="form-input shadow"
              type="text"
              placeholder="Year of Passout"
              value={yearOfPassout}
              onChange={(e) => setYearOfPassout(e.target.value)}
              required
            />
          
          <div className="basic-input">
          <label htmlFor="skills" className="label-input label">SKILLS</label>

            <input
              className="form-input shadow w-100"

              id="skills"
              type="text"
              placeholder="Skills (comma separated)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
            </div>

            <div className="basic-input">
            <label htmlFor="describe" className="label-input label">DESCRIBE</label>

            <textarea
              placeholder="Describe about yourself"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="7"
              cols="50"
              className="form-input shadow"

            />
          </div>
            <div className="radio-container">
              <label className="radio">
                <input
                  type="radio"
                  checked={isFresher}
                  onChange={() => setIsFresher(true)}
                  className="form-input shadow"

                />
                Fresher
              </label>
              <label className="radio">
                <input
                  type="radio"
                  checked={!isFresher}
                  onChange={() => setIsFresher(false)}
                  className="form-input shadow"

                />
                Experienced
              </label>
            </div>
            <div className="file-input">
              <label htmlFor="resume">Resume:</label>
              <input
                id="resume"
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                required
                

              />
            </div>
          </div>
          </div>
          <div className="form-section shadow job-requirements-container">
            <h2>Candidate Details</h2>
            <div className="basic-input">
            <label htmlFor="name" className="label-input label">NAME</label>

            <input
            id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input shadow"

            />
            </div>
            
            <div className="basic-input">
            <label htmlFor="phonenumber" className="label-input label">PHONE NUMBER</label>

            <input
            id="phonenumber"
              type="text"
              placeholder="Phone Number"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              required
              className="form-input shadow"

            />
            </div>
            <div className="basic-input">
            <label htmlFor="email" className="label-input label">EMAIL</label>

            <input
            id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input shadow"

            />
            </div>


            <div className="basic-input">
            <label htmlFor="languages" className="label-input label">LANGUAGES</label>

            <input
            id="languages"
              type="text"
              placeholder="Languages Known (comma separated)"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              required
              className="form-input shadow"

            />
            </div>
            
            <div className="basic-input">
            <label htmlFor="date" className="label-input label">DATE</label>

            <input
            id="date"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="form-input shadow"

            />
          </div>
          </div>
          <div className="form-section shadow job-requirements-container">
            <h2>Experience Details</h2>
            <label className="checked">
              <input
                type="checkbox"
                checked={hasExperience}
                onChange={(e) => setHasExperience(e.target.checked)}

              />
              Have Experience
            </label>
            {hasExperience && (
              <>
              <div className="basic-input">
                <label htmlFor="role" className="label-input label">ROLE</label>

                <input
                id="role"
                  type="text"
                  placeholder="Role Name"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  required={hasExperience}
                  className="form-input shadow"

                />
                </div>

              <div className="basic-input">
                <label htmlFor="role" className="label-input label">COMPANY</label>

                <input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required={hasExperience}
                  className="form-input shadow"

                />
                </div>
              </>
            )}
          </div>
          <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
      </div>
    </>
  );
};

export default AddJob;
