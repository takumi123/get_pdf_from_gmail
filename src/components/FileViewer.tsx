import React, { useState } from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const FileViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [files, setFiles] = useState<any[]>([
    { id: 1, name: 'document1.pdf', type: 'pdf' },
    { id: 2, name: 'spreadsheet.xlsx', type: 'excel' },
    { id: 3, name: 'image.jpg', type: 'image' },
  ]);

  const handleFileSelect = (fileId: number) => {
    setSelectedFiles((prev) =>
      prev.includes(fileId.toString())
        ? prev.filter((id) => id !== fileId.toString())
        : [...prev, fileId.toString()]
    );
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + selectedFiles.map(id => files.find(file => file.id.toString() === id)?.name).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "selected_files.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewFile = (fileId: number) => {
    // Placeholder for file viewing logic
    console.log('Viewing file:', fileId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Extracted Files</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="space-y-4">
          {files.map((file) => (
            <li key={file.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedFiles.includes(file.id.toString())}
                  onChange={() => handleFileSelect(file.id)}
                  className="mr-3"
                />
                <FileText className="w-5 h-5 mr-2 text-blue-500" />
                <span>{file.name}</span>
              </div>
              <button
                onClick={() => handleViewFile(file.id)}
                className="text-blue-500 hover:text-blue-600"
              >
                <Eye className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={handleExportCSV}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          disabled={selectedFiles.length === 0}
        >
          <Download className="w-4 h-4 mr-2" />
          Export Selected as CSV
        </button>
      </div>
    </div>
  );
};

export default FileViewer;