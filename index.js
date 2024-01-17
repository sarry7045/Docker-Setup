const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Suraj Yadav",
            age: 23
        },
        {
            id: 2,
            name: "Neeraj Yadav",
            age: 21
        },
    ])

})

app.listen(5000, () => {
    console.log("App Is Running om Port 5000");
})

// docker build -t dockerapp .    -    To build and run the code or create image
// docker run appname             -    To create the container from image
// docker run --name basic-container -p 5000:5000 --rm -v \Users\sarry\Desktop\Suraj\Projects\dockerapp:/app dockerapp - For Direct run with Volume
// docker run -it node /bin/bash     -   To run the Image or Create the Container   or we can diretly run from dockerapp
// docker image rm basic-app(image name) -f - to Delete the image using command  -f for force delete
// docker system prune -a                  -  for delete all the images and container
// docker build -t surajyadav7977/docker-app . - direct build , full project
// docker push surajyadav7977/docker-app - push the repo
// docker pull surajyadav7977/docker-app - pull the repo


// Container on Docker - Container is a process to run the application with Images
// Images in Docker - Are template of Project
// Volume in Docker - It use for continues changs in container with volume
// Compose File - It use for the , store all the docker commands in one file and then we can directlty run from that file

//Docker Scout - Docker Scout is a set of software supply chain features integrated into Docker's user interfaces and command line interface (CLI).
// These features offer comprehensive visibility into the structure and security of container images.