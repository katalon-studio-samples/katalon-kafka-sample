<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Kafka Test Suite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>07513cb6-39ee-4dac-907e-91548b8b24b0</testSuiteGuid>
   <testCaseLink>
      <guid>fa56d7de-41d6-4e0b-a0fc-2e0707e63783</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>'John'</defaultValue>
         <description></description>
         <id>59fc8799-9b09-4487-9f74-a644a8155823</id>
         <masked>false</masked>
         <name>firstName</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Kafka Producer Test</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>52c8e4be-72a9-409b-ac8d-5529c6980105</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sample Persons</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>52c8e4be-72a9-409b-ac8d-5529c6980105</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>firstName</value>
         <variableId>59fc8799-9b09-4487-9f74-a644a8155823</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>52c8e4be-72a9-409b-ac8d-5529c6980105</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>lastName</value>
         <variableId>34b97d2e-dd2d-49b2-995a-7609f2eaad50</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>52c8e4be-72a9-409b-ac8d-5529c6980105</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>age</value>
         <variableId>48713945-6730-4cb3-82f6-133f12cbafa9</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>f2d94839-c246-4226-93b1-a00db0365be8</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Kafka Consumer Test</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>2a73bef9-a5b8-48f8-b164-5a2911b6ecd0</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sample Persons</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>2a73bef9-a5b8-48f8-b164-5a2911b6ecd0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>firstName</value>
         <variableId>35c7b304-f26f-4c29-9e1e-1744b58d67f2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>2a73bef9-a5b8-48f8-b164-5a2911b6ecd0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>lastName</value>
         <variableId>513ffb21-f9b3-46b7-ac50-49f7ff505082</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>2a73bef9-a5b8-48f8-b164-5a2911b6ecd0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>age</value>
         <variableId>d4fbf2ae-8669-418e-8694-d804ee71a190</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>