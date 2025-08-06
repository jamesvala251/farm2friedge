import Button from '@/components/ui/button';
import Card from '@/components/ui/cards/card';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import pick from 'lodash/pick';
import { Form } from '@/components/ui/forms/form';
import { useUpdateUser } from '@/framework/user';
import type { UpdateUserInput, User } from '@/types';

const ProfileForm = ({ user }: { user: User }) => {
  const { mutate: updateProfile, isLoading } = useUpdateUser();

  function onSubmit(values: UpdateUserInput) {
    if (!user) {
      return false;
    }
    updateProfile({
      id: user.id,
      name: values.name,
      profile: {
        id: user?.profile?.id,
        bio: values?.profile?.bio ?? '',
        //@ts-ignore
        avatar: values?.profile?.avatar?.[0],
      },
    });
  }

  return (
    <div className="space-y-8">
      {/* Profile Picture Section */}
      <Card className="w-full p-8">
        <h3 className="mb-6 text-xl font-semibold text-heading">Profile Picture</h3>
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <Button variant="outline" size="small">
              Upload Photo
            </Button>
            <p className="mt-1 text-sm text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
          </div>
        </div>
      </Card>

      {/* Personal Information Section */}
      <Card className="w-full p-8">
        <h3 className="mb-6 text-xl font-semibold text-heading">Personal Information</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input
              name="fullName"
              className="w-full"
              label="Full Name"
              placeholder="Enter your full name"
              defaultValue={user?.name || 'John Doe'}
              variant="outline"
            />
          </div>
          <div>
            <Input
              name="email"
              className="w-full"
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              defaultValue={user?.email || 'john.doe@example.com'}
              variant="outline"
            />
          </div>
          <div>
            <Input
              name="contact"
              className="w-full"
              label="Contact Number"
              type="tel"
              placeholder="Enter your phone number"
              defaultValue={user?.profile?.contact || '+1 (555) 123-4567'}
              variant="outline"
            />
          </div>
          <div>
            <Input
              name="dob"
              className="w-full"
              label="Date of Birth"
              type="date"
              defaultValue="1990-01-01"
              variant="outline"
            />
          </div>
        </div>
        <div className="mt-6">
          <TextArea
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself..."
            defaultValue={user?.profile?.bio || 'I love shopping for fresh groceries and organic products. Always looking for the best deals and quality items.'}
            variant="outline"
            className="w-full"
            rows={4}
          />
        </div>
      </Card>

      {/* Addresses Section */}
      <Card className="w-full p-8">
        <h3 className="mb-6 text-xl font-semibold text-heading">Addresses</h3>
        <div className="space-y-6">
          {/* Billing Address */}
          <div>
            <h4 className="mb-4 text-lg font-medium text-heading">Billing Address</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="billingStreet"
                className="w-full"
                label="Street Address"
                placeholder="Enter street address"
                defaultValue="123 Main Street"
                variant="outline"
              />
              <Input
                name="billingApt"
                className="w-full"
                label="Apartment/Suite"
                placeholder="Apt, suite, etc. (optional)"
                defaultValue="Apt 4B"
                variant="outline"
              />
              <Input
                name="billingCity"
                className="w-full"
                label="City"
                placeholder="Enter city"
                defaultValue="New York"
                variant="outline"
              />
              <Input
                name="billingState"
                className="w-full"
                label="State/Province"
                placeholder="Enter state"
                defaultValue="NY"
                variant="outline"
              />
              <Input
                name="billingZip"
                className="w-full"
                label="ZIP/Postal Code"
                placeholder="Enter ZIP code"
                defaultValue="10001"
                variant="outline"
              />
              <Input
                name="billingCountry"
                className="w-full"
                label="Country"
                placeholder="Enter country"
                defaultValue="United States"
                variant="outline"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h4 className="mb-4 text-lg font-medium text-heading">Shipping Address</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="shippingStreet"
                className="w-full"
                label="Street Address"
                placeholder="Enter street address"
                defaultValue="456 Oak Avenue"
                variant="outline"
              />
              <Input
                name="shippingApt"
                className="w-full"
                label="Apartment/Suite"
                placeholder="Apt, suite, etc. (optional)"
                defaultValue="Unit 7"
                variant="outline"
              />
              <Input
                name="shippingCity"
                className="w-full"
                label="City"
                placeholder="Enter city"
                defaultValue="Los Angeles"
                variant="outline"
              />
              <Input
                name="shippingState"
                className="w-full"
                label="State/Province"
                placeholder="Enter state"
                defaultValue="CA"
                variant="outline"
              />
              <Input
                name="shippingZip"
                className="w-full"
                label="ZIP/Postal Code"
                placeholder="Enter ZIP code"
                defaultValue="90210"
                variant="outline"
              />
              <Input
                name="shippingCountry"
                className="w-full"
                label="Country"
                placeholder="Enter country"
                defaultValue="United States"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          className="px-8 py-3 text-lg"
          loading={isLoading}
          disabled={isLoading}
        >
          Save All Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;
