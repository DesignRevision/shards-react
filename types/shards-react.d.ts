// Type definitions for shards-react 1.0.3
// Definitions by: Jan Rahtkens <https://github.com/BendaCoding>
// TypeScript Version: 3.6

const React = import('react');

type Tag = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type InnerRef = React.RefObject<any>;

type Size = 'lg' | 'sm';

type Theme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

type Target = any;

type Column =
  | boolean
  | number
  | string
  | {
      offset?: number | string;
      size?: boolean | number | string;
      order?: number | string;
    };

type Direction = 'up' | 'down' | 'left' | 'right';

type InputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'range'
  | 'color'
  | 'date'
  | 'time'
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'file';

interface BaseProps {
  /**
   * The class name.
   */
  className?: string;
  /**
   * The component tag type.
   */
  tag?: Tag;
  style?: React.CSSProperties;
}

interface AlertProps extends BaseProps {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is outline, or not.
   */
  outline?: boolean;
  /**
   * Whether it is pill, or not.
   */
  pill?: boolean;
  /**
   * Whether it is squared, or not.
   */
  squared?: boolean;
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it should be displayed as a block (full-width), or not.
   */
  block?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The inner ref.
   * @type {[type]}
   */
  innerRef?: InnerRef;
}

export declare const Alert: React.ComponentType<AlertProps>;

interface BadgeProps extends BaseProps {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it should be outlined, or not.
   */
  outline?: boolean;
  /**
   * Whether it should be a pill, or not.
   */
  pill?: boolean;
}

export declare const Badge: React.ComponentType<BadgeProps>;

interface BreadcrumbProps extends BaseProps {
  /**
   * The breadcrumb list class name.
   */
  listClassName?: string;
  /**
   * The aria label value.
   */
  'aria-label'?: string;
  /**
   * The breadcrumb list tag.
   */
  listTag?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export declare const Breadcrumb: React.ComponentType<BreadcrumbProps>;

export interface BreadcrumbItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
}

export declare const BreadcrumbItem: React.ComponentType<BreadcrumbItemProps>;

interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The size.
   */
  size?: Size | 'gedam';
  /**
   * Whether it is outline, or not.
   */
  outline?: boolean;
  /**
   * Whether it is pill, or not.
   */
  pill?: boolean;
  /**
   * Whether it is squared, or not.
   */
  squared?: boolean;
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it should be displayed as a block (full-width), or not.
   */
  block?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const Button: React.ComponentType<ButtonProps>;

interface ButtonGroupProps {
  /**
   * The class name.
   */
  className?: string;
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is vertical, or not.
   */
  vertical?: boolean;
}

export declare const ButtonGroup: React.ComponentType<ButtonGroupProps>;

interface ButtonToolbarProps {
  /**
   * The class name.
   */
  className?: string;
}

export declare const ButtonToolbar: React.ComponentType<ButtonToolbarProps>;

interface CardProps extends BaseProps {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it is outline, or not.
   */
  outline?: boolean;
  /**
   * Whether the card is small, or not.
   */
  small?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const Card: React.ComponentType<CardProps>;

interface CardBodyProps extends BaseProps {}

export declare const CardBody: React.ComponentType<CardBodyProps>;

interface CardColumnsProps extends BaseProps {}

export declare const CardColumns: React.ComponentType<CardColumnsProps>;

interface CardDeckProps extends BaseProps {}

export declare const CardDeck: React.ComponentType<CardDeckProps>;

interface CardFooterProps extends BaseProps {}

export declare const CardFooter: React.ComponentType<CardFooterProps>;

interface CardGroupProps extends BaseProps {}

export declare const CardGroup: React.ComponentType<CardGroupProps>;

interface CardHeaderProps extends BaseProps {}

export declare const CardHeader: React.ComponentType<CardHeaderProps>;

interface CardImgProps extends BaseProps {
  /**
   * Whether the image is positioned at the top of the card, or not.
   */
  top?: boolean;
  /**
   * Whether the image is positioned at the bottom of the card, or not.
   */
  bottom?: boolean;
}

export declare const CardImg: React.ComponentType<CardImgProps>;

interface CardImgOverlayProps extends BaseProps {}

export declare const CardImgOverlay: React.ComponentType<CardImgOverlayProps>;

interface CardLinkProps extends BaseProps {
  innerRef?: InnerRef;
}

export declare const CardLink: React.ComponentType<CardLinkProps>;

interface CardSubtitleProps extends BaseProps {}

export declare const CardSubtitle: React.ComponentType<CardSubtitleProps>;

interface CardTextProps extends BaseProps {}

export declare const CardText: React.ComponentType<CardTextProps>;

interface CardTitleProps extends BaseProps {}

export declare const CardTitle: React.ComponentType<CardTitleProps>;

interface CollapseProps extends BaseProps {
  /**
   * Whether it is open, or not.
   */
  open?: boolean;
  /**
   * Whether it is located inside a navbar, or not.
   */
  navbar?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const Collapse: React.ComponentType<CollapseProps>;
// TODO: add css transition group props

interface ColProps extends BaseProps {
  /**
   * Col number or config object for xs viewports.
   */
  xs?: Column;
  /**
   * Col number or config object for sm viewports.
   */
  sm?: Column;
  /**
   * Col number or config object for md viewports.
   */
  md?: Column;
  /**
   * Col number or config object for lg viewports.
   */
  lg?: Column;
  /**
   * Col number or config object for xl viewports.
   */
  xl?: Column;
  /**
   * The available breakpoints.
   */
  breakpoints?: Array<any>;
}

export declare const Col: React.ComponentType<ColProps>;

interface ContainerProps extends BaseProps {
  /**
   * Whether it is fluid, or not.
   */
  fluid?: boolean;
}

export declare const Container: React.ComponentType<ContainerProps>;

interface RowProps extends BaseProps {
  /**
   * Whether it has gutters, or not.
   */
  noGutters?: boolean;
  /**
   * Whether it is located inside a form, or not.
   */
  form?: boolean;
}

export declare const Row: React.ComponentType<RowProps>;

export declare const DatePicker: React.ComponentType<any>;

interface DropdownProps extends BaseProps {
  /**
   * Whether it is open, or not.
   */
  open?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The toggle function.
   */
  toggle?: (...args) => any;
  /**
   * Whether it is located inside a navbar, or not.
   */
  inNavbar?: boolean;
  /**
   * Whether it is a drop-up, or not.
   */
  dropup?: boolean;
  /**
   * Whether it is located inside a Nav, or not.
   */
  nav?: boolean;
  /**
   * The direction.
   */
  direction?: Direction;
}

export declare const Dropdown: React.ComponentType<any>;

interface DropdownItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * Whether it is a divider, or not.
   */
  divider?: boolean;
  /**
   * Whether it is a dropdown header item, or not.
   */
  header?: boolean;
  /**
   * The function that should be triggered on click.
   */
  onClick?: (...args) => any;
  /**
   * Whether it should toggle the dropdown, or not.
   */
  toggle?: boolean;
}

export declare const DropdownItem: React.ComponentType<DropdownItemProps>;

export interface DropdownMenuProps extends BaseProps {
  /**
   * Whether it is positioned on the right side, or not.
   */
  right?: boolean;
  /**
   * Whether it should flip, or not.
   */
  flip?: boolean;
  /**
   * Whether the dropdown is small, or not.
   */
  small?: boolean;
  /**
   * The modifiers config object.
   */
  modifiers?: any;
  /**
   * Whether it should persist, or not.
   */
  persist?: boolean;
}

export declare const DropdownMenu: React.ComponentType<DropdownMenuProps>;

export interface DropdownToggleProps extends BaseProps {
  /**
   * Whether it should display a caret, or not.
   */
  caret?: boolean;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The function that should be triggered on click.
   */
  onClick?: (...args) => any;
  /**
   * The aria-haspopup attribute.
   */
  'aria-haspopup'?: boolean;
  /**
   * Whether it is split, or not.
   */
  split?: boolean;
  /**
   * Whether it is located inside a nav, or not.
   */
  nav?: boolean;
  /**
   * The component's tag type.
   */
  tag?: Tag;
}

export declare const DropdownToggle: React.ComponentType<DropdownToggleProps>;

export interface FadeProps extends BaseProps {
  baseClass?: string;
  baseClassActive?: string;
  innerRef?: InnerRef;
} // TODO: Transition Props

export declare const Fade: React.ComponentType<FadeProps>;

type FormBaseProps = React.FormHTMLAttributes<HTMLFormElement>;

export interface FormProps extends BaseProps, FormBaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const Form: React.ComponentType<FormProps>;

export interface FormFeedbackProps extends BaseProps {
  /**
   * Whether the feedback is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether the feedback should be displayed as tooltip.
   */
  tooltip?: boolean;
}

export declare const FormFeedback: React.ComponentType<FormFeedbackProps>;

export interface FormCheckboxProps extends BaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * Whether it is a toggle button, or not.
   */
  toggle?: boolean;
  /**
   * Whether it is small (toggle), or not.
   */
  small?: boolean;
  /**
   * The onChange handler.
   */
  onChange?: (...args) => any;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const FormCheckbox: React.ComponentType<FormCheckboxProps>;

export interface FormGroupProps extends BaseProps {
  /**
   * Whether it is a row, or not.
   */
  row?: boolean;
  /**
   * Whether it is a form check, or not.
   */
  check?: boolean;
  /**
   * Whether it is displayed inline (form check) or not.
   */
  inline?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
}

export declare const FormGroup: React.ComponentType<FormGroupProps>;

export interface FormInputBaseProps extends BaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * The input type.
   */
  type?: InputTypes;
  /**
   * Whether it is plaintext, or not.
   */
  plaintext?: boolean;
  /**
   * The input's size.
   */
  size?: Size;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type FormInputProps = FormInputBaseProps &
  Omit<InputProps, keyof FormInputBaseProps>;

export declare const FormInput: React.ComponentType<FormInputProps>;

export interface FormRadioProps extends BaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * The function that should run on change.
   */
  onChange?: (...args) => any;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const FormRadio: React.ComponentType<FormRadioProps>;

export interface FormSelectProps extends BaseProps {
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const FormSelect: React.ComponentType<FormSelectProps>;

export interface FormTextareaBaseProps extends BaseProps {
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it should be displayed as plain text, or not.
   */
  plaintext?: boolean;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;
type FormTextareaProps = FormTextareaBaseProps &
  Omit<TextareaProps, keyof FormTextareaBaseProps>;

export declare const FormTextarea: React.ComponentType<FormTextareaProps>;

export interface InputGroupProps extends BaseProps {
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is seamless, or not.
   */
  seamless?: boolean;
}

export declare const InputGroup: React.ComponentType<InputGroupProps>;

export interface InputGroupAddonProps extends BaseProps {
  /**
   * The addon type.
   */
  type: 'prepend' | 'append';
}

export declare const InputGroupAddon: React.ComponentType<InputGroupAddonProps>;

export interface InputGroupTextProps extends BaseProps {}

export declare const InputGroupText: React.ComponentType<InputGroupTextProps>;

export interface ListGroupProps extends BaseProps {
  /**
   * Whether the list group should be flushed, or not.
   */
  flush?: boolean;
  /**
   * Whether the list group is small, or not.
   */
  small?: boolean;
}

export declare const ListGroup: React.ComponentType<ListGroupProps>;

export interface ListGroupItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it is an action item, or not.
   */
  action?: boolean;
}

export declare const ListGroupItem: React.ComponentType<ListGroupItemProps>;

export interface ListGroupItemHeadingProps extends BaseProps {}

export declare const ListGroupItemHeading: React.ComponentType<
  ListGroupItemHeadingProps
>;

export interface ListGroupItemTextProps extends BaseProps {}

export declare const ListGroupItemText: React.ComponentType<
  ListGroupItemTextProps
>;

export interface ModalProps extends BaseProps {
  /**
   * The id.
   */
  id?: string;
  /**
   * Whether it is open, or not.
   */
  open?: boolean;
  /**
   * Whether it should fade, or not.
   */
  fade?: boolean;
  /**
   * Whether it should display a backdrop, or not.
   */
  backdrop?: boolean;
  /**
   * The function that should be triggered when the modal is shown.
   */
  showModal?: (...args) => any;
  /**
   * The function that should be triggered when the modal is set to hide.
   */
  hideModal?: (...args) => any;
  /**
   * The function that should be triggered when the modal is finally hidden.
   */
  hiddenModal?: (...args) => any;
  /**
   * Whether it should be centered, or not.
   */
  centered?: boolean;
  /**
   * The class name for the backdrop element.
   */
  backdropClassName?: string;
  /**
   * The toggle function.
   */
  toggle?: (...args) => any;
  /**
   * The class name for the modal.
   */
  modalClassName?: string;
  /**
   *
   */
  animation?: boolean;
  /**
   * The position.
   */
  position?: string;
  /**
   * The size.
   */
  size?: string;
  /**
   * The tab index.
   */
  tabIndex?: string;
  /**
   * The class name for the modal content.
   */
  modalContentClassName?: string;
  /**
   * The role attribute for the modal.
   */
  role?: string;
}

export declare const Modal: React.ComponentType<ModalProps>;

export interface ModalBodyProps {
  className?: string;
}

export declare const ModalBody: React.ComponentType<ModalBodyProps>;

export interface ModalFooterProps {
  className?: string;
}

export declare const ModalFooter: React.ComponentType<ModalFooterProps>;

export interface ModalHeaderProps extends BaseProps {
  /**
   * The toggle function.
   */
  toggle?: (...args) => any;
  /**
   * The close button's aria label.
   */
  closeAriaLabel?: string;
  /**
   * The class for the modal title.
   */
  titleClass?: string;
}

export declare const ModalHeader: React.ComponentType<ModalHeaderProps>;

export interface NavProps extends BaseProps {
  /**
   * Whether it is located inside a Navbar, or not.
   */
  navbar?: boolean;
  /**
   * Justify content horizontally.
   */
  horizontal?: string;
  /**
   * Whether it should be displayed as tabs, or not.
   */
  tabs?: boolean;
  /**
   * Whether it is located inside a card, or not.
   */
  card?: boolean;
  /**
   * Whether it should be displayed as pills, or not.
   */
  pills?: boolean;
  /**
   * Whether it is justified, or not.
   */
  justified?: boolean;
  /**
   * Whether it should fill the entire space, or not.
   */
  fill?: boolean;
  /**
   * Whether it is vertical, or not.
   */
  vertical?: boolean | string;
}

export declare const Nav: React.ComponentType<NavProps>;

export interface NavItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
}

export declare const NavItem: React.ComponentType<NavItemProps>;

export interface NavLinkProps extends BaseProps {
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * The class name.
   */
  className?: string;
  /**
   * The function that should be triggered on click.
   */
  onClick?: (...args) => any;
  /**
   * The href attribute value.
   */
  href?: any;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

export declare const NavLink: React.ComponentType<NavLinkProps>;

export interface NavbarProps extends BaseProps {
  /**
   * Whether it is full, or not.
   */
  full?: boolean;
  /**
   * Whether it is fixed, or not.
   */
  fixed?: string;
  /**
   * Whether it is sticky, or not.
   */
  sticky?: string;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The role attribute.
   */
  role?: string;
  /**
   * The navbar type.
   */
  type?: 'dark' | 'light';
  /**
   * Whether it should expand, or not.
   */
  expand?: boolean | string;
}

export declare const Navbar: React.ComponentType<NavbarProps>;

export interface NavbarBrandProps extends BaseProps {}

export declare const NavbarBrand: React.ComponentType<NavbarBrandProps>;

export interface NavbarTogglerProps extends BaseProps {
  /**
   * The component's tag type.
   */
  type?: string;
}

export declare const NavbarToggler: React.ComponentType<NavbarTogglerProps>;

export interface PopoverProps extends BaseProps {
  /**
   * The target element.
   */
  target: Target;

  /**
   * The popover container.
   */
  container?: Target;

  /**
   * Popper modifiers object.
   */
  modifiers?: any;

  /**
   * Whether the popover is open, or not.
   */
  open?: boolean;

  /**
   * The inner class name.
   */
  innerClassName?: string;

  /**
   * Whether the popover is disabled, or not.
   */
  disabled?: boolean;

  /**
   * Whether to hide the arrow, or not.
   */
  noArrow?: boolean;

  /**
   * The arrow class name.
   */
  arrowClassName?: string;

  /**
   * The boundaries element for the Popover instance.
   */
  boundariesElement?: any;

  /**
   * The popover placement.
   */
  placement?: string;

  /**
   * The placement prefix.
   */
  placementPrefix?: string;

  /**
   * The popover offset.
   */
  offset?: string | number;

  /**
   * The toggle function.
   */
  toggle: (...args) => any;

  /**
   * The show/hide delay in ms.
   */
  delay?: number | { show?: number; hide?: number };
}

export declare const Popover: React.ComponentType<PopoverProps>;

export interface PopoverBodyProps extends BaseProps {}

export declare const PopoverBody: React.ComponentType<PopoverBodyProps>;

export interface PopoverHeaderProps extends BaseProps {}

export declare const PopoverHeader: React.ComponentType<PopoverHeaderProps>;

export interface ProgressProps extends BaseProps {
  /**
   * Whether it is a bar, or not.
   */
  bar?: boolean;
  /**
   * Whether there are multiple progress bars nested, or not.
   */
  multi?: boolean;
  /**
   * Whether it is animated, or not.
   */
  animated?: boolean;
  /**
   * Whether it is striped, or not.
   */
  striped?: boolean;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The class name for the bar element.
   */
  barClassName?: string;
  /**
   * The value.
   */
  value?: string | number;
  /**
   * The max value.
   */
  max?: string | number;
}

export declare const Progress: React.ComponentType<ProgressProps>;

export interface SliderProps {
  className?: string;
  theme?: Theme;
  animate?: boolean;
  behaviour?: string;
  cssPrefix?: string;
  disabled?: boolean;
  limit?: number;
  margin?: number;
  onChange?: (...args) => any;
  onEnd?: (...args) => any;
  onSet?: (...args) => any;
  onSlide?: (...args) => any;
  onStart?: (...args) => any;
  onUpdate?: (...args) => any;
  pips?: any;
  range: any;
  start: number[];
  step?: number;
  direction?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  connect?: boolean[] | boolean;
  tooltips?: boolean | Array<{ to: (...any) => any }>;
}

export declare const Slider: React.ComponentType<SliderProps>;

export interface TooltipProps extends BaseProps {
  /**
   * The target element.
   */
  target: Target;

  /**
   * The tooltip container.
   */
  container?: Target;

  /**
   * The trigger(s) (click, hover, focus).
   */
  trigger?: string;

  /**
   * Whether the tooltip is open, or not.
   */
  open?: boolean;

  /**
   * Whether the tooltip is disabled, or not.
   */
  disabled?: boolean;

  /**
   * The tooltip class name.
   */
  className?: string;

  /**
   * The arrow class name.
   */
  arrowClassName?: string;

  /**
   * The tooltip inner class name.
   */
  innerClassName?: string;

  /**
   * The tooltip offset.
   */
  offset?: string | number;

  /**
   * The show/hide delay in ms.
   */
  delay?: number | { show?: number; hide?: number };

  /**
   * The boundaries element for the tooltip instance.
   */
  boundariesElement?: string | JSX.Element;

  /**
   * The tooltip placement.
   */
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start'
    | 'auto-start'
    | 'auto'
    | 'auto-end';

  /**
   * The placement prefix.
   */
  placementPrefix?: string;

  /**
   * Whether to hide the arrow, or not.
   */
  noArrow?: boolean;

  /**
   * The toggle function.
   */
  toggle: (...args) => any;

  /**
   * Popper modifiers object.
   */
  modifiers?: any;

  /**
   * Whether the tooltip should auto-hide, or not.
   */
  autohide?: boolean;
}

export declare const Tooltip: React.ComponentType<TooltipProps>;
