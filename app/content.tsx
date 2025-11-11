'use client'

import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import { View } from '../components/View'
import { Resizable } from '../components/Resizable'
import { ThemeToggle } from '../components/ThemeToggle'
import { ActionBarPage } from '../views/ActionBarPage'
import { AlertPage } from '../views/AlertPage'
import { AutocompletePage } from '../views/AutocompletePage'
import { AvatarPage } from '../views/AvatarPage'
import { BadgePage } from '../views/BadgePage'
import { BreadcrumbsPage } from '../views/BreadcrumbsPage'
import { ButtonPage } from '../views/ButtonPage'
import { CardPage } from '../views/CardPage'
import { CheckboxPage } from '../views/CheckboxPage'
import { DividerPage } from '../views/DividerPage'
import { DropdownMenuPage } from '../views/DropdownMenuPage'
import { FileUploadPage } from '../views/FileUploadPage'
import { LinkPage } from '../views/LinkPage'
import { LoaderPage } from '../views/LoaderPage'
import { MenuItemPage } from '../views/MenuItemPage'
import { ModalPage } from '../views/ModalPage'
import { NumberFieldPage } from '../views/NumberFieldPage'
import { PaginationPage } from '../views/PaginationPage'
import { ProgressPage } from '../views/ProgressPage'
import { RadioPage } from '../views/RadioPage'
import { ResizablePage } from '../views/ResizablePage'
import { TabsPage } from '../views/TabsPage'
import { ViewPage } from '../views/ViewPage'

export function Content() {
  const [activeTab, setActiveTab] = useState('actionbar')

  const renderPage = () => {
    switch (activeTab) {
      case 'actionbar':
        return <ActionBarPage />
      case 'alert':
        return <AlertPage />
      case 'autocomplete':
        return <AutocompletePage />
      case 'avatar':
        return <AvatarPage />
      case 'badge':
        return <BadgePage />
      case 'breadcrumbs':
        return <BreadcrumbsPage />
      case 'button':
        return <ButtonPage />
      case 'card':
        return <CardPage />
      case 'checkbox':
        return <CheckboxPage />
      case 'divider':
        return <DividerPage />
      case 'dropdownmenu':
        return <DropdownMenuPage />
      case 'fileupload':
        return <FileUploadPage />
      case 'link':
        return <LinkPage />
      case 'loader':
        return <LoaderPage />
      case 'menuitem':
        return <MenuItemPage />
      case 'modal':
        return <ModalPage />
      case 'numberfield':
        return <NumberFieldPage />
      case 'pagination':
        return <PaginationPage />
      case 'progress':
        return <ProgressPage />
      case 'radio':
        return <RadioPage />
      case 'resizable':
        return <ResizablePage />
      case 'tabs':
        return <TabsPage />
      case 'view':
        return <ViewPage />
      default:
        return <ActionBarPage />
    }
  }

  return (
    <View height="100vh" width="100%" overflow="hidden" position="relative">
      <View position="absolute" insetTop={4} insetEnd={4} className="!z-[1000]">
        <ThemeToggle />
      </View>
      <Resizable variant="bordered" height="100%">
        <Resizable.Item defaultSize="200px" minSize="150px" maxSize="400px">

          <View paddingInline={2} paddingTop={2}>
            <Tabs variant="pills" direction="column" value={activeTab} onChange={(args) => setActiveTab(args.value)}>
              <Tabs.List>
                <Tabs.Item value="actionbar">ActionBar</Tabs.Item>
                <Tabs.Item value="alert">Alert</Tabs.Item>
                <Tabs.Item value="autocomplete">Autocomplete</Tabs.Item>
                <Tabs.Item value="avatar">Avatar</Tabs.Item>
                <Tabs.Item value="badge">Badge</Tabs.Item>
                <Tabs.Item value="breadcrumbs">Breadcrumbs</Tabs.Item>
                <Tabs.Item value="button">Button</Tabs.Item>
                <Tabs.Item value="card">Card</Tabs.Item>
                <Tabs.Item value="checkbox">Checkbox</Tabs.Item>
                <Tabs.Item value="divider">Divider</Tabs.Item>
                <Tabs.Item value="dropdownmenu">DropdownMenu</Tabs.Item>
                <Tabs.Item value="fileupload">FileUpload</Tabs.Item>
                <Tabs.Item value="link">Link</Tabs.Item>
                <Tabs.Item value="loader">Loader</Tabs.Item>
                <Tabs.Item value="menuitem">MenuItem</Tabs.Item>
                <Tabs.Item value="modal">Modal</Tabs.Item>
                <Tabs.Item value="numberfield">NumberField</Tabs.Item>
                <Tabs.Item value="pagination">Pagination</Tabs.Item>
                <Tabs.Item value="progress">Progress</Tabs.Item>
                <Tabs.Item value="radio">Radio</Tabs.Item>
                <Tabs.Item value="resizable">Resizable</Tabs.Item>
                <Tabs.Item value="tabs">Tabs</Tabs.Item>
                <Tabs.Item value="view">View</Tabs.Item>
              </Tabs.List>
            </Tabs>
          </View>
        </Resizable.Item>

        <Resizable.Handle />

        <Resizable.Item>
          <View height="100vh" width="100%" className="overflow-x-hidden overflow-y-auto">
            {renderPage()}
          </View>
        </Resizable.Item>
      </Resizable>
    </View>
  )
}
