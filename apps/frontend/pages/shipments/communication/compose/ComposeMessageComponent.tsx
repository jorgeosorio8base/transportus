import React from 'react';
import { Select, Input, Textarea, CheckboxGroup, Checkbox, Button, SelectItem, SelectSection } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ComposeMessageComponentProps } from '@transportus/core';

export function ComposeMessageComponent({
  recipients,
  subject,
  body,
  priority,
  deliveryMethods,
  attachments,
  onRecipientsChange,
  onSubjectChange,
  onBodyChange,
  onPriorityChange,
  onDeliveryMethodsChange,
  onAttachmentsChange,
  onPreview,
  onSendMessage,
  isLoading
}: ComposeMessageComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 md:p-6 bg-[hsl(var(--app-background-50))]">
      <header className="col-span-12 flex justify-between items-center p-4 md:p-6 bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-300))] shadow-[var(--app-box-shadow-small)]">
        <div className="flex items-center">
          <Button
            isIconOnly
            color="primary"
            aria-label="Go back"
            className="mr-6"
            isLoading={isLoading}
          >
            <Icon icon="ph:arrow-left-bold" className="text-[hsl(var(--app-foreground-50))] text-2xl" />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))]">
            {isLoading ? 'Loading...' : 'Compose Message'}
          </h1>
        </div>
      </header>

      <section className="col-span-12 bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-4">
            <Select
              label="Recipients"
              placeholder="Select recipients"
              selectedKeys={recipients}
              onSelectionChange={(keys) => onRecipientsChange(Array.from(keys) as string[])}
              className="w-full"
              isMultiple
            >
              <SelectSection title="Internal">
                <SelectItem key="recipient1">Recipient 1</SelectItem>
                <SelectItem key="recipient2">Recipient 2</SelectItem>
              </SelectSection>
              <SelectSection title="External">
                <SelectItem key="recipient3">Recipient 3</SelectItem>
              </SelectSection>
            </Select>
          </div>

          <div className="col-span-12 mb-4">
            <Input
              label="Subject"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => onSubjectChange(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="col-span-12 mb-4">
            <Textarea
              label="Message"
              placeholder="Enter your message here"
              value={body}
              onChange={(e) => onBodyChange(e.target.value)}
              className="w-full"
              rows={6}
            />
          </div>

          <div className="col-span-12 md:col-span-6 mb-4">
            <Select
              label="Priority"
              placeholder="Select priority"
              selectedKeys={[priority]}
              onSelectionChange={(keys) => onPriorityChange(Array.from(keys)[0] as string)}
              className="w-full"
            >
              <SelectItem key="low">Low</SelectItem>
              <SelectItem key="normal">Normal</SelectItem>
              <SelectItem key="high">High</SelectItem>
            </Select>
          </div>

          <div className="col-span-12 md:col-span-6 mb-4">
            <CheckboxGroup
              label="Delivery Methods"
              value={deliveryMethods}
              onValueChange={onDeliveryMethodsChange}
            >
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="sms">SMS</Checkbox>
              <Checkbox value="in-app">In-App Notification</Checkbox>
            </CheckboxGroup>
          </div>

          <div className="col-span-12 mb-4">
            <p className="text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">
              Attachments
            </p>
            <div className="border-2 border-dashed border-[hsl(var(--app-primary-200))] rounded-lg p-4 text-center">
              <Button
                auto
                light
                icon={<Icon icon="ph:upload" aria-label="Upload file" className="text-2xl" />}
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Upload a file or drag and drop
              </Button>
              <p className="text-xs text-[hsl(var(--app-foreground-400))] mt-2">
                PNG, JPG, GIF up to 10MB
              </p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e) => onAttachmentsChange(Array.from(e.target.files || []))}
                multiple
              />
            </div>
          </div>

          <div className="col-span-12 flex justify-end space-x-2">
            <Button
              auto
              color="secondary"
              onClick={onPreview}
              isDisabled={isLoading}
            >
              Preview
            </Button>
            <Button
              auto
              color="primary"
              onClick={onSendMessage}
              isDisabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon icon="ph:circle-notch" aria-label="Loading" className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
