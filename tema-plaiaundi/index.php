<?php get_header(); ?>

    <main>

        <?php if (have_posts()) { ?>

            <?php while (have_posts()) { ?>

                <?php the_post(); ?>

                <article>

                    <h2>
                        <a href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                        </a>
                    </h2>

                    <p>
                        Categorías: <?php the_category(', '); ?>
                    </p>
                       <p>
                        Etiquetas: <?php the_tags('#',' ?'); ?>
                    </p>

                    <?php the_excerpt(); ?>

                    <?php if (has_post_thumbnail()) { ?>
                        <?php the_post_thumbnail(); ?>
                    <?php } ?>

                    <p>
                        Publicado por <?php the_author(); ?>
                        el <?php echo get_the_date(); ?>
                    </p>


                </article>

            <?php } ?>

        <?php } else { ?>

            <p>No hay entradas disponibles.</p>

        <?php } ?>

    </main>

<?php get_footer(); ?>