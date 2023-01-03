import styles from "../styles/style.module.css"
import { motion } from "framer-motion"
import { useState, useEffect, useRef, useLayoutEffect } from "react"

const REACTORIGSPEEDX = 10;
const REACTORIGSPEEDY = 10;

const FLUTTERORIGSPEEDX = -10;
const FLUTTERORIGSPEEDY = -10;

const LARAVELORIGSPEEDX = 10;
const LARAVELORIGSPEEDY = -10;

const PHPORIGSPEEDX = -10;
const PHPORIGSPEEDY = 10;

const NODEJSORIGSPEEDX = 10;
const NODEJSORIGSPEEDY = 10;

const MSSQLORIGSPEEDX = -10;
const MSSQLORIGSPEEDY = -10;

const JAVASCRIPTORIGSPEEDX = 10;
const JAVASCRIPTORIGSPEEDY = -10; 

const CORIGSPEEDX = -10;
const CORIGSPEEDY = 10; 

const DOTNETORIGSPEEDX = 10;
const DOTNETORIGSPEEDY = 10; 

export default function Home(){
    const [x, setX] = useState(0);
    const [speedX, setSpeedX] = useState(REACTORIGSPEEDX);
    const [y, setY] = useState(0);
    const [speedY, setSpeedY] = useState(REACTORIGSPEEDY);

    const [x2, setX2] = useState(0);
    const [speedX2, setSpeedX2] = useState(FLUTTERORIGSPEEDX);
    const [y2, setY2] = useState(0);
    const [speedY2, setSpeedY2] = useState(FLUTTERORIGSPEEDY);

    const [x3, setX3] = useState(0);
    const [speedX3, setSpeedX3] = useState(LARAVELORIGSPEEDX);
    const [y3, setY3] = useState(0);
    const [speedY3, setSpeedY3] = useState(LARAVELORIGSPEEDY);

    const [x4, setX4] = useState(0);
    const [speedX4, setSpeedX4] = useState(PHPORIGSPEEDX);
    const [y4, setY4] = useState(0);
    const [speedY4, setSpeedY4] = useState(PHPORIGSPEEDY);

    const [x5, setX5] = useState(0);
    const [speedX5, setSpeedX5] = useState(NODEJSORIGSPEEDX);
    const [y5, setY5] = useState(0);
    const [speedY5, setSpeedY5] = useState(NODEJSORIGSPEEDY);

    const [x6, setX6] = useState(0);
    const [speedX6, setSpeedX6] = useState(MSSQLORIGSPEEDX);
    const [y6, setY6] = useState(0);
    const [speedY6, setSpeedY6] = useState(MSSQLORIGSPEEDY);

    const [x7, setX7] = useState(0);
    const [speedX7, setSpeedX7] = useState(JAVASCRIPTORIGSPEEDX);
    const [y7, setY7] = useState(0);
    const [speedY7, setSpeedY7] = useState(JAVASCRIPTORIGSPEEDY);

    const [x8, setX8] = useState(0);
    const [speedX8, setSpeedX8] = useState(CORIGSPEEDX);
    const [y8, setY8] = useState(0);
    const [speedY8, setSpeedY8] = useState(CORIGSPEEDY);

    const [x9, setX9] = useState(0);
    const [speedX9, setSpeedX9] = useState(DOTNETORIGSPEEDX);
    const [y9, setY9] = useState(0);
    const [speedY9, setSpeedY9] = useState(DOTNETORIGSPEEDY);

    const [rotate, setRotate] = useState(0);

    const ref = useRef(null); 
    const flutterref = useRef();
    const laravelref = useRef();
    const phpref = useRef();
    const nodejsref = useRef();
    const mssqlref = useRef();
    const jsref = useRef();
    const cref = useRef();
    const dotnetref = useRef();
    const reactref = useRef();

    const [containerLeft, setContainerLeft] = useState(0);
    const [containerTop, setContainerTop] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const [flutterLeft, setflutterLeft] = useState(0);
    const [flutterTop, setflutterTop] = useState(0);
    const [flutterWidth, setflutterWidth] = useState(0);
    const [flutterHeight, setflutterHeight] = useState(0);

    const [laravelLeft, setlaravelLeft] = useState(0);
    const [laravelTop, setlaravelTop] = useState(0);
    const [laravelWidth, setlaravelWidth] = useState(0);
    const [laravelHeight, setlaravelHeight] = useState(0);

    const [phpLeft, setphpLeft] = useState(0);
    const [phpTop, setphpTop] = useState(0);
    const [phpWidth, setphpWidth] = useState(0);
    const [phpHeight, setphpHeight] = useState(0);

    const [nodejsLeft, setnodejsLeft] = useState(0);
    const [nodejsTop, setnodejsTop] = useState(0);
    const [nodejsWidth, setnodejsWidth] = useState(0);
    const [nodejsHeight, setnodejsHeight] = useState(0);

    const [mssqlLeft, setmssqlLeft] = useState(0);
    const [mssqlTop, setmssqlTop] = useState(0);
    const [mssqlWidth, setmssqlWidth] = useState(0);
    const [mssqlHeight, setmssqlHeight] = useState(0);

    const [jsLeft, setjsLeft] = useState(0);
    const [jsTop, setjsTop] = useState(0);
    const [jsWidth, setjsWidth] = useState(0);
    const [jsHeight, setjsHeight] = useState(0);

    const [cLeft, setcLeft] = useState(0);
    const [cTop, setcTop] = useState(0);
    const [cWidth, setcWidth] = useState(0);
    const [cHeight, setcHeight] = useState(0);

    const [dotnetLeft, setdotnetLeft] = useState(0);
    const [dotnetTop, setdotnetTop] = useState(0);
    const [dotnetWidth, setdotnetWidth] = useState(0);
    const [dotnetHeight, setdotnetHeight] = useState(0);

    const [reactLeft, setreactLeft] = useState(0);
    const [reactTop, setreactTop] = useState(0);
    const [reactWidth, setreactWidth] = useState(0);
    const [reactHeight, setreactHeight] = useState(0);

    useEffect(()=>{
        document.onreadystatechange = ()=>{
            setContainerLeft(ref.current.offsetLeft);
            setContainerTop(ref.current.offsetTop);
            setContainerWidth(ref.current.offsetWidth);
            setContainerHeight(ref.current.offsetHeight);
    
            setflutterLeft(flutterref.current.offsetLeft);
            setflutterTop(flutterref.current.offsetTop);
            setflutterWidth(flutterref.current.offsetWidth);
            setflutterHeight(flutterref.current.offsetHeight);
    
            setlaravelLeft(laravelref.current.offsetLeft);
            setlaravelTop(laravelref.current.offsetTop);
            setlaravelWidth(laravelref.current.offsetWidth);
            setlaravelHeight(laravelref.current.offsetHeight);

            setphpLeft(phpref.current.offsetLeft);
            setphpTop(phpref.current.offsetTop);
            setphpWidth(phpref.current.offsetWidth);
            setphpHeight(phpref.current.offsetHeight);

            setnodejsLeft(nodejsref.current.offsetLeft);
            setnodejsTop(nodejsref.current.offsetTop);
            setnodejsWidth(nodejsref.current.offsetWidth);
            setnodejsHeight(nodejsref.current.offsetHeight);

            setmssqlLeft(mssqlref.current.offsetLeft);
            setmssqlTop(mssqlref.current.offsetTop);
            setmssqlWidth(mssqlref.current.offsetWidth);
            setmssqlHeight(mssqlref.current.offsetHeight);

            setjsLeft(jsref.current.offsetLeft);
            setjsTop(jsref.current.offsetTop);
            setjsWidth(jsref.current.offsetWidth);
            setjsHeight(jsref.current.offsetHeight);

            setcLeft(cref.current.offsetLeft);
            setcTop(cref.current.offsetTop);
            setcWidth(cref.current.offsetWidth);
            setcHeight(cref.current.offsetHeight);

            setdotnetLeft(dotnetref.current.offsetLeft);
            setdotnetTop(dotnetref.current.offsetTop);
            setdotnetWidth(dotnetref.current.offsetWidth);
            setdotnetHeight(dotnetref.current.offsetHeight);

            setreactLeft(reactref.current.offsetLeft);
            setreactTop(reactref.current.offsetTop);
            setreactWidth(reactref.current.offsetWidth);
            setreactHeight(reactref.current.offsetHeight);
        };       
    },[]);

    return (
        <div className={styles.contentMainContainer}>
            <div className={styles.contentUpper}>
                <div className={styles.contentLeft}>
                    <div className={[styles.contentInfo, styles.paddingLeft].join(' ')}>
                        <div>
                            <div className={styles.oneLine}>Hi! I Am <div className={styles.programmerLabel}>Programmer</div></div>
                            <div>Alvin Fernando</div>
                        </div>
                        <div className={styles.personalDescription}>
                            Developing website, desktop & mobile application<br></br>
                            with 2 years expirience as Fullstack Developer
                        </div>
                        <button className={styles.btnProject}>Project</button>
                        <div className={styles.contentInfoDetail}>
                            <div className={styles.projectDone}>
                                10+ <br></br>
                                <a className={styles.lowerPart}>Project Done</a>
                            </div>
                            <div className={styles.contact}>
                                Contact<br></br>
                                <a className={styles.lowerPart}>alvinfernando29@yahoo.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                    - belok kiri / atas
                    + belok kanan / bawah
                */}
                <div className={styles.contentRight} ref = {ref}>
                    <motion.img
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x, y:y, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX(x+speedX);
                            setY(y+speedY);
                            if(x >= (containerWidth - (reactLeft-containerLeft+reactWidth))){
                                setSpeedX(-REACTORIGSPEEDX);
                            }
                            if(x <= -(reactLeft-containerLeft)){
                                setSpeedX(REACTORIGSPEEDX);
                            }
                            if(y >= (containerHeight - ((reactTop-containerTop) + reactHeight))){
                                setSpeedY(-REACTORIGSPEEDY);
                            }
                            if(y <= -(reactTop-containerTop)){
                                setSpeedY(REACTORIGSPEEDY);
                            }
                        }}
                        src="/logo192.png" ref={reactref}>
                    </motion.img>

                    <motion.img 
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x2, y:y2, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX2(x2+speedX2);
                            setY2(y2+speedY2);
                            if(x2 >= (containerWidth - (flutterLeft-containerLeft+flutterWidth))){
                                setSpeedX2(FLUTTERORIGSPEEDX);
                            }
                            if(x2 <= -(flutterLeft-containerLeft)){
                                setSpeedX2(-FLUTTERORIGSPEEDX);
                            }
                            if(y2>= (containerHeight - ((flutterTop-containerTop) + flutterHeight))){
                                setSpeedY2(FLUTTERORIGSPEEDY);
                            }
                            if(y2 <= -(flutterTop-containerTop)){
                                setSpeedY2(-FLUTTERORIGSPEEDY);
                            }
                        }}
                        className={styles.logoSize} src="/flutter.png" ref={flutterref}>
                    </motion.img>
                
                    <motion.img 
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x3, y:y3, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX3(x3+speedX3);
                            setY3(y3+speedY3);
                            if(x3 >= (containerWidth - (laravelLeft-containerLeft+laravelWidth))){
                                setSpeedX3(-LARAVELORIGSPEEDX);
                            }
                            if(x3 <= (-(laravelLeft-containerLeft))){
                                setSpeedX3(LARAVELORIGSPEEDX);
                            }
                            if(y3>= (containerHeight - ((laravelTop-containerTop) + laravelHeight))){
                                setSpeedY3(LARAVELORIGSPEEDY);
                            }
                            if(y3 <= -(laravelTop-containerTop)){
                                setSpeedY3(-LARAVELORIGSPEEDY);
                            }
                        }}
                        src="/laravel.svg" ref={laravelref}>
                    </motion.img>

                    <motion.img 
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x4, y:y4, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX4(x4+speedX4);
                            setY4(y4+speedY4);
                            if(x4 >= (containerWidth - (phpLeft-containerLeft+phpWidth))){
                                setSpeedX4(PHPORIGSPEEDX);
                            }
                            if(x4 <= (-(phpLeft-containerLeft))){
                                setSpeedX4(-PHPORIGSPEEDX);
                            }
                            if(y4 >= (containerHeight - ((phpTop-containerTop) + phpHeight))){
                                setSpeedY4(-PHPORIGSPEEDY);
                            }
                            if(y4 <= -(phpTop-containerTop)){
                                setSpeedY4(PHPORIGSPEEDY);
                            }
                        }}
                        src="/php.png" ref={phpref}>
                    </motion.img>

                    <motion.img className={styles.logoSize}
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x5, y:y5, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX5(x5+speedX5);
                            setY5(y5+speedY5);
                            if(x5 >= (containerWidth - (nodejsLeft-containerLeft+nodejsWidth))){
                                setSpeedX5(-NODEJSORIGSPEEDX);
                            }
                            if(x5 <= (-(nodejsLeft-containerLeft))){
                                setSpeedX5(NODEJSORIGSPEEDX);
                            }
                            if(y5>= (containerHeight - ((nodejsTop-containerTop) + nodejsHeight))){
                                setSpeedY5(-NODEJSORIGSPEEDY);
                            }
                            if(y5 <= -(nodejsTop-containerTop)){
                                setSpeedY5(NODEJSORIGSPEEDY);
                            }
                        }}
                        src="/Nodejs.png" ref={nodejsref}>
                    </motion.img>

                    <motion.img className={styles.logoSize} 
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x6, y:y6, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX6(x6+speedX6);
                            setY6(y6+speedY6);
                            if(x6 >= (containerWidth - (mssqlLeft-containerLeft+mssqlWidth))){
                                setSpeedX6(MSSQLORIGSPEEDX);
                            }
                            if(x6 <= (-(mssqlLeft-containerLeft))){
                                setSpeedX6(-MSSQLORIGSPEEDX);
                            }
                            if(y6>= (containerHeight - ((mssqlTop-containerTop) + mssqlHeight))){
                                setSpeedY6(MSSQLORIGSPEEDY);
                            }
                            if(y6 <= -(mssqlTop-containerTop)){
                                setSpeedY6(-MSSQLORIGSPEEDY);
                            }
                        }}
                        src="/microsoft-sql-server.png" ref={mssqlref}>
                    </motion.img>

                    <motion.img className={styles.logoSize} 
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x7, y:y7, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX7(x7+speedX7);
                            setY7(y7+speedY7);
                            if(x7 >= (containerWidth - (jsLeft-containerLeft+jsWidth))){
                                setSpeedX7(-JAVASCRIPTORIGSPEEDX);
                            }
                            if(x7 <= -(jsLeft-containerLeft)){
                                setSpeedX7(JAVASCRIPTORIGSPEEDX);
                            }
                            if(y7>= (containerHeight - ((jsTop-containerTop) + jsHeight))){
                                setSpeedY7(JAVASCRIPTORIGSPEEDY);
                            }
                            if(y7 <= -(jsTop-containerTop)){
                                setSpeedY7(-JAVASCRIPTORIGSPEEDY);
                            }
                        }}
                        src="/javascript.png" ref={jsref}>
                    </motion.img>

                    <motion.img className={styles.logoSize} 
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x8, y:y8, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX8(x8+speedX8);
                            setY8(y8+speedY8);
                            if(x8 >= (containerWidth - (cLeft-containerLeft+cWidth))){
                                setSpeedX8(CORIGSPEEDX);
                            }
                            if(x8 <= -(cLeft-containerLeft)){
                                setSpeedX8(-CORIGSPEEDX);
                            }
                            if(y8>= (containerHeight - ((cTop-containerTop) + cHeight))){
                                setSpeedY8(-CORIGSPEEDY);
                            }
                            if(y8 <= -(cTop-containerTop)){
                                setSpeedY8(CORIGSPEEDY);
                            }
                        }}
                        src="/c.png" ref={cref}>
                    </motion.img>

                    <motion.img className={styles.logoSize}
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:0.9 }}
                        animate={{ x:x9, y:y9, rotate:rotate }}
                        transition={{ ease : "linear"}}
                        onAnimationComplete={()=>{
                            setRotate(rotate+10);
                            setX9(x9+speedX9);
                            setY9(y9+speedY9);
                            if(x9 >= (containerWidth - (dotnetLeft-containerLeft+dotnetWidth))){
                                setSpeedX9(-DOTNETORIGSPEEDX);
                            }
                            if(x9 <= -(dotnetLeft-containerLeft)){
                                setSpeedX9(DOTNETORIGSPEEDX);
                            }
                            if(y9>= (containerHeight - ((dotnetTop-containerTop) + dotnetHeight))){
                                setSpeedY9(-DOTNETORIGSPEEDY);
                            }
                            if(y9 <= -(dotnetTop-containerTop)){
                                setSpeedY9(DOTNETORIGSPEEDY);
                            }
                        }}
                        src="dotnet.png" ref={dotnetref}>
                    </motion.img>
                </div>
            </div>
            <div className={[styles.projectStatistics, styles.paddingLeft].join(' ')}>
                    <div className={styles.projectStatisticsLeft}>
                        Project<br></br>
                        Statistics<br></br><br></br>
                        <button className={styles.btnKnowMore}>Know More</button>
                    </div>
                    <div className={styles.projectStatisticsRight}>
                        <div className={styles.customRow}><a>Website Application</a> <a>4</a></div>
                        <div className={styles.solidLine}></div>
                        <div className={styles.customRow}><a>Mobile Application</a> <a>2</a></div>
                        <div className={styles.solidLine}></div>
                        <div className={styles.customRow}><a>Desktop Application</a> <a>4</a></div>
                        <div className={styles.solidLine}></div>
                    </div>
                </div>
        </div>
    );
}