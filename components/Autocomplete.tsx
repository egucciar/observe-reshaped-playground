import {
  Autocomplete as ReshapedAutocomplete,
  AutocompleteProps as ReshapedAutocompleteProps,
} from "reshaped";

export type AutocompleteProps = ReshapedAutocompleteProps;

export function Autocomplete({
  size = "small",
  fallbackAdjustLayout = true,
  ...props
}: AutocompleteProps) {
  return (
    <ReshapedAutocomplete
      size={size}
      fallbackAdjustLayout={fallbackAdjustLayout}
      {...props}
    />
  );
}

Autocomplete.Item = ReshapedAutocomplete.Item;
