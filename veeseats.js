function convertToPlainText(content) {
    // First, strip HTML tags if any exist
    const strippedHtml = stripHtml(content);
    
    // Then, handle basic Markdown syntax conversions to plain text
    const plainText = convertMarkdownToPlainText(strippedHtml);
    
    return plainText;
}

// Function to strip HTML tags
function stripHtml(html) {
    // Create a new temporary div element and assign the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Get plain text by retrieving textContent from the div
    return tempDiv.textContent || tempDiv.innerText || '';
}

// Function to handle basic Markdown to plain text conversion
function convertMarkdownToPlainText(markdown) {
    return markdown
        .replace(/(\*\*|__)(.*?)\1/g, '$2')         // Bold (**text** or __text__)
        .replace(/(\*|_)(.*?)\1/g, '$2')            // Italics (*text* or _text_)
        .replace(/(#+)\s+(.*)/g, '$2')              // Headers (# Header)
        .replace(/\[(.*?)\]\(.*?\)/g, '$1')         // Links [text](url)
        .replace(/!\[(.*?)\]\(.*?\)/g, '$1')        // Images ![alt](url)
        .replace(/[-*]\s+/g, '')                    // Unordered list items (- or *)
        .replace(/\d+\.\s+/g, '')                   // Ordered list items (1., 2., etc.)
        .replace(/`(.*?)`/g, '$1')                  // Inline code `code`
        .replace(/```[\s\S]*?```/g, '')             // Block code ```code block```
        .replace(/\n{2,}/g, '\n');                  // Replace multiple newlines with a single newline
}
 
    // Function to generate a random string of a specified length
    function generateRandomString(length = 7) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    // Generate random prefix for class names
    const randomPrefix = generateRandomString(4);

    // Dynamic CSS with the randomPrefix added to each class
    const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
@import url('https://fonts.cdnfonts.com/css/proxima-nova-condensed');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');


:root {
  --body-font: "Poppins", sans-serif;
  --subtitle-color3: #44444a;
  --herobg: #F3F3F3;
  --placeholder-color: #9b9ba5;
  --time-button: #fc5757;
  --level-button: #5052d5;
  --button-color: #fff;
  --header-bg-color2: #1c1c24;
  --subtitle-color2: #ebebeb;
  --inactive-color3: #9b9ba5;
  --mybrightness: 1;
  --fullbrightness: 0.7;
  --myfontfamily: "Poppins";
  --logocolor: #494747;
  --badge: #F3F3F3;
  --background-color: #e0e0e0;
  --shimmer-color-light: #f8f8f8;
  --shimmer-color-dark: #e0e0e0;

  --ffinter : 'Instrument Sans'
}



*, body{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.${randomPrefix}rolegrid{
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding-bottom: 80px;
    grid-auto-rows: 1fr;
    display: grid;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding-top: 10px;
    overflow: auto;
    -webkit-padding-end: 10px;
    padding-inline-end: 10px;
    padding: 0;
        overflow: visible;
        font-family: var(--ffinter);
}

    .${randomPrefix}rolecard {
        background-color: white;
  border: 1px solid #ebebeb;
  padding: 20px 16px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  height: 100%;
  transition: 0.2s ease-in-out;
    }

    .${randomPrefix}rolecard:hover {
  border: 1px solid #BD0B2052;
}
    .${randomPrefix}roleheader {
        display: flex;
  width: 100%;
  gap: 10px;
    }
    .${randomPrefix}rolelogo img {
        height: 37px;
    }
    .${randomPrefix}rolelocal {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
    .${randomPrefix}gap {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .${randomPrefix}rtype {
        background-color: #a91f2f33;
    padding-inline: 5px;
    padding-block: 5px;
    border-radius: 5px;
    color: #a91f2f;
    font-family: var(--ffinter);
    font-size: 11px;
    font-weight: 400;
    line-height: 11.72px;
    text-align: left;
    width: -moz-fit-content;
    width: fit-content;
    margin-top: 2px;
    }

    .${randomPrefix}job-card-title {
        display: flex;
    flex-direction: column;
    gap: 1px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 14px;
    font-weight: 500;
    margin-top: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    color: #000;
    }

    .${randomPrefix}dtitle {
        display: flex;
    flex-direction: column;
    gap: 1px;

    }

    .${randomPrefix}dservice {
        color: #6d6d6d;
    font-size: small;
    margin-top: 4px;
    }
    .${randomPrefix}dcontent {
        text-decoration: none;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: var(--subtitle-color);
  display: -webkit-box;
  font-size: 13.2px;
  font-family: var(--ffinter);
  line-height: 1.6em;
  margin-top: 5px;
  overflow: hidden;
  overflow-wrap: break-word;
  font-family: var(--ffinter);
  font-family: Plus Jakarta Sans;
  font-weight: 400;
    text-align: left;
}

    }
    .${randomPrefix}dfooter {
        margin-top: 15px;
    }
    .${randomPrefix}pill {
        background-color: #a91f2f33;
        padding-inline: 5px;
        padding-block: 5px;
        border-radius: 3px;
        color: #a91f2f;
        font-family: var(--ffinter);
        font-size: 12px;
        line-height: 11.72px;
        width: -moz-fit-content;
        width: fit-content;
        background-color: #f3f3f3;
    color: #0c0c0c;
    font-size: 12.3px;
    }
    .${randomPrefix}gap, .${randomPrefix}myrolefilter {
    width: 100%;
}
.${randomPrefix}gap {
    margin-left: auto;
    display: flex;
    gap: 5px;
    justify-content: flex-end;
}



    .fdc {
  flex-direction: row;
  width: auto;
  margin-left: 0;
  align-items: center;
  margin-right: auto;
  display: flex;
    gap: 10px;
    margin-left: auto;
    width: 40%;
    align-items: flex-end;
    gap: 5px;
    width: 60%;
    flex-direction: column;
    justify-content: flex-end;
     }
     .${randomPrefix}rolelocal{
    display: flex;
    gap: 10px;
    margin-left: auto;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
}

     `;



    // Create a style element and append it to the head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Sample array of jobs
    const jobs = [
        {
            organization: { logo: 'https://via.placeholder.com/50' },
            location: 'Lagos',
            jobservice: 'Software Development',
            jobtitle: 'Frontend Developer',
            jobcategory: 'Tech',
            ref: '1234',
            jobdescription: 'Converting JSX to HTML can be essential for developers who need to transition React components back into standard web content or integrate React components into non-React environments. JSX, an extension of JavaScript, allows developers to write HTML-like syntax directly within JavaScript. While JSX simplifies the creation of dynamic and reusable components in React, it can differ significantly from traditional HTML in its syntax and structure.',
        },
        {
            organization: { logo: 'https://via.placeholder.com/50' },
            location: 'Abuja',
            jobservice: 'Data Analysis',
            jobtitle: 'Data Analyst',
            jobcategory: 'Analytics',
            ref: '1235',
            jobdescription: 'Converting JSX to HTML can be essential for developers who need to transition React components back into standard web content or integrate React components into non-React environments. JSX, an extension of JavaScript, allows developers to write HTML-like syntax directly within JavaScript. While JSX simplifies the creation of dynamic and reusable components in React, it can differ significantly from traditional HTML in its syntax and structure.',
        },
        // Add more jobs as needed
    ];
    
    let mypublickey
   
    async function fetchJobs(publickey) {
        const apiUrl = `https://bsjobapi.vercel.app/embedjobs/${publickey}/`;
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        // Parse the response to JSON
        const data = await response.json();

        // Log the data or handle it as needed
        console.log(data);

        // Example: Display jobs on the page
    return  await  generateJobCards(data);
        
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return  'An Error Occured';
    }
}
    // Function to create job cards
  async  function generateJobCards(jobsArray) {
        if (jobsArray.length === 0) {
            return '<p>No jobs available</p>';
        }

        return jobsArray.map(job => `
        <div class="${randomPrefix}rolecard">
            <div class="${randomPrefix}roleheader">
                <div class="${randomPrefix}rolelogo">
                    <img src="${job.organization.logo}" alt="logo" />
                </div>
                <div class="${randomPrefix}rolelocal fdc">
                    <div class="${randomPrefix}gap">
                        <img src="https://veeseats.vercel.app/lod.png" alt="location icon" width="10px" height="13px" />
                        <small>${job.joblocation}</small>
                    </div>
                    <div class="${randomPrefix}rtype">${job.jobservice || 'Tech'}</div>
                </div>
            </div>
            <div class="${randomPrefix}dtitle">
                <div class="${randomPrefix}job-card-title">${job.jobtitle}</div>
                <div class="${randomPrefix}dservice">${job.jobcategory || 'Tech'}</div>
            </div>
            <a href="/view-role/${job.ref}" class="${randomPrefix}dcontent">
       
                ${convertToPlainText(job.jobdescription ? job.jobdescription : 'No description available')}
            </a>
            <div class="${randomPrefix}dfooter">
                <div class="${randomPrefix}pill">${job.jobcategory || 'Tech'}</div>
            </div>
        </div>
        `).join('');
    }
   
   
  async function displaymyjobs(publickey, displaydivid){
    const gridCard = document.createElement('div');
    gridCard.classList.add(`${randomPrefix}rolegrid`);
    if(publickey){
        const datafetched = await fetchJobs(jobs,publickey); 
        gridCard.innerHTML = datafetched;
    }
else{
    alert('No Publick Key provided')
}

    // Insert the generated job cards or message into the document
    document.querySelector('.veeseatsjobcards').appendChild(gridCard);
   }

