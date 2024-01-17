import Category from "../../3COMPONENTS/Category/Category";
import { useEffect, useState } from "react";
import cl from './RenderCategoriesCards.module.css';
import { onValue, ref } from "@firebase/database";
import { database } from "../../FireBase/FireBase";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const RenderCategoriesCards = () => {
    const [categories, setCategories] = useState([]);
    const [fetching, setFetching] = useState(true);
    const swiper = useSwiper()

    console.log(document.body.style.width);

    useEffect(() => {
        const refCategories = ref(database, 'MovieCategory');

        onValue(refCategories, (snapshot) => {
            if (snapshot.exists()) {
                setCategories(Object.values(snapshot.val()));
                setFetching(false);
            }
        }, { onlyOnce: true });
    }, [])

    function renderSkeleton() {
        const skeletonLoaders = []

        for (let i = 0; i < 15; i++) {
            skeletonLoaders.push(
                <div key={i} className={cl.skeletonConatiner}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444" display="flex">
                        <Skeleton count={1} width={"195px"} height={"195px"} borderRadius={"30px"} />
                    </SkeletonTheme>
                </div>)
        }

        return skeletonLoaders
    }

    return (
        <>
            {
                <div className={cl.container} >
                    <div className={cl.categoryString}>
                        {
                            fetching ?
                                renderSkeleton()
                                :
                                <>
                                    {
                                        categories.map((title) => {
                                            return (
                                                <Swiper spaceBetween={200}
                                                    slidesPerView={3}
                                                    onSlideChange={() => console.log('slide change')}
                                                    onSwiper={(swiper) => console.log(swiper)}>
                                                    <SwiperSlide><Category key={title} title={title} path={title} /></SwiperSlide>
                                                    <button onClick={() => swiper.slideNext()}>next</button>
                                                </Swiper>
                                            )
                                        })
                                    }
                                </>

                        }
                    </div>
                    <div className={cl.recommendation}>
                        <StringMovies category="Рекомендуем" limit={14} />
                    </div>
                </div>
            }
        </>
    );
};

export default RenderCategoriesCards;