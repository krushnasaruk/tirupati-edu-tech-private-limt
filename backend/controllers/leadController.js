const excelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../leads.xlsx');

// Ensure the Excel file exists with proper headers
const initializeExcelFile = async () => {
  if (!fs.existsSync(filePath)) {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet('Leads');
    
    worksheet.columns = [
      { header: 'Type', key: 'type', width: 15 },
      { header: 'Date', key: 'date', width: 25 },
      { header: 'First Name', key: 'firstName', width: 20 },
      { header: 'Last Name', key: 'lastName', width: 20 },
      { header: 'Mobile', key: 'mobile', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Course', key: 'course', width: 20 },
      { header: 'Destination', key: 'destination', width: 20 },
      { header: 'Month', key: 'month', width: 15 }
    ];
    
    await workbook.xlsx.writeFile(filePath);
  }
};

initializeExcelFile();

const appendToExcel = async (data) => {
  const workbook = new excelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Leads');
  
  worksheet.addRow(data);
  await workbook.xlsx.writeFile(filePath);
};

exports.saveLead = async (req, res) => {
  try {
    const { name, mobile, course } = req.body;
    
    const data = {
      type: 'Modal Lead',
      date: new Date().toISOString(),
      firstName: name || '',
      lastName: '',
      mobile: mobile || '',
      email: '',
      course: course || '',
      destination: '',
      month: ''
    };
    
    await appendToExcel(data);
    res.status(200).json({ message: 'Lead saved successfully' });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Failed to save lead' });
  }
};

exports.saveContact = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, destination, course, month } = req.body;
    
    const data = {
      type: 'Contact Form',
      date: new Date().toISOString(),
      firstName: firstName || '',
      lastName: lastName || '',
      mobile: mobile || '',
      email: email || '',
      course: course || '',
      destination: destination || '',
      month: month || ''
    };
    
    await appendToExcel(data);
    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
};
