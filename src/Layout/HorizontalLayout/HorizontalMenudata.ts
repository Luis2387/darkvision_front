
const horizontalData = [
  {
    id: "navigation",
    label: "Navigation",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "ph-duotone ph-gauge",
        link: "/dashboard",
        dataPage: "index",
        badge: "2",
        submenu: [
          {
            id: "analytics",
            label: "Analytics",
            link: "/dashboard",
            dataPage: "analytics"
          },
          {
            id: "affiliate",
            label: "Affiliate",
            link: "/affiliate-dashboard",
            dataPage: "affiliate"
          },
          {
            id: "finance",
            label: "Finance",
            link: "/finance-dashboard",
            dataPage: "finance"
          },
          {
            id: "helpdesk",
            label: "Helpdesk",
            link: "/helpdesk-dashboard",
            dataPage: "helpdesk"
          },
          {
            id: "invoice",
            label: "Invoice",
            link: "/Invoice-dashboard",
            dataPage: "invoice"
          },
        ]
      },
      
    ]
  },
  {
    id: "widget",
    label: "Widgets",
    icon: "ph-duotone ph-chart-pie",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "statistics",
        label: "Statistics",
        icon: "ph-duotone ph-projector-screen-chart",
        link: "/widget/w_statistics",
        dataPage: "w_statistics"
      },
      {
        id: "user",
        label: "User",
        icon: "ph-duotone ph-identification-card",
        link: "/widget/w_user",
        dataPage: "w_user"
      },
      {
        id: "data",
        label: "Data",
        icon: "ph-duotone ph-database",
        link: "/widget/w_data",
        dataPage: "w_data"
      },
      {
        id: "chart",
        label: "Chart",
        icon: "ph-duotone ph-chart-pie",
        link: "/widget/w_chart",
        dataPage: "w_chart"
      }
    ]
  },
  {
    id: "application",
    label: "Application",
    icon: "ph-duotone ph-buildings",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "calendar",
        label: "Calendar",
        link: "/application/calendar",
        icon: "ph-duotone ph-calendar-blank",
        dataPage: "calendar"
      },
      {
        id: "chat",
        label: "Chat",
        link: "/application/chat",
        icon: "ph-duotone ph-chats-circle",
        dataPage: "chat"
      },
      {
        id: "gallery",
        label: "Gallery",
        icon: "ph-duotone ph-image",
        dataPage: null,
        submenu: [
          {
            id: "grid",
            label: "Grid",
            link: "/application/gallery-grid",
            dataPage: "grid"
          },
          {
            id: "masonry",
            label: "Masonry",
            link: "/application/gallery-masonry",
            dataPage: "masonry"
          },
        ]
      },
      {
        id: "ecom",
        label: "E-commerce",
        link: "#",
        dataPage: null,
        icon: "ph-duotone ph-shopping-cart",
        submenu: [
          {
            id: "product",
            label: "Product",
            link: "/application/ecom_product",
            dataPage: "ecom_product"
          },
          {
            id: "productdetails",
            label: "Product details",
            link: "/application/ecom_product-details",
            dataPage: "ecom_product-details"
          },
          {
            id: "productlist",
            label: "Product List",
            link: "/application/ecom_product-list",
            dataPage: "ecom_product-list"
          },
          {
            id: "addnewproduct",
            label: "Add New Product",
            link: "/application/ecom_product-add",
            dataPage: "ecom_product-add"
          },
          {
            id: "checkout",
            label: "Checkout",
            link: "/application/ecom_checkout",
            dataPage: "ecom_checkout"
          }
        ]
      },
      {
        id: "helpdesk",
        label: "Helpdesk",
        link: "#",
        dataPage: null,
        icon: "ph-duotone ph-lifebuoy",
        submenu: [
          {
            id: "ticket",
            label: "Ticket",
            dataPage: "null",
            submenu: [
              {
                id: "create",
                label: "Create",
                link: "/admins/helpdesk-create-ticket",
                dataPage: "create"
              },
              {
                id: "list",
                label: "List",
                link: "/admins/helpdesk-ticket",
                dataPage: "list"
              },
              {
                id: "details",
                label: "Details",
                link: "/admins/helpdesk-ticket-details",
                dataPage: "details"
              }
            ]
          },
          {
            id: "customer",
            label: "Customer",
            link: "/admins/helpdesk-customer",
            dataPage: "customer"
          },
        ]
      },
      {
        id: "invoice1",
        label: "Invoice 1",
        dataPage: null,
        icon: "ph-duotone ph-newspaper",
        link: "#",
        submenu: [
          {
            id: "invoicelist",
            label: "Invoice List",
            link: "/application/invoice-list",
            dataPage: "invoice-list"
          },
          {
            id: "create",
            label: "Create",
            link: "/application/invoice-create",
            dataPage: "invoice-create"
          },
          {
            id: "preview",
            label: "Preview",
            link: "/application/invoice-view",
            dataPage: "invoice-view"
          }
        ]
      },
      {
        id: "invoice2",
        label: "Invoice 2",
        dataPage: null,
        icon: "ph-duotone ph-newspaper",
        link: "#",
        submenu: [
          {
            id: "create",
            label: "Create",
            link: "/application/invoice-create",
            dataPage: "invoice-create"
          },
          {
            id: "details",
            label: "Details",
            link: "/admins/invoice-view",
            dataPage: "details"
          },
          {
            id: "list",
            label: "List",
            link: "/admins/invoice-list",
            dataPage: "list"
          },
          {
            id: "edit",
            label: "Edit",
            link: "/admins/invoice-edit",
            dataPage: "edit"
          }
        ]
      },
      {
        id: "mail",
        label: "Mail",
        link: "/application/mail",
        icon: "ph-duotone ph-envelope-open",
        dataPage: "mail"
      },
      {
        id: "membership",
        label: "Membership",
        dataPage: null,
        icon: "ph-duotone ph-identification-badge",
        link: "#",
        submenu: [
          {
            id: "dashboard",
            label: "Dashboard",
            link: "/admins/membership-dashboard",
            dataPage: "dashboard"
          },
          {
            id: "list",
            label: "List",
            link: "/admins/membership-list",
            dataPage: "list"
          },
          {
            id: "pricing",
            label: "Pricing",
            link: "/admins/membership-pricing",
            dataPage: "pricing"
          },
          {
            id: "setting",
            label: "Setting",
            link: "/admins/membership-setting",
            dataPage: "setting"
          }
        ]
      },
      {
        id: "online-courses",
        label: "Online Courses",
        dataPage: null,
        icon: "ph-duotone ph-books",
        link: "#",
        submenu: [
          {
            id: "dashboard",
            label: "Dashboard",
            link: "/admins/course-dashboard",
            dataPage: "dashboard"
          },
          {
            id: "teacher",
            label: "Teacher",
            dataPage: "null",
            submenu:
              [
                {
                  id: "list",
                  label: "List",
                  link: "/admins/course-teacher-list",
                  dataPage: "list"
                },
                {
                  id: "apply",
                  label: "Apply",
                  link: "/admins/course-teacher-apply",
                  dataPage: "apply"
                },
                {
                  id: "add",
                  label: "Add",
                  link: "/admins/course-teacher-add",
                  dataPage: "add"
                },
              ]
          },
          {
            id: "student",
            label: "Student",
            dataPage: "null",
            submenu:
              [
                {
                  id: "list",
                  label: "List",
                  link: "/admins/course-student-list",
                  dataPage: "list"
                },
                {
                  id: "apply",
                  label: "Apply",
                  link: "/admins/course-student-apply",
                  dataPage: "apply"
                },
                {
                  id: "add",
                  label: "Add",
                  link: "/admins/course-student-add",
                  dataPage: "add"
                },
              ]
          },
          {
            id: "courses",
            label: "Courses",
            dataPage: "null",
            submenu:
              [
                {
                  id: "view",
                  label: "View",
                  link: "/admins/course-course-view",
                  dataPage: "view"
                },
                {
                  id: "add",
                  label: "Add",
                  link: "/admins/course-course-add",
                  dataPage: "add"
                },
              ]
          },
          {
            id: "pricing",
            label: "Pricing",
            link: "/admins/membership-pricing",
            dataPage: "pricing"
          },
          {
            id: "setting",
            label: "Setting",
            link: "/admins/membership-setting",
            dataPage: "setting"
          }
        ]
      },
      {
        id: "plans",
        label: "Plans",
        icon: "ph-duotone ph-currency-circle-dollar",
        link: "/application/plans",
      },
      {
        id: "users",
        label: "Users",
        dataPage: null,
        icon: "ph-duotone ph-user-circle",
        link: "#",
        submenu: [
          {
            id: "accountprofile",
            label: "Account Profile",
            link: "/application/account-profile",
            dataPage: "account-profile"
          },
          {
            id: "socialmedia",
            label: "Social media",
            link: "/application/social-media",
            dataPage: "social-media"
          },
          {
            id: "usercard",
            label: "User Card",
            link: "/application/user-card",
            dataPage: "user-card"
          },
          {
            id: "userlist",
            label: "User List",
            link: "/application/user-list",
            dataPage: "user-list"
          },
          {
            id: "team",
            label: "Team",
            link: "/application/team",
            dataPage: "team"
          }
        ]
      },
    ]
  },
  {
    id: "page",
    label: "Pages",
    dataPage: null,
    icon: "ph-duotone ph-devices",
    link: "#",
    submenu: [
      {
        id: "authentication",
        label: "Authentication",
        dataPage: null,
        icon: "ph-duotone ph-shield-checkered",
        link: "#",
        submenu: [
          {
            id: "auth1",
            label: "Authentication 1",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "login",
                label: "Login",
                link: "/pages/login-v1",
                dataPage: "pages-login-v1"
              },
              {
                id: "register",
                label: "Register",
                link: "/pages/register-v1",
                dataPage: "pages-register-v1"
              },
              {
                id: "forgotpw",
                label: "Forgot Password",
                link: "/pages/forgot-password-v1",
                dataPage: "pages-forgot-password-v1"
              },
              {
                id: "resetpw",
                label: "Reset Password",
                link: "/pages/reset-password-v1",
                dataPage: "pages-reset-password-v1"
              },
              {
                id: "codeverify",
                label: "Code Verification",
                link: "/pages/code-verification-v1",
                dataPage: "code-verification-v1"
              }
            ]
          },
          {
            id: "auth2",
            label: "Authentication 2",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "login2",
                label: "Login",
                link: "/pages/login-v2",
                dataPage: "pages-login-v2"
              },
              {
                id: "register2",
                label: "Register",
                link: "/pages/register-v2",
                dataPage: "pages-register-v2"
              },
              {
                id: "forgotpw2",
                label: "Forgot Password",
                link: "/pages/forgot-password-v2",
                dataPage: "pages-forgot-password-v2"
              },
              {
                id: "resetpw2",
                label: "Reset Password",
                link: "/pages/reset-password-v2",
                dataPage: "pages-reset-password-v2"
              },
              {
                id: "codeverify2",
                label: "Code Verification",
                link: "/pages/code-verification-v2",
                dataPage: "code-verification-v2"
              }
            ]
          },
          {
            id: "loginmodal",
            label: "Login Modal",
            link: "/pages/login-modal",
            dataPage: "ui-loginmodal"
          },
        ]
      },
      {
        id: "maintenance",
        label: "Maintenance",
        dataPage: null,
        icon: "ph-duotone ph-wrench",
        link: "#",
        submenu: [
          {
            id: "er404",
            label: "Error 404",
            link: "/pages/error-404",
            dataPage: "error-404"
          },
          {
            id: "connectionlost",
            label: "Connection lost",
            link: "/pages/connection-lost",
            dataPage: "connection-lost"
          },
          {
            id: "underconstruction",
            label: "Under Construction",
            link: "/pages/under-construction",
            dataPage: "under-construction"
          },
          {
            id: "comingsoon",
            label: "Coming soon",
            link: "/pages/coming-soon",
            dataPage: "coming-soon"
          }
        ]
      },
      {
        id: "contactus",
        label: "Contact Us",
        link: "/pages/contact-us",
        icon: "ph-duotone ph-target",
        dataPage: "contactus"
      },
      {
        id: "landing",
        label: "Landing",
        link: "/",
        icon: "ph-duotone ph-rocket",
        dataPage: "landing"
      },
      {
        id: "loading",
        label: "Loading",
        link: "/pages/loading",
        icon: "ph-duotone ph-fan",
        dataPage: "loading"
      },
      {
        id: "search",
        label: "Search",
        dataPage: null,
        icon: "ph-duotone ph-magnifying-glass",
        link: "/#",
        submenu: [
          {
            id: "search",
            label: "Search",
            link: "/pages/search-page",
            dataPage: "search",
          },
          {
            id: "contact_search",
            label: "Contact Search",
            link: "/pages/contact-search",
            dataPage: "contact-search",
          },
        ]
      },
      {
        id: "setting",
        label: "Site Settings",
        icon: "ph-duotone ph-globe",
        link: "/pages/settings",
        dataPage: "setting",
      },
    ]
  },
  {
    id: "uicomponent",
    label: "UI Components",
    icon: "ph-duotone ph-compass-tool",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "components",
        label: "Components",
        icon: "ph-duotone ph-compass-tool",
        link: "/",
        dataPage: "components"
      },
      {
        id: "animation",
        label: "Animation",
        icon: "ph-duotone ph ph-flower",
        link: "/elements/animation",
        dataPage: "animation"
      },
      {
        id: "icons",
        label: "Icons",
        icon: "ph-duotone ph-flower-lotus",
        dataPage: null,
        link: "#",
        submenu: [
          {
            id: "iconfeather",
            label: "Feather",
            link: "/elements/icon-feather",
            dataPage: "icon-feather"
          },
          {
            id: "fontawesome",
            label: "Font Awesome 5",
            link: "/elements/icon-fontawesome",
            dataPage: "icon-fontawesome"
          },
          {
            id: "iconmaterial",
            label: "Material",
            link: "/elements/icon-material",
            dataPage: "icon-material"
          },
          {
            id: "icontabler",
            label: "Tabler",
            link: "/elements/icon-tabler",
            dataPage: "icon-tabler"
          },
          {
            id: "icon-phosphor",
            label: "Phosphor",
            link: "/elements/icon-phosphor",
            dataPage: "icon-phosphor"
          },
          {
            id: "icon-custom",
            label: "Custom",
            link: "/elements/icon-custom",
            dataPage: "icon-custom"
          }
        ]
      }
    ]
  },
  {
    id: "form",
    label: "Forms",
    icon: "ph-duotone ph-textbox",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "formelem",
        label: "Forms Elements",
        icon: "ph-duotone ph-textbox",
        dataPage: null,
        submenu: [
          {
            id: "formbasic",
            label: "Form Basic",
            link: "/forms/form_elements",
            dataPage: "forms-form_elements"
          },
          {
            id: "formfloat",
            label: "Form Floating",
            link: "/forms/form_floating",
            dataPage: "forms-form_floating"
          },
          {
            id: "formoption",
            label: "Form Options",
            link: "/forms/form2_basic",
            dataPage: "forms-form2_basic"
          },
          {
            id: "inputgroup",
            label: "Input Groups",
            link: "/forms/form2_input_group",
            dataPage: "forms-form2_input_group"
          },
          {
            id: "checkbox",
            label: "Checkbox",
            link: "/forms/form2_checkbox",
            dataPage: "forms-form2_checkbox"
          },
          {
            id: "radio",
            label: "Radio",
            link: "/forms/form2_radio",
            dataPage: "forms-form2_radio"
          },
          {
            id: "switch",
            label: "Switch",
            link: "/forms/form2_switch",
            dataPage: "forms-form2_switch"
          },
          {
            id: "megaoption",
            label: "Mega option",
            link: "/forms/form2_megaoption",
            dataPage: "forms-form2_megaoption"
          }
        ]
      },
      {
        id: "formplugin",
        label: "Forms Plugins",
        dataPage: null,
        icon: "ph-duotone ph-plug-charging",
        link: "#",
        submenu: [
          {
            id: "date",
            label: "Date",
            link: "#",
            dataPage: null,
            submenu: [
              {
                id: "datepicker",
                label: "Datepicker",
                link: "/forms/form2_datepicker",
                dataPage: "forms-form2_datepicker"
              },
              {
                id: "daterange",
                label: "Date Range Picker",
                link: "/forms/form2_daterangepicker",
                dataPage: "forms-form2_daterangepicker"
              },
            ]
          },
          {
            id: "select",
            label: "Select",
            link: "#",
            dataPage: null,
            submenu: [
              {
                id: "choicejs",
                label: "Choices js",
                link: "/forms/form2_choices",
                dataPage: "forms-form2_choices"
              }
            ]
          },
          {
            id: "captcha",
            label: "Google reCaptcha",
            link: "/forms/form2_recaptcha",
            dataPage: "forms-form2_recaptcha"
          },
          {
            id: "inputmask",
            label: "Input Masks",
            link: "/forms/form2_inputmask",
            dataPage: "forms-form2_inputmask"
          },
          {
            id: "clipboard",
            label: "Clipboard",
            link: "/forms/form2_clipboard",
            dataPage: "forms-form2_clipboard"
          },
          {
            id: "nouislider",
            label: "Nouislider",
            link: "/forms/form2_nouislider",
            dataPage: "forms-form2_nouislider"
          },
          {
            id: "bootstrapswitch",
            label: "Bootstrap Switch",
            link: "/forms/form2_switchjs",
            dataPage: "forms-form2_switchjs"
          },
          {
            id: "typehead",
            label: "Typeahead",
            link: "/forms/form2_typeahead",
            dataPage: "forms-form2_typeahead"
          }
        ]
      },
      {
        id: "textedit",
        label: "Text Editors",
        dataPage: null,
        icon: "ph-duotone ph-pen-nib",
        link: "#",
        submenu: [
          {
            id: "tinymce",
            label: "Tinymce",
            link: "/forms/form2_tinymce",
            dataPage: "forms-form2_tinymce"
          },
          {
            id: "quill",
            label: "Quill",
            link: "/forms/form2_quill",
            dataPage: "forms-form2_quill"
          },
          {
            id: "ckeditor",
            label: "CK editor",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "classic",
                label: "classic",
                link: "/forms/editor-classic",
                dataPage: "forms-editor-classic"
              },
              {
                id: "document",
                label: "Document",
                link: "/forms/editor-document",
                dataPage: "forms-editor-document"
              },
              {
                id: "inline",
                label: "Inline",
                link: "/forms/editor-inline",
                dataPage: "forms-editor-inline"
              },
              {
                id: "balloon",
                label: "Balloon",
                link: "/forms/editor-balloon",
                dataPage: "forms-editor-balloon"
              }
            ]
          },
          {
            id: "markdown",
            label: "Markdown",
            link: "/forms/form2_markdown",
            dataPage: "forms-form2_markdown"
          }
        ]
      },
      {
        id: "formlayout",
        label: "Form Layouts",
        dataPage: null,
        icon: "ph-duotone ph-windows-logo",
        link: "#",
        submenu: [
          {
            id: "layouts",
            label: "Layouts",
            link: "/forms/form2_lay_default",
            dataPage: "forms-form2_lay_default"
          },
          {
            id: "multicolumn",
            label: "Multicolumn",
            link: "/forms/form2_lay_multicolumn",
            dataPage: "forms-form2_lay_multicolumn"
          },
          {
            id: "actionbar",
            label: "Actionbars",
            link: "/forms/form2_lay_actionbars",
            dataPage: "forms-form2_lay_actionbars"
          },
          {
            id: "stickyaction",
            label: "Sticky Action bars",
            link: "/forms/form2_lay_stickyactionbars",
            dataPage: "forms-form2_lay_stickyactionbars"
          }
        ]
      },
      {
        id: "fileupload",
        label: "File upload",
        dataPage: null,
        icon: "ph-duotone ph-cloud-arrow-up",
        link: "#",
        submenu: [
          {
            id: "dropzone",
            label: "Dropzone",
            link: "/forms/file_upload",
            dataPage: "forms-file_upload"
          },
        ]
      },
      {
        id: "wizard",
        label: "Wizard",
        icon: "ph-duotone ph-tabs",
        link: "/forms/form2_wizard",
        dataPage: "wizard"
      },
      {
        id: "validation",
        label: "Form Validation",
        icon: "ph-duotone ph-password",
        link: "/forms/form_validation",
        dataPage: "forms-form_validation"
      },
      {
        id: "imagecropper",
        label: "Image cropper",
        icon: "ph-duotone ph-crop",
        link: "/forms/image_crop",
        dataPage: "forms-image_crop"
      }
    ]
  },
  {
    id: "table",
    label: "Table",
    icon: "ph-duotone ph-table",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "bootstraptable",
        label: "Bootstrap Table",
        dataPage: null,
        icon: "ph-duotone ph-table",
        link: "#",
        submenu: [
          {
            id: "basictable",
            label: "Basic table",
            link: "/table/tbl_bootstrap",
            dataPage: "table-tbl_bootstrap"
          },
          {
            id: "sizingtable",
            label: "Sizing table",
            link: "/table/tbl_sizing",
            dataPage: "table-tbl_sizing"
          },
          {
            id: "bordertable",
            label: "Border table",
            link: "/table/tbl_border",
            dataPage: "table-tbl_border"
          },
          {
            id: "stylingtable",
            label: "Styling table",
            link: "/table/tbl_styling",
            dataPage: "table-tbl_styling"
          }
        ]
      },
      {
        id: "vanillatable",
        label: "Vanilla Table",
        dataPage: null,
        link: "#",
        icon: "ph-duotone ph-grid-nine",
        submenu: [
          {
            id: "basicinitialization",
            label: "Basic initialization",
            link: "/table/tbl_dt_simple",
            dataPage: "table-tbl_dt_simple"
          },
          {
            id: "dynamicimport",
            label: "Dynamic Import",
            link: "/table/tbl_dt-dynamic-import",
            dataPage: "dynamicimport"
          },
          {
            id: "rendercolumn",
            label: "Render Column Cells",
            link: "/table/tbl_dt_render_column_cells",
            dataPage: "table-tbl_dt_render_column_cells"
          },
          {
            id: "columnmanipulation",
            label: "Column Manipulation",
            link: "/table/tbl_dt_column-manipulation",
            dataPage: "table-tbl_dt_column-manipulation"
          },
          {
            id: "datetime",
            label: "Datetime Sorting",
            link: "/table/tbl_dt_datetime-sorting",
            dataPage: "table-tbl_dt_datetime-sorting"
          },
          {
            id: "methos",
            label: "Methods",
            link: "/table/tbl_dt_methods",
            dataPage: "table-tbl_dt_methods"
          },
          {
            id: "addrows",
            label: "Add Rows",
            link: "/table/tbl_dt_add-rows",
            dataPage: "table-tbl_dt_add-rows"
          },
          {
            id: "fetchapi",
            label: "Fetch API",
            link: "/table/tbl_dt_fetch-api",
            dataPage: "table-tbl_dt_fetch-api"
          },
          {
            id: "filters",
            label: "Filters",
            link: "/table/tbl_dt_filters",
            dataPage: "table-tbl_dt_filters"
          },
          {
            id: "export",
            label: "Export",
            link: "/table/tbl_dt_export",
            dataPage: "table-tbl_dt_export"
          }
        ]
      },
      {
        id: "datatable",
        label: "Data table",
        dataPage: null,
        link: "#",
        icon: "ph-duotone ph-text-columns",
        submenu: [
          {
            id: "advanceinitial",
            label: "Advance initialization",
            link: "/table/dt_advance",
            dataPage: "table-dt_advance"
          },
          {
            id: "styling",
            label: "Styling",
            link: "/table/dt_styling",
            dataPage: "table-dt_styling"
          },
          {
            id: "plugin",
            label: "Plug-in",
            link: "/table/dt_plugin",
            dataPage: "table-dt_plugin"
          },
          {
            id: "datasources",
            label: "Data sources",
            link: "/table/dt_sources",
            dataPage: "table-dt_sources"
          }
        ]
      },
      {
        id: "dtextention",
        label: "DT extention",
        dataPage: 'dtextention',
        link: "#",
        icon: "ph-duotone ph-wall",
        submenu: [
          {
            id: "autofill",
            label: "Autofill",
            link: "/table/dt_ext_autofill",
            dataPage: "autofill"
          },
          {
            id: "button",
            label: "Button",
            link: "#",
            dataPage: "button",
            submenu:
              [
                {
                  id: "basicbutton",
                  label: "Basic button",
                  link: "/table/dt_ext_basic_buttons",
                  dataPage: "basicbutton"
                },
                {
                  id: "dataexport",
                  label: "Data export",
                  link: "/table/dt_ext_export_buttons",
                  dataPage: "dataexport"
                },
              ]
          },
          {
            id: "colreorder",
            label: "Col reorder",
            link: "/table/dt_ext_col_reorder",
            dataPage: "colreorder"
          },
          {
            id: "fixedcolumns",
            label: "Fixed columns",
            link: "/table/dt_ext_fixed_columns",
            dataPage: "fixedcolumns"
          },
          {
            id: "fixedheader",
            label: "Fixed Header",
            link: "/table/dt_ext_fixed_header",
            dataPage: "fixedheader"
          },
          {
            id: "keytable",
            label: "Key table",
            link: "/table/dt_ext_key_table",
            dataPage: "keytable"
          },
          {
            id: "responsive",
            label: "Responsive",
            link: "/table/dt_ext_responsive",
            dataPage: "responsive"
          },
          {
            id: "rowreorder",
            label: "Row reorder",
            link: "/table/dt_ext_row_reorder",
            dataPage: "rowreorder"
          },
          {
            id: "scroller",
            label: "Scroller",
            link: "/table/dt_ext_scroller",
            dataPage: "scroller"
          },
          {
            id: "selecttable",
            label: "Select table",
            link: "/table/dt_ext_select",
            dataPage: "selecttable"
          },
        ]
      }
    ]
  },
  {
    id: "chartsmaps",
    label: "Charts & Maps",
    icon: "ph-duotone ph-chart-pie-slice",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "charts",
        label: "Charts",
        dataPage: null,
        icon: "ph-duotone ph-chart-donut",
        link: "#",
        submenu: [
          {
            id: "apexchart",
            label: "Apex Chart",
            link: "/chart/chart-apex",
            dataPage: "chart-apex"
          },
          {
            id: "peitychart",
            label: "Peity Chart",
            link: "/chart/chart-peity",
            dataPage: "peitychart"
          },
        ]
      },
      {
        id: "maps",
        label: "Maps",
        dataPage: null,
        icon: "ph-duotone ph-map-trifold",
        link: "#",
        submenu: [
          {
            id: "vectormap",
            label: "Vector Map",
            link: "/chart/map-vector",
            dataPage: "map-vector"
          },
          {
            id: "gmape",
            label: "Gmaps",
            link: "/chart/map-gmap",
            dataPage: "gmape"
          },
        ]
      }
    ]
  },
  {
    id: "other",
    label: "Other",
    dataPage: null,
    icon: "ph-duotone ph-suitcase",
    link: "#",
    submenu: [
      {
        id: "menulevels",
        label: "Menu levels",
        dataPage: null,
        icon: "ph-duotone ph-tree-structure",
        link: "#",
        submenu: [
          {
            id: "level2.1",
            label: "Level 2.1",
            dataPage: null,
            link: "#"
          },
          {
            id: "Level 2.2",
            label: "Level 2.2",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "level3.1",
                label: "Level 3.1",
                link: "#",
                dataPage: "#3.1"
              },
              {
                id: "level3.2",
                label: "Level 3.2",
                link: "#",
                dataPage: "#3.2"
              },
              {
                id: "level3.3",
                label: "Level 3.3",
                dataPage: null,
                link: "#",
                submenu: [
                  {
                    id: "level4.1",
                    label: "Level 4.1",
                    link: "#",
                    dataPage: "#4.1"
                  },
                  {
                    id: "level4.2",
                    label: "Level 4.2",
                    link: "#",
                    dataPage: "#4.2"
                  }
                ]
              }
            ]
          },
          {
            id: "level2.3",
            label: "Level 2.3",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "level3.1",
                label: "Level 3.1",
                link: "#",
                dataPage: "#3.1"
              },
              {
                id: "level3.2",
                label: "Level 3.2",
                link: "#",
                dataPage: "#3.2"
              },
              {
                id: "level3.3",
                label: "Level 3.3",
                dataPage: null,
                link: "#",
                submenu: [
                  {
                    id: "level4.1",
                    label: "Level 4.1",
                    link: "#",
                    dataPage: "#4.1"
                  },
                  {
                    id: "level4.2",
                    label: "Level 4.2",
                    link: "#",
                    dataPage: "#4.2"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "samplepage",
        label: "Sample page",
        icon: "ph-duotone ph-desktop",
        link: "/other/sample-page",
        dataPage: "sample-page"
      }
    ]
  }
];

export { horizontalData };
