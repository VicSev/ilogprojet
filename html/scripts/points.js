        var margin = { top: 40, right: 20, bottom: 20, left: 40 };
		var radius = 4;

        function createGraph(dataset){

            console.log('createGraph with dataset = \n'+dataset);

            //Width and height

            // SET WIDTH
            var widthCardBody = document.getElementById('cardBody').offsetWidth;
            var cardBody = document.getElementById('cardBody');
            var padd = window.getComputedStyle(cardBody, null).getPropertyValue('padding-left');
            console.log('padd:'+padd);
            var iPadd = (parseInt(padd.replace(/px/,"")));
            var widthColCaract = document.getElementById('colCaract').offsetWidth;
            console.log('widthColCaract:'+widthColCaract);
            var w = widthCardBody - 2* iPadd - widthColCaract;

            // SET HEIGHT
            var heightWindow = window.innerHeight;
            var mainElem = document.getElementById('cardBody');
            var marginBottom = document.getElementById("mainDiv").style.marginBottom;
            var marginTop = document.getElementById("mainDiv").style.marginTop;
            var iMarginBottom = (parseInt(marginBottom.replace(/px/,"")))
            var iMarginTop = (parseInt(marginTop.replace(/px/,"")))
            var heightBodyCard = document.getElementById('cardBody').offsetHeight;
            var heightCard = document.getElementById('card').offsetHeight;
            var paddingBodyCard = iPadd;
            console.log('h='+heightWindow+'-'+iMarginBottom+'-'+iMarginTop+'-'+heightCard+'+'+heightBodyCard+'-2*'+paddingBodyCard);
            var h = heightWindow - 2*iMarginBottom - 2*iMarginTop - heightCard + heightBodyCard - 4*paddingBodyCard;
            console.log('var h after compute:'+h);

            // apply width & height to the elements
            document.getElementById('graphCard').style.width = w+'px';
            document.getElementById('graphCard').style.height = h+'px';

            document.getElementById('caractCard').style.height = h+'px';


           /* var dataset = [
                  {'x': 0.117, 'y': 0.214, 'label': 'bvbhq'}, {'x': -0.053, 'y': 0.036, 'label': 'mtcjjlr'}, {'x': 0.097, 'y': 0.334, 'label': 'ciqt'}, {'x': -0.355, 'y': -0.317, 'label': 'kdxko'}, {'x': -0.054, 'y': 0.67, 'label': 'spji'}, {'x': -0.057, 'y': 0.679, 'label': 'pksbk'}, {'x': 0.645, 'y': -0.763, 'label': 'zrjhmpl'}, {'x': -0.8, 'y': 0.306, 'label': 'nvpbeii'}, {'x': 0.852, 'y': -0.809, 'label': 'irqqtuh'}, {'x': 0.499, 'y': 0.731, 'label': 'ngt'}, {'x': -0.012, 'y': -0.236, 'label': 'ttl'}, {'x': 0.014, 'y': 0.272, 'label': 'wzuuy'}, {'x': -0.94, 'y': -0.394, 'label': 'fhgm'}, {'x': -0.759, 'y': -0.375, 'label': 'wfn'}, {'x': 0.793, 'y': 0.293, 'label': 'gjebp'}, {'x': -0.89, 'y': 0.46, 'label': 'dqi'}, {'x': -0.407, 'y': 0.396, 'label': 'kqefp'}, {'x': 0.398, 'y': -0.344, 'label': 'typwl'}, {'x': 0.226, 'y': -0.193, 'label': 'ybyv'}, {'x': -0.879, 'y': 0.051, 'label': 'cywhg'}, {'x': -0.162, 'y': -0.962, 'label': 'igk'}, {'x': 0.194, 'y': 0.59, 'label': 'ziswwmkw'}, {'x': 0.244, 'y': -0.993, 'label': 'fyrkx'}, {'x': 0.582, 'y': -0.015, 'label': 'edkkltoq'}, {'x': -0.192, 'y': -0.493, 'label': 'glrq'}, {'x': -0.089, 'y': -0.316, 'label': 'ngadg'}, {'x': -0.519, 'y': -0.001, 'label': 'udsfumxx'}, {'x': -0.062, 'y': -0.203, 'label': 'xvygo'}, {'x': -0.405, 'y': 0.502, 'label': 'yan'}, {'x': 0.648, 'y': -0.869, 'label': 'viroclud'}, {'x': -0.446, 'y': 0.529, 'label': 'oluxcflj'}, {'x': -0.351, 'y': 0.693, 'label': 'zcjjqwca'}, {'x': -0.198, 'y': -0.087, 'label': 'bgg'}, {'x': 0.794, 'y': 0.339, 'label': 'curiot'}, {'x': -0.313, 'y': 0.936, 'label': 'khgojdip'}, {'x': 0.441, 'y': 0.97, 'label': 'luipylj'}, {'x': -0.029, 'y': 0.627, 'label': 'qhviyos'}, {'x': 0.762, 'y': -0.568, 'label': 'wosfo'}, {'x': -0.056, 'y': 0.209, 'label': 'wdrht'}, {'x': -0.166, 'y': -0.822, 'label': 'kwtpwde'}, {'x': -0.577, 'y': -0.456, 'label': 'rwtpiw'}, {'x': 0.997, 'y': -0.365, 'label': 'atffwyd'}, {'x': -0.022, 'y': 0.509, 'label': 'druqgt'}, {'x': -0.47, 'y': -0.307, 'label': 'nesna'}, {'x': 0.284, 'y': 0.756, 'label': 'fec'}, {'x': 0.374, 'y': 0.625, 'label': 'tqnkgpwb'}, {'x': 0.002, 'y': -0.886, 'label': 'jqfwn'}, {'x': -0.077, 'y': 0.48, 'label': 'rwbj'}, {'x': -0.734, 'y': 0.655, 'label': 'riialimi'}, {'x': 0.161, 'y': -0.619, 'label': 'aoccu'}, {'x': -0.247, 'y': -0.771, 'label': 'carppxsj'}, {'x': 0.818, 'y': -0.148, 'label': 'fxsx'}, {'x': 0.511, 'y': -0.652, 'label': 'lpifj'}, {'x': 0.625, 'y': -0.103, 'label': 'hcx'}, {'x': -0.416, 'y': -0.554, 'label': 'iaggnh'}, {'x': -0.107, 'y': -0.427, 'label': 'dssut'}, {'x': -0.051, 'y': 0.11, 'label': 'rgguxhas'}, {'x': 0.573, 'y': -0.053, 'label': 'wxlr'}, {'x': 0.847, 'y': -0.964, 'label': 'gbwxe'}, {'x': 0.043, 'y': -0.136, 'label': 'dohqc'}, {'x': 0.167, 'y': 0.538, 'label': 'bft'}, {'x': 0.374, 'y': -0.225, 'label': 'vrtxnzd'}, {'x': 0.53, 'y': -0.225, 'label': 'ohbcjz'}, {'x': 0.389, 'y': -0.31, 'label': 'zmtkdno'}, {'x': 0.063, 'y': 0.656, 'label': 'gmucugzl'}, {'x': 0.5, 'y': -0.666, 'label': 'zhrldk'}, {'x': -0.316, 'y': -0.353, 'label': 'whtk'}, {'x': 0.595, 'y': 0.367, 'label': 'cllyf'}, {'x': 0.332, 'y': 0.512, 'label': 'nojvccyq'}, {'x': -0.96, 'y': 0.057, 'label': 'bgblm'}, {'x': -0.779, 'y': -0.299, 'label': 'bxhnbkpx'}, {'x': 0.979, 'y': 0.969, 'label': 'lkkjhix'}, {'x': -0.661, 'y': -0.445, 'label': 'ztissxz'}, {'x': 0.919, 'y': 0.656, 'label': 'rixggve'}, {'x': -0.871, 'y': 0.739, 'label': 'qerbqw'}, {'x': -0.219, 'y': -0.225, 'label': 'rihzm'}, {'x': 0.501, 'y': 0.784, 'label': 'kovf'}, {'x': -0.316, 'y': 0.169, 'label': 'asdy'}, {'x': -0.465, 'y': 0.481, 'label': 'huoe'}, {'x': -0.5, 'y': -0.282, 'label': 'xdpqlg'}, {'x': 0.383, 'y': -0.564, 'label': 'sbctk'}, {'x': -0.794, 'y': 0.756, 'label': 'qcbjoa'}, {'x': -0.019, 'y': -0.38, 'label': 'iyrx'}, {'x': 0.657, 'y': 0.555, 'label': 'kjl'}, {'x': -0.758, 'y': 0.238, 'label': 'qlpyh'}, {'x': -0.809, 'y': -0.549, 'label': 'asxxo'}, {'x': -0.44, 'y': -0.803, 'label': 'sdn'}, {'x': -0.582, 'y': 0.351, 'label': 'bnxhal'}, {'x': 0.355, 'y': 0.442, 'label': 'fbtb'}, {'x': -0.574, 'y': 0.697, 'label': 'hhw'}, {'x': 0.859, 'y': -0.886, 'label': 'jkhhib'}, {'x': 0.535, 'y': -0.554, 'label': 'bicnw'}, {'x': 0.665, 'y': -0.855, 'label': 'vddeofqr'}, {'x': 0.489, 'y': 0.025, 'label': 'eedet'}, {'x': 0.406, 'y': -0.055, 'label': 'rbkx'}, {'x': -0.306, 'y': -0.023, 'label': 'hxkrhiie'}, {'x': -0.705, 'y': -0.197, 'label': 'upevzov'}, {'x': 0.988, 'y': -0.906, 'label': 'swasb'}, {'x': -0.761, 'y': -0.509, 'label': 'zfp'}, {'x': 0.198, 'y': 0.951, 'label': 'mvly'}, {'x': 0.235, 'y': 0.58, 'label': 'hbyjtb'}, {'x': 0.841, 'y': 0.834, 'label': 'hgzjeet'}, {'x': 0.65, 'y': 0.926, 'label': 'izpk'}, {'x': -0.183, 'y': -0.129, 'label': 'lpqbbg'}, {'x': 0.367, 'y': 0.137, 'label': 'icb'}, {'x': -0.522, 'y': 0.537, 'label': 'yuyzezi'}, {'x': -0.535, 'y': 0.803, 'label': 'ipxqu'}, {'x': -0.283, 'y': 0.306, 'label': 'mkwtaj'}, {'x': 0.787, 'y': -0.175, 'label': 'dhjfo'}, {'x': -0.879, 'y': -0.586, 'label': 'mud'}, {'x': -0.768, 'y': -0.247, 'label': 'altrkpk'}, {'x': -0.035, 'y': -0.136, 'label': 'dkzsbwt'}, {'x': 0.45, 'y': -0.853, 'label': 'adn'}, {'x': -0.436, 'y': -0.192, 'label': 'oyj'}, {'x': 0.163, 'y': 0.55, 'label': 'gtojx'}, {'x': -0.422, 'y': -0.135, 'label': 'wrxfcvna'}, {'x': 0.349, 'y': 0.473, 'label': 'lzzava'}, {'x': 0.736, 'y': 0.375, 'label': 'cqco'}, {'x': -0.924, 'y': -0.43, 'label': 'hole'}, {'x': -0.738, 'y': 0.514, 'label': 'gpw'}, {'x': 0.958, 'y': 0.171, 'label': 'bvkz'}, {'x': 0.375, 'y': 0.373, 'label': 'tyxsr'}, {'x': -0.523, 'y': -0.27, 'label': 'ekr'}, {'x': 0.781, 'y': 0.764, 'label': 'iecg'}, {'x': 0.188, 'y': -0.477, 'label': 'ycvsvme'}, {'x': -0.807, 'y': 0.167, 'label': 'stxfi'}, {'x': 0.171, 'y': -0.72, 'label': 'tuuaveec'}, {'x': 0.793, 'y': -0.581, 'label': 'cnucvzc'}, {'x': -0.028, 'y': -0.768, 'label': 'upkgvt'}, {'x': -0.691, 'y': -0.349, 'label': 'bjepxl'}, {'x': 0.26, 'y': 0.575, 'label': 'ilbaw'}, {'x': 0.148, 'y': 0.613, 'label': 'wusaq'}, {'x': -0.841, 'y': -0.878, 'label': 'prrjjq'}, {'x': 0.322, 'y': -0.974, 'label': 'agvbnwva'}, {'x': -0.585, 'y': 0.208, 'label': 'mvoxfrrs'}, {'x': 0.903, 'y': 0.128, 'label': 'oidnmqvj'}, {'x': 0.009, 'y': -0.076, 'label': 'klvyvvn'}, {'x': -0.563, 'y': 0.405, 'label': 'yzt'}, {'x': -0.461, 'y': -0.362, 'label': 'alq'}, {'x': 0.048, 'y': 0.758, 'label': 'wiqhjfl'}, {'x': 0.057, 'y': 0.016, 'label': 'saheds'}, {'x': 0.428, 'y': 0.497, 'label': 'qnsngdjw'}, {'x': -0.234, 'y': 0.966, 'label': 'cycps'}, {'x': -0.545, 'y': -0.833, 'label': 'rltgrrv'}, {'x': 0.598, 'y': 0.563, 'label': 'zwo'}, {'x': 0.275, 'y': -0.673, 'label': 'jhvi'}, {'x': -0.215, 'y': -0.445, 'label': 'rovdpw'}, {'x': 0.458, 'y': 0.323, 'label': 'pgpa'}, {'x': 0.968, 'y': -0.818, 'label': 'eanipbj'}, {'x': 0.581, 'y': -0.128, 'label': 'sopsqg'}, {'x': -0.908, 'y': 0.84, 'label': 'pntwx'}, {'x': -0.342, 'y': 0.758, 'label': 'yjzenhzg'}, {'x': 0.39, 'y': -0.303, 'label': 'ybdo'}, {'x': -0.245, 'y': -0.933, 'label': 'fqpfen'}, {'x': -0.956, 'y': 0.457, 'label': 'rvrnnx'}, {'x': 0.626, 'y': 0.675, 'label': 'lxeghs'}, {'x': -0.598, 'y': -0.747, 'label': 'ywxinxov'}, {'x': -0.954, 'y': 0.023, 'label': 'sbc'}, {'x': -0.168, 'y': 0.245, 'label': 'xaztjhbe'}, {'x': 0.913, 'y': -0.881, 'label': 'fdytnvyi'}, {'x': -0.539, 'y': 0.652, 'label': 'juqrw'}, {'x': 0.842, 'y': -0.468, 'label': 'braiklc'}, {'x': -0.879, 'y': -0.233, 'label': 'dlp'}, {'x': 0.715, 'y': 0.612, 'label': 'chst'}, {'x': -0.259, 'y': 0.922, 'label': 'yioaulr'}, {'x': 0.94, 'y': -0.806, 'label': 'mvxc'}, {'x': -0.165, 'y': -0.453, 'label': 'wikaftnf'}, {'x': 0.227, 'y': 0.348, 'label': 'fdmlrr'}, {'x': -0.678, 'y': -0.901, 'label': 'kup'}, {'x': 0.598, 'y': -0.957, 'label': 'noq'}, {'x': 0.943, 'y': 0.475, 'label': 'vtp'}, {'x': -0.916, 'y': 0.678, 'label': 'ejrltn'}, {'x': 0.051, 'y': -0.455, 'label': 'uzxvqwb'}, {'x': 0.762, 'y': 0.512, 'label': 'mxw'}, {'x': 0.037, 'y': 0.761, 'label': 'zozf'}, {'x': -0.886, 'y': -0.748, 'label': 'rjqwrku'}, {'x': -0.047, 'y': -0.206, 'label': 'jlk'}, {'x': 0.972, 'y': 0.09, 'label': 'mdzfjar'}, {'x': 0.286, 'y': 0.489, 'label': 'tnitskx'}, {'x': -0.479, 'y': -0.222, 'label': 'vglhmgf'}, {'x': -0.196, 'y': -0.602, 'label': 'khskh'}, {'x': 0.637, 'y': -0.078, 'label': 'aksgj'}, {'x': 0.774, 'y': 0.223, 'label': 'ptj'}, {'x': 0.035, 'y': -0.356, 'label': 'gada'}, {'x': 0.701, 'y': -0.604, 'label': 'wvuav'}, {'x': 0.82, 'y': -0.477, 'label': 'sljdqz'}, {'x': -0.252, 'y': -0.387, 'label': 'eclnqw'}, {'x': 0.367, 'y': -0.064, 'label': 'pvwo'}, {'x': 0.879, 'y': 0.893, 'label': 'qfjupeop'}, {'x': -0.101, 'y': -0.601, 'label': 'pftd'}, {'x': -0.604, 'y': -0.936, 'label': 'aiv'}, {'x': 0.054, 'y': -0.65, 'label': 'pdxj'}, {'x': 0.202, 'y': 0.037, 'label': 'wvivpkep'}, {'x': -0.575, 'y': -0.747, 'label': 'xxkh'}, {'x': 0.771, 'y': -0.393, 'label': 'byhzvllv'}, {'x': -0.777, 'y': -0.37, 'label': 'iybqgf'}, {'x': 0.038, 'y': -0.682, 'label': 'blyu'}, {'x': 0.585, 'y': -0.291, 'label': 'gvrfrkl'}, {'x': -0.776, 'y': 0.873, 'label': 'vjlm'}, {'x': 0.305, 'y': -0.002, 'label': 'bsq'}, {'x': -0.664, 'y': -0.749, 'label': 'acrgu'}, {'x': -0.177, 'y': -0.068, 'label': 'savva'}, {'x': 0.951, 'y': -0.841, 'label': 'birlo'}, {'x': -0.863, 'y': 0.239, 'label': 'xfho'}, {'x': 0.292, 'y': 0.921, 'label': 'pkvza'}, {'x': -0.944, 'y': 0.585, 'label': 'jvqknzl'}, {'x': -0.282, 'y': -0.534, 'label': 'zonqxhjk'}, {'x': -0.86, 'y': 0.502, 'label': 'eqqzk'}, {'x': -0.811, 'y': 0.792, 'label': 'kxlpgoct'}, {'x': 0.674, 'y': 0.572, 'label': 'ermw'}, {'x': 0.297, 'y': 0.574, 'label': 'mrzq'}, {'x': -0.608, 'y': 0.834, 'label': 'cmvzzgs'}, {'x': -0.174, 'y': 0.491, 'label': 'qdrrbn'}, {'x': -0.659, 'y': 0.561, 'label': 'xsubqo'}, {'x': -0.923, 'y': 0.047, 'label': 'hriyqcgp'}, {'x': -0.943, 'y': -0.226, 'label': 'zwnpd'}, {'x': 0.487, 'y': 0.875, 'label': 'yvdgc'}, {'x': -0.192, 'y': 0.384, 'label': 'kckke'}, {'x': -0.415, 'y': -0.757, 'label': 'cfmlj'}, {'x': 0.393, 'y': -0.219, 'label': 'pvwuwnfb'}, {'x': 0.263, 'y': -0.616, 'label': 'vtdzx'}, {'x': -0.166, 'y': -0.819, 'label': 'zossx'}, {'x': 0.254, 'y': -0.526, 'label': 'xyaunfl'}, {'x': -0.463, 'y': 0.725, 'label': 'yqzhzps'}, {'x': 0.218, 'y': 0.496, 'label': 'srkd'}, {'x': -0.553, 'y': 0.473, 'label': 'ckcxdhu'}, {'x': 0.488, 'y': -0.591, 'label': 'ijrzfs'}, {'x': -0.072, 'y': -0.161, 'label': 'fhk'}, {'x': 0.463, 'y': -0.29, 'label': 'fcczigj'}, {'x': -0.559, 'y': 0.174, 'label': 'qfanxr'}, {'x': 0.829, 'y': 0.338, 'label': 'gqkvcou'}, {'x': -0.131, 'y': 0.827, 'label': 'wnjgwpd'}, {'x': -0.383, 'y': 0.182, 'label': 'sgdmjbs'}, {'x': -0.546, 'y': 0.377, 'label': 'xqeca'}, {'x': 0.98, 'y': 0.976, 'label': 'fpbb'}, {'x': 0.461, 'y': -0.453, 'label': 'xyzqazpc'}, {'x': -0.974, 'y': -0.673, 'label': 'votalwrv'}, {'x': -0.823, 'y': -0.187, 'label': 'gyzhsi'}, {'x': -0.334, 'y': 0.083, 'label': 'aiqnnbyw'}, {'x': 0.286, 'y': 0.126, 'label': 'xcofvg'}, {'x': 0.835, 'y': 0.579, 'label': 'qpukpx'}, {'x': 0.351, 'y': -0.829, 'label': 'mxpoj'}, {'x': -0.434, 'y': -0.893, 'label': 'cmof'}, {'x': -0.702, 'y': 0.352, 'label': 'jvp'}, {'x': -0.472, 'y': -0.572, 'label': 'tigk'}, {'x': -0.225, 'y': 0.776, 'label': 'uvx'}, {'x': 0.362, 'y': -0.776, 'label': 'crr'}, {'x': 0.84, 'y': 0.685, 'label': 'iju'}, {'x': 0.545, 'y': -0.936, 'label': 'bhhze'}, {'x': 0.742, 'y': 0.965, 'label': 'yysuyhjs'}, {'x': 0.857, 'y': -0.856, 'label': 'vzthr'}, {'x': 0.238, 'y': -0.613, 'label': 'trvyw'}, {'x': 0.921, 'y': -0.123, 'label': 'muuc'}, {'x': 0.323, 'y': -0.693, 'label': 'njyerw'}, {'x': 0.153, 'y': 0.333, 'label': 'fpvbhaf'}, {'x': 0.304, 'y': 0.55, 'label': 'nhbuvr'}, {'x': -0.082, 'y': -0.392, 'label': 'hssyjor'}, {'x': -0.411, 'y': -0.076, 'label': 'dwptpep'}, {'x': 0.577, 'y': -0.437, 'label': 'onskfzna'}, {'x': 0.774, 'y': 0.203, 'label': 'yuubyhpq'}, {'x': 0.031, 'y': -0.562, 'label': 'dee'}, {'x': -0.506, 'y': -0.216, 'label': 'chppnfpt'}, {'x': -0.386, 'y': -0.656, 'label': 'gpeduew'}, {'x': 0.97, 'y': 0.94, 'label': 'ijjuco'}, {'x': -0.774, 'y': 0.882, 'label': 'gmrvoy'}, {'x': -0.061, 'y': 0.676, 'label': 'eooobwbn'}, {'x': 0.837, 'y': 0.882, 'label': 'zjimq'}, {'x': 0.892, 'y': -0.365, 'label': 'kvweuil'}, {'x': -0.21, 'y': -0.112, 'label': 'zar'}, {'x': 0.459, 'y': 0.513, 'label': 'quoamv'}, {'x': -0.693, 'y': -0.485, 'label': 'sbk'}, {'x': 0.706, 'y': 0.502, 'label': 'xddh'}, {'x': -0.089, 'y': -0.863, 'label': 'ndsj'}, {'x': 0.509, 'y': -0.406, 'label': 'rmf'}, {'x': 0.41, 'y': -0.475, 'label': 'vlibxzn'}, {'x': -0.783, 'y': -0.166, 'label': 'asfv'}, {'x': 0.731, 'y': -0.236, 'label': 'mgjn'}, {'x': 0.915, 'y': 0.528, 'label': 'wftv'}, {'x': -0.161, 'y': 0.571, 'label': 'jfzzscia'}, {'x': -0.787, 'y': 0.147, 'label': 'rjjfso'}, {'x': 0.434, 'y': -0.062, 'label': 'ykkkjqrl'}, {'x': 0.996, 'y': -0.625, 'label': 'fvgz'}, {'x': -0.448, 'y': -0.821, 'label': 'zsqcqvb'}, {'x': -0.081, 'y': 0.465, 'label': 'vqnlvj'}, {'x': 0.693, 'y': 0.073, 'label': 'hup'}, {'x': 0.805, 'y': -0.27, 'label': 'hdjnpwc'}, {'x': -0.588, 'y': -0.44, 'label': 'hyeitpqd'}, {'x': 0.476, 'y': 0.65, 'label': 'ihi'}, {'x': -0.724, 'y': 0.018, 'label': 'jpsspz'}, {'x': -0.648, 'y': -0.333, 'label': 'hgiarb'}, {'x': -0.055, 'y': 0.359, 'label': 'mplhlf'}, {'x': -0.32, 'y': -0.44, 'label': 'aylz'}, {'x': -0.959, 'y': -0.375, 'label': 'dfxy'}, {'x': -0.327, 'y': 0.15, 'label': 'divblybe'}, {'x': 0.405, 'y': -0.53, 'label': 'ejhqhlat'}, {'x': 0.226, 'y': -0.888, 'label': 'luia'}, {'x': 0.079, 'y': 0.726, 'label': 'mnvhz'}, {'x': -0.005, 'y': -0.854, 'label': 'bdlmyjt'}, {'x': -0.404, 'y': 0.924, 'label': 'hzosqsu'}, {'x': 0.063, 'y': 0.668, 'label': 'fzjznt'}, {'x': 0.201, 'y': 0.111, 'label': 'cvvxdqyb'}, {'x': -0.764, 'y': 0.512, 'label': 'azpjzgh'}, {'x': 0.676, 'y': -0.787, 'label': 'wdi'}, {'x': -0.044, 'y': -0.032, 'label': 'cvxhq'}, {'x': 0.485, 'y': 0.715, 'label': 'ekhehif'}, {'x': 0.494, 'y': -0.154, 'label': 'urpposw'}, {'x': 0.212, 'y': -0.78, 'label': 'fyoqfnci'}, {'x': -0.823, 'y': -0.034, 'label': 'wjoqzlzp'}, {'x': -0.151, 'y': -0.827, 'label': 'wmv'}, {'x': 0.334, 'y': 0.011, 'label': 'urg'}, {'x': 0.63, 'y': 0.224, 'label': 'gdbfu'}, {'x': 0.394, 'y': -0.992, 'label': 'hkrc'}, {'x': -0.407, 'y': 0.844, 'label': 'bmvdx'}, {'x': -0.965, 'y': 0.223, 'label': 'bjnmqs'}, {'x': 0.27, 'y': 0.091, 'label': 'qewg'}, {'x': 0.372, 'y': 0.321, 'label': 'bbseu'}, {'x': -0.347, 'y': 0.283, 'label': 'pdqycbeo'}, {'x': 0.802, 'y': 0.794, 'label': 'udiuivo'}, {'x': 0.411, 'y': -0.819, 'label': 'kbtgwqh'}, {'x': -0.607, 'y': 0.668, 'label': 'hqdmsta'}, {'x': -0.415, 'y': -0.918, 'label': 'jcoztft'}, {'x': -0.841, 'y': -0.585, 'label': 'cbwspur'}, {'x': 0.213, 'y': -0.185, 'label': 'demgm'}, {'x': 0.098, 'y': -0.863, 'label': 'jxuuexfo'}, {'x': 0.239, 'y': -0.147, 'label': 'zlnadi'}, {'x': 0.241, 'y': -0.108, 'label': 'crscn'}, {'x': -0.253, 'y': 0.181, 'label': 'wqylwm'}, {'x': 0.163, 'y': -0.225, 'label': 'pbemegyy'}, {'x': -0.833, 'y': -0.132, 'label': 'gevdeda'}, {'x': 0.521, 'y': -0.4, 'label': 'wsu'}, {'x': -0.082, 'y': -0.949, 'label': 'yxipctdx'}, {'x': -0.61, 'y': 0.805, 'label': 'dyhk'}, {'x': -0.958, 'y': -0.186, 'label': 'cdezgnaj'}, {'x': 0.123, 'y': -0.649, 'label': 'ibwxutv'}, {'x': 0.469, 'y': -0.922, 'label': 'myvbqd'}, {'x': 0.73, 'y': -0.188, 'label': 'hymno'}, {'x': 0.549, 'y': 0.653, 'label': 'dflsy'}, {'x': -0.977, 'y': -0.472, 'label': 'blf'}, {'x': -0.712, 'y': 0.735, 'label': 'epms'}, {'x': 0.461, 'y': 0.217, 'label': 'cni'}, {'x': 0.258, 'y': 0.399, 'label': 'nzrd'}, {'x': -0.085, 'y': 0.663, 'label': 'ivhwlgsq'}, {'x': -0.507, 'y': -0.899, 'label': 'wig'}, {'x': 0.941, 'y': -0.979, 'label': 'bbuktqm'}, {'x': -0.918, 'y': -0.8, 'label': 'rwimctt'}, {'x': -0.895, 'y': -0.848, 'label': 'lvq'}, {'x': 0.807, 'y': -0.096, 'label': 'kkfgyrd'}, {'x': 0.27, 'y': 0.377, 'label': 'atk'}, {'x': 0.532, 'y': 0.635, 'label': 'qwbhrlsc'}, {'x': 0.961, 'y': 0.483, 'label': 'nihkawzk'}, {'x': -0.961, 'y': 0.369, 'label': 'tfy'}, {'x': -0.424, 'y': 0.749, 'label': 'ejmybufx'}, {'x': 0.108, 'y': 0.121, 'label': 'ayvrjuoq'}, {'x': 0.807, 'y': -0.543, 'label': 'pou'}, {'x': -0.278, 'y': 0.436, 'label': 'frirv'}, {'x': -0.501, 'y': 0.887, 'label': 'bbymzrb'}, {'x': -0.42, 'y': -0.646, 'label': 'crpo'}, {'x': -0.318, 'y': -0.324, 'label': 'dwis'}, {'x': -0.125, 'y': 0.794, 'label': 'thjzubp'}, {'x': 0.914, 'y': -0.209, 'label': 'dvze'}, {'x': 0.188, 'y': -0.295, 'label': 'edivebmn'}, {'x': 0.77, 'y': -0.001, 'label': 'rnawv'}, {'x': 0.742, 'y': -0.616, 'label': 'klgrtvhe'}, {'x': -0.229, 'y': -0.195, 'label': 'xeqtgoh'}, {'x': 0.807, 'y': 0.867, 'label': 'ofhzv'}, {'x': -0.453, 'y': 0.284, 'label': 'vdy'}, {'x': -0.372, 'y': -0.292, 'label': 'imc'}, {'x': 0.134, 'y': -0.465, 'label': 'owuxl'}, {'x': -0.804, 'y': 0.511, 'label': 'mqeuusi'}, {'x': 0.513, 'y': -0.353, 'label': 'glqm'}, {'x': -0.324, 'y': -0.197, 'label': 'jmhaqh'}, {'x': 0.291, 'y': -0.696, 'label': 'nhvp'}, {'x': -0.818, 'y': 0.901, 'label': 'hfyimzy'}, {'x': 0.799, 'y': 0.202, 'label': 'erzluzma'}, {'x': 0.042, 'y': -0.122, 'label': 'amscqr'}, {'x': 0.223, 'y': -0.95, 'label': 'xavyyaem'}, {'x': 0.314, 'y': -0.772, 'label': 'gxnll'}, {'x': -0.997, 'y': 0.097, 'label': 'kzu'}, {'x': -0.986, 'y': -0.418, 'label': 'qjhbhzc'}, {'x': 0.528, 'y': 0.941, 'label': 'hlq'}, {'x': 0.546, 'y': 0.065, 'label': 'dxgxyn'}, {'x': -0.212, 'y': -0.584, 'label': 'itfwc'}, {'x': -0.191, 'y': 0.687, 'label': 'hgvxfn'}, {'x': 0.615, 'y': 0.242, 'label': 'lplklr'}, {'x': 0.092, 'y': -0.915, 'label': 'ybnxp'}, {'x': 0.757, 'y': 0.091, 'label': 'ytoxj'}, {'x': 0.274, 'y': -0.941, 'label': 'ufm'}, {'x': 0.816, 'y': -0.136, 'label': 'pnchr'}, {'x': -0.236, 'y': -0.291, 'label': 'mnh'}, {'x': 0.31, 'y': 0.173, 'label': 'mwrug'}, {'x': 0.641, 'y': 0.395, 'label': 'uuizws'}, {'x': -0.291, 'y': -0.563, 'label': 'caxoky'}, {'x': 0.089, 'y': 0.856, 'label': 'udswsq'}, {'x': 0.222, 'y': 0.278, 'label': 'gxunkc'}, {'x': -0.184, 'y': -0.034, 'label': 'sfgdzvjk'}, {'x': -0.683, 'y': 0.502, 'label': 'kwdpug'}, {'x': -0.283, 'y': -0.641, 'label': 'hamwsmm'}, {'x': -0.065, 'y': -0.948, 'label': 'djcl'}, {'x': -0.67, 'y': -0.465, 'label': 'cbtmp'}, {'x': 0.591, 'y': -0.673, 'label': 'cszb'}, {'x': 0.23, 'y': -0.081, 'label': 'nou'}, {'x': 0.682, 'y': 0.813, 'label': 'qmsy'}, {'x': -0.01, 'y': 0.725, 'label': 'zifwg'}, {'x': -0.324, 'y': -0.006, 'label': 'rhx'}, {'x': 0.167, 'y': 0.347, 'label': 'lnmnm'}, {'x': -0.036, 'y': -0.758, 'label': 'mspdqs'}, {'x': 0.462, 'y': 0.58, 'label': 'kqlggp'}, {'x': 0.662, 'y': 0.726, 'label': 'recjx'}, {'x': -0.936, 'y': 0.579, 'label': 'sydcb'}, {'x': -0.955, 'y': -0.53, 'label': 'ytcpdbds'}, {'x': -0.548, 'y': -0.757, 'label': 'pehdynh'}, {'x': 0.985, 'y': -0.149, 'label': 'mlwgbquk'}, {'x': -0.64, 'y': -0.217, 'label': 'opqhnhx'}, {'x': -0.479, 'y': -0.116, 'label': 'aezfrxd'}, {'x': -0.813, 'y': 0.358, 'label': 'qln'}, {'x': 0.33, 'y': 0.785, 'label': 'aanhyo'}, {'x': -0.998, 'y': -0.957, 'label': 'qgtzj'}, {'x': -0.296, 'y': -0.932, 'label': 'fho'}, {'x': -0.581, 'y': 0.187, 'label': 'yllz'}, {'x': 0.001, 'y': 0.383, 'label': 'fvkjqe'}, {'x': 0.433, 'y': 0.456, 'label': 'fhjcfbem'}, {'x': -0.672, 'y': -0.263, 'label': 'nlgduu'}, {'x': 0.222, 'y': -0.832, 'label': 'dnxtlnes'}, {'x': 0.234, 'y': -0.805, 'label': 'krnaua'}, {'x': -0.278, 'y': 0.337, 'label': 'bfkkjdwy'}, {'x': 0.07, 'y': 0.481, 'label': 'fah'}, {'x': 0.72, 'y': -0.655, 'label': 'lvp'}, {'x': 0.853, 'y': 0.33, 'label': 'exgbl'}, {'x': -0.987, 'y': -0.401, 'label': 'dqeoor'}, {'x': -0.492, 'y': 0.04, 'label': 'cdf'}, {'x': 0.326, 'y': 0.496, 'label': 'hlmyj'}, {'x': 0.476, 'y': 0.81, 'label': 'yzr'}, {'x': 0.344, 'y': -0.933, 'label': 'gcbxcsy'}, {'x': -0.78, 'y': 0.771, 'label': 'ccrairoh'}, {'x': -0.486, 'y': 0.492, 'label': 'hfmfvgbo'}, {'x': -0.809, 'y': -0.24, 'label': 'jbwknw'}, {'x': -0.761, 'y': 0.841, 'label': 'cgf'}, {'x': 0.084, 'y': 0.505, 'label': 'uut'}, {'x': 0.179, 'y': -0.809, 'label': 'wvyvnybi'}, {'x': -0.329, 'y': 0.632, 'label': 'qtxxgwhh'}, {'x': -0.874, 'y': -0.846, 'label': 'gznlees'}, {'x': -0.289, 'y': 0.085, 'label': 'tkhuuco'}, {'x': 0.375, 'y': 0.559, 'label': 'cttyqvc'}, {'x': -0.895, 'y': -0.594, 'label': 'bvlmlj'}, {'x': 0.172, 'y': 0.432, 'label': 'addbxxo'}, {'x': -0.447, 'y': 0.448, 'label': 'fevv'}, {'x': 0.474, 'y': -0.883, 'label': 'rcxvkoi'}, {'x': 0.729, 'y': -0.551, 'label': 'lnyzggp'}, {'x': -0.303, 'y': -0.055, 'label': 'uncvr'}, {'x': 0.063, 'y': -0.403, 'label': 'yowexvx'}, {'x': -0.45, 'y': 0.264, 'label': 'gudh'}, {'x': 0.968, 'y': 0.929, 'label': 'hccxpthz'}, {'x': 0.575, 'y': 0.683, 'label': 'zapiqeo'}, {'x': 0.043, 'y': 0.745, 'label': 'rxn'}, {'x': 0.836, 'y': 0.274, 'label': 'xjulynqn'}, {'x': -0.024, 'y': -0.255, 'label': 'dvi'}, {'x': 0.9, 'y': -0.457, 'label': 'obvk'}, {'x': 0.71, 'y': -0.742, 'label': 'nagsa'}, {'x': -0.426, 'y': 0.056, 'label': 'smm'}, {'x': -0.08, 'y': 0.768, 'label': 'cshbfw'}, {'x': -0.137, 'y': 0.454, 'label': 'iltnvqjd'}, {'x': 0.935, 'y': -0.424, 'label': 'qfycfv'}, {'x': -0.616, 'y': 0.678, 'label': 'mpzijr'}, {'x': -0.973, 'y': -0.243, 'label': 'eknoqmj'}, {'x': 0.363, 'y': -0.322, 'label': 'uyb'}, {'x': 0.139, 'y': -0.347, 'label': 'jhpbtt'}, {'x': -0.231, 'y': 0.794, 'label': 'vta'}, {'x': 0.822, 'y': -0.825, 'label': 'ycfckng'}, {'x': -0.804, 'y': -0.023, 'label': 'jagx'}, {'x': -0.733, 'y': 0.106, 'label': 'wksh'}, {'x': -0.296, 'y': 0.891, 'label': 'ogwof'}, {'x': -0.318, 'y': 0.235, 'label': 'vvfvbhct'}, {'x': 0.346, 'y': -0.815, 'label': 'mrw'}, {'x': -0.029, 'y': 0.642, 'label': 'lun'}, {'x': -0.322, 'y': -0.889, 'label': 'avf'}, {'x': -0.574, 'y': 0.067, 'label': 'ereeg'}, {'x': -0.262, 'y': 0.567, 'label': 'vjt'}, {'x': -0.988, 'y': -0.499, 'label': 'qbmp'}, {'x': 0.921, 'y': 0.601, 'label': 'akf'}, {'x': 0.185, 'y': 0.356, 'label': 'pkr'}, {'x': -0.422, 'y': -0.366, 'label': 'quaobns'}, {'x': 0.126, 'y': -0.176, 'label': 'ddkft'}, {'x': -0.228, 'y': 0.485, 'label': 'kyvver'}, {'x': -0.783, 'y': -0.06, 'label': 'ltylzw'}, {'x': -0.709, 'y': -0.61, 'label': 'bnqqrb'}, {'x': 0.707, 'y': -0.52, 'label': 'dspw'}, {'x': 0.139, 'y': -0.085, 'label': 'iqmiux'}, {'x': -0.105, 'y': 0.022, 'label': 'buxhre'}, {'x': 0.727, 'y': 0.606, 'label': 'fhoefsl'}, {'x': 0.323, 'y': -0.788, 'label': 'ejzjlq'}, {'x': -0.719, 'y': -0.088, 'label': 'drtdin'}, {'x': 0.019, 'y': -0.913, 'label': 'psevwq'}, {'x': 0.531, 'y': -0.121, 'label': 'xyrgz'}, {'x': -0.023, 'y': -0.203, 'label': 'mhsngjlv'}, {'x': 0.733, 'y': -0.913, 'label': 'xczgosrp'}, {'x': -0.929, 'y': 0.654, 'label': 'snf'}, {'x': 0.939, 'y': -0.538, 'label': 'wplkwq'}, {'x': 0.584, 'y': -0.684, 'label': 'qdjcwcjs'}, {'x': 0.653, 'y': 0.614, 'label': 'qmtmvomt'}, {'x': 0.759, 'y': 0.552, 'label': 'rukrskwr'}, {'x': 0.262, 'y': 0.835, 'label': 'niyz'}, {'x': -0.431, 'y': 0.192, 'label': 'iuf'}, {'x': 0.153, 'y': 0.238, 'label': 'gjrykxi'}, {'x': 0.234, 'y': -0.133, 'label': 'ooigsdk'}, {'x': 0.078, 'y': 0.612, 'label': 'epfysl'}, {'x': -0.891, 'y': -0.446, 'label': 'skzawaus'}, {'x': 0.357, 'y': 0.526, 'label': 'buswa'}, {'x': -0.5, 'y': 0.095, 'label': 'anhfl'}, {'x': -0.219, 'y': -0.307, 'label': 'xqco'}, {'x': -0.065, 'y': -0.327, 'label': 'tckx'}, {'x': -0.008, 'y': 0.434, 'label': 'ovq'}, {'x': -0.035, 'y': 0.073, 'label': 'xwm'}, {'x': -0.309, 'y': 0.4, 'label': 'hsiyjsr'}, {'x': 0.065, 'y': -0.134, 'label': 'mie'}, {'x': 0.072, 'y': -0.082, 'label': 'rnjjn'}, {'x': -0.479, 'y': -0.569, 'label': 'efqbipt'}, {'x': 0.951, 'y': -0.013, 'label': 'bakmu'}, {'x': 0.565, 'y': -0.242, 'label': 'xdp'}, {'x': 0.429, 'y': -0.099, 'label': 'yowwaufs'}, {'x': -0.04, 'y': -0.228, 'label': 'njbxn'}, {'x': -0.016, 'y': 0.688, 'label': 'iukzhop'}, {'x': -0.247, 'y': -0.326, 'label': 'yfne'}, {'x': 0.581, 'y': 0.122, 'label': 'udyrwpi'}, {'x': -0.268, 'y': -0.988, 'label': 'vfnb'}, {'x': -0.644, 'y': 0.475, 'label': 'bczy'}, {'x': -0.746, 'y': -0.967, 'label': 'zlui'}, {'x': 0.369, 'y': 0.033, 'label': 'shqppr'}, {'x': 0.422, 'y': -0.555, 'label': 'smwxpria'}, {'x': -0.775, 'y': -0.277, 'label': 'ygiq'}, {'x': 0.608, 'y': 0.852, 'label': 'wglzf'}, {'x': -0.951, 'y': 0.23, 'label': 'cvy'}, {'x': 0.33, 'y': 0.158, 'label': 'rep'}, {'x': 0.518, 'y': 0.666, 'label': 'kry'}, {'x': 0.117, 'y': -0.746, 'label': 'ziji'}, {'x': -0.53, 'y': 0.457, 'label': 'iewikttt'}, {'x': -0.834, 'y': 0.899, 'label': 'lsgd'}, {'x': -0.099, 'y': -0.583, 'label': 'fjmyf'}, {'x': 0.755, 'y': -0.295, 'label': 'epxggot'}, {'x': -0.886, 'y': 0.186, 'label': 'psoz'}, {'x': -0.145, 'y': 0.858, 'label': 'psgb'}, {'x': 0.488, 'y': -0.097, 'label': 'ytyrmg'}, {'x': -0.788, 'y': 0.94, 'label': 'iun'}, {'x': -0.1, 'y': -0.019, 'label': 'fyyno'}, {'x': 0.398, 'y': 0.306, 'label': 'isprw'}, {'x': 0.521, 'y': -0.394, 'label': 'dcezsl'}, {'x': -0.271, 'y': 0.269, 'label': 'ttddxfpx'}, {'x': -0.085, 'y': -0.163, 'label': 'fonptb'}, {'x': 0.035, 'y': -0.101, 'label': 'vbt'}, {'x': 0.954, 'y': -0.88, 'label': 'qapf'}, {'x': 0.427, 'y': 0.037, 'label': 'sgytw'}, {'x': 0.064, 'y': -0.685, 'label': 'zie'}, {'x': -0.306, 'y': 0.026, 'label': 'pzdam'}, {'x': -0.394, 'y': 0.075, 'label': 'hdg'}, {'x': 0.15, 'y': 0.67, 'label': 'brcs'}, {'x': 0.838, 'y': -0.69, 'label': 'tqamcsrq'}, {'x': -0.28, 'y': -0.093, 'label': 'wsgcq'}, {'x': 0.804, 'y': 0.952, 'label': 'jzpgcir'}, {'x': -0.357, 'y': 0.632, 'label': 'lfvkcl'}, {'x': 0.173, 'y': 0.809, 'label': 'rmylg'}, {'x': 0.435, 'y': 0.339, 'label': 'ghju'}, {'x': -0.903, 'y': -0.602, 'label': 'vqrlzyid'}, {'x': 0.63, 'y': 0.986, 'label': 'kuc'}, {'x': -0.652, 'y': -0.357, 'label': 'lehacii'}, {'x': 0.751, 'y': -0.936, 'label': 'uzb'}, {'x': 0.066, 'y': -0.34, 'label': 'gwrjqih'}, {'x': 0.676, 'y': 0.348, 'label': 'nsuv'}, {'x': -0.004, 'y': -0.043, 'label': 'avh'}, {'x': 0.644, 'y': 0.274, 'label': 'mqc'}, {'x': -0.973, 'y': -0.142, 'label': 'ekujkahf'}, {'x': 0.976, 'y': 0.646, 'label': 'btmo'}, {'x': 0.681, 'y': 0.184, 'label': 'zwbzbpic'}, {'x': -0.495, 'y': 0.196, 'label': 'dbgcq'}, {'x': -0.181, 'y': -0.093, 'label': 'jnqydowu'}, {'x': 0.339, 'y': 0.297, 'label': 'vax'}, {'x': -0.599, 'y': 0.457, 'label': 'inkiy'}, {'x': -0.036, 'y': 0.728, 'label': 'txmp'}, {'x': -0.885, 'y': 0.297, 'label': 'ova'}, {'x': -0.365, 'y': 0.849, 'label': 'hyqayuf'}, {'x': -0.48, 'y': -0.18, 'label': 'lrpzbts'}, {'x': 0.259, 'y': -0.748, 'label': 'annfqklt'}, {'x': 0.942, 'y': 0.456, 'label': 'hrcmbosi'}, {'x': 0.545, 'y': 0.384, 'label': 'syqhbg'}, {'x': 0.964, 'y': 0.529, 'label': 'eaeore'}, {'x': 0.781, 'y': 0.775, 'label': 'oujy'}, {'x': -0.96, 'y': -0.068, 'label': 'mlbzaatb'}, {'x': 0.438, 'y': -0.348, 'label': 'loxl'}, {'x': 0.664, 'y': 0.752, 'label': 'vkuqd'}, {'x': -0.279, 'y': 0.169, 'label': 'lldrugmt'}, {'x': 0.869, 'y': -0.008, 'label': 'qgh'}, {'x': 0.733, 'y': -0.333, 'label': 'wjxpsdbl'}, {'x': 0.04, 'y': 0.518, 'label': 'uyfufh'}, {'x': 0.657, 'y': -0.817, 'label': 'ycnodquv'}, {'x': -0.985, 'y': -0.37, 'label': 'koyox'}, {'x': 0.125, 'y': -0.964, 'label': 'rcjv'}, {'x': -0.206, 'y': -0.754, 'label': 'cyyiox'}, {'x': 0.063, 'y': -0.302, 'label': 'dlvfki'}, {'x': -0.084, 'y': 0.88, 'label': 'tyolj'}, {'x': -0.198, 'y': 0.953, 'label': 'smaoji'}, {'x': -0.796, 'y': -0.045, 'label': 'zfsngw'}, {'x': -0.676, 'y': -0.737, 'label': 'gmpqsgfn'}, {'x': 0.761, 'y': 0.707, 'label': 'ncad'}, {'x': -0.769, 'y': 0.324, 'label': 'ccttv'}, {'x': -0.333, 'y': 0.502, 'label': 'gsymd'}, {'x': -0.681, 'y': -0.866, 'label': 'vrzwfzm'}, {'x': -0.934, 'y': 0.668, 'label': 'sfk'}, {'x': 0.591, 'y': 0.345, 'label': 'rvy'}, {'x': 0.946, 'y': -0.174, 'label': 'wcpfe'}, {'x': 0.634, 'y': -0.454, 'label': 'asibvhlj'}, {'x': -0.426, 'y': -0.703, 'label': 'sptkujy'}, {'x': -0.342, 'y': -0.789, 'label': 'olrb'}, {'x': 0.469, 'y': -0.756, 'label': 'hnoaarl'}, {'x': -0.035, 'y': 0.229, 'label': 'ypdca'}, {'x': 0.186, 'y': -0.358, 'label': 'jqye'}, {'x': 0.786, 'y': 0.722, 'label': 'mbhfkef'}, {'x': -0.784, 'y': 0.086, 'label': 'wdgij'}, {'x': 0.375, 'y': -0.969, 'label': 'eqht'}, {'x': 0.437, 'y': -0.55, 'label': 'wxy'}, {'x': -0.416, 'y': -0.679, 'label': 'zfigow'}, {'x': -0.029, 'y': -0.546, 'label': 'mmog'}, {'x': -1.0, 'y': 0.959, 'label': 'vhds'}, {'x': 0.422, 'y': -0.041, 'label': 'awu'}, {'x': 0.639, 'y': -0.265, 'label': 'kpy'}, {'x': 0.495, 'y': 0.894, 'label': 'dgfqqno'}, {'x': -0.086, 'y': -0.291, 'label': 'fvstrlg'}, {'x': -0.118, 'y': 0.939, 'label': 'emvjawtx'}, {'x': 0.314, 'y': 0.4, 'label': 'xlqwzsyc'}, {'x': 0.264, 'y': 0.553, 'label': 'dtl'}, {'x': 0.617, 'y': 0.861, 'label': 'aimvjvf'}, {'x': -0.272, 'y': -0.203, 'label': 'auiomhhn'}, {'x': 0.92, 'y': -0.305, 'label': 'fzoa'}, {'x': 0.804, 'y': 0.311, 'label': 'xffxnzxs'}, {'x': -0.756, 'y': 0.731, 'label': 'awodxc'}, {'x': -0.694, 'y': 0.461, 'label': 'xluxiz'}, {'x': -0.581, 'y': 0.654, 'label': 'tpd'}, {'x': -0.339, 'y': 0.619, 'label': 'sgw'}, {'x': 0.332, 'y': -0.71, 'label': 'khr'}, {'x': 0.69, 'y': -0.015, 'label': 'xox'}, {'x': 0.632, 'y': -0.237, 'label': 'xpbii'}, {'x': -0.429, 'y': -0.285, 'label': 'ngk'}, {'x': 0.23, 'y': 0.332, 'label': 'gvict'}, {'x': -0.734, 'y': -0.483, 'label': 'dzib'}, {'x': 0.902, 'y': -0.139, 'label': 'hoypd'}, {'x': 0.861, 'y': 0.299, 'label': 'vxlvh'}, {'x': 0.249, 'y': -0.082, 'label': 'xxpml'}, {'x': 0.48, 'y': 0.706, 'label': 'dxcevq'}, {'x': 0.324, 'y': 0.469, 'label': 'glhg'}, {'x': 0.905, 'y': -0.293, 'label': 'kcdrhbcx'}, {'x': -0.117, 'y': -0.855, 'label': 'fgzrivbq'}, {'x': 0.398, 'y': 0.942, 'label': 'ibv'}, {'x': -0.1, 'y': 0.274, 'label': 'pyght'}, {'x': -0.196, 'y': -0.35, 'label': 'ywxvc'}, {'x': -0.728, 'y': 0.077, 'label': 'qeeouln'}, {'x': 0.775, 'y': -0.527, 'label': 'ezpuelie'}, {'x': -0.239, 'y': -0.389, 'label': 'vcav'}, {'x': -0.625, 'y': -0.321, 'label': 'qnvbw'}, {'x': 0.302, 'y': -0.043, 'label': 'dytic'}, {'x': 0.292, 'y': 0.376, 'label': 'opxqi'}, {'x': -0.076, 'y': 0.397, 'label': 'cenu'}, {'x': 0.651, 'y': -0.927, 'label': 'spul'}, {'x': -0.079, 'y': -0.801, 'label': 'usy'}, {'x': -0.297, 'y': -0.954, 'label': 'dighwfws'}, {'x': -0.359, 'y': -0.843, 'label': 'comuk'}, {'x': 0.07, 'y': 0.346, 'label': 'erahcwbd'}, {'x': -0.964, 'y': 0.168, 'label': 'xxtsv'}, {'x': -0.301, 'y': 0.946, 'label': 'fra'}, {'x': 0.928, 'y': 0.767, 'label': 'ixdtrw'}, {'x': 0.914, 'y': 0.535, 'label': 'sogmops'}, {'x': 0.808, 'y': -0.902, 'label': 'xygh'}, {'x': -0.259, 'y': -0.029, 'label': 'uiokecvh'}, {'x': -0.147, 'y': 0.436, 'label': 'bknt'}, {'x': -0.967, 'y': -0.775, 'label': 'ukuwpeo'}, {'x': 0.864, 'y': 0.319, 'label': 'hjks'}, {'x': -0.77, 'y': 0.284, 'label': 'cxvu'}, {'x': 0.211, 'y': -0.361, 'label': 'pijm'}, {'x': -0.735, 'y': -0.818, 'label': 'nawrsrd'}, {'x': -0.789, 'y': -0.631, 'label': 'vjpel'}, {'x': 0.107, 'y': -0.471, 'label': 'xjizwoj'}, {'x': 0.152, 'y': 0.115, 'label': 'wfxjhu'}, {'x': 0.953, 'y': -0.573, 'label': 'dmyqb'}, {'x': -0.28, 'y': 0.081, 'label': 'ktzaolzd'}, {'x': -0.271, 'y': 0.332, 'label': 'cmaxd'}, {'x': 0.559, 'y': 0.255, 'label': 'mfhwtd'}, {'x': -0.36, 'y': 0.179, 'label': 'xydp'}, {'x': -0.643, 'y': 0.216, 'label': 'tswkxxf'}, {'x': 0.622, 'y': 0.596, 'label': 'jqbyn'}, {'x': 0.137, 'y': 0.541, 'label': 'eryfp'}, {'x': 0.564, 'y': 0.572, 'label': 'jutwhitu'}, {'x': -0.932, 'y': 0.72, 'label': 'ndlrki'}, {'x': -0.701, 'y': -0.923, 'label': 'mathzn'}, {'x': 0.025, 'y': 0.727, 'label': 'wgfkvw'}, {'x': -0.727, 'y': 0.714, 'label': 'pfhuz'}, {'x': 0.736, 'y': -0.105, 'label': 'tsdzie'}, {'x': -0.579, 'y': -0.205, 'label': 'zmifqnq'}, {'x': 0.163, 'y': 0.107, 'label': 'riso'}, {'x': 0.055, 'y': -0.994, 'label': 'wjtjdxes'}, {'x': -0.976, 'y': 0.968, 'label': 'eqpid'}, {'x': -0.345, 'y': -0.674, 'label': 'rtn'}, {'x': 0.953, 'y': -0.863, 'label': 'fzm'}, {'x': -0.168, 'y': -0.256, 'label': 'wtwpd'}, {'x': -0.952, 'y': -0.695, 'label': 'qaajqg'}, {'x': -0.573, 'y': -0.471, 'label': 'psmnvj'}, {'x': 0.117, 'y': 0.455, 'label': 'oqamtn'}, {'x': -0.672, 'y': 0.401, 'label': 'mrnqulh'}, {'x': 0.614, 'y': 0.504, 'label': 'ukf'}, {'x': -0.427, 'y': -0.261, 'label': 'qtanvsu'}, {'x': 0.627, 'y': 0.82, 'label': 'opijg'}, {'x': -0.793, 'y': 0.38, 'label': 'svblf'}, {'x': 0.72, 'y': 0.756, 'label': 'ozp'}, {'x': -0.498, 'y': 0.274, 'label': 'jto'}, {'x': -0.799, 'y': 0.627, 'label': 'ucwz'}, {'x': 0.24, 'y': 0.856, 'label': 'frqscgdj'}, {'x': -0.709, 'y': -0.446, 'label': 'cpi'}, {'x': -0.435, 'y': -0.371, 'label': 'vrm'}, {'x': -0.349, 'y': 0.337, 'label': 'iqvllur'}, {'x': -0.784, 'y': 0.449, 'label': 'rlk'}, {'x': -0.734, 'y': 0.691, 'label': 'ztx'}, {'x': 0.274, 'y': -0.272, 'label': 'fnijmh'}, {'x': -0.746, 'y': 0.809, 'label': 'jixnv'}, {'x': 0.852, 'y': 0.077, 'label': 'eaae'}, {'x': -0.363, 'y': -0.052, 'label': 'hvxek'}, {'x': -0.401, 'y': 0.494, 'label': 'ikwcuxg'}, {'x': -0.048, 'y': -0.941, 'label': 'jabfith'}, {'x': -0.552, 'y': 0.187, 'label': 'jgnspo'}, {'x': -0.713, 'y': -0.717, 'label': 'rwjxe'}, {'x': 0.331, 'y': -0.979, 'label': 'sftsdce'}, {'x': -0.691, 'y': -0.598, 'label': 'yyxnz'}, {'x': -0.725, 'y': 0.812, 'label': 'bazehl'}, {'x': -0.55, 'y': -0.358, 'label': 'mmupuots'}, {'x': -0.14, 'y': 0.119, 'label': 'ikmstx'}, {'x': 0.879, 'y': 0.38, 'label': 'uiejhtea'}, {'x': 0.887, 'y': 0.579, 'label': 'rxfysl'}, {'x': -0.975, 'y': -0.409, 'label': 'esnurudb'}, {'x': 0.819, 'y': 0.739, 'label': 'qlekbykw'}, {'x': -0.801, 'y': 0.979, 'label': 'qkafqfjj'}, {'x': -0.676, 'y': 0.339, 'label': 'xfgnbeki'}, {'x': -0.0, 'y': -0.515, 'label': 'vweanvaj'}, {'x': -0.712, 'y': 0.536, 'label': 'ldkmh'}, {'x': -0.108, 'y': -0.661, 'label': 'dnruuw'}, {'x': -0.407, 'y': 0.618, 'label': 'xkw'}, {'x': -0.111, 'y': -0.115, 'label': 'jivrkurn'}, {'x': 0.744, 'y': 0.522, 'label': 'vfoncpsf'}, {'x': -0.604, 'y': 0.686, 'label': 'aqrnjknx'}, {'x': -0.522, 'y': 0.877, 'label': 'bkzuu'}, {'x': -0.54, 'y': 0.711, 'label': 'iceqj'}, {'x': 0.842, 'y': 0.464, 'label': 'xkwknn'}, {'x': -0.418, 'y': 0.594, 'label': 'mmmnf'}, {'x': 0.784, 'y': -0.09, 'label': 'wwy'}, {'x': -0.515, 'y': 0.651, 'label': 'egspeejx'}, {'x': -0.976, 'y': 0.16, 'label': 'ykl'}, {'x': -0.131, 'y': 0.265, 'label': 'xthzx'}, {'x': 0.04, 'y': -0.27, 'label': 'glzuyknp'}, {'x': -0.524, 'y': 0.349, 'label': 'pwvdoas'}, {'x': -0.351, 'y': 0.708, 'label': 'cvb'}, {'x': 0.675, 'y': -0.822, 'label': 'jndffy'}, {'x': -0.394, 'y': -0.658, 'label': 'tbylogul'}, {'x': 0.939, 'y': 0.002, 'label': 'twrqztc'}, {'x': 0.509, 'y': -0.693, 'label': 'diuulx'}, {'x': -0.969, 'y': 0.961, 'label': 'swqdv'}, {'x': 0.891, 'y': -0.771, 'label': 'qpa'}, {'x': -0.385, 'y': -0.625, 'label': 'vlnbuyfq'}, {'x': -0.873, 'y': 0.903, 'label': 'xotf'}, {'x': -0.768, 'y': 0.588, 'label': 'hwfvmihx'}, {'x': 0.384, 'y': -0.314, 'label': 'japhi'}, {'x': 0.826, 'y': 0.178, 'label': 'jxm'}, {'x': -0.682, 'y': -0.308, 'label': 'eficg'}, {'x': 0.665, 'y': 0.294, 'label': 'epoyqyj'}, {'x': 0.115, 'y': -0.917, 'label': 'ryp'}, {'x': -0.726, 'y': 0.982, 'label': 'juewwk'}, {'x': 0.461, 'y': 0.163, 'label': 'elzwmy'}, {'x': 0.142, 'y': 0.824, 'label': 'unt'}, {'x': -0.04, 'y': 0.67, 'label': 'xrjyjgst'}, {'x': -0.041, 'y': -0.6, 'label': 'gtvsulf'}, {'x': -0.526, 'y': 0.694, 'label': 'qoqmeicr'}, {'x': 0.837, 'y': -0.099, 'label': 'udnz'}, {'x': -0.516, 'y': -0.163, 'label': 'vcp'}, {'x': -0.862, 'y': -0.366, 'label': 'zzssahbn'}, {'x': -0.633, 'y': 0.087, 'label': 'ragqqq'}, {'x': -0.01, 'y': 0.334, 'label': 'bagznkky'}, {'x': -0.893, 'y': 0.395, 'label': 'pufworhs'}, {'x': 0.46, 'y': -0.051, 'label': 'vgig'}, {'x': 0.453, 'y': -0.33, 'label': 'idjsrgi'}, {'x': -0.817, 'y': 0.391, 'label': 'hkxrshy'}, {'x': -0.988, 'y': -0.069, 'label': 'wsqbazsx'}, {'x': -0.613, 'y': 0.962, 'label': 'pvcvchyz'}, {'x': 0.173, 'y': -0.835, 'label': 'ulu'}, {'x': 0.732, 'y': -0.477, 'label': 'uawo'}, {'x': -0.043, 'y': 0.362, 'label': 'hgy'}, {'x': 0.385, 'y': -0.065, 'label': 'vajzxapw'}, {'x': 0.13, 'y': -0.523, 'label': 'cuf'}, {'x': -0.249, 'y': 0.186, 'label': 'fun'}, {'x': 0.309, 'y': -0.174, 'label': 'xhmyyhjm'}, {'x': 0.008, 'y': 0.491, 'label': 'rupteogy'}, {'x': -0.874, 'y': -0.27, 'label': 'otlhoklk'}, {'x': -0.682, 'y': 0.643, 'label': 'dcmqzt'}, {'x': -0.301, 'y': 0.266, 'label': 'sbcz'}, {'x': 0.974, 'y': 0.046, 'label': 'zsvth'}, {'x': -0.547, 'y': 0.592, 'label': 'getafi'}, {'x': 0.436, 'y': -0.643, 'label': 'qisjbx'}, {'x': 0.787, 'y': 0.277, 'label': 'umfwvcus'}, {'x': -0.339, 'y': -0.225, 'label': 'rnr'}, {'x': 0.296, 'y': -0.269, 'label': 'rxpolh'}, {'x': -0.477, 'y': -0.605, 'label': 'adfke'}, {'x': -0.445, 'y': -0.869, 'label': 'qlnvkbux'}, {'x': -0.961, 'y': -0.481, 'label': 'eyyig'}, {'x': 0.923, 'y': -0.621, 'label': 'iapqmfbu'}, {'x': -0.386, 'y': -0.218, 'label': 'jdgaduq'}, {'x': -0.078, 'y': -0.373, 'label': 'cepjg'}, {'x': -0.571, 'y': 0.233, 'label': 'sharf'}, {'x': 0.801, 'y': 0.157, 'label': 'yaxckb'}, {'x': -0.619, 'y': 0.406, 'label': 'oph'}, {'x': 0.476, 'y': -0.473, 'label': 'yuhkdql'}, {'x': 0.551, 'y': -0.482, 'label': 'mishfzn'}, {'x': 0.895, 'y': -0.669, 'label': 'rfjc'}, {'x': -0.93, 'y': -0.142, 'label': 'eebiul'}, {'x': -0.236, 'y': 0.786, 'label': 'rhthlqbu'}, {'x': 0.197, 'y': 0.334, 'label': 'zhmseumj'}, {'x': -0.112, 'y': 0.758, 'label': 'okkr'}, {'x': -0.365, 'y': -0.443, 'label': 'llgkwh'}, {'x': 0.013, 'y': 0.974, 'label': 'wuuwzb'}, {'x': -0.683, 'y': 0.538, 'label': 'nba'}, {'x': 0.011, 'y': -0.069, 'label': 'bnn'}, {'x': -0.521, 'y': 0.893, 'label': 'ojf'}, {'x': -0.739, 'y': -0.26, 'label': 'uytwv'}, {'x': 0.376, 'y': 0.798, 'label': 'qvleupn'}, {'x': 0.363, 'y': -0.625, 'label': 'vitpiq'}, {'x': 0.693, 'y': -0.922, 'label': 'ckmrkt'}, {'x': 0.592, 'y': 0.153, 'label': 'luurd'}, {'x': -0.18, 'y': 0.228, 'label': 'llvxpwn'}, {'x': -0.314, 'y': -0.112, 'label': 'taro'}, {'x': 0.844, 'y': -0.0, 'label': 'rojcdbo'}, {'x': -0.277, 'y': -0.647, 'label': 'gyuvgd'}, {'x': 0.164, 'y': -0.843, 'label': 'mssq'}, {'x': 0.549, 'y': 0.87, 'label': 'aivamq'}, {'x': -0.53, 'y': -0.986, 'label': 'ybuw'}, {'x': 0.144, 'y': 0.896, 'label': 'wqc'}, {'x': 0.756, 'y': 0.102, 'label': 'yxcfow'}, {'x': -0.3, 'y': -0.919, 'label': 'atgjiuk'}, {'x': -0.081, 'y': 0.883, 'label': 'pglz'}, {'x': -0.866, 'y': -0.768, 'label': 'lgyi'}, {'x': 0.796, 'y': -0.694, 'label': 'wsqlsbbt'}, {'x': -0.224, 'y': -0.745, 'label': 'gkcd'}, {'x': -0.039, 'y': -0.415, 'label': 'jwfxtefr'}, {'x': -0.831, 'y': -0.871, 'label': 'qddego'}, {'x': 0.135, 'y': 0.971, 'label': 'mfc'}, {'x': 0.908, 'y': 0.585, 'label': 'tszqrkp'}, {'x': -0.405, 'y': -0.95, 'label': 'yyffhkiu'}, {'x': -0.394, 'y': 0.965, 'label': 'qog'}, {'x': 0.794, 'y': 0.385, 'label': 'vatgppq'}, {'x': -0.872, 'y': 0.044, 'label': 'fyiysr'}, {'x': -0.695, 'y': 0.645, 'label': 'xzvswl'}, {'x': -0.251, 'y': -0.989, 'label': 'ethmosng'}, {'x': -0.231, 'y': 0.336, 'label': 'ajtneex'}, {'x': 0.818, 'y': -0.232, 'label': 'rbbarsl'}, {'x': -0.559, 'y': 0.451, 'label': 'pel'}, {'x': 0.362, 'y': -0.844, 'label': 'nbqjdpn'}, {'x': -0.1, 'y': -0.016, 'label': 'wrmmz'}, {'x': 0.577, 'y': 0.186, 'label': 'ghtl'}, {'x': -0.835, 'y': -0.169, 'label': 'rjn'}, {'x': -0.474, 'y': 0.536, 'label': 'feoyc'}, {'x': 0.813, 'y': 0.313, 'label': 'echc'}, {'x': -0.852, 'y': -0.646, 'label': 'wsznih'}, {'x': -0.206, 'y': 0.912, 'label': 'opviadd'}, {'x': -0.3, 'y': -0.421, 'label': 'kka'}, {'x': 0.459, 'y': 0.453, 'label': 'zpv'}, {'x': 0.616, 'y': 0.654, 'label': 'qzte'}, {'x': 0.225, 'y': 0.237, 'label': 'rsenpwwh'}, {'x': 0.911, 'y': 0.428, 'label': 'mgy'}, {'x': -0.639, 'y': 0.423, 'label': 'xdqou'}, {'x': 0.56, 'y': -0.235, 'label': 'ere'}, {'x': -0.336, 'y': 0.596, 'label': 'rdaduf'}, {'x': 0.549, 'y': -0.691, 'label': 'nkvflonn'}, {'x': -0.537, 'y': 0.816, 'label': 'nylnjrze'}, {'x': 0.302, 'y': 0.176, 'label': 'ncu'}, {'x': 0.616, 'y': -0.598, 'label': 'uwtplyzx'}, {'x': -0.114, 'y': 0.884, 'label': 'yzu'}, {'x': -0.268, 'y': 0.835, 'label': 'ldq'}, {'x': -0.097, 'y': 0.598, 'label': 'luxapid'}, {'x': -0.696, 'y': 0.405, 'label': 'uhpljdid'}, {'x': 0.882, 'y': -0.499, 'label': 'gmb'}, {'x': 0.474, 'y': 0.839, 'label': 'pancksn'}, {'x': 0.932, 'y': -0.855, 'label': 'wznvmc'}, {'x': -0.726, 'y': 0.824, 'label': 'flkx'}, {'x': 0.965, 'y': -0.823, 'label': 'uufap'}, {'x': 0.904, 'y': -0.547, 'label': 'kqk'}, {'x': 0.6, 'y': -0.639, 'label': 'wzvgzjjp'}, {'x': 0.555, 'y': 0.137, 'label': 'hjd'}, {'x': -0.725, 'y': 0.387, 'label': 'ekwkqgpk'}, {'x': -0.795, 'y': -0.485, 'label': 'rcm'}, {'x': 0.921, 'y': 0.346, 'label': 'obmuehdt'}, {'x': 0.785, 'y': -0.907, 'label': 'dhao'}, {'x': -0.723, 'y': 0.093, 'label': 'rfsoxsur'}, {'x': -0.756, 'y': 0.047, 'label': 'cqfs'}, {'x': 0.255, 'y': -0.785, 'label': 'madlu'}, {'x': 0.83, 'y': 0.993, 'label': 'tbngyp'}, {'x': 0.544, 'y': -0.632, 'label': 'bhokinms'}, {'x': 0.911, 'y': -0.653, 'label': 'ivw'}, {'x': 0.773, 'y': -0.696, 'label': 'sqszerh'}, {'x': 0.676, 'y': 0.825, 'label': 'mdxtqsym'}, {'x': -0.07, 'y': 0.878, 'label': 'jsgzwlo'}, {'x': -0.153, 'y': -0.959, 'label': 'cdda'}, {'x': 0.387, 'y': -0.796, 'label': 'mpfinn'}, {'x': 0.381, 'y': -0.316, 'label': 'gyru'}, {'x': -0.095, 'y': -0.599, 'label': 'zeabxvo'}, {'x': -0.58, 'y': -0.256, 'label': 'qrtnpi'}, {'x': 0.915, 'y': 0.653, 'label': 'sdchj'}, {'x': -0.92, 'y': -0.364, 'label': 'beui'}, {'x': -0.693, 'y': -0.556, 'label': 'cioani'}, {'x': 0.36, 'y': -0.244, 'label': 'lczc'}, {'x': 0.851, 'y': 0.703, 'label': 'okud'}, {'x': 0.392, 'y': -0.202, 'label': 'pqwl'}, {'x': -0.865, 'y': -0.771, 'label': 'tuitvu'}, {'x': 0.57, 'y': 0.098, 'label': 'szvfal'}, {'x': -0.293, 'y': 0.557, 'label': 'ahfhgx'}, {'x': -0.648, 'y': 0.255, 'label': 'yvayctwm'}, {'x': -0.649, 'y': 0.952, 'label': 'vnw'}, {'x': 0.548, 'y': -0.372, 'label': 'pglxloj'}, {'x': -0.3, 'y': -0.753, 'label': 'cuoxmn'}, {'x': 0.397, 'y': -0.596, 'label': 'choacx'}, {'x': 0.317, 'y': 0.892, 'label': 'ymm'}, {'x': -0.107, 'y': 0.172, 'label': 'yqvkpw'}, {'x': 0.054, 'y': -0.951, 'label': 'kchl'}, {'x': -0.903, 'y': -0.025, 'label': 'anbpsi'}, {'x': 0.798, 'y': -0.461, 'label': 'rrwya'}, {'x': 0.599, 'y': 0.565, 'label': 'zmrfda'}, {'x': 0.993, 'y': 0.296, 'label': 'kvjnfr'}, {'x': -0.602, 'y': 0.948, 'label': 'ulpkz'}, {'x': 0.135, 'y': -0.446, 'label': 'bdknrwop'}, {'x': -0.378, 'y': -0.462, 'label': 'ljnkcxn'}, {'x': 0.962, 'y': 0.606, 'label': 'scke'}, {'x': 0.874, 'y': -0.946, 'label': 'pgu'}, {'x': 0.136, 'y': -0.99, 'label': 'njq'}, {'x': -0.683, 'y': 0.026, 'label': 'vcftoi'}, {'x': 0.273, 'y': -0.913, 'label': 'dywvked'}, {'x': -0.32, 'y': -0.785, 'label': 'ggecdpm'}, {'x': 0.067, 'y': 0.459, 'label': 'dflfayel'}, {'x': 0.752, 'y': 0.231, 'label': 'pihvcgo'}, {'x': 0.196, 'y': -0.904, 'label': 'wrlyae'}, {'x': -0.458, 'y': -0.122, 'label': 'xtc'}, {'x': -0.483, 'y': -0.972, 'label': 'sqmt'}, {'x': -0.7, 'y': -0.404, 'label': 'szsdav'}, {'x': 0.559, 'y': -0.793, 'label': 'uwzce'}, {'x': -0.111, 'y': 0.448, 'label': 'qcoei'}, {'x': 0.51, 'y': -0.583, 'label': 'ullmxs'}, {'x': 0.553, 'y': -0.331, 'label': 'gqlbel'}, {'x': -0.089, 'y': -0.332, 'label': 'plamn'}, {'x': -0.616, 'y': -0.578, 'label': 'ybxy'}, {'x': -0.806, 'y': -0.291, 'label': 'arok'}, {'x': -0.523, 'y': -0.375, 'label': 'ctc'}, {'x': -0.485, 'y': 0.287, 'label': 'bkrcnor'}, {'x': 0.344, 'y': 0.176, 'label': 'icnmp'}, {'x': 0.034, 'y': 0.588, 'label': 'zkjghof'}, {'x': 0.533, 'y': -0.013, 'label': 'luc'}, {'x': -0.102, 'y': 0.398, 'label': 'bqjstw'}, {'x': 0.218, 'y': 0.794, 'label': 'kpylxvau'}, {'x': -0.614, 'y': -0.182, 'label': 'ytj'}, {'x': 0.052, 'y': -0.425, 'label': 'sikdqdq'}, {'x': 0.867, 'y': -0.107, 'label': 'metcvfa'}, {'x': 0.435, 'y': -0.284, 'label': 'xgvx'}, {'x': -0.537, 'y': 0.37, 'label': 'cgxuoua'}, {'x': -0.248, 'y': -0.925, 'label': 'nwprwas'}, {'x': -0.241, 'y': -0.984, 'label': 'poajr'}, {'x': -0.089, 'y': -0.77, 'label': 'ykee'}, {'x': -0.449, 'y': 0.372, 'label': 'nxs'}, {'x': -0.239, 'y': 0.177, 'label': 'jhkxrayb'}, {'x': 0.995, 'y': -0.375, 'label': 'arqwgx'}, {'x': -0.998, 'y': 0.368, 'label': 'zilhctbr'}, {'x': 0.538, 'y': 0.598, 'label': 'bihpnb'}, {'x': 0.411, 'y': 0.533, 'label': 'rus'}, {'x': -0.981, 'y': -0.595, 'label': 'leuflnb'}, {'x': -0.723, 'y': 0.06, 'label': 'ubfj'}, {'x': 0.039, 'y': -0.165, 'label': 'eoxesey'}, {'x': -0.555, 'y': -0.937, 'label': 'ubvjg'}, {'x': -0.111, 'y': 0.649, 'label': 'mmecubj'}, {'x': -0.078, 'y': 0.788, 'label': 'jdpgrlmc'}, {'x': -0.504, 'y': -0.607, 'label': 'oaobqk'}, {'x': 0.988, 'y': 0.612, 'label': 'jwt'}, {'x': 0.019, 'y': 0.348, 'label': 'rrwdyoa'}, {'x': -0.86, 'y': 0.639, 'label': 'qyubhs'}, {'x': -0.534, 'y': -0.739, 'label': 'otpepm'}, {'x': -0.217, 'y': -0.664, 'label': 'vedxm'}, {'x': -0.615, 'y': -0.857, 'label': 'ljysdx'}, {'x': -0.219, 'y': -0.757, 'label': 'rnlydht'}, {'x': 0.521, 'y': 0.807, 'label': 'jbihoftb'}, {'x': 0.333, 'y': 0.745, 'label': 'eavdsb'}, {'x': -0.636, 'y': 0.419, 'label': 'tbeigv'}, {'x': -0.14, 'y': 0.802, 'label': 'zyn'}, {'x': -0.137, 'y': -0.596, 'label': 'tdpt'}, {'x': -0.402, 'y': -0.437, 'label': 'lxs'}, {'x': 0.773, 'y': -0.396, 'label': 'diir'}, {'x': 0.197, 'y': -0.167, 'label': 'adr'}, {'x': -0.691, 'y': 0.777, 'label': 'nqsmz'}, {'x': 0.419, 'y': -0.642, 'label': 'kbczcb'}, {'x': -0.484, 'y': 0.902, 'label': 'azvwms'}, {'x': 0.463, 'y': -0.334, 'label': 'vsev'}, {'x': -0.695, 'y': -0.987, 'label': 'njiicm'}, {'x': -0.429, 'y': 0.159, 'label': 'fckm'}, {'x': 0.341, 'y': -0.327, 'label': 'ybpaqqu'}, {'x': 0.65, 'y': 0.164, 'label': 'vvrqhyh'}, {'x': 0.814, 'y': 0.791, 'label': 'bkugzs'}, {'x': 0.349, 'y': -0.866, 'label': 'rrnjzls'}
			];*/

             // set dataset
//             console.log('dataset changed : '+dataset);
//             for (var vector in dataset){
//                console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');
//             }

             dataset = changeDataset(dataset, w, h);
//             console.log('dataset changed : '+dataset);
//             for (var vector in dataset){
//                console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');
//             }


            //Create SVG element
			var svg = d3.select("#graphCard").append("svg").attr({
        		width: w,
        		height: h,
        		id: 'svg'
			  });


			var xScale = d3.scale.linear()
         		.domain([0, d3.max(dataset, function (d) { return d.x + 10; })])
          		.range([margin.left, w - margin.right]);  // Set margins for x specific

      		// We're passing in a function in d3.max to tell it what we're maxing (y value)
     		var yScale = d3.scale.linear()
          		.domain([0, d3.max(dataset, function (d) { return d.y + 10; })])
          		.range([margin.top, h - margin.bottom]);  // Set margins for y specific


			var circleAttrs = {
          		cx: function(d) { return d.x; },
				cy: function(d) { return d.y; },
				r: radius,
				fill: 'gray'
			};


			//Create SVG circle
			svg.selectAll("circle")
				.data(dataset)
				.enter()
				.append("circle")
				.attr(circleAttrs)  // Get attributes from circleAttrs var
				.on("click", handleMouseClick)
				.on("mouseover", handleMouseOver)
				.on("mouseout", handleMouseOut);
        }

        function changeDataset(dataset, maxWidth, maxHeight){

            console.log('changing dataset ...');

            for (var vector in dataset) {
               // console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');

                // [-1;1] -> [0;2]
                dataset[vector].x = parseFloat(dataset[vector].x) + 1;
                dataset[vector].y = parseFloat(dataset[vector].y) + 1;

                // [0;2] -> [0;1]
                dataset[vector].x = dataset[vector].x / 2;
                dataset[vector].y = dataset[vector].y / 2;


                // new position
                dataset[vector].x = dataset[vector].x*maxWidth;
                dataset[vector].y = dataset[vector].y*maxHeight;

              // console.log('vector:'+vector+' ['+dataset[vector].x+' , '+dataset[vector].y+']');
            }
            displayJSONinConsole(dataset);
            console.log('... dataset changed');
            return dataset;
        }

        /**
        * update the word display in the left card
        **/
        function updateCaractDisplay(word){

            console.log('update left card');

            // update word to display as card's title
            var card = document.getElementById('caractCardTitle');
            console.log(card.innerHTML);
            console.log(word.label);
            card.innerHTML = '<b>'+word.label+'</b>';

            // display in HTML table
            clearTabHTML();
            for (var key in word){

                // récupérer le nombre de lignes actuelles
                var nbLignes = document.getElementById("caractTable").rows.length;

                // inserer à la dernière ligne
                l = document.getElementById("caractTable").insertRow(nbLignes);

                // insérer 2 cellules
                c1 = l.insertCell();
                c2 = l.insertCell();

                // insérer le texte dans chaque cellule
                c1.appendChild(document.createTextNode(key));
                c2.appendChild(document.createTextNode(word[key]));
            }
        }

        function clearTabHTML() {
            // effacer toutes les ligne

            tab = document.getElementById("caractTable");
            imax = tab.rows.length;
            for (var i=imax;i>0;i--){
                document.getElementById("caractTable").deleteRow(i-1);
            }
        }

        /**
        * get a dataset from a tsv file
        **/
        function readDataFromFile(){

            var dataset = Object;

            // get the file
            var fileData = document.getElementById("myFile");
            console.log(fileData);
            var fileURL = fileData.files[0];
            var fileReader = new FileReader();

            // read the file, remove and create a new graph
            fileReader.onload = function(e) {
                var text = fileReader.result;
                dataset = tsvJSON(text);
                console.log('tsvJSON:\n'+dataset);

                d3.select("svg").remove();
                createGraph(dataset);
            }
            fileReader.readAsText(fileURL, 'UTF-8');

           /*var dataset = d3.tsv("", function(data){
                //console.log('data:'+data);
                 data.forEach(function(d){
                   d.x = +d.x;
                   d.y = +d.y;
                 });
                // console.log('readData:'+dataset);
               });*/

           /* d3.tsv(text).then(function(dataset) {
              console.log(dataset[0]);
            });

            console.log('dataset:'+dataset);
            d3.select("svg").remove();
            createGraph([{'x':0.1,'y':0.5,'label':'leMot'}]);*/
        }

        //var tsv is the TSV file with headers
        function tsvJSON(tsv){

          var lines=tsv.split("\n");
          var result = [];
          var headers=lines[0].split("\t");

          for(var i=1;i<lines.length;i++){

              var obj = {};
              var currentline=lines[i].split("\t");

              for(var j=0;j<headers.length;j++){
                  obj[headers[j]] = currentline[j];
              }

              result.push(obj);
          }

          return result; //JavaScript object
          //return JSON.stringify(result); //JSON
        }

        function displayJSONinConsole(json){
            for (key in json){
                console.log(key+':'+json[key].x+'|'+json[key].y+'|'+json[key].label+'|'+json[key].o);
            }
        }

        function handleMouseOver(d, i) {  // Add interactivity

					// get the element SVG
					var svg = d3.select('#svg');

					// Use D3 to select element, change color and size
					var idPoint = d3.select(this).attr('id');
                    if (idPoint != 't-selected'){
                        d3.select(this).attr({
                        fill: "black",
                        r: radius * 1.2
                        });
					}

					// Specify where to put label of text
					svg.append("text").attr({
					id: "t" + d.label + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
						x: function() { return d.x - 30; },
						y: function() { return d.y - 15; }
					})
					.text(function() {
					return [d.label];  // Value of the text
					});
			}

        function handleMouseOut(d, i) {
            	// Use D3 to select element, change color back to normal
            	var idPoint = d3.select(this).attr('id');
                if (idPoint != 't-selected'){
                    d3.select(this).attr({
                         fill: "gray",
                         r: radius
                    });
                }


            	// Select text by id and then remove
           		d3.select("#t" + d.label + "-" + i).remove();  // Remove text location
          	}

        function handleMouseClick(d, i){

            // get the element SVG
            var svg = d3.select('#svg');

            // Retire la couleur de l'ancien point sélectionné
            d3.select("#t-selected").attr({
                fill: "gray",
                r: radius,
                id: ""
            });
            // Retire le texte de l'ancien point sélectionné
            d3.select("#t" + "-" + "selected")
            .text(function() {return ''})
            .attr({
                id: "t"
            });

            // Use D3 to select element, change color and size. Plus set up a specific id for this point
            d3.select(this).attr({
                fill: "blue",
                r: radius * 1.2,
                id: "t-selected"
            });

            // Specify where to put label of text
            svg.append("text").attr({
                id: "t" + "-" + "selected",  // Create an id for text so we can select it later for removing on mouseout
                x: function() { return d.x - 30; },
                y: function() { return d.y - 15; }
            })
            .text(function() {
                return [d.label];  // Value of the text
            });

            updateCaractDisplay(d);
        }