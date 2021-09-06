import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary } = context.theme.colors

  return (
    <svg viewBox='0 0 150 100' width='100%' height='100%'>
      <style type='text/css'>
        {`
  .st0{fill:${primary};}
`}
      </style>
      <path
        className='st0'
        d='M68.4,13.6c0-2.2-2-2.7-3.8-2.7v0.3c0.9,0,1.7,0.3,1.7,1.1c0,0.4-0.3,1.1-1.3,1.1c-0.8,0-2.4-0.4-3.6-0.9
  c-1.5-0.5-2.7-0.9-3.8-0.9c-2.2,0-3.8,1.6-3.8,3.5c0,1.6,1.2,2.2,1.6,2.4l0.1-0.3c-0.3-0.3-0.5-0.4-0.5-1.1c0-0.4,0.4-1.2,1.5-1.2
  c0.9,0,2.3,0.4,4,0.9c1.5,0.4,3.2,0.8,4,0.9V20l-1.6,1.5v0.1l1.6,1.5v4.7c-0.9,0.5-1.9,0.7-2.7,0.7c-1.6,0-3.1-0.4-4.3-1.7l4.4-2.2
  v-7.5l-5.5,2.4c0.4-1.5,1.6-2.4,2.8-3.1l0.1-0.4c-3.2,0.9-6.2,3.9-6.2,7.7c0,4.4,3.6,7.7,7.7,7.7c4.4,0,7.3-3.5,7.3-7.1H68
  c-0.7,1.5-1.6,2.7-2.8,3.4v-4.4l1.7-1.5v-0.1L65.2,20v-3.4C66.8,16.7,68.4,15.6,68.4,13.6z M58.9,25.5l-1.3,0.7
  c-0.8-0.9-1.2-2.3-1.2-4.2c0-0.8,0-1.6,0.3-2.3l2.3-0.9V25.5z M70.5,28.1L69,29.2l0.4,0.3l0.7-0.5l2.4,2.2l3.2-2.2l-0.1-0.3
  l-0.9,0.5l-1.1-1.1v-7.4l0.9-0.7l1.9,1.5v6.7c0,4.2-0.9,4.8-2.7,5.5V34c3.1,0.1,5.9-0.9,5.9-6.2v-7.3l0.9-0.8l-0.3-0.3l-0.9,0.7
  l-2.7-2.3l-3.1,2.3v-9h-0.1l-3.8,2.7v0.3c0.4,0.3,1.1,0.4,1.1,1.6C70.6,15.7,70.5,28.1,70.5,28.1z M90.5,26.9l-2.7,2l-2.7-2.2v-1.3
  l5.1-3.5v-0.1l-2.7-3.9L81.9,21v7.3l-1.1,0.9l0.3,0.3l0.9-0.8l3.8,2.7l5-3.9C90.6,27.3,90.5,26.9,90.5,26.9z M85.1,25v-5.4l0.3-0.1
  l2.4,3.8C87.7,23.4,85.1,25,85.1,25z M43.4,40.4c0-0.3-0.1-0.7-0.3-0.9H43c-0.3,0.9-0.8,1.3-1.9,1.3c-0.9,0-1.6-0.5-2-0.9l-3.2,3.6
  l0.3,0.3l1.1-0.9c0.7,0.5,1.2,0.9,2.7,1.1v9.1l-6.5-11c-0.5-0.9-1.3-2-2.8-2c-1.7,0-3.2,1.5-3.1,3.9h0.3c0.1-0.7,0.4-1.5,1.2-1.5
  c0.5,0,1.1,0.5,1.5,1.1v3.6c-2,0-3.2,0.9-3.2,2.6c0,0.9,0.4,2.2,1.7,2.6V52c-0.3-0.3-0.3-0.4-0.3-0.8c0-0.5,0.4-0.9,1.2-0.9h0.5v4.3
  c-2.3,0-4.2,1.3-4.2,3.5c0,2,1.7,3.1,3.8,3v-0.3c-1.2-0.1-1.7-0.7-1.7-1.5c0-0.9,0.7-1.5,1.5-1.5c0.9,0,1.6,0.5,2.2,1.2l3.2-3.5
  l-0.3-0.3l-0.8,0.9c-1.2-1.1-1.9-1.5-3.2-1.6V43.7L39.6,59h0.7V43.7C41.9,43.5,43.4,42.2,43.4,40.4z M51.3,54.7l-2.7,2l-2.7-2.2
  v-1.3l5.1-3.5v-0.1l-2.7-3.9l-5.7,3.1V56l-1.1,0.8l0.3,0.3l0.9-0.8l3.8,2.7l5-3.9C51.5,55.1,51.3,54.7,51.3,54.7z M45.9,52.8v-5.4
  l0.3-0.1l2.4,3.8C48.5,51.2,45.9,52.8,45.9,52.8z M69.2,46.9l-0.8,0.5l-2-1.7L64,47.8l0.9,0.9V57l-2.7-1.6v-6.7l0.9-0.5l-2.6-2.4
  l-2.4,2.2l0.9,0.9v7.9L58.9,57l-2.3-1.6v-6.6c0-1.5-0.8-2-1.6-2.6c-0.8-0.5-1.2-0.9-1.2-1.6c0-0.7,0.7-0.9,0.9-1.2v-0.3
  c-0.9,0-3.2,0.9-3.2,3c0,1.1,0.5,1.5,1.1,2c0.5,0.5,1.2,1.1,1.2,2.2v6.3l-1.2,0.9l0.3,0.3l1.1-0.9l2.6,2.2l2.7-1.9l3.1,1.9l5.8-3.4
  v-7.4l1.5-1.1L69.2,46.9L69.2,46.9z M89.5,41l-1.1,0.9L86,39.8l-3.6,2.7V40h-0.3l0.1,17.8c-0.3,0-1.3-0.3-2-0.4L80,42.6
  c0-1.1-0.8-2.7-2.7-2.7c-2-0.1-3.4,1.5-3.4,3h0.3c0.1-0.7,0.4-1.2,1.1-1.2c0.7,0,1.2,0.4,1.2,1.9v4.3c-2,0.1-3.2,1.2-3.2,2.7
  c0,0.9,0.4,2.2,1.7,2.2v-0.3c-0.4-0.3-0.5-0.5-0.5-0.8c0-0.7,0.5-0.9,1.5-0.9h0.4v6.7c-1.6,0.5-2.3,1.7-2.3,3.1
  c0,1.9,1.5,3.2,3.6,3.2c1.5,0,2.8-0.3,4.2-0.5c1.1-0.3,2.6-0.5,3.2-0.5c0.9,0,1.2,0.4,1.2,0.9c0,0.8-0.3,1.1-0.8,1.2v0.3
  c1.7-0.3,2.8-1.5,2.8-3.1s-1.6-2.7-3.4-2.7c-0.9,0-2.7,0.3-4,0.5c-1.5,0.3-3.1,0.5-3.5,0.5c-0.8,0-1.6-0.3-1.6-1.5
  c0-0.9,0.8-1.6,2.7-1.6c0.9,0,2.2,0.1,3.4,0.4c1.3,0.3,2.6,0.7,3.6,0.7c1.6,0,3.1-0.5,3.1-2.8V42.1l1.3-1.1L89.5,41L89.5,41z
   M85.1,47.6c-0.3,0.3-0.8,0.7-1.3,0.7s-1.1-0.3-1.3-0.7v-4.8l1.1-0.8l1.5,1.5C85.1,43.4,85.1,47.6,85.1,47.6z M85.1,50.9
  c-0.3-0.3-0.8-0.5-1.3-0.5s-1.1,0.3-1.3,0.5v-2.8c0.3,0.3,0.8,0.5,1.3,0.5s1.1-0.3,1.3-0.5V50.9z M85.1,56c0,0.9-0.5,1.7-1.7,1.7
  h-0.9v-6.5c0.3-0.3,0.8-0.5,1.3-0.5s0.9,0.3,1.3,0.5V56z M100.2,48.2l-3.5-2.6l-5.4,3.1v7.1l-1.1,0.9l0.1,0.3l0.9-0.7l3.5,2.7
  l5.5-3.2C100.2,55.6,100.2,48.2,100.2,48.2z M94.2,55.1v-7.9l2.7,2V57L94.2,55.1z M110.5,46h-0.3c-0.3,0.3-0.7,0.4-0.9,0.4
  c-0.4,0-0.9-0.3-1.2-0.5h-0.3l-1.9,2l-1.9-2l-3.2,2.3l0.1,0.3l0.9-0.5L103,49v6.9l-1.5,1.1l0.3,0.3l0.7-0.5l2.7,2.2l3.4-2.3
  l-0.1-0.3l-0.9,0.5l-1.3-1.1v-7.7c0.5,0.5,1.2,1.1,2,1.1C109.6,49.2,110.4,47.7,110.5,46L110.5,46z M123.7,56.4l-3.8,2.6l-5-7.7
  l3.6-5.7h0.3c0.4,0.4,1.1,0.9,1.9,0.9s1.3-0.4,1.6-0.9h0.3c-0.1,2.2-1.6,3.5-2.7,3.5c-1.1,0-1.6-0.5-2.3-0.9l-0.3,0.5l5.5,8.1
  L123.7,56.4L123.7,56.4z M111.6,55.9l-1.5,1.1l0.3,0.3l0.7-0.5l2.4,2.2l3.2-2.2l-0.3-0.3l-0.8,0.5l-1.1-1.1V39.1h-0.1l-3.9,2.7v0.3
  c0.4,0.3,1.1,0.3,1.1,1.6C111.6,43.5,111.6,55.9,111.6,55.9z M61,71c0-2.2-2-2.7-3.8-2.7v0.3c0.9,0,1.7,0.3,1.7,1.1
  c0,0.4-0.3,1.1-1.3,1.1c-0.8,0-2.4-0.4-3.6-0.9c-1.5-0.4-2.7-0.9-3.8-0.9c-2.2,0-3.8,1.6-3.8,3.5c0,1.6,1.2,2.2,1.6,2.4l0.1,0
  c-0.3-0.3-0.7-0.4-0.7-1.1c0-0.4,0.4-1.2,1.5-1.2c0.9,0,2.3,0.4,4,0.9c1.5,0.4,3.2,0.8,4,0.9v3.4l-1.6,1.5v0.1l1.6,1.5v4.7
  c-0.9,0.5-1.9,0.7-2.7,0.7c-1.6,0-3.1-0.4-4.3-1.7l4.4-2.2v-7.7L49,77c0.5-1.5,1.7-2.4,2.8-3.2l-0.1-0.3c-3.2,0.9-6.2,3.8-6.2,7.5
  c0,4.4,3.6,7.7,7.7,7.7c4.4,0,7.3-3.5,7.3-7.1h-0.3c-0.7,1.5-1.6,2.7-2.8,3.4v-4.4l1.7-1.5v-0.3l-1.5-1.3v-3.2
  C59.4,74.1,61,73,61,71z M51.4,82.9l-1.3,0.7c-0.8-0.9-1.2-2.3-1.2-4.2c0-0.8,0.1-1.6,0.3-2.3l2.3-0.9L51.4,82.9z M64.7,69.9
  L64.7,69.9l-2.3,1.9v0.1l1.9,2h0.3l2.2-1.9v-0.1L64.7,69.9L64.7,69.9z M68.1,86l-0.9,0.5l-1.1-1.1V78l1.1-0.8l-0.3-0.3l-0.8,0.7
  l-2-2.3l-3.2,2.2l0.3,0.3l0.8-0.5l0.9,1.2v7.1l-1.5,1.1l0.1,0.3l0.8-0.5l2.4,2.2l3.2-2.2L68.1,86L68.1,86z M86.4,85.9l-0.8,0.5
  l-1.2-1.1V78l1.1-0.9l-0.3-0.3l-0.9,0.8l-2.6-2.3l-3.2,2.3l-2.6-2.3l-3.1,2.3l-2-2.3l-3.2,2.2l0.1,0.3l0.8-0.5l1.1,1.2v7.1l-0.9,0.9
  l2.6,2l2.4-2.2l-0.9-0.9V78l0.9-0.7l1.6,1.5v6.6l-0.9,0.9l2.6,2l2.4-2.2l-0.9-0.9V78l0.9-0.5l1.7,1.5v6.6l-0.8,0.8l2.6,2.3l3.4-2.3
  L86.4,85.9L86.4,85.9z M95.8,84.3l-2.7,2l-2.7-2.2v-1.3l5.1-3.5v-0.1l-2.7-3.9l-5.7,3.1v7.4l3.8,2.7l5-3.9
  C96,84.7,95.8,84.3,95.8,84.3z M90.4,82.4V77l0.3-0.1l2.4,3.8C93,80.8,90.4,82.4,90.4,82.4z M105.9,81.5l-2-1.6c1.5-1.2,2-2.8,2-3.9
  v-0.7h-0.3c-0.3,0.5-0.7,1.1-1.5,1.1c-0.9,0-1.5-0.4-2-1.1l-5,2.7v3.9l1.9,1.5C97.2,85,96.9,86,96.9,87c0,1.1,0.5,1.9,1.5,2.2
  l0.1-0.3c-0.3-0.3-0.4-0.3-0.4-0.9c0-0.3,0.4-0.9,1.3-0.9c1.1,0,1.7,0.8,2,1.1l4.7-2.8L105.9,81.5L105.9,81.5z M104.7,78.2
  c-0.8,1.3-2.4,2.7-3.4,3.2l-1.2-0.9v-3.8c0.4,1.1,1.6,2,2.8,2C103.6,78.6,104,78.5,104.7,78.2z M102.8,87c-0.5-1.2-1.9-2-3.2-2
  c-0.3,0-1.2,0-2,0.5c0.5-0.9,2-2.4,3.8-3.5l1.3,1.1L102.8,87L102.8,87z'
      />
    </svg>
  )
}

export default Logo
