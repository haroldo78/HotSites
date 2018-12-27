<?php defined( '_JEXEC' ) or die; 

// variables
$app = JFactory::getApplication();
$doc = JFactory::getDocument(); 
$menu = $app->getMenu();
$active = $app->getMenu()->getActive();
$params = $app->getParams();
$pageclass = $params->get('pageclass_sfx');
$tpath = $this->baseurl.'/templates/'.$this->template;

// generator tag
$this->setGenerator(null);

// template css
$doc->addStyleSheet($tpath.'/css/template.css.php');

?><!doctype html>

<html lang="<?php echo $this->language; ?>">

<head>
  <jdoc:include type="head" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <link rel="apple-touch-icon-precomposed" href="<?php echo $tpath; ?>/images/apple-touch-icon-57x57-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo $tpath; ?>/images/apple-touch-icon-72x72-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo $tpath; ?>/images/apple-touch-icon-114x114-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo $tpath; ?>/images/apple-touch-icon-144x144-precomposed.png">
 <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css'>
 <meta name="viewport" content="width=device-width, user-scalable=yes">
</head>
  
<body class="<?php echo (($menu->getActive() == $menu->getDefault()) ? ('front') : ('site')).' '.$active->alias.' '.$pageclass; ?>">
   <header class="topo default" >
        <div class="center">
          <div class="logo default">
          </div>
          <nav class="menu default">
            <jdoc:include type="modules" name="menupricipal" /> 
            <div class="parcelas">
            </div>
          </nav>
        </div>
    </header>
    <section class="banners" id="top">
         <jdoc:include type="modules" name="banners" style="xhml" />
     </section>
     <section class="investimento">
          <div id="insvestimento"></div>
          <jdoc:include type="component" />
    </section>
    <footer class="rodape"> 
       <div class="center">
         <jdoc:include type="modules" name="logorodape" />
       </div>
    </footer>
    <div id="contato" class="contato">
        <jdoc:include type="modules" name="faleconosco" style="xhtml" />
        <a href="#" class="close contato">Fechar [X]</a>
    </div>
    <div class="go-up default"><a href="#top" rel ="" class="anchorLink">topo</a></div>
    <jdoc:include type="modules" name="debug" />

     <script src="<?php echo $tpath; ?>/js/topo.js"></script>
      <script type="text/javascript" language="javascript" src="http://www.orbitando.com.br/clientes/wstc/js/jquery.anchor.js" ></script>
      <script src="<?php echo $tpath; ?>/js/terrassofrancisco.js"></script>
      <script src="<?php echo $tpath; ?>/js/jquery.zoom.js"></script>
</body>

</html>