# Typescript

- Type 'string' is not assignable to type 'number'. -> Kiểu 'string' không được gán cho kiểu là 'number'
- Property 'split' does not exist on type 'number'. -> Thuộc tính 'split' không tồn tại trên type 'number'
- {} -> Là 1 Type đặc biệt trong Typescript, có thể dùng cho tất cả ngoại trừ null và undefined
- Union type -> Hoặc type này hoặc type kia
- Intersection type -> và type này và type nọ
- optional -> school?: number

# React

- Routes: /, /home, /about
- Components: Button, Popup/Modal, Dropdown, Label, Input,...
- Elements: button, h1, input
- Component phải bắt đầu bằng chữ in hoa: Button, Avatar, Dropdown, UserProfile, AccountSettingsPage
- Render trong React thông qua từ khóa `return`:
- Nếu chỉ là 1 element thì có thể viết trên 1 dòng
- Body code(trước từ khóa return) thì có thể viết Javascript bình thường
- Render conditionally

```js
{
  loading === "fetching" ? (
    <div>Loading</div>
  ) : loading === "successfull" ? (
    <div>Sucessfull</div>
  ) : loading === "error" ? (
    <div>Error</div>
  ) : (
    <></>
  );
}
```

```js
{
  loading === "fetching" && <div>Loading</div>;
}
{
  loading === "successfull" && <div>successfull</div>;
}
{
  loading === "error" && <div>Error</div>;
}
```

- conditional && results
- Nếu giá trị là 1 trong nhiều thì có thể sử dụng Union Type để được gợi ý khi gõ cũng như rõ ràng cho code
- React.ReactNode -> dùng để khai báo Type cho các JSX Element
- Render mảng thì key là bắt buộc cho các phần tử con trực tiếp và key không được trùng nhau

```js
{
  numbers &&
    numbers.length > 0 &&
    numbers.map((value, index) => {
      return <div key={index}>{value}</div>;
    });
}
```

- JIT Mode trong Tailwind -> w-[130px]
- Nếu props có giá trị là `true` thì có thể viết rút gọn như sau

```js
<Button
  isLoading
</Button>
```

- Nếu thuộc tính(property, attributes) là 1 từ thì viết thường -> disabled
- Nếu 1 từ trở lên thì dùng camelCase -> className, viewBox, stroke-line-cap -> strokeLineCap
- Props children là 1 props đặc biệt ở trong React, children là những thứ nằm giữa >children< component hoặc element
- props: JSX.IntrinsicElements["svg"] -> trả ra những props thuộc về element svg
- onEvent -> onClick, onChange, onKeydown, onMousemove
- 2 trường hợp sử dụng event callback

```js
  onClick={() => {
    console.log("Danger clicked1");
    console.log("Danger clicked2");
  }}
  onClick={handleClick}
  onClick={() => handleDangerClick(100)}

```

- unnecessary re-renders
- Re-renders
- State

## useState

- const [value, setValue] = useState(true);
- const [isRendering, setIsRendering] = useState(true);
- Khi sử dụng setState mà cần phụ thuộc vào giá trị mới nhất của state trước đó thì truyền vào callback như sau
- setActive(prev => !prev)
- Để giải quyết những đoạn code sử dụng useState nhiều lần như trong bài tập ToggleV2 thì có thể dùng custom hook
- Khi sử dụng sự kiện onChange cho input thì để truy xuất giá trị chúng ta dùng cú pháp e.target.value

```typescript
const fn = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
};
```

- Hook useState sử dụng gọn gàng hơn
- Hook useState khó debug khi làm việc với object

## useReducer

- Cú pháp

```typescript
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- Code sẽ dài hơn so với useState
- Dễ dàng debug hơn so với useState
- Logic của reducer được xử lý bên ngoài component
- Khi sử dụng `dispatch(value)` trong hook useReducer thì value truyền vào sẽ là bất kỳ giá trị nào(tùy thuộc vào logic của bài toán)
- Giá trị(value) ở trong `dispatch(value)` là action trong function reducer
- Action thông thường mọi người hay dùng cấu trúc là object với 2 properties phổ biến là `type` và `payload`
- Không được thay đổi giá trị trực tiếp từ state gốc như thế này

```typescript
state.username = action.payload.value;
```

- Thay vào đó thì nên clone từ state gốc bằng việc sử dụng spread operator
- Khi sử dụng dispatch thì nó sẽ chạy vào reducer
- Reducer chỉ chấp 2 arguments là state và action
- State là state gốc(chính là initialArg)
- Action trong reducer chính là giá trị được truyền vào từ `dispatch`

```typescript
const newState = { ...state };
const newState = JSON.parse(JSON.stringify(state));
```

- Dấu chấm than sau biến trong Typescript `action.payload!` có nghĩa là biến đó không thể là null hoặc undefined

# useEffect

- Giúp chúng ta sử dụng side effects: (DOM, API, sessionStorage, localStorage) trong React

```typescript
useEffect(() => {
  // code
  return () => {
    // cleanup
    // unmounted component
  };
}, dependencies);
```

- useEffect sẽ luôn chạy 1 lần rồi sau đó dựa vào dependencies
- Dependencies có 3 trường hợp chính là
  -> [] nó sẽ chạy vào useEffect 1 lần sau khi component đã render xong
  -> Nếu không để gì cả, thì nó sẽ luôn chạy sau mỗi lần component re-render
  -> [value,...] nếu value của dependencies thay đổi thì useEffect có sử dụng value depencies đó mới chạy và nếu có state thay đổi thì component sẽ re-render
- 1 số thứ cần cleanup trong useEffect: setTimeout, setInterval, eventListener, fetch(abortController),...
- SWR
  -> React Query: Pagination, Load more

# useRef

- Là 1 object có thuộc tính `current`
- ref không phải là props
- NodeJS.Timeout sử dụng cho khai báo Typescript type cho setTimeout hoặc setInterval
- ref dùng để lưu trữ giá trị hoặc tương tác với DOM, tất cả đều thông qua thuộc tính current của ref
- Tên ref có thể đặt tùy ý tùy vào mục đích như inputRef, buttonRef, listRef...
- Khi sử dụng ref vẫn có thể viết query selector như bình thường
- Giá trị của ref không thay đổi trong quá trình component render
- Khi sử dụng ref cho component thì phải dùng forwardRef

```ts
const MyComponent = forwardRef(function MyComponent(props, ref) {});
```

# custom hook

- Tức là hook do chúng ta tự tạo ra với mục đích tùy logic
- Quy chuẩn đặt tên của custom hook bắt buộc phải bắt đầu bằng từ use ví dụ `useToggle` `useOnChange`...
- Thường viết custom hook để tách logic ra khỏi component cho dễ quản lý

# Component patterns

- **Props drilling**: là 1 pattern thông dụng trong React nói vê vấn đề truyền props từ cha xuống con, từ con xuống cháu...-> có dùng trong trường hợp chỉ truyền xuống 1 cấp, nếu nhiều cấp thì nên dùng context, global state như redux hoặc zustand
- **Lifting state-up**: Đưa các state từ con lên cha gần nhất, mục đích là chia sẻ state giữa các components với nhau
- HOC(High Order Component):
- Render props:
- Custom hooks
