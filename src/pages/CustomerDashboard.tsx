import React, { useState } from 'react';
import { 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MapPin,
  DollarSign,
  Phone,
  MessageCircle,
  Star,
  Edit,
  Trash2
} from 'lucide-react';
import Header from '@/components/Header';
import { useJobs } from '@/contexts/JobContext';
import JobForm, { JobFormData } from '@/components/JobManagement/JobForm';
import ChatModal from '@/components/Chat/ChatModal';

const CustomerDashboard = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<number | null>(null);
  const [chatJobId, setChatJobId] = useState<number | null>(null);
  const { jobs, addJob, updateJob, getJobsByCustomer } = useJobs();

  // Mock customer info (this would come from auth)
  const customerName = 'Current User';
  const userJobs = getJobsByCustomer(customerName);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleCreateJob = (jobData: JobFormData) => {
    addJob(jobData);
    setShowJobForm(false);
  };

  const handleUpdateJob = (jobData: JobFormData) => {
    if (editingJob) {
      updateJob(editingJob, jobData);
      setEditingJob(null);
    }
  };

  const handleEditJob = (jobId: number) => {
    setEditingJob(jobId);
  };

  const handleDeleteJob = (jobId: number) => {
    if (confirm('Are you sure you want to delete this job?')) {
      console.log('Deleting job:', jobId);
    }
  };

  const handleStartChat = (jobId: number) => {
    setChatJobId(jobId);
  };

  const currentEditingJob = editingJob ? jobs.find(job => job.id === editingJob) : null;
  const chatJob = chatJobId ? jobs.find(job => job.id === chatJobId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userType="customer" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Jobs</h1>
            <p className="text-gray-600">
              Manage your home repair and maintenance requests
            </p>
          </div>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            onClick={() => setShowJobForm(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Post New Job</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* ... keep existing stats cards with updated styling */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold">{userJobs.length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold">
                  {userJobs.filter(job => job.status === 'in-progress').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold">
                  {userJobs.filter(job => job.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold">
                  {userJobs.filter(job => job.status === 'pending').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {userJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    {job.status === 'completed' ? job.completedDate : job.postedDate}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(job.status)}`}>
                  {getStatusIcon(job.status)}
                  <span className="capitalize">{job.status}</span>
                </span>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {job.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                    {job.budget}
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                    {job.category}
                  </div>
                </div>

                {/* Worker Info (for accepted/completed jobs) */}
                {job.worker && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{job.worker}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{job.workerRating}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {job.workerPhone && (
                          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
                            <Phone className="h-4 w-4 mr-1 inline" />
                            Call
                          </button>
                        )}
                        <button 
                          className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50"
                          onClick={() => handleStartChat(job.id)}
                        >
                          <MessageCircle className="h-4 w-4 mr-1 inline" />
                          Chat
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pending job info */}
                {job.status === 'pending' && job.proposals && (
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>{job.proposals} workers</strong> have submitted proposals for this job.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-2">
                  <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    {job.status === 'pending' && (
                      <>
                        <button 
                          className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50"
                          onClick={() => handleEditJob(job.id)}
                        >
                          <Edit className="h-4 w-4 mr-1 inline" />
                          Edit
                        </button>
                        <button 
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1 inline" />
                          Delete
                        </button>
                      </>
                    )}
                    {job.status === 'completed' && (
                      <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
                        <Star className="h-4 w-4 mr-1 inline" />
                        Rate Worker
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {userJobs.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Jobs Yet</h3>
            <p className="text-gray-600 mb-4">
              You haven't posted any jobs yet. Get started by posting your first job!
            </p>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2 mx-auto"
              onClick={() => setShowJobForm(true)}
            >
              <Plus className="h-4 w-4" />
              <span>Post Your First Job</span>
            </button>
          </div>
        )}
      </main>

      {/* Job Form Modal */}
      {showJobForm && (
        <JobForm
          title="Post New Job"
          onSubmit={handleCreateJob}
          onCancel={() => setShowJobForm(false)}
        />
      )}

      {editingJob && currentEditingJob && (
        <JobForm
          title="Edit Job"
          initialData={currentEditingJob}
          onSubmit={handleUpdateJob}
          onCancel={() => setEditingJob(null)}
        />
      )}

      {/* Chat Modal */}
      {chatJob && (
        <ChatModal
          job={chatJob}
          currentUserId={customerName}
          currentUserType="customer"
          onClose={() => setChatJobId(null)}
        />
      )}
    </div>
  );
};

export default CustomerDashboard;