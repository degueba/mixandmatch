
<div class="container">

      <div class="rex-mix-and-match">

        <div class="row">

            <div class="col-md-8 col-xs-12">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#top" data-toggle="tab" aria-expanded="true">
                    <h3>Top</h3>
                    <p>Escolha a parte de cima</p>
                  </a>
                </li>
              </ul>
              <div id="rex-mm-list" class="tab-content">
                  <div class="tab-pane fade active in" id="top">

                      <div class="col-sm-3 col-xs-12">
                          <div class="rex-mix-and-match-filters">
                              <h6>Selecione abaixo</h6>
                              <div class="row">

                                <div class="rex-mix-and-match-filters-box-wrap">

                                  <div class="rex-mix-and-match-filters-box col-sm-12 col-xs-4">
                                    <div class="panel panel-default">
                                      <div class="panel-body">
                                        Bojo
                                      </div>
                                    </div>
                                    <div class="popover fade right">
                                      <div class="arrow"></div>
                                      <div class="popover-content">
                                          <a href="" class="rex-mix-and-match-filters-box-link">
                                            <i class="icon-home"></i>
                                            <span>Com bojo</span>
                                          </a> 
                                          <a href="" class="rex-mix-and-match-filters-box-link">
                                            <i class="icon-home"></i>
                                            <span>Tradicional</span>
                                          </a> 
                                          <a href="" class="rex-mix-and-match-filters-box-link">
                                            <i class="icon-home"></i>
                                            <span>bojo</span>
                                          </a>                                 
                                      </div>
                                    </div>
                                  </div> <!-- rex-mix-and-match-filters-box -->

                                </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-sm-9 col-xs-12">
                        <div class="rex-mix-and-match-shelf">
                          <div class="rex-shelf">
                            <ul>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                              <?php include './_modules/molecules/_shelf-item.php'; ?>
                            </ul>
                          </div>
                        </div>
                      </div>

                    
                  </div><!-- top -->
                  <div class="tab-pane fade" id="bottom">
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                  </div><!-- bottom -->
              </div>
            </div>


            <div class="col-md-2  col-xs-6">
                <div class="rex-mix-and-match-box-wrapper">
                  <div class="rex-mix-and-match-box">
                      <div class="panel panel-default">
                        <div class="panel-heading">Sua combinação</div>
                      </div>



                      <div class="rex-mix-and-match-box-content">

                        <div class="rex-mix-and-match-shelf-prods">
                          <div class="rex-box-banner">
                            <img src="http://placehold.it/250x330" width="250" height="330" alt="41367_ESTAMPA_1" id="" class="mCS_img_loaded">
                          </div>
                          <div class="rex-box-banner">
                            <img src="http://placehold.it/250x330" width="250" height="330" alt="41367_ESTAMPA_1" id="" class="mCS_img_loaded">
                          </div>
                        </div>

                        <a href="#" class="btn btn-primary btn-block">Incluir conjunto</a>

                      </div>
                  </div>
                </div>
            </div>

            <div class="col-md-2  col-xs-6">
                <div class="rex-mix-and-match-box-wrapper">
                  <div class="rex-mix-and-match-box">
                      <div class="panel panel-default">
                        <div class="panel-heading">Resumo da compra</div>
                      </div>

                      <div class="rex-mix-and-match-shelf-buy">
                          
                          <div class="rex-mix-and-match-shelf-item">
                                    <a class="rex-mix-and-match-shelf-item-remove"><i class="icon-cog"></i></a>

                                    <div class="rex-box-banner">
                                       <img src="http://placehold.it/55x55" width="55" height="55"/>                
                                    </div>
                                    <div class="rex-mix-and-match-shelf-item-info">
                                      <p>SUTIÃ BIQUÍNI TOP COM LAÇO BQ016L PRETOM</p>
                                      <div class="rex-product-price">
                                        <span class="best-price">Por <strong>R$ 549,90</strong></span>
                                        <span class="installment">
                                            <strong class="number-installment">6x</strong> 
                                            de
                                            <strong class="value-installment">R$ 91,65</strong>
                                        </span>
                                      </div>
                                    </div>
                          </div>
                      </div>

                      <div class="rex-mix-and-match-box-content">
                          <a href="#" class="btn btn-primary btn-block">Comprar conjunto</a>
                      </div>
                  </div>
                </div>
            </div>

        </div>

      </div><!-- .rex-mix-and-match -->

</div>

<script src="//cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.concat.min.js"></script>



<script type="text/javascript">
  (function($){
        $(window).on("load",function(){
            $(".rex-mix-and-match-shelf, .rex-mix-and-match-shelf-buy").mCustomScrollbar();
        });
    })(jQuery);
</script>