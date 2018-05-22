import '@/styles/main.scss'

$('form').on('submit', e=> {
  e.preventDefault();
  console.log($('form').serialize());
})
