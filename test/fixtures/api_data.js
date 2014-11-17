define({ api: [
  {
    "type": "get",
    "url": "/define",
    "title": "Define",
    "name": "GetDefine",
    "group": "Define",
    "version": "0.8.0",
    "description": "<p>Example of @apiDefine and @apiUse</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "field3",
            "description": "<p>This is Field 3 (local).</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "field1",
            "description": "<p>This is Field 1.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "field2",
            "description": "<p>This is Field 2.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/define.js",
    "groupTitle": "Define",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/define"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test/error",
    "title": "Multiple Error Structures",
    "name": "PostError",
    "group": "Error",
    "version": "0.1.0",
    "description": "<p>Use of multiple ErrorStructures.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error3Error",
            "description": "<p>This is Error 3 (local).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error1Error",
            "description": "<p>This is Error 1.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error2Error",
            "description": "<p>This is Error 2.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/error_structure.js",
    "groupTitle": "Error",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/error"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test/title_and_error",
    "title": "Title and Structure",
    "name": "PostTitleAndError",
    "group": "Error",
    "version": "0.1.0",
    "description": "<p>Use of Title and Structures in the same block.</p> ",
    "success": {
      "fields": {
        "204 No Content. Added to global namespace.": [
          {
            "group": "204",
            "optional": false,
            "field": "message",
            "description": "<p>Successfully deleted.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error3Error",
            "description": "<p>This is Error 3 (local).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error1Error",
            "description": "<p>This is Error 1.</p> "
          }
        ]
      }
    },
    "groupTitle": "Error",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/title_and_error"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/escape",
    "title": "Escape Example",
    "name": "GetEscape",
    "group": "Escape",
    "version": "0.6.0",
    "description": "<p>Escape Example data.</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "   curl -i http://localhost/escape/text\n   <b>curl -i http://localhost/escape/html</b>\n   <xml>curl -i http://localhost/escape/xml</xml>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Example Response",
          "content": "HTTP/1.1 200 OK {\n field_text: 'text-value',\n field_html: '<b>html-value</b>',\n field_xml: '<xml>xml-value</xml>'\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "test/fixtures/example/escape.js",
    "groupTitle": "Escape",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/escape"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/escape",
    "title": "Escape Example",
    "name": "GetEscape",
    "group": "Escape",
    "version": "0.5.0",
    "description": "<p>Escape Example data - with comparison.</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "   curl -i http://localhost/escape/text-old\n   <b>curl -i http://localhost/escape/html-old</b>\n   <xml>curl -i http://localhost/escape/xml-old</xml>\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Example Response",
          "content": "HTTP/1.1 200 OK {\n field_text: 'text-value old',\n field_html: '<b>html-value old</b>',\n field_xml: '<xml>xml-value old</xml>'\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "test/fixtures/example/escape.js",
    "groupTitle": "Escape",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/escape"
      }
    ]
  },
  {
    "type": "get",
    "url": "/example/",
    "title": "Example",
    "name": "GetExample",
    "group": "Example",
    "version": "0.7.1",
    "description": "<p>Extended usage of @apiExample with different example types.</p> ",
    "examples": [
      {
        "title": "PHP Example (new)",
        "content": "echo 'This is the content. (new)';\n",
        "type": "PHP"
      },
      {
        "title": "JS Example",
        "content": "console.log('This is the content.');\n",
        "type": "JS"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "PHP Success Example (new)",
          "content": "echo 'This is the success content. (new)';\n",
          "type": "PHP"
        },
        {
          "title": "JS Success Example",
          "content": "console.log('This is the success content.');\n",
          "type": "JS"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PHP Error Example",
          "content": "echo 'This is the error content.';\n",
          "type": "PHP"
        },
        {
          "title": "JS Error Example",
          "content": "console.log('This is the error content.');\n",
          "type": "JS"
        }
      ]
    },
    "filename": "test/fixtures/example/example.js",
    "groupTitle": "Example",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/example/",
    "title": "Example",
    "name": "GetExample",
    "group": "Example",
    "version": "0.7.0",
    "description": "<p>Extended usage of @apiExample with different example types.</p> ",
    "examples": [
      {
        "title": "PHP Example",
        "content": "echo 'This is the content.';\n",
        "type": "PHP"
      },
      {
        "title": "JS Example (removed)",
        "content": "console.log('This is the content. (removed)');\n",
        "type": "JS"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "PHP Success Example",
          "content": "echo 'This is the success content.';\n",
          "type": "PHP"
        },
        {
          "title": "JS Success Example",
          "content": "console.log('This is the success content.');\n",
          "type": "JS"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PHP Error Example (removed)",
          "content": "echo 'This is the error content. (removed)';\n",
          "type": "PHP"
        },
        {
          "title": "JS Error Example",
          "content": "console.log('This is the error content.');\n",
          "type": "JS"
        }
      ]
    },
    "filename": "test/fixtures/example/example.js",
    "groupTitle": "Example",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/group/:id",
    "title": "Group and Description",
    "name": "GetGroup",
    "group": "Group",
    "groupDescription": "<p>This is a Group Description. Markdown capable.</p> ",
    "version": "0.5.0",
    "filename": "test/fixtures/example/group.js",
    "groupTitle": "Group",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/group/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/:id",
    "title": "Grouping",
    "name": "GetGrouping",
    "group": "Grouping",
    "version": "0.1.0",
    "description": "<p>Title and Grouping of param, success and error</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>No Group, automatically set Group to &quot;Parameter&quot;</p> "
          }
        ],
        "Replace \"login\" with this text": [
          {
            "group": "login",
            "type": "String",
            "optional": false,
            "field": "param2",
            "description": "<p>Group &quot;login&quot;</p> "
          },
          {
            "group": "login",
            "type": "String",
            "optional": false,
            "field": "param3",
            "defaultValue": "Default Value",
            "description": "<p>Group &quot;login&quot; with default Value</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 - Everything ok, replace \"201\" with this text.": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "success2",
            "description": "<p>Group &quot;201&quot;</p> "
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "success3",
            "defaultValue": "Default Value",
            "description": "<p>Group &quot;201&quot; with default Value</p> "
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success1",
            "description": "<p>No Group, automatically set &quot;Success 200&quot;</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error2",
            "description": "<p>Group &quot;400&quot;</p> "
          }
        ],
        "401 - Oh oh, replace \"401\" with this text": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "error3",
            "description": "<p>Group &quot;401&quot;</p> "
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error1",
            "description": "<p>No Group automatically set &quot;Error 4xx&quot;</p> "
          }
        ]
      }
    },
    "groupTitle": "Grouping",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/header/:id",
    "title": "Parameters",
    "name": "GetHeader",
    "group": "Header",
    "version": "0.5.0",
    "description": "<p>Test for @apiHeader (same as @apiParam)</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header1",
            "description": "<p>Parameter with type and description.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header2",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header3",
            "defaultValue": "Default Value",
            "description": "<p>Parameter with type, description and default value.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header4",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header5",
            "description": "<p>Basic Parameter with description.</p> "
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header6",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header7",
            "defaultValue": "Default Value",
            "description": "<p>Basic Parameter with description and default value.</p> "
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header8",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header9",
            "description": "<p>Optional basic Parameter with description.</p> "
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header10",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header11",
            "defaultValue": "Default Value",
            "description": "<p>Optional basic Parameter with description and default value.</p> "
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header12",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header13",
            "description": "<p>Optional Parameter with type and description.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header14",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header15",
            "defaultValue": "Default Value",
            "description": "<p>Optional Parameter with type, description and default value.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header16",
            "defaultValue": "Default Value",
            "description": ""
          }
        ]
      }
    },
    "filename": "test/fixtures/example/header.js",
    "groupTitle": "Header",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/header/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/header/example/",
    "title": "Header Example",
    "name": "GetHeaderExample",
    "group": "Header",
    "version": "0.5.0",
    "description": "<p>Usage of @headerExample.</p> ",
    "header": {
      "examples": [
        {
          "title": "An example:",
          "content": "   curl -i http://localhost/header/example/\n",
          "type": "json"
        }
      ]
    },
    "filename": "test/fixtures/example/header_example.js",
    "groupTitle": "Header",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/header/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/header/title/",
    "title": "Header Title",
    "name": "GetHeaderTitle",
    "group": "Header",
    "version": "0.5.0",
    "description": "<p>Usage of @apiHeaderTitle.</p> ",
    "header": {
      "fields": {
        "This are the Parameters for MyGroup:": [
          {
            "group": "MyHeaderGroup",
            "optional": false,
            "field": "authorization",
            "description": "<p>The authorization code.</p> "
          },
          {
            "group": "MyHeaderGroup",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Some text.</p> "
          }
        ]
      }
    },
    "groupTitle": "Header",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/header/title/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test/header",
    "title": "Header Structure",
    "name": "PostHeader",
    "group": "Header",
    "version": "0.5.0",
    "description": "<p>Use of multiple HeaderStructures.</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Header3",
            "description": "<p>This is Header 3 (local).</p> "
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Header1",
            "description": "<p>This is Header 1.</p> "
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header2",
            "description": "<p>This is Header 2.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/header_structure.js",
    "groupTitle": "Header",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/header"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/coffeescript",
    "title": "CoffeeScript",
    "name": "GetLanguageCoffeeScript",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for CoffeeScript Comment-Syntax.</p> ",
    "filename": "test/fixtures/example/language.coffee",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/coffeescript"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/coffeescript/indented1",
    "title": "CoffeeScript indented 1",
    "name": "GetLanguageCoffeeScriptIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\nLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.coffee",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/coffeescript/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/coffeescript/indented2",
    "title": "CoffeeScript indented 2",
    "name": "GetLanguageCoffeeScriptIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\nLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.coffee",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/coffeescript/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/erlang",
    "title": "Erlang",
    "name": "GetLanguageErlang",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Erlang Comment-Syntax.</p> ",
    "filename": "test/fixtures/example/language.erl",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/erlang"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/erlang/indented1",
    "title": "Erlang indented 1",
    "name": "GetLanguageErlangIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.erl",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/erlang/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/erlang/indented2",
    "title": "Erlang indented 2",
    "name": "GetLanguageErlangIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\nLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.erl",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/erlang/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/javascript",
    "title": "JavaScript",
    "name": "GetLanguageJavaScript",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for JavaScript Comment-Syntax.</p> ",
    "filename": "test/fixtures/example/language.js",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/javascript"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/javascript/indented1",
    "title": "JavaScript indented 1",
    "name": "GetLanguageJavaScriptIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.js",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/javascript/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/javascript/indented2",
    "title": "JavaScript indented 2",
    "name": "GetLanguageJavaScriptIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.js",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/javascript/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl",
    "title": "Perl",
    "name": "GetLanguagePerl",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Perl Comment-Syntax.</p> ",
    "filename": "test/fixtures/example/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl/indented1",
    "title": "Perl indented 1",
    "name": "GetLanguagePerlIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\tLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl/indented2",
    "title": "Perl indented 2",
    "name": "GetLanguagePerlIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl/podcut",
    "title": "Perl comment with pod and cut",
    "name": "GetLanguagePerlPodCut",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n     Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl/podcut"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/ruby",
    "title": "Ruby",
    "name": "GetLanguageRuby",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Ruby Comment-Syntax.</p> ",
    "filename": "test/fixtures/example/language.rb",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/ruby"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/ruby/indented1",
    "title": "Ruby indented 1",
    "name": "GetLanguageRubyIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\nLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.rb",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/ruby/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/ruby/indented2",
    "title": "Ruby indented 2",
    "name": "GetLanguageRubyIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\nLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.\n",
        "type": "json"
      }
    ],
    "filename": "test/fixtures/example/language.rb",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/ruby/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/markdown/:id",
    "title": "Markdown",
    "name": "GetMarkdown",
    "group": "Markdown",
    "version": "0.6.0",
    "description": "<p>Enable markdown for all description fields.</p> <p>This <strong>text</strong> is in a <strong>separate</strong> p.</p> <ul> <li>List 1</li> <li>List 2</li> </ul> <p>Multiline markdown text, output in one line.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>This is a markdown <strong>apiParam</strong></p> <p>Separate line.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/markdown.js",
    "groupTitle": "Markdown",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/markdown/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Parameters",
    "name": "GetParam",
    "group": "Param",
    "version": "0.1.1",
    "description": "<p>Parameters and different Versions: 0.1.1</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "param1",
            "description": "<p>Parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param2",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param3",
            "defaultValue": "Default Value",
            "description": "<p>Parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param4",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param5",
            "description": "<p>Optional parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param6",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param7",
            "defaultValue": "Default Value",
            "description": "<p>Optional parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param8",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param9",
            "description": "<p>Type, parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param10",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param11",
            "defaultValue": "Default Value",
            "description": "<p>Type, parameter and default value.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param12",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param13",
            "description": "<p>Type, optional parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param14",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param15",
            "defaultValue": "Default Value",
            "description": "<p>Type, optional parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param26",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "4,8",
            "optional": false,
            "field": "param17",
            "description": "<p>Type, size, parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-3",
            "optional": false,
            "field": "param18",
            "description": "<p>Type, size, parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "4,8",
            "optional": false,
            "field": "param19",
            "defaultValue": "Default Value",
            "description": "<p>Type, size, parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-3",
            "optional": false,
            "field": "param20",
            "defaultValue": "1",
            "description": "<p>Type, size, parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"value 1\""
            ],
            "optional": false,
            "field": "param21",
            "description": "<p>Type, parameter and allowed string value.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"value 1\"",
              "\"value 2\""
            ],
            "optional": false,
            "field": "param22",
            "description": "<p>Type, parameter and allowed list of string values.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "4711"
            ],
            "optional": false,
            "field": "param23",
            "description": "<p>Type, parameter and allowed value.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "4711",
              "4712"
            ],
            "optional": false,
            "field": "param24",
            "description": "<p>Type, parameter and allowed list of values.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1,10",
            "allowedValues": [
              "\"value 1\""
            ],
            "optional": false,
            "field": "param25",
            "description": "<p>Type, size, parameter and allowed string value.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-9999",
            "allowedValues": [
              "4711"
            ],
            "optional": false,
            "field": "param27",
            "description": "<p>Type, size, parameter and allowed value.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-9999",
            "allowedValues": [
              "4711",
              "4712"
            ],
            "optional": false,
            "field": "param28",
            "description": "<p>Type, size, parameter and allowed list of values.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/param.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Parameters",
    "name": "GetParam",
    "group": "Param",
    "version": "0.1.0",
    "description": "<p>Parameters and different Versions: 0.1.0</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param0",
            "description": "<p>This param is removed in 0.1.1.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>This is an old text.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param3",
            "defaultValue": "Default Value",
            "description": "<p>Parameter with type, description and default value.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param4",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param5",
            "description": "<p>Basic Parameter with description.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param6",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param7",
            "defaultValue": "Default Value",
            "description": "<p>Basic Parameter with description and default value.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param8",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param9",
            "description": "<p>Optional basic Parameter with description.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param10",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param11",
            "defaultValue": "Default Value",
            "description": "<p>Optional basic Parameter with description and default value.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param12",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param13",
            "description": "<p>Optional Parameter with type and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param14",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param15",
            "defaultValue": "Default Value",
            "description": "<p>Optional Parameter with type, description and default value.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "param16",
            "defaultValue": "Default Value",
            "description": ""
          }
        ]
      }
    },
    "filename": "test/fixtures/example/param.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/example/",
    "title": "Param Example",
    "name": "GetParamExample",
    "group": "Param",
    "version": "0.8.0",
    "description": "<p>Usage of @apiParamExample.</p> ",
    "examples": [
      {
        "title": "A common example:",
        "content": "   curl -i http://localhost/param/example/\n",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "A JSON example:",
          "content": "   {\n     \"name\": \"John Doe\"\n   }\n",
          "type": "json"
        }
      ]
    },
    "filename": "test/fixtures/example/param_example.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/title/",
    "title": "Param Title",
    "name": "GetParamTitle",
    "group": "Param",
    "version": "0.8.0",
    "description": "<p>Usage of @apiParamTitle.</p> ",
    "parameter": {
      "fields": {
        "Parameters only for admin users:": [
          {
            "group": "ParamTitleGroupname",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password.</p> "
          },
          {
            "group": "ParamTitleGroupname",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Change password of that user.</p> "
          }
        ]
      }
    },
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/title/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/permission/",
    "title": "Permission",
    "name": "GetPermission",
    "group": "Permission",
    "version": "0.8.0",
    "description": "<p>@apiPermission test.</p> ",
    "permission": [
      {
        "name": "permission_admin",
        "title": "Admin access.",
        "description": ""
      }
    ],
    "filename": "test/fixtures/example/permission.js",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/permission/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/permission/",
    "title": "Permission",
    "name": "GetPermission",
    "group": "Permission",
    "version": "0.8.0",
    "description": "<p>@apiPermission test.</p> ",
    "permission": [
      {
        "name": "permission_admin",
        "title": "Admin access.",
        "description": ""
      },
      {
        "name": "permission_user",
        "title": "User access.",
        "description": ""
      }
    ],
    "filename": "test/fixtures/example/permission.js",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/permission/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/sample/request/",
    "title": "Sampe Request",
    "name": "GetSampleRequest",
    "group": "Sample",
    "version": "0.8.0",
    "description": "<p>Usage of many @apiHeaderTitle with different parameters.</p> ",
    "header": {
      "fields": {
        "This are the Header for Group 1:": [
          {
            "group": "HeaderGroup1",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>The authorization code.</p> "
          },
          {
            "group": "HeaderGroup1",
            "type": "string",
            "optional": false,
            "field": "secrect",
            "description": "<p>Additional secret.</p> "
          }
        ],
        "This are the Header for Group 2:": [
          {
            "group": "HeaderGroup2",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>The authorization code.</p> "
          },
          {
            "group": "HeaderGroup2",
            "type": "string",
            "optional": false,
            "field": "secrect",
            "description": "<p>Additional secret.</p> "
          },
          {
            "group": "HeaderGroup2",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Content-Type.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "This are Parameter for Group 1:": [
          {
            "group": "ParameterGroup1",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Your name.</p> "
          }
        ],
        "This are Parameter for Group 2:": [
          {
            "group": "ParameterGroup2",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>Your firstname.</p> "
          },
          {
            "group": "ParameterGroup2",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Some lastname.</p> "
          }
        ]
      }
    },
    "groupTitle": "Sample",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/sample/request/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test/structure",
    "title": "Multiple Structures",
    "name": "PostStructure",
    "group": "Structure",
    "version": "0.1.0",
    "description": "<p>Use of multiple Structures.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "field3",
            "description": "<p>This is Field 3 (local).</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "field1",
            "description": "<p>This is Field 1.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "field2",
            "description": "<p>This is Field 2.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/structure.js",
    "groupTitle": "Structure",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/structure"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test/success",
    "title": "Multiple Success Structures",
    "name": "PostSuccess",
    "group": "Success",
    "version": "0.1.0",
    "description": "<p>Use of multiple SuccessStructures.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success3",
            "description": "<p>This is Success 3 (local).</p> "
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "success1",
            "description": "<p>This is Success 1.</p> "
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "success2",
            "description": "<p>This is Success 2.</p> "
          }
        ]
      }
    },
    "filename": "test/fixtures/example/success_structure.js",
    "groupTitle": "Success",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/success"
      }
    ]
  }
] });