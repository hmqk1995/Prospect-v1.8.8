<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="<?php echo plugin_dir_url( __FILE__ ) . 'dist/prospect-admin.css' ?>">
</head>
<body>
  <div id="app"></div>
  <script>var _nonce = '<?php echo wp_create_nonce( "wp_rest" ); ?>';</script>
  <script src="<?php echo plugin_dir_url( __FILE__ ) . 'public/vue.js' ?>"></script>
  <script src="<?php echo plugin_dir_url( __FILE__ ) . 'dist/prospect-admin.umd.js' ?>"></script>
</body>
</html>