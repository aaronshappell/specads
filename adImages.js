var adImages = ["https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.H2nYAOOtFcSTv9mEOLJRBwHaJa%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fkrissy9090.files.wordpress.com%2F2011%2F09%2Ftaylor_swift_covergirl_ad_rev.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic3.businessinsider.com%2Fimage%2F52bde4ca6bb3f72f23ce32ee-960%2Fabsolut_perfection.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcommonwealthmagazine.org%2Fwp-content%2Fuploads%2F2017%2F06%2FAlcohol-ads.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic1.refinery29.com%2Fbin%2Fentry%2Fdac%2Fx%2F242063%2Femma-stone-revlon-ads.jpg&f=1", "https://proxy.duckduckgo.com/iur/?f=1&image_host=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F9a%2Fe4%2Fda%2F9ae4da24c91b8a9a24737433ef26d9da.jpg&u=https://i.pinimg.com/736x/9a/e4/da/9ae4da24c91b8a9a24737433ef26d9da.jpg", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sn2FtBtp3doIg1ghHzh6iQHaGL%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fspeckycdn-sdm.netdna-ssl.com%2Fwp-content%2Fuploads%2F2012%2F01%2Ftypographyprintads42.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-BVtppyPSGy8%2FVhdtBItlhnI%2FAAAAAAAAABU%2FILu0NLwSXUs%2Fs1600%2Fnike%252Badvertisement.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Zcu5BVYAMSlvfEn18iH44wHaFV%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y7d_54eaaclM95qUNpTeDgHaKB%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pW7ZQUn4bXSY9EJkUZ__bQHaKe%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sarojads.com%2Fimages%2Fpfolio%2F3a.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-_ABBGvMwiVU%2FVy7hkNdEXmI%2FAAAAAAAAAFs%2FmsJ_oRQk5eguXGTHvuzRf65AgZlJhSQWgCK4B%2Fs1600%2Fadvertisement-copy.gif&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn5.f-cdn.com%2Fcontestentries%2F96315%2F10497915%2F53f2b485b455c_thumb900.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fayushmaandesigns.com%2Fwp-content%2Fuploads%2F2014%2F10%2FPolki-new-half-page-1.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.F9gtV_QBlPW0-KrOt8Jd9wHaKm%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.falibo.com%2Fwp-content%2Fuploads%2F2013%2F09%2Fadvertisement_poster.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vz5_hR2Rl1NaEzN1MX4fOgHaKe%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iHWj_qoOHjp6qjcco0dqMQHaJ_%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flonglivetheking95sven.files.wordpress.com%2F2012%2F03%2Fadidas-advertisement-poster-sven2.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BBt7E5aWTbhcK9FPg36RngHaEo%26pid%3D15.1&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.slidesharecdn.com%2Fgroup4presentation-140321212704-phpapp02%2F95%2Fadvertisement-palmolive-3-638.jpg%3Fcb%3D1395438121&f=1", "https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fbrandonk94.files.wordpress.com%2F2013%2F02%2Fgatorade-ad.jpg&u=https://brandonk94.files.wordpress.com/2013/02/gatorade-ad.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/disp/adfbe24203741.563053e376666.jpg", "https://midlifemakeoverblog.files.wordpress.com/2012/07/asics11.jpg", "http://pre00.deviantart.net/c396/th/pre/i/2012/342/8/2/hershey__s_billboard_advertisement_by_consine-d3d7a3o.jpg", "http://educatorsresource.in/wp-content/uploads/2015/10/School-advertisement-Custome-Public-School.jpg", "https://i.ytimg.com/vi/IRiFZFTZME0/maxresdefault.jpg", "http://www.theglimpse.com/wp-content/uploads/2013/11/Starbucks-coffee.jpg", "https://files2.coloribus.com/files/adsarchive/part_634/6349255/file/dre-coffee-small-57830.jpg", "https://cdn.fstoppers.com/styles/full/s3/photos/103785/03/17/614b5c43ff19d6cb0df87f5f94c06734.jpg", "https://i.pinimg.com/736x/c6/6f/7f/c66f7f70ebce1280471cb05dab14d8a7--advertising-ideas-advertising-design.jpg", "http://img09.deviantart.net/ff8e/i/2008/337/f/a/dibl_bank_health_card_ad_op2_by_creavity.jpg", "https://files2.coloribus.com/files/adsarchive/part_124/1249355/file/irish-pub-credit-card-small-15864.jpg", "http://www.leightons.co.uk/wp-content/uploads/2015/03/LINDBERG-1239-94-c.AD78-man-Acetanium.jpg", "https://s-media-cache-ak0.pinimg.com/564x/37/d0/5b/37d05b7cd1d643f02ded0e22fa9982d8.jpg", "https://www.manchesterdigital.com/sites/default/files/AERO_MEXICO_Press.jpg", "http://postermywall.com.s3.amazonaws.com/posterpreviews/travel-agency-book-cruise-trip-flight-discount-ad-vacation-poster-template-f27d2fca1b7775f37ffccb216fa385cc_screen.jpg?ts=1455927820", "https://s-media-cache-ak0.pinimg.com/236x/b7/51/f3/b751f3b22be06ed1da68f5ec23fb4a49.jpg", "https://s-media-cache-ak0.pinimg.com/564x/a2/e9/85/a2e985f3ee1b6c5d63afd3f2b4c6a7f8.jpg", "http://cdn.potatopro.com/cdn/farfuture/7CGHxEU-DbzZLXCVuPLCT0_HN-QwQFRSJ4Ck4rs5rdc/mtime:1386297109/sites/default/files/field/image/controversial_ad_PCRM.png", "http://1.bp.blogspot.com/__XCWUd8FFjQ/TMlkwe2gDxI/AAAAAAAALno/ZTdx2PXZfGo/s1600/SuicideBrazil1.jpg", "https://hannahkranjc.files.wordpress.com/2015/08/heiniken_headshot_high_res.jpg"];

var darkAdImages = ["http://akns-images.eonline.com/eol_images/Entire_Site/2015414/rs_1024x663-150514071726-1024.Rihanna-Dior-J6R-51415.jpg", "http://www.pbs.org/wgbh/nova/next/wp-content/uploads/2016/04/cosmic-dark-ages.jpg", "http://2.bp.blogspot.com/-HAjVelyUCow/VR9XCdCx_ZI/AAAAAAAAKj0/QBdzQxFCm4A/s1600/DarkMatterDarkEnergy-ANIMATION.gif", "http://wallpapercave.com/wp/j201aWP.jpg", "http://www.keyforweb.it/wp-content/uploads/2015/09/dark-souls-3.jpg", "http://farm6.staticflickr.com/5093/5546573575_8a5ccf9f85_z.jpg", "https://www.nbc.com/sites/nbcunbc/files/files/images/2015/1/17/150118_2841037_Calvin_Klein_Ads_anvver_1.jpg", "https://pbs.twimg.com/media/Bm13hPyCEAAioKP.jpg", "https://thecreativecrowd.files.wordpress.com/2012/10/minimalist-ads-2.jpg", "https://haydenmcclure.files.wordpress.com/2014/11/mac_contrast.jpg", "https://incandescentcloud.files.wordpress.com/2015/09/16-deep-dark-finished-installation.jpg", "https://c1.staticflickr.com/3/2013/2131788405_e451c9a682.jpg", "https://regmedia.co.uk/2009/06/22/big_brother.jpg?x=1200&y=794", "http://oldmag.net/wp-content/uploads/2013/12/big-brother-is-watching-you-1984-george-orwell.jpg", "https://s-media-cache-ak0.pinimg.com/originals/e0/80/47/e0804762ad2ba5b40af2a8177f797309.jpg", "http://www.sunray22b.net/images/media_hide_truth.gif", "http://www.quotehd.com/imagequotes/authors2/jim-morrison-musician-whoever-controls-the-media-controls-the.jpg", "http://1.bp.blogspot.com/-NMbog6aObLA/TwiT9huAztI/AAAAAAAACgI/lkQstfY_xe8/s1600/advertisement+LG.jpg", "http://th07.deviantart.net/fs70/PRE/f/2013/191/6/3/gloomy_day_by_psiipilehto-d6ct7se.png", "http://www.hecklerspray.com/wp-content/uploads/2010/03/awesome-or-off-putting-gloomy-sunday-the-100-suicide-song.jpg", "http://thewowstyle.com/wp-content/uploads/2015/03/Depression-Quotes.jpg", "http://www.medbroadcast.com/images/socialmedia/google/healthtopics/depression.jpg", "https://randomstuf.files.wordpress.com/2017/06/depression-new-625_625x350_41455702847.jpg?w=625", "http://images.agoramedia.com/EHBlogImages/therese-borchard/2016/04/Depression-Is-Real-1440x810.jpg", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FayCQYCXk2nA%2Fmaxresdefault.jpg&f=1", "http://www.americanbazaaronline.com/wp-content/uploads/2016/01/Depression.jpg", "https://i.kinja-img.com/gawker-media/image/upload/t_original/rzwacletq5m8q7kafuai.png", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.reuters.com%2Fnicholas-wapshott%2Ffiles%2F2014%2F02%2Fcomcost.jpg&f=1", "http://cdn2.mhpbooks.com/2016/02/google.jpg", "http://www.savvyseller.co/wp-content/uploads/2014/11/Amazon.com_Logo.jpg", "http://www.acsfoundation.com.au/assets/img/logos/microsoft_black_6.jpg", "http://www.namethatfont.net/wp-content/uploads/2010/06/facebook-logo.jpg", "http://www.dearliberty.net/wp-content/uploads/2014/06/Break-the-chains-of-tyranny.jpg"];