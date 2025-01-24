'use client'
import { Share2 } from 'lucide-react';
import { useQueryState } from 'nuqs'
import React from 'react';
import { useCopyToClipboard } from 'usehooks-ts'

import { NewUserForm } from "@/src/components/new-user/form.new-user";
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { UserList } from '@/src/components/user-list/user-list';
import { UsersOverview } from '@/src/components/users-overview/users-overview';
import { toast } from '@/src/hooks/use-toast';
import { sectionParser } from '@/src/lib/searchParams';
import { Tabs } from '@/src/models/navigation.model';

export default function Page() {
  const [section] = useQueryState('section', sectionParser);
  const [copiedText, copy] = useCopyToClipboard();

  const renderSection = React.useCallback(() => {
    switch (section) {
      case Tabs.FORM:
        return <NewUserForm />;
      case Tabs.LIST:
        return <UserList />;
      case Tabs.GRAPH:
      default:
        return <UsersOverview />;
    }
  }, [section])

  const onSharedClick = () => {
    copy(window.location.href)
    toast({
      title: 'URL copied to your clipboard',
      description: window.location.href,
    })
  }

  return (<div className='flex flex-col items-center justify-center gap-4'>
    {renderSection()}
    <RainbowButton onClick={() => onSharedClick()} className="w-fit gap-2">Share <Share2 className='size-4' /></RainbowButton>
  </div>)
}