const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer Yq7xZPt/qffxI1weERSTLGO05D4V+nd0htAIVfXCVw5sUm2SCog+tCoLbFsCmcrkyAqq82x+jidUGgageYr1UbE1h7Dhe2rnwqqNOIWKMuIQi3Kb5Ye3DL8HU7t6sxJiyCiaPMioFCWCfSvcMlN7TQdB04t89/1O/w1cDnyilFU=`
};
const reply = (bodyResponse) => {
    console.log('bodyResponse.events[0]', bodyResponse.events[0])
    return request({
        method: `POST`,
        uri: `${LINE_MESSAGING_API}/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            replyToken: bodyResponse.events[0].replyToken,
            messages: [
                {
                    "type": "text",
                    "text": "dsadsa"
                },
                {
                    "type": "flex",
                    "altText": "This is a Flex Message",
                    "contents": {
                        "type": "carousel",
                        "contents": [
                            {
                                "type": "bubble",
                                "hero": {
                                    "type": "image",
                                    "size": "full",
                                    "aspectRatio": "20:13",
                                    "aspectMode": "cover",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png"
                                },
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "Arm Chair, White",
                                            "wrap": true,
                                            "weight": "bold",
                                            "size": "xl"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "$49",
                                                    "wrap": true,
                                                    "weight": "bold",
                                                    "size": "xl",
                                                    "flex": 0
                                                },
                                                {
                                                    "type": "text",
                                                    "text": ".99",
                                                    "wrap": true,
                                                    "weight": "bold",
                                                    "size": "sm",
                                                    "flex": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "footer": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "button",
                                            "style": "primary",
                                            "action": {
                                                "type": "uri",
                                                "label": "Add to Cart",
                                                "uri": "https://linecorp.com"
                                            }
                                        },
                                        {
                                            "type": "button",
                                            "action": {
                                                "type": "uri",
                                                "label": "Add to wishlist",
                                                "uri": "https://linecorp.com"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "bubble",
                                "hero": {
                                    "type": "image",
                                    "size": "full",
                                    "aspectRatio": "20:13",
                                    "aspectMode": "cover",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png"
                                },
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "Metal Desk Lamp",
                                            "wrap": true,
                                            "weight": "bold",
                                            "size": "xl"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "baseline",
                                            "flex": 1,
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "$11",
                                                    "wrap": true,
                                                    "weight": "bold",
                                                    "size": "xl",
                                                    "flex": 0
                                                },
                                                {
                                                    "type": "text",
                                                    "text": ".99",
                                                    "wrap": true,
                                                    "weight": "bold",
                                                    "size": "sm",
                                                    "flex": 0
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "text": "Temporarily out of stock",
                                            "wrap": true,
                                            "size": "xxs",
                                            "margin": "md",
                                            "color": "#ff5551",
                                            "flex": 0
                                        }
                                    ]
                                },
                                "footer": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "button",
                                            "flex": 2,
                                            "style": "primary",
                                            "color": "#aaaaaa",
                                            "action": {
                                                "type": "uri",
                                                "label": "Add to Cart",
                                                "uri": "https://linecorp.com"
                                            }
                                        },
                                        {
                                            "type": "button",
                                            "action": {
                                                "type": "uri",
                                                "label": "Add to wish list",
                                                "uri": "https://liff.line.me/1655310735-kBbo2OBw"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "bubble",
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "button",
                                            "flex": 1,
                                            "gravity": "center",
                                            "action": {
                                                "type": "uri",
                                                "label": "See more",
                                                "uri": "https://liff.line.me/1655310735-kBbo2OBw"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]

        })
    });
};
exports.pushMessage = (req, res, next) => {
    console.log('Bo Bo', req.body)
    reply(req.body);
};

exports.replyMessage = (req, res, next) => {
    res.send('OK')
}