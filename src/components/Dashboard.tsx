import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Inbox, FileText } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [emails, setEmails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch emails with attachments
    // This is a placeholder and should be replaced with actual Gmail API calls
    const fetchEmails = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/emails');
        setEmails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {loading ? (
        <p>Loading emails...</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Emails with Attachments</h2>
          <ul className="space-y-4">
            {emails.map((email) => (
              <li key={email.id} className="bg-white shadow rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Inbox className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="font-medium">{email.subject}</span>
                </div>
                <p className="text-gray-600 mb-2">{email.snippet}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-1" />
                  <span>{email.attachments.length} attachment(s)</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link
        to="/files"
        className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        View Extracted Files
      </Link>
    </div>
  );
};

export default Dashboard;