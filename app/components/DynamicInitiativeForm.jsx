// components/DynamicInitiativeForm.js
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import initiativeTypesConfig from '../config/initiativeTypesConfig.json';
import { PlusCircle, Save, Table } from 'lucide-react';

const DynamicInitiativeForm = ({ initiativeType }) => {
  const [formData, setFormData] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const config = initiativeTypesConfig[initiativeType];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions((prevSubmissions) => [...prevSubmissions, formData]);
    setFormData({});
  };

  if (!config) {
    return <p>Invalid initiative type selected.</p>;
  }

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <PlusCircle className="h-6 w-6 text-blue-500" />
            Create {config.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {config.fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}
            <Button type="submit" className="w-full">
              <Save className="mr-2 h-4 w-4" />
              Create Initiative
            </Button>
          </form>
        </CardContent>
      </Card>

      {submissions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Table className="h-5 w-5 text-blue-500" />
                Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      {config.fields.map((field) => (
                        <th key={field.name} className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                          {field.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((submission, index) => (
                      <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                        {config.fields.map((field) => (
                          <td key={field.name} className="px-4 py-2 text-sm text-gray-600">
                            {submission[field.name]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DynamicInitiativeForm;
