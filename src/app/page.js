import React from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaBirthdayCake, FaVenusMars, FaTint } from 'react-icons/fa';
import { File } from 'lucide-react';
import Link from 'next/link';

export default function PatientProfilePage() {
  const patientData = {
    picture: '/avatar.png',
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    bloodType: 'O+',
    drugHistory: ['Aspirin', 'Ibuprofen', 'Paracetamol'],
    recentMedicalRecords: [
      {
        date: '2024-03-10',
        diagnosis: 'Common Cold',
        medication: ['Paracetamol'],
        doctor: 'Dr. Smith',
        testTaken: 'Blood Test'
      },
      {
        date: '2024-02-25',
        diagnosis: 'Hypertension',
        medication: ['Amlodipine', 'Lisinopril'],
        doctor: 'Dr. Johnson',
        testTaken: 'Blood Pressure'
      }
    ]
  };

  return (
    <Card className="mx-auto w-full lg:w-2/3 my-12 p-6 bg-white dark:bg-transparent rounded-lg shadow-md">
      <CardHeader className="text-center">
        <img src={patientData.picture} alt="Patient" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <CardTitle className="text-2xl font-bold">{patientData.name}</CardTitle>
        <div className="flex justify-center items-center space-x-4 text-gray-600 dark:text-white">
          <div className="flex items-center">Age: {patientData.age}</div>
          <div className="flex items-center">Gender: {patientData.gender}</div>
          <div className="flex items-center">Blood Type: {patientData.bloodType}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <CardTitle className="text-lg font-semibold mb-2">Medical Basic Details</CardTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex items-center">
              <FaBirthdayCake className="mr-2" />
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="text" value={patientData.age} className={"dark:text-white"} disabled />
            </div>
            <div className="flex items-center">
              <FaVenusMars className="mr-2" />
              <Label htmlFor="gender">Gender</Label>
              <Input id="gender" type="text" value={patientData.gender} disabled />
            </div>
            <div className="flex items-center">
              <FaTint className="mr-2" />
              <Label htmlFor="bloodType">Blood Type</Label>
              <Input id="bloodType" type="text" value={patientData.bloodType} disabled />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <CardTitle className="text-lg font-semibold mb-2">Drug History</CardTitle>
          <ul className="list-disc list-inside">
            {patientData.drugHistory.map((drug, index) => (
              <li key={index}>{drug}</li>
            ))}
          </ul>
        </div>
        <div>
          <CardTitle className="text-lg font-semibold mb-2">Recent Medical Records</CardTitle>
          {patientData.recentMedicalRecords.map((record, index) => (
            <div key={index} className="mb-4">
              <div className="text-gray-600 dark:text-white">Date: {record.date}</div>
              <div className="text-gray-600 dark:text-white">Diagnosis: {record.diagnosis}</div>
              <div className="text-gray-600 dark:text-white">Medication: {record.medication.join(', ')}</div>
              <div className="text-gray-600 dark:text-white">Doctor: {record.doctor}</div>
            </div>
          ))}
        </div>
        <div>
          <CardTitle className="text-lg font-semibold mb-2">Uploaded Records</CardTitle>
          {patientData.recentMedicalRecords.map((record, index) => (
            <div key={index} className="mb-4">
              <div className="text-gray-600 dark:text-white">Date: {record.date}</div>
              <div className="text-gray-600 dark:text-white">Diagnosis: {record.diagnosis}</div>
              <div className="text-gray-600 dark:text-white flex gap-2 items-center">Test Taken: {record.testTaken} <Link href={"/user/test-record"} target='_blank'><File className='w-4 h-4' /></Link></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
