# Aggregator

This project is an aggregator that collects data from multiple APIs and provides a consolidated view of the information.

## Installation


To install and run the aggregator in Docker, follow these steps:

1. Clone the repository:

    ```bash
    git clone via ssh git@github.com:ChristianScarpati/testAggregator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Aggregator
    ```

3. Build the Docker image:

    ```bash
    sudo docker build -t aggregator .
    ```

4. Run the Docker container:

    ```bash
    docker run -p 5173:5173 aggregator
    ```

To install and run the aggregator, follow this steps: 

1. Clone the repository
2. Install the dependencies using `yarn install`
3. Run the project using `yarn dev`


## Mock API

There is a mock API included in this project for problems with newsapi.org in the dockerfile

--- 

#### For matters of time, I couldn't expand on the principles as I would have liked, feel free to review other projects of mine, but I hope that this is enough to demonstrate my knowledge and skills.
