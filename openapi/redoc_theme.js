Redoc.init('./openapi.yaml',{
  theme:{
      colors:{
      main: '#004286'
    },
    menu:{
      backgroundColor: '#004286',
      textColor: 'white'
    },
    rightPanel:{
      backgroundColor: '#343131'
    }
  }
}, document.getElementById('redoc-container'));

var all_drafts = document.getElementsByTagName("span");
console.log(all_drafts);
for (var i = 0; i < all_drafts.length; i++){
  if(/Draft/.test(all_drafts[i].innerHTML)){
    console.log(all_drafts[i].innerHTML);
  }
  else{
    console.count()
  }
}
