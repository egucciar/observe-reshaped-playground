#!/bin/bash

# Script to add Text import to files that need it
# Files to process (those that still have heading tags)

files=(
"TooltipPage.tsx"
"ToggleButtonGroupPage.tsx"
"ToastPage.tsx"
"ToggleButtonPage.tsx"
"TimelinePage.tsx"
"TextFieldPage.tsx"
"TextAreaPage.tsx"
"TablePage.tsx"
"SwitchPage.tsx"
"StepperPage.tsx"
"SliderPage.tsx"
"SkeletonPage.tsx"
"SelectPage.tsx"
"TabsPage.tsx"
"ViewPage.tsx"
"ProgressPage.tsx"
"RadioPage.tsx"
"ResizablePage.tsx"
"ModalPage.tsx"
"NumberFieldPage.tsx"
"PaginationPage.tsx"
"LoaderPage.tsx"
"MenuItemPage.tsx"
"DividerPage.tsx"
"DropdownMenuPage.tsx"
"FileUploadPage.tsx"
"LinkPage.tsx"
"CardPage.tsx"
"CheckboxPage.tsx"
"ButtonPage.tsx"
"BreadcrumbsPage.tsx"
"AutocompletePage.tsx"
"AvatarPage.tsx"
"BadgePage.tsx"
"ActionBarPage.tsx"
"AlertPage.tsx"
)

cd /Users/erica.gucciardo/observe-reshaped-playground/views

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Check if Text import already exists
    if ! grep -q "import { Text }" "$file"; then
      echo "File: $file needs Text import"
    fi
  fi
done
