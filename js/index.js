  // var xhttp = new XMLHttpRequest();
        // xhttp.open("GET", "http://localhost:3010/lowker/", true);
        // xhttp.send();
        // xhttp.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         const dataLowker = JSON.parse(this.responseText);
        //         let cardHtml = '';
        //         dataLowker.map((data,i) => {
            //             cardHtml += `
        //             <div class="card">
            //                 <div class="container">
                //                     <h4 class="company-title-card"><b>${data.company}</b></h4> 
        //                     <p class="company-id-card">id : ${data.id}</p> 
        //                     <p class="company-kategori-card">kategori : ${data.kategory}</p> 
        //                     <p>posisi : ${data.jabatan}</p> 
        //                     <p>skill : ${data.skill}</p> 
        //                     <a href="#">Details</a>
        //                 </div>
        //             </div>`
        //             })
        //         // console.log(cardHtml)
        //         // document.querySelector('.card').insertAdjacentHTML("beforebegin",x);
        //     }
        // };

        function handleDetail(id) {
            // window.location.replace('coba.html')
            // const detailLowker = fetch('http://localhost:3010/lowker/'+id)
            window.location.href = "detaillowker.html"
            console.log(id)
        }
        
        let cardHtml = '';
        fetch('http://localhost:3010/lowker/')
        .then(res => res.json())
        .then(res => {
            // console.log(data)
            res.map((data,i) => {
                cardHtml += `
                <div class="card">
                    <div class="container">
                    <h4 class="company-title-card"><b>${data.company}</b></h4> 
                        <p class="company-id-card">id : ${data.id}</p> 
                        <p class="company-kategori-card">kategori : ${data.kategory}</p> 
                        <p>posisi : ${data.jabatan}</p> 
                        <p>skill : ${data.skill}</p> 
                        <button 
                        onclick="handleDetail(${data.id})">Details</button>
                        </div>
                </div>`
            })
            document.querySelector('.list-items').innerHTML = cardHtml
        })