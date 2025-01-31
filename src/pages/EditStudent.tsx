import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  class: string;
  section: string;
  rollNumber: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

const EditStudent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<Student>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    class: "",
    section: "",
    rollNumber: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  useEffect(() => {
    if (id) {
      const fetchStudent = async () => {
        try {
          const studentDoc = doc(db, "students", id);
          const studentSnap = await getDoc(studentDoc);

          if (studentSnap.exists()) {
            const studentData = studentSnap.data() as Student;
            setStudent(studentData);
            setFormData(studentData);
          } else {
            console.log("Student not found!");
          }
        } catch (error) {
          console.error("Unable to fetch details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchStudent();
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: Student) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!id) {
        console.error("Student ID missing");
        return;
      }
      const studentDocRef = doc(db, "students", id);
      const updatedFormData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          `student.${key}`,
          value,
        ])
      );
      await updateDoc(studentDocRef, updatedFormData);
      alert("Student details updated!");
      navigate(`/students`);
    } catch (error) {
      console.error("Failed to update student:", error);
      alert("Update failed! Please try again.");
    }
  };

  if (loading) return <div className="text-center text-xl">Please wait, loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-blue-100 shadow-lg rounded-lg">
      <div className="mb-6">
        <button onClick={() => navigate(`/students`)} className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border border-blue-600 rounded-md" >
          &larr; Back
        </button>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Edit Student</h2>
      </div>

      {student ? (
        <form onSubmit={handleSave} className="space-y-6">
          {Object.keys(formData).map((key) => {
            if (key === "id") return null;

            return (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  {key}
                </label>
                <input type={key === "dateOfBirth" ? "date" : "text"} name={key} value={(formData as any)[key]} className="mt-1 p-2 border bg-white border-gray-300 rounded-md" required/>
              </div>
            );
          })}

          <div className="flex justify-center">
            <button type="submit" className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <p className="text-center text-lg text-red-600">Student not found</p>
      )}
    </div>
  );
};

export default EditStudent;
