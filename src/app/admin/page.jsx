"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AdminPage() {
    const [formData, setFormData] = useState({
        picture: '',
        name: '',
        age: '',
        gender: '',
        bloodType: '',
        drugHistory: [],
        recentMedicalRecords: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDrugHistoryChange = (index, value) => {
        const updatedDrugHistory = [...formData.drugHistory];
        updatedDrugHistory[index] = value;
        setFormData({
            ...formData,
            drugHistory: updatedDrugHistory
        });
    };

    const handleAddDrug = () => {
        setFormData({
            ...formData,
            drugHistory: [...formData.drugHistory, '']
        });
    };

    const handleRemoveDrug = (index) => {
        const updatedDrugHistory = [...formData.drugHistory];
        updatedDrugHistory.splice(index, 1);
        setFormData({
            ...formData,
            drugHistory: updatedDrugHistory
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            picture: '',
            name: '',
            age: '',
            gender: '',
            bloodType: '',
            drugHistory: [],
            recentMedicalRecords: []
        });
    };

    return (
        <div className="container mx-auto my-12">
            <Card className="p-6 md:w-[700px] mx-auto">
                <h2 className='text-3xl text-center pb-6 uppercase leading-relaxed bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-medium'>Add a new user</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <label htmlFor="picture">Picture:</label>
                    <Input
                        id="picture"
                        name="picture"
                        type="file"
                        onChange={handleChange}
                        placeholder="Enter picture URL"
                    />
                    <label htmlFor="name">Name:</label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter patient name"
                    />
                    <label htmlFor="age">Age:</label>
                    <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter patient age"
                    />
                    <label htmlFor="gender">Gender:</label>
                    <Input
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        placeholder="Enter patient gender"
                    />
                    <label htmlFor="bloodType">Blood Type:</label>
                    <Input
                        id="bloodType"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        placeholder="Enter patient blood type"
                    />
                    <div className='my-4'>
                        <label htmlFor="drugHistory" className='mb-6'>Drug History:</label>
                        {formData.drugHistory.map((drug, index) => (
                            <div key={index} className="flex items-center gap-2 mb-3">
                                <Input
                                    id={`drug-${index}`}
                                    type="text"
                                    value={drug}
                                    onChange={(e) => handleDrugHistoryChange(index, e.target.value)}
                                    placeholder="Enter drug"
                                />
                                <Button type="button" onClick={() => handleRemoveDrug(index)}>-</Button>
                            </div>
                        ))}
                        <Button type="button" onClick={handleAddDrug} className={'ml-2'}>Add Drug</Button>
                    </div>
                    <label htmlFor="medicalRecords">Upload Medical Record(s):</label>
                    <Input
                        id="medicalRecords"
                        name="medicalRecords"
                        type="file"
                        onChange={handleChange}
                    />
                    <Button type="submit" className="mt-4 mx-auto w-1/2 bg-gradient-to-r from-red-500 to-orange-500">Submit</Button>
                </form>
            </Card>
        </div>
    );
};
