report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png",
        "test": "..\\bitmaps_test\\20180601-232221\\backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_1_ipad.png",
        "test": "..\\bitmaps_test\\20180601-232221\\backstop_default_BackstopJS_Homepage_0_document_1_ipad.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_ipad.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.06",
          "analysisTime": 100
        },
        "diffImage": "..\\bitmaps_test\\20180601-232221\\failed_diff_backstop_default_BackstopJS_Homepage_0_document_1_ipad.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});