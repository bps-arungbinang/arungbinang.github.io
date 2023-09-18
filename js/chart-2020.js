// Your CSV data as an array of arrays
var csvData = [
    [129913, 612532.73809524, 129913, 380557],
    [129914, 1412607.1428571, 129914, 380557],
    [129915, 872041.66666667, 129915, 380557],
    [129916, 298642.85714286, 129916, 380557],
    [129917, 548015.87301587, 129917, 380557],
    [129918, 412371.42857143, 129918, 380557],
    [129919, 805869.04761905, 129919, 380557],
    [129920, 891432.53968254, 129920, 380557],
    [129921, 1639257.9365079, 129921, 380557],
    [129922, 481710.31746032, 129922, 380557],
    [129923, 1425452.3809524, 129923, 380557],
    [129924, 489587.3015873, 129924, 380557],
    [129925, 595273.80952381, 129925, 380557],
    [129926, 674603.17460317, 129926, 380557],
    [129927, 768363.0952381, 129927, 380557],
    [129928, 1061467.8571429, 129928, 380557],
    [129929, 549127.97619048, 129929, 380557],
    [129930, 598546.42857143, 129930, 380557],
    [129931, 691214.28571429, 129931, 380557],
    [129932, 316700, 129932, 380557],
    [129933, 616653.33333333, 129933, 380557],
    [129934, 687559.52380952, 129934, 380557],
    [129935, 3537538.6904762, 129935, 380557],
    [129936, 2315442.8571429, 129936, 380557],
    [129937, 418637.61904762, 129937, 380557],
    [129938, 732296.42857143, 129938, 380557],
    [129939, 433029.76190476, 129939, 380557],
    [129940, 464754.76190476, 129940, 380557],
    [129941, 606250, 129941, 380557],
    [129942, 399660.71428571, 129942, 380557],
    [129943, 507766.66666667, 129943, 380557],
    [129944, 651092.26190476, 129944, 380557],
    [129945, 644338.7755102, 129945, 380557],
    [129946, 1274885.7142857, 129946, 380557],
    [129947, 947348.80952381, 129947, 380557],
    [129948, 1063209.5238095, 129948, 380557],
    [129949, 882579.76190476, 129949, 380557],
    [129950, 295664.88095238, 129950, 380557],
    [129951, 708617.14285714, 129951, 380557],
    [129952, 356083.33333333, 129952, 380557],
    [129953, 402214.28571429, 129953, 380557],
    [129954, 432527.38095238, 129954, 380557],
    [129955, 666046.42857143, 129955, 380557],
    [129956, 390300, 129956, 380557],
    [129957, 801042.85714286, 129957, 380557],
    [129958, 469745.23809524, 129958, 380557],
    [129959, 590440.47619048, 129959, 380557],
    [129960, 287078.57142857, 129960, 380557],
    [129961, 529006.42857143, 129961, 380557],
    [129962, 535375, 129962, 380557],
    [129963, 771150.5952381, 129963, 380557],
    [129964, 701645.23809524, 129964, 380557],
    [129965, 1416297.6190476, 129965, 380557],
    [129966, 541912.6984127, 129966, 380557],
    [129967, 1762304.1011905, 129967, 380557],
    [129968, 422017.85714286, 129968, 380557],
    [129969, 1680430.6388889, 129969, 380557],
    [129970, 1321329.3650794, 129970, 380557],
    [129971, 1232773.8095238, 129971, 380557],
    [129972, 427516.80654762, 129972, 380557],
    [129973, 485443.06547619, 129973, 380557],
    [129974, 374401.61904762, 129974, 380557],
    [129975, 3896676.2619048, 129975, 380557],
    [129976, 301950, 129976, 380557],
    [129977, 295458.33333333, 129977, 380557],
    [129978, 707059.22619048, 129978, 380557],
    [129979, 480351.19047619, 129979, 380557],
    [129980, 663386.9047619, 129980, 380557],
    [129981, 841987.5, 129981, 380557],
    [129982, 363217.26190476, 129982, 380557],
    [129983, 521666.66666667, 129983, 380557],
    [129984, 1133095.2380952, 129984, 380557],
    [129985, 459761.9047619, 129985, 380557],
    [129986, 929922.61904762, 129986, 380557],
    [129987, 2725212.8839286, 129987, 380557],
    [129988, 1370168.2619048, 129988, 380557],
    [129989, 1005974.3412698, 129989, 380557],
    [129990, 788169.4375, 129990, 380557],
    [129991, 1807595.4672619, 129991, 380557],
    [129992, 1754967.8571429, 129992, 380557],
    [129993, 1670618.3333333, 129993, 380557],
    [129994, 958152.77777778, 129994, 380557],
    [129995, 501099.32142857, 129995, 380557],
    [129996, 990072.90079365, 129996, 380557],
    [129997, 778232.14285714, 129997, 380557],
    [129998, 1593202.3809524, 129998, 380557],
    [129999, 458330.95238095, 129999, 380557],
    [130000, 633669.04761905, 130000, 380557],
    [130001, 1231103.3333333, 130001, 380557],
    [130002, 1906505.952381, 130002, 380557],
    [130003, 919766.66666667, 130003, 380557],
    [130004, 819049.6031746, 130004, 380557],
    [130005, 316130.05952381, 130005, 380557],
    [130006, 1691710.3174603, 130006, 380557],
    [130007, 706934.52380952, 130007, 380557],
    [130008, 433722.22222222, 130008, 380557],
    [130009, 1494380.952381, 130009, 380557],
    [130010, 884605.15873016, 130010, 380557],
    [130011, 1340060.7142857, 130011, 380557],
    [130012, 748098.21428571, 130012, 380557],
    [130013, 953698.41269841, 130013, 380557],
    [130014, 618257.93650794, 130014, 380557],
    [130015, 543952.38095238, 130015, 380557],
    [130016, 879267.85714286, 130016, 380557],
    [130017, 1377804.7619048, 130017, 380557],
    [130018, 649795.23809524, 130018, 380557],
    [130019, 328876.9047619, 130019, 380557],
    [130020, 418733.33333333, 130020, 380557],
    [130021, 1000779.7619048, 130021, 380557],
    [130022, 411234.22619048, 130022, 380557],
    [130023, 741998.41269841, 130023, 380557],
    [130024, 1217958.3333333, 130024, 380557],
    [130025, 1607590.7738095, 130025, 380557],
    [130026, 907334.52380952, 130026, 380557],
    [130027, 1210535.7142857, 130027, 380557],
    [130028, 428392.85714286, 130028, 380557],
    [130029, 737713.60544218, 130029, 380557],
    [130030, 486421.42857143, 130030, 380557],
    [130031, 578282.73809524, 130031, 380557],
    [130032, 642404.76190476, 130032, 380557],
    [130033, 1153098.2142857, 130033, 380557],
    [130034, 302198.97959184, 130034, 380557],
    [130035, 691797.61904762, 130035, 380557],
    [130036, 751448.41269841, 130036, 380557],
    [130037, 609169.64285714, 130037, 380557],
    [130038, 575430.35714286, 130038, 380557],
    [130039, 708333.33333333, 130039, 380557],
    [130040, 522379.76190476, 130040, 380557],
    // [130041, 41393630.952381, 130041, 380557],
    [130042, 1580519.047619, 130042, 380557],
    [130043, 1008940.4761905, 130043, 380557],
    [130044, 1674904.7619048, 130044, 380557],
    [130045, 548419.04761905, 130045, 380557],
    [130046, 449089.28571429, 130046, 380557],
    [130047, 1612702.3809524, 130047, 380557],
    [130048, 828095.23809524, 130048, 380557],
    [130049, 871970.23809524, 130049, 380557],
    [130050, 609742.55952381, 130050, 380557],
    [130051, 700027.77777778, 130051, 380557],
    [130052, 454214.28571429, 130052, 380557],
    [130053, 1726952.3809524, 130053, 380557],
    [130054, 493009.52380952, 130054, 380557],
    [130055, 1143676.984127, 130055, 380557],
    [130056, 334408.73015873, 130056, 380557],
    [130057, 470627.97619048, 130057, 380557],
    [130058, 432285.71428571, 130058, 380557],
    [130059, 827934.52380952, 130059, 380557],
    [130060, 1144226.1904762, 130060, 380557],
    [130061, 1313574.4047619, 130061, 380557],
    [130062, 891870.63492064, 130062, 380557],
    [130063, 326410.71428571, 130063, 380557],
    [130064, 939803.57142857, 130064, 380557],
    [130065, 676405.95238095, 130065, 380557],
    [130066, 913369.84126984, 130066, 380557],
    [130067, 2210036.9047619, 130067, 380557],
    [130068, 844624.14965986, 130068, 380557],
    [130069, 658920.63492063, 130069, 380557],
    [130070, 1452791.6666667, 130070, 380557],
    [130071, 1892571.4285714, 130071, 380557],
    [130072, 3546511.9047619, 130072, 380557],
    [130073, 1088595.2380952, 130073, 380557],
    [130074, 741678.57142857, 130074, 380557],
    [130075, 309683.33333333, 130075, 380557],
    [130076, 380533.13492063, 130076, 380557],
    [130077, 956763.0952381, 130077, 380557],
    [130078, 1076843.2539683, 130078, 380557],
    [130079, 836446.42857143, 130079, 380557],
    [130080, 836450, 130080, 380557],
    [130081, 624940.47619048, 130081, 380557],
    [130082, 469946.42857143, 130082, 380557],
    [130083, 561226.65873016, 130083, 380557],
    [130084, 712470.23809524, 130084, 380557],
    [130085, 997361.74404762, 130085, 380557],
    [130086, 1273653.968254, 130086, 380557],
    [130087, 430317.14285714, 130087, 380557],
    [130088, 650350.5952381, 130088, 380557],
    [130089, 365265.47619048, 130089, 380557],
    [130090, 1390330.1587302, 130090, 380557],
    [130091, 586246.42857143, 130091, 380557],
    [130092, 1804739.2857143, 130092, 380557],
    [130093, 1978923.8095238, 130093, 380557],
    [130094, 890160.71428571, 130094, 380557],
    [130095, 883770, 130095, 380557],
    [130096, 2953567.4603175, 130096, 380557],
    [130097, 656705.95238095, 130097, 380557],
    [130098, 2354238.0952381, 130098, 380557],
    [130099, 285252.97619048, 130099, 380557],
    [130100, 396176.19047619, 130100, 380557],
    [130101, 410639.88095238, 130101, 380557],
    [130102, 853101.19047619, 130102, 380557],
    [130103, 1704434.5238095, 130103, 380557],
    [130104, 546875, 130104, 380557],
    [130105, 607394.64285714, 130105, 380557],
    [130106, 1276686.5079365, 130106, 380557],
    [130107, 1412545.2380952, 130107, 380557],
    [130108, 576492.6984127, 130108, 380557],
    [130109, 2951636.3095238, 130109, 380557],
    [130110, 1626451.6666667, 130110, 380557],
    [130111, 898680.35714286, 130111, 380557],
    [130112, 1219479.1666667, 130112, 380557],
    [130113, 1245256.547619, 130113, 380557],
    [130114, 1049129.7431973, 130114, 380557],
    [130115, 1310350.2380952, 130115, 380557],
    [130116, 1860872.0238095, 130116, 380557],
    [130117, 739267.85714286, 130117, 380557],
    [130118, 1955586.031746, 130118, 380557],
    [130119, 998936.9047619, 130119, 380557],
    [130120, 1020375.4761905, 130120, 380557],
    [130121, 634127.97619048, 130121, 380557],
    [130122, 1700511.9047619, 130122, 380557],
    [130123, 1092797.6190476, 130123, 380557],
    [130124, 1629373.8095238, 130124, 380557],
    [130125, 567282.14285714, 130125, 380557],
    [130126, 876280.23809524, 130126, 380557],
    [130127, 654149.70238095, 130127, 380557],
    [130128, 703213.24404762, 130128, 380557],
    [130129, 1367769.047619, 130129, 380557],
    [130130, 876000.89285714, 130130, 380557],
    [130131, 1055492.2619048, 130131, 380557],
    [130132, 934513.33333333, 130132, 380557],
    [130133, 667062.5, 130133, 380557],
    [130134, 386386.11111111, 130134, 380557],
    [130135, 376329.85714286, 130135, 380557],
    [130136, 284134.92063492, 130136, 380557],
    [130137, 1659301.5873016, 130137, 380557],
    [130138, 469700, 130138, 380557],
    [130139, 1551396.8253968, 130139, 380557],
    [130140, 951886.9047619, 130140, 380557],
    [130141, 684693.45238095, 130141, 380557],
    [130142, 596773.80952381, 130142, 380557],
    [130143, 946347.61904762, 130143, 380557],
    [130144, 944250, 130144, 380557],
    [130145, 692285.71428571, 130145, 380557],
    [130146, 351211.9047619, 130146, 380557],
    [130147, 798421.03174603, 130147, 380557],
    [130148, 884980.35714286, 130148, 380557],
    [130149, 396141.02040816, 130149, 380557],
    [130150, 449255.95238095, 130150, 380557],
    [130151, 1508520.7619048, 130151, 380557],
    [130152, 883631.54761905, 130152, 380557],
    [130153, 873918.25396825, 130153, 380557],
    [130154, 988077.38095238, 130154, 380557],
    [130155, 2160825.7936508, 130155, 380557],
    [130156, 1264006.9404762, 130156, 380557],
    [130157, 1539026.7857143, 130157, 380557],
    [130158, 578276.19047619, 130158, 380557],
    [130159, 592924.82993197, 130159, 380557],
    [130160, 1423154.7619048, 130160, 380557],
    [130161, 1002036.9047619, 130161, 380557],
    [130162, 1929666.6666667, 130162, 380557],
    [130163, 542866.66666667, 130163, 380557],
    [130164, 867613.49206349, 130164, 380557],
    [130165, 1002880.3571429, 130165, 380557],
    [130166, 945693.45238095, 130166, 380557],
    [130167, 1079886.5079365, 130167, 380557],
    [130168, 694896.72619048, 130168, 380557],
    [130169, 650850, 130169, 380557],
    [130170, 452092.85714286, 130170, 380557],
    [130171, 958142.85714286, 130171, 380557],
    [130172, 932661.42857143, 130172, 380557],
    [130173, 1539080.952381, 130173, 380557],
    [130174, 1539604.7619048, 130174, 380557],
    [130175, 1516848.8095238, 130175, 380557],
    [130176, 1167327.202381, 130176, 380557],
    [130177, 563635.71428571, 130177, 380557],
    [130178, 469854.16666667, 130178, 380557],
    [130179, 2643133.7301587, 130179, 380557],
    [130180, 1055810.7142857, 130180, 380557],
    [130181, 555656.63095238, 130181, 380557],
    [130182, 455442.85714286, 130182, 380557],
    [130183, 406501.60714286, 130183, 380557],
    [130184, 522454.16666667, 130184, 380557],
    [130185, 520612.14285714, 130185, 380557],
    [130186, 1337456.0952381, 130186, 380557],
    [130187, 628154.76190476, 130187, 380557],
    [130188, 386534.52380952, 130188, 380557],
    [130189, 507656.11111111, 130189, 380557],
    [130190, 1556237.202381, 130190, 380557],
    [130191, 836279.76190476, 130191, 380557],
    [130192, 2834636.6071429, 130192, 380557],
    [130193, 1583214.2857143, 130193, 380557],
    [130194, 669678.57142857, 130194, 380557],
    [130195, 869158.73015873, 130195, 380557],
    [130196, 545484.12698413, 130196, 380557],
    [130197, 517693.45238095, 130197, 380557],
    [130198, 505470.95238095, 130198, 380557],
    [130199, 986444.64285714, 130199, 380557],
    [130200, 1628136.9047619, 130200, 380557],
    [130201, 950590.32142857, 130201, 380557],
    [130202, 698369.44642857, 130202, 380557],
    [130203, 623543.25396825, 130203, 380557],
    [130204, 736609.52380952, 130204, 380557],
    [130205, 358285.71428571, 130205, 380557],
    [130206, 342074.4047619, 130206, 380557],
    [130207, 747194.03571429, 130207, 380557],
    [130208, 618335.31746032, 130208, 380557],
    [130209, 1013623.0178571, 130209, 380557],
    [130210, 1230587.8095238, 130210, 380557],
    [130211, 1308473.2142857, 130211, 380557],
    [130212, 1135527.5510204, 130212, 380557],
    [130213, 2892141.8452381, 130213, 380557],
    [130214, 488469.61309524, 130214, 380557],
    [130215, 1598832.2619048, 130215, 380557],
    [130216, 1012489.2857143, 130216, 380557],
    [130217, 469359.78571429, 130217, 380557],
    [130218, 3038188.8888889, 130218, 380557],
    [130219, 1918595.2619048, 130219, 380557],
    [130220, 449185.71428571, 130220, 380557],
    [130221, 571546.19047619, 130221, 380557],
    [130222, 469337.3015873, 130222, 380557],
    [130223, 470749.94047619, 130223, 380557],
    [130224, 675890.47619048, 130224, 380557],
    [130225, 602771.42857143, 130225, 380557],
    [130226, 344144.76190476, 130226, 380557],
    [130227, 428470.23809524, 130227, 380557],
    [130228, 701911.9047619, 130228, 380557],
    [130229, 444048.28571429, 130229, 380557],
    [130230, 701130.95238095, 130230, 380557],
    [130231, 573447.61904762, 130231, 380557],
    [130232, 1686728.5714286, 130232, 380557],
    [130233, 592577.61904762, 130233, 380557],
    [130234, 1132545.2380952, 130234, 380557],
    [130235, 573059.52380952, 130235, 380557],
    [130236, 1149831.7460317, 130236, 380557],
    [130237, 570710.31746032, 130237, 380557],
    [130238, 626351.78571429, 130238, 380557],
    [130239, 487128.57142857, 130239, 380557],
    [130240, 798129.36507937, 130240, 380557],
    [130241, 1136655.0595238, 130241, 380557],
    [130242, 1733754.7619048, 130242, 380557],
    [130243, 991966.07142857, 130243, 380557],
    [130244, 874370.71428571, 130244, 380557],
    [130245, 4473814.2619048, 130245, 380557],
    [130246, 882648.80952381, 130246, 380557],
    [130247, 1931131.2738095, 130247, 380557],
    [130248, 353163.43537415, 130248, 380557],
    [130249, 421298.80952381, 130249, 380557],
    [130250, 2428441.6666667, 130250, 380557],
    [130251, 2516892.2619048, 130251, 380557],
    [130252, 377706.34920635, 130252, 380557],
    [130253, 1438423.8095238, 130253, 380557],
    [130254, 697897.85714286, 130254, 380557],
    [130255, 1087166.6666667, 130255, 380557],
    [130256, 1241383.3333333, 130256, 380557],
    [130257, 1451500, 130257, 380557],
    [130258, 1512029.4642857, 130258, 380557],
    [130259, 2289736.3095238, 130259, 380557],
    [130260, 1118203.968254, 130260, 380557],
    [130261, 944536.03174603, 130261, 380557],
    [130262, 1310800.7936508, 130262, 380557],
    [130263, 552889.88095238, 130263, 380557],
    [130264, 303179.36507937, 130264, 380557],
    [130265, 307419.84126984, 130265, 380557],
    [130266, 788770.23809524, 130266, 380557],
    [130267, 696962.5170068, 130267, 380557],
    [130268, 475434.52380952, 130268, 380557],
    [130269, 630858.73015873, 130269, 380557],
    [130270, 1294954.7619048, 130270, 380557],
    [130271, 597764.88095238, 130271, 380557],
    [130272, 612753.96825397, 130272, 380557],
    [130273, 462476.19047619, 130273, 380557],
    [130274, 530621.42857143, 130274, 380557],
    [130275, 554466.26984127, 130275, 380557],
    [130276, 912148.80952381, 130276, 380557],
    [130277, 1369068.2142857, 130277, 380557],
    [130278, 1423523.0446429, 130278, 380557],
    [130279, 712963.0952381, 130279, 380557],
    [130280, 1712125.2380952, 130280, 380557],
    [130281, 724862.46031746, 130281, 380557],
    [130282, 1145716.9047619, 130282, 380557],
    [130283, 1589380.952381, 130283, 380557],
    [130284, 1763990.4087302, 130284, 380557],
    [130285, 541900.51587302, 130285, 380557],
    [130286, 980217.85714286, 130286, 380557],
    [130287, 1067979.7619048, 130287, 380557],
    [130288, 676134.76190476, 130288, 380557],
    [130289, 1006632.7380952, 130289, 380557],
    [130290, 637325, 130290, 380557],
    [130291, 1318923.8095238, 130291, 380557],
    [130292, 601209.52380952, 130292, 380557],
    [130293, 624698.41269841, 130293, 380557],
    [130294, 520333.33333333, 130294, 380557],
    [130295, 715059.52380952, 130295, 380557],
    [130296, 893668.45238095, 130296, 380557],
    [130297, 990608.33333333, 130297, 380557],
    [130298, 1816050.3174603, 130298, 380557],
    [130299, 375312.85714286, 130299, 380557],
    [130300, 1622692.4603175, 130300, 380557],
    [130301, 706255.23809524, 130301, 380557],
    [130302, 1166690.4761905, 130302, 380557],
    [130303, 1240464.2857143, 130303, 380557],
    [130304, 1717444.047619, 130304, 380557],
    [130305, 1361025, 130305, 380557],
    [130306, 462333.21428571, 130306, 380557],
    [130307, 422246.03174603, 130307, 380557],
    [130308, 589201.19047619, 130308, 380557],
    [130309, 358724.4047619, 130309, 380557],
    [130310, 362747.61904762, 130310, 380557],
    [130311, 451850.53571429, 130311, 380557],
    [130312, 518434.52380952, 130312, 380557],
    [130313, 636559.22619048, 130313, 380557],
    [130314, 361438.0952381, 130314, 380557],
    [130315, 815231.42857143, 130315, 380557],
    [130316, 909327.23809524, 130316, 380557],
    [130317, 646250.95238095, 130317, 380557],
    [130318, 1476187.2619048, 130318, 380557],
    [130319, 1128860.1626984, 130319, 380557],
    [130320, 1237128.8095238, 130320, 380557],
    [130321, 1364525.2103175, 130321, 380557],
    [130322, 1225858.4940476, 130322, 380557],
    [130323, 1501344.0505952, 130323, 380557],
    [130324, 955078.57142857, 130324, 380557],
    [130325, 990045.71428571, 130325, 380557],
    [130326, 1024510.0952381, 130326, 380557],
    [130327, 1249730.8333333, 130327, 380557],
    [130328, 1838695.952381, 130328, 380557],
    [130329, 1415180.7936508, 130329, 380557],
    [130330, 1577929.8809524, 130330, 380557],
    [130331, 1020473.5238095, 130331, 380557],
    [130332, 1307370.7142857, 130332, 380557],
    [130333, 1581620.3809524, 130333, 380557],
    [130334, 1749003.5714286, 130334, 380557],
    [130335, 1480325.3174603, 130335, 380557],
    [130336, 2068669.2857143, 130336, 380557],
    [130337, 1559255.0079365, 130337, 380557],
    [130338, 1303401.1904762, 130338, 380557],
    [130339, 1611728.1577381, 130339, 380557],
    [130340, 1621979.7619048, 130340, 380557],
    [130341, 1127606.0952381, 130341, 380557],
    [130342, 2566238.7232143, 130342, 380557],
    [130343, 2028238.0952381, 130343, 380557],
    [130344, 1887656.6011905, 130344, 380557],
    [130345, 1102536.1111111, 130345, 380557],
    [130346, 707654.36507937, 130346, 380557],
    [130347, 2046666.5079365, 130347, 380557],
    [130348, 311780.95238095, 130348, 380557],
    [130349, 1548151.5873016, 130349, 380557],
    [130350, 4028855.3095238, 130350, 380557],
    [130351, 844842.06349206, 130351, 380557],
    [130352, 1165253.5714286, 130352, 380557],
    [130353, 747118.73809524, 130353, 380557],
    [130354, 2050375, 130354, 380557],
    [130355, 516671.98412698, 130355, 380557],
    [130356, 360803.33333333, 130356, 380557],
    [130357, 400526.78571429, 130357, 380557],
    [130358, 627457.46031746, 130358, 380557],
    [130359, 251191.66666667, 130359, 380557],
    [130360, 567002.61904762, 130360, 380557],
    [130361, 736727.97619048, 130361, 380557],
    [130362, 1519292.8571429, 130362, 380557],
    [130363, 894792.85714286, 130363, 380557],
    [130364, 391914.04761905, 130364, 380557],
    [130365, 497321.42857143, 130365, 380557],
    [130366, 366108.73015873, 130366, 380557],
    [130367, 491250.29761905, 130367, 380557],
    [130368, 318469.92857143, 130368, 380557],
    [130369, 1381382.9142857, 130369, 380557],
    [130370, 469229.76190476, 130370, 380557],
    [130371, 431280.23809524, 130371, 380557],
    [130372, 388562.5, 130372, 380557],
    [130373, 772114.28571429, 130373, 380557],
    [130374, 518113.25396825, 130374, 380557],
    [130375, 394997.61904762, 130375, 380557],
    [130376, 491247.02380952, 130376, 380557],
    [130377, 1333745.9325397, 130377, 380557],
    [130378, 337200, 130378, 380557],
    [130379, 366429.04761905, 130379, 380557],
    [130380, 573294.64285714, 130380, 380557],
    [130381, 932702.38095238, 130381, 380557],
    [130382, 562928.57142857, 130382, 380557],
    [130383, 286009.52380952, 130383, 380557],
    [130384, 2574045.6547619, 130384, 380557],
    [130385, 876180.35714286, 130385, 380557],
    [130386, 2163169.6428571, 130386, 380557],
    [130387, 944442.85714286, 130387, 380557],
    [130388, 569587.3015873, 130388, 380557],
    [130389, 1534948.4126984, 130389, 380557],
    [130390, 1149892.8571429, 130390, 380557],
    [130391, 446925.34013605, 130391, 380557],
    [130392, 1969628.5714286, 130392, 380557],
    [130393, 306301.58730159, 130393, 380557],
    [130394, 829507.32142857, 130394, 380557],
    [130395, 667420.71428571, 130395, 380557],
    [130396, 447376.69642857, 130396, 380557],
    [130397, 804360.79464286, 130397, 380557],
    [130398, 1082948.6934524, 130398, 380557],
    [130399, 1099705.3511905, 130399, 380557],
    [130400, 1160823.0674603, 130400, 380557],
    [130401, 1317853.8952381, 130401, 380557],
    [130402, 661272.21428571, 130402, 380557],
    [130403, 1072666.7571429, 130403, 380557],
    [130404, 1614613.0952381, 130404, 380557],
    [130405, 442865.07936508, 130405, 380557],
    [130406, 262663.26530612, 130406, 380557],
    [130407, 529093.25396825, 130407, 380557],
    [130408, 685517.85714286, 130408, 380557],
    [130409, 564507.93650794, 130409, 380557],
    [130410, 290982.99319728, 130410, 380557],
    [130411, 305373.80952381, 130411, 380557],
    [130412, 490461.9047619, 130412, 380557],
    [130413, 2969214.2857143, 130413, 380557],
    [130414, 374008.63095238, 130414, 380557],
    [130415, 345481.66666667, 130415, 380557],
    [130416, 414067.14285714, 130416, 380557],
    [130417, 1881367.0238095, 130417, 380557],
    [130418, 293831.66666667, 130418, 380557],
    [130419, 632649.6031746, 130419, 380557],
    [130420, 374005.95238095, 130420, 380557],
    [130421, 233672.61904762, 130421, 380557],
    [130422, 631363.0952381, 130422, 380557],
    [130423, 1444538.8888889, 130423, 380557],
    [130424, 457316.54761905, 130424, 380557],
    [130425, 370445.23809524, 130425, 380557],
    [130426, 829664.04761905, 130426, 380557],
    [130427, 1001122.0238095, 130427, 380557],
    [130428, 658592.85714286, 130428, 380557],
    [130429, 474081.9047619, 130429, 380557],
    [130430, 1492348.8095238, 130430, 380557],
    [130431, 1432703.5714286, 130431, 380557],
    [130432, 366564.28571429, 130432, 380557],
    [130433, 1840556.547619, 130433, 380557],
    [130434, 890615.6462585, 130434, 380557],
    [130435, 3178265.4761905, 130435, 380557],
    [130436, 1505769.8412698, 130436, 380557],
    [130437, 1647791.6666667, 130437, 380557],
    [130438, 2318548.4126984, 130438, 380557],
    [130439, 511369.04761905, 130439, 380557],
    [130440, 795644.04761905, 130440, 380557],
    [130441, 1147279.7619048, 130441, 380557],
    [130442, 1492980.952381, 130442, 380557],
    [130443, 2491216.7261905, 130443, 380557],
    [130444, 1160889.2857143, 130444, 380557],
    [130445, 330185.11904762, 130445, 380557],
    [130446, 1052626.6666667, 130446, 380557],
    [130447, 717260.32142857, 130447, 380557],
    [130448, 341475.51020408, 130448, 380557],
    [130449, 566415.47619048, 130449, 380557],
    [130450, 703523.96825397, 130450, 380557],
    [130451, 684014.45238095, 130451, 380557],
    [130452, 356633.92857143, 130452, 380557],
    [130453, 549638.0952381, 130453, 380557],
    [130454, 366247.02380952, 130454, 380557],
    [130455, 499647.22222222, 130455, 380557],
    [130456, 371475, 130456, 380557],
    [130457, 2090380.952381, 130457, 380557],
    [130458, 549794.84126984, 130458, 380557],
    [130459, 427758.73015873, 130459, 380557],
    [130460, 416350, 130460, 380557],
    [130461, 1080582.9365079, 130461, 380557],
    [130462, 768817.46031746, 130462, 380557],
    [130463, 1362988.0952381, 130463, 380557],
    [130464, 551421.42857143, 130464, 380557],
    [130465, 1210873.015873, 130465, 380557],
    [130466, 539603.17460317, 130466, 380557],
    [130467, 321747.02380952, 130467, 380557],
    [130468, 573459.52380952, 130468, 380557],
    [130469, 1373986.5079365, 130469, 380557],
    [130470, 1494288.6904762, 130470, 380557],
    [130471, 1392619.047619, 130471, 380557],
    [130472, 1123019.047619, 130472, 380557],
    [130473, 1343514.8809524, 130473, 380557],
    [130474, 943526.19047619, 130474, 380557],
    [130475, 889773.80952381, 130475, 380557],
    [130476, 1314503.1785714, 130476, 380557],
    [130477, 1209345.2380952, 130477, 380557],
    [130478, 1238833.3333333, 130478, 380557],
    [130479, 1653408.7301587, 130479, 380557],
    [130480, 1146476.1904762, 130480, 380557],
    [130481, 902312.5, 130481, 380557],
    [130482, 785982.14285714, 130482, 380557],
    [130483, 731744.84126984, 130483, 380557],
    [130484, 1201904.7619048, 130484, 380557],
    [130485, 1207809.5238095, 130485, 380557],
    [130486, 1134150, 130486, 380557],
    [130487, 950716.07142857, 130487, 380557],
    [130488, 476241.07142857, 130488, 380557],
    [130489, 688817.46031746, 130489, 380557],
    [130490, 1331404.7619048, 130490, 380557],
    [130491, 299824.82993197, 130491, 380557],
    [130492, 329801.19047619, 130492, 380557],
    [130493, 330323.41269841, 130493, 380557],
    [130494, 1378336.9047619, 130494, 380557],
    [130495, 705738.0952381, 130495, 380557],
    [130496, 1315923.8095238, 130496, 380557],
    [130497, 443987.61904762, 130497, 380557],
    [130498, 1066048.6309524, 130498, 380557],
    [130499, 847317.85714286, 130499, 380557],
    [130500, 1257298.2142857, 130500, 380557],
    [130501, 2196071.4285714, 130501, 380557],
    [130502, 1562379.7619048, 130502, 380557],
    [130503, 1054368.6507937, 130503, 380557],
    [130504, 731462.8968254, 130504, 380557],
    [130505, 877253.86904762, 130505, 380557],
    [130506, 1030690.4761905, 130506, 380557],
    [130507, 641763.0952381, 130507, 380557],
    [130508, 346407.53968254, 130508, 380557],
    [130509, 2953269.047619, 130509, 380557],
    [130510, 1367473.015873, 130510, 380557],
    [130511, 468316.66666667, 130511, 380557],
    [130512, 902034.52380952, 130512, 380557],
    [130513, 516535.71428571, 130513, 380557],
    [130514, 664363.0952381, 130514, 380557],
    [130515, 790954.76190476, 130515, 380557],
    [130516, 1300773.8095238, 130516, 380557],
    [130517, 1319894.6031746, 130517, 380557],
    [130518, 685227.97619048, 130518, 380557],
    [130519, 755709.52380952, 130519, 380557],
    [130520, 887809.52380952, 130520, 380557],
    [130521, 1678244.047619, 130521, 380557],
    [130522, 1187175.5952381, 130522, 380557],
    [130523, 604107.14285714, 130523, 380557],
    [130524, 1482175, 130524, 380557],
    [130525, 987320.95238095, 130525, 380557],
    [130526, 549953.96825397, 130526, 380557],
    [130527, 622935.23809524, 130527, 380557],
    [130528, 1403288.0952381, 130528, 380557],
    [130529, 1056336.3095238, 130529, 380557],
    [130530, 558381.68253968, 130530, 380557],
    [130531, 574019.04761905, 130531, 380557],
    [130532, 881780.95238095, 130532, 380557],
    [130533, 2644589.2857143, 130533, 380557],
    [130534, 1085130.952381, 130534, 380557],
    [130535, 1427904.7619048, 130535, 380557],
    [130536, 359623.01587302, 130536, 380557],
    [130537, 678833.33333333, 130537, 380557],
    [130538, 2356293.8095238, 130538, 380557],
    [130539, 1251636.3492063, 130539, 380557],
    [130540, 474105.95238095, 130540, 380557],
    [130541, 1530022.6190476, 130541, 380557],
    [130542, 878419.76190476, 130542, 380557],
    [130543, 1134971.4285714, 130543, 380557],
    [130544, 987402.97619048, 130544, 380557],
    [130545, 1371663.9285714, 130545, 380557],
    [130546, 1236016.2698413, 130546, 380557],
    [130547, 579742.06349206, 130547, 380557],
    [130548, 645736.19047619, 130548, 380557],
    [130549, 753750.79365079, 130549, 380557],
    [130550, 803369.04761905, 130550, 380557],
    [130551, 595743.75, 130551, 380557],
    [130552, 664241.66666667, 130552, 380557],
    [130553, 573447.02380952, 130553, 380557],
    [130554, 424856.8452381, 130554, 380557],
    [130555, 825890.87301587, 130555, 380557],
    [130556, 1085814.2857143, 130556, 380557],
    [130557, 330581.34920635, 130557, 380557],
    [130558, 1471613.5714286, 130558, 380557],
    [130559, 1646835.7142857, 130559, 380557],
    [130560, 647476.19047619, 130560, 380557],
    [130561, 1010900, 130561, 380557],
    [130562, 792702.38095238, 130562, 380557],
    [130563, 1133886.9047619, 130563, 380557],
    [130564, 1224297.6190476, 130564, 380557],
    [130565, 739928.57142857, 130565, 380557],
    [130566, 2247845.2380952, 130566, 380557],
    [130567, 1896035.7142857, 130567, 380557],
    [130568, 529452.38095238, 130568, 380557],
    [130569, 1256000.3095238, 130569, 380557],
    [130570, 409761.9047619, 130570, 380557],
    [130571, 1536263.4920635, 130571, 380557],
    [130572, 1623203.3333333, 130572, 380557],
    [130573, 1376577.3809524, 130573, 380557],
    [130574, 1515083.3333333, 130574, 380557],
    [130575, 1504797.6190476, 130575, 380557],
    [130576, 436008.92857143, 130576, 380557],
    [130577, 1005317.4603175, 130577, 380557],
    [130578, 1156540.4761905, 130578, 380557],
    [130579, 1217815.4761905, 130579, 380557],
    [130580, 603276.78571429, 130580, 380557],
    [130581, 1221220.2380952, 130581, 380557],
    [130582, 581580.35714286, 130582, 380557],
    [130583, 410988.0952381, 130583, 380557],
    [130584, 3003452.3809524, 130584, 380557],
    [130585, 658234.12698413, 130585, 380557],
    [130586, 1012654.7619048, 130586, 380557],
    [130587, 562492.85714286, 130587, 380557],
    [130588, 296158.73015873, 130588, 380557],
    [130589, 471159.22619048, 130589, 380557],
    [130590, 246434.52380952, 130590, 380557],
    [130591, 1526482.1428571, 130591, 380557],
    [130592, 1665749.8928571, 130592, 380557],
    [130593, 686578.86904762, 130593, 380557],
    [130594, 675106.57539683, 130594, 380557],
    [130595, 1120120.9702381, 130595, 380557],
    [130596, 1418572.4285714, 130596, 380557],
    [130597, 1939027.7777778, 130597, 380557],
    [130598, 818778.57142857, 130598, 380557],
    [130599, 856535.71428571, 130599, 380557],
    [130600, 1316412.6984127, 130600, 380557],
    [130601, 1158868.2539683, 130601, 380557],
    [130602, 460626.98412698, 130602, 380557],
    [130603, 353454.16666667, 130603, 380557],
    [130604, 546400.79365079, 130604, 380557],
    [130605, 832797.38095238, 130605, 380557],
    [130606, 550993.65079365, 130606, 380557],
    [130607, 606876.78571429, 130607, 380557],
    [130608, 332629.76190476, 130608, 380557],
    [130609, 337689.52380952, 130609, 380557],
    [130610, 557088.0952381, 130610, 380557],
    [130611, 309105.55555556, 130611, 380557],
    [130612, 1615687.3015873, 130612, 380557],
    [130613, 2560555.952381, 130613, 380557],
    [130614, 327652.77777778, 130614, 380557],
    [130615, 590684.52380952, 130615, 380557],
    [130616, 411032.73809524, 130616, 380557],
    [130617, 2815811.9047619, 130617, 380557],
    [130618, 1581285.7142857, 130618, 380557],
    [130619, 561964.28571429, 130619, 380557],
    [130620, 528379.76190476, 130620, 380557],
    [130621, 2640115.8730159, 130621, 380557],
    [130622, 438394.24603175, 130622, 380557],
    [130623, 362029.52380952, 130623, 380557],
    [130624, 613753.66666667, 130624, 380557],
    [130625, 328879.24285714, 130625, 380557],
    [130626, 512347.55102041, 130626, 380557],
    [130627, 1093284.3571429, 130627, 380557],
    [130628, 345450.95238095, 130628, 380557],
    [130629, 1237194.4444444, 130629, 380557],
    [130630, 1008104.7619048, 130630, 380557],
    [130631, 526050.79365079, 130631, 380557],
    [130632, 711280.95238095, 130632, 380557],
    [130633, 1135492.0634921, 130633, 380557],
    [130634, 835363.69047619, 130634, 380557],
    [130635, 1452083.3333333, 130635, 380557],
    [130636, 1127872.0238095, 130636, 380557],
    [130637, 711369.04761905, 130637, 380557],
    [130638, 508402.38095238, 130638, 380557],
    [130639, 1064121.1904762, 130639, 380557],
    [130640, 1615142.8571429, 130640, 380557],
    [130641, 1289865.8730159, 130641, 380557],
    [130642, 790833.33333333, 130642, 380557],
    [130643, 393973.1292517, 130643, 380557],
    [130644, 407107.14285714, 130644, 380557],
    [130645, 648126.78571429, 130645, 380557],
    [130646, 1902440.4761905, 130646, 380557],
    [130647, 439111.42857143, 130647, 380557],
    [130648, 1477311.5873016, 130648, 380557],
    [130649, 597892.85714286, 130649, 380557],
    [130650, 1248378.968254, 130650, 380557],
    [130651, 833711.9047619, 130651, 380557],
    [130652, 1473252.3809524, 130652, 380557],
    [130653, 514850.88095238, 130653, 380557],
    [130654, 1507771.1904762, 130654, 380557],
    [130655, 702110.79365079, 130655, 380557],
    [130656, 1372369.047619, 130656, 380557],
    [130657, 1010892.8571429, 130657, 380557],
    [130658, 478417.06349206, 130658, 380557],
    [130659, 1613053.1746032, 130659, 380557],
    [130660, 333233.92857143, 130660, 380557],
    [130661, 409595.23809524, 130661, 380557],
    [130662, 908870.95238095, 130662, 380557],
    [130663, 499589.28571429, 130663, 380557],
    [130664, 2344021.4285714, 130664, 380557],
    [130665, 1474027.3809524, 130665, 380557],
    [130666, 1148164.2857143, 130666, 380557],
    [130667, 339757.61904762, 130667, 380557],
    [130668, 589520.40816327, 130668, 380557],
    [130669, 508354.76190476, 130669, 380557],
    [130670, 663472.22222222, 130670, 380557],
    [130671, 331779.76190476, 130671, 380557],
    [130672, 959410.71428571, 130672, 380557],
    [130673, 2502494.047619, 130673, 380557],
    [130674, 936783.33333333, 130674, 380557],
    [130675, 1556744.047619, 130675, 380557],
    [130676, 502336.30952381, 130676, 380557],
    [130677, 1319792.8571429, 130677, 380557],
    [130678, 1780232.1428571, 130678, 380557],
    [130679, 816531.74603175, 130679, 380557],
    [130680, 489291.66666667, 130680, 380557],
    [130681, 1352380.952381, 130681, 380557],
    [130682, 706636.9047619, 130682, 380557],
    [130683, 1320585.0340136, 130683, 380557],
    [130684, 617968.53741497, 130684, 380557],
    [130685, 1675023.8095238, 130685, 380557],
    [130686, 638711.9047619, 130686, 380557],
    [130687, 398385.91269841, 130687, 380557],
    [130688, 2103446.4285714, 130688, 380557],
    [130689, 933690.47619048, 130689, 380557],
    [130690, 1732052.3809524, 130690, 380557],
    [130691, 414291.36904762, 130691, 380557],
    [130692, 1431939.7619048, 130692, 380557],
    [130693, 435670.63492063, 130693, 380557],
    [130694, 366942.1031746, 130694, 380557],
    [130695, 651594.4047619, 130695, 380557],
    [130696, 334647.61904762, 130696, 380557],
    [130697, 688480.95238095, 130697, 380557],
    [130698, 685707.73809524, 130698, 380557],
    [130699, 684896.66666667, 130699, 380557],
    
    ];
    
    // Separate the data for scatter plot (x1 and y1) and line chart (x2 and y2)
    var x1 = [];
    var y1 = [];
    var x2 = [];
    var y2 = [];
    
    for (var i = 0; i < csvData.length; i++) {
      var row = csvData[i];
      x1.push(row[0]);
      y1.push(row[1]);
      // Set x2 and y2 to constant values (10, 10) for all points
      x2.push(row[2]);
      y2.push(row[3]);
    }
    
    // Create the scatter plot trace (x1 and y1)
    var trace1 = {
      x: x1,
      y: y1,
      mode: 'markers',
      type: 'scatter',
      name: 'Pengeluaran Per Kapita',
      marker: {
        symbol: 'circle-open', // Set the marker symbol to 'circle-open' for no fill
        size: 5 // Adjust the marker size as needed
      }
    };
    
    // Create the line chart trace (x2 and y2)
    var trace2 = {
      x: x2,
      y: y2,
      mode: 'lines',
      type: 'scatter',
      name: 'Garis Kemiskinan',
      line: {
        width: 4
      }
    };
    
    // Combine both traces into the data array
    var data = [trace1, trace2];
  
    var layout = {
      xaxis: {
        range: [129913, 130699] 
      },
      yaxis: {
        range: [0, 4000000] 
      },
      legend: {
        x: -0.02,   // Set x to 0.5 for centering the legend horizontally
        y: 1.21,  // Set y to a negative value to position the legend at the bottom
        orientation: 'h',  // Set orientation to 'h' for horizontal legend
        font: {
          size: 10
        }
      },
      annotations:[
        {
          x: -0.04,  // X-coordinate (0.5 means center of the chart)
          y: -0.3,  // Y-coordinate (1.1 means above the chart)
          xref: 'paper',
          yref: 'paper',
          text: 'Rata-rata pengeluaran perkapita sebulan penduduk <br>tahun 2020 sebesar Rp 883.891,-',  // The text of your note
          showarrow: false,  // Set to true if you want an arrow pointing to a specific location
          font: {
            size: 11,  // Adjust the font size as needed
            color: 'orange'  // Adjust the font color as needed
          }
        },
        {
          x: 0.5,  // X-coordinate (0.5 means center of the chart)
          y: 1.4,  // Y-coordinate (1.1 means above the chart)
          xref: 'paper',
          yref: 'paper',
          text: '<b>2020</b>',  // The text of your note
          showarrow: false,  // Set to true if you want an arrow pointing to a specific location
          font: {
            size: 18,  // Adjust the font size as needed
            color: 'black'  // Adjust the font color as needed
          }
        },
      ]
    };
    
    // Create the plot using Plotly
    Plotly.newPlot('chart2020', data, layout);
    