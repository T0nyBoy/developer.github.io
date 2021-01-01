let url = "https://script.google.com/macros/s/AKfycbyDWBZHCpajSAwcJjXgf-K5nqy6Hvx5s5mmzmKiGmluXZv8b5g/exec";

let tabletContent = document.querySelector(".tabletContent");

// ------------------------------------------------------------------------------------------------------
//creating an object from fetcehd data
// ------------------------------------------------------------------------------------------------------
let siteExport = fetch(url)
.then(res =>{
    return res.json();
})
.then(data => {
    // reversing data to show last first
    dataReverse = data.sheetData.reverse();
    return dataReverse;
})

// ------------------------------------------------------------------------------------------------------
// for pagination and items display
// ------------------------------------------------------------------------------------------------------
siteExport
.then(
    getTheArray =>{
        // get the pagination div from HTML
        let forPagination = document.querySelector(".forPagination");
        let itemsPerPage = document.querySelector("#itemsPerPage"); 
        let refreshItemsPerPageButton = document.querySelector(".updateItemsPerPage");

        // ITEMS PER PAGE
        refreshItemsPerPageButton.addEventListener("click",e=>{
            e.preventDefault;

            itemsDisplayPerPage = itemsPerPage.value;

            forPagination.innerHTML="";
            paginationFunction(getTheArray,itemsDisplayPerPage);

            tabletContent.innerHTML = '';
            mainDisplay(currentPage=1, getTheArray);
        }); 

        // FOR PAGINATION
        itemsDisplayPerPage = itemsPerPage.value;

        forPagination.innerHTML="";
        paginationFunction(getTheArray,itemsDisplayPerPage);

        // INITIALLY SHOWING ITEMS ON PAGE
        // using the object from fetched data
        // display items pased on pagination
        // getTheArray is the data.sheedData we returned above
        // currentPage = 1;
        tabletContent.innerHTML = '';
        mainDisplay(currentPage=1, getTheArray);
});

// ------------------------------------------------------------------------------------------------------
// PAGINATION NUMBERING FUNCTION
// ------------------------------------------------------------------------------------------------------
function paginationFunction(theArray, nrItemsPerPage){
        let forPagination = document.querySelector(".forPagination");
        pagesAmount = Math.ceil(theArray.length/nrItemsPerPage);    
        // displaying the number of pages on the html
        for(page=1;page<=pagesAmount;page++){
            forPagination.innerHTML+=`<div class="pageNumber">${page}</div>`;
        }
};


// ------------------------------------------------------------------------------------------------------
// Function to display the items into one page
// displays the page 1 from default and gets the array as an argument
// ------------------------------------------------------------------------------------------------------
function mainDisplay(page=1,theArray){

    let forPagination = document.querySelector(".forPagination");

    // INTERACT WITH PAGINATION NUMBERING
    forPagination.addEventListener("click", e=>{
        page = e.target.textContent*1; //page*1 to make it number
        tabletContent.innerHTML = ''; 
        //if we use pagination list to display we have to zero the tableContent inner HTML
        // otherwise the data will stack one above the other

        let pageNumber = document.querySelectorAll(".pageNumber");
        for(i=0;i<pageNumber.length;i++){
            pageNumber[i].classList.remove("pageNumberActive");
        }
        e.target.classList.add("pageNumberActive");

        // i starts from previous page set of items, if currentpage=1 then previous=0, i=0
        for(i=(page-1)*itemsDisplayPerPage;i<page*itemsDisplayPerPage;i++){
        tabletContent.innerHTML+=
        // ----------------------ONLY THESE SHOULD CHANGE----------------------------
        `
            <details class="itemsFromDb">
            <summary>${theArray[i].Header} - ${theArray[i].Date}</summary>
            <p>${theArray[i].Content}</p>
            </details>
        `
        // --------------------------------------------------------------------------
            };
    });

    // INITIALLY DISPLAYING THE RESULT FIRST PAGE
    // This is used to display the initial load of the page starting from page 1
    // i starts from previous page set of items, if currentpage=1 then previous=0, i=0
    for(i=(page-1)*itemsDisplayPerPage;i<page*itemsDisplayPerPage;i++){
    tabletContent.innerHTML+=
    // ----------------------ONLY THESE SHOULD CHANGE----------------------------
    `
            <details class="itemsFromDb">
            <summary>${theArray[i].Header} - ${theArray[i].Date}</summary>
            <p>${theArray[i].Content}</p>
            </details>
        `
    // --------------------------------------------------------------------------
    };
};

// ------------------------------------------------------------------------------------------------------
// ----------------------------------Search Area----------------------------------
// ------------------------------------------------------------------------------------------------------
siteExport
.then(
    getTheArray =>{
    let searchArea = document.querySelector(".searchArea");
    let searchBtn = document.querySelector(".searchBtn");

    searchBtn.addEventListener("click", e=>{
        let searchTermInput=searchArea.value.toLowerCase(); //turn the search word to lowercase
        let regex = /(?!\b\s+\b)\s+/g //regex for spaces before and after word (not between)
        let searchTerm = searchTermInput.replace(regex,""); //replacing the regex for spaces with no space "" to get new search word
        
        newSearchArray = getTheArray.filter(
            posts=>{
                // -----------------ONLY THIS SHOULD CHANGE FOR DIFF SEARCH ITEM---------------------------
                return posts.Content.toLowerCase().includes(searchTerm); //turning the content to lowercase to match with search word
                // ----------------------------------------------------------------------------------------
            });
        
        searchResultsDisplay(newSearchArray);
        searchArea.value="";
        
        let noSearchResultBackToContents = document.querySelector(".noSearchResultBackToContents");
            // to avoid error event listener for "back to main contents" will exist only if no results will exist
            if(noSearchResultBackToContents){
                noSearchResultBackToContents.addEventListener("click",e=>{
                    tabletContent.innerHTML = '';
                    // call function to display the beginning page with the results
                    mainDisplay(currentPage=1, getTheArray);
                    
                    // call function to display the pagination
                    itemsDisplayPerPage = itemsPerPage.value;
                    paginationFunction(getTheArray,itemsDisplayPerPage);
                });
            }
            
    });
});


// ------------------------------------------------------------------------------------------------------
// Function to display search results items in one page
// ------------------------------------------------------------------------------------------------------
function searchResultsDisplay(theArray){

        tabletContent.innerHTML = ''; //zeroing the posts displayed to put the result array
        let forPagination = document.querySelector(".forPagination").innerHTML = '';
        //if we use pagination list to display we have to zero the tableContent inner HTML
        // otherwise the data will stack one above the other

        // i starts from previous page set of items, if currentpage=1 then previous=0, i=0
       
        if (theArray.length<1){
            tabletContent.innerHTML=
        `   <br>
            <p>No results returned. Please use another search term.</p>
        `
            }
        else if(theArray.length>=1)
        { 
        for(i=0;i<theArray.length;i++)
        tabletContent.innerHTML+=

        // -------------------------ONLY THESE SHOULD CHANGE-------------------------
        `
            <details class="itemsFromDb">
            <summary>${theArray[i].Header} - ${theArray[i].Date}</summary>
            <p>${theArray[i].Content}</p>
            </details>
            <br>
        `
        // --------------------------------------------------------------------------
    };
    tabletContent.innerHTML+=`<p class="noSearchResultBackToContents">Back to contents.</p>`
};
