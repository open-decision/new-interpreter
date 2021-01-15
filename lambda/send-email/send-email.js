const nodemailer = require("nodemailer")
const mg = require("nodemailer-mailgun-transport")
const handlebars = require("handlebars")

const emailTemplateSource = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style id="media-query" type="text/css">
      @media (max-width: 620px) {
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col > div {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num8 {
          width: 66% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    class="clean-body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
    "
  >
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table
      bgcolor="#ffffff"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        table-layout: fixed;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        border-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #ffffff;
        width: 100%;
      "
      valign="top"
      width="100%"
    >
      <tbody>
        <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top;" valign="top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ffffff"><![endif]-->
            <div style="background-color: transparent;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffe9d3;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffe9d3;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffe9d3"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style=";width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 15px;
                                  padding-right: 15px;
                                  padding-bottom: 15px;
                                  padding-left: 15px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffe9d3;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffe9d3;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffe9d3"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style=";width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <div
                          align="center"
                          class="img-container center fixedwidth"
                          style="padding-right: 25px; padding-left: 25px;"
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 25px;padding-left: 25px;" align="center"><![endif]-->
                          <div style="font-size: 1px; line-height: 25px;"></div>
                          <a
                            href="ferienwohnung-vogtland.com"
                            style="outline: none;"
                            tabindex="-1"
                            target="_blank"
                          >
                            <img
                              align="center"
                              alt="Logo"
                              border="0"
                              class="center fixedwidth"
                              src="https://ferienwohnungvogtland.s3.eu-central-1.amazonaws.com/logo_transparent.png"
                              style="
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                                height: auto;
                                border: 0;
                                width: 100%;
                                max-width: 210px;
                                display: block;
                              "
                              title="Logo"
                              width="210"
                          /></a>
                          <div style="font-size: 1px; line-height: 25px;"></div>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffe9d3;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffe9d3;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffe9d3"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style=";width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 30px; padding-bottom: 20px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #000000;
                            font-family: 'Roboto', Tahoma, Verdana, Segoe,
                              sans-serif;
                            line-height: 1.2;
                            padding-top: 30px;
                            padding-right: 20px;
                            padding-bottom: 20px;
                            padding-left: 20px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                sans-serif;
                              color: #000000;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 18px;
                                line-height: 1.2;
                                word-break: break-word;
                                text-align: left;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 22px;
                                margin: 0;
                              "
                            >
                              <strong
                                ><span style="font-size: 24px;"
                                  >Buchung Ferienwohnung Vogtland</span
                                ></strong
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffe9d3;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffe9d3;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffe9d3"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style=";width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:10px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 10px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 1px solid #bbbbbb;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #283c4b;
                            font-family: 'Roboto', Tahoma, Verdana, Segoe,
                              sans-serif;
                            line-height: 1.5;
                            padding-top: 10px;
                            padding-right: 30px;
                            padding-bottom: 10px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.5;
                              font-size: 12px;
                              font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                sans-serif;
                              color: #283c4b;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 20px;
                                line-height: 1.5;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 30px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 20px;"
                                ><strong
                                  ><span style=""
                                    >Sehr geehrte/r {{Name}},</span
                                  ></strong
                                ></span
                              >
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px;"
                                ><strong
                                  ><span style="font-size: 16px;"
                                    ><span style="font-size: 18px;"
                                      >Vielen Dank für Ihre Buchung der
                                      Ferienwohnung im Vogtland.</span
                                    ><br /></span></strong
                              ></span>
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 30px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #283c4b;
                            font-family: 'Roboto', Tahoma, Verdana, Segoe,
                              sans-serif;
                            line-height: 1.5;
                            padding-top: 10px;
                            padding-right: 30px;
                            padding-bottom: 30px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.5;
                              font-size: 12px;
                              font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                sans-serif;
                              color: #283c4b;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            ></p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px;"
                                >Wir<span style="">
                                  freuen uns Sie am
                                  <strong>{{checkIn_date}} ab 15 Uhr</strong>
                                  begrüßen zu dürfen. Bei Fragen können Sie uns
                                  über unsere
                                  <a
                                    href="https://ferienwohnung-vogtland.com/#contact"
                                    rel="noopener"
                                    style="
                                      text-decoration: underline;
                                      color: #1515d8;
                                    "
                                    target="_blank"
                                    title="Webseite"
                                    >Webseite
                                  </a></span
                                ><span style=""
                                  >oder täglich von
                                  <strong>9:00-18:00</strong> telefonisch unter
                                  <strong>+49 1573 1702620</strong>
                                  erreichen.</span
                                ></span
                              >
                            </p>
                            <br>
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            ></p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px;"
                                >Eine Quittung Ihrer Buchung für Ihre Unterlagen
                                erhalten Sie in einer separaten E-Mail.</span
                              >
                            </p>
                            <br>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px;"> </span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px;"
                                >Mit freundlichen Grüßen</span
                              >
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: 'Roboto', Tahoma, Verdana, Segoe,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px;"
                                >Ferienwohnung Vogtland Team<br
                              /></span>
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffe9d3;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffe9d3;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffe9d3"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style=";width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 15px;
                                  padding-right: 15px;
                                  padding-bottom: 15px;
                                  padding-left: 15px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
  </body>
</html>
`

const template = handlebars.compile(emailTemplateSource)

exports.handler = async (event, context) => {
  const auth = {
    auth: {
      api_key: "8d52c1363ed2ad5f242ee473c9dddcca-87c34c41-6db75b56",
      domain: "sandboxd6fade4d091945468925e187d03ec81f.mailgun.org",
    },
  }

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  const htmlToSend = template({
    Name: "Philipp",
  })

  const mailOptions = {
    from: "phil.garbowsky@philtech.dev",
    to: "phil.garbowsky@gmail.com",
    subject: "Test",
    html: htmlToSend,
  }

  try {
    await nodemailerMailgun.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify("Failed to sent mail"),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify("Successfully sent mail"),
  }
}
