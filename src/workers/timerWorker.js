const countPomodoro = (event) => {
    console.log("WORKER HAS RECEIVED", event.data);

    console.log("Hello to you, darling!");
};

self.onmessage = countPomodoro;
