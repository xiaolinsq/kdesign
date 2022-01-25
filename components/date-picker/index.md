---
category: Components
type: 录入
order: 4
title: DatePicker
subtitle: 日期选择器
---

日期选择器是一种选择日期的控件。

## 使用场景

需要选择日期时。

## API

| 属性 | 说明 | 类型 | 默认值 | 可选值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | `boolean` | true |  | 1.0.0 |
| autoFocus | 自动获取焦点 | `boolean` | false |  | 1.0.0 |
| borderType | 边框类型 | `string` | `underline` | `underline` `bordered` `none` | 1.0.0 |
| className | 选择器 className | `string` |  |  | 1.0.0 |
| clearIcon | 自定义的清除图标 | `ReactNode` |  |  | 1.0.0 |
| defaultOpen | 默认弹层展开 | `boolean` | false |  | 1.0.0 |
| disabled | 禁用 | `boolean` | false |  | 1.0.0 |
| disabledDate | 不可选择的日期 | `(currentDate: Date) => boolean` |  |  | 1.0.0 |
| dropdownClassName | 日历面板 className | `string` |  |  | 1.0.0 |
| format | 展示的日期格式 | `string` |  |  | 1.0.0 |
| inputReadOnly | 输入框只读 | `boolean` | false |  | 1.0.0 |
| open | 控制弹层展开 | `boolean` | false |  | 1.0.0 |
| picker | 按钮类型 | `PickerMode` | `date` | `time` \| `date` \| `week` \| `month` \| `quarter` \| `year` | 1.0.0 |
| placeholder | 输入框提示文字 | `string | [string, string]` |  |  | 1.0.0 |
| popupStyle | 日历面板样式 | `CSSProperties` | {} |  | 1.0.0 |
| size | 控件大小 | `string` | `middle` | `small` `middle` `large` | 1.0.0 |
| style | 选择器样式 | `CSSProperties` | {} |  | 1.0.0 |
| suffixIcon | 自定义的选择框后缀图标 | `ReactNode` |  |  | 1.0.0 |
| onOk | 点击确定按钮的回调 | `() => void` |  |  | 1.0.0 |
| onOpenChange | 弹出日历和关闭日历的回调 | `(open) => void` |  |  | 1.0.0 |
| onPanelChange | 日历面板切换的回调 | `(value, mode) => void` |  |  | 1.0.0 |

### DatePicker

| 属性               | 说明                   | 类型                                     | 默认值 | 可选值 | 版本   |
| ------------------ | ---------------------- | ---------------------------------------- | ------ | ------ | ------ |
| defaultPickerValue | 默认面板日期           | `Date`                                   |        |        | 1.0.0 |
| defaultValue       | 默认日期               | `Date`                                   |        |        | 1.0.0 |
| renderExtraFooter  | 在面板中添加额外的页脚 | `(mode) => React.ReactNode`              |        |        | 1.0.0 |
| value              | 日期                   | `Date`                                   |        |        | 1.0.0 |
| onChange           | 时间发生变化的回调     | `(date: Date, dateString: string)=>void` |        |        | 1.0.0 |

### DatePicker[picker=date]

| 属性           | 说明             | 类型      | 默认值       | 可选值         | 版本   |
| -------------- | ---------------- | --------- | ------------ | -------------- | ------ |
| format         | 日期格式         | `string`  | `YYYY-MM-DD` |                | 1.0.0 |
| showTime       | 日期时间选择功能 | `Object   | boolean`     | `picker[time]` |        | 1.0.0 |
| showToday      | 展示“今天”按钮   | `boolean` | false        |                | 1.0.0 |
| showWeekNumber | 展示周数         | `boolean` | false        |                | 1.0.0 |
| showWeeksTitle | 展示周           | `boolean` | true         |                | 1.0.0 |

### DatePicker[picker=week]

| 属性           | 说明     | 类型      | 默认值    | 可选值 | 版本   |
| -------------- | -------- | --------- | --------- | ------ | ------ |
| format         | 日期格式 | `string`  | `gggg-wo` |        | 1.0.0 |
| showWeekNumber | 展示周数 | `boolean` | false     |        | 1.0.0 |
| showWeeksTitle | 展示周   | `boolean` | true      |        | 1.0.0 |

### DatePicker[picker=month]

| 属性   | 说明     | 类型     | 默认值    | 可选值 | 版本   |
| ------ | -------- | -------- | --------- | ------ | ------ |
| format | 日期格式 | `string` | `YYYY-MM` |        | 1.0.0 |

### DatePicker[picker=quarter]

| 属性   | 说明     | 类型     | 默认值     | 可选值 | 版本   |
| ------ | -------- | -------- | ---------- | ------ | ------ |
| format | 日期格式 | `string` | `YYYY-QQQ` |        | 1.0.0 |

### DatePicker[picker=year]

| 属性   | 说明     | 类型     | 默认值 | 可选值 | 版本   |
| ------ | -------- | -------- | ------ | ------ | ------ |
| format | 日期格式 | `string` | `YYYY` |        | 1.0.0 |

### DatePicker[picker=time]

| 属性 | 说明 | 类型 | 默认值 | 可选值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| disabledHours | 禁止选择部分小时选项 | `() => number[]` |  |  | 1.0.0 |
| disabledMinutes | 禁止选择部分分钟选项 | `(selectedHour: number) => number[]` |  |  | 1.0.0 |
| disabledSeconds | 禁止选择部分秒选项 | `(selectedHour: number, selectedMinute: number) => number[]` |  |  | 1.0.0 |
| format | 日期格式 | `string` | `HH:mm:ss` |  | 1.0.0 |
| hourStep | 小时选项间隔 | `number` | `1` |  | 1.0.0 |
| minuteStep | 分钟选项间隔 | `number` | `1` |  | 1.0.0 |
| secondStep | 秒选项间隔 | `number` | `1` |  | 1.0.0 |
| showNow | 展示“此刻”按钮 | `boolean` | false |  | 1.0.0 |
| use12Hours | 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a | `boolean` | false |  | 1.0.0 |

### RangePicker

| 属性 | 说明 | 类型 | 默认值 | 可选值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| allowEmpty | 允许部分选择 | `[boolean, boolean]` | `YYYY` |  | 1.0.0 |
| defaultPickerValue | 默认面板日期 | `[Date, Date]` |  |  | 1.0.0 |
| defaultValue | 默认日期 | `[Date, Date]` |  |  | 1.0.0 |
| disabled | 禁用 | `[boolean, boolean]` |  |  | 1.0.0 |
| separator | 分隔符 | `React.ReactNode\|string` |  |  | 1.0.0 |
| onChange | 待选日期发生变化的回调 | `(dates: [Date, Date], dateStrings: [string, string]) => void` |  |  | 1.0.0 |

### RangePicker[picker=time]

| 属性  | 说明                 | 类型      | 默认值 | 可选值 | 版本   |
| ----- | -------------------- | --------- | ------ | ------ | ------ |
| order | 始末时间是否自动排序 | `boolean` | true   |        | 1.0.0 |