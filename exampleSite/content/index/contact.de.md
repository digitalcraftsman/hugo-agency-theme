+++
#disable = true
weight = 90
title = "Kontaktiere uns"
subtitle  = "Lorem ipsum dolor sit amet consectetur."
lastmod = "2016-11-22"
date = "2016-11-22"

# The contact form uses www.formspree.io as default email proxy.
# Visitors can send up to a 1000 emails each month for free.
#
# What you need to do for the setup?
#
# - set your email address under 'email' below
# - upload the generated site to your server
# - send a dummy email yourself to confirm your account
# - click the confirm link in the email from www.formspree.io
# - you're done. Happy mailing!

# It is possible to substitute formspring with other providers.
# Example: Mailout plugin from caddy.
# Provide a URL to post to and add necessary custom javascript.
postURL = "https://example.com/mailout/"

# Email can be set here or within config.toml.
# The email setting from config.toml takes precedent.
email = "mail@example.de"

button = "Sende Nachricht"

[menu.main]
  name = "Kontakt"
  weight = 90
  url = "#contact"

# Fields and messages are only defined within this file.

# Overall success or error messages
[message]
  success = "Danke für die Nachricht."
  error = "Nachricht konnte nicht geschickt werden. Bitte benutze mail@example.com."

# Fields not defined are removed from the contact form.
[fields.name]
  text = "Dein Name *"
  warning = "Bitte gib deinen Namen ein."

[fields.email]
  text = "Deine eMail *"
  warning = "Bitte gib deine eMail ein."

[fields.phone]
  text = "Deine Telefonnummer *"
  warning = "Bitte gib deine Nummer ein."

[fields.message]
  text = "Deine Nachricht *"
  warning = "Bitte gib deine Nachricht ein."

# Add optional form fields to identify contact forms.
#[[fields.hidden]]
#  name = "someID"
#  value = "example.com"
#
#[[fields.hidden]]
# Special values for name such as "page" and "site" will be autofilled
#  name = "page"
+++
