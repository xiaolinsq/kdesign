import * as React from 'react'
import { Icon } from '../index'
/**
 * 组件默认属性，所有组件的默认属性都在这里写，
 * 而不是在组件文件中以“componentName.defaultProps”的方式去写
 * componentName: defaultPropsObj
 * （用于处理用户自定义默认属性）
 */
const compDefaultProps = {
  Alert: {
    type: 'warning',
    showIcon: false,
    closable: false,
    delayOffTime: 5000,
    banner: false,
    bannerOffset: [0, 0],
  },
  Button: {
    type: 'second',
    iconPlace: 'left',
    size: 'middle',
    bordered: true,
  },
  ButtonGroup: {
    buttonType: 'primary',
    type: 'basic',
    size: 'middle',
  },
  Card: {
    hoverable: false,
    selectable: false,
  },
  Carousel: {
    autoplay: false,
    dotPosition: 'bottom',
    dots: true,
    easing: 'cubic-bezier(0.4,0,0.6,1)',
    effect: 'scrollx',
    intervalTime: 4000,
  },
  Cascader: {
    mode: 'single', // multiple single
    allowClear: true,
    expandTrigger: 'click',
    notFoundContent: 'No Data',
    popupPlacement: 'bottomLeft',
    dropdownRender: (menus: React.ReactNode) => menus,
    displayRender: (labels: string[]) => labels.join('/'),
    fieldNames: { label: 'label', value: 'value', children: 'children' },
  },
  Col: {},
  Collapse: {
    accordion: false,
    expandIconPosition: 'left',
    bordered: false,
  },
  CollapsePanel: {
    disabled: false,
  },
  ColorPicker: {
    borderType: 'bordered',
    defaultOpen: false,
    functionalColorName: '#themeColor',
    switchName: { name: '跟随主题色', internationalName: 'followFunctionalColor' },
    placeholder: '#',
    showColorTransfer: true,
    showPresetColor: true,
    showColorPickerBox: { showBox: false, showHue: false, showOpacity: false },
  },
  Checkbox: {
    defaultChecked: false,
    checkboxType: 'default',
    indeterminate: false,
    disabled: false,
    size: 'middle',
  },
  CheckboxGroup: { checkboxType: 'default', disabled: false },
  Dropdown: {
    arrow: false,
    placement: 'bottomLeft',
    trigger: 'hover',
  },
  DropdownItem: {},
  DropdownMenu: {},
  DatePicker: {
    allowClear: true,
    autoFocus: false,
    borderType: 'underline',
    disabled: false,
    inputReadOnly: false,
    picker: 'date',
    popupStyle: {},
    size: 'middle',
    showToday: false,
    style: {},
    showArrow: true,
    defaultOpen: false,
    showWeeksTitle: true,
    yearItemNumber: 15,
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
  },
  Drawer: {
    closable: true,
    destroyOnClose: false,
    forceRender: false,
    getContainer: document.body,
    keyboard: true,
    mask: true,
    maskClosable: true,
    placement: 'right',
    width: 320,
    zIndex: 1050,
    disableScroll: true,
  },
  Empty: {},
  Filter: {
    fields: [],
    schemes: [],
    defaultTabKey: 'condition',
  },
  Form: {
    layout: 'vertical',
    labelAlign: 'left',
    size: 'middle',
  },
  Icon: {
    prefix: 'kdicon',
  },
  Input: {
    type: 'text',
    size: 'middle',
    borderType: 'underline',
  },
  Select: {
    size: 'middle',
    borderType: 'underline',
    mode: 'single',
    defaultOpen: false,
    showArrow: true,
    placeholder: '请输入需要搜索的内容',
    filterOption: true,
    optionLabelProp: 'children',
    optionFilterProp: 'label',
  },
  Image: {
    preview: true,
    scales: [25, 50, 75, 100, 125, 150, 200],
  },
  InputNumber: {
    type: 'text',
    size: 'middle',
    borderType: 'underline',
    minMark: '(',
    maxMark: ']',
    zeroShow: false,
    showDecimalTailZero: false,
    mask: '',
    mustInScope: false,
    mustInPrecisionScope: true,
    numberMode: false,
  },
  Layout: {},
  Modal: {
    type: 'normal',
    keyboard: true,
    mask: true,
    maskClosable: true,
    closable: true,
    getContainer: document.body,
    footerBtnOrder: 'normal',
    width: 460,
    height: 340,
    focusTriggerAfterClose: true,
    destroyOnClose: false,
    draggable: true,
    cancelButtonProps: {},
    okButtonProps: {},
    showline: true,
  },
  Menu: {
    mode: 'vertical',
    inlineIndent: 50,
    forceSubMenuRender: false,
    triggerSubMenuAction: 'hover',
    theme: 'dark',
    collapsed: false,
  },
  MenuItem: {
    disabled: false,
  },
  MenuSubMenu: {
    disabled: false,
    popupOffset: [0, 0],
  },
  Message: {
    closable: false,
    duration: 3000,
  },
  Notice: {},
  Notification: {},
  Pagination: {
    total: 0,
    pageType: 'basic',
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    showTitle: true,
    bordered: false,
    hideOnSinglePage: false,
  },
  Popconfirm: {
    icon: false,
    placement: 'top',
    trigger: 'click',
    okType: 'primary',
  },
  Progress: {
    type: 'line',
    // width: 88,
    trailColor: '#E5E5E5',
    percent: 0,
    showInfo: true,
    infoPosition: 'right',
    trailWidth: 8, // 线型宽度
    strokeWidth: 4, // 原型宽度
  },
  Radio: {
    defaultChecked: false,
    disabled: false,
  },
  RadioGroup: {},
  Rate: {
    allowHalf: true,
    icon: function () {
      return <Icon type="star" />
    },
    count: 5,
    defaultValue: 0,
    disabled: false,
    size: 'middle',
  },
  RangePicker: {
    order: true,
    allowClear: true,
    autoFocus: false,
    allowEmpty: [false, false],
    borderType: 'underline',
    disabled: false,
    inputReadOnly: false,
    picker: 'date',
    separator: '~',
    popupStyle: {},
    size: 'middle',
    showArrow: true,
    defaultOpen: false,
    showWeeksTitle: true,
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
  },
  Row: {
    align: 'top',
    gutter: 12,
    justify: 'start',
    wrap: true,
  },
  Switch: {
    size: 'small',
    defaultChecked: false,
    disabled: false,
    loading: false,
  },
  Steps: {
    direction: 'horizontal',
    initial: 0,
    labelPlacement: 'bottom',
  },
  Space: {
    direction: 'horizontal',
    size: 'small',
    align: 'center',
  },
  SplitPanel: {
    defaultSplit: 0.5,
    mode: 'horizontal',
    min: 0,
    max: 0,
    canFold: true,
  },
  Spin: {
    type: 'page',
    spinning: true,
  },
  TextArea: {
    size: 'middle',
    defaultValue: '',
    autoSize: true,
    canResize: false,
    borderType: 'underline',
    disabled: false,
    count: true,
    countPosition: 'outter',
    maxLength: 255,
  },
  Timeline: {
    reverse: false,
    mode: '',
    labelWidth: 70,
    lineHeight: 18,
  },
  TimelineItem: {
    color: 'blue',
    pending: false,
    position: '',
  },
  Tree: {
    defaultExpandAll: false,
    defaultExpandRoot: false,
    checkable: false,
    checkStrictly: false,
    disabled: false,
    draggable: false,
    virtual: true,
    switcherIcon: function () {
      return <Icon type="arrow-right-solid" />
    },
    estimatedItemSize: 32,
    expandOnClickNode: true,
  },
  TreeNode: {},
  ToolTip: {
    placement: 'top',
    trigger: 'hover',
    arrow: true,
  },
  Tabs: {
    type: 'line',
    size: 'middle',
  },
  TabPane: {},
  Transfer: {
    dataSource: [],
    locale: {},
    showSearch: false,
    listStyle: {},
  },
  Tag: {
    type: 'status',
    closable: false,
    clickable: false,
    disabled: false,
    size: 'middle',
  },
  Upload: {
    multiple: false,
    disabled: false,
    directory: false,
    method: 'post',
    name: 'file',
    type: 'select',
    listType: 'text',
    showUploadList: true,
    withCredentials: false,
  },
  ViewContainer: {},
  Typography: {},
  Search: {
    size: 'middle',
    borderType: 'underline',
    type: 'basis',
    disabled: false,
  },
  Badge: {},
  ImageCropper: {
    containerWidth: 860,
    containerHeight: 620,
    dragMode: 'crop',
    viewMode: 0,
    aspectRatio: NaN,
    okText: '确认裁剪',
    autoCropArea: 0.5,
  },
  Anchor: {
    type: 'bookmarks',
    affix: true,
    trigger: 'hover',
    placement: 'bottomRight',
  },
  Slider: {
    default: 0,
    disabled: false,
    dots: false,
    marks: [],
    max: 100,
    min: 0,
    reverse: false,
    step: 1,
    tooltipPlacement: 'top',
    vertical: false,
  },
  Stepper: {
    size: 'middle',
    step: 1,
    borderType: 'bordered',
    minMark: '[',
    maxMark: ']',
    mustInScope: false,
    zeroShow: true,
  },
  BaseData: {
    mode: 'single',
    optionLabelProp: 'label',
    searchField: 'all',
    size: 10,
  },
  Avatar: {
    size: 'middle',
    shape: 'circle',
    gap: 4,
  },
  Link: {
    size: 'middle',
    underscore: false,
  },
  TreeSelect: {
    size: 'middle',
    borderType: 'underline',
    mode: 'single',
    defaultOpen: false,
    showArrow: true,
    placeholder: '请输入需要搜索的内容',
    optionLabelProp: 'title',
    treeNodeFilterProp: 'title',
    treeExpandOnClickNode: true,
    onlyExpandOnClickIcon: true,
    showSearch: true,
    switcherIcon: function () {
      return <Icon type="arrow-right-solid" />
    },
    expandOnClickNode: false,
  },
  CityPicker: {
    type: 'domestic',
    loading: false,
    size: 'small',
    borderType: 'underline',
    defaultOpen: false,
    showArrow: true,
    placeholder: '',
    description: '城市',
    showDescription: true,
    optionHighlightProps: 'highlightText',
    allowClear: true,
  },
}

export default compDefaultProps
