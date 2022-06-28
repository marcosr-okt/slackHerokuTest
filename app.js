const { App } = require("@slack/bolt");

const app  = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    port: process.env.PORT || 3000,
});

(async () => {
    try {
        // Start your app
        await app.start(process.env.PORT || 3000);
        console.log(
            `⚡️ Bolt app is running on port ${process.env.PORT || 3000}!`
        );
    } catch (error) {
        console.error('Unable to start App', error);
        process.exit(1);
    }
})();

