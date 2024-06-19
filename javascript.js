<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
   
      /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

     
       

      
          
          // document.getElementById("1").style.background="black"
          // document.getElementById("1.1").innerHTML = "Light Mode";
          
          
          document.addEventListener('DOMContentLoaded', (event) => {
                const toggleButton = document.getElementById('dark-mode-toggle');
                const content = document.getElementById('content');
                const title = document.getElementById('title');
                const icon = document.getElementById('dark-mode-toggle-icon');

                // Load the user's preference if available
                const savedMode = localStorage.getItem('dark-mode');
                if (savedMode === 'enabled') {
                    document.body.style.backgroundColor = 'black';
                    document.body.style.color = 'white';
                    content.style.backgroundColor = 'black';
                    content.style.color = 'white';
                }

                // Toggle dark mode on button click
                toggleButton.onclick = function() {
                    if (document.body.style.backgroundColor === 'black') {
                        title.style.color = "black";
                        toggleButton.style.backgroundColor = "black";
                        toggleButton.style.color = "white";
                        icon.innerHTML = "  Dark Mode";
                        document.body.style.backgroundColor = 'white';
                        document.body.style.color = 'black';
                        content.style.backgroundColor = 'white';
                        content.style.color = 'black';
                        localStorage.setItem('dark-mode', 'disabled');
                    } else {
                        title.style.color = "white";
                        toggleButton.style.backgroundColor = "white";
                        toggleButton.style.color = "black";
                        icon.innerHTML = "  Light Mode";
                        document.body.style.backgroundColor = 'black';
                        document.body.style.color = 'white';
                        content.style.backgroundColor = 'black';
                        content.style.color = 'white';
                        localStorage.setItem('dark-mode', 'enabled');
                    }
                };
            });
         
        
        
      
      
