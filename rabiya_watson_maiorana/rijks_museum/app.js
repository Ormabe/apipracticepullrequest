// X5SAR4Fe

$('form').on('submit', function (event){
    event.preventDefault()

    var input = $(this).serializeArray()[0].value
    input = input.split(' ').join('-').toLowerCase()
    console.log(input)


    $.ajax({
      url: 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/' + input + '?key=X5SAR4Fe&format=json',
      success: function (data) {
        var artId = data.contentPage.artObjectSet

        for (var i = 0; i < artId.length; i++) {

          $.ajax({
            url: 'https://www.rijksmuseum.nl/api/en/collection/' + artId[i] + '?key=X5SAR4Fe&format=json',
            success: function(data) {
              var picUrl = data.artObject.webImage.url
              console.log(picUrl)
              var postPic = document.createElement('img')
              postPic.setAttribute('src',picUrl)
              $('div').append(postPic)
            },


            })
        }
      },
      error: function (){
        alert('Error Occurs!')
      }
    })
})
// https://www.rijksmuseum.nl/api/pages/nl/en/rijksstudio/artists?q=rembrant?key=X5SAR4Fe&format=json

// https://www.rijksmuseum.nl/api/pages/nl/ontdek-de-collectie/overzicht/rembrandt-harmensz-van-rijn?key=fakekey&format=json


//https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/rembrandt-harmensz-van-rijn?key=X5SAR4Fe&format=json
