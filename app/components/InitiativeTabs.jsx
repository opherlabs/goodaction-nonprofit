// components/InitiativeTabs.js
'use client'
import React, { useState } from 'react';
import ModelTable from './ModelTable';
import initiativeTypesConfig from '../config/initiativeTypesConfig.json';


const InitiativeTabs = ({ config }) => {
  const [activeTab, setActiveTab] = useState('modelOne');

  // Ensure config and config.models are defined
  const models = config?.models || {};

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h2>{config.title}</h2>
      <div>
        {Object.keys(models).map((modelKey) => (
          <button
            key={modelKey}
            onClick={() => handleTabClick(modelKey)}
            style={{
              padding: '10px',
              margin: '5px',
              backgroundColor: activeTab === modelKey ? '#ccc' : '#eee',
              cursor: 'pointer'
            }}
          >
            {modelKey}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <ModelTable
          modelData={modelsData[activeTab]}
          modelConfig={models[activeTab]}
        />
      </div>
    </div>
  );
};

export default InitiativeTabs;
