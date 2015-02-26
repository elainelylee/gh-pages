// $(document).ready(function(){
//   $(".pad-1")
//       .on('mousedown', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/circle.png")
//           clicked.find("audio")[0].play();
//       })
//       .on('mouseup', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/square.jpg")
//       });

//   $(".pad-2")
//       .on('mousedown', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/i.png")
//           clicked.find("audio")[0].play();
//       })
//       .on('mouseup', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/square.jpg")
//       });

//    $(".pad-3")
//       .on('mousedown', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/line.png")
//           clicked.find("audio")[0].play();
//       })
//       .on('mouseup', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/square.jpg")
//       });

//     $(".pad-4")
//       .on('mousedown', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/diamond.png")
//           clicked.find("audio")[0].play();
//       })
//       .on('mouseup', function(e){
//           var clicked=$(e.currentTarget);
//           clicked.find("img").attr("src","img/square.jpg")
//       });         
// })

$(document).ready(function(){
  $(".pad-1")
      .on('mouseover', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/circle.png")
          clicked.find("audio")[0].play();
      })
      .on('mouseout', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/square.jpg")
      });

  $(".pad-2")
      .on('mouseover', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/I.png")
          clicked.find("audio")[0].play();
      })
      .on('mouseout', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/square.jpg")
      });

   $(".pad-3")
      .on('mouseover', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/line.png")
          clicked.find("audio")[0].play();
      })
      .on('mouseout', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/square.jpg")
      });

    $(".pad-4")
      .on('mouseover', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/diamond.png")
          clicked.find("audio")[0].play();
      })
      .on('mouseout', function(e){
          var clicked=$(e.currentTarget);
          clicked.find("img").attr("src","img/square.jpg")
      });         
})
