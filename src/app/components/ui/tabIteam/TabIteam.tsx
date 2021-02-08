import React from 'react';
import TabsModel from '../../../../data/tabs';

interface TabItemProps {
  tab: TabsModel;
  index: number;
  isActive: boolean;
  onClick: () => void;
  renderTab?: (tab: TabsModel, index: number) => React.ReactNode;
}

export const TabItem = ({
  tab,
  index,
  onClick,
  isActive,
  renderTab
}: TabItemProps) => (
  <li
    className={isActive
      ? 'tabs__tab tabs__tab--is-active'
      : 'tabs__tab'}
    onClick={() => onClick()}
  >
    {!renderTab
      ? tab.label
      : renderTab(tab, index)
    }
  </li>
);
