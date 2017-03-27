###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# code syntax

require "middleman-core/renderers/redcarpet"
class CustomRenderer < Middleman::Renderers::MiddlemanRedcarpetHTML
    def header(text, header_level)
        "<h%s id=\"%s\">%s<a class=\"anchor\" href=\"#%s\">&#x1F517;</a></h%s>" % [header_level, text.parameterize, text, text.parameterize, header_level]
    end
end

set :markdown_engine, :redcarpet
set :markdown, :autolink => true, :fenced_code_blocks => true, :smartypants => true, :renderer => CustomRenderer
activate :syntax

# generate search index
activate :search do |search|
  search.resources = ['posts']
  search.index_path = 'search/search.json'
  search.fields = {
    title: {index: true, boost: 100, store: true},
    tags: {index: true, boost: 50},
    slug: {index: false, store: true},
    date: {index: false, store: true},
  }
end

# generate blog specific pages
activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  # blog.sources = "{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  # blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.sources = "posts/{title}.html"
  blog.layout = "post_layout"
  blog.tag_template = "tag.html"
  blog.taglink = "tag/{tag}.html"
  blog.permalink = "{slug}.html"
  blog.summary_length = 150

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

# generate feed
page "/feed.xml", layout: false

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
    def anchors( post )
        File.readlines( post.source_file ).collect do |x|
            if x =~ /^##\s(.*)/
                $1
            else
                nil
            end
        end.select { |x| x }
    end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
