<template>
    <div class="site_header__primary-nav">
        <ul id="menu-main-menu-1" class="nav yamm">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8092">
                <NuxtLink title="영화" to="/movie">영화</NuxtLink>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-161947">
                <NuxtLink to="/tv-shows/">TV</NuxtLink>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8093">
                        <NuxtLink title="드라마" to="/k-drama/">드라마</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094">
                        <NuxtLink title="예능" to="/k-show/">예능</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095">
                        <NuxtLink title="시사다큐" to="/k-sisa/">시사</NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282">
                <NuxtLink to="/u-drama/">미드</NuxtLink>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8098">
                <NuxtLink title="OTT/Web" to="/ott-web/">OTT</NuxtLink>
            </li>
        </ul>
    </div>
</template>