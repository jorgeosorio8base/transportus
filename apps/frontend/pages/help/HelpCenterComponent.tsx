import React from 'react';
import { Card, CardHeader, CardBody, Link, Input, Textarea, Button, Loading } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { HelpCenterComponentProps } from './';

export function HelpCenterComponent({ onSubmitSupportTicket, helpResources, currentUser }: HelpCenterComponentProps) {
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!subject || !message) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmitSupportTicket({
        subject,
        message,
        email: currentUser?.Email || '',
        name: `${currentUser?.FirstName || ''} ${currentUser?.LastName || ''}`.trim()
      });
      setSubject('');
      setMessage('');
    } catch (err) {
      setError('An error occurred while submitting the ticket. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen">
      <header className="bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-background-200))] px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <Icon 
              icon="ph:question-fill" 
              className="text-[hsl(var(--app-primary-500))] text-2xl mr-2 transition-colors hover:text-[hsl(var(--app-primary-600))] focus:text-[hsl(var(--app-primary-600))]"
              aria-hidden="true"
            />
            <h1 className="text-[hsl(var(--app-primary-500))] text-3xl font-bold">Help Center</h1>
          </div>
          {currentUser && (
            <div className="flex items-center">
              <span className="text-[hsl(var(--app-foreground-600))] mr-2">
                {currentUser.FirstName} {currentUser.LastName}
              </span>
              <img
                src={currentUser.Avatar?.url}
                alt={`${currentUser.FirstName} ${currentUser.LastName}`}
                className="w-8 h-8 rounded-full transition-transform hover:scale-105 focus:scale-105"
              />
            </div>
          )}
        </div>
      </header>

      <section className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {helpResources.map((resource, index) => (
            <Card key={index} className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
              <CardHeader className="bg-white border-b border-[hsl(var(--app-foreground-200))] p-4 flex items-center">
                <Icon icon={index === 0 ? "ph:book-open" : index === 1 ? "ph:book-bookmark" : "ph:book-open-text"} className="mr-2 text-[hsl(var(--app-primary-500))]" width="24" height="24" />
                <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">{resource.title}</h2>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-none p-0 m-0">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-3">
                      <Link href="#" className="text-[hsl(var(--app-primary-500))] hover:underline" aria-label={`Read more about ${item}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
          <CardHeader className="bg-white border-b border-[hsl(var(--app-foreground-200))] p-4">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">Submit a Support Ticket</h2>
          </CardHeader>
          <CardBody className="p-4">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <Input
                label="Name"
                placeholder="Your name"
                value={`${currentUser?.FirstName || ''} ${currentUser?.LastName || ''}`}
                readOnly
                aria-label="Your name"
              />
              <Input
                label="Email"
                placeholder="Your email"
                type="email"
                value={currentUser?.Email || ''}
                readOnly
                aria-label="Your email"
              />
              <Input
                label="Subject"
                placeholder="Enter the subject of your ticket"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                aria-label="Ticket subject"
              />
              <Textarea
                label="Message"
                placeholder="Describe your issue or question"
                minRows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-label="Ticket message"
              />
              {error && <p className="text-[hsl(var(--app-danger-500))]">{error}</p>}
              <Button
                color="primary"
                type="submit"
                className="bg-[hsl(var(--app-primary-500))] text-white py-2 px-4 rounded-md hover:bg-[hsl(var(--app-primary-600))]"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loading color="currentColor" size="sm" /> : 'Submit Ticket'}
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
