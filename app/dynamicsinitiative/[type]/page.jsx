'use client'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InitiativeTabs from '../../components/InitiativeTabs';
import SampleData from '../../data/sampleData.json';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InitiativePage = ({ params }) => {
  const initiativeType = params.type;
  const modelsData = SampleData[initiativeType] || {
    modelOne: [],
    modelTwo: []
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Initiatives
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl capitalize">
                {initiativeType} Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <InitiativeTabs initiativeType={initiativeType} modelsData={modelsData} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default InitiativePage;
