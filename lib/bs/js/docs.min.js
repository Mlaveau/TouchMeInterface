




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bootstrap/docs/assets/js/docs.min.js at master · twbs/bootstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="twbs/bootstrap" name="twitter:title" /><meta content="bootstrap - The most popular front-end framework for developing responsive, mobile first projects on the web." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/2918581?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/2918581?s=400" property="og:image" /><meta content="twbs/bootstrap" property="og:title" /><meta content="https://github.com/twbs/bootstrap" property="og:url" /><meta content="bootstrap - The most popular front-end framework for developing responsive, mobile first projects on the web." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C02C4E3C:3D68:5D1F8A9:53834569" name="octolytics-dimension-request_id" /><meta content="6408327" name="octolytics-actor-id" /><meta content="Mlaveau" name="octolytics-actor-login" /><meta content="7e083e0dce18b8d115c14ec11cced5ced86d9a24a159fee1896063b9e57158f0" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="grHKc3lcfLmhZrto0Hlkfy6y/uDb2NYoCXC8ec4RCPSL/yi2CEoHO+fej4f1dwu2abgqdrtLAApbyhTigLaIJg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-a06ae46033959f7563b20c5faff6f5e60175253f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-7a8b4c414ee8c9e99d65a81937c61fe5bdcb58e9.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="b759507f3d976c29147b5e7639ddf4a3">

      
  <meta name="description" content="bootstrap - The most popular front-end framework for developing responsive, mobile first projects on the web." />

  <meta content="2918581" name="octolytics-dimension-user_id" /><meta content="twbs" name="octolytics-dimension-user_login" /><meta content="2126244" name="octolytics-dimension-repository_id" /><meta content="twbs/bootstrap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2126244" name="octolytics-dimension-repository_network_root_id" /><meta content="twbs/bootstrap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/twbs/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="Mlaveau"
      data-repo="twbs/bootstrap"
      data-branch="master"
      data-sha="3aa109f65125c2ea39e87b71a550ea67620666fa"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="twbs/bootstrap" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/Mlaveau" class="name">
        <img alt="Mlaveau" class=" js-avatar" data-user="6408327" height="20" src="https://avatars2.githubusercontent.com/u/6408327?s=140" width="20" /> Mlaveau
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="twbs/bootstrap">This repository</span>
    </li>
      <li>
        <a href="/twbs/bootstrap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="b8y53WpW/ngsdStg3sUSCPwQK/FIZ1hX5UkempZXmUSuCRXiGSpTtzTxTIkS13kEmWYHjyUiTB4E+QlpcyL3Tw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2126244" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/twbs/bootstrap/watchers">
        5,345
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/twbs/bootstrap/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="pUGMfCb4IAz8rupzhx4l0S7F8pVmU+r99OOWy1tma5VcuwThvj3TM1UqKPAcq8sQ3yrjd9eXlQqJtlgXWoS2xg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar twbs/bootstrap">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/twbs/bootstrap/stargazers">
          68,024
        </a>
</form>
    <form accept-charset="UTF-8" action="/twbs/bootstrap/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ibiVVw3tszyHG5H+p6SffllFF/2Wa6Bd/aLKOtLpq59RI8JlIWgybVPpz8US3DRb/R0cm+72V+RNYNt15Ek80Q==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star twbs/bootstrap">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/twbs/bootstrap/stargazers">
          68,024
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/twbs/bootstrap/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of twbs/bootstrap to your account" aria-label="Fork your own copy of twbs/bootstrap to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/twbs/bootstrap/network" class="social-count">24,806</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/twbs" class="url fn" itemprop="url" rel="author"><span itemprop="title">twbs</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/twbs/bootstrap" class="js-current-repository js-repo-home-link">bootstrap</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/twbs/bootstrap" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /twbs/bootstrap">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/twbs/bootstrap/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /twbs/bootstrap/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>159</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/twbs/bootstrap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /twbs/bootstrap/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>32</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/twbs/bootstrap/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /twbs/bootstrap/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/twbs/bootstrap/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /twbs/bootstrap/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/twbs/bootstrap/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /twbs/bootstrap/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/twbs/bootstrap.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/twbs/bootstrap.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:twbs/bootstrap.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:twbs/bootstrap.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/twbs/bootstrap" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/twbs/bootstrap" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/twbs/bootstrap/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download twbs/bootstrap as a zip file"
                   title="Download twbs/bootstrap as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/twbs/bootstrap/blob/8e568a8e3652e48e6af23c1aedce2b63dbd2fa9e/docs/assets/js/docs.min.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:41ed1f319a74f8bce08840e23cb7e920 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/twbs/bootstrap/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/apple-touch-icon/docs/assets/js/docs.min.js"
                 data-name="apple-touch-icon"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="apple-touch-icon">apple-touch-icon</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/bundle/docs/assets/js/docs.min.js"
                 data-name="bundle"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="bundle">bundle</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/derp/docs/assets/js/docs.min.js"
                 data-name="derp"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="derp">derp</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/docs_zeroclipboard/docs/assets/js/docs.min.js"
                 data-name="docs_zeroclipboard"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="docs_zeroclipboard">docs_zeroclipboard</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/fix-13386/docs/assets/js/docs.min.js"
                 data-name="fix-13386"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="fix-13386">fix-13386</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/gh-pages/docs/assets/js/docs.min.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/grunt-no-touch/docs/assets/js/docs.min.js"
                 data-name="grunt-no-touch"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="grunt-no-touch">grunt-no-touch</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/icon_paths/docs/assets/js/docs.min.js"
                 data-name="icon_paths"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="icon_paths">icon_paths</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/impl-13342/docs/assets/js/docs.min.js"
                 data-name="impl-13342"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="impl-13342">impl-13342</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/master/docs/assets/js/docs.min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/maybe-fix-12364/docs/assets/js/docs.min.js"
                 data-name="maybe-fix-12364"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="maybe-fix-12364">maybe-fix-12364</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/media-query-mixins/docs/assets/js/docs.min.js"
                 data-name="media-query-mixins"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="media-query-mixins">media-query-mixins</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/mo-classes-less-problems/docs/assets/js/docs.min.js"
                 data-name="mo-classes-less-problems"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="mo-classes-less-problems">mo-classes-less-problems</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/pr-13589/docs/assets/js/docs.min.js"
                 data-name="pr-13589"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="pr-13589">pr-13589</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/pr-13593/docs/assets/js/docs.min.js"
                 data-name="pr-13593"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="pr-13593">pr-13593</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/reinstate-13470/docs/assets/js/docs.min.js"
                 data-name="reinstate-13470"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="reinstate-13470">reinstate-13470</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/sauce-screenshots/docs/assets/js/docs.min.js"
                 data-name="sauce-screenshots"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="sauce-screenshots">sauce-screenshots</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/xhmikosr-js-style/docs/assets/js/docs.min.js"
                 data-name="xhmikosr-js-style"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="xhmikosr-js-style">xhmikosr-js-style</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.1.1/docs/assets/js/docs.min.js"
                 data-name="v3.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.1.1">v3.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.1.0/docs/assets/js/docs.min.js"
                 data-name="v3.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.1.0">v3.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.3/docs/assets/js/docs.min.js"
                 data-name="v3.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.3">v3.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.2/docs/assets/js/docs.min.js"
                 data-name="v3.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.2">v3.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.1/docs/assets/js/docs.min.js"
                 data-name="v3.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.1">v3.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.0-rc.2/docs/assets/js/docs.min.js"
                 data-name="v3.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0-rc.2">v3.0.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.0-rc1/docs/assets/js/docs.min.js"
                 data-name="v3.0.0-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0-rc1">v3.0.0-rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.0/docs/assets/js/docs.min.js"
                 data-name="v3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0">v3.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.3.2/docs/assets/js/docs.min.js"
                 data-name="v2.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.2">v2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.3.1/docs/assets/js/docs.min.js"
                 data-name="v2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.1">v2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.3.0/docs/assets/js/docs.min.js"
                 data-name="v2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.0">v2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.2.2/docs/assets/js/docs.min.js"
                 data-name="v2.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.2">v2.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.2.1/docs/assets/js/docs.min.js"
                 data-name="v2.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.1">v2.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.2.0/docs/assets/js/docs.min.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.1.1/docs/assets/js/docs.min.js"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.1.0/docs/assets/js/docs.min.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.4/docs/assets/js/docs.min.js"
                 data-name="v2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.4">v2.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.3/docs/assets/js/docs.min.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.2/docs/assets/js/docs.min.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.1/docs/assets/js/docs.min.js"
                 data-name="v2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.1">v2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.0/docs/assets/js/docs.min.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.4.0/docs/assets/js/docs.min.js"
                 data-name="v1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.4.0">v1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.3.0/docs/assets/js/docs.min.js"
                 data-name="v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0">v1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.2.0/docs/assets/js/docs.min.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.1.1/docs/assets/js/docs.min.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.1.0/docs/assets/js/docs.min.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.0.0/docs/assets/js/docs.min.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twbs/bootstrap" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twbs/bootstrap/tree/master/docs" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">docs</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twbs/bootstrap/tree/master/docs/assets" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twbs/bootstrap/tree/master/docs/assets/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">docs.min.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="docs/assets/js/docs.min.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Mark Otto" class="main-avatar js-avatar" data-user="98681" height="24" src="https://avatars3.githubusercontent.com/u/98681?s=140" width="24" />
      <span class="author"><a href="/mdo" rel="contributor">mdo</a></span>
      <time datetime="2014-05-22T18:38:43-07:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2014-05-22 18:38:43 -0700">May 22, 2014</time>
      <div class="commit-title">
          <a href="/twbs/bootstrap/commit/12b5d46f17a125021c5083fbc88b53a7fb86a096" class="message" data-pjax="true" title="move it to the sidebar">move it to the sidebar</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="XhmikosR" href="/twbs/bootstrap/commits/master/docs/assets/js/docs.min.js?author=XhmikosR"><img alt="XhmikosR" class=" js-avatar" data-user="349621" height="20" src="https://avatars1.githubusercontent.com/u/349621?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mdo" href="/twbs/bootstrap/commits/master/docs/assets/js/docs.min.js?author=mdo"><img alt="Mark Otto" class=" js-avatar" data-user="98681" height="20" src="https://avatars3.githubusercontent.com/u/98681?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="cvrebert" href="/twbs/bootstrap/commits/master/docs/assets/js/docs.min.js?author=cvrebert"><img alt="Chris Rebert" class=" js-avatar" data-user="419884" height="20" src="https://avatars1.githubusercontent.com/u/419884?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="XhmikosR" class=" js-avatar" data-user="349621" height="24" src="https://avatars1.githubusercontent.com/u/349621?s=140" width="24" />
            <a href="/XhmikosR">XhmikosR</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mark Otto" class=" js-avatar" data-user="98681" height="24" src="https://avatars3.githubusercontent.com/u/98681?s=140" width="24" />
            <a href="/mdo">mdo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Rebert" class=" js-avatar" data-user="419884" height="24" src="https://avatars1.githubusercontent.com/u/419884?s=140" width="24" />
            <a href="/cvrebert">cvrebert</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>16 lines (13 sloc)</span>
          <span class="meta-divider"></span>
        <span>14.051 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/twbs/bootstrap/edit/master/docs/assets/js/docs.min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/twbs/bootstrap/raw/master/docs/assets/js/docs.min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/twbs/bootstrap/blame/master/docs/assets/js/docs.min.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/twbs/bootstrap/commits/master/docs/assets/js/docs.min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/twbs/bootstrap/delete/master/docs/assets/js/docs.min.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">Holder - 2.3.2 - client side image placeholders</span></div><div class='line' id='LC4'><span class="cm">(c) 2012-2014 Ivan Malopinsky / http://imsky.co</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">Provided under the MIT License.</span></div><div class='line' id='LC7'><span class="cm">Commercial use requires attribution.</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">*/</span></div><div class='line' id='LC10'><span class="kd">var</span> <span class="nx">Holder</span><span class="o">=</span><span class="nx">Holder</span><span class="o">||</span><span class="p">{};</span><span class="o">!</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="nx">b</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="mi">10</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="mi">1</span><span class="o">/</span><span class="mi">12</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(.</span><span class="mi">75</span><span class="o">*</span><span class="nx">e</span><span class="p">,.</span><span class="mi">75</span><span class="o">*</span><span class="nx">d</span><span class="o">*</span><span class="nx">f</span><span class="p">);</span><span class="k">return</span><span class="p">{</span><span class="nx">height</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">size</span><span class="p">,</span><span class="nx">g</span><span class="p">))}}</span><span class="kd">function</span> <span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">[];</span><span class="k">for</span><span class="p">(</span><span class="nx">p</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">p</span><span class="o">+</span><span class="s2">&quot;:&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">[</span><span class="nx">p</span><span class="p">]);</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;;&quot;</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">ctx</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">template</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">ratio</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">holder</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="s2">&quot;literal&quot;</span><span class="o">==</span><span class="nx">g</span><span class="p">.</span><span class="nx">textmode</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="s2">&quot;exact&quot;</span><span class="o">==</span><span class="nx">g</span><span class="p">.</span><span class="nx">textmode</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">k</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">width</span><span class="o">*</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">height</span><span class="o">*</span><span class="nx">f</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">font</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">font</span><span class="o">:</span><span class="s2">&quot;Arial,Helvetica,sans-serif&quot;</span><span class="p">;</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">l</span><span class="p">,</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">m</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">textAlign</span><span class="o">=</span><span class="s2">&quot;center&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">textBaseline</span><span class="o">=</span><span class="s2">&quot;middle&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">fillStyle</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">background</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">l</span><span class="p">,</span><span class="nx">m</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">fillStyle</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">foreground</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">font</span><span class="o">=</span><span class="s2">&quot;bold &quot;</span><span class="o">+</span><span class="nx">k</span><span class="o">+</span><span class="s2">&quot;px &quot;</span><span class="o">+</span><span class="nx">n</span><span class="p">;</span><span class="kd">var</span> <span class="nx">o</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">text</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">text</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">;</span><span class="nx">o</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nx">d</span><span class="p">.</span><span class="nx">height</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">exact_dimensions</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">exact_dimensions</span><span class="p">;</span><span class="nx">o</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">height</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">measureText</span><span class="p">(</span><span class="nx">o</span><span class="p">).</span><span class="nx">width</span><span class="p">;</span><span class="k">return</span> <span class="nx">p</span><span class="o">/</span><span class="nx">l</span><span class="o">&gt;=</span><span class="p">.</span><span class="mi">75</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">k</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(.</span><span class="mi">75</span><span class="o">*</span><span class="nx">k</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">/</span><span class="nx">p</span><span class="p">))),</span><span class="nx">b</span><span class="p">.</span><span class="nx">font</span><span class="o">=</span><span class="s2">&quot;bold &quot;</span><span class="o">+</span><span class="nx">k</span><span class="o">*</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;px &quot;</span><span class="o">+</span><span class="nx">n</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">fillText</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">l</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">m</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">l</span><span class="p">),</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">toDataURL</span><span class="p">(</span><span class="s2">&quot;image/png&quot;</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">f</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">template</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">holder</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="s2">&quot;literal&quot;</span><span class="o">==</span><span class="nx">e</span><span class="p">.</span><span class="nx">textmode</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="s2">&quot;exact&quot;</span><span class="o">==</span><span class="nx">e</span><span class="p">.</span><span class="nx">textmode</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="nx">d</span><span class="p">),</span><span class="nx">i</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">font</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">font</span><span class="o">:</span><span class="s2">&quot;Arial,Helvetica,sans-serif&quot;</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">text</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">text</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">;</span><span class="nx">m</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">exact_dimensions</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">exact_dimensions</span><span class="p">;</span><span class="nx">m</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="nx">z</span><span class="p">({</span><span class="nx">text</span><span class="o">:</span><span class="nx">m</span><span class="p">,</span><span class="nx">width</span><span class="o">:</span><span class="nx">j</span><span class="p">,</span><span class="nx">height</span><span class="o">:</span><span class="nx">k</span><span class="p">,</span><span class="nx">text_height</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">font</span><span class="o">:</span><span class="nx">l</span><span class="p">,</span><span class="nx">template</span><span class="o">:</span><span class="nx">d</span><span class="p">});</span><span class="k">return</span><span class="s2">&quot;data:image/svg+xml;base64,&quot;</span><span class="o">+</span><span class="nx">btoa</span><span class="p">(</span><span class="nx">unescape</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">n</span><span class="p">)))}</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">r</span><span class="p">.</span><span class="nx">use_canvas</span><span class="o">&amp;&amp;!</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_svg</span><span class="o">?</span><span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">f</span><span class="p">(</span><span class="nx">a</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">theme</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">text</span><span class="o">?</span><span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">text</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;x&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span><span class="nx">f</span><span class="o">=</span><span class="nx">h</span><span class="o">?</span><span class="nx">o</span><span class="p">(</span><span class="nx">f</span><span class="p">,{</span><span class="nx">text</span><span class="o">:</span><span class="nx">h</span><span class="p">})</span><span class="o">:</span><span class="nx">f</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="o">?</span><span class="nx">o</span><span class="p">(</span><span class="nx">f</span><span class="p">,{</span><span class="nx">font</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">})</span><span class="o">:</span><span class="nx">f</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">theme</span><span class="o">=</span><span class="nx">f</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">holder_data</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="s2">&quot;image&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">?</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;alt&quot;</span><span class="p">,</span><span class="nx">h</span><span class="o">?</span><span class="nx">h</span><span class="o">:</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="o">+</span><span class="s2">&quot; [&quot;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s2">&quot;]&quot;</span><span class="o">:</span><span class="nx">i</span><span class="p">),(</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">||!</span><span class="nx">c</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">height</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">),</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">background</span><span class="o">:</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">,</span><span class="nx">g</span><span class="p">({</span><span class="nx">ctx</span><span class="o">:</span><span class="nx">w</span><span class="p">,</span><span class="nx">dimensions</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">template</span><span class="o">:</span><span class="nx">f</span><span class="p">,</span><span class="nx">ratio</span><span class="o">:</span><span class="nx">x</span><span class="p">,</span><span class="nx">holder</span><span class="o">:</span><span class="nx">c</span><span class="p">})),</span><span class="nx">c</span><span class="p">.</span><span class="nx">textmode</span><span class="o">&amp;&amp;</span><span class="s2">&quot;exact&quot;</span><span class="o">==</span><span class="nx">c</span><span class="p">.</span><span class="nx">textmode</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">v</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">))))</span><span class="o">:</span><span class="s2">&quot;background&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">?</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundImage</span><span class="o">=</span><span class="s2">&quot;url(&quot;</span><span class="o">+</span><span class="nx">g</span><span class="p">({</span><span class="nx">ctx</span><span class="o">:</span><span class="nx">w</span><span class="p">,</span><span class="nx">dimensions</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">template</span><span class="o">:</span><span class="nx">f</span><span class="p">,</span><span class="nx">ratio</span><span class="o">:</span><span class="nx">x</span><span class="p">,</span><span class="nx">holder</span><span class="o">:</span><span class="nx">c</span><span class="p">})</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundSize</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;px &quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">height</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">)</span><span class="o">:</span><span class="s2">&quot;fluid&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;alt&quot;</span><span class="p">,</span><span class="nx">h</span><span class="o">?</span><span class="nx">h</span><span class="o">:</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="o">+</span><span class="s2">&quot; [&quot;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s2">&quot;]&quot;</span><span class="o">:</span><span class="nx">i</span><span class="p">),</span><span class="s2">&quot;%&quot;</span><span class="o">==</span><span class="nx">e</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">height</span><span class="o">:</span><span class="kc">null</span><span class="o">!=</span><span class="nx">c</span><span class="p">.</span><span class="nx">auto</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">auto</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">height</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">),</span><span class="s2">&quot;%&quot;</span><span class="o">==</span><span class="nx">e</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">width</span><span class="o">:</span><span class="kc">null</span><span class="o">!=</span><span class="nx">c</span><span class="p">.</span><span class="nx">auto</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">auto</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">),(</span><span class="s2">&quot;inline&quot;</span><span class="o">==</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">||</span><span class="s2">&quot;&quot;</span><span class="o">===</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">||</span><span class="s2">&quot;none&quot;</span><span class="o">==</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">),</span><span class="nx">j</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">background</span><span class="o">:</span><span class="p">(</span><span class="nx">v</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">)))}</span><span class="kd">function</span> <span class="nx">i</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="p">{</span><span class="nx">height</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">clientHeight</span><span class="p">,</span><span class="nx">width</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">clientWidth</span><span class="p">};</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">height</span><span class="o">||</span><span class="nx">c</span><span class="p">.</span><span class="nx">width</span><span class="o">?</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">removeAttribute</span><span class="p">(</span><span class="s2">&quot;data-holder-invisible&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-holder-invisible&quot;</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">),</span><span class="k">void</span> <span class="nx">b</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">a</span><span class="p">))}</span><span class="kd">function</span> <span class="nx">j</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">holder_data</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">i</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">invisible_error_fn</span><span class="p">(</span><span class="nx">j</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">holder_data</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">initial_dimensions</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="o">=</span><span class="p">{</span><span class="nx">fluid_height</span><span class="o">:</span><span class="s2">&quot;%&quot;</span><span class="o">==</span><span class="nx">d</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">),</span><span class="nx">fluid_width</span><span class="o">:</span><span class="s2">&quot;%&quot;</span><span class="o">==</span><span class="nx">d</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">),</span><span class="nx">mode</span><span class="o">:</span><span class="kc">null</span><span class="p">},</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">fluid_width</span><span class="o">&amp;&amp;!</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">fluid_height</span><span class="o">?</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">mode</span><span class="o">=</span><span class="s2">&quot;width&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">ratio</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">initial_dimensions</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">))</span><span class="o">:!</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">fluid_width</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">fluid_height</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">mode</span><span class="o">=</span><span class="s2">&quot;height&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">ratio</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">/</span><span class="nx">d</span><span class="p">.</span><span class="nx">initial_dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">)}}}</span><span class="kd">function</span> <span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="p">;</span><span class="nx">c</span><span class="o">=</span><span class="kc">null</span><span class="o">==</span><span class="nx">b</span><span class="p">.</span><span class="nx">nodeType</span><span class="o">?</span><span class="nx">v</span><span class="o">:</span><span class="p">[</span><span class="nx">b</span><span class="p">];</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span> <span class="k">in</span> <span class="nx">c</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">d</span><span class="p">)){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">d</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">holder_data</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">holder_data</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">i</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">invisible_error_fn</span><span class="p">(</span><span class="nx">k</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">fluid</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span><span class="k">switch</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">mode</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;width&quot;</span><span class="o">:</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="nx">f</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">ratio</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;height&quot;</span><span class="o">:</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">*</span><span class="nx">f</span><span class="p">.</span><span class="nx">fluid_data</span><span class="p">.</span><span class="nx">ratio</span><span class="p">}</span><span class="nx">e</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">,</span><span class="nx">g</span><span class="p">({</span><span class="nx">ctx</span><span class="o">:</span><span class="nx">w</span><span class="p">,</span><span class="nx">dimensions</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">template</span><span class="o">:</span><span class="nx">f</span><span class="p">.</span><span class="nx">theme</span><span class="p">,</span><span class="nx">ratio</span><span class="o">:</span><span class="nx">x</span><span class="p">,</span><span class="nx">holder</span><span class="o">:</span><span class="nx">f</span><span class="p">}))}</span><span class="nx">f</span><span class="p">.</span><span class="nx">textmode</span><span class="o">&amp;&amp;</span><span class="s2">&quot;exact&quot;</span><span class="o">==</span><span class="nx">f</span><span class="p">.</span><span class="nx">textmode</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">exact_dimensions</span><span class="o">=</span><span class="nx">h</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">,</span><span class="nx">g</span><span class="p">({</span><span class="nx">ctx</span><span class="o">:</span><span class="nx">w</span><span class="p">,</span><span class="nx">dimensions</span><span class="o">:</span><span class="nx">f</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">,</span><span class="nx">template</span><span class="o">:</span><span class="nx">f</span><span class="p">.</span><span class="nx">theme</span><span class="p">,</span><span class="nx">ratio</span><span class="o">:</span><span class="nx">x</span><span class="p">,</span><span class="nx">holder</span><span class="o">:</span><span class="nx">f</span><span class="p">})))}}}}</span><span class="kd">function</span> <span class="nx">l</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">{</span><span class="nx">theme</span><span class="o">:</span><span class="nx">o</span><span class="p">(</span><span class="nx">y</span><span class="p">.</span><span class="nx">themes</span><span class="p">.</span><span class="nx">gray</span><span class="p">,{})},</span><span class="nx">e</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&gt;</span><span class="nx">g</span><span class="p">;</span><span class="nx">g</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">g</span><span class="p">];</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="nx">e</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">dimensions</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">h</span><span class="p">))</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">fluid</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="nx">e</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">dimensions</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">fluid</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">h</span><span class="p">),</span><span class="nx">d</span><span class="p">.</span><span class="nx">fluid</span><span class="o">=!</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">textmode</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">textmode</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">textmode</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">colors</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">theme</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">colors</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">themes</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">themes</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">theme</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">themes</span><span class="p">[</span><span class="nx">h</span><span class="p">],{}))</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">font</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">auto</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">auto</span><span class="o">=!</span><span class="mi">0</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">text</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">h</span><span class="p">))}</span><span class="k">return</span> <span class="nx">e</span><span class="o">?</span><span class="nx">d</span><span class="o">:!</span><span class="mi">1</span><span class="p">}</span><span class="kd">function</span> <span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="s2">&quot;complete&quot;</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;readystatechange&quot;</span><span class="p">,</span><span class="nx">e</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="s2">&quot;addEventListener&quot;</span><span class="o">:</span><span class="s2">&quot;attachEvent&quot;</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="s2">&quot;removeEventListener&quot;</span><span class="o">:</span><span class="s2">&quot;detachEvent&quot;</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="s2">&quot;on&quot;</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">g</span><span class="p">){(</span><span class="nx">g</span><span class="p">.</span><span class="nx">type</span><span class="o">!=</span><span class="nx">d</span><span class="o">||</span><span class="nx">h</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="nx">c</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">((</span><span class="s2">&quot;load&quot;</span><span class="o">==</span><span class="nx">g</span><span class="p">.</span><span class="nx">type</span><span class="o">?</span><span class="nx">a</span><span class="o">:</span><span class="nx">h</span><span class="p">)[</span><span class="nx">k</span><span class="p">](</span><span class="nx">l</span><span class="o">+</span><span class="nx">g</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="o">!</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">f</span><span class="o">=!</span><span class="mi">0</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="kc">null</span><span class="p">))},</span><span class="nx">n</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">try</span><span class="p">{</span><span class="nx">i</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">(</span><span class="s2">&quot;left&quot;</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">void</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="mi">50</span><span class="p">)}</span><span class="nx">m</span><span class="p">(</span><span class="s2">&quot;poll&quot;</span><span class="p">)};</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="nx">c</span><span class="p">)</span><span class="nx">b</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;lazy&quot;</span><span class="p">);</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">createEventObject</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="nx">g</span><span class="o">=!</span><span class="nx">a</span><span class="p">.</span><span class="nx">frameElement</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">o</span><span class="p">){}</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="nx">n</span><span class="p">()}</span><span class="nx">h</span><span class="p">[</span><span class="nx">j</span><span class="p">](</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">h</span><span class="p">[</span><span class="nx">j</span><span class="p">](</span><span class="nx">l</span><span class="o">+</span><span class="nx">d</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="nx">a</span><span class="p">[</span><span class="nx">j</span><span class="p">](</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">e</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(\W)?(.*)/</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="o">||</span><span class="nb">document</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="s2">&quot;getElement&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">?</span><span class="s2">&quot;#&quot;</span><span class="o">==</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">?</span><span class="s2">&quot;ById&quot;</span><span class="o">:</span><span class="s2">&quot;sByClassName&quot;</span><span class="o">:</span><span class="s2">&quot;sByTagName&quot;</span><span class="p">)],</span><span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="mi">2</span><span class="p">]),</span><span class="nx">e</span><span class="o">=</span><span class="p">[];</span><span class="k">return</span> <span class="kc">null</span><span class="o">!==</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">||</span><span class="mi">0</span><span class="o">===</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="nx">d</span><span class="o">:</span><span class="p">[</span><span class="nx">d</span><span class="p">]),</span><span class="nx">e</span><span class="p">}</span><span class="kd">function</span> <span class="nx">o</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="p">{};</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">d</span><span class="p">]);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span><span class="nx">b</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">]);</span><span class="k">return</span> <span class="nx">c</span><span class="p">}</span><span class="kd">var</span> <span class="nx">q</span><span class="o">=</span><span class="p">{</span><span class="nx">use_svg</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">use_canvas</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">use_fallback</span><span class="o">:!</span><span class="mi">1</span><span class="p">},</span><span class="nx">r</span><span class="o">=</span><span class="p">{},</span><span class="nx">s</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="nx">canvas</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;canvas&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">u</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">v</span><span class="o">=</span><span class="p">[];</span><span class="k">if</span><span class="p">(</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">toDataURL</span><span class="p">(</span><span class="s2">&quot;image/png&quot;</span><span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;data:image/png&quot;</span><span class="p">)</span><span class="o">&lt;</span><span class="mi">0</span><span class="p">)</span><span class="nx">q</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">else</span> <span class="kd">var</span> <span class="nx">w</span><span class="o">=</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s2">&quot;2d&quot;</span><span class="p">);</span><span class="k">else</span> <span class="nx">q</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="s2">&quot;http://www.w3.org/2000/svg&quot;</span><span class="p">,</span><span class="s2">&quot;svg&quot;</span><span class="p">).</span><span class="nx">createSVGRect</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">q</span><span class="p">.</span><span class="nx">use_svg</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">q</span><span class="p">.</span><span class="nx">use_canvas</span><span class="o">=!</span><span class="mi">1</span><span class="p">),</span><span class="nx">q</span><span class="p">.</span><span class="nx">use_fallback</span><span class="o">||</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">devicePixelRatio</span><span class="o">||</span><span class="mi">1</span><span class="p">,</span><span class="nx">u</span><span class="o">=</span><span class="nx">w</span><span class="p">.</span><span class="nx">webkitBackingStorePixelRatio</span><span class="o">||</span><span class="nx">w</span><span class="p">.</span><span class="nx">mozBackingStorePixelRatio</span><span class="o">||</span><span class="nx">w</span><span class="p">.</span><span class="nx">msBackingStorePixelRatio</span><span class="o">||</span><span class="nx">w</span><span class="p">.</span><span class="nx">oBackingStorePixelRatio</span><span class="o">||</span><span class="nx">w</span><span class="p">.</span><span class="nx">backingStorePixelRatio</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="kd">var</span> <span class="nx">x</span><span class="o">=</span><span class="nx">t</span><span class="o">/</span><span class="nx">u</span><span class="p">,</span><span class="nx">y</span><span class="o">=</span><span class="p">{</span><span class="nx">domain</span><span class="o">:</span><span class="s2">&quot;holder.js&quot;</span><span class="p">,</span><span class="nx">images</span><span class="o">:</span><span class="s2">&quot;img&quot;</span><span class="p">,</span><span class="nx">bgnodes</span><span class="o">:</span><span class="s2">&quot;.holderjs&quot;</span><span class="p">,</span><span class="nx">themes</span><span class="o">:</span><span class="p">{</span><span class="nx">gray</span><span class="o">:</span><span class="p">{</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#eee&quot;</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#aaa&quot;</span><span class="p">,</span><span class="nx">size</span><span class="o">:</span><span class="mi">12</span><span class="p">},</span><span class="nx">social</span><span class="o">:</span><span class="p">{</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#3a5a97&quot;</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#fff&quot;</span><span class="p">,</span><span class="nx">size</span><span class="o">:</span><span class="mi">12</span><span class="p">},</span><span class="nx">industrial</span><span class="o">:</span><span class="p">{</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#434A52&quot;</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#C2F200&quot;</span><span class="p">,</span><span class="nx">size</span><span class="o">:</span><span class="mi">12</span><span class="p">},</span><span class="nx">sky</span><span class="o">:</span><span class="p">{</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#0D8FDB&quot;</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#fff&quot;</span><span class="p">,</span><span class="nx">size</span><span class="o">:</span><span class="mi">12</span><span class="p">},</span><span class="nx">vine</span><span class="o">:</span><span class="p">{</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#39DBAC&quot;</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#1E292C&quot;</span><span class="p">,</span><span class="nx">size</span><span class="o">:</span><span class="mi">12</span><span class="p">},</span><span class="nx">lava</span><span class="o">:</span><span class="p">{</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#F8591A&quot;</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#1C2846&quot;</span><span class="p">,</span><span class="nx">size</span><span class="o">:</span><span class="mi">12</span><span class="p">}},</span><span class="nx">stylesheet</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">};</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="o">=</span><span class="p">{</span><span class="nx">dimensions</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/^(\d+)x(\d+)$/</span><span class="p">,</span><span class="nx">output</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span><span class="p">{</span><span class="nx">width</span><span class="o">:+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="nx">height</span><span class="o">:+</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]}}},</span><span class="nx">fluid</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/^([0-9%]+)x([0-9%]+)$/</span><span class="p">,</span><span class="nx">output</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span><span class="p">{</span><span class="nx">width</span><span class="o">:</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="nx">height</span><span class="o">:</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]}}},</span><span class="nx">colors</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i</span><span class="p">,</span><span class="nx">output</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span><span class="p">{</span><span class="nx">size</span><span class="o">:</span><span class="nx">y</span><span class="p">.</span><span class="nx">themes</span><span class="p">.</span><span class="nx">gray</span><span class="p">.</span><span class="nx">size</span><span class="p">,</span><span class="nx">foreground</span><span class="o">:</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="nx">background</span><span class="o">:</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]}}},</span><span class="nx">text</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/text\:(.*)/</span><span class="p">,</span><span class="nx">output</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">)[</span><span class="mi">1</span><span class="p">]}},</span><span class="nx">font</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/font\:(.*)/</span><span class="p">,</span><span class="nx">output</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">)[</span><span class="mi">1</span><span class="p">]}},</span><span class="nx">auto</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/^auto$/</span><span class="p">},</span><span class="nx">textmode</span><span class="o">:</span><span class="p">{</span><span class="nx">regex</span><span class="o">:</span><span class="sr">/textmode\:(.*)/</span><span class="p">,</span><span class="nx">output</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">)[</span><span class="mi">1</span><span class="p">]}}};</span><span class="kd">var</span> <span class="nx">z</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">XMLSerializer</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">new</span> <span class="nx">XMLSerializer</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="s2">&quot;http://www.w3.org/2000/svg&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;svg&quot;</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">webkitMatchesSelector</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;xmlns&quot;</span><span class="p">,</span><span class="s2">&quot;http://www.w3.org/2000/svg&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;rect&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;text&quot;</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;text-anchor&quot;</span><span class="p">,</span><span class="s2">&quot;middle&quot;</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">f</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;fill&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">template</span><span class="p">.</span><span class="nx">background</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;x&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;y&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">nodeValue</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">text</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">({</span><span class="nx">fill</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">template</span><span class="p">.</span><span class="nx">foreground</span><span class="p">,</span><span class="s2">&quot;font-weight&quot;</span><span class="o">:</span><span class="s2">&quot;bold&quot;</span><span class="p">,</span><span class="s2">&quot;font-size&quot;</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">text_height</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">,</span><span class="s2">&quot;font-family&quot;</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">font</span><span class="p">,</span><span class="s2">&quot;dominant-baseline&quot;</span><span class="o">:</span><span class="s2">&quot;central&quot;</span><span class="p">})),</span><span class="nx">a</span><span class="p">.</span><span class="nx">serializeToString</span><span class="p">(</span><span class="nx">c</span><span class="p">)}}}();</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">A</span> <span class="k">in</span> <span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">A</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">flags</span><span class="p">[</span><span class="nx">A</span><span class="p">].</span><span class="nx">match</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">)});</span><span class="nx">a</span><span class="p">.</span><span class="nx">invisible_error_fn</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasAttribute</span><span class="p">(</span><span class="s2">&quot;data-holder-invisible&quot;</span><span class="p">))</span><span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Holder: invisible placeholder&quot;</span><span class="p">)}},</span><span class="nx">a</span><span class="p">.</span><span class="nx">add_theme</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="kc">null</span><span class="o">!=</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="kc">null</span><span class="o">!=</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">y</span><span class="p">.</span><span class="nx">themes</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">add_image</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">n</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">f</span><span class="o">&gt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">e</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;img&quot;</span><span class="p">);</span><span class="nx">g</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">d</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">)}</span><span class="k">return</span> <span class="nx">a</span><span class="p">},</span><span class="nx">a</span><span class="p">.</span><span class="nx">run</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">r</span><span class="o">=</span><span class="nx">o</span><span class="p">({},</span><span class="nx">q</span><span class="p">),</span><span class="nx">s</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="p">[],</span><span class="nx">e</span><span class="o">=</span><span class="p">[],</span><span class="nx">f</span><span class="o">=</span><span class="p">[];</span><span class="k">for</span><span class="p">(</span><span class="kc">null</span><span class="o">!=</span><span class="nx">c</span><span class="p">.</span><span class="nx">use_canvas</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">use_canvas</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_canvas</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">r</span><span class="p">.</span><span class="nx">use_svg</span><span class="o">=!</span><span class="mi">1</span><span class="p">),</span><span class="s2">&quot;string&quot;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">c</span><span class="p">.</span><span class="nx">images</span><span class="o">?</span><span class="nx">e</span><span class="o">=</span><span class="nx">n</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span><span class="p">)</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span><span class="o">?</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">Node</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Node</span><span class="o">?</span><span class="nx">e</span><span class="o">=</span><span class="p">[</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span><span class="p">]</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">HTMLCollection</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">HTMLCollection</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">images</span><span class="p">),</span><span class="s2">&quot;string&quot;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">c</span><span class="p">.</span><span class="nx">bgnodes</span><span class="o">?</span><span class="nx">f</span><span class="o">=</span><span class="nx">n</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">bgnodes</span><span class="p">)</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">elements</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span><span class="o">?</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">bgnodes</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">Node</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">bgnodes</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Node</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="p">[</span><span class="nx">c</span><span class="p">.</span><span class="nx">bgnodes</span><span class="p">]),</span><span class="nx">k</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">j</span><span class="o">&gt;</span><span class="nx">k</span><span class="p">;</span><span class="nx">k</span><span class="o">++</span><span class="p">)</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">k</span><span class="p">]);</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;holderjs-style&quot;</span><span class="p">);</span><span class="nx">g</span><span class="o">||</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">,</span><span class="s2">&quot;holderjs-style&quot;</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">type</span><span class="o">=</span><span class="s2">&quot;text/css&quot;</span><span class="p">,</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">)),</span><span class="nx">c</span><span class="p">.</span><span class="nx">nocss</span><span class="o">||</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">styleSheet</span><span class="o">?</span><span class="nx">g</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span><span class="o">+=</span><span class="nx">c</span><span class="p">.</span><span class="nx">stylesheet</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">stylesheet</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">stylesheet</span><span class="p">)));</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="o">+</span><span class="s1">&#39;/(.*?)&quot;?\\)&#39;</span><span class="p">),</span><span class="nx">j</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">j</span><span class="o">&gt;</span><span class="nx">k</span><span class="p">;</span><span class="nx">k</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">m</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span><span class="kc">null</span><span class="p">).</span><span class="nx">getPropertyValue</span><span class="p">(</span><span class="s2">&quot;background-image&quot;</span><span class="p">),</span><span class="nx">p</span><span class="o">=</span><span class="nx">m</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">i</span><span class="p">),</span><span class="nx">t</span><span class="o">=</span><span class="nx">f</span><span class="p">[</span><span class="nx">k</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-background-src&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">p</span><span class="p">){</span><span class="kd">var</span> <span class="nx">u</span><span class="o">=</span><span class="nx">l</span><span class="p">(</span><span class="nx">p</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">);</span><span class="nx">u</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(</span><span class="s2">&quot;background&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span><span class="nx">u</span><span class="p">,</span><span class="nx">m</span><span class="p">)}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="kc">null</span><span class="o">!=</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">u</span><span class="o">=</span><span class="nx">l</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span><span class="o">+</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="p">.</span><span class="nx">length</span><span class="o">+</span><span class="mi">1</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">);</span><span class="nx">u</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(</span><span class="s2">&quot;background&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span><span class="nx">u</span><span class="p">,</span><span class="nx">m</span><span class="p">)}}</span><span class="k">for</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">j</span><span class="o">&gt;</span><span class="nx">k</span><span class="p">;</span><span class="nx">k</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">v</span><span class="p">,</span><span class="nx">w</span><span class="p">;</span><span class="nx">w</span><span class="o">=</span><span class="nx">v</span><span class="o">=</span><span class="nx">m</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">w</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">k</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">),</span><span class="nx">attr_datasrc</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">k</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">x</span><span class="p">){}</span><span class="k">if</span><span class="p">(</span><span class="kc">null</span><span class="o">==</span><span class="nx">attr_datasrc</span><span class="o">&amp;&amp;</span><span class="nx">w</span><span class="o">&amp;&amp;</span><span class="nx">w</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">?</span><span class="nx">m</span><span class="o">=</span><span class="nx">w</span><span class="o">:</span><span class="nx">attr_datasrc</span><span class="o">&amp;&amp;</span><span class="nx">attr_datasrc</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">m</span><span class="o">=</span><span class="nx">attr_datasrc</span><span class="p">),</span><span class="nx">m</span><span class="p">){</span><span class="kd">var</span> <span class="nx">u</span><span class="o">=</span><span class="nx">l</span><span class="p">(</span><span class="nx">m</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">m</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span><span class="o">+</span><span class="nx">c</span><span class="p">.</span><span class="nx">domain</span><span class="p">.</span><span class="nx">length</span><span class="o">+</span><span class="mi">1</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">);</span><span class="nx">u</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">fluid</span><span class="o">?</span><span class="nx">h</span><span class="p">(</span><span class="s2">&quot;fluid&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span><span class="nx">u</span><span class="p">,</span><span class="nx">m</span><span class="p">)</span><span class="o">:</span><span class="nx">h</span><span class="p">(</span><span class="s2">&quot;image&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span><span class="nx">u</span><span class="p">,</span><span class="nx">m</span><span class="p">))}}</span><span class="k">return</span> <span class="nx">a</span><span class="p">},</span><span class="nx">m</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;orientationchange&quot;</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">))</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onresize&quot;</span><span class="p">,</span><span class="nx">k</span><span class="p">),</span><span class="nx">s</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">run</span><span class="p">({}),</span><span class="s2">&quot;object&quot;</span><span class="o">==</span><span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Turbolinks</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;page:change&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">a</span><span class="p">.</span><span class="nx">run</span><span class="p">({})})}),</span><span class="s2">&quot;function&quot;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">([],</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">a</span><span class="p">}),</span><span class="kd">function</span><span class="p">(){</span><span class="kd">function</span> <span class="nx">a</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">message</span><span class="o">=</span><span class="nx">a</span><span class="p">}</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="s2">&quot;undefined&quot;</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">exports</span><span class="o">?</span><span class="nx">exports</span><span class="o">:</span><span class="k">this</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;</span><span class="p">;</span><span class="nx">a</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="nb">Error</span><span class="p">(),</span><span class="nx">a</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="s2">&quot;InvalidCharacterError&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">btoa</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">btoa</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">b</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="o">|</span><span class="nx">f</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="s2">&quot;=&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">%</span><span class="mi">1</span><span class="p">);</span><span class="nx">h</span><span class="o">+=</span><span class="nx">g</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">63</span><span class="o">&amp;</span><span class="nx">d</span><span class="o">&gt;&gt;</span><span class="mi">8</span><span class="o">-</span><span class="mi">8</span><span class="o">*</span><span class="p">(</span><span class="nx">f</span><span class="o">%</span><span class="mi">1</span><span class="p">))){</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">f</span><span class="o">+=</span><span class="p">.</span><span class="mi">75</span><span class="p">),</span><span class="nx">e</span><span class="o">&gt;</span><span class="mi">255</span><span class="p">)</span><span class="k">throw</span> <span class="k">new</span> <span class="nx">a</span><span class="p">(</span><span class="s2">&quot;&#39;btoa&#39; failed&quot;</span><span class="p">);</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="o">&lt;&lt;</span><span class="mi">8</span><span class="o">|</span><span class="nx">e</span><span class="p">}</span><span class="k">return</span> <span class="nx">h</span><span class="p">}),</span><span class="nx">b</span><span class="p">.</span><span class="nx">atob</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">atob</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/=+$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="mi">1</span><span class="o">==</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">%</span><span class="mi">4</span><span class="p">)</span><span class="k">throw</span> <span class="k">new</span> <span class="nx">a</span><span class="p">(</span><span class="s2">&quot;&#39;atob&#39; failed&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">g</span><span class="o">++</span><span class="p">);</span><span class="o">~</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="o">%</span><span class="mi">4</span><span class="o">?</span><span class="mi">64</span><span class="o">*</span><span class="nx">d</span><span class="o">+</span><span class="nx">e</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="o">++%</span><span class="mi">4</span><span class="p">)</span><span class="o">?</span><span class="nx">h</span><span class="o">+=</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">255</span><span class="o">&amp;</span><span class="nx">d</span><span class="o">&gt;&gt;</span><span class="p">(</span><span class="mi">6</span><span class="o">&amp;-</span><span class="mi">2</span><span class="o">*</span><span class="nx">f</span><span class="p">))</span><span class="o">:</span><span class="mi">0</span><span class="p">)</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="k">return</span> <span class="nx">h</span><span class="p">})}(),</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="o">||</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nb">document</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="p">[];</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">)</span><span class="k">return</span> <span class="nx">e</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">evaluate</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;.//*[contains(concat(&#39; &#39;, @class, &#39; &#39;), &#39; &quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot; &#39;)]&quot;</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">evaluate</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="kc">null</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="kc">null</span><span class="p">);</span><span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">iterateNext</span><span class="p">();)</span><span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="k">else</span> <span class="k">for</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;*&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|\\s)&quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;(\\s|$)&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">d</span><span class="o">++</span><span class="p">)</span><span class="nx">c</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">className</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">]);</span><span class="k">return</span> <span class="nx">f</span><span class="p">}),</span><span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="o">||</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">getPropertyValue</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="sr">/(\-([a-z]){1})/g</span><span class="p">;</span><span class="k">return</span><span class="s2">&quot;float&quot;</span><span class="o">==</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="s2">&quot;styleFloat&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">toUpperCase</span><span class="p">()})),</span><span class="nx">a</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">:</span><span class="kc">null</span><span class="p">},</span><span class="k">this</span><span class="p">}),</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="o">||</span><span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">__proto__</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span> <span class="k">in</span> <span class="k">this</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">a</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span><span class="o">||</span><span class="nx">b</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">!==</span><span class="k">this</span><span class="p">[</span><span class="nx">a</span><span class="p">])})}(</span><span class="nx">Holder</span><span class="p">,</span><span class="nb">window</span><span class="p">),</span><span class="cm">/*!</span></div><div class='line' id='LC11'><span class="cm"> * JavaScript for Bootstrap&#39;s docs (http://getbootstrap.com)</span></div><div class='line' id='LC12'><span class="cm"> * Copyright 2011-2014 Twitter, Inc.</span></div><div class='line' id='LC13'><span class="cm"> * Licensed under the Creative Commons Attribution 3.0 Unported License. For</span></div><div class='line' id='LC14'><span class="cm"> * details, see http://creativecommons.org/licenses/by/3.0/.</span></div><div class='line' id='LC15'><span class="cm"> */</span></div><div class='line' id='LC16'><span class="o">!</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="nb">window</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">scrollspy</span><span class="p">({</span><span class="nx">target</span><span class="o">:</span><span class="s2">&quot;.bs-docs-sidebar&quot;</span><span class="p">}),</span><span class="nx">b</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">c</span><span class="p">.</span><span class="nx">scrollspy</span><span class="p">(</span><span class="s2">&quot;refresh&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-container [href=#]&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()}),</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-sidebar&quot;</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">affix</span><span class="p">({</span><span class="nx">offset</span><span class="o">:</span><span class="p">{</span><span class="nx">top</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;margin-top&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-nav&quot;</span><span class="p">).</span><span class="nx">height</span><span class="p">();</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">top</span><span class="o">=</span><span class="nx">c</span><span class="o">-</span><span class="nx">e</span><span class="o">-</span><span class="nx">d</span><span class="p">},</span><span class="nx">bottom</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">bottom</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-footer&quot;</span><span class="p">).</span><span class="nx">outerHeight</span><span class="p">(</span><span class="o">!</span><span class="mi">0</span><span class="p">)}}})},</span><span class="mi">100</span><span class="p">),</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-top&quot;</span><span class="p">).</span><span class="nx">affix</span><span class="p">()},</span><span class="mi">100</span><span class="p">),</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;#bs-theme-stylesheet&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-theme-toggle&quot;</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">);</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="mi">0</span><span class="o">!==</span><span class="nx">a</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;data&quot;</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="s2">&quot;Preview theme&quot;</span><span class="p">))</span><span class="o">:</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;data-href&quot;</span><span class="p">)),</span><span class="nx">c</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="s2">&quot;Disable theme preview&quot;</span><span class="p">))})}(),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.tooltip-demo&quot;</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">({</span><span class="nx">selector</span><span class="o">:</span><span class="s1">&#39;[data-toggle=&quot;tooltip&quot;]&#39;</span><span class="p">,</span><span class="nx">container</span><span class="o">:</span><span class="s2">&quot;body&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.tooltip-test&quot;</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">(),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.popover-test&quot;</span><span class="p">).</span><span class="nx">popover</span><span class="p">(),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-navbar&quot;</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">({</span><span class="nx">selector</span><span class="o">:</span><span class="s1">&#39;a[data-toggle=&quot;tooltip&quot;]&#39;</span><span class="p">,</span><span class="nx">container</span><span class="o">:</span><span class="s2">&quot;.bs-docs-navbar .nav&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-popover&quot;</span><span class="p">).</span><span class="nx">popover</span><span class="p">(),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;.bs-docs-popover-dismiss&quot;</span><span class="p">).</span><span class="nx">popover</span><span class="p">({</span><span class="nx">trigger</span><span class="o">:</span><span class="s2">&quot;focus&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;#loading-example-btn&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">(</span><span class="k">this</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">button</span><span class="p">(</span><span class="s2">&quot;loading&quot;</span><span class="p">),</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">b</span><span class="p">.</span><span class="nx">button</span><span class="p">(</span><span class="s2">&quot;reset&quot;</span><span class="p">)},</span><span class="mi">3</span><span class="nx">e3</span><span class="p">)})})}(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.08198s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5bef6dacd990ce272ec009917ceea0b9d96f84b7.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-fa90dd0cdeb07e1ddb21c8d4a5b5ba23e6c0ca0b.js" type="text/javascript"></script>
      
      
  </body>
</html>

