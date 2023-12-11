import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import ProdigyPadHomeIcon from '../icons/ProdigyPadHomeIcon';
import ProdigyPadSettingsIcon from '../icons/ProdigyPadSettingsIcon';
import ProdigyPadTrashIcon from '../icons/ProdigyPadTrashIcon';
import Settings from '../settings/settings';
import Trash from '../trash/trash';

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  className,
}) => {
  return (
    <nav className={twMerge('my-2', className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          "
            href={`/dashboard/${myWorkspaceId}`}
          >
            <ProdigyPadHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>

        <Settings>
          <li
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
            cursor-pointer
          "
          >
            <ProdigyPadSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>

        <Trash>
          <li
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          "
          >
            <ProdigyPadTrashIcon />
            <span>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  );
};

export default NativeNavigation;
